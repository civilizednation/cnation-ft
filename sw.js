/* cnation TACTICS v0.6.7. Network-first updates; offline fallback. */
const CACHE='cnation-tactics-v0.6.7-1';
const BASE=new URL('./',self.location.href).href;
const ASSETS=['index.html','game.js?v=0.6.7','manifest.webmanifest','icon.png'].map(p=>new URL(p,BASE).href);
self.addEventListener('message',event=>{if(event.data==='TACTICS_VERSION')event.ports[0]?.postMessage('0.6.7');});
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cnation-tactics-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(BASE))return;
 // Only game assets are cached. Soundtracks can be added later without cache growth.
 const relative=url.pathname.slice(new URL(BASE).pathname.length);
 if(event.request.mode!=='navigate'&&!['','index.html','game.js','manifest.webmanifest','icon.png'].includes(relative))return;
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
