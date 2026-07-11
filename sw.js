/*
  Templo del Prisma - Service Worker
  PWA para lecturas offline del Oráculo Prisma del Alma
  Enfocado en: oracle data, páginas principales de tiradas y assets críticos
*/

const CACHE_NAME = 'prisma-templo-v1.1';
const OFFLINE_URL = '/offline.html';

// Archivos críticos para lecturas offline
// Incluye data del oráculo (todas las versiones de idioma)
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/tiradas.html',
  '/test.html',
  '/rituales.html',
  '/manifest.json',
  // Data del Oráculo (imprescindible para lecturas offline)
  '/js/data/oracle-cards.js',
  '/js/data/oracle-en.js', // si existe
  '/js/data/oracle-pt.js',
  '/js/data/oracle-it.js',
  '/js/data/oracle-ko.js',
  '/js/data/oracle-tr.js',
  '/js/data/oracle-ja.js',
  // Scripts principales
  '/js/lang.js',
  '/js/guardianes.js',
  '/js/starbits.js',
  '/js/auth-chip.js',
  // Estilos críticos (si están separados)
  // Imágenes esenciales
  '/images/dorso.png',
  '/images/bruxa-tarot.png'
];

// Instalar: precachear todo lo necesario para lecturas
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching core assets for offline readings');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activar: limpiar caches viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - Cache first para assets del mismo origen (ideal para offline)
// - Network first con fallback a cache para datos dinámicos
// - Fallback a offline.html si todo falla
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar requests del mismo origen (evitar CDNs externos por ahora)
  if (url.origin !== location.origin) {
    return; // Dejar que el navegador maneje Firebase, Leaflet, fonts, etc.
  }

  // Estrategia Cache First para la mayoría (perfecto para lecturas offline)
  if (
    request.destination === 'document' ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    url.pathname.startsWith('/js/data/') ||
    url.pathname.includes('oracle')
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((networkResponse) => {
            // Cachear dinámicamente nuevas respuestas
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Fallback para páginas HTML
            if (request.destination === 'document') {
              return caches.match(OFFLINE_URL) || caches.match('/index.html');
            }
            // Para imágenes o scripts críticos
            if (request.destination === 'image') {
              return caches.match('/images/dorso.png');
            }
            return new Response('Offline - Recurso no disponible', {
              status: 503,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
    );
    return;
  }

  // Default: intentar red, fallback a cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// Mensaje para actualizar SW desde la app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('%c[Bruxa Tarot PWA] Service Worker v1.1 listo para lecturas offline', 'color:#c9a84c');