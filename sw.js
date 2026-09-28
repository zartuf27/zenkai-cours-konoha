const CACHE_NAME='zenkai-v33';
// Pas de './' : GitHub Pages n'a pas d'index.html (404), et addAll() échoue en bloc au moindre fichier manquant
// cache:'reload' : ignore le cache HTTP (max-age=600) pour ne pas figer une ancienne version sous le nouveau CACHE_NAME
const CORE_ASSETS=[
  './gestion_cours_zenkai.html',
  './img_cycle_natures.png',
  './img_kekkei_genkai.png',
  './manifest.json',
  './icon-192.svg'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE_ASSETS.map(u=>new Request(u,{cache:'reload'})))));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(names=>Promise.all(
    names.filter(n=>n.startsWith('zenkai-')&&n!==CACHE_NAME).map(n=>caches.delete(n))
  )));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(caches.match('./gestion_cours_zenkai.html').then(r=>r||fetch(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>{
    if(r)return r;
    return fetch(e.request).then(res=>{
      if(res&&res.status===200&&res.type==='basic'){
        const clone=res.clone();
        caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));
      }
      return res;
    }).catch(()=>caches.match(e.request));
  }));
});
