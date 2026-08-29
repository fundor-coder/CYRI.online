const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs/promises");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

function listen(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.removeListener("error", reject);
      resolve(server.address().port);
    });
  });
}

function close(server) {
  return new Promise((resolve) => server.close(resolve));
}

async function freePort() {
  const server = http.createServer();
  const port = await listen(server);
  await close(server);
  return port;
}

async function waitForHealth(baseUrl, child, stderr) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (child.exitCode !== null) {
      throw new Error(`Backend exited before startup: ${stderr()}`);
    }
    try {
      const response = await fetch(`${baseUrl}/api/health`, {
        signal: AbortSignal.timeout(500),
      });
      if (response.ok) return;
    } catch {
      // The process is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error(`Backend did not start: ${stderr()}`);
}

async function contactRequest(baseUrl, body, extraHeaders = {}) {
  return fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "same-origin",
      ...extraHeaders,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(3000),
  });
}

test("expanded article corpus is complete, bilingual and source-based", async () => {
  const root = path.join(__dirname, "..", "content");
  const [existing, expansion] = await Promise.all([
    fs.readFile(path.join(root, "articles.json"), "utf8").then(JSON.parse),
    fs
      .readFile(path.join(root, "articles-2026-expansion.json"), "utf8")
      .then(JSON.parse),
  ]);
  assert.equal(expansion.length, 10);
  assert.equal(new Set([...existing, ...expansion].map((article) => article.id)).size, 18);

  for (const article of expansion) {
    assert.match(article.id, /^[a-z0-9-]+-2026$/);
    assert.ok(["policy", "energy", "biodiversity", "cities", "marine"].includes(article.category));
    assert.ok(article.title.de.length > 30);
    assert.ok(article.title.en.length > 30);
    assert.ok(article.summary.de.length > 140);
    assert.ok(article.summary.en.length > 120);
    assert.ok(article.body.de.length > 3000);
    assert.ok(article.body.en.length > 3000);
    assert.ok(article.children.body.de.length > 500);
    assert.ok(article.children.body.en.length > 500);
    assert.ok(article.sources.length >= 4);
    article.sources.forEach((source) => {
      assert.ok(source.label.length > 10);
      assert.match(source.url, /^https:\/\//);
    });
  }
});

test("production image packages the public CYRI favicon files", async () => {
  const dockerfile = await fs.readFile(path.join(__dirname, "..", "Dockerfile"), "utf8");
  for (const icon of ["favicon.ico", "favicon.png", "apple-touch-icon.png"]) {
    assert.match(dockerfile, new RegExp(`\\b${icon.replace(".", "\\.")}\\b`));
  }
});

test("Node and Apache serve exactly the same public asset files", async () => {
  const root = path.join(__dirname, "..");
  const htaccess = await fs.readFile(path.join(root, ".htaccess"), "utf8");
  const server = await fs.readFile(path.join(root, "server.js"), "utf8");

  const condition = htaccess.match(/RewriteCond %\{REQUEST_URI\} !(\^\/assets\/\S+\$) \[NC\]/);
  assert.ok(condition, ".htaccess must keep one asset allowlist condition.");
  const apacheAllowlist = new RegExp(condition[1], "i");

  const setLiteral = server.match(/const PUBLIC_ASSET_PATHS = new Set\(\[([\s\S]*?)\n\]\);/);
  assert.ok(setLiteral, "server.js must keep the PUBLIC_ASSET_PATHS allowlist.");
  const nodeAllowlist = new Set(new Function(`return [${setLiteral[1]}]`)());

  const assetFiles = (await fs.readdir(path.join(root, "assets"), { recursive: true }))
    .map((entry) => `/assets/${entry.split(path.sep).join("/")}`)
    .filter((entry) => !entry.split("/").pop().startsWith("."));

  for (const file of assetFiles) {
    const stats = await fs.stat(path.join(root, file.slice(1)));
    if (stats.isDirectory()) continue;
    assert.equal(
      apacheAllowlist.test(file),
      nodeAllowlist.has(file),
      `${file} must be public on Node and Apache, or blocked on both.`
    );
  }
});

test("contact backend validates, stores and securely delivers messages", async (t) => {
  const providerRequests = [];
  const provider = http.createServer(async (req, res) => {
    let raw = "";
    for await (const chunk of req) raw += chunk;
    const body = JSON.parse(raw);
    providerRequests.push({ headers: req.headers, body });

    if (body.text.includes("provider-failure")) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "simulated failure" }));
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id: `mock-email-${providerRequests.length}` }));
  });
  const providerPort = await listen(provider);
  t.after(() => close(provider));

  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), "cyri-contact-test-"));
  await fs.writeFile(path.join(dataDir, "messages.json"), JSON.stringify([
    {
      id: "expired-message",
      name: "Old",
      email: "old@example.com",
      message: "This message must be removed.",
      createdAt: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]));

  const appPort = await freePort();
  const baseUrl = `http://127.0.0.1:${appPort}`;
  let stderr = "";
  const child = spawn(process.execPath, ["server.js"], {
    cwd: path.resolve(__dirname, ".."),
    env: {
      ...process.env,
      NODE_ENV: "test",
      PORT: String(appPort),
      CYRI_DATA_DIR: dataDir,
      RESEND_API_KEY: "re_test_secret",
      RESEND_API_URL: `http://127.0.0.1:${providerPort}/emails`,
      CYRI_CONTACT_FROM: "CYRI Website <website@send.cyri.online>",
      CYRI_CONTACT_TO: "climateyri@gmail.com",
      CYRI_TRUST_PROXY: "false",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stderr.on("data", (chunk) => {
    stderr += chunk;
  });
  t.after(() => {
    if (child.exitCode === null) child.kill("SIGTERM");
  });
  t.after(() => fs.rm(dataDir, { recursive: true, force: true }));
  await waitForHealth(baseUrl, child, () => stderr);

  const publicArticleCorpus = await fetch(`${baseUrl}/content/articles.json`);
  assert.equal(publicArticleCorpus.status, 200);
  assert.ok(Array.isArray(await publicArticleCorpus.json()));
  const publicLogo = await fetch(`${baseUrl}/assets/cyri-logo.svg`);
  assert.equal(publicLogo.status, 200);
  assert.match(publicLogo.headers.get("content-type"), /^image\/svg\+xml/);
  const faviconFiles = [
    ["/favicon.ico", "image/x-icon"],
    ["/favicon.png", "image/png"],
    ["/apple-touch-icon.png", "image/png"],
    ["/assets/cyri-logo-192.png", "image/png"],
    ["/assets/cyri-logo-512.png", "image/png"],
  ];
  for (const [faviconPath, contentType] of faviconFiles) {
    const faviconResponse = await fetch(`${baseUrl}${faviconPath}`);
    assert.equal(faviconResponse.status, 200, faviconPath);
    assert.match(faviconResponse.headers.get("content-type"), new RegExp(`^${contentType}`));
    assert.ok((await faviconResponse.arrayBuffer()).byteLength > 100, faviconPath);
  }
  const homeResponse = await fetch(`${baseUrl}/`);
  assert.equal(homeResponse.status, 200);
  assert.equal(
    homeResponse.headers.get("permissions-policy"),
    "camera=(self), geolocation=(), microphone=(), payment=(), usb=()"
  );
  const homeHtml = await homeResponse.text();
  assert.match(
    homeHtml,
    /<link rel="icon" href="\/favicon\.png" type="image\/png" sizes="96x96" \/>/
  );
  assert.match(homeHtml, /<link rel="shortcut icon" href="\/favicon\.ico" \/>/);
  assert.match(homeHtml, /<link rel="apple-touch-icon" href="\/apple-touch-icon\.png"/);
  assert.match(homeHtml, /https:\/\/cyri\.online\/assets\/cyri-logo-512\.png/);
  assert.match(homeHtml, /data-camera-tracking-toggle/);

  const privatePaths = [
    "/README.md",
    "/LOESUNGEN.md",
    "/package.json",
    "/server.js",
    "/.env.example",
    "/.git/config",
    "/.claude/settings.local.json",
    "/data/messages.json",
    "/tests/contact-backend.test.js",
    "/test-results/.last-run.json",
    "/Antrag/antragsbestaetigung_dsee-act-1-081-041_2026-06-07.pdf",
    "/Drei%20passgenaue%20Artikelpakete%20fu%CC%88r%20CYRI.pdf",
    "/content/test2.tmp",
    "/content/private.pdf",
    "/content/",
    "/assets/private.pdf",
    "/assets/private.jpg",
    "/assets/private.js",
    "/assets/.DS_Store",
    "/assets/vendor/three/LICENSE",
    "/assets/",
    "/assets/%2e%2e/package.json",
    "/content/%2e%2e/server.js",
    "/assets/cyri-logo.svg%00.pdf",
  ];
  for (const privatePath of privatePaths) {
    const privateResponse = await fetch(`${baseUrl}${privatePath}`);
    assert.equal(privateResponse.status, 404, privatePath);
    assert.equal(privateResponse.headers.get("cache-control"), "no-store");
    assert.deepEqual(await privateResponse.json(), { error: "Not found." });
  }
  const privateHeadResponse = await fetch(`${baseUrl}/assets/private.pdf`, {
    method: "HEAD",
  });
  assert.equal(privateHeadResponse.status, 404);

  const germanLearningResponse = await fetch(`${baseUrl}/de/lernen`);
  assert.equal(germanLearningResponse.status, 200);
  const germanLearningHtml = await germanLearningResponse.text();
  assert.match(germanLearningHtml, /<html lang="de">/);
  assert.match(
    germanLearningHtml,
    /<title>Umweltbildung &amp; Klima-Lernen für Jugendliche \| CYRI<\/title>/
  );
  assert.match(
    germanLearningHtml,
    /<link rel="canonical" href="https:\/\/cyri\.online\/de\/lernen" \/>/
  );
  assert.match(germanLearningHtml, /"@type":"LearningResource"/);

  const articleResponse = await fetch(
    `${baseUrl}/de/artikel/schwammstadt-regenwasser-hitze-2026`
  );
  assert.equal(articleResponse.status, 200);
  const articleHtml = await articleResponse.text();
  assert.match(articleHtml, /Schwammstadt: Wie Städte Regenwasser speichern/);
  assert.match(articleHtml, /<meta property="og:type" content="article" \/>/);
  assert.match(articleHtml, /"@type":"Article"/);
  assert.match(
    articleHtml,
    /https:\/\/cyri\.online\/en\/articles\/schwammstadt-regenwasser-hitze-2026/
  );

  const expandedArticleResponse = await fetch(
    `${baseUrl}/de/artikel/klimagerechtigkeit-kinderrechte-bildung-beteiligung-2026`
  );
  assert.equal(expandedArticleResponse.status, 200);
  const expandedArticleHtml = await expandedArticleResponse.text();
  assert.match(expandedArticleHtml, /Klimagerechtigkeit und Kinderrechte/);
  assert.match(expandedArticleHtml, /"@type":"Article"/);

  const missingArticleResponse = await fetch(`${baseUrl}/de/artikel/nicht-vorhanden`);
  assert.equal(missingArticleResponse.status, 404);

  const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  assert.match(sitemap, /https:\/\/cyri\.online\/de\/lernen/);
  assert.match(
    sitemap,
    /https:\/\/cyri\.online\/de\/artikel\/schwammstadt-regenwasser-hitze-2026/
  );
  assert.match(
    sitemap,
    /https:\/\/cyri\.online\/de\/artikel\/klimagerechtigkeit-kinderrechte-bildung-beteiligung-2026/
  );
  assert.doesNotMatch(sitemap, /\/de\/publizieren/);

  const successResponse = await contactRequest(baseUrl, {
    name: "Alex Example",
    email: "alex@example.com",
    message: "I have a question about the mangrove article.",
    website: "",
    startedAt: Date.now() - 3000,
  });
  assert.equal(successResponse.status, 201);
  assert.deepEqual(await successResponse.json(), { ok: true });
  assert.equal(providerRequests.length, 1);

  const deliveryRequest = providerRequests[0];
  assert.equal(deliveryRequest.headers.authorization, "Bearer re_test_secret");
  assert.equal(deliveryRequest.headers["user-agent"], "CYRI-Website/1.0");
  assert.match(deliveryRequest.headers["idempotency-key"], /^contact-[a-f0-9-]+$/);
  assert.equal(deliveryRequest.body.from, "CYRI Website <website@send.cyri.online>");
  assert.deepEqual(deliveryRequest.body.to, ["climateyri@gmail.com"]);
  assert.equal(deliveryRequest.body.reply_to, "alex@example.com");
  assert.equal(deliveryRequest.body.subject, "New contact message via cyri.online");
  assert.equal(deliveryRequest.body.html, undefined);
  assert.match(deliveryRequest.body.text, /Alex Example/);
  assert.match(deliveryRequest.body.text, /question about the mangrove article/);

  let storedMessages = JSON.parse(
    await fs.readFile(path.join(dataDir, "messages.json"), "utf8")
  );
  assert.equal(storedMessages.length, 1, "expired messages should be removed");
  assert.equal(storedMessages[0].delivery.status, "sent");
  assert.equal(storedMessages[0].delivery.emailId, "mock-email-1");
  assert.doesNotMatch(JSON.stringify(storedMessages), /re_test_secret/);

  const honeypotResponse = await contactRequest(baseUrl, {
    name: "Bot",
    email: "bot@example.com",
    message: "Automated spam message.",
    website: "https://spam.example",
  });
  assert.equal(honeypotResponse.status, 201);
  assert.equal(providerRequests.length, 1, "honeypot submissions must not send email");

  const crossSiteResponse = await contactRequest(
    baseUrl,
    {
      name: "Cross Site",
      email: "cross@example.com",
      message: "This cross-site request should not pass.",
      startedAt: Date.now() - 3000,
    },
    { "Sec-Fetch-Site": "cross-site" }
  );
  assert.equal(crossSiteResponse.status, 403);

  const fastResponse = await contactRequest(baseUrl, {
    name: "Fast User",
    email: "fast@example.com",
    message: "This submission was completed too quickly.",
    startedAt: Date.now(),
  });
  assert.equal(fastResponse.status, 400);

  const invalidEmailResponse = await contactRequest(baseUrl, {
    name: "Invalid Email",
    email: "not-an-email",
    message: "This submission contains an invalid address.",
    startedAt: Date.now() - 3000,
  });
  assert.equal(invalidEmailResponse.status, 400);

  const oversizedResponse = await contactRequest(baseUrl, {
    name: "Large Message",
    email: "large@example.com",
    message: "x".repeat(17000),
    startedAt: Date.now() - 3000,
  });
  assert.equal(oversizedResponse.status, 413);

  const providerFailureResponse = await contactRequest(baseUrl, {
    name: "Provider Failure",
    email: "failure@example.com",
    message: "Please trigger provider-failure for this test.",
    startedAt: Date.now() - 3000,
  });
  assert.equal(providerFailureResponse.status, 502);
  storedMessages = JSON.parse(
    await fs.readFile(path.join(dataDir, "messages.json"), "utf8")
  );
  assert.equal(storedMessages[0].delivery.status, "failed");
  assert.equal(storedMessages[1].delivery.status, "sent");

  const rateLimitEntries = JSON.parse(
    await fs.readFile(path.join(dataDir, "contact-rate-limits.json"), "utf8")
  );
  assert.equal(rateLimitEntries.length, 1);
  assert.match(rateLimitEntries[0].client, /^[a-f0-9]{64}$/);
  assert.notEqual(rateLimitEntries[0].client, "127.0.0.1");
});
