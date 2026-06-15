const CACHE_NAME = 'english-course-cache-v1';
const urlsToCache = [
  '/english-course/',
  '/english-course/index.html',
  '/english-course/manifest.json',
  '/english-course/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
