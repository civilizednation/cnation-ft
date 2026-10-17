// Greedy "ordinary player" bot for cnation TACTICS balance runs. Runs inside the game page.
(()=>{
const T=window.__T;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const B=()=>T.battle;
const enemies=()=>T.alive('enemy'),allies=()=>T.alive('ally');
const HEALERS=['luna'],FRAGILE={ria:1.6,luna:1.6,sera:1.2,nero:1.1,kyle:1,bran:.7};

function usableSkills(u){
 const h=T.HEROES.find(h=>h.id===u.heroId),out=[{id:'basic',s:T.basic(u)}];
 if(!h||u.status.silence)return out;
 h.skills.forEach((id,i)=>{const s=T.SKILLS[id];if(!s)return;if(u.level<T.skillUnlock(id,i))return;if(u.mp<T.skillCost(u,s))return;out.push({id,s:{...s,id}});});
 return out;
}
function expectedIncoming(u,pos){
 // Expected damage this unit could take on this tile next enemy phase.
 const me={...u,x:pos.x,z:pos.z};let dmg=0;
 for(const e of enemies()){
  if(e.status.stun||e.status.sleep)continue;
  const reach=(e.move||3)+(e.range||1);if(T.dist(pos,e)>reach)continue;
  const s=T.basic(e);const est=T.estimate({...e},me,s);dmg+=est.damage*est.hit*(e.boss?1.3:1);
 }
 return dmg;
}
function threatAt(u,pos){
 const inc=expectedIncoming(u,pos),hp=Math.max(1,u.hp),kyle=u.heroId==='kyle';
 let r=inc/hp*30;if(inc>=hp*.95)r+=kyle?400:80;else if(inc>=hp*.6)r+=kyle?80:20;
 return r*(kyle?1.8:1);
}
function candidateTiles(actor,s){
 const tiles=B().tiles;
 if(['heal','buff','cleanse'].includes(s.type)){
  return tiles.filter(t=>T.inRange(actor,t,s)||(s.range===0&&t.x===actor.x&&t.z===actor.z));
 }
 if(s.type==='taunt')return [];
 const near=new Set();
 for(const e of enemies())for(let dx=-(s.area||0);dx<=(s.area||0);dx++)for(let dz=-(s.area||0);dz<=(s.area||0);dz++)near.add(`${e.x+dx},${e.z+dz}`);
 return tiles.filter(t=>near.has(`${t.x},${t.z}`)&&T.inRange(actor,t,s));
}
function actionValue(u,actor,s,t){
 const list=T.targets(actor,t,s);if(!list.length)return -1;
 let v=0;
 if(s.type==='heal'){for(const a of list){const miss=a.maxHp-a.hp;const amt=Math.min(miss,T.estimate(actor,a,s).damage);v+=amt*(a.heroId==='kyle'?1.6:1.2)*(a.hp<a.maxHp*.4?1.5:1);}return v<8?-1:v;}
 if(s.type==='cleanse'){for(const a of list)v+=Object.keys(a.status).filter(k=>['poison','burn','freeze','silence','sleep','stun','defdown'].includes(k)).length*14;return v||-1;}
 if(s.type==='buff'){if(!enemies().some(e=>T.dist(e,actor)<=8))return -1;for(const a of list)if(!a.status[s.buff])v+=9;return v||-1;}
 for(const e of list){
  const est=T.estimate(actor,e,s,t);const dmg=Math.min(e.hp,est.damage*est.hit);
  v+=dmg*(e.boss?1.25:1);
  if(est.damage*0.95>=e.hp)v+=25+(e.elite?15:0)+(e.boss?60:0);
  if(s.status&&!e.boss)v+=6*(s.chance??.5);
 }
 return v;
}
function bestAction(u){
 const moves=u.moved?new Map([[`${u.x},${u.z}`,0]]):T.movement(u);
 let best=null;const skills=usableSkills(u);
 for(const k of moves.keys()){
  const [x,z]=k.split(',').map(Number);const o=T.occ(x,z);if(o&&o.id!==u.id)continue;
  const pos=T.tile(x,z),actor={...u,x,z};
  const risk=threatAt(u,pos)*(FRAGILE[u.heroId]||1)+Math.random()*2;
  for(const {s} of skills){
   for(const t of candidateTiles(actor,s)){
    const val=actionValue(u,actor,s,t);if(val<=0)continue;
    const mpCost=T.skillCost(u,s)*.35;
    const score=val-mpCost-risk;
    if(!best||score>best.score)best={score,x,z,s,t};
   }
  }
 }
 return best;
}
function approachTile(u){
 const moves=T.movement(u);let best=null;
 const es=enemies(),as=allies().filter(a=>a.id!==u.id);
 for(const k of moves.keys()){
  const [x,z]=k.split(',').map(Number);const o=T.occ(x,z);if(o&&o.id!==u.id)continue;
  const pos={x,z},dE=Math.min(...es.map(e=>T.dist(pos,e)));
  const want=HEALERS.includes(u.heroId)?4:(u.range||1)+1;
  const group=as.length?Math.min(...as.map(a=>T.dist(pos,a))):0;
  const score=-Math.abs(dE-want)*3-threatAt(u,pos)*(FRAGILE[u.heroId]||1)-Math.max(0,group-3)*1.5+Math.random();
  if(!best||score>best.score)best={score,x,z};
 }
 return best;
}
function usePotion(u){
 const c=T.save.consumables;
 for(const id of ['hpLarge','hpMedium','hpSmall']){if(c[id]>0){const v=T.CONSUMABLES[id];c[id]--;u.hp=Math.min(u.maxHp,u.hp+Math.round(u.maxHp*v.ratio));return true;}}
 return false;
}
function faceNearest(u){const es=enemies();if(!es.length)return;const n=es.reduce((a,b)=>T.dist(u,a)<=T.dist(u,b)?a:b);u.dir=T.facing(u,n);}
async function allyTurn(){
 const order=allies().sort((a,b)=>(HEALERS.includes(a.heroId)?1:0)-(HEALERS.includes(b.heroId)?1:0));
 for(const u of order){
  if(!B()||B().phase!=='player')return;
  if(u.hp<=0||u.turnFinished)continue;
  const healerNear=allies().some(a=>HEALERS.includes(a.heroId)&&a.id!==u.id&&T.dist(a,u)<=6&&a.mp>=10);
  if(u.hp<u.maxHp*.3&&!healerNear&&usePotion(u)){u.moved=u.acted=u.turnFinished=true;faceNearest(u);continue;}
  const act=bestAction(u);
  if(act&&act.score>-5){
   if(act.x!==u.x||act.z!==u.z)await T.animateMove(u,T.pathfind(u,T.tile(act.x,act.z)));
   if(!B()||B().phase!=='player')return;
   if(u.mp>=T.skillCost(u,act.s))await T.perform(u,act.t,act.s);
  }else{
   const m=approachTile(u);if(m&&(m.x!==u.x||m.z!==u.z))await T.animateMove(u,T.pathfind(u,T.tile(m.x,m.z)));
   // after moving, attack if something came in range
   const after=bestAction({...u,moved:true});
   if(after&&after.score>0&&after.x===u.x&&after.z===u.z&&u.mp>=T.skillCost(u,after.s))await T.perform(u,after.t,after.s);
  }
  u.moved=u.acted=u.turnFinished=true;faceNearest(u);
  if(T.checkEnd())return;
 }
}
let finishInfo=null;
window.__onFinish=(win,b)=>{const ally=b.units.filter(u=>u.team==='ally');finishInfo={win,rounds:b.round,deployed:ally.length,alive:ally.filter(u=>u.hp>0).length,hp:ally.reduce((s,u)=>s+Math.max(0,u.hp),0),maxHp:ally.reduce((s,u)=>s+u.maxHp,0),kyleAlive:ally.some(u=>u.heroId==='kyle'&&u.hp>0),enemies:b.units.filter(u=>u.team==='enemy').length};};
async function playBattle(){
 finishInfo=null;let guard=0;
 T.closeSheet();
 while(B()&&['player','enemy'].includes(B().phase)&&guard++<80){
  if(B().phase==='player'){await allyTurn();if(B()&&B().phase==='player'){delete B().pendingFacing;T.busy=false;await T.endPlayerTurn();}}
  else{await wait(5);if(!T.busy&&B()?.phase==='enemy')await T.enemyTurn();}
  await wait(1);
 }
 await wait(30);T.closeSheet();
 return finishInfo||{win:false,rounds:B()?.round,timeout:true};
}
function autoEquip(){
 const s=T.save;let changed=true,n=0;
 while(changed&&n++<40){changed=false;
  const used=new Set(s.party.flatMap(p=>p.equipped||[]).filter(Boolean));
  for(const p of s.party){
   const h=T.HEROES.find(h=>h.id===p.id);if(h.join>s.chapter&&!p.joined)continue;
   for(const r of s.inventory){if(used.has(r.uid))continue;const g=T.GEAR.find(g=>g.id===r.gearId);if(!g||!T.gearCompatible(g,p.id))continue;
    const slot=T.recommendedGearSlot(p,g);if(slot===null)continue;const old=T.GEAR.find(v=>v.id===T.equippedRecord(p,slot)?.gearId);
    if(T.equipmentValue(g,p.id)-T.equipmentValue(old,p.id)>.5&&(g.bonus.move||0)>=(old?.bonus.move||0)){p.equipped[slot]=r.uid;used.add(r.uid);changed=true;}}
  }
 }
}
function partySnapshot(){const s=T.save;return s.party.filter(p=>p.joined||T.HEROES.find(h=>h.id===p.id).join===0).map(p=>p.level);}
async function runStage(stage,maxTries){
 const tries=[];T.startBattle(stage,true);
 for(let a=1;a<=maxTries;a++){
  const lv=T.save.party.filter(p=>T.HEROES.find(h=>h.id===p.id).join<=stage.chapter).map(p=>p.level);
  const r=await playBattle();r.attempt=a;r.avgLv=+(lv.reduce((x,y)=>x+y,0)/lv.length).toFixed(1);tries.push(r);
  if(r.win)break;
  if(a<maxTries){T.retryBattle();T.closeSheet();T.startBattle(stage,true);T.closeSheet();}
 }
 if(!tries.at(-1).win){
  // A real player keeps retrying until the battle is won; give the campaign that progress so one
  // lost battle does not starve every later battle of experience. The attempts stay recorded as losses.
  if(!B()||!['player','enemy'].includes(B().phase)){T.retryBattle();T.closeSheet();}
  for(const u of B().units)if(u.team==='enemy')u.hp=0;
  T.checkEnd();await wait(50);T.closeSheet();
 }
 return tries;
}
window.__runStory=async(difficulty,maxTries=3)=>{
 T.newJourney(difficulty);T.save.settings.sound=false;T.save.settings.speed=2;T.closeSheet();
 const order=[];for(let c=0;c<10;c++){const st=T.STAGES.filter(s=>s.chapter===c);const story=st.filter(s=>s.kind==='story').sort((a,b)=>a.n-b.n),side=st.filter(s=>s.kind==='side').sort((a,b)=>a.n-b.n),boss=st.find(s=>s.kind==='boss');
  order.push(story[0]);if(side[0])order.push(side[0]);order.push(story[1]);if(side[1])order.push(side[1]);order.push(story[2]);if(boss)order.push(boss);}
 const out=[];
 for(const stage of order){
  const tries=await runStage(stage,maxTries);const last=tries.at(-1);
  if(!last.win&&!T.save.completed.includes(stage.id)){T.save.completed.push(stage.id);} // let the campaign continue
  autoEquip();
  out.push({id:stage.id,name:stage.name,kind:stage.kind,level:stage.level,tries});
  window.__progress=`${difficulty} ${stage.id}`;
 }
 return out;
};
window.__runMission=async(chapter,difficulty,maxTries=3)=>{
 T.missionSelection={chapter,difficulty};T.beginMission();T.save.settings.sound=false;T.save.settings.speed=2;T.closeSheet();
 const out=[];
 for(const stage of T.missionStages(chapter)){
  const tries=await runStage(stage,maxTries);
  if(!tries.at(-1).win&&!T.save.completed.includes(stage.id))T.save.completed.push(stage.id);
  autoEquip();
  out.push({id:stage.id,name:stage.name,kind:stage.kind,level:stage.level,tries});
 }
 T.closeSheet();T.exitMission();T.closeSheet();
 return out;
};
})();
