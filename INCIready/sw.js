/* Tiene i file dell'app in memoria: dopo la prima apertura funziona anche senza rete.
   (La lettura della foto e la ricerca per nome prodotto hanno comunque bisogno di internet.) */
const CACHE = 'inci-chiaro-v1';
const FILES = [
  './', './index.html', './style.css', './manifest.webmanifest',
  './data/ingredients.js', './data/ingredients2.js', './data/ingredients3.js', './data/rules.js',
  './js/motore.js', './js/app.js', './icon-192.png', './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // le richieste a servizi esterni (lettura foto, ricerca prodotti) passano diritte alla rete
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
      const copia = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
      return r;
    }).catch(() => caches.match('./index.html')))
  );
});
