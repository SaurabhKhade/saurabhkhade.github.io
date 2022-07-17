const codeCache = "saurabhkhade-code-cache-v3";
const staticCache = "saurabhkhade-static-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(codeCache).then((cache) => {
      return cache.addAll(["/", "/index.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if ( event.request.url.indexOf( 'resume' ) !== -1 ) {
        return false;
   }
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        let responseToCache = response.clone();

        if (
          event.request.url.includes("img/") ||
          event.request.url.includes("/cdn/")
        ) {
          caches.open(staticCache).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        } else {
          caches.open(codeCache).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  let whitelist = [codeCache, staticCache];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!whitelist.includes(cacheName)) return caches.delete(cacheName);
        })
      );
    })
  );
});
