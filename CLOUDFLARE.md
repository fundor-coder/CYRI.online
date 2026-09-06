# CYRI auf Cloudflare

Die Website läuft als **Cloudflare Worker** mit statischen Assets. Der Worker
ersetzt `server.js` / `backend.php`: gleiche Routen, gleiche Validierung,
gleiche Fehlermeldungen — nur der Speicher ist ein anderer.

| | selbst gehostet | Cloudflare |
|---|---|---|
| Statische Dateien | Apache / `server.js` | Asset-Store (Inhalt von `dist/`) |
| API | `backend.php`, `server.js` | `worker/index.js` |
| Artikel | `data/articles.json` | KV-Key `articles` |
| Kontaktnachrichten | `data/messages.json` | KV-Keys `message:<id>`, laufen nach 183 Tagen ab |
| Rate-Limits | Datei + Arbeitsspeicher | KV-Keys `ratelimit:<bereich>:<hash>` |
| Bild-Uploads | `data/uploads/` | KV-Keys `upload:<datei>.jpg` |
| Login-Sitzungen | Map im Prozess | signierte HMAC-Tokens (kein Serverspeicher) |

## Konto und Ressourcen

- Cloudflare-Konto: **CYRI.online** (`bc28b52fa018bb2e2d397f8aab8d0b54`)
- Worker: `cyri` → https://cyri.cyri-website.workers.dev
- Custom Domains: `cyri.online`, `www.cyri.online` (www leitet per 301 auf die Hauptdomain)
- KV-Namespace: `CYRI_DATA` (`bb66887b4fc445c395226004d035969c`)

## Deployen

```bash
npm run build        # baut dist/ aus der Datei-Allowlist
npm run cf:deploy    # build + wrangler deploy
npm run cf:dev       # lokal auf http://localhost:8788
```

`dist/` enthält nur die öffentlich freigegebenen Dateien — dieselbe Allowlist wie
in `.htaccess` und `server.js`. Private Ordner (`Antrag/`, `data/`, `tests/`)
landen dadurch gar nicht erst im Deployment. Neue öffentliche Dateien müssen in
`scripts/build-cloudflare.mjs` eingetragen werden, sonst fehlen sie online.

## Secrets

Ohne Secrets läuft die Website normal; Kontaktformular, KI-Assistent und
Publizieren melden `503 … is not configured` — genau wie beim alten Backend.

```bash
wrangler secret put CYRI_PUBLISH_PASSWORD_HASH   # sha256-Hash des Publizieren-Passworts
wrangler secret put OPENAI_API_KEY               # Übersetzung + Assistent
wrangler secret put RESEND_API_KEY               # Kontaktformular
wrangler secret put CYRI_SESSION_SECRET          # optional, sonst wird der Passwort-Hash verwendet
```

Hash für das Publizieren-Passwort erzeugen:

```bash
printf '%s' 'DAS-PASSWORT' | shasum -a 256 | cut -d' ' -f1
```

Nicht-geheime Einstellungen (Absender, Empfänger, Modelle) stehen als `vars` in
`wrangler.jsonc`.

Lokal: dieselben Werte in `.dev.vars` (nicht im Git).

## Wichtige Unterschiede zum alten Backend

- **Sitzungen sind signiert, nicht gespeichert.** Ein Token gilt 12 Stunden und
  kann nicht einzeln zurückgezogen werden. Passwort bzw. `CYRI_SESSION_SECRET`
  ändern macht alle offenen Sitzungen ungültig.
- **KV ist eventual consistent.** Zwei gleichzeitige Veröffentlichungen könnten
  sich überschreiben. Bei einer Redaktion unkritisch.
- **Uploads liegen in KV**, weil R2 im Konto nicht aktiviert ist. Bei vielen
  Bildern R2 aktivieren und `putUpload`/`getUpload` in `worker/store.js`
  umstellen.
- **Client-IP** kommt aus `CF-Connecting-IP`; die Umgebungsvariable
  `CYRI_TRUST_PROXY` entfällt.

## Logs

```bash
wrangler tail             # Live-Logs
```

Observability ist in `wrangler.jsonc` aktiviert, Logs stehen auch im Dashboard.
