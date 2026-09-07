// CYRI on Cloudflare Workers.
//
// Static files come from the asset store built by scripts/build-cloudflare.mjs;
// this Worker serves the API, the uploaded cover images, the generated sitemap
// and every HTML route that needs server-rendered SEO tags. It mirrors the
// behaviour of the self-hosted backends (server.js / backend.php).

import {
  createError,
  errorResponse,
  jsonResponse,
  securityHeaders,
  readRequestJson,
  cleanText,
  timingSafeHexCompare,
  sha256,
  randomHex,
} from "./util.js";
import {
  enforceRateLimit,
  getUpload,
  putUpload,
  readArticles,
  writeArticles,
} from "./store.js";
import {
  isArticlePublished,
  normalizeArticle,
  sortArticlesByDate,
} from "./articles.js";
import { createPublishSession, currentPublishPasswordHash, requirePublishSession } from "./session.js";
import { answerResearchQuestion, translateArticle } from "./openai.js";
import {
  renderSeoHtml,
  seoRouteForPath,
  articleRouteForPath,
  mergedContactTarget,
  sitemapXml,
} from "./seo.js";

const MAX_UPLOAD_SIZE = 2.5 * 1024 * 1024;
const RESEARCH_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RESEARCH_RATE_LIMIT_MAX = 12;
const AUTH_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const AUTH_RATE_LIMIT_MAX = 8;

// backend.php?route=/x is the Apache entry point; app.js still tries it first.
function normalizeApiPath(url) {
  if (url.pathname !== "/backend.php") {
    return;
  }

  const route = url.searchParams.get("route") || "/health";
  url.pathname = `/api/${route.replace(/^\/+/, "")}`;
}

function decodeBase64Jpeg(dataUrl) {
  const match = String(dataUrl || "").match(/^data:image\/jpeg;base64,([A-Za-z0-9+/]+={0,2})$/);
  if (!match) {
    throw createError(400, "Uploaded image must be a JPEG.");
  }

  let binary;
  try {
    binary = atob(match[1]);
  } catch {
    throw createError(400, "Uploaded image must be a JPEG.");
  }

  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  if (
    bytes.length === 0 ||
    bytes.length > MAX_UPLOAD_SIZE ||
    bytes[0] !== 0xff ||
    bytes[1] !== 0xd8 ||
    bytes[2] !== 0xff
  ) {
    throw createError(400, "Uploaded image is invalid or too large.");
  }

  return bytes;
}

async function saveUploadedImage(env, input) {
  const bytes = decodeBase64Jpeg(input?.dataUrl);
  const filename = `${randomHex(16)}.jpg`;
  await putUpload(env, filename, bytes);

  return {
    imageId: `upload:${filename}`,
    credit: cleanText(input?.credit, 160) || "CYRI",
  };
}

async function handleApi(request, env, url) {
  const origin = url.origin;

  if (url.pathname === "/api/health" && request.method === "GET") {
    return jsonResponse(200, { ok: true });
  }

  if (url.pathname === "/api/articles" && request.method === "GET") {
    const articles = await readArticles(env);
    return jsonResponse(200, {
      articles: sortArticlesByDate(articles.filter((article) => isArticlePublished(article))),
    });
  }

  if (url.pathname === "/api/auth/publish" && request.method === "POST") {
    const configuredHash = await currentPublishPasswordHash(env);
    if (!configuredHash) {
      throw createError(503, "Publishing access is not configured.");
    }
    await enforceRateLimit(
      env,
      request,
      "auth",
      AUTH_RATE_LIMIT_WINDOW_MS,
      AUTH_RATE_LIMIT_MAX,
      "Too many login attempts. Try again later."
    );
    const body = await readRequestJson(request);
    const passwordHash = await sha256(String(body.password || ""));

    if (!timingSafeHexCompare(passwordHash, configuredHash)) {
      throw createError(401, "Wrong password.");
    }

    return jsonResponse(200, await createPublishSession(env));
  }

  if (url.pathname === "/api/articles" && request.method === "POST") {
    await requirePublishSession(env, request);
    const body = await readRequestJson(request);
    const articles = await readArticles(env);
    const article = await normalizeArticle(env, body, articles);
    await writeArticles(env, [article, ...articles]);
    return jsonResponse(201, {
      article,
      scheduled: !isArticlePublished(article),
    });
  }

  if (url.pathname === "/api/translate" && request.method === "POST") {
    await requirePublishSession(env, request);
    const body = await readRequestJson(request);
    return jsonResponse(200, { translation: await translateArticle(env, body) });
  }

  if (url.pathname === "/api/research" && request.method === "POST") {
    const body = await readRequestJson(request);
    const enforceResearchLimit = () =>
      enforceRateLimit(
        env,
        request,
        "research",
        RESEARCH_RATE_LIMIT_WINDOW_MS,
        RESEARCH_RATE_LIMIT_MAX,
        "Too many research questions. Try again later."
      );
    return jsonResponse(
      200,
      await answerResearchQuestion(env, origin, body, enforceResearchLimit)
    );
  }

  if (url.pathname === "/api/uploads" && request.method === "POST") {
    await requirePublishSession(env, request);
    const body = await readRequestJson(request);
    return jsonResponse(201, await saveUploadedImage(env, body));
  }

  return jsonResponse(404, { error: "API route not found." });
}

function htmlResponse(request, body, headers) {
  return new Response(request.method === "HEAD" ? null : body, {
    status: 200,
    headers: { ...securityHeaders(), ...headers },
  });
}

async function handleStatic(request, env, url) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    throw createError(405, "Method not allowed.");
  }

  let requestPath;
  try {
    requestPath = decodeURIComponent(url.pathname);
  } catch {
    throw createError(400, "Invalid URL.");
  }
  if (requestPath.includes("\0") || requestPath.includes("\\") || requestPath.includes("..")) {
    throw createError(404, "Not found.");
  }

  const mergedTarget = mergedContactTarget(requestPath);
  if (mergedTarget) {
    return Response.redirect(new URL(mergedTarget, url.origin).toString(), 301);
  }

  if (requestPath === "/sitemap.xml") {
    return htmlResponse(request, await sitemapXml(env, url.origin), {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    });
  }

  const uploadMatch = requestPath.match(/^\/uploads\/([a-f0-9]{32}\.jpg)$/);
  if (uploadMatch) {
    const image = await getUpload(env, uploadMatch[1]);
    if (!image) {
      throw createError(404, "Image not found.");
    }
    return new Response(request.method === "HEAD" ? null : image, {
      status: 200,
      headers: {
        ...securityHeaders(),
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  if (seoRouteForPath(requestPath) || articleRouteForPath(requestPath)) {
    const html = await renderSeoHtml(env, url.origin, requestPath);
    if (html !== null) {
      return htmlResponse(request, html, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      });
    }
  }

  const assetResponse = await env.ASSETS.fetch(request);
  if (assetResponse.status === 404) {
    throw createError(404, "Not found.");
  }
  return assetResponse;
}

// www.cyri.online is attached to the same Worker; canonical URLs use the apex,
// so send visitors there instead of serving the site twice.
function apexRedirect(url) {
  if (!url.hostname.startsWith("www.")) return null;
  const target = new URL(url);
  target.hostname = url.hostname.slice(4);
  return Response.redirect(target.toString(), 301);
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const redirect = apexRedirect(url);
      if (redirect) return redirect;

      normalizeApiPath(url);

      if (url.pathname.startsWith("/api/")) {
        return await handleApi(request, env, url);
      }

      return await handleStatic(request, env, url);
    } catch (error) {
      return errorResponse(error);
    }
  },
};
