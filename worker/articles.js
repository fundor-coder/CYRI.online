// Article validation, merging and ordering - the Worker port of the article
// helpers in server.js.

import { createError, cleanText, cleanMultilineText } from "./util.js";
import { readArticles, uploadExists } from "./store.js";

export const STATIC_ARTICLE_PATHS = [
  "/content/articles.json",
  "/content/articles-2026-expansion.json",
];

const allowedCategories = new Set(["policy", "energy", "biodiversity", "cities", "marine"]);
const allowedImages = new Set([
  "coral",
  "marine-debris",
  "mangrove",
  "glacier",
  "solar",
  "coral-bleaching-2023",
  "seagrass-meadow",
  "sponge-city-rain-garden",
]);

export const ARTICLE_IMAGE_PATHS = {
  coral: "/assets/photos/coral-reef-bleaching-hd.webp",
  "marine-debris": "/assets/photos/ocean-plastic-hd.jpg",
  mangrove: "/assets/photos/mangrove-forest-hd.jpg",
  glacier: "/assets/photos/aletsch-glacier-hd.jpg",
  solar: "/assets/photos/offshore-wind-hd.jpg",
  "coral-bleaching-2023": "/assets/photos/coral-bleaching-florida-2023-hd.jpg",
  "seagrass-meadow": "/assets/photos/seagrass-meadow-zostera-hd.jpg",
  "sponge-city-rain-garden": "/assets/photos/sponge-city-rain-garden-hd.jpg",
};

export function articlePublishTime(article) {
  const publishAt = Date.parse(String(article?.publishAt || ""));
  if (!Number.isNaN(publishAt)) return publishAt;

  const date = Date.parse(`${article?.date || ""}T12:00:00Z`);
  return Number.isNaN(date) ? 0 : date;
}

export function isArticlePublished(article, now = Date.now()) {
  if (!article?.publishAt) return true;
  const publishAt = Date.parse(String(article.publishAt));
  return !Number.isNaN(publishAt) && publishAt <= now;
}

export function sortArticlesByDate(articles) {
  return [...articles].sort((a, b) => articlePublishTime(b) - articlePublishTime(a));
}

export function localizedArticleField(article, field, language) {
  const value = article?.[field];
  return String(value?.[language] || value?.de || value?.en || "").trim();
}

export async function loadStaticArticles(env, origin) {
  const collections = await Promise.all(
    STATIC_ARTICLE_PATHS.map(async (assetPath) => {
      try {
        const response = await env.ASSETS.fetch(new URL(assetPath, origin));
        if (!response.ok) return [];
        const parsed = await response.json();
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    })
  );
  return collections.flat();
}

// Editor-created articles first, so a republished id keeps the newer version.
export async function publicArticles(env, origin) {
  const [stored, builtIn] = await Promise.all([
    readArticles(env),
    loadStaticArticles(env, origin),
  ]);
  const unique = new Map();
  [...stored, ...builtIn]
    .filter((article) => isArticlePublished(article))
    .forEach((article) => {
      if (article?.id && !unique.has(article.id)) unique.set(article.id, article);
    });
  return sortArticlesByDate([...unique.values()]);
}

function validateDate(value) {
  const date = cleanText(value, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw createError(400, "A valid date is required.");
  }

  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw createError(400, "A valid date is required.");
  }

  return date;
}

function validatePublishAt(value) {
  const publishAt = cleanText(value, 40);
  const timestamp = Date.parse(publishAt);
  if (!publishAt || Number.isNaN(timestamp)) {
    throw createError(400, "A valid publication time is required.");
  }

  return new Date(timestamp).toISOString();
}

function slugify(value) {
  return cleanText(value, 120)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
}

function createArticleId(title, existingArticles) {
  const slug = slugify(title) || "cyri-article";
  let id = `${slug}-${Date.now().toString(36)}`;
  let counter = 2;

  while (existingArticles.some((article) => article.id === id)) {
    id = `${slug}-${Date.now().toString(36)}-${counter}`;
    counter += 1;
  }

  return id;
}

export async function normalizeArticle(env, input, existingArticles) {
  const titleDe = cleanText(input?.title?.de, 180);
  const titleEn = cleanText(input?.title?.en || titleDe, 180);
  const summaryDe = cleanText(input?.summary?.de, 520);
  const summaryEn = cleanText(input?.summary?.en || summaryDe, 520);
  const bodyDe = cleanMultilineText(input?.body?.de, 20000);
  const bodyEn = cleanMultilineText(input?.body?.en || bodyDe, 20000);
  const category = cleanText(input?.category, 40);
  const imageId = cleanText(input?.imageId, 80);
  const imageCredit = cleanText(input?.imageCredit, 160);

  if (!titleDe || !summaryDe || !bodyDe) {
    throw createError(400, "German title, summary and article text are required.");
  }

  if (!allowedCategories.has(category)) {
    throw createError(400, "Unknown article category.");
  }

  const customImageMatch = imageId.match(/^upload:([a-f0-9]{32}\.jpg)$/);
  if (!allowedImages.has(imageId) && !customImageMatch) {
    throw createError(400, "Unknown cover image.");
  }

  if (customImageMatch && !(await uploadExists(env, customImageMatch[1]))) {
    throw createError(400, "Uploaded cover image was not found.");
  }

  return {
    id: createArticleId(titleEn || titleDe, existingArticles),
    date: validateDate(input?.date || new Date().toISOString().slice(0, 10)),
    category,
    imageId,
    imageCredit: customImageMatch ? imageCredit || "CYRI" : "",
    publishAt: validatePublishAt(input?.publishAt || new Date().toISOString()),
    title: {
      de: titleDe,
      en: titleEn,
    },
    summary: {
      de: summaryDe,
      en: summaryEn,
    },
    body: {
      de: bodyDe,
      en: bodyEn,
    },
    createdAt: new Date().toISOString(),
  };
}
