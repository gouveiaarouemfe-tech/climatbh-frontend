const CACHE_NAME = 'climatbh-v1';
const urlsToCache = [
  '/',
  '/instalacao-vrf',
  '/manutencao-vrf',
  '/instalacao-chiller',
  '/manutencao-chiller',
  '/instalacao-splitao',
  '/manutencao-splitao',
  '/contratos-pmoc',
  '/sobre',
  '/contato',
  '/images/VRFDAIKIN.png',
  '/images/instalaçãodeVRF.jpeg',
  '/images/manutençãodeVRFBH.jpeg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

