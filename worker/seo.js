// Server-rendered SEO metadata and sitemap - the Worker port of the SEO
// helpers in server.js. The SPA ships one index.html; the Worker rewrites its
// head tags per route so crawlers and link previews see real metadata.

import { createError } from "./util.js";
import { ARTICLE_IMAGE_PATHS, localizedArticleField, publicArticles } from "./articles.js";

export const SITE_ORIGIN = "https://cyri.online";

export const SEO_ROUTES = [
  {
    page: "home",
    paths: { de: "/de/", en: "/en/" },
    titles: {
      de: "CYRI | Umweltbildung & 17 Nachhaltigkeitsziele für Jugendliche",
      en: "CYRI | Environmental Education & 17 SDGs for Young People",
    },
    descriptions: {
      de: "CYRI bietet jugendgeführte Umweltbildung zu Klima, Natur und allen 17 Nachhaltigkeitszielen – mit fundierten Artikeln und interaktivem Lernen.",
      en: "CYRI offers youth-led environmental education on climate, nature and all 17 Sustainable Development Goals through sourced articles and interactive learning.",
    },
  },
  {
    page: "learn",
    paths: { de: "/de/lernen", en: "/en/learn" },
    titles: {
      de: "Umweltbildung & Klima-Lernen für Jugendliche | CYRI",
      en: "Environmental & Climate Learning for Teens | CYRI",
    },
    descriptions: {
      de: "Kostenlose Umwelt- und Klimabildung für Jugendliche von 15 bis 19 Jahren, Lehrkräfte und Unterricht – interaktiv verbunden mit allen 17 Nachhaltigkeitszielen.",
      en: "Free environmental and climate learning for ages 15-19, teachers and classrooms with interactive challenges linked to all 17 Sustainable Development Goals.",
    },
  },
  {
    page: "research",
    paths: { de: "/de/assistent", en: "/en/assistant" },
    titles: {
      de: "CYRI-Assistent für Umweltfragen | CYRI",
      en: "CYRI Environmental Assistant | CYRI",
    },
    descriptions: {
      de: "Stelle Umwelt- und Klimafragen und erhalte Antworten auf Basis der fundierten CYRI-Artikel.",
      en: "Ask environmental and climate questions and receive answers based on sourced CYRI articles.",
    },
  },
  {
    page: "articles",
    paths: { de: "/de/artikel", en: "/en/articles" },
    titles: {
      de: "Umweltwissen: Klima, Natur & Nachhaltigkeit | CYRI",
      en: "Climate, Nature & Sustainability Articles | CYRI",
    },
    descriptions: {
      de: "Fundierte Umweltartikel für Jugendliche über Klimaschutz, Biodiversität, Meere, erneuerbare Energie, nachhaltige Städte und die 17 Nachhaltigkeitsziele.",
      en: "Source-based environmental articles for young people about climate action, biodiversity, oceans, renewable energy, sustainable cities and the 17 SDGs.",
    },
  },
  {
    page: "about",
    paths: { de: "/de/ueber-uns", en: "/en/about" },
    titles: {
      de: "Über CYRI | Jugendgeführte Umweltbildung",
      en: "About CYRI | Youth-led Environmental Education",
    },
    descriptions: {
      de: "Lerne CYRI kennen: eine unabhängige, jugendgeführte Plattform für verständliche und fundierte Umweltbildung aus Deutschland.",
      en: "Meet CYRI, an independent youth-led platform for understandable, source-based environmental education from Germany.",
    },
  },
  {
    page: "imprint",
    paths: { de: "/de/impressum", en: "/en/imprint" },
    titles: { de: "Impressum | CYRI", en: "Imprint | CYRI" },
    descriptions: {
      de: "Impressum und verantwortliche Kontaktinformationen der Climate Youth Research Initiative.",
      en: "Legal notice and responsible contact information for the Climate Youth Research Initiative.",
    },
  },
  {
    page: "privacy",
    paths: { de: "/de/datenschutz", en: "/en/privacy" },
    titles: { de: "Datenschutz | CYRI", en: "Privacy | CYRI" },
    descriptions: {
      de: "Datenschutzhinweise für die CYRI-Website, Kontaktanfragen und interaktive Funktionen.",
      en: "Privacy information for the CYRI website, contact requests and interactive features.",
    },
  },
  {
    page: "publish",
    paths: { de: "/de/publizieren", en: "/en/publish" },
    titles: { de: "Publizieren | CYRI", en: "Publish | CYRI" },
    descriptions: {
      de: "Geschützter Redaktionsbereich von CYRI.",
      en: "Protected CYRI publishing area.",
    },
    noindex: true,
  },
];

export const MERGED_CONTACT_PATHS = {
  "/de/kontakt": "/de/ueber-uns",
  "/en/contact": "/en/about",
};

// Die Kontaktseite ist in "Ueber uns" aufgegangen; alte Links und Suchtreffer
// sollen dort landen statt auf einer 404.
export function mergedContactTarget(pathname) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return MERGED_CONTACT_PATHS[normalized] || null;
}

export function seoRouteForPath(pathname) {
  if (pathname === "/") {
    const home = SEO_ROUTES.find((route) => route.page === "home");
    return { ...home, language: "en", canonicalPath: "/", xDefault: true };
  }
  for (const route of SEO_ROUTES) {
    for (const language of ["de", "en"]) {
      const cleanPath = route.paths[language].replace(/\/+$/, "") || "/";
      const requestPath = pathname.replace(/\/+$/, "") || "/";
      if (requestPath === cleanPath) {
        return { ...route, language, canonicalPath: route.paths[language] };
      }
    }
  }
  return null;
}

export function articleRouteForPath(pathname) {
  const match = pathname.match(/^\/(de\/artikel|en\/articles)\/([^/]+)\/?$/);
  if (!match) return null;
  return {
    page: "articles",
    language: match[1].startsWith("de/") ? "de" : "en",
    articleId: decodeURIComponent(match[2]),
  };
}

function articleImageUrl(article) {
  const imageId = String(article?.imageId || "");
  if (imageId.startsWith("upload:")) {
    return `${SITE_ORIGIN}/uploads/${encodeURIComponent(imageId.slice(7))}`;
  }
  return `${SITE_ORIGIN}${ARTICLE_IMAGE_PATHS[imageId] || ARTICLE_IMAGE_PATHS.coral}`;
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function structuredDataForSeo({ route, article, canonicalUrl, title, description, image }) {
  const graph = [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: "CYRI",
      alternateName: "Climate Youth Research Initiative",
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/assets/cyri-logo-512.png`,
      description:
        route.language === "de"
          ? "Jugendgeführte Umweltbildung zu Klima, Natur und den 17 Nachhaltigkeitszielen."
          : "Youth-led environmental education about climate, nature and the 17 Sustainable Development Goals.",
      areaServed: "Germany",
      email: "climateyri@gmail.com",
      founder: [
        { "@type": "Person", name: "Tobias Göppert" },
      ],
      sameAs: [
        "https://www.instagram.com/cyri.de/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: "CYRI",
      alternateName: "Climate Youth Research Initiative",
      inLanguage: ["de", "en"],
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ];

  if (article) {
    graph.push({
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: canonicalUrl,
      headline: title.replace(/\s+\|\s+CYRI$/, ""),
      description,
      image: [image],
      datePublished: article.date,
      dateModified: String(article.updatedAt || article.date).slice(0, 10),
      inLanguage: route.language,
      isAccessibleForFree: true,
      author: { "@id": `${SITE_ORIGIN}/#organization` },
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    });
  } else if (route.page === "learn") {
    graph.push({
      "@type": "LearningResource",
      "@id": `${canonicalUrl}#learning-resource`,
      name: title,
      description,
      url: canonicalUrl,
      inLanguage: route.language,
      isAccessibleForFree: true,
      educationalLevel: "Secondary education",
      typicalAgeRange: "15-19",
      learningResourceType: ["Interactive learning", "Educational game"],
      about: ["Environmental education", "Climate education", "Sustainable Development Goals"],
      provider: { "@id": `${SITE_ORIGIN}/#organization` },
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c"
  );
}

function replaceHeadTag(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

async function readIndexHtml(env, origin) {
  const response = await env.ASSETS.fetch(new URL("/index.html", origin));
  if (!response.ok) {
    throw createError(500, "Index template is unavailable.");
  }
  return response.text();
}

export async function renderSeoHtml(env, origin, pathname) {
  let route = seoRouteForPath(pathname);
  const articleRoute = articleRouteForPath(pathname);
  let article = null;
  if (articleRoute) {
    article = (await publicArticles(env, origin)).find(
      (item) => item.id === articleRoute.articleId
    );
    if (!article) throw createError(404, "Article not found.");
    const listing = SEO_ROUTES.find((item) => item.page === "articles");
    route = {
      ...listing,
      ...articleRoute,
      canonicalPath: `${listing.paths[articleRoute.language]}/${encodeURIComponent(article.id)}`,
    };
  }
  if (!route) return null;

  const language = route.language;
  const title = article
    ? `${localizedArticleField(article, "title", language)} | CYRI`
    : route.titles[language];
  const description = article
    ? localizedArticleField(article, "summary", language)
    : route.descriptions[language];
  const canonicalUrl = `${SITE_ORIGIN}${route.canonicalPath}`;
  const alternateDe = article
    ? `${SITE_ORIGIN}/de/artikel/${encodeURIComponent(article.id)}`
    : `${SITE_ORIGIN}${route.paths.de}`;
  const alternateEn = article
    ? `${SITE_ORIGIN}/en/articles/${encodeURIComponent(article.id)}`
    : `${SITE_ORIGIN}${route.paths.en}`;
  const image = article
    ? articleImageUrl(article)
    : `${SITE_ORIGIN}/assets/photos/coral-reef-bleaching-hd.webp`;
  const imageAlt = article
    ? localizedArticleField(article, "title", language)
    : language === "de"
      ? "CYRI Umweltbildung zu Klima, Natur und Nachhaltigkeit"
      : "CYRI environmental education about climate, nature and sustainability";
  const robots = route.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  let html = await readIndexHtml(env, origin);

  html = replaceHeadTag(html, /<html lang="[^"]+">/, `<html lang="${language}">`);
  html = replaceHeadTag(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtmlAttribute(title)}</title>`
  );
  html = replaceHeadTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtmlAttribute(description)}" />`
  );
  html = replaceHeadTag(
    html,
    /<meta name="robots" content="[^"]*"\s*\/>/,
    `<meta name="robots" content="${robots}" />`
  );
  html = replaceHeadTag(
    html,
    /<meta name="cyri-initial-page" content="[^"]*"\s*\/>/,
    `<meta name="cyri-initial-page" content="${route.page}" />`
  );
  html = replaceHeadTag(
    html,
    /<meta name="cyri-initial-language" content="[^"]*"\s*\/>/,
    `<meta name="cyri-initial-language" content="${language}" />`
  );
  const metaReplacements = [
    ["og:title", title],
    ["og:description", description],
    ["og:type", article ? "article" : "website"],
    ["og:locale", language === "de" ? "de_DE" : "en_GB"],
    ["og:url", canonicalUrl],
    ["og:image", image],
    ["og:image:alt", imageAlt],
  ];
  for (const [property, value] of metaReplacements) {
    html = replaceHeadTag(
      html,
      new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*\\/>`),
      `<meta property="${property}" content="${escapeHtmlAttribute(value)}" />`
    );
  }
  for (const [name, value] of [
    ["twitter:title", title],
    ["twitter:description", description],
    ["twitter:image", image],
    ["twitter:image:alt", imageAlt],
  ]) {
    html = replaceHeadTag(
      html,
      new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"\\s*\\/>`),
      `<meta name="${name}" content="${escapeHtmlAttribute(value)}" />`
    );
  }
  html = replaceHeadTag(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  html = replaceHeadTag(
    html,
    /<link rel="alternate" hreflang="de" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="de" href="${alternateDe}" />`
  );
  html = replaceHeadTag(
    html,
    /<link rel="alternate" hreflang="en" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="en" href="${alternateEn}" />`
  );
  html = replaceHeadTag(
    html,
    /<script type="application\/ld\+json" id="seo-structured-data">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="seo-structured-data">${structuredDataForSeo({
      route,
      article,
      canonicalUrl,
      title,
      description,
      image,
    })}</script>`
  );
  return html;
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function sitemapXml(env, origin) {
  const entries = [{ loc: `${SITE_ORIGIN}/`, lastmod: "2026-07-27" }];
  SEO_ROUTES.filter((route) => !route.noindex).forEach((route) => {
    entries.push(
      { loc: `${SITE_ORIGIN}${route.paths.de}`, lastmod: "2026-07-27" },
      { loc: `${SITE_ORIGIN}${route.paths.en}`, lastmod: "2026-07-27" }
    );
  });
  (await publicArticles(env, origin)).forEach((article) => {
    const lastmod = String(article.updatedAt || article.date || "2026-07-27").slice(0, 10);
    entries.push(
      { loc: `${SITE_ORIGIN}/de/artikel/${encodeURIComponent(article.id)}`, lastmod },
      { loc: `${SITE_ORIGIN}/en/articles/${encodeURIComponent(article.id)}`, lastmod }
    );
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      ({ loc, lastmod }) =>
        `  <url><loc>${xmlEscape(loc)}</loc><lastmod>${xmlEscape(lastmod)}</lastmod></url>`
    ),
    "</urlset>",
    "",
  ].join("\n");
}
