/* cnation TACTICS. Network-first updates; offline fallback. Version history: revisions.html */
const VERSION='1.5.7';
const CACHE='cnation-tactics-v'+VERSION;
const BASE=new URL('./',self.location.href).href;
const ASSETS=['index.html','vendor/three-r170.js?v=r170','game.js?v='+VERSION,'fonts/stylish.woff2?v=14','fonts/gowun-dodum.woff2?v=14'].map(p=>new URL(p,BASE).href);
const CACHED_PATHS=['','index.html','game.js','vendor/three-r170.js','manifest.webmanifest','icon.png','fonts/stylish.woff2','fonts/gowun-dodum.woff2'];
self.addEventListener('message',event=>{if(event.data==='TACTICS_VERSION')event.ports[0]?.postMessage(VERSION);});
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cnation-tactics-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(BASE))return;
 // Only game assets are cached. Other pages (e.g. revisions.html) always come from the network,
 // so they can never replace the cached game page.
 const relative=decodeURIComponent(url.pathname.slice(new URL(BASE).pathname.length));
 // Soundtrack files are cached on first use. Range requests (from <audio>) bypass the cache:
 // partial responses cannot be stored.
 if(!CACHED_PATHS.includes(relative)&&!(relative.startsWith('bgm/')&&!event.request.headers.has('range')))return;
 // Soundtrack files never change in place: serve from cache, otherwise download once without a timeout.
 if(relative.startsWith('bgm/')){event.respondWith(caches.open(CACHE).then(async cache=>await cache.match(event.request)||fetch(event.request).then(async response=>{if(response.status===200)await cache.put(event.request,response.clone());return response;})));return;}
 const canonical=event.request.mode==='navigate'?new URL('index.html',BASE).href:event.request.url;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const network=fetch(event.request,{cache:'no-cache'}).then(async response=>{if(response.ok)await cache.put(canonical,response.clone());return response;});
  event.waitUntil(network.catch(()=>{}));
  try{
   const response=await Promise.race([network,new Promise((_,reject)=>setTimeout(()=>reject(Error('timeout')),4500))]);
   if(response.ok)return response;
   return await cache.match(canonical)||response;
  }catch{return await cache.match(canonical)||Response.error();}
 })());
});
