const CACHE_NAME = "speed-trainer-v5";

const FILES = [
  "./",
  "./index.html",
  "./css/style.css",

  "./js/app.js",
  "./js/state.js",
  "./js/utils.js",
  "./js/generators.js",
  "./js/session.js",
  "./js/practiceModes.js",
  "./js/keyboard.js",
  "./js/modal.js",
  "./js/settings.js",
  "./js/validator.js",

  "./manifest.json",

  "./assets/favicon.png",
  "./assets/icon144.png",
  "./assets/icon192.png",
  "./assets/icon512.png",
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
