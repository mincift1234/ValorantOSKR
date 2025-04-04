const CACHE_NAME = "valorant-skin-app-cache-v9";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
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
      // 네트워크 요청을 먼저 시도하고, 성공하면 캐시를 갱신
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // 네트워크 응답이 유효하고 200 상태일 때
        if (networkResponse && networkResponse.status === 200) {
          // 응답을 clone()하여 캐시에도 저장
          const responseClone = networkResponse.clone();

          // 캐시 저장
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone); // 복제된 응답을 캐시에 저장
          });
        }
        return networkResponse; // 네트워크 응답을 그대로 반환
      });

      // 캐시된 응답이 있으면 반환, 없으면 네트워크 요청 진행
      return cachedResponse || fetchPromise;
    })
  );
});

// ⭐ 오래된 캐시 정리 (선택)
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]; // 새로운 캐시 버전만 유지
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // 이전 버전 캐시 삭제
          }
        })
      )
    )
  );
  console.log("[SW] 활성화 완료");
});
