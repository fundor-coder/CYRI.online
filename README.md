# Climate Youth Research Initiative Website

A bilingual, youth-led environmental information platform for students with an interactive mission lab, graphical impact cockpit, topic explorers, global map models, a quiz, structured article data, an article-based CYRI assistant, a protected publishing backend and responsive Apple-inspired styling. CYRI publishes educational content and does not conduct original research.

Run `npm start` and open `http://localhost:5173/` to view the site with the backend enabled.

The site is deployed as a Cloudflare Worker with static assets; see [CLOUDFLARE.md](CLOUDFLARE.md) for deployment, secrets and the storage differences from the self-hosted backends.

Funding notice:
- The action! funding notice is integrated site-wide before the footer.
- The supplied RGB funding logo remains unchanged, readable and displayed on a white background with protected spacing according to the funding guidelines.
- The accompanying text names the programme “action! Aktiv für eine globale Welt” and the funding by DSEE with BMZ funds.

Student info experience:
- The `Explore` page puts interactive missions, models and environmental facts before passive reading.
- Visitors can switch between oceans, climate ecosystems and climate-ready cities.
- The home-page particle field follows the mouse or trackpad and drifts on its own when idle.
- Mission, quiz and discovery choices are stored locally in the visitor's browser.
- The Mission Lab lets visitors combine an environmental challenge, perspective and time frame into a live info model, animated impact cockpit, field kit, mini experiment, discussion prompt and action plan.
- The SDG Lab turns all 17 Sustainable Development Goals into clickable student cards with short explanations, reflection questions and links into the map models.
- The Learning Games arcade adds five sequential games: SDG Sprint, Cause Chain, City Builder, Reef Rescue and Climate Council 2035.
- City Builder, Reef Rescue and Climate Council include local Three.js models that react to decisions without loading scripts from a third-party CDN.
- The student interface uses larger card-style controls and readable meters instead of cramped table-like rows or text-heavy circles.
- The knowledge check offers four selectable lengths with 3, 6, 9 or 12 bilingual questions, including SDG-focused prompts.
- The CYRI assistant is integrated into the `Explore` page instead of appearing as a separate navigation item.
- Each topic includes three interactive key-concept discoveries with animated explanations and locally saved discovery progress.
- The explainer workbench adds child- and youth-friendly mini tools for simple language, cause chains, global links, fact checks and short-video planning.
- The interactive world map uses clickable hotspots with scenario models for climate, biodiversity, water and justice contexts, including SDG references and Global South examples.
- A local participation poll and action cards support low-threshold youth engagement without collecting personal data.
- Articles remain the source-based foundation; infographics and social explainers are presented as additional information formats.
- The built-in bilingual corpus contains 18 source-based articles. The original collection is in
  `content/articles.json`; the ten-topic 2026 expansion is in
  `content/articles-2026-expansion.json`.

Backend routes:
- `GET backend.php?route=/articles` returns published articles from `data/articles.json`.
- `POST backend.php?route=/auth/publish` checks the publish password and returns a temporary session token.
- `POST backend.php?route=/translate` translates German article fields into English with OpenAI.
- `POST backend.php?route=/research` answers questions using published CYRI articles as the only content basis.
- `POST backend.php?route=/uploads` stores an optimized custom article photo in `data/uploads`.
- `POST backend.php?route=/articles` stores a new article immediately or with a future `publishAt` time.
- `/api/...` paths also work on Node and through the root Apache rewrite.

Deployment:
- Node hosting: upload the full folder, run `npm start`, and point the domain to the Node app. Set `CYRI_DATA_DIR` to a persistent server directory when the host uses ephemeral deployments.
- PHP/Apache hosting: upload the full folder. The backend logic is in one file, `backend.php`. Make sure the `data` folder is writable; runtime JSON files are created automatically. `CYRI_DATA_DIR` can point to storage outside the deployment folder.
- Static-only hosting is not enough for publishing or AI answers, because those features need the backend.
- GitHub Pages can display the frontend, but it cannot run the CYRI assistant or store published articles. Use the Node/Docker or PHP deployment as the production website when these functions must work.

Private-file protection:
- The Node server uses a strict public-file allowlist. It serves only the required root frontend
  files, approved image/script formats below `assets/`, the two public article corpora and
  generated public article routes.
- PDF, Office, archive, database, key, backup, log, temporary, source-map and internal project
  files are never served as static files. Unknown or blocked paths return the same `404` response.
- Apache applies matching deny rules through `.htaccess`. The Docker build context excludes
  private documents, local environment files, internal notes, tests and funding-application files.
- Keep secrets and personal documents outside the deployment directory as an additional boundary;
  do not rely on a filename being difficult to guess.

Google search setup:
- German and English content uses clean, crawlable URLs such as `/de/lernen`,
  `/en/learn` and one URL per published article. Legacy hash links are upgraded in the browser.
- The Node server renders a unique title, description, canonical URL, language alternatives,
  social preview metadata and JSON-LD for every public page before JavaScript runs.
- `https://cyri.online/sitemap.xml` includes every public language route and every currently
  published article. Submit this URL in Google Search Console after deployment.
- Verify the `cyri.online` domain property in Search Console and request indexing for the home,
  learning and article overview pages after major content updates. Keep publishing useful,
  sourced environmental education content; technical metadata alone cannot guarantee rankings.

Scheduled publishing:
- Select `Schedule for later` in the protected publishing editor and choose a local date and time.
- The browser sends the time as UTC. Future articles remain hidden from the public API until their launch time.
- No cron job is required; the public article list is filtered whenever it is requested.

AI translation:
- Set `OPENAI_API_KEY` in the server environment. Never put the key in `app.js`, `index.html` or Git.
- The protected editor can translate the German title, summary and article text into English. Existing English fields are replaced only after clicking the translation button.
- The default model is `gpt-5.4-mini`. Override it with `OPENAI_TRANSLATION_MODEL` if needed.
- Translation requests are sent only from the Node or PHP backend. Review every translation before publishing.

Contact:
- The website has no contact form. Visitors write to `climateyri@gmail.com`, shown on the
  About page and in the footer, so no message data is processed by the site at all.

CYRI assistant:
- Set `OPENAI_API_KEY` in the server environment. The key stays in the Node or PHP backend and is never sent to visitors.
- The backend selects up to three relevant published CYRI articles and instructs the model to answer only from that supplied material.
- Answers include links back to the CYRI articles used. Unsupported questions should receive a clear statement that the available articles do not contain enough information.
- The default model is `gpt-5.4-mini`. Override it with `OPENAI_RESEARCH_MODEL` if needed.
- Public research requests are limited to 12 questions per IP address in 10 minutes.
- Questions are transmitted to the configured AI provider. The interface tells visitors not to enter personal or confidential information.

Docker / Node server:
- Build the optimized Node image with `docker build -t cyri-website .`.
- Run it with `docker run -d --name cyri -p 5173:5173 -v cyri-data:/app/data --env-file .env cyri-website`.
- Publishing stays disabled until `CYRI_PUBLISH_PASSWORD` or a SHA-256 `CYRI_PUBLISH_PASSWORD_HASH` is configured. Never commit the production secret.
- Or use `docker compose up -d --build`; `compose.yaml` automatically mounts the named `cyri-data` volume.
- Open `http://localhost:5173/`. Published articles and uploaded photos are stored in the `cyri-data` volume.
- Do not delete the `cyri-data` volume during updates. `docker compose down` keeps it; `docker compose down -v` deletes it.

Persistent storage:
- Articles are stored in `articles.json`; uploaded photos are stored in `uploads`.
- Every JSON update keeps a complete mirrored copy in a `.bak` file.
- If the main JSON file becomes unreadable, the backend restores it automatically from that backup.

For production, set `CYRI_PUBLISH_PASSWORD` or `CYRI_PUBLISH_PASSWORD_HASH` in the server environment. Publishing is disabled when neither value is configured.

Third-party frontend code:
- Three.js `0.185.1` is vendored in `assets/vendor/three` under the MIT License. The original license text is included beside the module.

SDG icon assets:
- The individual icons in `assets/sdg/` are official United Nations communications materials
  sourced from [sdgs.un.org/goals](https://sdgs.un.org/goals).
- CYRI's accompanying explanations are independent and are not endorsed by the United Nations.

Photo sources:
- `assets/photos/sponge-city-rain-garden-hd.jpg`: Jeremy Jeziorski / Oregon Convention Center via Wikimedia Commons, CC BY 2.0; resized for web delivery.
- `assets/photos/seagrass-meadow-zostera-hd.jpg`: Olivier Dugornay / Ifremer via Wikimedia Commons, CC BY 4.0; resized for web delivery.
- `assets/photos/coral-bleaching-florida-2023-hd.jpg`: Dan Eidsmoe / Symbiosis via Wikimedia Commons, CC BY 2.0; resized for web delivery.
- `assets/photos/coral-reef-bleaching-hd.jpg`: Jay Galvin via Wikimedia Commons, CC BY 2.0.
- `assets/photos/ocean-plastic-hd.jpg`: Kevin Krejci via Wikimedia Commons, CC BY 2.0.
- `assets/photos/mangrove-forest-hd.jpg`: Emonjnu via Wikimedia Commons, CC BY-SA 4.0.
- `assets/photos/aletsch-glacier-hd.jpg`: Gzzz via Wikimedia Commons, CC BY-SA 4.0.
- `assets/photos/offshore-wind-hd.jpg`: U.S. Department of Energy via Wikimedia Commons, public domain.
