const CACHE_NAME = "speed-trainer-v6";

const APP_SHELL = [
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
  "./js/summary.js",

  "./manifest.json",

  "./assets/favicon.png",
  "./assets/icon144.png",
  "./assets/icon192.png",
  "./assets/icon512.png",
];

// ----------------------------
// Install
// ----------------------------

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
});

// ----------------------------
// Activate
// ----------------------------

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          }),
        ),
      ),

      self.clients.claim(),
    ]),
  );
});

// ----------------------------
// Fetch
// ----------------------------

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore browser extensions etc.
  if (url.origin !== self.location.origin) return;

  // Cache First for static assets
  if (
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".woff") ||
    url.pathname.endsWith(".woff2")
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;

        return fetch(event.request).then((response) => {
          const copy = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, copy);
          });

          return response;
        });
      }),
    );

    return;
  }

  // Network First for HTML/CSS/JS
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, copy);
        });

        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
