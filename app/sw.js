// Bruxa Tarot — service worker (funcionamiento sin conexión)
const CACHE = 'bruxa-tarot-v1';
const CORE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'support.js',
  'ios-frame.jsx',
  'vendor/react.production.min.js',
  'vendor/react-dom.production.min.js',
  'vendor/babel.min.js',
  'js/guardianes.js',
  'js/recetas-data.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
    "images/Diario.png",
    "images/Luna.png",
    "images/aetherius.png",
    "images/alberto.png",
    "images/bruxa-tarot.png",
    "images/bruxa.png",
    "images/conocimiento.png",
    "images/dante.png",
    "images/dorso.png",
    "images/elena.png",
    "images/energia.png",
    "images/erebus.png",
    "images/heimdall.png",
    "images/jade.png",
    "images/jazmin.png",
    "images/la-voz-clara.png",
    "images/llama.png",
    "images/marta.png",
    "images/mia.png",
    "images/nabi.png",
    "images/oracio.png",
    "images/pociones.png",
    "images/regreso.png",
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navegaciones -> app shell (index.html)
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(() => caches.match('index.html', { ignoreSearch: true }))
    );
    return;
  }

  // Mismo origen: cache primero, luego red
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req, { ignoreSearch: true }).then((hit) =>
        hit ||
        fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        }).catch(() => hit)
      )
    );
    return;
  }

  // Fuentes de Google (u otros): stale-while-revalidate
  e.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(req).then((hit) => {
        const net = fetch(req).then((res) => { c.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || net;
      })
    )
  );
});
