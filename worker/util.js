// Shared helpers for the Cloudflare Worker backend.
//
// The Node backend (server.js) uses node:crypto and Buffer; the Worker runtime
// provides Web Crypto instead, so the equivalents live here.

export const MAX_JSON_BODY_SIZE = 4 * 1024 * 1024;
export const MAX_CONTACT_BODY_SIZE = 16 * 1024;

export class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function createError(statusCode, message) {
  return new HttpError(statusCode, message);
}

const encoder = new TextEncoder();

export async function sha256(value) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(String(value)));
  return bytesToHex(new Uint8Array(digest));
}

export function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function randomHex(byteLength) {
  return bytesToHex(crypto.getRandomValues(new Uint8Array(byteLength)));
}

export function timingSafeHexCompare(left, right) {
  if (!/^[a-f0-9]{64}$/i.test(left) || !/^[a-f0-9]{64}$/i.test(right)) {
    return false;
  }

  const a = left.toLowerCase();
  const b = right.toLowerCase();
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return mismatch === 0;
}

export function securityHeaders() {
  return {
    "Content-Security-Policy":
      "default-src 'self'; base-uri 'self'; connect-src 'self'; font-src 'self' data:; frame-ancestors 'none'; form-action 'self'; img-src 'self' data: blob:; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'",
    "Permissions-Policy": "camera=(self), geolocation=(), microphone=(), payment=(), usb=()",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  };
}

export function jsonResponse(statusCode, payload) {
  return new Response(JSON.stringify(payload), {
    status: statusCode,
    headers: {
      ...securityHeaders(),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export function errorResponse(error) {
  const statusCode = error?.statusCode || 500;
  const message = statusCode === 500 ? "Internal server error." : error.message;
  if (statusCode === 500) {
    console.error(error);
  }
  return jsonResponse(statusCode, { error: message });
}

export async function readRequestJson(request, maximumSize = MAX_JSON_BODY_SIZE) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > maximumSize) {
    throw createError(413, "Request body is too large.");
  }

  const raw = await request.text();
  if (raw.length > maximumSize) {
    throw createError(413, "Request body is too large.");
  }

  if (!raw.trim()) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    throw createError(400, "Request body must be valid JSON.");
  }
}

export function cleanText(value, maxLength) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.slice(0, maxLength);
}

export function cleanMultilineText(value, maxLength) {
  const text = String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return text.slice(0, maxLength);
}

const UNSAFE_CONTROL_PATTERN = new RegExp(
  "[\\u0000-\\u0008\\u000b\\u000c\\u000e-\\u001f\\u007f]",
  "g"
);

export function withoutUnsafeControls(value) {
  return String(value).replace(UNSAFE_CONTROL_PATTERN, "");
}

export function cleanEmail(value) {
  const email = cleanText(value, 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError(400, "A valid email address is required.");
  }
  return email;
}

export function clientAddress(request) {
  // Cloudflare sets CF-Connecting-IP at the edge and strips client-supplied
  // copies, so it can be trusted without the CYRI_TRUST_PROXY switch the
  // self-hosted backend needs.
  return request.headers.get("cf-connecting-ip") || "unknown";
}
