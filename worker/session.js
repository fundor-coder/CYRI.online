// Publishing sessions.
//
// server.js keeps sessions in a per-process Map. A Worker has no shared
// process memory, so sessions are stateless HMAC tokens instead:
//
//   <nonce>.<expiresAtMs>.<hmac-sha256 of "<nonce>.<expiresAtMs>">
//
// The signing key is CYRI_SESSION_SECRET when set, otherwise the configured
// publish password hash - so changing the password invalidates open sessions.

import { createError, bytesToHex, randomHex, sha256, timingSafeHexCompare } from "./util.js";

const SESSION_DURATION_MS = 1000 * 60 * 60 * 12;
const encoder = new TextEncoder();

export async function currentPublishPasswordHash(env) {
  if (env.CYRI_PUBLISH_PASSWORD_HASH) {
    return String(env.CYRI_PUBLISH_PASSWORD_HASH).trim();
  }

  if (env.CYRI_PUBLISH_PASSWORD) {
    return sha256(env.CYRI_PUBLISH_PASSWORD);
  }

  return "";
}

async function signingKey(env) {
  const secret =
    String(env.CYRI_SESSION_SECRET || "").trim() || (await currentPublishPasswordHash(env));
  if (!secret) {
    throw createError(503, "Publishing access is not configured.");
  }

  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function signPayload(env, payload) {
  const key = await signingKey(env);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return bytesToHex(new Uint8Array(signature));
}

export async function createPublishSession(env) {
  const nonce = randomHex(16);
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = `${nonce}.${expiresAt}`;
  const signature = await signPayload(env, payload);

  return {
    token: `${payload}.${signature}`,
    expiresAt: new Date(expiresAt).toISOString(),
  };
}

export async function requirePublishSession(env, request) {
  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  const parts = token.split(".");

  if (parts.length !== 3) {
    throw createError(401, "Publish login required.");
  }

  const [nonce, expiresAt, signature] = parts;
  const expiryMs = Number(expiresAt);
  if (!/^[a-f0-9]{32}$/.test(nonce) || !Number.isFinite(expiryMs) || expiryMs <= Date.now()) {
    throw createError(401, "Publish login required.");
  }

  const expected = await signPayload(env, `${nonce}.${expiresAt}`);
  if (!timingSafeHexCompare(signature, expected)) {
    throw createError(401, "Publish login required.");
  }
}
