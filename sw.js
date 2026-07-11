const CACHE_NAME = "speed-trainer-v1";

const FILES = [
  "./",
  "./index.html",
  "./css/style.css",

  "./js/app.js",
  "./js/state.js",
  "./js/utils.js",
  "./js/generators.js",
  "./js/session.js",
  "./js/timer.js",
  "./js/keyboard.js",
  "./js/modal.js",
  "./js/settings.js",
  "./js/validator.js",

  "./manifest.json",

  "./assets/icon-192.png",
  "./assets/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)

      .then((cache) => cache.addAll(FILES)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)

      .then((response) => response || fetch(event.request)),
  );
});
