// Storage layer for the Cloudflare Worker backend.
//
// The self-hosted backend keeps its state in data/*.json plus data/uploads/.
// Workers have no writable filesystem, so the same state lives in a single KV
// namespace (binding CYRI_DATA):
//
//   articles                  editor-created articles (JSON array)
//   ratelimit:<scope>:<hash>  request timestamps for one client, expires with the window
//   upload:<file>.jpg         uploaded cover image bytes

import { clientAddress, createError, sha256 } from "./util.js";

const ARTICLES_KEY = "articles";
const MIN_KV_TTL_SECONDS = 60;

export async function readArticles(env) {
  const stored = await env.CYRI_DATA.get(ARTICLES_KEY, "json");
  return Array.isArray(stored) ? stored : [];
}

export async function writeArticles(env, articles) {
  await env.CYRI_DATA.put(ARTICLES_KEY, JSON.stringify(articles));
}

export async function enforceRateLimit(env, request, scope, windowMs, maximum, message) {
  const key = `ratelimit:${scope}:${await sha256(clientAddress(request))}`;
  const now = Date.now();
  const stored = await env.CYRI_DATA.get(key, "json");
  const recent = (Array.isArray(stored) ? stored : []).filter(
    (timestamp) => Number.isFinite(timestamp) && now - timestamp < windowMs
  );

  if (recent.length >= maximum) {
    throw createError(429, message);
  }

  recent.push(now);
  await env.CYRI_DATA.put(key, JSON.stringify(recent), {
    expirationTtl: Math.max(MIN_KV_TTL_SECONDS, Math.ceil(windowMs / 1000)),
  });
}

export async function putUpload(env, filename, bytes) {
  await env.CYRI_DATA.put(`upload:${filename}`, bytes);
}

export async function getUpload(env, filename) {
  return env.CYRI_DATA.get(`upload:${filename}`, "arrayBuffer");
}

export async function uploadExists(env, filename) {
  const stored = await env.CYRI_DATA.get(`upload:${filename}`, "stream");
  if (!stored) return false;
  await stored.cancel();
  return true;
}
