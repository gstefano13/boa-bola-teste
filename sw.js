// Service worker mínimo: só torna o Anotou instalável na tela inicial.
// Não guarda nada em cache — o site sempre carrega a versão mais nova.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
