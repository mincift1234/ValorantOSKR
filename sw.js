self.addEventListener("install", (event) => {
  console.log("[SW] Service Worker 설치됨");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Service Worker 활성화됨");
});

self.addEventListener("fetch", (event) => {
  // 기본 fetch 동작
});