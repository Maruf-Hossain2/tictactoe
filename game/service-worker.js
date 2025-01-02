const CACHE_NAME = 'tictactoe-v1';
const assetsToCache = [
  '/',
  '/tictactoe.html', 
  '/tictactoe.css',
  '/tictactoe.js',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Install service worker and cache all content
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
  );
});

// Serve cached content when offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
