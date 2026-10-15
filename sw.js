// Catholic USL service worker: lets lesson text open without internet after the first visit.
// Change V when you release a new version so phones refresh their copy.
const V = "cusl-v3";
const CORE = ["./", "index.html", "content.js", "logo.png", "icon-192.png", "icon-512.png", "manifest.json"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; const u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;
  const fresh = r.mode === "navigate" || /(index\.html|content\.js)$/.test(u.pathname);
  if (fresh) { // network first so new releases show up, cache as fallback offline
    e.respondWith(fetch(r).then(n => { const cp = n.clone(); caches.open(V).then(c => c.put(r, cp)); return n; }).catch(() => caches.match(r).then(m => m || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(n => { const cp = n.clone(); caches.open(V).then(c => c.put(r, cp)); return n; })));
  }
});
