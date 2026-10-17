// Play one campaign with the balance bot.
// node run.js <port> <story|mission> <difficulty> <outFile> [tuning.json] [mission chapters, e.g. 0,1,2]
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
 const [port,mode,diff,outFile,tuningFile,chapters]=process.argv.slice(2);
 const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
 const c=await b.newContext({serviceWorkers:'block',viewport:{width:200,height:400}});
 const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
 // Fast clock: every timer and animation frame resolves almost immediately.
 await p.addInitScript(()=>{let fake=performance.now();const realST=window.setTimeout.bind(window),realCT=window.clearTimeout.bind(window);performance.now=()=>fake;window.requestAnimationFrame=cb=>realST(()=>{fake+=60;cb(fake);},0);window.cancelAnimationFrame=id=>realCT(id);window.setTimeout=(f,ms,...a)=>realST(f,Math.min(ms||0,1),...a);});
 await p.goto(`http://127.0.0.1:${port}/index.html`);await p.waitForFunction(()=>window.TACTICS_READY,null,{timeout:120000});
 await p.evaluate(()=>{window.__T.renderer.render=()=>{};});
 if(tuningFile&&tuningFile!=='-'){const t=JSON.parse(fs.readFileSync(tuningFile,'utf8'));await p.evaluate(t=>{Object.assign(window.__T.STAGE_TUNING,t.stages||{});if(t.missionLevels)window.__T.MISSION_START_LEVELS.splice(0,10,...t.missionLevels);},t);}
 await p.addScriptTag({path:__dirname+'/bot.js'});
 const t0=Date.now();let result;
 if(mode==='story')result=await p.evaluate(([d])=>window.__runStory(d,3),[diff]);
 else{result=[];for(const ch of (chapters||'0,1,2,3,4,5,6,7,8,9').split(',').map(Number)){const r=await p.evaluate(([ch,d])=>window.__runMission(ch,d,3),[ch,diff]);result.push({chapter:ch,stages:r});}}
 fs.writeFileSync(outFile,JSON.stringify({mode,diff,seconds:Math.round((Date.now()-t0)/1000),errors:errs.slice(0,20),result}));
 await b.close();
})().catch(e=>{console.error(e);process.exit(1);});
