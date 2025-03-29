const CACHE_NAME = "valorant-skin-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html?",
  "/styles.css?v=2",
  "/script.js?v=2",
  "/skins.js",
  "/manifest.json",
  "/icons/icon-192.png"
];

// ⭐ 설치 단계: 캐시 등록
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log("[SW] 설치 완료");
});

// ⭐ 요청 가로채기: 캐시 먼저 확인, 없으면 네트워크
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// ⭐ 오래된 캐시 정리 (선택)
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  console.log("[SW] 활성화 완료");
});
