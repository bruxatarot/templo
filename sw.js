/*
  Templo del Prisma - Service Worker
  PWA: el Templo se instala como app y funciona sin conexión.

  Estrategia:
  - Páginas, scripts y estilos: RED PRIMERO (siempre la versión más nueva),
    con respaldo en caché si no hay conexión.
  - Imágenes y fuentes: caché primero (no cambian casi nunca).
  - Rutas RELATIVAS para funcionar en bruxatarot.github.io/templo/.
*/

const CACHE_NAME = 'prisma-templo-v2';
const OFFLINE_URL = 'offline.html';

// Lo esencial para abrir el Templo sin conexión
const CORE_ASSETS = [
  'index.html',
  'offline.html',
  'manifest.json',
  'lang.js',
  'js/guardianes.js',
  'js/starbits.js',
  'images/dorso.png',
  'images/bruxa-tarot.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // addAll falla completo si un archivo falta; cachear uno a uno es más resiliente
      .then((cache) => Promise.allSettled(CORE_ASSETS.map((a) => cache.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // No tocar Firebase, fuentes de Google, CDNs, etc.
  if (url.origin !== location.origin) return;

  const esEstatico = request.destination === 'image' || request.destination === 'font';

  if (esEstatico) {
    // Caché primero para imágenes/fuentes
    event.respondWith(
      caches.match(request).then((hit) => hit ||
        fetch(request).then((res) => {
          if (res && res.status === 200) {
            const copia = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(request, copia));
          }
          return res;
        }).catch(() => caches.match('images/dorso.png'))
      )
    );
    return;
  }

  // Red primero para todo lo demás (HTML, JS, CSS, datos)
  event.respondWith(
    fetch(request).then((res) => {
      if (res && res.status === 200) {
        const copia = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, copia));
      }
      return res;
    }).catch(() =>
      caches.match(request).then((hit) => {
        if (hit) return hit;
        if (request.destination === 'document') return caches.match(OFFLINE_URL);
        return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      })
    )
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
