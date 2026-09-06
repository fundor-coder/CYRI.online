// Contact form handling - the Worker port of the contact helpers in server.js.

import {
  createError,
  cleanText,
  cleanEmail,
  cleanMultilineText,
  withoutUnsafeControls,
} from "./util.js";

const RESEND_EMAILS_URL = "https://api.resend.com/emails";
const CONTACT_MIN_FORM_AGE_MS = 1500;

export function normalizeMessage(input) {
  const name = withoutUnsafeControls(cleanText(input?.name, 120));
  const email = cleanEmail(input?.email);
  const message = withoutUnsafeControls(cleanMultilineText(input?.message, 5000));
  const startedAt = Number(input?.startedAt);
  const now = Date.now();

  if (name.length < 2 || message.length < 10) {
    throw createError(400, "Name and a message of at least 10 characters are required.");
  }

  if (!Number.isFinite(startedAt) || startedAt > now || now - startedAt < CONTACT_MIN_FORM_AGE_MS) {
    throw createError(400, "Please take a moment to complete the contact form.");
  }

  return {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
    delivery: {
      status: "pending",
      provider: "resend",
      updatedAt: new Date().toISOString(),
    },
  };
}

function configuredEmailAddress(value, label, allowDisplayName = false) {
  const text = String(value || "").trim();
  if (!text || text.length > 320 || /[\r\n]/.test(text)) {
    throw createError(503, `${label} is not configured correctly.`);
  }

  const plainMatch = text.match(/^([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)$/);
  const namedMatch = allowDisplayName
    ? text.match(/^[^<>\r\n]{1,100}<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>$/)
    : null;
  const address = plainMatch?.[1] || namedMatch?.[1] || "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
    throw createError(503, `${label} is not configured correctly.`);
  }
  return text;
}

export function contactEmailConfig(env) {
  const apiKey = String(env.RESEND_API_KEY || "").trim();
  if (!apiKey || apiKey.length > 512 || /[\r\n]/.test(apiKey)) {
    throw createError(503, "Contact email delivery is not configured.");
  }

  const apiUrl = String(env.RESEND_API_URL || "").trim() || RESEND_EMAILS_URL;
  let parsedUrl;
  try {
    parsedUrl = new URL(apiUrl);
  } catch {
    throw createError(503, "Contact email delivery is not configured correctly.");
  }
  if (parsedUrl.protocol !== "https:") {
    throw createError(503, "Contact email delivery must use HTTPS.");
  }

  return {
    apiKey,
    apiUrl: parsedUrl.toString(),
    from: configuredEmailAddress(env.CYRI_CONTACT_FROM, "Contact sender address", true),
    to: configuredEmailAddress(
      env.CYRI_CONTACT_TO || "climateyri@gmail.com",
      "Contact recipient address"
    ),
  };
}

function contactEmailText(message) {
  return [
    "New contact message from cyri.online",
    "",
    `Reference: ${message.id}`,
    `Received: ${message.createdAt}`,
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    "",
    "Message:",
    message.message,
    "",
    "Reply to this email to answer the sender directly.",
  ].join("\n");
}

export async function sendContactEmail(message, config) {
  let response;
  try {
    response = await fetch(config.apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact-${message.id}`,
        "User-Agent": "CYRI-Website/1.0",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: message.email,
        subject: "New contact message via cyri.online",
        text: contactEmailText(message),
        tags: [{ name: "source", value: "website-contact" }],
      }),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    throw createError(502, "Contact email delivery is temporarily unavailable.");
  }

  const payload = await response.json().catch(() => null);
  if (!response.ok || typeof payload?.id !== "string" || !payload.id) {
    console.error(`Contact email provider returned status ${response.status}.`);
    throw createError(502, "Contact email delivery is temporarily unavailable.");
  }

  return payload.id;
}

export function enforceSameSiteRequest(request) {
  const fetchSite = String(request.headers.get("sec-fetch-site") || "").toLowerCase();
  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) {
    throw createError(403, "Cross-site requests are not allowed.");
  }

  const origin = String(request.headers.get("origin") || "");
  if (origin) {
    let originHost;
    try {
      originHost = new URL(origin).host;
    } catch {
      throw createError(403, "Request origin is invalid.");
    }
    if (!originHost || originHost !== String(request.headers.get("host") || "")) {
      throw createError(403, "Cross-origin requests are not allowed.");
    }
  }

  const contentType = String(request.headers.get("content-type") || "").toLowerCase();
  if (!contentType.startsWith("application/json")) {
    throw createError(415, "Contact requests must use JSON.");
  }
}
