

/*
 cnation TACTICS game code. Requires vendor/three-r170.js (global CNATION3D) loaded first.
 Version history: revisions.html
*/
(()=>{
const THREE=CNATION3D;const {mergeGeometries}=CNATION3D;
// cnation TACTICS. All art and sounds are procedural. No external assets.
const GAME_VERSION='1.5.6';
// v1.5.0: WASD camera panning (held keys, applied each frame in renderLoop).
var heldPanKeys=new Set();const PAN_KEYS={KeyW:[0,1],KeyS:[0,-1],KeyA:[-1,0],KeyD:[1,0]};
const $=s=>document.querySelector(s), clamp=(v,a,b)=>Math.max(a,Math.min(b,v)), copy=o=>JSON.parse(JSON.stringify(o)), sleep=ms=>new Promise(r=>setTimeout(r,ms/(save?.settings.speed||1)/visualSlow)), dist=(a,b)=>Math.abs(a.x-b.x)+Math.abs(a.z-b.z), key=(x,z)=>`${x},${z}`;
const HEROES=[
{id:'kyle',name:'카일',icon:'⚔',job:['검사','기사','성기사','소드마스터'],color:0x438fac,hair:0x855537,hp:108,mp:16,atk:25,def:16,mag:10,res:12,spd:12,move:4,jump:1,crit:.10,eva:.03,range:1,join:0,skills:['flame','break','windblade','valor','arcaslash','iceblade','stormblade'],passive:['강인함: HP +10%','검의 의지: 치명타 +5%']},
{id:'ria',name:'리아',icon:'✦',job:['마도사','현자','아르카 메이지'],color:0xb998d0,hair:0xe4e4ee,hp:74,mp:55,atk:10,def:8,mag:30,res:22,spd:11,move:3,jump:1,crit:.10,eva:.04,range:2,join:0,skills:['fire','ice','thunder','storm','meteor','windlance','whirlwind'],passive:['에테르 순환: 매 턴 MP +4','마력 공명: 마법 피해 +15%']},
{id:'bran',name:'브란',icon:'⬟',job:['전사','수호기사','가디언'],color:0xb88752,hair:0x66492e,hp:150,mp:14,atk:24,def:26,mag:9,res:15,spd:8,move:3,jump:1,crit:.10,eva:.01,range:1,join:1,skills:['bash','taunt','guard','quake','fortress','firesheild','icebash'],passive:['강철 갑옷: DEF +15%','불굴: 최대 HP +20%']},
{id:'sera',name:'세라',icon:'➶',job:['궁수','레인저','호크아이'],color:0x7baf75,hair:0xe2bc69,hp:88,mp:16,atk:26,def:11,mag:13,res:13,spd:16,move:4,jump:2,crit:.12,eva:.08,range:4,minRange:2,join:2,skills:['pierce','poison','volley','windstep','hawk','flamearrow','icearrow','galearrow'],passive:['고지 사격: 고지 피해 추가 +15%','정밀 사격: 명중 +10%']},
{id:'luna',name:'루나',icon:'✧',job:['사제','성직자','세인트'],color:0xe9d9a0,hair:0xcf8d85,hp:82,mp:62,atk:12,def:12,mag:26,res:25,spd:10,move:3,jump:1,crit:.10,eva:.04,range:2,join:3,skills:['heal','purify','blessing','holy','miracle','waterwave','windblessing'],passive:['자애: 회복량 +15%','축복의 샘: 매 턴 MP +5']},
{id:'nero',name:'네로',icon:'◈',job:['도적','어쌔신','섀도우'],color:0x616c99,hair:0x33394d,hp:90,mp:24,atk:28,def:10,mag:15,res:14,spd:22,move:6,jump:2,crit:.18,eva:.17,range:1,join:4,skills:['backstab','sleep','silence','shadowstep','eclipse','firecurse','iceprison'],passive:['암습: 후방 피해 추가 +25%','잔상: 회피 +10%']}
];
const SKILLS={
flame:{name:'화염검',mp:7,type:'physical',power:1.3,range:1,area:0,element:'fire',status:'burn',chance:.6},
break:{name:'갑옷 가르기',mp:9,type:'physical',power:1.4,range:1,debuff:'def'},
windblade:{name:'바람의 칼날',mp:12,type:'physical',power:1.25,range:3,area:1,element:'wind'},
valor:{name:'용기의 맹세',mp:10,type:'buff',range:0,area:2,buff:'atk'},
iceblade:{name:'얼음 베기',mp:8,type:'physical',power:1.35,range:1,element:'water',debuff:'slow',unlock:4},
stormblade:{name:'폭풍 베기',mp:12,type:'physical',power:1.45,range:1,area:1,element:'wind',knockback:true,unlock:8},
windlance:{name:'바람의 창',mp:16,type:'magic',power:1.7,range:4,element:'wind',unlock:8},
whirlwind:{name:'회오리 폭풍',mp:35,type:'magic',power:1.2,range:4,area:2,element:'wind',debuff:'slow',unlock:14},
flamearrow:{name:'화염 화살',mp:6,type:'physical',power:1.3,range:5,minRange:2,element:'fire',status:'burn',chance:.75,unlock:4},
icearrow:{name:'얼음 화살',mp:6,type:'physical',power:1.25,range:5,minRange:2,element:'water',debuff:'slow',unlock:8},
galearrow:{name:'질풍 화살',mp:10,type:'physical',power:1.3,range:7,minRange:2,element:'wind',unlock:14},
firesheild:{name:'화염 방패',mp:10,type:'buff',range:0,buff:'counter',element:'fire',unlock:4},
icebash:{name:'빙벽 강타',mp:9,type:'physical',power:1.3,range:1,element:'water',debuff:'slow',unlock:8},
waterwave:{name:'정화의 물결',mp:12,type:'magic',power:1.2,range:3,area:1,element:'water',cleanse:true,unlock:8},
windblessing:{name:'바람의 축복',mp:10,type:'buff',range:2,buff:'speed',element:'wind',unlock:14},
firecurse:{name:'화염 저주',mp:10,type:'physical',power:1.25,range:3,element:'fire',status:'burn',chance:1,unlock:8},
iceprison:{name:'얼음 감옥',mp:12,type:'physical',power:1.15,range:3,element:'water',debuff:'stun',unlock:14},
arcaslash:{name:'아르카 참격',mp:22,type:'physical',power:2.2,range:3,area:1,heightRange:99,element:'light'},
fire:{name:'파이어',mp:8,type:'magic',power:1.25,range:4,area:1,heightRange:1,element:'fire',status:'burn',chance:.3},
ice:{name:'프로스트',mp:10,type:'magic',power:1.15,range:4,area:1,heightRange:2,element:'ice',status:'freeze',chance:.45},
thunder:{name:'썬더',mp:13,type:'magic',power:1.6,range:5,area:0,heightRange:99,element:'thunder',status:'stun',chance:.4},
storm:{name:'파이어 스톰',mp:45,type:'magic',power:1.35,range:4,area:2,shape:'square',heightRange:1,element:'fire'},
meteor:{name:'메테오',mp:60,type:'magic',power:1.98,range:6,area:2,heightRange:99,element:'fire'},
bash:{name:'실드 배시',mp:6,type:'physical',power:1.1,range:1,status:'stun',chance:.6},
taunt:{name:'도발',mp:8,type:'taunt',range:0,area:3},
guard:{name:'수호의 진',mp:12,type:'buff',range:0,area:2,buff:'def'},
quake:{name:'대지 충격',mp:16,type:'physical',power:1.4,range:1,area:1,heightRange:2},
fortress:{name:'철벽의 성채',mp:22,type:'buff',range:0,area:5,buff:'fortress'},
pierce:{name:'관통 사격',mp:7,type:'physical',power:1.4,range:5,minRange:2,ignore:.5},
poison:{name:'독화살',mp:8,type:'physical',power:1.1,range:4,status:'poison',chance:1},
volley:{name:'화살비',mp:14,type:'physical',power:1.1,range:5,area:1,heightRange:99},
windstep:{name:'바람 걸음',mp:9,type:'buff',range:0,area:1,buff:'speed',element:'wind'},
hawk:{name:'매의 심판',mp:25,type:'physical',power:2.4,range:7,heightRange:99,ignore:.7},
heal:{name:'힐',mp:10,type:'heal',power:1.6,range:4,element:'light'},
purify:{name:'정화',mp:6,type:'cleanse',range:4,area:1,element:'light'},
blessing:{name:'빛의 축복',mp:12,type:'buff',range:3,area:1,buff:'atk',element:'light'},
holy:{name:'홀리',mp:14,type:'magic',power:1.5,range:4,area:1,heightRange:2,element:'light'},
miracle:{name:'생명의 기적',mp:30,type:'heal',power:2.5,range:5,area:3,heightRange:99,cleanse:true,element:'light'},
backstab:{name:'그림자 찌르기',mp:7,type:'physical',power:1.5,range:1,ignore:.3},
sleep:{name:'수면 단검',mp:9,type:'physical',power:1,range:2,status:'sleep',chance:.7},
silence:{name:'침묵의 표식',mp:10,type:'physical',power:1.25,range:3,status:'silence',chance:1,element:'dark'},
shadowstep:{name:'잔상',mp:9,type:'buff',range:0,area:0,buff:'eva',element:'dark'},
eclipse:{name:'월식',mp:25,type:'physical',power:2.1,range:2,area:1,heightRange:99,element:'dark',status:'poison',chance:1}
};
const ELEMENT={fire:'🔥 불',water:'💧 물',ice:'💧❄️ 물·냉기',thunder:'⚡ 번개',wind:'🪽 바람',light:'✨ 빛',dark:'🌑 암흑'}, STATUS={poison:'독',burn:'화상',freeze:'빙결',silence:'침묵',sleep:'수면',stun:'기절',atk:'공격↑',def:'방어↑',speed:'이동↑',eva:'회피↑',fortress:'철벽',defdown:'방어↓',taunt:'도발',counter:'화염 반격'};
const elementFamily=e=>e==='ice'?'water':e;
function magicAffinity(attack,target){const a=elementFamily(attack),b=elementFamily(target);if(!a||!b)return 1;if((a==='light'&&b==='dark')||(a==='dark'&&b==='light'))return 1.25;const advantage={fire:'wind',wind:'water',water:'fire'};return !advantage[a]||!advantage[b]?1:advantage[a]===b?1.25:advantage[b]===a?0.75:1;}
const UNLOCK=[1,4,8,14,20];
const skillUnlock=(id,index)=>SKILLS[id]?.unlock??UNLOCK[index]??20;
const CHAPTERS=[
['PROLOGUE','깨어난 빛','국경 마을 에린',['유적의 문','잠든 소녀','마을로 돌아가는 길'],[['카일','이런 곳에 사람이… 괜찮아? 내 목소리 들려?'],['리아','리아… 내 이름은 리아. 그 외에는 아무것도 기억나지 않아.'],['카일','뒤에서 뭔가 움직여. 내 곁에 있어. 함께 빠져나가자.']]],
['CHAPTER 01','국경의 불꽃','에린 남문',['불타는 파수대','남문의 방패','국경을 넘어서'],[['브란','제국군이 마을을 포위했다. 퇴로는 내가 열겠다.'],['리아','저 병기들… 나를 찾고 있는 것 같아.'],['카일','누구에게도 넘기지 않아. 모두 살아서 나간다.']]],
['CHAPTER 02','도망자','회색 산맥',['산길의 매복','바람의 궁수','흔들리는 다리'],[['세라','그 길은 막혔어. 살아서 산을 넘고 싶다면 따라와.'],['카일','우릴 왜 도와주는 거지?'],['세라','제국이 태운 마을이 너희 마을뿐인 줄 알아?']]],
['CHAPTER 03','고대의 숲','엘렌 숲',['정령의 속삭임','오염된 샘','숲의 심장'],[['루나','정령들이 울고 있어요. 에테르의 흐름이 뒤틀렸어요.'],['리아','이 숲의 노래… 어디선가 들었어.'],['루나','당신을 두려워하는 게 아니에요. 기다리고 있었던 거예요.']]],
['CHAPTER 04','왕도의 그림자','왕도 레온',['지붕 위의 추적','봉인된 기록','왕의 침묵'],[['네로','왕궁 기록에 네 이름이 있더라. 백 년 전 문서에.'],['리아','내가… 백 년 전에?'],['네로','답을 원하면 지하 서고로 와. 경비병들은 알아서 피하고.']]],
['CHAPTER 05','두 왕국','벨른 평원',['갈라진 깃발','연합의 방어선','새벽의 진군'],[['브란','두 왕국이 등을 돌린 사이 제국은 코어를 깨우고 있다.'],['세라','왕들이 못 정하면 우리가 길을 열면 돼.'],['카일','사람들을 지키자. 어느 깃발 아래에 있든.']]],
['CHAPTER 06','아르카 유적','아르카 외곽',['강철의 기억','에테르 수로','봉인의 문'],[['리아','나는 병기가 아니야. 병기를 멈추기 위한 열쇠였어.'],['루나','그렇다면 이번에도 멈출 수 있어요.'],['카일','과거가 널 정하게 두지 마. 지금의 선택은 네 거야.']]],
['CHAPTER 07','배신자','검은 첨탑',['부서진 맹세','거짓된 명령','첨탑의 진실'],[['네로','연합군의 좌표를 넘긴 건 왕의 고문이었어.'],['브란','우리를 미끼로 썼다는 건가.'],['리아','코어가 모든 전장의 에테르를 흡수하고 있어. 전쟁 자체가 함정이야.']]],
['CHAPTER 08','제국 수도','북부 제국 아스켈',['제국의 성문','황혼의 광장','왕좌 너머'],[['세라','성문이 열렸어. 이젠 물러설 곳이 없어.'],['카일','우린 제국을 무너뜨리러 온 게 아니야. 전쟁을 끝내러 왔어.'],['리아','코어의 목소리가 가까워지고 있어. 서둘러야 해.']]],
['FINAL','마지막 아르카','코어의 심층',['기억의 회랑','여섯 개의 빛','마지막 아르카'],[['리아','다시 나를 봉인하면 모든 걸 멈출 수 있어.'],['카일','그건 백 년 전의 답이야. 이번에는 혼자가 아니잖아.'],['리아','응. 이번에는… 모두 함께 돌아가자.']]]
];
const BOSS_NAMES=['','제국의 집행관','산맥의 폭군','타락한 수호목','그림자 재상','전쟁의 골렘','아르카 감시자','검은 대공','황제의 잔영'];
const BOSS_PROFILES={
 1:{model:'knight',color:0x925d61,element:'fire',wave:'집행의 화염',status:'burn',summon:3,radius:1,power:1.3,finisher:'붉은 판결'},
 2:{model:'golem',color:0x819cae,element:'ice',wave:'빙벽 붕괴',status:'freeze',summon:2,radius:2,power:1.2,finisher:'설산의 격돌'},
 3:{model:'treant',color:0x61876b,element:'wind',wave:'독성 포자',status:'poison',summon:8,radius:2,power:1.15,finisher:'오염된 뿌리'},
 4:{model:'ghost',color:0x786888,element:'dark',wave:'침묵의 장막',status:'silence',summon:5,radius:1,power:1.45,finisher:'그림자 칙령'},
 5:{model:'golem',color:0x8d8580,element:'thunder',wave:'전쟁 포격',status:'stun',summon:3,radius:2,power:1.35,finisher:'철의 폭격'},
 6:{model:'sentinel',color:0x759fa1,element:'thunder',wave:'감시 광선',status:'silence',summon:6,radius:1,power:1.55,finisher:'과부하 방출'},
 7:{model:'dragon',color:0x514e71,element:'dark',wave:'암흑 숨결',status:'poison',summon:8,radius:2,power:1.4,finisher:'검은 날개의 추락'},
 8:{model:'knight',color:0xc3a77b,element:'light',wave:'왕권의 섬광',status:'stun',summon:4,radius:1,power:1.65,finisher:'황제의 선고'},
 9:{model:'arcacore',color:0xa9c7bd,element:'light',wave:'아르카 공명',status:'stun',summon:9,radius:2,power:1.7,finisher:'코어 폭주'}
};
const SIDE_MISSIONS=[
 [{name:'유적의 잔향',goal:'defeat',focus:0},{name:'사라진 보급대',goal:'defeat',focus:1}],
 [{name:'잿더미의 약속',goal:'defeat',focus:3},{name:'남문의 잔불',goal:'defeat',focus:1}],
 [{name:'바람길 정찰',goal:'defeat',focus:2},{name:'협곡의 피난민',goal:'defeat',focus:4}],
 [{name:'오염된 뿌리',goal:'defeat',focus:8},{name:'숲의 샘을 지켜라',goal:'defeat',focus:0}],
 [{name:'그림자 문서',goal:'defeat',focus:5},{name:'밤의 연락망',goal:'defeat',focus:4}],
 [{name:'갈라진 전선',goal:'defeat',focus:3}],
 [{name:'무너진 수로',goal:'defeat',focus:6}],
 [{name:'배신자의 흔적',goal:'defeat',focus:5}],
 [{name:'수도의 피난길',goal:'defeat',focus:3}],
 [{name:'마지막 에테르',goal:'defeat',focus:9}]
];
const STAGE_DIALOGUES={
 c0s0:[['카일','이런 곳에 사람이… 괜찮아? 내 목소리 들려?'],['리아','리아… 내 이름은 리아. 그 외에는 아무것도 기억나지 않아.'],['카일','문이 열렸어. 움직이는 병기를 막고 함께 나가자.']],
 c0s1:[['리아','안쪽에 잠든 기록이 있어. 누군가 내 이름을 부르는 것 같아.'],['카일','기억을 찾더라도 무리하지 마. 내가 앞에서 길을 열게.']],
 c0s2:[['카일','에린으로 돌아가는 길에 병기들이 몰렸어. 마을까지 끌고 갈 수는 없어.'],['리아','여기서 막자. 내가 배운 마법을 시험해 볼게.']],
 c0q0:[['리아','유적 주변의 에테르 조각이 몬스터를 불러 모으고 있어.'],['카일','조각을 모으는 사람들을 위해 주변을 정리하자.']],
 c0q1:[['카일','보급대가 지나간 흔적이 여기서 끊겼어.'],['리아','저편의 신호까지 가 보면 살아남은 사람을 찾을 수 있을 거야.']],
 c1s0:[['브란','파수대가 불타고 있다. 내가 방패를 들 테니 퇴로를 확보해.'],['카일','우리가 버티는 동안 주민들을 먼저 보내자.']],
 c1s1:[['브란','남문을 지키는 병사들이 아직 후퇴하지 못했다.'],['리아','조금만 더 버티면 모두 빠져나갈 수 있어.']],
 c1s2:[['카일','국경 검문소까지 왔어. 여기만 지나면 제국의 추격을 늦출 수 있어.'],['브란','길을 뚫고 끝까지 함께 간다.']],
 c1q0:[['브란','불길 속에 남은 사람들의 약속을 지켜야 한다.'],['카일','증원군이 오기 전까지 이 자리를 사수하자.']],
 c1q1:[['리아','남문 봉화가 아직 꺼지지 않았어.'],['브란','봉화대에 도착하면 흩어진 병사들이 길을 찾을 수 있다.']],
 c1b:[['집행관','리아를 넘겨라. 제국의 명령은 철회되지 않는다.'],['카일','사람을 물건처럼 부르는 명령이라면 여기서 끝내겠어.']],
 c2s0:[['세라','산길에 매복이 있어. 바람이 멎은 곳을 조심해.'],['카일','우리가 먼저 자리를 잡고 포위를 끊자.']],
 c2s1:[['세라','산등성이에서 제국 정찰병이 신호를 보내고 있어.'],['리아','신호를 끊으면 추격대가 길을 잃을 거야.']],
 c2s2:[['세라','다리가 흔들려. 반대편 표식에 먼저 닿아야 해.'],['카일','뒤는 내가 막을게. 모두 차례대로 건너.']],
 c2q0:[['세라','바람길 표식이 지워졌어. 정찰 지점까지 가서 다시 세워야 해.'],['리아','높은 곳을 지키는 적부터 살펴보자.']],
 c2q1:[['세라','피난민들이 협곡 아래에 숨어 있어.'],['카일','추격대가 지나갈 때까지 이 입구를 지키자.']],
 c2b:[['폭군','크르르… 산을 넘는 자는 모두 내 먹이다.'],['세라','놈이 고지를 차지했어. 얼음 공격을 피하며 틈을 찾아.']],
 c3s0:[['루나','숲의 정령들이 같은 말을 반복해요. 뿌리 아래에 독이 스며들었다고.'],['리아','흐름을 따라가면 오염의 근원을 찾을 수 있어.']],
 c3s1:[['루나','샘물이 어두워졌어요. 이대로면 마을까지 퍼져요.'],['브란','주변의 적을 몰아내고 정화할 시간을 벌자.']],
 c3s2:[['리아','숲의 심장에서 코어와 닮은 맥박이 느껴져.'],['루나','두려워도 들어가야 해요. 정령들이 우리를 기다려요.']],
 c3q0:[['루나','썩은 뿌리가 길마다 솟아나고 있어요.'],['카일','오염이 번지기 전에 뿌리 주변의 적을 없애자.']],
 c3q1:[['루나','샘을 정화하는 동안 저는 움직일 수 없어요.'],['브란','그럼 우리가 여기서 버틴다. 한 발도 넘겨주지 마.']],
 c3b:[['수호목','숲을 해친 자여… 뿌리 속으로 돌아가라.'],['루나','오염 때문에 우리를 구별하지 못해요. 쓰러뜨린 뒤 정화해야 해요.']],
 c4s0:[['네로','왕궁 지붕에 감시자가 깔렸어. 아래로 내려가면 포위당한다.'],['세라','그럼 위에서 먼저 길을 확보하자.']],
 c4s1:[['네로','봉인된 기록은 서고 안쪽에 있어. 왕의 허가를 기다릴 시간은 없어.'],['리아','내 이름이 적힌 페이지를 직접 확인할게.']],
 c4s2:[['카일','왕은 리아의 기록을 알고도 숨겼어. 이유를 들어야겠어.'],['네로','침묵시키려는 호위병부터 지나가야 해.']],
 c4q0:[['네로','서고의 사본이 비밀 통로로 옮겨지고 있어.'],['리아','기록이 사라지기 전에 끝 지점까지 가자.']],
 c4q1:[['네로','연락책이 모두 끊겼어. 그림자 재상의 부하가 움직인 거야.'],['세라','놈들의 신호망을 여기서 끊자.']],
 c4b:[['재상','진실은 왕국을 무너뜨린다. 너희에게 보여 줄 수 없어.'],['네로','그 말로 사람을 가두는 시대는 끝났어.']],
 c5s0:[['브란','양쪽 군대가 서로를 적으로 보고 있다.'],['카일','코어가 진짜 위협이라는 걸 보여 줄 틈을 만들자.']],
 c5s1:[['루나','연합 진지가 무너지고 있어요. 부상자들이 뒤에 남아 있어요.'],['브란','후퇴가 끝날 때까지 전선을 지킨다.']],
 c5s2:[['세라','새벽에 병기 행렬이 움직여. 지금 길을 열어야 해.'],['리아','코어로 향하는 수송로를 끊으면 시간을 벌 수 있어.']],
 c5q0:[['브란','갈라진 전선 사이에 민간인이 갇혔다.'],['카일','누구의 깃발인지 묻지 말고 구조가 끝날 때까지 버티자.']],
 c5b:[['골렘','전쟁 명령 수신. 전장을 소거한다.'],['리아','저 장갑은 정면에서 버티기 어려워. 빈틈이 생기는 순간을 노려.']],
 c6s0:[['리아','유적 벽에 백 년 전 전쟁의 기록이 남아 있어.'],['카일','기억을 되찾는 동안 병기가 다가오지 못하게 하자.']],
 c6s1:[['루나','에테르 수로가 넘치고 있어요. 다리를 건너 제어 장치에 닿아야 해요.'],['네로','물길을 피해 가장 짧은 길을 찾을게.']],
 c6s2:[['리아','봉인의 문 너머에 코어의 목소리가 있어.'],['카일','문을 열기 전에 경비 병기부터 멈추자.']],
 c6q0:[['네로','수로의 조절판이 무너졌어. 반대편 장치까지 갈 길은 하나야.'],['루나','흐름이 커지기 전에 도착해야 해요.']],
 c6b:[['감시자','인가되지 않은 접근. 정화 절차를 시작한다.'],['리아','번개 충전이 보이면 흩어져. 패턴을 읽으면 멈출 수 있어.']],
 c7s0:[['브란','우리가 믿었던 명령이 거짓이었다. 하지만 남은 병사들은 몰라.'],['카일','그들을 모두 적으로 만들기 전에 길을 열자.']],
 c7s1:[['네로','좌표를 넘긴 흔적은 첨탑 위층에 남아 있어.'],['세라','위에서 내려오는 공격을 피하며 올라가자.']],
 c7s2:[['리아','코어가 전장의 에테르를 흡수하고 있었어.'],['카일','그 사실을 가지고 반드시 살아서 나가야 해.']],
 c7q0:[['네로','배신자의 전령이 증거를 태우려 해.'],['브란','도망치기 전에 이곳의 병력을 제압하자.']],
 c7b:[['대공','진실을 알아도 이미 늦었다. 전쟁은 코어의 양식이다.'],['네로','늦었는지는 네가 정하지 않아.']],
 c8s0:[['세라','제국 성문 안쪽에 피난길이 있어. 공격만 하면 주민도 갇혀.'],['카일','문을 열고 병기만 막는다.']],
 c8s1:[['리아','광장의 에테르가 한곳으로 모이고 있어.'],['루나','사람들을 보내는 동안 이 자리를 지켜요.']],
 c8s2:[['카일','왕좌 뒤에 코어로 가는 통로가 있다.'],['브란','마지막 문 앞까지 함께 간다.']],
 c8q0:[['세라','수도 주민들이 아직 광장을 벗어나지 못했어.'],['루나','피난 행렬이 지나갈 때까지 방어선을 유지해요.']],
 c8b:[['잔영','제국의 의지는 영원하다. 누구도 왕좌를 넘지 못한다.'],['카일','왕좌가 아니라 전쟁을 끝내러 왔다.']],
 c9s0:[['리아','회랑마다 내가 잊은 기억이 남아 있어.'],['카일','기억 속에 갇히지 마. 지금 우리는 함께 있어.']],
 c9s1:[['루나','여섯 사람의 에테르가 하나의 길을 만들고 있어요.'],['브란','길이 닫히기 전에 코어를 향해 나아가자.']],
 c9s2:[['리아','나를 다시 봉인하면 멈출 수 있어. 하지만 그건 백 년 전의 답이야.'],['카일','이번에는 모두 함께 돌아간다. 코어를 부수자.']],
 c9q0:[['리아','마지막 에테르 결정이 회랑 끝에서 빛나고 있어.'],['네로','병기보다 먼저 거기에 닿아 길을 고정하자.']]
};
const STAGES=[];let prior=null;
for(let c=0;c<10;c++){
 for(let n=0;n<3;n++){let s={id:`c${c}s${n}`,chapter:c,n,name:CHAPTERS[c][3][n],level:1+c*3+n,kind:'story',prev:prior,goal:'defeat',seed:c*173+n*41+19};STAGES.push(s);prior=s.id;}
  for(let n=0;n<SIDE_MISSIONS[c].length;n++)STAGES.push({id:`c${c}q${n}`,chapter:c,n,...SIDE_MISSIONS[c][n],level:2+c*3+n,kind:'side',prev:`c${c}s${Math.min(n,1)}`,seed:c*91+n*73+703});
 if(c>0&&c<9){const s={id:`c${c}b`,chapter:c,n:3,name:BOSS_NAMES[c],level:c*3+3,kind:'boss',prev:prior,goal:'defeat',seed:c*181+321};STAGES.push(s);prior=s.id;}
}
const MONSTERS=[
{name:'이끼 슬라임',model:'slime',color:0x8cc87d,hp:44,atk:14,def:7,mag:9,res:8,range:1,move:3,element:'wind'},
{name:'고블린',model:'goblin',color:0xb4ab62,hp:63,atk:19,def:9,mag:7,res:7,range:1,move:4},
{name:'서리 늑대',model:'wolf',color:0xafc9d3,hp:60,atk:21,def:9,mag:8,res:10,range:1,move:5,element:'water'},
{name:'제국 보병',model:'knight',color:0x9d7370,hp:78,atk:22,def:16,mag:8,res:10,range:1,move:3},
{name:'제국 석궁병',model:'archer',color:0x807b95,hp:56,atk:23,def:9,mag:8,res:10,range:4,minRange:2,move:3},
{name:'에테르 망령',model:'ghost',color:0xaaa5df,hp:54,atk:14,def:7,mag:24,res:20,range:3,move:3,magic:true,element:'wind',immunity:'physical'},
{name:'수호 골렘',model:'golem',color:0x8e9e93,hp:115,atk:26,def:22,mag:14,res:8,range:1,move:2,immunity:'magic'},
 {name:'화염 정령',model:'flameSpirit',color:0xe4a26c,hp:61,atk:15,def:7,mag:26,res:22,range:3,move:3,magic:true,element:'fire'},
{name:'독거미',model:'spider',color:0x9a76ad,hp:57,atk:20,def:11,mag:12,res:12,range:1,move:5,status:'poison'},
{name:'아르카 비룡',model:'dragon',color:0x6da9a4,hp:110,atk:28,def:17,mag:25,res:20,range:2,move:4,element:'wind'},
{name:'붉은 진흙 슬라임',model:'slime',color:0xb98255,hp:57,atk:17,def:11,mag:8,res:8,range:1,move:3,element:'fire'},
{name:'모래 약탈자',model:'goblin',color:0xc3975f,hp:69,atk:23,def:10,mag:8,res:9,range:1,move:4},
{name:'회오리 매',model:'dragon',color:0x9cbea9,hp:54,atk:22,def:8,mag:19,res:13,range:2,move:5,element:'wind'},
{name:'늪지 사냥꾼',model:'spider',color:0x62866d,hp:65,atk:21,def:12,mag:12,res:13,range:1,move:4,status:'poison',element:'water'},
{name:'잿불 정령',model:'flameSpirit',color:0xd9684b,hp:72,atk:16,def:8,mag:29,res:21,range:3,move:3,magic:true,element:'fire'},
{name:'강철 척후병',model:'knight',color:0x6b8290,hp:83,atk:25,def:18,mag:9,res:11,range:1,move:4},
{name:'사막 궁수',model:'archer',color:0xc49d68,hp:61,atk:26,def:9,mag:9,res:10,range:4,minRange:2,move:3},
{name:'물안개 유령',model:'ghost',color:0x83bac4,hp:61,atk:14,def:8,mag:26,res:20,range:3,move:3,magic:true,element:'water',immunity:'physical'},
{name:'사암 골렘',model:'golem',color:0xc4a478,hp:126,atk:29,def:23,mag:12,res:8,range:1,move:2,immunity:'magic'},
{name:'가시 덩굴병',model:'treant',color:0x79965a,hp:91,atk:25,def:15,mag:16,res:15,range:2,move:2,element:'wind'},
{name:'황혼의 추적자',model:'wolf',color:0x78687e,hp:78,atk:30,def:11,mag:13,res:14,range:1,move:5},
{name:'화염 포격병',model:'archer',color:0xab6656,hp:73,atk:24,def:12,mag:29,res:17,range:4,minRange:2,move:3,magic:true,element:'fire'},
{name:'심연의 파수꾼',model:'sentinel',color:0x587b88,hp:102,atk:29,def:20,mag:23,res:19,range:2,move:3,element:'water'},
{name:'검은 숲 정령',model:'treant',color:0x526c62,hp:94,atk:23,def:16,mag:27,res:18,range:3,move:2,magic:true,element:'wind'}
,
{name:'화염 늑대',model:'wolf',color:0xe05a35,hp:70,atk:25,def:9,mag:8,res:10,range:1,move:6,element:'fire'},
{name:'잿불 궁수',model:'archer',color:0xc45b3a,hp:58,atk:24,def:8,mag:10,res:11,range:4,minRange:2,move:3,element:'fire'},
{name:'빙결 골렘',model:'golem',color:0x8fc9e8,hp:140,atk:25,def:30,mag:10,res:18,range:1,move:2,element:'water',immunity:'magic'},
{name:'물안개 독거미',model:'spider',color:0x5fa6c9,hp:65,atk:26,def:10,mag:12,res:14,range:1,move:6,eva:.18,element:'water'},
{name:'폭풍 늑대',model:'wolf',color:0xa9d8e8,hp:72,atk:27,def:10,mag:10,res:12,range:1,move:6,element:'wind'},
{name:'바람 정령',model:'ghost',color:0x9de0d5,hp:65,atk:12,def:8,mag:30,res:28,range:3,move:4,magic:true,element:'wind',immunity:'physical'}];
// Integrated encyclopedia, field loot, and equipment. Included inside the game closure.
const TIERS=['일반','희귀','유니크'],SLOT_NAMES=['무기','방어구','악세서리'];
const EQUIP_SLOT_NAMES=['무기','방어구','악세서리 1','악세서리 2'];
const GEAR_KINDS={sword:{slot:0,label:'검',users:['kyle','bran','nero'],bases:['단검','중검','대검','전설검'],price:1},bow:{slot:0,label:'활',users:['sera'],bases:['단궁','전투궁','장궁','전설궁'],price:1},staff:{slot:0,label:'지팡이',users:['ria','luna'],bases:['나무 지팡이','마도 지팡이','현자 지팡이','전설 지팡이'],price:1},armor:{slot:1,label:'갑옷',bases:['가죽 갑옷','사슬 갑옷','판금 갑옷','전설 갑옷'],price:1.1},amulet:{slot:2,label:'부적',bases:['낡은 부적','수호 부적','정령 부적','전설 부적'],price:.8},ring:{slot:2,label:'반지',bases:['동 반지','은 반지','보석 반지','전설 반지'],price:.85},boots:{slot:2,label:'장화',bases:['가죽 장화','전투 장화','기사 장화','전설 장화'],price:.9},crystal:{slot:2,label:'마력석',bases:['작은 마력석','빛나는 마력석','정령 마력석','전설 마력석'],price:.95}};
const GEAR_PREFIXES=[['여행자','튼튼한','날렵한'],['화염','얼음','폭풍'],['여명의','망각의','아르카의']];
const GEAR=[];
for(let band=0;band<4;band++)for(const [kind,info]of Object.entries(GEAR_KINDS))for(let tier=0;tier<3;tier++)for(let variant=0;variant<3;variant++){
 const factor=[1,1.5,2.15][tier],value=a=>Math.round(a[band]*factor),bonus=kind==='sword'?{atk:value([5,12,23,37])}:kind==='bow'?{atk:value([5,11,22,35]),crit:[.005,.01,.02][tier]}:kind==='staff'?{mag:value([6,14,26,42]),maxMp:value([2,4,7,11])}:kind==='armor'?{def:value([4,9,17,27]),res:value([3,7,14,23])}:kind==='amulet'?{maxHp:value([10,22,40,65]),maxMp:value([2,4,7,10])}:kind==='ring'?{atk:value([2,4,7,11]),mag:value([2,4,7,11]),crit:[.005,.01,.02][tier]}:kind==='boots'?{def:value([1,3,5,8]),eva:[.02,.04,.06][tier],...(tier===2?{move:1}:{})}:{mag:value([3,6,10,16]),res:value([2,4,7,11]),maxMp:value([3,6,10,16])};
 if(variant===1){const stat=info.slot===0?(kind==='staff'?'mag':'atk'):kind==='armor'?'def':kind==='amulet'?'maxHp':kind==='crystal'?'maxMp':'res';bonus[stat]=(bonus[stat]||0)+Math.max(1,Math.round((band+1)*factor));}if(variant===2){const stat=kind==='sword'||kind==='bow'?'crit':kind==='boots'?'eva':'res';bonus[stat]=(bonus[stat]||0)+(stat==='crit'?.005:stat==='eva'?.01:Math.max(1,Math.round((band+1)*factor)));}
 const price=Math.round([150,420,950,1900][band]*info.price*[1,3,8][tier]*(1+variant*.08)/5)*5;
 GEAR.push({id:`lootgear-${kind}-${band}-${tier}-${variant}`,kind,band,slot:info.slot,tier,variant,name:`${GEAR_PREFIXES[tier][variant]} ${info.bases[band]}`,bonus,price,sell:Math.floor(price*.3),users:info.users||null});
}
// Old identifiers remain readable for existing saves; old Epic/Legendary map to unique.
for(let slot=0;slot<3;slot++)for(let old=0;old<4;old++){const ref=GEAR.find(g=>g.kind===['sword','armor','amulet'][slot]&&g.band===old&&g.tier===(old>=2?2:old)&&g.variant===0);GEAR.push({...ref,id:`gear-${slot}-${old}`,legacy:true,users:null,price:[270,975,2700,5700][old],sell:Math.floor([270,975,2700,5700][old]*.3),name:['기존 검','기존 갑옷','기존 부적'][slot]+' '+['일반','희귀','에픽','전설'][old],bonus:slot===0?{atk:[6,15,27,40][old],mag:[5,13,24,36][old]}:slot===1?{def:[5,12,22,34][old],res:[4,10,19,30][old]}:{maxHp:[12,30,55,85][old],crit:[.005,.01,.02,.03][old],move:old===3?1:0}});}
const gearBandForChapter=ch=>ch<2?0:ch<5?1:ch<8?2:3;
const gearTierForChapter=gearBandForChapter;
const gearPrice=g=>g.price,gearSell=g=>g.sell;
const gearCompatible=(g,id)=>!g.users||g.users.includes(id);
const gearUsers=g=>g.users?g.users.map(id=>heroDef(id).name).join(' · '):'모든 캐릭터';
const gearAura=g=>g.tier===2?0xffcc55:g.tier===1?0x65baff:0xaabcae;
const gearThumb=g=>`<div class="gear-thumb rarity-${g.tier}">${gearModelHTML(g)}</div>`;
function chapterGear(ch,kind,tier=0,variant=0){return GEAR.find(g=>!g.legacy&&g.band===gearBandForChapter(ch)&&g.kind===kind&&g.tier===tier&&g.variant===variant);}
const PICKUP_NAMES={gold:'골드',weapon:'무기',armor:'방어구',accessory:'악세서리',potion:'회복약'};
const CONSUMABLES={hpSmall:{name:'소형 체력 회복약',stat:'hp',ratio:.25,price:75},hpMedium:{name:'중형 체력 회복약',stat:'hp',ratio:.45,price:150},hpLarge:{name:'대형 체력 회복약',stat:'hp',ratio:.75,price:300},mpSmall:{name:'소형 마력 회복약',stat:'mp',ratio:.3,price:100},mpLarge:{name:'대형 마력 회복약',stat:'mp',ratio:.65,price:230}};

const mapWidth=b=>b.width||b.size,mapHeight=b=>b.height||b.size;

function validInventory(a){return Array.isArray(a)&&a.length<=1000&&new Set(a.map(v=>v.uid)).size===a.length&&a.every(v=>v&&/^loot-[0-9]+$/.test(v.uid)&&GEAR.some(g=>g.id===v.gearId));}
function validLoot(a,b){return Array.isArray(b.tiles)&&Array.isArray(a)&&a.length<=12&&new Set(a.map(v=>key(v.x,v.z))).size===a.length&&a.every(v=>v&&Object.hasOwn(PICKUP_NAMES,v.type)&&Number.isInteger(v.x)&&Number.isInteger(v.z)&&v.x>=0&&v.z>=0&&v.x<mapWidth(b)&&v.z<mapHeight(b)&&b.tiles[v.z*mapWidth(b)+v.x]?.terrain!=='water'&&typeof v.collected==='boolean'&&Number.isInteger(v.amount)&&v.amount>=1&&v.amount<=1000&&(v.gearId===null||GEAR.some(g=>g.id===v.gearId&&g.slot===['weapon','armor','accessory'].indexOf(v.type)))&&(v.type!=='potion'||!v.consumableId||Object.hasOwn(CONSUMABLES,v.consumableId)));}
function migrateLegacyGear(p,inventory,seq){p.hpRatio??=1;p.equipped??=[null,null,null];while(p.equipped.length<4)p.equipped.push(null);for(let slot=0;slot<3;slot++)if((p.equip?.[slot]||0)>0&&!p.equipped[slot]&&inventory.length<1000){const uid=`loot-${++seq.value}`;inventory.push({uid,gearId:`gear-${slot}-${Math.min(3,p.equip[slot])}`});p.equipped[slot]=uid;}p.equip=[0,0,0];}
function pickupLandingTiles(b,count=2){
 const reached=new Set(),living=b.units.filter(u=>u.team==='ally'&&u.hp>0);
 for(const ally of living.length?living:b.units.filter(u=>u.team==='ally')){
  const first=b.tiles[ally.z*mapWidth(b)+ally.x],seen=new Set([key(ally.x,ally.z)]),queue=[first];
  for(let i=0;i<queue.length;i++){
   const t=queue[i];
   for(const [x,z] of [[t.x+1,t.z],[t.x-1,t.z],[t.x,t.z+1],[t.x,t.z-1]]){
    if(x<0||z<0||x>=mapWidth(b)||z>=mapHeight(b))continue;
    const next=b.tiles[z*mapWidth(b)+x],k=key(x,z),cost=next.terrain==='swamp'?3:['forest','scrub','sand'].includes(next.terrain)?2:1;
    if(seen.has(k)||next.terrain==='water'||Math.abs(next.height-t.height)>ally.jump||cost>ally.move)continue;
    seen.add(k);queue.push(next);
   }
  }
  for(const k of seen)reached.add(k);
 }
 const available=b.tiles.filter(t=>reached.has(key(t.x,t.z))&&t.terrain!=='water'&&t.terrain!=='swamp'&&!b.units.some(u=>u.x===t.x&&u.z===t.z));
 const open=available.filter(t=>!['forest','scrub','sand'].includes(t.terrain));
 return open.length>=count?open:available;
}
function repairPickups(b){
 if(!b.pickups?.length)return;
 const candidates=pickupLandingTiles(b,b.pickups.length),safe=new Set(candidates.map(t=>key(t.x,t.z))),used=new Set(b.pickups.map(v=>key(v.x,v.z)));
 for(const item of b.pickups.filter(v=>!v.collected&&!safe.has(key(v.x,v.z)))){
  const old=key(item.x,item.z),spot=candidates.filter(t=>!used.has(key(t.x,t.z))).sort((a,c)=>dist(a,item)-dist(c,item))[0];
  if(!spot)continue;
  used.delete(old);item.x=spot.x;item.z=spot.z;used.add(key(item.x,item.z));
 }
}
// v1.2.2: declared before the startup save load below; referencing them earlier threw a
// ReferenceError that made every saved game look invalid at startup (continue opened a blank game).
const HERO_LEVEL_CAP=40,LEGACY_HERO_LEVEL_CAP=50;
function normalizeSave(s){for(const p of s.party||[]){clampHeroProgress(p);p.branch=0;p.classLevel=promotionRankFor(p.id,p.level);}for(const p of s.retryParty||[]){clampHeroProgress(p);p.branch=0;p.classLevel=promotionRankFor(p.id,p.level);}s.skippedSides??=[];s.consumables??={hpSmall:0,hpMedium:s.potions||0,hpLarge:0,mpSmall:0,mpLarge:0};for(const side of STAGES.filter(v=>v.kind==='side'&&!s.completed.includes(v.id))){const next=`c${side.chapter}s${side.n+1}`;if((s.completed.includes(next)||s.battle?.stageId===next||s.retry?.stageId===next)&&!s.skippedSides.includes(side.id))s.skippedSides.push(side.id);}s.inventory??=[];s.lootSeq=Math.max(Number.isSafeInteger(s.lootSeq)?s.lootSeq:0,...s.inventory.map(v=>Number(v.uid.slice(5))));const seq={value:s.lootSeq};for(const p of s.party)migrateLegacyGear(p,s.inventory,seq);s.lootSeq=seq.value;if(s.retry){s.retryGold??=s.gold;s.retryInventory??=copy(s.inventory);s.retryConsumables??={hpSmall:0,hpMedium:s.retryPotions??s.potions??0,hpLarge:0,mpSmall:0,mpLarge:0};s.retryLootSeq=Math.max(Number.isSafeInteger(s.retryLootSeq)?s.retryLootSeq:0,...s.retryInventory.map(v=>Number(v.uid.slice(5))));const retrySeq={value:s.retryLootSeq};for(const p of s.retryParty||[])migrateLegacyGear(p,s.retryInventory,retrySeq);s.retryLootSeq=retrySeq.value;}for(const b of [s.battle,s.retry])if(b){if(s.completed.includes(b.stageId)&&!b.rewarded){b.replay=true;b.pickups=[];if(b.mapRules){b.mapRules.itemCount=0;b.mapRules.lootKind='none';}}else if(!b.pickups)b.pickups=makePickups(b,STAGES.find(v=>v.id===b.stageId));else repairPickups(b);const party=b===s.retry?(s.retryParty||s.party):s.party,inventory=b===s.retry?(s.retryInventory||s.inventory):s.inventory;for(const u of b.units||[])if(u.team==='ally'){const record=party.find(p=>p.id===u.heroId);if(record){u.crit=equipmentCriticalRate(record,inventory);if(isPhysicalHero(u)){u.maxMp=physicalMaxMP(record,inventory);u.mp=Math.min(u.mp,u.maxMp);}}}}normalizeStats(s);return s;}
// v1.4.0: journey statistics for the ending. save.stats holds the running totals; each battle collects its own
// numbers in battle.tally (saved with the battle, so a resumed battle keeps them) and adds them to save.stats
// exactly once when it ends (battle.tallied). Retry/retreat restore does not touch save.stats, so losses stay counted.
// save.chronicle keeps the first clear of each chapter's last battle (turns, MVP, date) for the ending recap.
function normalizeStats(s){const keys=['battles','wins','losses','retreats','turns','kills','bossKills','damage','crits','healed','potions','downed','goldEarned','gearEarned','playMs'],st=s.stats&&typeof s.stats==='object'&&!Array.isArray(s.stats)?s.stats:{},out={};for(const k of keys)out[k]=Number.isFinite(st[k])&&st[k]>=0?st[k]:0;out.maxHit=st.maxHit&&Number.isFinite(st.maxHit.v)&&HEROES.some(h=>h.id===st.maxHit.hero)?{v:st.maxHit.v,hero:st.maxHit.hero,skill:String(st.maxHit.skill||'').slice(0,40)}:null;out.mvp={};for(const h of HEROES)out.mvp[h.id]=Number.isInteger(st.mvp?.[h.id])&&st.mvp[h.id]>=0?st.mvp[h.id]:0;out.chapters={};for(let c=0;c<10;c++){const v=st.chapters?.[c]||{},o={};for(const k of ['battles','wins','kills','damage','turns'])o[k]=Number.isFinite(v[k])&&v[k]>=0?v[k]:0;o.mvp={};for(const h of HEROES)o.mvp[h.id]=Number.isInteger(v.mvp?.[h.id])&&v.mvp[h.id]>=0?v.mvp[h.id]:0;out.chapters[c]=o;}s.stats=out;const ch={};if(s.chronicle&&typeof s.chronicle==='object')for(const [id,r] of Object.entries(s.chronicle))if(STAGES.some(v=>v.id===id)&&r&&Number.isInteger(r.turns)&&Number.isFinite(r.date))ch[id]={turns:r.turns,mvp:HEROES.some(h=>h.id===r.mvp)?r.mvp:null,date:r.date,alive:Number.isInteger(r.alive)?r.alive:null,seed:Number.isFinite(r.seed)?r.seed:null,last:validHitRecord(r.last),top:validHitRecord(r.top)};s.chronicle=ch;}
function validHitRecord(h){return h&&Number.isFinite(h.v)&&h.v>=0&&HEROES.some(x=>x.id===h.hero)?{v:h.v,hero:h.hero,skill:String(h.skill||'').slice(0,40),skillId:SKILLS[h.skillId]?h.skillId:null,crit:!!h.crit}:null;}
function ensureStats(){if(!save.stats||!save.chronicle)normalizeStats(save);return save.stats;}
function battleTally(){if(!battle)return null;battle.tally??={damage:0,crits:0,healed:0,potions:0,maxHit:null,by:{}};return battle.tally;}
function skillIdOf(s){return Object.keys(SKILLS).find(k=>SKILLS[k]===s)||Object.keys(SKILLS).find(k=>SKILLS[k].name===s?.name)||null;}
// v1.4.2: besides the totals, remember the battle's biggest hit and its last blow (the boss kill, else the last
// kill) with the skill used, so the ending can replay them.
function tallyHit(u,v,damage,dealt,crit,s){if(u?.team!=='ally'||!u.heroId)return;const t=battleTally();if(!t)return;t.damage+=dealt;if(crit)t.crits++;t.by[u.heroId]=(t.by[u.heroId]||0)+dealt;const hit={v:damage,hero:u.heroId,skill:s.name,skillId:skillIdOf(s),crit:!!crit};if(!t.maxHit||damage>t.maxHit.v)t.maxHit=hit;if(v?.team==='enemy'&&v.hp<=0){t.lastKill=hit;if(v.boss)t.bossKill=hit;}}
function tallyHeal(u,amount){if(u?.team!=='ally'||!u.heroId||!(amount>0))return;const t=battleTally();if(!t)return;t.healed+=amount;t.by[u.heroId]=(t.by[u.heroId]||0)+amount;}
function battleMvp(t){const by=Object.entries(t?.by||{}).filter(([id,v])=>v>0&&HEROES.some(h=>h.id===id)).sort((a,b)=>b[1]-a[1]);return by[0]?.[0]||null;}
function chapterFinalStageId(c){return c===0?'c0s2':c===9?'c9s2':`c${c}b`;}
function recordBattleStats(result){if(!battle||battle.tallied)return;battle.tallied=true;const st=ensureStats(),t=battleTally(),stage=getStage();st.battles++;st[result==='win'?'wins':result==='loss'?'losses':'retreats']++;st.turns+=battle.round;const foes=battle.units.filter(u=>u.team==='enemy'&&u.hp<=0);st.kills+=foes.length;st.bossKills+=foes.filter(u=>u.boss).length;st.downed+=battle.units.filter(u=>u.team==='ally'&&u.hp<=0).length;st.damage+=t.damage;st.crits+=t.crits;st.healed+=t.healed;st.potions+=t.potions;if(t.maxHit&&(!st.maxHit||t.maxHit.v>st.maxHit.v))st.maxHit={...t.maxHit};const cs=stage?st.chapters[stage.chapter]:null;if(cs){cs.battles++;cs.kills+=foes.length;cs.damage+=t.damage;cs.turns+=battle.round;}if(result!=='win')return;const r=battle.reward||{},mvp=battleMvp(t);if(cs){cs.wins++;if(mvp)cs.mvp[mvp]++;}st.goldEarned+=(r.gold||0)+(r.autoLoot?.gold||0);st.gearEarned+=r.autoLoot?.gear||0;if(mvp)st.mvp[mvp]++;if(stage&&stage.id===chapterFinalStageId(stage.chapter)&&!save.chronicle[stage.id])save.chronicle[stage.id]={turns:battle.round,mvp,date:Date.now(),alive:battle.units.filter(u=>u.team==='ally'&&u.hp>0).length,seed:Number.isFinite(battle.mapSeed)?battle.mapSeed:null,last:t.bossKill||t.lastKill||null,top:t.maxHit||null};}
setInterval(()=>{if(!document.hidden&&!isTitle&&save)ensureStats().playMs+=5000;},5000);
function makePickups(b,stage){
 if(b.replay||save.completed.includes(stage.id)){if(b.mapRules){b.mapRules.itemCount=0;b.mapRules.lootKind='none';}return [];}
 const rand=seeded(((b.mapSeed??stage.seed)^stage.seed^4099)>>>0),tiers=[0];if(rand()<.5)tiers.push(0);if(rand()<.2)tiers.push(1);if(rand()<.05)tiers.push(2);const gold=rand()<.5,extraPotion=rand()<.5,candidates=pickupLandingTiles(b,tiers.length+(gold?1:0)+(extraPotion?1:0)),origin=b.units.find(u=>u.team==='ally')||{x:1,z:1},out=[];
 function location(index){const open=candidates.filter(t=>!out.some(v=>v.x===t.x&&v.z===t.z)),spread=open.filter(t=>out.every(v=>dist(t,v)>=3)),pool=spread.length?spread:open;if(!pool.length)return null;const distance=Math.max(mapWidth(b),mapHeight(b));const strategic=pool.filter(t=>{const d=dist(t,origin);return index===0?d>=2&&d<=Math.ceil(distance*.65):d>=Math.floor(distance*.4);});const choices=strategic.length?strategic:pool;return choices[Math.floor(rand()*choices.length)];}
 for(const tier of tiers){const pool=GEAR.filter(g=>!g.legacy&&g.band===gearBandForChapter(stage.chapter)&&g.tier===tier),g=pool[Math.floor(rand()*pool.length)],t=location(out.length);if(t)out.push({id:`field-${out.length}`,type:['weapon','armor','accessory'][g.slot],x:t.x,z:t.z,collected:false,amount:1,gearId:g.id,consumableId:null});}
 if(gold){const t=location(out.length);if(t)out.push({id:`field-${out.length}`,type:'gold',x:t.x,z:t.z,collected:false,amount:50+stage.level*7,gearId:null,consumableId:null});}
 if(extraPotion){const t=location(out.length);if(t)out.push({id:`field-${out.length}`,type:'potion',x:t.x,z:t.z,collected:false,amount:1,gearId:null,consumableId:rollHealthPotion(rand)});}
 if(b.mapRules){b.mapRules.itemCount=out.length;b.mapRules.lootKind='farming';b.mapRules.lootVersion=2;}return out;
}

function collectPickup(u,quiet=false){if(u.team!=='ally'||battle?.replay)return;const item=battle.pickups?.find(v=>!v.collected&&v.x===u.x&&v.z===u.z);if(!item)return;if(item.gearId&&save.inventory.length>=1000){toast('보관함이 가득 찼습니다. 야영지에서 장비를 판매해 주세요.');return;}item.collected=true;let message;if(item.type==='gold'){save.gold+=item.amount;message=`골드 +${item.amount} G`;}else if(item.type==='potion'){const id=item.consumableId||'hpMedium';save.consumables[id]=(save.consumables[id]||0)+item.amount;message=`${CONSUMABLES[id].name} +${item.amount}`;}else{const gear=GEAR.find(g=>g.id===item.gearId);save.inventory.push({uid:`loot-${++save.lootSeq}`,gearId:gear.id});message=`${gear.name} 획득 · ${TIERS[gear.tier]}`;}log(`${u.name}: ${message}`);if(!quiet){toast(message);floating(u,message,'#ffe2a0');sfx('heal');refreshLoot();}}

const SAVE_KEY='cnation-tactics-save-v1';
function validUnitExtras(u){return typeof u.name==='string'&&/^[가-힣A-Za-z0-9 ·_-]{1,40}$/.test(u.name)&&/^[A-Za-z0-9_-]{1,60}$/.test(u.id)&&Number.isFinite(u.mag)&&Number.isFinite(u.res)&&Number.isFinite(u.maxMp)&&u.maxMp>=0&&u.mp>=0&&u.mp<=u.maxMp&&Number.isInteger(u.dir)&&u.dir>=0&&u.dir<=3&&Number.isFinite(u.move)&&u.move>=0&&u.move<=12&&Object.keys(u.status).every(k=>STATUS[k]&&Number.isFinite(u.status[k]))&&(u.team==='enemy'||(u.icon===HEROES.find(h=>h.id===u.heroId)?.icon&&Array.isArray(u.skills)&&u.skills.every(k=>SKILLS[k])));}

const MISSION_SAVE_KEY='cnation-tactics-mission-save-v1';
let missionMode=false,missionBackup=null,missionSelection={chapter:0,difficulty:'normal'};
function activeSaveKey(){return missionMode?MISSION_SAVE_KEY:SAVE_KEY;}
function fresh(difficulty='normal'){return {version:1,inventory:[],lootSeq:0,difficulty,completed:[],skippedSides:[],gold:300,potions:0,consumables:{hpSmall:5,hpMedium:2,hpLarge:2,mpSmall:1,mpLarge:0},party:HEROES.map(h=>({id:h.id,level:1,xp:0,classLevel:0,branch:0,equip:[0,0,0],equipped:[null,null,null,null]})),settings:{speed:1,sound:true,quality:1,bgmVolume:.5},battle:null,retry:null,chapter:0};}
let save=fresh(),battle=null,selected=null,mode='move',skill=null,preview=null,busy=false,isTitle=true,currentChapter=0,toastTimer,modalBack=null;
const initialStoryRecord=readStorySave();if(initialStoryRecord.kind==='valid')save=initialStoryRecord.data;
function validConsumables(v){return v&&Object.keys(CONSUMABLES).every(k=>Number.isSafeInteger(v[k])&&v[k]>=0&&v[k]<=9999);}
function validSave(s){return s&&s.version===1&&(!s.stats||typeof s.stats==='object')&&(!s.chronicle||typeof s.chronicle==='object')&&(!s.inventory||validInventory(s.inventory))&&(!s.retryInventory||validInventory(s.retryInventory))&&(!s.lootSeq||Number.isSafeInteger(s.lootSeq)&&s.lootSeq>=0)&&(!s.consumables||validConsumables(s.consumables))&&(!s.retryConsumables||validConsumables(s.retryConsumables))&&s.party&&s.party.every(p=>!p.equipped||(Array.isArray(p.equipped)&&[3,4].includes(p.equipped.length)&&p.equipped.every((uid,i)=>uid===null||s.inventory?.some(r=>{const g=GEAR.find(g=>g.id===r.gearId);return r.uid===uid&&g?.slot===Math.min(i,2)&&gearCompatible(g,p.id);}))))&&new Set(s.party.flatMap(p=>p.equipped||[]).filter(Boolean)).size===s.party.flatMap(p=>p.equipped||[]).filter(Boolean).length&&['story','normal','tactical'].includes(s.difficulty)&&Array.isArray(s.completed)&&s.completed.every(v=>STAGES.some(t=>t.id===v))&&(!s.skippedSides||Array.isArray(s.skippedSides)&&new Set(s.skippedSides).size===s.skippedSides.length&&s.skippedSides.every(v=>STAGES.some(t=>t.id===v&&t.kind==='side')))&&Number.isFinite(s.gold)&&s.gold>=0&&Number.isFinite(s.potions)&&s.potions>=0&&s.settings&&[1,1.5,2].includes(s.settings.speed)&&Array.isArray(s.party)&&s.party.length===6&&s.party.every((p,i)=>(p.hpRatio===undefined||Number.isFinite(p.hpRatio)&&p.hpRatio>=0&&p.hpRatio<=1)&&p.id===HEROES[i].id&&Number.isInteger(p.level)&&p.level>=1&&p.level<=LEGACY_HERO_LEVEL_CAP&&Number.isFinite(p.xp)&&p.xp>=0&&(p.id==='kyle'?[0,1,2,3]:[0,1,2]).includes(p.classLevel)&&[0,1].includes(p.branch)&&Array.isArray(p.equip)&&p.equip.length===3&&p.equip.every(e=>Number.isInteger(e)&&e>=0&&e<=3))&&(!s.battle||validBattle(s.battle))&&(!s.retry||validBattle(s.retry));}
function validBattle(b){const w=mapWidth(b),h=mapHeight(b);return b&&(!b.pickups||validLoot(b.pickups,b))&&STAGES.some(s=>s.id===b.stageId)&&['player','enemy','victory','defeat'].includes(b.phase)&&Number.isInteger(b.size)&&b.size>=8&&b.size<=16&&Number.isInteger(w)&&w>=8&&w<=16&&Number.isInteger(h)&&h>=8&&h<=16&&Number.isInteger(b.round)&&b.round>=1&&b.round<=999&&Array.isArray(b.tiles)&&b.tiles.length===w*h&&b.tiles.every((t,i)=>Number.isInteger(t.x)&&Number.isInteger(t.z)&&t.x===i%w&&t.z===Math.floor(i/w)&&Number.isFinite(t.height)&&t.height>=0&&t.height<=5&&['grass','forest','swamp','water','stone','bridge','dirt','desert','scrub','sand'].includes(t.terrain))&&b.goal&&Number.isInteger(b.goal.x)&&Number.isInteger(b.goal.z)&&b.goal.x>=0&&b.goal.z>=0&&b.goal.x<w&&b.goal.z<h&&Array.isArray(b.danger)&&b.danger.every(t=>Number.isInteger(t.x)&&Number.isInteger(t.z)&&t.x>=0&&t.z>=0&&t.x<w&&t.z<h)&&Array.isArray(b.log)&&b.log.length<=100&&b.log.every(l=>typeof l==='string'&&l.length<300)&&Number.isFinite(b.rng)&&Array.isArray(b.units)&&b.units.length<=40&&b.units.every(u=>validUnitExtras(u)&&Number.isInteger(u.x)&&Number.isInteger(u.z)&&u.x>=0&&u.z>=0&&u.x<w&&u.z<h&&Number.isFinite(u.hp)&&Number.isFinite(u.maxHp)&&u.maxHp>0&&u.hp>=0&&u.hp<=u.maxHp&&Number.isFinite(u.mp)&&Number.isFinite(u.atk)&&Number.isFinite(u.def)&&u.status&&['ally','enemy'].includes(u.team)&&typeof u.id==='string'&&(u.team==='enemy'||HEROES.some(h=>h.id===u.heroId)));}
function readStorySave(){let raw;try{raw=localStorage.getItem(SAVE_KEY);}catch{return {kind:'unavailable'};}if(raw===null)return {kind:'empty'};try{const data=JSON.parse(raw);return validSave(data)?{kind:'valid',data:normalizeSave(data)}:{kind:'invalid',raw};}catch{return {kind:'invalid',raw};}}
// Mission runs are separate from the original story and the testing sandbox.
function validMissionSave(s){return !!(s&&validSave(s)&&s.playMode==='mission'&&Number.isInteger(s.missionChapter)&&s.missionChapter>=0&&s.missionChapter<CHAPTERS.length&&s.completed.every(id=>STAGES.some(t=>t.id===id&&t.chapter===s.missionChapter))&&(!s.battle||STAGES.find(t=>t.id===s.battle.stageId)?.chapter===s.missionChapter)&&(!s.retry||STAGES.find(t=>t.id===s.retry.stageId)?.chapter===s.missionChapter)&&(!s.missionHistory||Array.isArray(s.missionHistory)&&s.missionHistory.length<=10));}
function readMissionSave(){try{const raw=localStorage.getItem(MISSION_SAVE_KEY);if(!raw)return null;const data=JSON.parse(raw);return validMissionSave(data)?normalizeSave(data):null;}catch{return null;}}
function missionStages(ch){return STAGES.filter(s=>s.chapter===ch&&s.kind!=='side');}
function missionFinal(){return chapterFinalStage(missionStages(save.missionChapter)[0]);}
function missionDifficultyLabel(d){return {story:'하 · STORY',normal:'중 · NORMAL',tactical:'상 · TACTICAL'}[d]||d;}
function showModeSelect(){showSheet('게임 모드 선택',`<p class="footnote">원하는 방식으로 아르카 연대기를 플레이하세요. 스토리와 미션 진행 기록은 서로 독립적으로 저장됩니다.</p><button class="choice" id="chooseStory"><b>📖 스토리 모드</b><small>프롤로그부터 FINAL까지 모든 챕터를 순서대로 진행합니다.</small></button><button class="choice" id="chooseMission"><b>⚔️ 미션 모드</b><small>10개 챕터 중 하나를 선택해 해당 챕터의 마지막 보스까지 진행합니다. 챕터별 캐릭터와 장비 자동 설정.</small></button>`,()=>{$('#chooseStory').onclick=showNewGame;$('#chooseMission').onclick=()=>showMissionSetup();});}
function showMissionSetup(){if(busy)return;const existing=readMissionSave();showSheet('미션 모드 · 챕터 선택',`<p class="footnote">프롤로그부터 FINAL까지 자유롭게 선택합니다. 선택한 챕터의 스토리 전투 3개와 보스전(있는 챕터)을 진행하며, 해당 챕터 클리어 후 결과와 전투 히스토리를 확인합니다. 기존 스토리 저장은 유지됩니다.</p><label for="missionChapter">챕터</label><select class="form-wide" id="missionChapter">${CHAPTERS.map((c,i)=>`<option value="${i}" ${missionSelection.chapter===i?'selected':''}>${c[0]} · ${c[1]}</option>`).join('')}</select><div class="codex-card" id="missionSummary"></div><label for="missionDifficulty">난이도</label><select class="form-wide" id="missionDifficulty">${[['story','하 · STORY'],['normal','중 · NORMAL'],['tactical','상 · TACTICAL']].map(([v,l])=>`<option value="${v}" ${missionSelection.difficulty===v?'selected':''}>${l}</option>`).join('')}</select><button class="primary" id="missionBegin">선택 챕터 시작</button>${existing?`<button class="secondary" id="missionResume">이전 미션 이어하기 · ${CHAPTERS[existing.missionChapter][0]}</button>`:''}<p class="footnote">새 미션을 시작하면 이전 미션 기록만 교체됩니다. 스토리 기록은 영향을 받지 않습니다.</p>`,()=>{const update=()=>{const ch=+$('#missionChapter').value,st=missionStages(ch),heroes=HEROES.filter(h=>h.join<=ch);$('#missionSummary').innerHTML=`<b>${CHAPTERS[ch][0]} · ${CHAPTERS[ch][1]}</b><p class="footnote">${CHAPTERS[ch][2]} · 추천 Lv.${st[0].level}~${st.at(-1).level} · 시작 Lv.${MISSION_START_LEVELS[ch]}<br>진행: ${st.map(v=>v.name).join(' → ')}<br>참가: ${heroes.map(h=>h.name).join(' · ')}<br>스토리 모드 평균 장비 자동 장착</p>`;};$('#missionChapter').onchange=e=>{missionSelection.chapter=+e.target.value;update();};$('#missionDifficulty').onchange=e=>missionSelection.difficulty=e.target.value;$('#missionBegin').onclick=beginMission;$('#missionResume')?.addEventListener('click',resumeMission);update();},{back:showModeSelect});}
// Mission-mode baseline: reproduce a conservative "average story progression" loadout.
// A mission starts at the beginning of the selected chapter, so its equipment comes
// from what a normal story player could have accumulated by the END of the previous
// chapter, not from the selected chapter's future loot. Four slots are available once
// the story has begun; the baseline is 3 Common + 1 Rare, with no Unique equipment.
// Prologue intentionally starts with no equipment.
function missionStoryAverageGearPlan(ch){
 if(ch<=0)return {band:null,tiers:[]};
 const sourceChapter=Math.max(0,ch-1),band=gearBandForChapter(sourceChapter);
 return {band,tiers:[1,0,0,0]};
}
// v1.3.0: missions start at the party level a story player typically has at the start of that
// chapter (measured by simulation, side battles included), so both modes share one tuning table.
const MISSION_START_LEVELS=[1,7,12,17,21,25,28,31,33,36];
function setupMissionParty(ch){
 const level=MISSION_START_LEVELS[ch]??missionStages(ch)[0].level,sourceChapter=Math.max(0,ch-1),plan=missionStoryAverageGearPlan(ch);
 for(const p of save.party){
  p.level=level;p.xp=0;p.classLevel=promotionRankFor(p.id,level);p.branch=0;
  p.equip=[0,0,0];p.equipped=[null,null,null,null];p.hpRatio=1;
  if(HEROES.find(h=>h.id===p.id).join>ch)continue;
  if(plan.band!==null){
   const kind=p.id==='sera'?'bow':['ria','luna'].includes(p.id)?'staff':'sword';
   for(const [slot,type] of [kind,'armor','amulet','ring'].entries()){
    const tier=plan.tiers[slot]??0;
    const gear=chapterGear(sourceChapter,type,tier)||chapterGear(sourceChapter,type,0);
    if(!gear)throw Error('스토리 평균 장비를 찾지 못했습니다: '+type);
    const uid=`loot-${++save.lootSeq}`;save.inventory.push({uid,gearId:gear.id});p.equipped[slot]=uid;
   }
  }
 }
 save.gold=300+ch*150;
 save.consumables={hpSmall:5+Math.floor(ch/2),hpMedium:3+Math.floor(ch/2),hpLarge:2+Math.floor(ch/3),mpSmall:3,mpLarge:1+Math.floor(ch/3)};
}
function enterMission(){if(!isTitle)persist();missionBackup=copy(save);missionMode=true;}
function beginMission(){const ch=missionSelection.chapter,difficulty=missionSelection.difficulty;if(!Number.isInteger(ch)||ch<0||ch>=CHAPTERS.length||!['story','normal','tactical'].includes(difficulty))return;unlockAudio();enterMission();const settings=copy(save.settings);save=fresh(difficulty);save.settings=settings;save.playMode='mission';save.missionChapter=ch;save.missionHistory=[];save.chapter=ch;setupMissionParty(ch);battle=null;currentChapter=ch;isTitle=false;persist();showStory(missionStages(ch)[0]);}
function resumeMission(){const existing=readMissionSave();if(!existing){toast('이어갈 미션 기록이 없습니다.');return;}enterMission();save=existing;missionSelection={chapter:save.missionChapter,difficulty:save.difficulty};continueJourney();if(save.missionCleared&&!save.battle)showMissionClear();}
function exitMission(){if(busy)return;persist();missionMode=false;save=missionBackup||fresh();missionBackup=null;const record=readStorySave();if(record.kind==='valid')save=record.data;closeSheet();isTitle=true;preview=null;skill=null;mode='move';selected='kyle';battle=makeBattle(STAGES[0]);buildScene();refreshUI();refreshTitleSaveState();playBgm('title');}
function missionBattleHistory(stage){if(!missionMode||save.missionHistory?.some(r=>r.id===stage.id))return;save.missionHistory??=[];save.missionHistory.push({id:stage.id,name:stage.name,rounds:battle.round,gold:battle.reward?.gold||0,xp:battle.reward?.xp||0,log:(battle.log||[]).slice(-35).map(v=>String(v).slice(0,280)),alliesAlive:battle.units.filter(u=>u.team==='ally'&&u.hp>0).length,enemiesDefeated:battle.units.filter(u=>u.team==='enemy'&&u.hp<=0).length});}
function showMissionClear(){if(!missionMode)return;const ch=save.missionChapter,rows=save.missionHistory||[],totalRounds=rows.reduce((n,r)=>n+r.rounds,0),totalGold=rows.reduce((n,r)=>n+r.gold,0),totalXp=rows.reduce((n,r)=>n+r.xp,0);playBgm('victory');showSheet('CHAPTER CLEAR',`<div class="result"><div class="seal">✦</div><div class="eyebrow">MISSION COMPLETE · ${CHAPTERS[ch][0]}</div><h2>${CHAPTERS[ch][1]}</h2><p>${missionDifficultyLabel(save.difficulty)} · ${rows.length}전 승리</p><div class="statsgrid"><div>총 전투 턴<b>${totalRounds}</b></div><div>획득 골드<b>${totalGold.toLocaleString()}</b></div><div>획득 EXP<b>${totalXp.toLocaleString()}</b></div></div></div><h3>전투 결과 · 히스토리</h3>${rows.map((r,i)=>`<details class="codex-card" ${i===rows.length-1?'open':''}><summary><b>${i+1}. ${escapeHTML(r.name)}</b> · ${r.rounds}턴 · 격파 ${r.enemiesDefeated} · 생존 ${r.alliesAlive}</summary><p class="footnote">보상 +${r.gold} G · EXP +${r.xp}</p><div class="battlelog">${r.log.map(l=>`<div>${escapeHTML(l)}</div>`).join('')||'<div>전투 기록 없음</div>'}</div></details>`).join('')}<button class="primary" id="missionDone">타이틀로 돌아가기</button><button class="secondary" id="missionAnother">다른 챕터 도전</button>`,()=>{$('#missionDone').onclick=exitMission;$('#missionAnother').onclick=()=>{exitMission();showMissionSetup();};},{noClose:true});}
function finishMissionVictory(stage){missionBattleHistory(stage);if(stage.id===missionFinal().id){save.missionCleared=true;return true;}return false;}

// v0.7.2: Manual slots in device-local IndexedDB. Existing automatic localStorage saves remain compatible.
const SLOT_DB='cnation-tactics-local-saves',SLOT_STORE='slots',SLOT_FALLBACK='cnation-tactics-slot-v2:';
function slotKey(kind,n){return `${kind}:${n}`;}
function openSlotDB(){return new Promise((resolve,reject)=>{if(!('indexedDB' in window)){reject(Error('IndexedDB를 사용할 수 없습니다.'));return;}const req=indexedDB.open(SLOT_DB,1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains(SLOT_STORE))req.result.createObjectStore(SLOT_STORE,{keyPath:'id'});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||Error('저장소 연결 실패'));req.onblocked=()=>reject(Error('다른 게임 창을 닫고 다시 시도하세요.'));});}
async function slotDBOperation(action,id,record){const db=await openSlotDB();try{return await new Promise((resolve,reject)=>{const tx=db.transaction(SLOT_STORE,action==='read'?'readonly':'readwrite');const store=tx.objectStore(SLOT_STORE);const req=action==='read'?store.get(id):action==='delete'?store.delete(id):store.put(record);let result;req.onsuccess=()=>{result=req.result;};req.onerror=()=>reject(req.error||Error('슬롯 처리 실패'));tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error||Error('슬롯 저장 실패'));tx.onabort=()=>reject(tx.error||Error('슬롯 저장 중단'));});}finally{db.close();}}
async function getSlot(kind,n){const id=slotKey(kind,n);try{return await slotDBOperation('read',id)||null;}catch(e){try{const raw=localStorage.getItem(SLOT_FALLBACK+id);return raw?JSON.parse(raw):null;}catch{return null;}}}
async function putSlot(record){try{await slotDBOperation('write',record.id,record);return 'IndexedDB';}catch(e){try{localStorage.setItem(SLOT_FALLBACK+record.id,JSON.stringify(record));return 'localStorage';}catch{throw Error('기기 저장 공간이 부족하거나 차단되었습니다. 파일 내보내기를 이용해 주세요.');}}}
async function removeSlot(kind,n){const id=slotKey(kind,n);try{await slotDBOperation('delete',id);}catch{}try{localStorage.removeItem(SLOT_FALLBACK+id);}catch{}}
function validModeRecord(kind,data){return kind==='mission'?validMissionSave(data):kind==='story'&&validSave(data)&&data.playMode!=='mission'&&!data.customConfig;}
function saveMode(){return missionMode?'mission':'story';}
function modeLabel(kind){return {story:'스토리',mission:'미션'}[kind]||'스토리';}
function localPWA(){return window.matchMedia?.('(display-mode: standalone)').matches||window.matchMedia?.('(display-mode: fullscreen)').matches||navigator.standalone===true;}
function isIOS(){return /iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1;}
function saveNotice(){const pwa=localPWA(),ios=isIOS();return `<div class="save-notice"><b>📱 저장 데이터 보관 안내</b><p>자동 저장과 슬롯 3개는 모두 <b>현재 기기·현재 브라우저의 로컬 저장 공간</b>에 저장됩니다. 서버에는 전송하지 않습니다.</p><p>${ios?(pwa?'✅ 홈 화면 웹앱으로 실행 중입니다. Safari의 7일 데이터 정리 규칙에서 제외됩니다.':'⚠️ iPhone에서 Safari 일반 탭으로 플레이하면 사이트를 사용하지 않은 기간에 따라 약 7일 후 저장 데이터가 삭제될 수 있습니다. Safari의 공유 메뉴 또는 지원 브라우저의 메뉴에서 <b>홈 화면에 추가</b>한 뒤 웹앱으로 실행하세요.'):'홈 화면에 웹앱으로 설치하면 브라우저 탭과 별도의 저장 공간을 사용할 수 있습니다. 브라우저별 보관 정책은 다를 수 있습니다.'}</p><p><b>주의:</b> 홈 화면에 추가해도 영구 보관은 보장되지 않습니다. 웹앱 삭제, 웹사이트 데이터 삭제, 저장 공간 정리 시 기록이 사라질 수 있습니다. <b>장기 보관은 파일 내보내기</b>를 이용하세요.</p></div>`;}
function slotSource(kind){if(!isTitle&&saveMode()===kind){if(busy||battle?.phase==='enemy')throw Error('적 턴 또는 공격·이동 애니메이션이 끝난 후 저장해 주세요.');const data=copy(save);data.battle=battle?copy(battle):null;return data;}let raw;try{raw=localStorage.getItem(kind==='mission'?MISSION_SAVE_KEY:SAVE_KEY);}catch{throw Error('브라우저 저장소를 읽을 수 없습니다.');}if(!raw)throw Error(`${modeLabel(kind)} 모드의 저장 기록이 없습니다. 먼저 게임을 시작해 주세요.`);try{return JSON.parse(raw);}catch{throw Error('기존 저장 데이터가 손상되었습니다.');}}
function slotSummary(record){if(!record)return '비어 있음';const d=record.data||{};const ch=CHAPTERS[d.missionChapter??d.chapter??0]?.[0]||'프롤로그';const lv=Math.max(1,...(d.party||[]).map(p=>p.level||1));const time=record.savedAt?new Date(record.savedAt).toLocaleString('ko-KR'):'날짜 미상';return `${ch} · Lv.${lv} · ${time}`;}
function saveFormat(data,kind){return {format:'cnation-tactics-backup-v2',gameVersion:'0.7.2',mode:kind,savedAt:new Date().toISOString(),data};}
function downloadJSON(value,filename){const url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
function applySavedRecord(kind,raw){if(!validModeRecord(kind,raw))throw Error('유효하지 않거나 다른 모드의 저장 데이터입니다.');const data=normalizeSave(copy(raw));if(kind==='mission'&&!missionMode){enterMission();}else if(kind==='story'&&missionMode)throw Error('현재 모드를 종료한 뒤 스토리 저장을 불러와 주세요.');
 const key=kind==='mission'?MISSION_SAVE_KEY:SAVE_KEY;
 // Commit to localStorage before switching the active in-memory session.
 data.savedAt=Date.now();const json=JSON.stringify(data);localStorage.setItem(key,json);localStorage.setItem(key+'-saved-at',new Date(data.savedAt).toISOString());mirrorAutoSave(key,json,data.savedAt);
 save=data;if(kind==='mission')missionSelection={chapter:save.missionChapter,difficulty:save.difficulty};
 renderer.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.75));$('#sound').textContent=save.settings.sound?'♪':'♩';continueJourney();}
function showSaveModePicker(back=closeSheet){
 showSheet('저장 / 불러오기 · 모드 선택',`<p class="save-mode-help">어느 게임 모드의 저장 기록을 관리할까요? <b>스토리와 미션은 서로 다른 저장 공간</b>을 사용합니다.</p><div class="save-mode-options"><button class="choice" id="pickStorySave">📖 스토리 모드<small>스토리 자동 저장 · 수동 슬롯 3개</small></button><button class="choice" id="pickMissionSave">⚔️ 미션 모드<small>미션 자동 저장 · 수동 슬롯 3개</small></button></div><p class="footnote">타이틀에서는 진행 중인 게임이 없으므로 기존 자동 저장을 수동 슬롯으로 복사하거나, 저장 기록을 불러오고 백업할 수 있습니다. 새로운 진행 상황을 저장하려면 게임을 시작하세요.</p>${saveNotice()}`,()=>{
  $('#pickStorySave').onclick=()=>showSaveManager(back,'story');
  $('#pickMissionSave').onclick=()=>showSaveManager(back,'mission');
 },{back});
}
function showSaveManager(back=showMenu,kind=isTitle?null:saveMode()){
 if(isTitle&&kind===null){showSaveModePicker(back);return;}
 if(isTitle&&!['story','mission'].includes(kind)){showSaveModePicker(back);return;}
 if(busy){toast('애니메이션이 끝난 뒤 저장 화면을 열어 주세요.');return;}
 if(!isTitle)kind=saveMode();
 const modeHeading=`<div class="save-mode-current"><b>${modeLabel(kind)} 모드 저장 데이터</b>${isTitle?'<button class="secondary" id="changeSaveMode">다른 모드 선택</button>':'<small>현재 플레이 중인 모드만 저장하고 불러옵니다.</small>'}</div>`;
 const titleHint=isTitle?`<p class="footnote">타이틀 화면: 슬롯의 <b>저장</b> 버튼은 ${modeLabel(kind)} 모드의 <b>기존 자동 저장 기록을 복사</b>합니다. 자동 저장이 없으면 새 슬롯 저장은 할 수 없습니다.</p>`:'';
 let autoText='기록 확인 중';try{const source=slotSource(kind);if(!validModeRecord(kind,source))throw Error('손상된 자동 저장');autoText=slotSummary({data:source,savedAt:localStorage.getItem((kind==='mission'?MISSION_SAVE_KEY:SAVE_KEY)+'-saved-at')});}catch{autoText='저장 기록 없음';}
 showSheet('게임 저장 / 불러오기',`${modeHeading}${titleHint}${saveNotice()}<div class="save-slot"><b>🔄 자동 저장</b><small>행동 종료·전투 진행 시 자동 저장 · ${escapeHTML(autoText)}</small><button class="secondary" id="loadAuto" ${autoText==='저장 기록 없음'?'disabled':''}>자동 저장 불러오기</button></div><h3>수동 저장 슬롯 3개</h3><div id="slotList">슬롯을 불러오는 중입니다...</div><p class="footnote">슬롯 저장은 기존 기록을 덮어씁니다. 불러오면 현재 진행 기록이 교체됩니다.</p><button class="secondary" id="exportLocal">📤 저장 파일 내보내기 (JSON)</button><button class="secondary" id="importLocal">📥 저장 파일 가져오기 (JSON)</button>`,()=>{
  $('#changeSaveMode')?.addEventListener('click',()=>showSaveModePicker(back));
  $('#loadAuto')?.addEventListener('click',()=>confirmLoad(kind,()=>{const key=kind==='mission'?MISSION_SAVE_KEY:SAVE_KEY;const raw=localStorage.getItem(key);if(!raw)throw Error('자동 저장 기록이 없습니다.');return JSON.parse(raw);},'자동 저장',back));
  $('#exportLocal').onclick=()=>{try{const data=slotSource(kind);if(!validModeRecord(kind,data))throw Error('저장 기록이 유효하지 않습니다.');downloadJSON(saveFormat(data,kind),`cnation-tactics-${kind}-backup-${new Date().toISOString().slice(0,10)}.json`);toast('파일을 내보냈습니다. 파일 앱에 안전하게 보관하세요.');}catch(e){toast(e.message);}};
  $('#importLocal').onclick=()=>{$('#import').click();};
  $('#slotList').dataset.saveMode=kind;
  Promise.all([1,2,3].map(n=>getSlot(kind,n))).then(records=>{if($('#slotList')===null||$('#slotList').dataset.saveMode!==kind)return;$('#slotList').innerHTML=records.map((r,i)=>{const n=i+1,valid=r&&validModeRecord(kind,r.data);return `<div class="save-slot"><b>슬롯 ${n}</b><small>${escapeHTML(r?(valid?slotSummary(r):'손상되었거나 지원하지 않는 저장 기록'):'비어 있음')}</small><div class="save-slot-buttons"><button class="secondary" data-save-slot="${n}" ${isTitle&&autoText==='저장 기록 없음'?'disabled title="자동 저장 기록이 없습니다"':''}>${isTitle?'자동 저장 복사':'저장'}</button><button class="secondary" data-load-slot="${n}" ${valid?'':'disabled'}>불러오기</button><button class="secondary" data-export-slot="${n}" ${valid?'':'disabled'}>내보내기</button><button class="secondary" data-delete-slot="${n}" ${r?'':'disabled'}>삭제</button></div></div>`;}).join('');
   $('#slotList').querySelectorAll('[data-save-slot]').forEach(b=>b.onclick=()=>{const n=+b.dataset.saveSlot;showSheet('슬롯 저장 확인',`<p>${modeLabel(kind)} 모드 슬롯 ${n}에 ${isTitle?'기존 자동 저장 기록을 복사':'현재 진행 기록을 저장'}합니다. 기존 내용은 덮어씁니다.</p><button class="primary" id="confirmSlotSave">저장하기</button><button class="secondary" id="cancelSlotSave">취소</button>`,()=>{$('#confirmSlotSave').onclick=async()=>{try{const data=slotSource(kind);if(!validModeRecord(kind,data))throw Error('저장 데이터가 올바르지 않습니다.');const storage=await putSlot({id:slotKey(kind,n),mode:kind,number:n,savedAt:new Date().toISOString(),data});showSaveManager(back,kind);toast(`${modeLabel(kind)} 슬롯 ${n}에 ${isTitle?'자동 저장을 복사':'저장'}했습니다${storage==='localStorage'?' (대체 저장소)':''}.`);}catch(e){toast(e.message);}};$('#cancelSlotSave').onclick=()=>showSaveManager(back,kind);},{back:()=>showSaveManager(back,kind)});});
   $('#slotList').querySelectorAll('[data-load-slot]').forEach(b=>b.onclick=()=>{const n=+b.dataset.loadSlot;confirmLoad(kind,async()=>{const r=await getSlot(kind,n);if(!r)throw Error('슬롯 기록을 찾을 수 없습니다.');return r.data;},`슬롯 ${n}`,back);});
   $('#slotList').querySelectorAll('[data-export-slot]').forEach(b=>b.onclick=async()=>{const n=+b.dataset.exportSlot;try{const record=await getSlot(kind,n);if(!record||!validModeRecord(kind,record.data))throw Error('유효한 저장 기록이 없습니다.');downloadJSON(saveFormat(record.data,kind),`cnation-tactics-${kind}-slot${n}-${new Date().toISOString().slice(0,10)}.json`);toast(`슬롯 ${n} 백업 파일을 내보냈습니다.`);}catch(e){toast(e.message);}});
   $('#slotList').querySelectorAll('[data-delete-slot]').forEach(b=>b.onclick=()=>{const n=+b.dataset.deleteSlot;showSheet('슬롯 삭제 확인',`<p>슬롯 ${n}의 저장 기록을 삭제할까요? 삭제 후에는 복구할 수 없습니다.</p><button class="primary" id="confirmSlotDelete">삭제</button><button class="secondary" id="cancelSlotDelete">취소</button>`,()=>{$('#confirmSlotDelete').onclick=async()=>{await removeSlot(kind,n);showSaveManager(back,kind);toast(`슬롯 ${n} 삭제 완료`);};$('#cancelSlotDelete').onclick=()=>showSaveManager(back,kind);},{back:()=>showSaveManager(back,kind)});});
  }).catch(()=>{if($('#slotList'))$('#slotList').textContent='저장 슬롯을 열지 못했습니다. 브라우저 저장소 설정을 확인하세요.';});
 },{back});
}
function confirmLoad(kind,getData,label,back=closeSheet){showSheet('저장 기록 불러오기',`<p><b>${escapeHTML(label)}</b> 기록을 불러오면 현재 ${modeLabel(kind)} 진행 상황을 교체합니다.</p><p class="footnote">현재 진행을 보관하려면 먼저 수동 슬롯에 저장하거나 파일로 내보내세요.</p><button class="primary" id="confirmLoadNow">불러오기</button><button class="secondary" id="cancelLoadNow">취소</button>`,()=>{$('#confirmLoadNow').onclick=async()=>{try{const data=await getData();applySavedRecord(kind,data);toast(`${label} 기록을 불러왔습니다.`);}catch(e){toast(e.message||'불러오기에 실패했습니다.');}};$('#cancelLoadNow').onclick=()=>showSaveManager(back,kind);},{back:()=>showSaveManager(back,kind)});}

function persist(){if(isTitle)return;save.battle=battle?copy(battle):null;save.savedAt=Date.now();const key=activeSaveKey(),json=JSON.stringify(save);let stored=true;try{localStorage.setItem(key,json);localStorage.setItem(key+'-saved-at',new Date(save.savedAt).toISOString());}catch{stored=false;}mirrorAutoSave(key,json,save.savedAt);if(!stored)toast('자동 저장에 실패했습니다. 저장 화면에서 파일로 내보내 주세요.');}
// v1.2.2: every auto-save is mirrored to IndexedDB. Home-screen web apps on iOS can lose the
// latest localStorage write when the app is closed from the app switcher; on startup the
// newer of the two copies wins.
let autoSaveMirror=Promise.resolve();
const autoSaveId=key=>'auto:'+key;
function mirrorAutoSave(key,json,savedAt){autoSaveMirror=autoSaveMirror.then(()=>slotDBOperation('write',autoSaveId(key),{id:autoSaveId(key),json,savedAt})).catch(()=>{});}
function savedAtOf(data,key){return Number.isFinite(data?.savedAt)?data.savedAt:(Date.parse(localStorage.getItem(key+'-saved-at')||'')||0);}
async function restoreNewerAutoSaves(){
 let restored=false;
 for(const key of [SAVE_KEY,MISSION_SAVE_KEY]){
  try{
   const record=await slotDBOperation('read',autoSaveId(key));if(!record?.json)continue;
   const mirror=JSON.parse(record.json),valid=key===SAVE_KEY?validSave(mirror):validMissionSave(mirror);if(!valid)continue;
   let local=null;try{local=JSON.parse(localStorage.getItem(key));}catch{}
   const localValid=local&&(key===SAVE_KEY?validSave(local):validMissionSave(local));
   if(localValid&&savedAtOf(local,key)>=savedAtOf(mirror,key))continue;
   localStorage.setItem(key,record.json);localStorage.setItem(key+'-saved-at',new Date(savedAtOf(mirror,key)||Date.now()).toISOString());
   if(key===SAVE_KEY)restored=true;
  }catch{}
 }
 if(restored&&isTitle&&!missionMode){const r=readStorySave();if(r.kind==='valid')save=r.data;refreshTitleSaveState();}
}
function toast(msg){$('#toast').textContent=msg;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2600);}
let audioCtx,bgm,playingBgm='';
// Temporary original arrangements using the user's 12 scene roles and BPMs.
const BGM_SCORES={"1":{"root":62,"scale":[0,2,4,5,7,9,11],"lead":"brass","pad":"strings","bass":"soft","rhythm":"heart","chords":[0,5,3,4],"melody":[0,null,2,null,4,null,5,4,4,null,2,null,3,null,1,null,0,null,2,3,4,null,3,2,1,null,4,2,1,null,0,null]},"2":{"root":67,"scale":[0,2,4,5,7,9,11],"lead":"whistle","pad":"lute","bass":"pluck","rhythm":"folk","chords":[0,3,4,0],"melody":[0,2,4,2,3,4,5,null,4,2,1,0,1,2,3,null,4,5,7,5,4,3,2,1,0,2,3,1,2,1,0,null]},"3":{"root":60,"scale":[0,2,4,5,7,9,11],"lead":"musicbox","pad":"warm","bass":"soft","rhythm":"none","chords":[0,5,1,4],"melody":[4,null,2,null,0,null,1,2,3,null,2,null,1,null,0,null,2,null,4,null,5,4,3,2,1,null,2,null,0,null,null,null]},"4":{"root":69,"scale":[0,2,3,5,7,9,10],"lead":"strings","pad":"brass","bass":"pluck","rhythm":"march","chords":[0,3,5,4],"melody":[0,0,4,4,2,3,4,5,4,2,3,1,2,0,1,2,3,3,5,4,7,5,4,3,2,4,3,1,2,1,0,null]},"5":{"root":64,"scale":[0,2,3,5,7,8,10],"lead":"brass","pad":"strings","bass":"heavy","rhythm":"war","chords":[0,5,3,4],"melody":[0,null,0,4,2,null,1,0,3,null,3,5,4,3,2,null,5,null,4,2,3,null,2,1,4,4,3,2,1,null,0,null]},"6":{"root":60,"scale":[0,2,3,5,7,8,10],"lead":"strings","pad":"organ","bass":"heavy","rhythm":"storm","chords":[0,5,1,4],"melody":[0,4,2,4,1,4,3,4,5,4,3,2,1,2,3,4,7,4,5,4,3,4,2,4,1,3,2,0,1,2,0,null]},"7":{"root":62,"scale":[0,1,3,5,7,8,10],"lead":"gong","pad":"dark","bass":"sub","rhythm":"titan","chords":[0,1,5,0],"melody":[0,null,null,null,1,null,0,null,-3,null,null,null,1,null,null,null,0,null,4,null,1,null,0,null,-3,null,1,null,0,null,null,null]},"8":{"root":59,"scale":[0,2,3,5,7,8,10],"lead":"flute","pad":"warm","bass":"soft","rhythm":"none","chords":[0,5,3,4],"melody":[0,null,2,null,4,null,5,4,4,null,2,null,3,null,1,null,0,null,null,null,2,null,1,null,-1,null,1,null,0,null,null,null]},"9":{"root":66,"scale":[0,2,3,5,7,9,10],"lead":"glass","pad":"dark","bass":"soft","rhythm":"clock","chords":[0,2,5,1],"melody":[0,null,4,null,1,null,5,null,2,null,6,null,3,null,4,null,7,null,5,null,2,4,1,3,0,null,6,null,4,null,null,null]},"10":{"root":70,"scale":[0,2,4,5,7,9,11],"lead":"brass","pad":"brass","bass":"heavy","rhythm":"fanfare","chords":[0,3,4,0],"melody":[0,0,0,null,2,2,2,null,4,null,5,null,7,null,4,null,3,4,5,4,2,null,1,null,4,2,3,1,0,null,null,null]},"11":{"root":62,"scale":[0,2,3,5,7,8,10],"lead":"brass","pad":"choir","bass":"heavy","rhythm":"final","chords":[0,5,3,4],"melody":[0,0,2,2,4,4,5,4,4,3,2,1,3,4,1,null,0,2,4,7,5,4,3,2,1,2,3,4,2,1,0,null]},"12":{"root":62,"scale":[0,2,4,5,7,9,11],"lead":"harp","pad":"warm","bass":"soft","rhythm":"none","chords":[0,5,3,0],"melody":[0,null,2,null,4,null,5,4,4,null,2,null,3,null,1,null,0,null,2,null,3,4,5,null,4,null,2,null,0,null,null,null]}};

// 64-bar original battle arrangement, streamed in four-bar scheduling chunks.
const BATTLE_VARIATIONS={
4:{b:[4,5,7,null,6,5,4,2,3,4,5,7,5,null,4,3,2,3,4,null,2,1,0,1,2,4,3,2,1,null,0,null],c:[7,null,5,4,5,7,8,7,6,5,4,3,4,null,2,3,5,4,3,2,3,4,5,4,2,1,2,3,1,null,0,null]},
5:{b:[3,null,5,4,3,2,1,null,2,3,4,6,5,null,4,3,5,null,7,5,4,3,2,1,2,null,4,2,1,0,-1,null],c:[7,7,5,null,6,5,4,3,4,null,5,7,8,7,5,null,6,5,4,2,3,4,5,null,4,3,2,1,2,null,0,null]},
6:{b:[5,7,8,7,5,4,3,4,6,5,4,3,2,4,5,null,3,4,5,7,6,5,3,2,1,2,3,4,2,1,0,null],c:[7,null,9,8,7,5,4,5,8,7,6,5,4,3,4,null,5,6,7,5,4,3,2,4,3,2,1,0,1,null,0,null]},
7:{b:[-3,null,0,null,1,0,-1,null,4,null,3,null,1,null,0,null,1,3,4,null,3,1,0,null,-1,null,1,0,-3,null,null,null],c:[4,null,5,null,7,5,4,null,3,null,1,0,1,null,3,null,5,4,3,null,1,null,0,null,-3,null,-1,null,0,null,null,null]},
11:{b:[4,5,7,null,8,7,5,4,6,5,4,3,4,5,7,null,5,4,3,2,3,4,5,7,4,3,2,1,2,null,0,null],c:[7,9,8,7,5,null,4,5,6,7,8,7,5,4,3,null,4,5,7,8,7,5,4,3,2,3,4,2,1,null,0,null]}
};
function battleMusicPlan(id,index){const score=BGM_SCORES[id],variation=BATTLE_VARIATIONS[id];if(!variation)return null;const chunk=index%16,section=['intro','theme','variation','answer','answer-variation','break','development','development-variation','theme-return','answer-return','bridge','development-return','climax','climax-answer','resolution','turnaround'][chunk],source=[score.melody,score.melody,score.melody,variation.b,variation.b,variation.c,variation.c,variation.c,score.melody,variation.b,variation.b,variation.c,score.melody,variation.c,variation.b,score.melody][chunk];
 const melody=source.map((note,i)=>{if(note===null)return null;if(chunk===0&&i%4!==0)return null;if(chunk===5&&i%2)return null;if(chunk===10&&i%4===3)return null;if(chunk===15&&i>=24)return null;let n=note;if([2,4,7,9,11].includes(chunk)&&i%8>=4)n+=i%2?1:-1;if(chunk===12||chunk===13)n+=2;if(chunk===14&&i>=16)n-=2;return n;});
 const progressions=[[0,5,3,4],[0,3,5,4],[5,3,1,4],[3,4,0,5],[5,1,3,4],[5,3,0,4],[1,5,3,4],[3,5,1,4],[0,5,3,4],[3,4,5,1],[1,3,5,4],[5,3,1,4],[0,3,5,4],[5,4,3,1],[3,5,4,0],[5,3,4,0]];
 return {section,chunk,melody,chords:progressions[chunk],lead:chunk===0?'flute':chunk===5?'harp':score.lead,energy:chunk===0?.5:chunk===5?.35:chunk===10?.55:chunk===12||chunk===13?1:.78,arpeggio:[2,3,4,6,7,9,11,12,13,14].includes(chunk),counter:[7,11,12,13].includes(chunk),bars:64,seconds:256*60/({4:130,5:122,6:146,7:112,11:138}[id])};
}

// BGM has its own half-volume bus; existing effects keep their original gains.
class TacticsSoundtrackEngine {
 constructor(context=null){
  this.ctx=context;this.masterGain=null;this.filterNode=null;this.currentTimer=null;this.currentTrackId=null;this.isPlaying=false;this.volume=.375;this.revision=0;this.nodes=new Set();this.nextCycleTime=0;this.cycleIndex=0;this.noiseBuffer=null;
  this.P={};const names=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];for(let octave=2;octave<=5;octave++)names.forEach((name,i)=>{this.P[name+octave]=Math.round(440*2**(((octave+1)*12+i-69)/12)*100)/100;});Object.assign(this.P,{C6:1046.5,D6:1174.66,E6:1318.51});
  this.manifest={"1":{"id":1,"title":"Echoes of Arca","role":"Main Title Theme","version":"C","bpm":76,"scale":"D Major / Minor (Core Leitmotif)"},"2":{"id":2,"title":"Roads Beyond the Kingdom","role":"World Map Theme","version":"C","bpm":110,"scale":"G Major (Adventure Folk)"},"3":{"id":3,"title":"A Quiet Day in Town","role":"Town Theme","version":"C","bpm":88,"scale":"C Major / Rustic Folk"},"4":{"id":4,"title":"Blades of the Young","role":"Battle Theme 1 (Early Encounters)","version":"A","bpm":130,"scale":"A Minor / Dorian (Forward Momentum)"},"5":{"id":5,"title":"March of the Broken Banner","role":"Battle Theme 2 (Mid-game War)","version":"C","bpm":122,"scale":"E Minor (Martial Tension)"},"6":{"id":6,"title":"When Kingdoms Fall","role":"Battle Theme 3 (Late-game Climax)","version":"C","bpm":146,"scale":"C Minor / Diminished (Desperation)"},"7":{"id":7,"title":"Awakened Colossus","role":"Boss Battle Theme","version":"C","bpm":112,"scale":"D Phrygian / Heavy Titan"},"8":{"id":8,"title":"Memories We Left Behind","role":"Sad Theme","version":"C","bpm":64,"scale":"B Minor (Title Leitmotif Minor Variant)"},"9":{"id":9,"title":"Whispers Beneath the Ruins","role":"Mystery / Ancient Ruins Theme","version":"C","bpm":80,"scale":"F# Dorian / Whole-Tone (Mystic Glitch)"},"10":{"id":10,"title":"Raise the Banner","role":"Victory Fanfare","version":"C","bpm":120,"scale":"Bb Major (Triumphant Fanfare)"},"11":{"id":11,"title":"The Last Arca","role":"Final Battle Theme","version":"C","bpm":138,"scale":"D Minor to D Major (Epic Climax Leitmotif)"},"12":{"id":12,"title":"Where Our Journey Ends","role":"Ending & Credits Theme","version":"C","bpm":72,"scale":"D Major (Full Resolution Leitmotif)"}};
 }
 async init(){
  if(!this.ctx){const AudioClass=window.AudioContext||window.webkitAudioContext;this.ctx=new AudioClass();}
  if(!this.masterGain){this.masterGain=this.ctx.createGain();this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime);this.filterNode=this.ctx.createBiquadFilter();this.filterNode.type='lowpass';this.filterNode.frequency.setValueAtTime(9500,this.ctx.currentTime);this.filterNode.connect(this.masterGain);this.masterGain.connect(this.ctx.destination);}
  if(!this.noiseBuffer){this.noiseBuffer=this.ctx.createBuffer(1,Math.ceil(this.ctx.sampleRate*.2),this.ctx.sampleRate);const data=this.noiseBuffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.sin(i*78.233+17.11)*Math.sin(i*12.9898+3.7);}
  if(this.ctx.state==='suspended')await this.ctx.resume();
 }
 setVolume(vol){this.volume=Math.max(0,Math.min(1,vol));if(this.masterGain)this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime);}
 stop(){
  this.revision++;if(this.currentTimer!==null)clearTimeout(this.currentTimer);this.currentTimer=null;this.isPlaying=false;this.currentTrackId=null;
  // Cancel all future notes too; stopping only a timer leaves the old song audible.
  for(const {osc,g,filter}of this.nodes){try{osc.stop(this.ctx.currentTime);}catch{}osc.disconnect();g.disconnect();filter?.disconnect();}this.nodes.clear();
 }
 async play(trackId){
  if(!this.manifest[trackId]){this.stop();return;}
  this.stop();const revision=this.revision;await this.init();if(revision!==this.revision)return;
  this.isPlaying=true;this.currentTrackId=trackId;this.cycleIndex=0;this.nextCycleTime=this.ctx.currentTime+.05;this.loopCycle(trackId);
 }
 loopCycle(trackId,schedule=true){
  if(!this.isPlaying||this.currentTrackId!==trackId)return;
  const track=this.manifest[trackId],score=BGM_SCORES[trackId],now=Math.max(this.ctx.currentTime+.05,this.nextCycleTime),b=60/track.bpm,totalBeats=16,arrangement=battleMusicPlan(trackId,this.cycleIndex),energy=arrangement?.energy??1;this.currentSection=arrangement?.section||'theme';
  const scale=trackId===11&&[12,13,14,15].includes(this.cycleIndex%16)?[0,2,4,5,7,9,11]:score.scale;
  const frequency=(degree,octave=0)=>{const index=((degree%7)+7)%7,midi=score.root+scale[index]+12*(Math.floor(degree/7)+octave);return 440*2**((midi-69)/12);};
  (arrangement?.melody||score.melody).forEach((degree,i)=>{const lead=arrangement?.lead||score.lead;if(degree!==null)this.voice(lead,now+i*.5*b,frequency(degree),b*(lead==='flute'||lead==='brass'?.8:.43),.12*energy);});
  for(let bar=0;bar<4;bar++){
   const degree=(arrangement?.chords||score.chords)[bar],time=now+bar*4*b;
   for(const tone of [0,2,4])this.voice(score.pad,time,frequency(degree+tone,-1),b*3.8,.018*(arrangement?.energy??1));
   for(let beat=0;beat<4;beat++)this.voice(score.bass,time+beat*b,frequency(degree+(beat===2?4:0),-2),b*.72,(score.bass==='sub'?.065:.045)*(arrangement?.energy??1));
   if(arrangement?.arpeggio)for(let note=0;note<8;note++)this.voice('harp',time+note*.5*b,frequency(degree+[0,2,4,2,0,4,2,4][note],-1),b*.42,.021*energy);
   if(arrangement?.counter)for(let note=0;note<2;note++)this.voice('flute',time+note*2*b,frequency(degree+(note?2:4),-1),b*1.4,.025*energy);
  }
  for(let beat=0;beat<16;beat++){
   const time=now+beat*b,pattern=score.rhythm;
   if(arrangement&&energy<=.55){if(beat%4===0)this.drum('kick',time,.023*energy);continue;}
   if(pattern==='none')continue;
   if(['heart','titan'].includes(pattern)){if(beat%4===0||beat%4===2)this.drum(pattern==='titan'?'timpani':'kick',time,.05);}
   else if(pattern==='clock'){this.drum('tick',time,.008);if(beat%4===0)this.voice('glass',time,frequency(4,1),b*.35,.018);}
   else{if(beat%4===0||(['war','storm','final','fanfare'].includes(pattern)&&beat%4===2))this.drum('timpani',time,.05);if(beat%2===1)this.drum('snare',time,.023);this.drum('hat',time+b*.5,.007);if(['storm','final'].includes(pattern))this.drum('hat',time+b*.25,.005);if(arrangement&&beat>=14&&[4,7,11,13].includes(arrangement.chunk))this.drum('snare',time+b*.5,.016);}
  }
  this.cycleIndex++;this.nextCycleTime=now+b*totalBeats;
  if(schedule)this.currentTimer=setTimeout(()=>{this.currentTimer=null;if(trackId===10)this.isPlaying=false;else this.loopCycle(trackId);},Math.max(0,(this.nextCycleTime-this.ctx.currentTime-.08)*1000));
 }
 voice(kind,time,freq,dur,gain){
  if(['glass','musicbox','harp','gong'].includes(kind)){
   this.tone('sine',time,freq,dur*(kind==='gong'?2:1.4),gain,.004);
   this.tone('sine',time,freq*(kind==='harp'?2:2.76),dur*.65,gain*.23,.004);
   if(kind==='gong')this.tone('sine',time,freq*4.15,dur*.45,gain*.13,.004);
  }else if(['strings','brass','organ','choir','dark'].includes(kind)){
   this.tone(kind==='strings'||kind==='brass'?'sawtooth':'triangle',time,freq,dur,gain,kind==='brass'?.035:.08,kind==='brass'?1400:kind==='strings'?1800:1000);
   if(kind==='choir'||kind==='organ')this.tone('sine',time,freq*2,dur,gain*.25,.08);
  }else this.tone(['pluck','lute','warm'].includes(kind)?'triangle':'sine',time,freq,dur,gain,['pluck','lute'].includes(kind)?.004:.045);
 }
 tone(type,time,freq,dur,gain,attack=.04,cutoff=0){
  const osc=this.ctx.createOscillator(),g=this.ctx.createGain(),filter=cutoff?this.ctx.createBiquadFilter():null,node={osc,g,filter};this.nodes.add(node);
  osc.type=type;osc.frequency.setValueAtTime(freq,time);g.gain.setValueAtTime(.0001,time);g.gain.linearRampToValueAtTime(gain,time+Math.min(attack,dur*.2));g.gain.exponentialRampToValueAtTime(.0001,time+dur);
  if(filter){filter.type='lowpass';filter.frequency.setValueAtTime(cutoff,time);osc.connect(filter);filter.connect(g);}else osc.connect(g);g.connect(this.filterNode);
  osc.onended=()=>{this.nodes.delete(node);osc.disconnect();g.disconnect();filter?.disconnect();};osc.start(time);osc.stop(time+dur);
 }
 drum(kind,time,gain){
  if(kind==='kick'||kind==='timpani'){
   const osc=this.ctx.createOscillator(),g=this.ctx.createGain(),node={osc,g};this.nodes.add(node);osc.type=kind==='kick'?'sine':'triangle';osc.frequency.setValueAtTime(kind==='kick'?120:95,time);osc.frequency.exponentialRampToValueAtTime(kind==='kick'?42:60,time+.16);g.gain.setValueAtTime(gain,time);g.gain.exponentialRampToValueAtTime(.0001,time+.2);osc.connect(g);g.connect(this.filterNode);osc.onended=()=>{this.nodes.delete(node);osc.disconnect();g.disconnect();};osc.start(time);osc.stop(time+.21);return;
  }
  const osc=this.ctx.createBufferSource(),g=this.ctx.createGain(),filter=this.ctx.createBiquadFilter(),node={osc,g,filter};this.nodes.add(node);osc.buffer=this.noiseBuffer;filter.type=kind==='snare'?'bandpass':'highpass';filter.frequency.setValueAtTime(kind==='snare'?1800:kind==='tick'?6500:5000,time);const dur=kind==='snare'?.12:.035;g.gain.setValueAtTime(gain,time);g.gain.exponentialRampToValueAtTime(.0001,time+dur);osc.connect(filter);filter.connect(g);g.connect(this.filterNode);osc.onended=()=>{this.nodes.delete(node);osc.disconnect();g.disconnect();filter.disconnect();};osc.start(time);osc.stop(time+dur);
 }
}

let soundtrack=null,activeBgmKey='',bgmError='',bgmGeneration=0;
// v1.1.0: every battle plays one of BATTLE_BGM_TRACKS at random, never the same
// track as the previous battle. Every other screen plays track 1.
const BATTLE_BGM_TRACKS=[4,5,6,7],LAST_BATTLE_BGM_KEY='cnation-tactics-last-battle-bgm',BGM_VOLUMES=[0,.25,.5,.75,1];
const bgmVolume=()=>BGM_VOLUMES.includes(save.settings.bgmVolume)?save.settings.bgmVolume:.5;
// v1.1.1: actual output is half of the setting (the setting labels stay 25-100%).
const BGM_OUTPUT_SCALE=.5,bgmGain=()=>bgmVolume()*BGM_OUTPUT_SCALE;
// v1.2.1: the NEXT battle's track is chosen in advance (and remembered across launches)
// so it can be preloaded before the battle starts: after track 1 at startup, and during
// each battle together with the victory track.
const NEXT_BATTLE_BGM_KEY='cnation-tactics-next-battle-bgm';
const readStoredTrack=k=>{try{return Number(localStorage.getItem(k))||0;}catch{return 0;}};
let lastBattleBgm=readStoredTrack(LAST_BATTLE_BGM_KEY),nextBattleBgm=readStoredTrack(NEXT_BATTLE_BGM_KEY);
function upcomingBattleBgm(){
 if(!BATTLE_BGM_TRACKS.includes(nextBattleBgm)||nextBattleBgm===lastBattleBgm){
  const choices=BATTLE_BGM_TRACKS.filter(id=>id!==lastBattleBgm);
  nextBattleBgm=choices[Math.floor(Math.random()*choices.length)];
  try{localStorage.setItem(NEXT_BATTLE_BGM_KEY,String(nextBattleBgm));}catch{}
 }
 return nextBattleBgm;
}
function battleBgmTrack(){
 if(!battle)return upcomingBattleBgm();
 if(BATTLE_BGM_TRACKS.includes(battle.bgmTrack))return battle.bgmTrack;
 battle.bgmTrack=upcomingBattleBgm();
 lastBattleBgm=battle.bgmTrack;try{localStorage.setItem(LAST_BATTLE_BGM_KEY,String(lastBattleBgm));}catch{}
 return battle.bgmTrack;
}
// Background loads run one at a time so they never compete with the track being played.
let bgmPreloadChain=Promise.resolve();
function preloadBgm(id){
 const url=window.TACTICS_BGM?.[id];
 if(!url||!save.settings.sound||loadedBgm.has(url)||failedBgm.has(url))return;
 bgmPreloadChain=bgmPreloadChain.then(()=>loadBgm(url)).catch(()=>{});
}
function preloadUpcomingBgm(){preloadBgm(VICTORY_BGM_TRACK);if(battle?.stageId==='c9s2'&&!missionMode)preloadBgm(ENDING_BGM_TRACK);preloadBgm(upcomingBattleBgm());}
// v1.1.2: every victory plays track 10 once. It is preloaded when a battle starts.
const VICTORY_BGM_TRACK=10;
// v1.4.0: the story ending plays track 12. It is preloaded when the final battle starts.
const ENDING_BGM_TRACK=12;
function bgmTrackFor(type){return type==='battle'||type==='boss'?battleBgmTrack():type==='victory'?VICTORY_BGM_TRACK:type==='ending'?ENDING_BGM_TRACK:1;}
// Soundtrack files are decoded once and kept in memory for reuse: track 1 at startup,
// each battle track the first time a battle needs it. Decoding at 32 kHz keeps all five
// tracks at about 175 MB instead of about 260 MB at 48 kHz. Tracks loop with a short
// crossfade over their trimmed audible range, so a track restarts seamlessly.
const BGM_DECODE_RATE=32000,bgmBuffers=new Map(),loadedBgm=new Set(),failedBgm=new Set();
let filePlayer=null,loadingCount=0;
function decodeBgm(data){
 const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;let ctx=null;
 try{if(Offline)ctx=new Offline(2,1,BGM_DECODE_RATE);}catch{}ctx??=audioCtx;
 if(!ctx)return Promise.reject(Error('Web Audio unavailable'));
 return new Promise((resolve,reject)=>{const p=ctx.decodeAudioData(data,resolve,reject);p?.catch?.(reject);});
}
function loadBgm(url){
 if(!bgmBuffers.has(url))bgmBuffers.set(url,fetch(url).then(r=>{if(!r.ok)throw Error('BGM '+r.status);return r.arrayBuffer();}).then(decodeBgm).then(buffer=>{loadedBgm.add(url);return buffer;},e=>{bgmBuffers.delete(url);failedBgm.add(url);throw e;}));
 return bgmBuffers.get(url);
}
function showLoading(promise){
 let el=$('#loadingNotice');
 if(!el){el=document.createElement('div');el.id='loadingNotice';el.setAttribute('role','status');el.innerHTML='<div><span class="loading-spinner" aria-hidden="true"></span>게임 데이터를 불러오는 중입니다.</div>';$('#app').append(el);}
 loadingCount++;el.hidden=false;
 const done=()=>{loadingCount=Math.max(0,loadingCount-1);if(!loadingCount)el.hidden=true;};
 Promise.race([promise,new Promise(r=>setTimeout(r,15000))]).then(done,done);
 return promise;
}
function audibleRange(buffer){const threshold=.004,channels=Array.from({length:buffer.numberOfChannels},(_,i)=>buffer.getChannelData(i)),loud=i=>channels.some(c=>Math.abs(c[i])>threshold);let start=0,end=buffer.length;while(start<end&&!loud(start))start++;while(end>start&&!loud(end-1))end--;return {start:start/buffer.sampleRate,end:end/buffer.sampleRate};}
class BgmFilePlayer{
 constructor(ctx,buffer,volume,loop=true){const range=audibleRange(buffer);this.loop=loop;this.ctx=ctx;this.buffer=buffer;this.volume=volume;this.offset=range.start;this.length=Math.max(1,range.end-range.start);this.fade=Math.min(1.2,this.length/4);this.out=ctx.createGain();this.out.gain.value=0;this.out.connect(ctx.destination);this.sources=new Set();this.timer=0;this.stopped=false;}
 // pos: where to start inside the loop (seconds from the audible start), used to resume a track.
 start(pos=0){if(!(pos>0)||pos>this.length-this.fade-3)pos=0;const t=this.ctx.currentTime+.05;this.anchor=t-pos;this.out.gain.setValueAtTime(0,t);this.out.gain.linearRampToValueAtTime(this.volume,t+(!this.loop?.05:pos?1:.6));this.schedule(t,true,pos);}
 // Current position inside the loop. Each repeat starts `fade` seconds before the previous one ends.
 position(){const period=Math.max(.1,this.length-this.fade);return ((this.ctx.currentTime-this.anchor)%period+period)%period;}
 schedule(t,first,pos=0){
  if(this.stopped)return;
  const src=this.ctx.createBufferSource(),g=this.ctx.createGain(),f=this.fade,end=t+this.length-pos,next=end-f;
  src.buffer=this.buffer;src.connect(g);g.connect(this.out);
  g.gain.setValueAtTime(first?1:0,t);if(!first)g.gain.linearRampToValueAtTime(1,t+f);if(this.loop){g.gain.setValueAtTime(1,next);g.gain.linearRampToValueAtTime(0,end);}
  src.onended=()=>{this.sources.delete(src);src.disconnect();g.disconnect();};src.start(t,this.offset+pos,this.length-pos);this.sources.add(src);
  if(!this.loop)return;
  this.timer=setTimeout(()=>this.schedule(next,false),Math.max(0,(next-this.ctx.currentTime-2)*1000));
 }
 setVolume(v){this.volume=v;if(this.stopped)return;const t=this.ctx.currentTime,gain=this.out.gain;gain.cancelScheduledValues(t);gain.setValueAtTime(gain.value,t);gain.linearRampToValueAtTime(v,t+.2);}
 stop(){this.stopped=true;clearTimeout(this.timer);const t=this.ctx.currentTime,gain=this.out.gain,sources=[...this.sources];gain.cancelScheduledValues(t);gain.setValueAtTime(gain.value,t);gain.linearRampToValueAtTime(0,t+.4);setTimeout(()=>{for(const src of sources)try{src.stop();}catch{}this.out.disconnect();},500);}
}
// v1.3.4: the non-battle track (title) continues where it stopped when a battle (or muting / leaving
// the app) interrupted it, so players hear the whole track, not only its opening. Kept in memory only:
// a fresh start of the app begins the track from the top.
const bgmResume=new Map();
function rememberBgmPosition(){if(filePlayer?.resumeKey&&!filePlayer.stopped)bgmResume.set(filePlayer.resumeKey,filePlayer.position());else if(bgm?.resumeKey&&bgm.loop&&Number.isFinite(bgm.currentTime))bgmResume.set(bgm.resumeKey,bgm.currentTime);}
function stopBgmPlayback(){rememberBgmPosition();bgmGeneration++;soundtrack?.stop();filePlayer?.stop();filePlayer=null;bgm?.pause();bgm=null;activeBgmKey='';}
function syncBgm(){
 if(!playingBgm||!audioCtx||!save.settings.sound||document.hidden){stopBgmPlayback();return;}
 const id=bgmTrackFor(playingBgm),url=window.TACTICS_BGM?.[id]||window.TACTICS_BGM?.[playingBgm],key=url?'file:'+url:'web:'+id;
 if(BATTLE_BGM_TRACKS.includes(id))preloadUpcomingBgm();
 if(activeBgmKey===key)return;
 stopBgmPlayback();const generation=bgmGeneration;activeBgmKey=key;bgmError='';
 const current=()=>activeBgmKey===key&&bgmGeneration===generation;
 const procedural=()=>{soundtrack??=new TacticsSoundtrackEngine(audioCtx);soundtrack.setVolume(.75*bgmGain());soundtrack.play(id).catch(e=>{if(current()){activeBgmKey='';bgmError=e.message;}});};
 // File playback: Web Audio (gapless loop) -> <audio> element loop -> procedural music.
 if(url){
  const ctx=audioCtx,resumeKey=BATTLE_BGM_TRACKS.includes(id)||id===VICTORY_BGM_TRACK||id===ENDING_BGM_TRACK?'':url,element=()=>{if(!current())return;bgm=new Audio(url);bgm.loop=id!==VICTORY_BGM_TRACK;bgm.volume=bgmGain();bgm.resumeKey=resumeKey;const at=bgmResume.get(resumeKey);if(resumeKey&&at>0)bgm.addEventListener('loadedmetadata',()=>{if(at<bgm.duration-5)bgm.currentTime=at;},{once:true});bgm.play().catch(e=>{if(!current())return;bgm=null;bgmError=e.message;procedural();});};
  if(failedBgm.has(url)){element();return;}
  const load=loadBgm(url);if(!loadedBgm.has(url)&&id!==VICTORY_BGM_TRACK)showLoading(load);
  load.then(buffer=>{if(!current())return;filePlayer=new BgmFilePlayer(ctx,buffer,bgmGain(),id!==VICTORY_BGM_TRACK);filePlayer.resumeKey=resumeKey;filePlayer.start(resumeKey?bgmResume.get(resumeKey)||0:0);}).catch(element);return;}
 procedural();
}

function unlockAudio(){if(!audioCtx)try{audioCtx=new (window.AudioContext||window.webkitAudioContext)();}catch{}audioCtx?.resume().then(()=>syncBgm()).catch(()=>{});}
function spellSound(element,impact=false){if(!save.settings.sound)return;unlockAudio();if(!audioCtx)return;const ctx=audioCtx,t=ctx.currentTime,d=impact?.65:.55,noise=['fire','thunder','wind','ice'].includes(element),g=ctx.createGain();g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(impact?.12:.065,t+.04);g.gain.exponentialRampToValueAtTime(.001,t+d);g.connect(sfxOut());if(noise){const buffer=ctx.createBuffer(1,Math.floor(ctx.sampleRate*d),ctx.sampleRate),a=buffer.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=(Math.random()*2-1);const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter();src.buffer=buffer;filter.type=element==='thunder'?'lowpass':'bandpass';filter.frequency.setValueAtTime(element==='thunder'?impact?2600:600:element==='fire'?impact?1100:450:element==='ice'?4000:1700,t);filter.frequency.exponentialRampToValueAtTime(120,t+d);src.connect(filter);filter.connect(g);src.start(t);src.stop(t+d);}const frequencies={fire:impact?[95,48]:[180,360],thunder:impact?[70,35]:[420,840],ice:[1200,1600],wind:[280,460],light:[523,659,784],dark:[90,135]}[element]||[330,660];for(const f of frequencies){const o=ctx.createOscillator(),v=ctx.createGain();o.type=element==='thunder'?'sawtooth':element==='dark'?'triangle':'sine';o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(impact?f*.45:f*1.8,t+d);v.gain.value=.18;o.connect(v);v.connect(g);o.start(t);o.stop(t+d);}}
// v1.4.2: effect sounds go through sfxOut(); the ending lowers them with sfxScale so they do not cover its music.
var sfxScale=1,sfxGainNode=null;
function sfxOut(){if(sfxScale===1)return audioCtx.destination;if(!sfxGainNode||sfxGainNode.context!==audioCtx){sfxGainNode=audioCtx.createGain();sfxGainNode.connect(audioCtx.destination);}sfxGainNode.gain.value=sfxScale;return sfxGainNode;}
function sfx(type='tap'){if(!save.settings.sound)return;unlockAudio();if(!audioCtx)return;const notes={tap:[600,850],move:[220,320],swing:[350,170],hit:[190,95,48],magic:[320,640,960],heal:[440,554,659],death:[220,110,55],win:[392,494,587,784],lose:[220,196,146],turn:[440,660]}[type]||[600];notes.forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+i*.05;o.type=type==='hit'?'triangle':type==='swing'?'sawtooth':'sine';o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*(type==='swing'?.4:.6),t+.15);g.gain.setValueAtTime(type==='hit'?.12:type==='swing'?.026:.065,t);g.gain.exponentialRampToValueAtTime(.001,t+.21);o.connect(g);g.connect(sfxOut());o.start(t);o.stop(t+.22);});if(type==='hit'){const duration=.12,size=Math.floor(audioCtx.sampleRate*duration),buffer=audioCtx.createBuffer(1,size,audioCtx.sampleRate),samples=buffer.getChannelData(0);for(let i=0;i<size;i++)samples[i]=Math.random()*2-1;const source=audioCtx.createBufferSource(),filter=audioCtx.createBiquadFilter(),gain=audioCtx.createGain(),t=audioCtx.currentTime;source.buffer=buffer;filter.type='lowpass';filter.frequency.setValueAtTime(1800,t);filter.frequency.exponentialRampToValueAtTime(220,t+duration);gain.gain.setValueAtTime(.095,t);gain.gain.exponentialRampToValueAtTime(.001,t+duration);source.connect(filter);filter.connect(gain);gain.connect(sfxOut());source.start(t);source.stop(t+duration);}}
function playBgm(type){playingBgm=type;syncBgm();}
function seeded(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
const getStage=()=>STAGES.find(s=>s.id===battle?.stageId), heroRecord=id=>save.party.find(p=>p.id===id), heroDef=id=>HEROES.find(h=>h.id===id), alive=team=>battle.units.filter(u=>u.hp>0&&(!team||u.team===team)), tile=(x,z)=>battle?.tiles[z*mapWidth(battle)+x], occ=(x,z)=>battle.units.find(u=>u.hp>0&&u.x===x&&u.z===z), unit=()=>battle?.units.find(u=>u.id===selected), isSkippedSide=s=>s.kind==='side'&&!save.completed.includes(s.id)&&(save.skippedSides.includes(s.id)||save.completed.includes(`c${s.chapter}s${s.n+1}`)), isUnlocked=s=>(missionMode?(s.chapter===save.missionChapter&&(s.kind==='side'||s.kind==='story'&&s.n===0||!!s.prev&&save.completed.includes(s.prev))):(!s.prev||save.completed.includes(s.prev)))&&!isSkippedSide(s);
function finalCriticalRate(heroId,value){return clamp(value,heroId==='nero'?.18:.10,heroId==='nero'?.25:.20);}
function equipmentCriticalRate(p,inventory){let value=HEROES.find(h=>h.id===p.id).crit+(p.id==='kyle'&&p.classLevel>=2?.05:0);for(const uid of p.equipped||[]){const r=inventory.find(v=>v.uid===uid),g=GEAR.find(v=>v.id===r?.gearId);value+=g?.bonus.crit||0;}return finalCriticalRate(p.id,value);}
function targetCriticalRate(a,s,center,target){if((s.area||0)>0&&(center.x!==target.x||center.z!==target.z))return 0;return a.team==='ally'?finalCriticalRate(a.heroId,a.crit??.1):clamp(a.crit??.05,0,1);}
function isPhysicalHero(u){return ['kyle','bran','sera','nero'].includes(u.heroId||u.id);}
function skillCost(u,s){if(!s.mp)return 0;return s.mp+(isPhysicalHero(u)&&heroDef(u.heroId||u.id).skills.indexOf(Object.keys(SKILLS).find(id=>SKILLS[id]===s))!==4?2*(u.classLevel||0):0);}
const HARMFUL_STATUS=['poison','burn','freeze','silence','sleep','stun','defdown','taunt'];
function cleanseHarmfulStatus(v){const removed=HARMFUL_STATUS.filter(k=>v.status?.[k]);for(const k of removed)delete v.status[k];if(removed.includes('taunt'))delete v.tauntSource;return removed;}
function physicalMaxMP(p,inventory){const h=HEROES.find(h=>h.id===p.id);let mp=p.id==='nero'?24+p.classLevel*6:h.mp+p.classLevel*5;for(const uid of p.equipped||[]){const r=inventory.find(r=>r.uid===uid),g=GEAR.find(g=>g.id===r?.gearId);mp+=g?.bonus.maxMp||0;}return p.id==='nero'?mp:Math.min(mp,20+p.classLevel*6);}
function heroStats(p){const h=heroDef(p.id),l=p.level-1,c=p.classLevel,e=p.equip;let o={...h,level:p.level,classLevel:c,branch:0,equip:e,equipped:p.equipped,maxHp:Math.round((h.hp+l*7+c*16)*(p.id==='kyle'&&c>=1?1.1:p.id==='bran'&&c>=2?1.2:1)),maxMp:h.mp+l*2+c*8,atk:h.atk+l*3+c*5,def:h.def+l*1.8+c*4,mag:h.mag+l*3+c*5,res:h.res+l*1.7+c*3,move:h.move,crit:h.crit+(p.id==='kyle'&&c>=2?.05:0),eva:h.eva+(p.id==='nero'&&c>=2?.1:0)};if(p.id==='bran'&&c>=1){o.def*=1.15;o.move+=c;}if(p.id==='kyle'&&c>=3){o.atk=Math.round(o.atk*1.08)+3;o.def-=2;o.crit+=.03;}for(let i=0;i<4;i++){const r=equippedRecord(p,i),g=GEAR.find(g=>g.id===r?.gearId);if(g)for(const [k,v]of Object.entries(g.bonus))o[k]=(o[k]||0)+v;}o.crit=finalCriticalRate(p.id,o.crit);if(isPhysicalHero(p)){o.maxMp=physicalMaxMP(p,save.inventory);if(['kyle','bran','nero'].includes(p.id))o.def+=3;}return o;}
function className(u){const h=heroDef(u.heroId||u.id);if(!h)return u.name;const index=Math.min(u.classLevel||0,h.job.length-1);return h.job[index];}
// v0.7.16: Fixed level cap; higher EXP requirements start at Lv.26 and Lv.31.
function xpToNextLevel(level){
 if(level>=HERO_LEVEL_CAP)return 0;
 const base=80+level*18;
 return Math.ceil(base*(level>=31?1.30:level>=26?1.15:1));
}
function clampHeroProgress(p){
 if(p.level>HERO_LEVEL_CAP){p.level=HERO_LEVEL_CAP;p.xp=0;}
 else if(p.level===HERO_LEVEL_CAP)p.xp=0;
}
function promotionRankFor(id,level){
 if(id==='kyle')return level>=30?3:level>=20?2:level>=10?1:0;
 return level>=20?2:level>=10?1:0;
}
function syncPromotion(p,events=[]){
 const target=promotionRankFor(p.id,p.level),h=heroDef(p.id);
 while(p.classLevel<target){
  const from=p.classLevel;p.classLevel++;
  p.branch=0;
  events.push({type:'promotion',heroId:p.id,name:h.name,from,to:p.classLevel,fromName:h.job[from]||h.job[0],toName:h.job[p.classLevel]||h.job.at(-1)});
  log(`${h.name} ${h.job[p.classLevel]} 전직!`);
  toast(`${h.name} ${h.job[p.classLevel]} 전직 완료`);
 }
 return events;
}
function addXP(id,amount){
 let p=heroRecord(id);if(!p)return[];
 p.xp+=amount;let raised=false,events=[];
 while(p.level<HERO_LEVEL_CAP&&p.xp>=xpToNextLevel(p.level)){
  p.xp-=xpToNextLevel(p.level);p.level++;raised=true;
  events.push({type:'level',heroId:id,name:heroDef(id).name,level:p.level});
  syncPromotion(p,events);
 }
 if(p.level===HERO_LEVEL_CAP)p.xp=0;
 if(events.length){if(battle){battle.growthEvents??=[];battle.growthEvents.push(...events);}log(`${heroDef(id).name} 레벨 ${p.level}!`);toast(`${heroDef(id).name} Lv.${p.level} 달성`);}
 if(raised){const u=battle?.units.find(u=>u.heroId===id);if(u){const hp=u.hp,mp=u.mp,old=u.maxHp;Object.assign(u,heroStats(p),{id:u.id,heroId:id,team:'ally'});u.hp=Math.min(u.maxHp,hp+(u.maxHp-old));u.mp=Math.min(u.maxMp,mp);}}
 return events;
}
// v0.7.12: XP is limited per action, weaker foes yield less XP, and replays yield only 10%.
// Action XP is shared by all targets of one cast; it cannot be farmed by wide AoE.
function awardActionXP(heroId,amount,targetLevel=null,earned={value:0}){
 if(!heroId||!battle||amount<=0)return 0;
 const hero=heroRecord(heroId),gap=targetLevel==null?0:Math.max(0,(hero?.level||1)-targetLevel-2);
 const levelFactor=targetLevel==null?1:Math.max(.2,1-gap*.10);
 const replay=!!battle.replay||save.completed.includes(battle.stageId);
 const room=Math.max(0,90-earned.value);
 const base=Math.min(room,Math.max(0,Math.round(amount*levelFactor)));
 earned.value+=base;
 const granted=base?(replay?Math.max(1,Math.round(base*.1)):base):0;
 if(granted)addXP(heroId,granted);
 return granted;
}
function log(text){if(battle){battle.log??=[];battle.log.push(text);if(battle.log.length>80)battle.log.shift();}}
function isBossStage(stage){return !!stage&&(stage.kind==='boss'||stage.id==='c9s2');}

// v1.3.0: per-stage, per-difficulty tuning, calibrated by simulation against the target grade table
// (tools/balance/targets.py). Each entry is [hp multiplier, attack/magic multiplier, enemy count delta, soften]
// where soften swaps that many ranged/caster enemies for melee ones. Same table for story and mission.
const STAGE_TUNING={
 'c0s0':{story:[1.08,1.05,0,0],normal:[1.08,1.05,0,0],tactical:[1.08,1.05,0,0]},
 'c0s1':{story:[1.08,1.05,0,0],normal:[1.66,2.33,2,0],tactical:[1.732,2.356,3,0]},
 'c0s2':{story:[2.6,2.6,3,0],normal:[1.51,2.02,3,0],tactical:[1.84,2.169,3,0]},
 'c0q0':{story:[1.0,1.0,0,0],normal:[1.75,2.54,2,0],tactical:[1.489,2.067,3,0]},
 'c0q1':{story:[1.0,1.0,0,0],normal:[1.4,1.86,3,0],tactical:[1.542,1.779,3,0]},
 'c1s0':{story:[1.29,1.43,-1,1],normal:[1.12,1.13,-1,1],tactical:[1.045,1.07,-2,1]},
 'c1s1':{story:[1.13,1.21,-1,2],normal:[1.08,1.13,-2,2],tactical:[0.972,1.029,-2,2]},
 'c1s2':{story:[1.14,1.28,0,1],normal:[0.97,0.96,0,1],tactical:[0.914,0.893,-1,1]},
 'c1q0':{story:[1.05,1.12,0,1],normal:[1.05,1.11,-2,1],tactical:[0.991,1.054,-1,1]},
 'c1q1':{story:[1.14,1.31,0,1],normal:[1.11,1.24,0,1],tactical:[1.036,1.133,-2,1]},
 'c1b':{story:[1.27,1.54,2,0],normal:[0.99,1.02,-1,0],tactical:[0.858,0.83,-1,0]},
 'c2s0':{story:[1.36,1.74,1,1],normal:[1.35,1.6,-1,1],tactical:[1.195,1.36,-1,1]},
 'c2s1':{story:[1.39,1.64,0,2],normal:[1.35,1.45,-1,2],tactical:[1.221,1.234,-1,2]},
 'c2s2':{story:[1.38,1.71,0,1],normal:[1.2,1.32,0,1],tactical:[1.099,1.271,-1,1]},
 'c2q0':{story:[1.19,1.32,1,0],normal:[1.14,1.19,0,0],tactical:[1.122,1.212,-2,0]},
 'c2q1':{story:[1.35,1.66,1,0],normal:[1.2,1.26,0,0],tactical:[1.009,1.189,-1,0]},
 'c2b':{story:[1.35,1.71,2,0],normal:[1.08,1.14,0,0],tactical:[0.964,0.964,0,0]},
 'c3s0':{story:[1.57,2.2,2,0],normal:[1.15,1.33,2,0],tactical:[1.204,1.387,1,0]},
 'c3s1':{story:[1.44,1.91,3,0],normal:[1.19,1.35,2,0],tactical:[1.162,1.313,0,0]},
 'c3s2':{story:[1.52,2.1,2,0],normal:[1.21,1.41,2,0],tactical:[1.276,1.414,0,0]},
 'c3q0':{story:[1.31,1.61,2,0],normal:[1.15,1.25,1,0],tactical:[1.109,1.233,0,0]},
 'c3q1':{story:[1.57,2.1,3,0],normal:[1.44,1.83,1,0],tactical:[1.153,1.382,2,0]},
 'c3b':{story:[1.7,1.88,3,0],normal:[1.14,1.27,2,0],tactical:[1.115,1.192,1,0]},
 'c4s0':{story:[1.69,2.56,3,0],normal:[1.45,1.87,3,0],tactical:[1.371,1.754,2,0]},
 'c4s1':{story:[1.55,2.08,3,0],normal:[1.4,1.69,3,0],tactical:[1.335,1.684,1,0]},
 'c4s2':{story:[1.61,2.2,3,0],normal:[1.42,1.68,3,0],tactical:[1.289,1.529,1,0]},
 'c4q0':{story:[1.84,2.48,3,0],normal:[1.42,1.68,3,0],tactical:[1.1,1.307,2,0]},
 'c4q1':{story:[1.57,2.22,3,0],normal:[1.59,1.73,2,0],tactical:[1.261,1.406,0,0]},
 'c4b':{story:[2.02,2.23,3,0],normal:[1.3,1.5,2,0],tactical:[1.197,1.4,3,0]},
 'c5s0':{story:[1.46,2.0,3,0],normal:[1.32,1.58,2,0],tactical:[1.146,1.278,2,0]},
 'c5s1':{story:[1.55,2.18,2,0],normal:[1.28,1.53,1,0],tactical:[1.26,1.375,0,0]},
 'c5s2':{story:[1.41,1.88,3,0],normal:[1.34,1.58,1,0],tactical:[1.112,1.178,1,0]},
 'c5q0':{story:[1.57,2.2,3,0],normal:[1.18,1.35,2,0],tactical:[1.147,1.208,0,0]},
 'c5b':{story:[1.55,2.01,3,0],normal:[1.29,1.45,0,0],tactical:[1.041,1.16,1,0]},
 'c6s0':{story:[1.58,2.29,3,0],normal:[1.39,1.63,1,0],tactical:[1.317,1.561,1,0]},
 'c6s1':{story:[1.45,1.95,3,0],normal:[1.29,1.59,2,0],tactical:[1.292,1.531,1,0]},
 'c6s2':{story:[1.5,2.09,3,0],normal:[1.4,1.74,1,0],tactical:[1.119,1.22,1,0]},
 'c6q0':{story:[1.38,1.81,3,0],normal:[1.48,1.61,1,0],tactical:[1.196,1.33,1,0]},
 'c6b':{story:[1.62,2.03,3,0],normal:[1.26,1.45,1,0],tactical:[1.127,1.214,1,0]},
 'c7s0':{story:[1.41,1.87,3,0],normal:[1.29,1.5,1,0],tactical:[1.184,1.322,1,0]},
 'c7s1':{story:[1.44,1.93,3,0],normal:[1.3,1.49,0,0],tactical:[1.138,1.232,0,0]},
 'c7s2':{story:[1.33,1.7,3,0],normal:[1.19,1.39,2,0],tactical:[1.122,1.179,0,0]},
 'c7q0':{story:[1.33,1.69,3,0],normal:[1.29,1.45,-1,0],tactical:[1.138,1.347,-1,0]},
 'c7b':{story:[1.43,1.97,3,0],normal:[1.13,1.18,0,0],tactical:[1.083,1.198,-1,0]},
 'c8s0':{story:[1.4,1.81,2,0],normal:[1.16,1.33,2,0],tactical:[1.06,1.1,0,0]},
 'c8s1':{story:[1.31,1.66,3,0],normal:[1.1,1.17,2,0],tactical:[1.059,1.158,0,0]},
 'c8s2':{story:[1.33,1.68,3,0],normal:[1.18,1.32,1,0],tactical:[1.07,1.079,0,0]},
 'c8q0':{story:[1.3,1.62,3,0],normal:[1.13,1.13,0,0],tactical:[1.082,1.175,-1,0]},
 'c8b':{story:[1.4,1.82,3,0],normal:[1.19,1.31,-1,0],tactical:[0.977,0.972,0,0]},
 'c9s0':{story:[1.48,1.88,0,0],normal:[1.14,1.27,2,0],tactical:[1.235,1.317,0,0]},
 'c9s1':{story:[1.63,1.72,3,0],normal:[1.22,1.37,1,0],tactical:[1.13,1.131,0,0]},
 'c9s2':{story:[1.42,1.83,2,0],normal:[1.1,1.18,0,0],tactical:[1.027,1.025,0,0]},
 'c9q0':{story:[1.49,1.67,3,0],normal:[1.22,1.32,2,0],tactical:[1.022,1.027,0,0]}
};

function stageBalance(stage){const t=STAGE_TUNING[stage?.id]?.[save.difficulty];if(!t)return null;const [hp,atk,count,soften]=t;return {hp,atk,count,soften};}
function softenEncounterTypes(stage,types,rand){
 const cfg=stageBalance(stage);if(!cfg?.soften||!types.length)return;
 const candidates=[];
 for(let i=0;i<types.length;i++)if([4,15,16,20].includes(types[i]))candidates.push(i);
 for(let n=0;n<cfg.soften&&candidates.length;n++){
   const at=candidates[Math.floor(rand()*candidates.length)],old=types[at];
   const replacement=[1,10][Math.floor(rand()*2)];
   const hadElemental=types.some(v=>['fire','water','wind'].includes(elementFamily(MONSTERS[v].element)));
   types[at]=replacement;
   const hasElemental=types.some(v=>['fire','water','wind'].includes(elementFamily(MONSTERS[v].element)));
   if(hadElemental&&!hasElemental)types[at]=old;
   candidates.splice(candidates.indexOf(at),1);
 }
}

function battleRules(stage){const size=stage.chapter<2?10:stage.chapter<7?12:14,shape=stage.chapter<2?[12,8]:stage.chapter<7?[10,14]:[12,16],rectangular=(stage.chapter*3+stage.n+(stage.kind==='side'?1:0))%2===1,width=rectangular?shape[0]:size,height=rectangular?shape[1]:size,ochre=(stage.chapter+stage.n+(stage.kind==='side'?1:0))%2===1,area=width*height;const result={size:Math.max(width,height),width,height,theme:ochre?'ochre':'green',forestCount:ochre?0:Math.round(area*.1),swampCount:ochre?0:Math.round(area*.04),scrubCount:ochre?Math.round(area*.09):0,sandCount:ochre?Math.round(area*.07):0,desertCount:ochre?Math.round(area*.05):0,rockCount:Math.round(Math.sqrt(area)),itemCount:0,maxHeight:stage.chapter<2?3:4,maxStep:1,enemyCount:Math.min(12,5+Math.floor(stage.chapter*.7)+(isBossStage(stage)?1:0))+(save.difficulty==='story'?-1:save.difficulty==='tactical'?1:0),enemySpacing:3,partyDistance:5,river:stage.chapter===2||stage.chapter===6};if(stage.chapter===0){const first=stage.kind==='story'&&stage.n===0;result.enemyCount=Math.max(3,(first?3:4)+(save.difficulty==='story'?-1:save.difficulty==='tactical'?1:0));result.maxHeight=1;result.swampCount=0;result.sandCount=0;result.desertCount=0;result.forestCount=Math.round(area*.04);result.scrubCount=0;result.partyDistance=7;result.prologueVersion=1;}const balance=stageBalance(stage);if(balance?.count)result.enemyCount=Math.max(3,Math.min(12,result.enemyCount+balance.count));return result;}
function newMapSeed(){if(globalThis.crypto?.getRandomValues)return crypto.getRandomValues(new Uint32Array(1))[0];return (Date.now()^Math.floor(Math.random()*0xffffffff))>>>0;}
function shuffled(a,rand){const out=a.slice();for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
const MONSTER_POOLS=[[0,1,2,10,11,12],[1,3,4,10,11,15],[2,11,12,16,18,20],[0,8,13,19,20,22],[3,4,5,15,17,20],[11,15,16,18,20,21],[6,7,17,18,21,22],[5,15,17,20,21,22],[3,4,7,15,20,21],[6,7,9,17,21,22]];
// Weighted chapter-aware encounter mix: 40% neutral and 20% each of fire, water and wind.
// Every encounter reserves an elemental regular/elite slot, even in early chapters.
const ELEMENTAL_NEW={fire:[24,25],water:[26,27],wind:[28,29]};
function chapterElementWeights(ch){const w={none:40,fire:20,water:20,wind:20};if([1,6,8].includes(ch))w.fire+=18;if([2,5].includes(ch))w.water+=18;if([0,3,4,7,9].includes(ch))w.wind+=12;return w;}
function encounterElement(rand,weights){const sum=Object.values(weights).reduce((a,b)=>a+b,0),roll=rand()*sum;let acc=0;for(const [k,v] of Object.entries(weights)){acc+=v;if(roll<acc)return k;}return 'none';}
function encounterMonster(ch,rand,kind,legacyPool){const candidates=kind==='none'?legacyPool.filter(i=>!MONSTERS[i].element):[...legacyPool.filter(i=>elementFamily(MONSTERS[i].element)===kind),...ELEMENTAL_NEW[kind]];const fallback=kind==='none'?[1,3,4,6,11,15,16,19]:ELEMENTAL_NEW[kind];const list=candidates.length?candidates:fallback;return list[Math.floor(rand()*list.length)];}

// v0.7.10: encyclopedia and encounter generation share EXACTLY the same stat formula.
// New HP multiplier stacks with the existing v0.7.6 +30% (1.30 * 1.30).
// v0.7.16: NORMAL is the canonical reference. All difficulty factors are
// relative to NORMAL; chapter pressure is added ONCE after v0.7.12 boosts.
function difficultyProfile(difficulty='normal'){
 return difficulty==='story'?{hp:.80,atk:.72,def:.90,cap:[.29,.35,.40]}:
  difficulty==='tactical'?{hp:1.15,atk:1.20,def:1.12,cap:[.42,.54,.63]}:
  {hp:1,atk:1,def:1,cap:[.36,.43,.52]};
}
function chapterDifficultyPressure(chapter){
 return chapter>=9?{hp:1.10,atk:1.25,def:1.10}:
  chapter>=7?{hp:1.08,atk:1.20,def:1.08}:
  chapter>=5?{hp:1.05,atk:1.15,def:1.05}:
  chapter>=3?{hp:1,atk:1.10,def:1.03}:{hp:1,atk:1.05,def:1};
}
// Prologue-only tutorial balance. Later chapters keep their canonical formulas.
function prologueRules(stage){const first=stage.kind==='story'&&stage.n===0;return {first,leader:stage.kind==='story'&&stage.n===2};}
function prologueEnemyStats(m,level,difficulty,leader=false,stage=null){
 const l=Math.max(0,Math.min(2,level-1)),slime=m.model==='slime',profile=difficultyProfile(difficulty);
 const hp=leader?72+l*3:slime?32+l*3:42+l*3,atk=leader?18+l:slime?12+l:15+l,def=leader?9:slime?5:7,res=leader?7:5;
 const balance=stageBalance(stage);
 const maxHp=Math.round(hp*profile.hp*(balance?.hp??1));
 return {level,maxHp,hp:maxHp,maxMp:0,mp:0,atk:Math.round(atk*profile.atk*(balance?.atk??1)),mag:Math.round(8*profile.atk*(balance?.atk??1)),def:Math.round(def*profile.def),res:Math.round(res*profile.def),spd:8,move:3,jump:1,crit:.03,eva:.02};
}
function prologueMonsterTypes(stage,count){
 const types=Array.from({length:count},(_,i)=>i%3===2?1:0),rules=prologueRules(stage);
 if(rules.leader)types[0]=1;
 const waterReady=HEROES.some(h=>h.join===0&&h.skills.some((id,index)=>elementFamily(SKILLS[id].element)==='water'&&['physical','magic'].includes(SKILLS[id].type)&&heroRecord(h.id).level>=skillUnlock(id,index)));
 if(!rules.first&&waterReady&&count>2)types[count-1]=10;
 return types;
}
// v1.5.2: cleared routes keep the map's base terrain (dirt on ochre maps), so grass no longer cuts through dirt maps.
function clearPrologueRoutes(tiles,allies,enemies,width,height,base='grass'){
 const get=(x,z)=>tiles[z*width+x],clear=(x,z)=>{const t=get(x,z);if(t){t.height=0;t.terrain=base;delete t.decor;}},hub={x:width-4,z:height-4};
 for(const t of tiles)if(t.x>=width-5&&t.z>=height-5)clear(t.x,t.z);
 for(const u of [...allies,...enemies,{x:0,z:0}]){let x=u.x,z=u.z;clear(x,z);while(x!==hub.x){x+=Math.sign(hub.x-x);clear(x,z);}while(z!==hub.z){z+=Math.sign(hub.z-z);clear(x,z);}}
}

function enemyCombatStats(m,level,chapter,difficulty='normal',elite=false,boss=false,stage=null){
 if(chapter===0)return prologueEnemyStats(m,level,difficulty,elite,stage);
 const l=level-1,midgame=chapter>=3,profile=difficultyProfile(difficulty),pressure=chapterDifficultyPressure(chapter);
 const baseFactor=midgame?1.10:1;
 const offenseFactor=midgame?1.08/1.10:1;
 const resistanceFactor=midgame?1.08:1;
 const mult=boss?2.3:elite?2.1:.8;
 const defenseBoost=boss||elite?1.15:1.10;
 const chapterBoost=chapter>=9?{hp:1.20,def:1.20,atk:1.12}:chapter>=7?{hp:1.15,def:1.15,atk:1.10}:chapter>=5?{hp:1.10,def:1.10,atk:1.05}:chapter>=3?{hp:1.05,def:1.05,atk:1}:{hp:1,def:1,atk:1};
 const balance=stageBalance(stage);
 const hp=Math.round(Math.round((m.hp+l*5)*baseFactor*mult)*1.30*1.30*chapterBoost.hp*pressure.hp*profile.hp*(balance?.hp??1));
 return {level,maxHp:hp,hp,maxMp:100,mp:100,
  atk:Math.round((m.atk+l*2.9+10)*baseFactor*offenseFactor*(boss?1.15:elite?1.12:1)*chapterBoost.atk*pressure.atk*profile.atk*(balance?.atk??1)),
  mag:Math.round((m.mag+l*2.9+10)*baseFactor*offenseFactor*(elite?1.12:1)*chapterBoost.atk*pressure.atk*profile.atk*(balance?.atk??1)),
  def:Math.round((m.def+l*1.3)*resistanceFactor*defenseBoost*chapterBoost.def*pressure.def*profile.def),
  res:Math.round((m.res+l*1.2)*resistanceFactor*defenseBoost*chapterBoost.def*pressure.def*profile.def),
  spd:10,move:m.move,jump:2,crit:.05,eva:m.eva??.02};
}

function makeBattle(stage,mapSeed=newMapSeed()){const rules=battleRules(stage),rand=seeded((mapSeed^stage.seed)>>>0),size=rules.size,width=rules.width,height=rules.height,tiles=[],units=[],phaseX=rand()*Math.PI*2,phaseZ=rand()*Math.PI*2,frequency=.24+rand()*.13,baseTerrain=rules.theme==='ochre'?'dirt':'grass';rules.lootKind='farming';rules.itemCount=5;
for(let z=0;z<height;z++)for(let x=0;x<width;x++){const wave=Math.round((Math.sin(x*frequency+phaseX)+Math.sin(z*frequency+phaseZ)+2)*rules.maxHeight/4);tiles.push({x,z,height:Math.min(wave,Math.floor((x+z)/3)),terrain:baseTerrain});}
if(rules.river){const vertical=rand()<.5,line=3+Math.floor(rand()*((vertical?width:height)-6)),length=vertical?height:width,bridges=new Set([2,Math.floor(length/2),length-3]);for(const t of tiles)if((vertical?t.x:t.z)===line)t.terrain=bridges.has(vertical?t.z:t.x)?'bridge':'water';}
const spots=[[width-2,height-2],[width-3,height-2],[width-2,height-3],[width-3,height-3],[width-1,height-3],[width-3,height-1]];
HEROES.filter(h=>h.join<=stage.chapter).forEach((h,i)=>{const p=heroRecord(h.id),st=heroStats(p),[x,z]=spots[i];units.push({...st,id:h.id,heroId:h.id,team:'ally',x,z,hp:Math.max(1,Math.min(st.maxHp,Math.round(st.maxHp*(p.hpRatio??1)))),mp:st.maxMp,status:{},dir:1,moved:false,acted:false});});
const candidates=shuffled(tiles.filter(t=>t.terrain!=='water'&&t.x+t.z<=(width+height)*.48&&units.every(u=>dist(t,u)>=rules.partyDistance)),rand),enemySpots=[];
for(let i=0;i<rules.enemyCount;i++){let options=[];for(let spacing=rules.enemySpacing;spacing>=1&&!options.length;spacing--)options=candidates.filter(t=>enemySpots.every(p=>dist(t,p)>=spacing));if(!options.length)throw Error('적 배치 공간이 부족합니다.');let t;if(!i&&isBossStage(stage)){t=options.slice().sort((a,b)=>a.x+a.z-b.x-b.z)[0];}else{const scored=options.map(t=>({t,score:(enemySpots.length?Math.min(...enemySpots.map(p=>dist(t,p))):0)+rand()*2})).sort((a,b)=>b.score-a.score);t=scored[Math.floor(rand()*Math.min(4,scored.length))].t;}enemySpots.push(t);}
// Leaders start behind the regular monsters, farthest from the party.
const partySpots=units.filter(u=>u.team==='ally'),rearSlots=isBossStage(stage)?[0,1]:[0];
for(const slot of rearSlots){if(slot>=enemySpots.length)continue;let farthest=slot;for(let i=slot+1;i<enemySpots.length;i++)if(Math.min(...partySpots.map(a=>dist(enemySpots[i],a)))>Math.min(...partySpots.map(a=>dist(enemySpots[farthest],a))))farthest=i;[enemySpots[slot],enemySpots[farthest]]=[enemySpots[farthest],enemySpots[slot]];}
const pool=MONSTER_POOLS[stage.chapter],weights=chapterElementWeights(stage.chapter),regularSlots=enemySpots.length-(isBossStage(stage)?1:0);
const types=[];for(let j=0;j<regularSlots;j++){let kind=encounterElement(rand,weights);if(j===regularSlots-1&&!types.some(id=>['fire','water','wind'].includes(elementFamily(MONSTERS[id].element))))kind=encounterElement(rand,{fire:weights.fire,water:weights.water,wind:weights.wind});types.push(encounterMonster(stage.chapter,rand,kind,pool));}
if(stage.kind==='side'&&Number.isInteger(stage.focus)&&types.length>1){types[0]=stage.focus;if(!types.some(id=>['fire','water','wind'].includes(elementFamily(MONSTERS[id].element))))types[types.length-1]=encounterMonster(stage.chapter,rand,encounterElement(rand,{fire:weights.fire,water:weights.water,wind:weights.wind}),pool);}

if(stage.chapter===0)types.splice(0,types.length,...prologueMonsterTypes(stage,regularSlots));
softenEncounterTypes(stage,types,rand);
for(let i=0;i<enemySpots.length;i++){
 const isBoss=isBossStage(stage)&&i===0,isElite=stage.chapter===0?(prologueRules(stage).leader&&i===0):!isBoss&&i===(isBossStage(stage)?1:0),profile=isBoss?BOSS_PROFILES[stage.chapter]:null;
 const type=isBoss?(stage.chapter*2)%MONSTERS.length:types[i-(isBossStage(stage)?1:0)],m=MONSTERS[type],{x,z}=enemySpots[i];
 const stats=enemyCombatStats(m,stage.level,stage.chapter,save.difficulty,isElite,isBoss,stage);
 units.push({...m,...stats,id:`enemy${i}`,monsterIndex:type,team:'enemy',x,z,
 ...(stage.chapter===0&&isElite?{prologueLeader:true}:{}),statusAttack:isBoss?undefined:m.status,status:{},dir:3,moved:false,acted:false,boss:isBoss,elite:isElite,bossId:isBoss?stage.chapter:undefined,
 name:isBoss?(BOSS_NAMES[stage.chapter]||'아르카 코어'):stage.chapter===0&&isElite?'고블린 대장':isElite?`정예 ${m.name}`:m.name,
 model:profile?.model||m.model,color:profile?.color||m.color,element:profile?.element||m.element,
 immunity:profile?.model==='golem'?'magic':profile?.model==='ghost'?'physical':m.immunity,
 range:isBoss?1:m.range,minRange:isBoss?1:m.minRange,magic:isBoss?false:m.magic});
}
const goal={x:0,z:0},available=shuffled(tiles.filter(t=>t.terrain===baseTerrain&&!units.some(u=>u.x===t.x&&u.z===t.z)&&!(t.x===goal.x&&t.z===goal.z)),rand);let cursor=0;
for(let i=0;i<rules.forestCount;i++)available[cursor++].terrain='forest';
for(let i=0;i<rules.swampCount;i++)available[cursor++].terrain='swamp';
for(let i=0;i<rules.scrubCount;i++)available[cursor++].terrain='scrub';
for(let i=0;i<rules.sandCount;i++)available[cursor++].terrain='sand';
for(let i=0;i<rules.desertCount;i++)available[cursor++].terrain='desert';
for(let i=0;i<rules.rockCount;i++)available[cursor++].decor='rock';
if(stage.chapter===0)clearPrologueRoutes(tiles,units.filter(u=>u.team==='ally'),units.filter(u=>u.team==='enemy'),width,height,baseTerrain);
for(const u of units){const opponents=units.filter(v=>v.team!==u.team),center={x:opponents.reduce((sum,v)=>sum+v.x,0)/opponents.length,z:opponents.reduce((sum,v)=>sum+v.z,0)/opponents.length};u.dir=facing(u,center);}
const result={stageId:stage.id,replay:save.completed.includes(stage.id),size,width,height,tiles,units,phase:'player',round:1,log:['전투 시작. 이동할 칸을 두 번 탭하면 이동합니다.'],rewarded:false,goal,danger:[],rng:(mapSeed^stage.seed)>>>0,mapSeed,mapRules:rules};result.pickups=rules.itemCount===0?[]:makePickups(result,stage);return result;}

function random(){let a=battle.rng+=0x6D2B79F5;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;}
function canControl(){return battle&&battle.phase==='player'&&!busy&&!isTitle&&!battle.pendingFacing;}
function moveCost(a,b,u){if(!b||b.terrain==='water'||Math.abs(a.height-b.height)>u.jump)return Infinity;const o=occ(b.x,b.z);if(o&&o.id!==u.id)return Infinity;return b.terrain==='swamp'?3:['forest','scrub','sand'].includes(b.terrain)?2:1;}
function neighbors(t){return [[t.x+1,t.z],[t.x-1,t.z],[t.x,t.z+1],[t.x,t.z-1]].filter(([x,z])=>x>=0&&z>=0&&x<mapWidth(battle)&&z<mapHeight(battle)).map(([x,z])=>tile(x,z));}
function movement(u,limit=Math.max(0,u.move+(u.status.speed?2:0)-(u.status.freeze?2:0))){const cost=new Map([[key(u.x,u.z),0]]),queue=[tile(u.x,u.z)];while(queue.length){queue.sort((a,b)=>cost.get(key(a.x,a.z))-cost.get(key(b.x,b.z)));const a=queue.shift();for(const b of neighbors(a)){const k=key(b.x,b.z),v=cost.get(key(a.x,a.z))+moveCost(a,b,u);if(v<=limit&&v<(cost.get(k)??Infinity)){cost.set(k,v);queue.push(b);}}}return cost;}
// A* uses terrain costs and height constraints, independently of range coloring.
function pathfind(u,dest){const start=tile(u.x,u.z),open=[start],g=new Map([[key(start.x,start.z),0]]),came=new Map();while(open.length){open.sort((a,b)=>(g.get(key(a.x,a.z))+dist(a,dest))-(g.get(key(b.x,b.z))+dist(b,dest)));const a=open.shift(),ak=key(a.x,a.z);if(a===dest){let p=[a],k=ak;while(came.has(k)){const t=came.get(k);p.unshift(t);k=key(t.x,t.z);}return p;}for(const b of neighbors(a)){const k=key(b.x,b.z),v=g.get(ak)+moveCost(a,b,u);if(v<(g.get(k)??Infinity)){g.set(k,v);came.set(k,a);if(!open.includes(b))open.push(b);}}}return [];}
function basic(u){return {name:'기본 공격',mp:0,type:u.magic?'magic':'physical',power:['kyle','bran','nero'].includes(u.heroId)?1.1:1,range:u.range||1,minRange:u.minRange||1,heightRange:u.range>1?4:1,element:u.team==='enemy'?u.element:(u.magic?u.element:null),status:u.team==='enemy'?u.statusAttack:null};}
function inRange(u,t,s){const d=dist(u,t);return d<=(s.range||0)&&d>=(s.minRange??0)&&Math.abs(tile(u.x,u.z).height-t.height)<=(s.heightRange??(s.range<=1?1:3));}
function areaTiles(center,s){return battle.tiles.filter(t=>(s.shape==='square'?Math.max(Math.abs(t.x-center.x),Math.abs(t.z-center.z)):dist(t,center))<=(s.area||0)&&Math.abs(t.height-center.height)<=(s.heightRange??2));}
function targets(u,t,s){const ids=new Set(areaTiles(t,s).map(t=>key(t.x,t.z))),friendly=['heal','cleanse','buff'].includes(s.type);return alive().filter(v=>ids.has(key(v.x,v.z))&&(friendly?v.team===u.team:v.team!==u.team));}
function facing(a,b){const dx=b.x-a.x,dz=b.z-a.z;return Math.abs(dx)>Math.abs(dz)?(dx>0?1:3):(dz>0?2:0);}
function sideBonus(a,b){const d=facing(b,a);return d===b.dir?0:(d+2)%4===b.dir?.2:.1;}
// v0.7.10: ranged physical attacks use the actual 0–180° approach angle.
// A dot-product curve gives 0% front, +10% at 90°, +20% directly behind,
// with no sudden discontinuity at a cardinal/diagonal boundary.
// Adjacent melee physical attacks retain the original cardinal rules.
function attackDirection(a,b,s){
 if(s.type!=='physical')return {bonus:0,angle:0,zone:'none',ranged:false};
 const dx=a.x-b.x,dz=a.z-b.z,distance=Math.hypot(dx,dz);
 const ranged=(a.range>1)||(s.range>1&&Math.abs(dx)+Math.abs(dz)>1);
 if(!ranged){const bonus=sideBonus(a,b);return {bonus,angle:bonus===.2?180:bonus===.1?90:0,zone:bonus===.2?'rear':bonus===.1?'side':'front',ranged:false};}
 if(distance===0)return {bonus:0,angle:0,zone:'front',ranged:true};
 const vectors=[[0,-1],[1,0],[0,1],[-1,0]],forward=vectors[b.dir]||vectors[0];
 const cosine=Math.max(-1,Math.min(1,(dx*forward[0]+dz*forward[1])/distance));
 const angle=Math.acos(cosine)*180/Math.PI;
 return {bonus:.1*(1-cosine),angle,zone:angle>=135?'rear':angle>45?'side':'front',ranged:true};
}
function areaDamageFactor(s,center,target){if(s.type!=='magic'||!(s.area>0)||!center)return 1;const distance=s.shape==='square'?Math.max(Math.abs(target.x-center.x),Math.abs(target.z-center.z)):dist(target,center);return distance===0?1:distance===1?.8:.6;}
function immunityDamageFactor(target,attack){
 if(!target.immunity||target.immunity!==attack.type)return 1;
 return attack.type==='physical'&&Object.hasOwn(ELEMENT,attack.element) ? .60 : .35;
}
function immunityDescription(u){
 return u.immunity==='physical'?'물리 이뮤니티: 무속성 물리 피해 35% 적용 (65% 감소) · 속성 물리 피해 60% 적용 (40% 감소)':u.immunity==='magic'?'마법 이뮤니티: 마법 피해 35% 적용 (65% 감소)':'';
}
function estimate(a,b,s,center=b){
 if(s.type==='heal')return {damage:Math.round((a.mag*s.power+15)*(a.heroId==='luna'&&a.classLevel>=1?1.15:1)),hit:1,bonus:0};
 let atk=s.type==='magic'?a.mag:a.atk,def=s.type==='magic'?b.res:b.def;
 if(a.status.atk)atk*=1.25;
 if(b.status.def)def*=1.35;
 if(b.status.defdown)def*=.7;
 if(b.status.fortress)def*=1.8;
 const height=tile(a.x,a.z).height-tile(b.x,b.z).height;
 const direction=attackDirection(a,b,s),bonus=direction.bonus;
 const raw=Math.max(1,atk*(s.power||1)-def*.5*(1-(s.ignore||0)));
 const heightBonus=Math.max(0,height)*.08;
 const seraBonus=a.heroId==='sera'&&a.classLevel>=1&&height>0?.15:0;
 const neroBonus=a.heroId==='nero'&&a.classLevel>=1&&direction.zone==='rear'&&s.type==='physical'?.25:0;
 const nonDirectional=raw*(1+heightBonus+seraBonus);
 const directional=raw*(1+bonus+heightBonus+seraBonus+neroBonus);
 const classFactor=s.type==='magic'&&a.heroId==='ria'&&a.classLevel>=2?1.15:1;
 const preAffinity=directional*classFactor;
 const affinity=magicAffinity(s.element,b.element);
 const fortressFactor=b.status.fortress?.7:1;
 const immunityFactor=immunityDamageFactor(b,s);
 const areaFactor=areaDamageFactor(s,center,b);
 // Keep the existing order: element -> fortress -> enemy damage cap -> immunity -> area.
 let dmg=preAffinity*affinity*fortressFactor;
 if(a.team==='enemy'&&b.team==='ally'){const caps=difficultyProfile(save.difficulty).cap,capScale=Math.max(1,stageBalance(getStage())?.atk||1);dmg=Math.min(dmg,b.maxHp*caps[a.boss?2:a.elite?1:0]*capScale);}
 dmg*=immunityFactor*areaFactor;
 const damage=Math.max(1,Math.round(dmg));
 // These are sequential, rounded contributions using the SAME damage pipeline
 // as the attack preview. They telescope to the final base estimate for allies.
 const neutralDamage=Math.max(1,Math.round(nonDirectional*classFactor*fortressFactor*immunityFactor*areaFactor));
 const directionalDamage=Math.max(1,Math.round(preAffinity*fortressFactor*immunityFactor*areaFactor));
 return {
  damage,elementMultiplier:affinity,
  elementBase:preAffinity*fortressFactor*immunityFactor*areaFactor,
  hit:clamp(.94+bonus+(s.type==='magic'?.06:0)-(b.eva||0)-(b.status.eva?.2:0)+(a.heroId==='sera'&&a.classLevel>=2?.1:0),.55,1),
  bonus,directionAngle:direction.angle,directionZone:direction.zone,directionRanged:direction.ranged,
  directionBonus:bonus,neroDirectionBonus:neroBonus,
  neutralDamage,directionalDamage,
  directionDamageGain:directionalDamage-neutralDamage,
  elementDamageGain:damage-directionalDamage
 };
}
// Rendering: instanced tiles and merged vertex-colored figures keep draw calls low.
const canvas=$('#canvas'),viewport=$('#viewport');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});}catch(e){$('#title').innerHTML='<div class="sheet"><h2>3D 화면을 열 수 없어요</h2><p>WebGL이 지원되는 Safari 또는 Chrome에서 다시 열어 주세요.</p></div>';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-8,8,8,-8,.1,120);scene.add(new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const sunlight=new THREE.DirectionalLight(0xffedc7,3);sunlight.position.set(-5,12,6);scene.add(sunlight);
let terrainGroup=new THREE.Group(),unitGroup=new THREE.Group(),highlightGroup=new THREE.Group(),fxGroup=new THREE.Group(),waterSurface=null;scene.add(terrainGroup,unitGroup,highlightGroup,fxGroup);
const models=new Map(),tileMeshes=[],labelEls=new Map(),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),clock=new THREE.Clock();let angle=Math.PI/4,targetAngle=Math.PI/4,zoom=1,pan=new THREE.Vector3(),camLook=new THREE.Vector3(),camFocus=null,lastFrame=0,animId,particles=[],impactShake=0;
function maxBattleZoom(){return battle?.size>=14?3.6:battle?.size>=12?3.1:2.6;}
const sharedMat=new THREE.MeshToonMaterial({vertexColors:true});
const geo={box:new THREE.BoxGeometry(1,1,1),ball:new THREE.SphereGeometry(1,8,6),cone:new THREE.ConeGeometry(1,1,7),cyl:new THREE.CylinderGeometry(1,1,1,7),rock:new THREE.DodecahedronGeometry(1,0),torus:new THREE.TorusGeometry(1,.16,5,12)};
const lootGroup=new THREE.Group();scene.add(lootGroup);
function gearParts(g){
 const band=g.band||0,tier=g.tier,kind=g.kind||['sword','armor','amulet'][g.slot],metal=tier===2?0xe7c16a:tier===1?0xa4c4dc:0xa1ada4,gem=tier===2?[0xffe592,0xc49eea,0x72e6d9][g.variant||0]:tier===1?[0xef8d53,0x8edaff,0x91dec5][g.variant||0]:0x8aa98e,trim=tier===2?0xffdf85:0x725c43,p=[],add=(k,pos,size,color,rot=0)=>p.push([k,pos,size,color,rot]);
 if(kind==='sword'){const blade=[.48,.83,1.23,1.43][band],width=[.10,.16,.24,.28][band],grip=[.22,.29,.36,.4][band];add('cyl',[0,grip/2+.04,0],[.07,grip,.07],0x604938);add('ball',[0,.04,0],[.09,.08,.08],trim);const root=grip+.08;add('box',[0,root,0],[.27+band*.08,.07,.13],trim);add('box',[0,root+blade/2,0],[width,blade,.07+band*.025],metal);add('cone',[0,root+blade+.1,0],[width*.7,.23,.06+band*.015],metal);if(band>0)add('box',[0,root+blade*.45,.055],[.03,blade*.7,.018],gem);if(tier>0){add('rock',[0,root,.105],[.08,.1,.05],gem);for(const x of [-1,1])add('cone',[x*(.15+band*.03),root+.04,0],[.055,.15,.07],trim,x*-.35);}if(band===3)for(const x of [-.15,.15])add('cone',[x,root+blade*.6,0],[.06,.25,.055],gem,x*.8);}
 else if(kind==='bow'){const length=[.65,.92,1.23,1.43][band],spread=.24+band*.045;add('box',[0,length/2+.12,0],[.09,.22,.09],0x67503b);for(const sign of [-1,1]){for(let i=0;i<4;i++){const q=(i+.5)/4,angle=sign*(.2+q*.7);add('cyl',[spread*Math.sin(q*Math.PI/2),length/2+.12+sign*q*length/2,0],[.045+band*.007,length/8+.025,.045],tier>0?metal:0x8d6941,angle);}add('cyl',[spread*.98,length/2+.12+sign*length/4,0],[.012,length/2,.012],0xf6e9c7);if(tier>0)add('rock',[.08,length/2+.12+sign*.22,0],[.075,.1,.075],gem);}if(band>=2)add('cone',[spread,length+.17,0],[.08,.22,.07],trim);}
 else if(kind==='staff'){const length=[.7,.96,1.24,1.44][band];add('cyl',[0,length/2+.05,0],[.05+band*.008,length,.05],tier===0?0x795e47:metal);add('ball',[0,.06,0],[.09,.09,.09],trim);add('rock',[0,length+.18,0],[.14+band*.025,.2+band*.03,.14+band*.02],gem);for(const x of [-1,1])add('cone',[x*(.14+band*.025),length+.09,0],[.07,.26,.07],trim,x*-.55);if(band>=2)add('box',[0,length*.7,0],[.36,.07,.12],trim);if(tier===2)add('rock',[0,length+.45,0],[.08,.11,.08],0xfff4b7);}
 else if(kind==='armor'){const leather=band===0?0x977551:metal,body=.46+band*.035;add('box',[0,.58,0],[body,.56+band*.06,.30],leather);add('cone',[0,.21,0],[.34+band*.03,.29,.25],leather);for(const x of [-1,1]){add('box',[x*(body/2+.12),.78,0],[.23+band*.035,.17+band*.025,.31],trim);if(band>0)add('box',[x*.36,.43,0],[.15,.32,.24],metal);if(band>=2)add('cone',[x*.38,.94,0],[.09,.23,.09],tier===2?gem:metal,x*-.3);}add('box',[0,.56,.18],[.25,.27,.05],trim);add('rock',[0,.61,.23],[.11,.14,.045],gem);if(band===1)for(let i=0;i<4;i++)add('box',[0,.34+i*.12,.16],[body*.8,.035,.04],0x737e80);if(band===3)add('cone',[0,1.06,-.03],[.16,.32,.14],gem);}
 else if(kind==='ring'){for(let i=0;i<12;i++){const a=i*Math.PI/6;add('ball',[Math.cos(a)*.22,.38+Math.sin(a)*.22,0],[.06+band*.008,.06+band*.008,.05],metal);}add('rock',[0,.68,0],[.1+band*.02,.12+band*.025,.09+band*.015],gem);if(tier>0)for(const x of [-.16,.16])add('rock',[x,.56,0],[.06,.065,.055],gem);}
 else if(kind==='boots'){for(const x of [-.16,.16]){add('box',[x,.35,0],[.24,.48+band*.09,.26],band===0?0x8c6548:metal);add('box',[x,.11,.16],[.25,.17,.5+band*.035],0x624a37);add('box',[x,.43,.16],[.22,.07,.06],trim);add('rock',[x,.43,.20],[.07,.08,.035],gem);if(band>=2)add('box',[x,.57,.17],[.19,.18,.055],metal);if(tier===2)add('cone',[x,.3,-.2],[.07,.25,.07],gem,-.8);}}
 else if(kind==='crystal'){add('cyl',[0,.14,0],[.28,.12,.28],trim);add('rock',[0,.42,0],[.20+band*.035,.32+band*.08,.20+band*.035],gem);for(const x of [-1,1]){add('cone',[x*.25,.34,0],[.075,.31+band*.07,.075],metal,x*-.45);if(band>=2)add('rock',[x*.29,.63,0],[.065,.11,.06],gem);}}
 else{add('cyl',[0,.14,0],[.25,.08,.25],trim);add('rock',[0,.37,0],[.19+band*.03,.24+band*.05,.12+band*.02],metal);add('rock',[0,.42,.12],[.10+band*.02,.14+band*.025,.04],gem);add('cyl',[0,.73,0],[.018,.3,.018],trim);for(const x of [-1,1]){add('cyl',[x*.1,.82,0],[.018,.25,.018],trim,x*-.8);if(band>=2)add('cone',[x*.27,.42,0],[.075,.24,.075],gem,x*-.4);}if(tier===2)add('cone',[0,.65,0],[.09,.23,.08],gem);}
 return p;
}
function pickupParts(v){if(v.gearId){const g=GEAR.find(g=>g.id===v.gearId);if(g)return gearParts(g);}const mp=v.consumableId?.startsWith('mp'),large=v.consumableId?.endsWith('Large'),scale=large?1.15:1;return v.type==='gold'?[['cyl',[0,.13,0],[.2,.09,.2],0xecc365],['cyl',[0,.22,0],[.16,.09,.16],0xffdf87]]:v.type==='potion'?[['cyl',[0,.2,0],[.13*scale,.28*scale,.13*scale],mp?0x8caee6:0xa9e9d0],['box',[0,.38*scale,0],[.13,.08,.13],0xe7bd70],['ball',[0,.2,.135*scale],[.05,.07,.03],mp?0xd2e0ff:0xe8fff1]]:[['box',[0,.18,0],[.42,.3,.3],0x809cca],['box',[0,.35,0],[.44,.09,.32],0xd6b675]];}
function refreshLoot(){disposeGroup(lootGroup);for(const v of battle?.pickups||[]){if(v.collected)continue;const p=toWorld(tile(v.x,v.z)),g=GEAR.find(g=>g.id===v.gearId),accent=g?gearAura(g):v.type==='potion'?v.consumableId?.startsWith('mp')?0x9fc3fa:0x9fe6b6:0xffd57a,display=new THREE.Group();display.position.copy(p);lootGroup.add(display);
 const base=new THREE.Mesh(new THREE.CylinderGeometry(.37,.39,.055,8),new THREE.MeshBasicMaterial({color:0x163d43}));base.position.y=.035;display.add(base);
 const seal=new THREE.Mesh(new THREE.RingGeometry(.26,.32,24),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:.85,side:THREE.DoubleSide,depthWrite:false}));seal.rotation.x=-Math.PI/2;seal.position.y=.069;display.add(seal);
 const item=new THREE.Mesh(bake(pickupParts(v)),sharedMat),bounds=new THREE.Box3().setFromObject(item),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3()),scale=v.gearId?.42:Math.min(.72,.59/Math.max(size.x,size.y,size.z));item.scale.setScalar(scale);item.position.set(-center.x*scale,.43-center.y*scale,-center.z*scale);display.add(item);
 if(g&&g.tier>0){const aura=new THREE.Mesh(new THREE.CylinderGeometry(.18,.48,1.25,12,1,true),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:g.tier===2?.16:.11,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending}));aura.position.y=.7;aura.userData.lootAura=true;display.add(aura);const glow=new THREE.Mesh(new THREE.RingGeometry(.33,.47,28),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:.45,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending}));glow.rotation.x=-Math.PI/2;glow.position.y=.08;display.add(glow);}const caseGeometry=new THREE.BoxGeometry(.72,.9,.72),glass=new THREE.Mesh(caseGeometry,new THREE.MeshBasicMaterial({color:0xb9e2e1,transparent:true,opacity:.13,depthWrite:false,side:THREE.DoubleSide}));glass.position.y=.45;glass.renderOrder=2;display.add(glass);
 const edges=new THREE.LineSegments(new THREE.EdgesGeometry(caseGeometry),new THREE.LineBasicMaterial({color:accent,transparent:true,opacity:.8,depthWrite:false}));edges.position.y=.45;edges.renderOrder=3;display.add(edges);
 const beacon=new THREE.Mesh(new THREE.OctahedronGeometry(.075),new THREE.MeshBasicMaterial({color:accent,transparent:true,opacity:.92,depthWrite:false}));beacon.position.y=.92;beacon.renderOrder=4;display.add(beacon);
}}
const portraitCache=new Map();
function portraitHTML(v,isItem=false){const k=JSON.stringify(isItem?['item',v.type,v.gearId,v.consumableId]:['unit',v.heroId,v.model,v.color,v.hair,v.classLevel,v.boss,v.equipped]);let src=portraitCache.get(k);if(!src){const m=isItem?new THREE.Group():figure(v);if(isItem)m.add(new THREE.Mesh(bake(pickupParts(v)),sharedMat));else{for(const child of [...m.children])if(child!==m.userData.body){m.remove(child);child.geometry.dispose();child.material.dispose();}}const ps=new THREE.Scene();ps.add(m,new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-5,12,6);ps.add(light);const bounds=new THREE.Box3().setFromObject(m),center=bounds.getCenter(new THREE.Vector3()),radius=isItem?(v.type==='weapon'?1.25:v.type==='armor'?.9:.7):bounds.getBoundingSphere(new THREE.Sphere()).radius*1.08,aspect=96/104,pc=new THREE.OrthographicCamera(-radius*aspect,radius*aspect,radius,-radius,.1,30);pc.position.copy(center).add(new THREE.Vector3(2.2,1.2,4));pc.lookAt(center);const rt=new THREE.WebGLRenderTarget(96,104,{samples:4}),pixels=new Uint8Array(96*104*4),oldTarget=renderer.getRenderTarget(),oldColor=renderer.getClearColor(new THREE.Color()),oldAlpha=renderer.getClearAlpha();rt.texture.colorSpace=THREE.SRGBColorSpace;try{renderer.setRenderTarget(rt);renderer.setClearColor(0,0);renderer.clear();renderer.render(ps,pc);renderer.readRenderTargetPixels(rt,0,0,96,104,pixels);const cv=document.createElement('canvas');cv.width=96;cv.height=104;const ctx=cv.getContext('2d'),data=ctx.createImageData(96,104);for(let y=0;y<104;y++)data.data.set(pixels.subarray((103-y)*96*4,(104-y)*96*4),y*96*4);ctx.putImageData(data,0,0);src=cv.toDataURL('image/png');if(portraitCache.size>=80)portraitCache.delete(portraitCache.keys().next().value);portraitCache.set(k,src);}finally{renderer.setRenderTarget(oldTarget);renderer.setClearColor(oldColor,oldAlpha);rt.dispose();disposeGroup(m);}}return `<img class="model-portrait" src="${src}" alt="${escapeHTML(v.name||GEAR.find(g=>g.id===v.gearId)?.name||PICKUP_NAMES[v.type]||'모델')} 실제 모습" width="48" height="52">`;}
function gearBonusText(g){return Object.entries(g.bonus).filter(([,v])=>v).map(([k,v])=>`${{maxHp:'HP',maxMp:'MP',crit:'치명타',eva:'회피',move:'MOVE'}[k]||k.toUpperCase()} +${['crit','eva'].includes(k)?`${Math.round(v*1000)/10}%포인트`:v}`).join(' · ');}
function equippedRecord(p,slot){return save.inventory.find(v=>v.uid===p.equipped?.[slot]);}
function gearModelHTML(g){return portraitHTML({name:g.name,type:['weapon','armor','accessory'][g.slot],gearId:g.id},true);}
// v0.7.4: role-aware, read-only equipment suggestions. Never equip or sell automatically.
// Compare the actual bonuses of the item that would be removed, not rarity or price.
const EQUIPMENT_ROLE_WEIGHTS={
 kyle:{atk:1.45,def:1.1,res:.75,maxHp:.16,maxMp:.05,mag:.05,move:18,crit:160,eva:100},
 bran:{atk:1,def:1.7,res:1.25,maxHp:.25,maxMp:.03,mag:.02,move:16,crit:80,eva:110},
 sera:{atk:1.6,def:.8,res:.7,maxHp:.12,maxMp:.05,mag:.05,move:18,crit:180,eva:90},
 ria:{atk:.05,def:.8,res:1.05,maxHp:.16,maxMp:.18,mag:1.6,move:18,crit:80,eva:90},
 luna:{atk:.05,def:1,res:1.15,maxHp:.2,maxMp:.25,mag:1.35,move:18,crit:65,eva:90},
 nero:{atk:1.5,def:.85,res:.8,maxHp:.15,maxMp:.08,mag:.3,move:18,crit:160,eva:110}
};
function equipmentValue(g,heroId){if(!g)return 0;const w=EQUIPMENT_ROLE_WEIGHTS[heroId]||EQUIPMENT_ROLE_WEIGHTS.kyle;return Object.entries(g.bonus).reduce((total,[stat,value])=>total+value*(w[stat]||0),0);}
// v0.7.16: equipment contribution is role-weighted, never based on raw item count.
// The denominator is a feasible SHOP-RARE reference, not unobtainable unique drops.
function equipmentReference(heroId,chapter){
 const band=gearBandForChapter(chapter),stock=GEAR.filter(g=>!g.legacy&&g.band===band&&g.tier<=1&&g.variant===0&&gearCompatible(g,heroId));
 const top=(slot)=>stock.filter(g=>g.slot===slot).sort((a,b)=>equipmentValue(b,heroId)-equipmentValue(a,heroId))[0];
 const accessories=stock.filter(g=>g.slot===2).sort((a,b)=>equipmentValue(b,heroId)-equipmentValue(a,heroId));
 return [top(0),top(1),accessories[0],accessories[1]||accessories[0]];
}
function equipmentEfficiency(p,chapter,inventory=save.inventory){
 const reference=equipmentReference(p.id,chapter),ideal=reference.reduce((s,g)=>s+equipmentValue(g,p.id),0);
 const worn=(p.equipped||[]).slice(0,4).map(uid=>GEAR.find(g=>g.id===inventory.find(r=>r.uid===uid)?.gearId));
 const value=worn.reduce((s,g)=>s+equipmentValue(g,p.id),0);
 const slots=worn.filter(Boolean).length;
 return {heroId:p.id,chapter,score:Math.round(100*value/Math.max(1,ideal)),effective:Math.min(100,Math.round(100*value/Math.max(1,ideal))),value:Math.round(value*10)/10,ideal:Math.round(ideal*10)/10,slots,reference:reference.map(g=>g?.id||null),worn:worn.map(g=>g?.id||null)};
}
function partyEquipmentEfficiency(chapter,party=save.party,inventory=save.inventory){
 const rows=HEROES.filter(h=>h.join<=chapter).map(h=>equipmentEfficiency(party.find(p=>p.id===h.id),chapter,inventory));
 const value=rows.reduce((s,r)=>s+r.value,0),ideal=rows.reduce((s,r)=>s+r.ideal,0);
 return {percent:Math.min(100,Math.round(value/Math.max(1,ideal)*100)),rawPercent:Math.round(value/Math.max(1,ideal)*100),rows,scenario:Math.round(value/Math.max(1,ideal)*100)<63?'50% 기준':Math.round(value/Math.max(1,ideal)*100)<88?'75% 기준':'100% 기준'};
}
function stageFirstClearGold(s){return Math.round((125+s.level*20)*(s.kind==='side'?1.25:isBossStage(s)?1.35:1));}
function recommendedGearSlot(p,g,preferred=null){
 if(!g||!gearCompatible(g,p.id))return null;
 if(g.slot!==2)return g.slot;
 if(preferred===2||preferred===3)return preferred;
 // Fill an empty accessory slot first. When both are occupied, compare against
 // the weaker accessory for this hero, including different accessory kinds.
 if(!p.equipped?.[2])return 2;
 if(!p.equipped?.[3])return 3;
 const a=GEAR.find(v=>v.id===equippedRecord(p,2)?.gearId),b=GEAR.find(v=>v.id===equippedRecord(p,3)?.gearId);
 return equipmentValue(a,p.id)<=equipmentValue(b,p.id)?2:3;
}
function gearUpgradeAdvice(p,g,preferred=null){
 const slot=recommendedGearSlot(p,g,preferred);
 if(slot===null)return null;
 const old=GEAR.find(v=>v.id===equippedRecord(p,slot)?.gearId);
 const gain=equipmentValue(g,p.id)-equipmentValue(old,p.id);
 // Losing a movement point is never presented as an automatic recommendation.
 if(gain<=.5||(g.bonus.move||0)<(old?.bonus.move||0))return null;
 const deltas=Object.keys({...old?.bonus,...g.bonus}).map(k=>({key:k,delta:(g.bonus[k]||0)-(old?.bonus[k]||0)})).filter(d=>d.delta>0);
 deltas.sort((a,b)=>b.delta*(EQUIPMENT_ROLE_WEIGHTS[p.id]?.[b.key]||0)-a.delta*(EQUIPMENT_ROLE_WEIGHTS[p.id]?.[a.key]||0));
 const label=deltas.slice(0,2).map(({key,delta})=>`${({maxHp:'HP',maxMp:'MP',atk:'ATK',def:'DEF',mag:'MAG',res:'RES',move:'MOVE',crit:'치명타',eva:'회피'})[key]} +${['crit','eva'].includes(key)?`${Math.round(delta*1000)/10}%p`:Math.round(delta*10)/10}`).join(' · ');
 return {slot,gain,label,kind:old?'교체 추천':'장착 추천'};
}
function equipmentBoard(p,upgrades=[]){return `<div class="equip-stage"><canvas id="equipmentHero" aria-label="${heroDef(p.id).name} 장비 착용 모습"></canvas>${[0,1,2,3].map(slot=>{const g=GEAR.find(v=>v.id===equippedRecord(p,slot)?.gearId),count=upgrades.filter(a=>a.slot===slot).length;return `<button class="equip-slot slot-${slot} ${count?'upgrade-slot':''}" data-equip-slot="${slot}"><span>${EQUIP_SLOT_NAMES[slot]}</span>${g?gearModelHTML(g):'<span class="equip-empty">＋</span>'}<strong>${g?.name||'미장착'}</strong>${count?`<span class="slot-upgrade-hint">${g?'교체':'장착'} 추천 ${count}개</span>`:''}</button>`;}).join('')}</div>`;}
const EQUIP_STATS=[['maxHp','HP'],['maxMp','MP'],['atk','ATK'],['def','DEF'],['mag','MAG'],['res','RES'],['move','MOVE'],['crit','치명타'],['eva','회피']];
function equipmentComparison(p,g,targetSlot=g.slot,uid=null){const before=heroStats(p),candidate={...p,equipped:[...p.equipped]};candidate.equipped[targetSlot]=uid||save.inventory.find(r=>r.gearId===g.id&& !save.party.some(h=>h.equipped?.includes(r.uid)))?.uid;const after=heroStats(candidate);return EQUIP_STATS.map(([key,label])=>({key,label,before:before[key]||0,after:after[key]||0,delta:(after[key]||0)-(before[key]||0)}));}
function showInventory(back=showWorld,id='kyle',slotFilter=null,preferredAccessory=null,inspectUid=null){
 if(!battle||!['player','enemy'].includes(battle.phase))playBgm('town');const p=heroRecord(id),locked=!!battle&&['player','enemy'].includes(battle.phase),used=new Map();save.party.forEach(h=>h.equipped?.forEach(uid=>{if(uid)used.set(uid,h.id);}));const listed=save.inventory.filter(r=>slotFilter===null||GEAR.find(g=>g.id===r.gearId)?.slot===slotFilter),stored=listed.filter(r=>!used.has(r.uid)),worn=listed.filter(r=>used.has(r.uid));const upgradeByUid=new Map();for(const r of stored){const g=GEAR.find(v=>v.id===r.gearId),advice=gearUpgradeAdvice(p,g);if(advice)upgradeByUid.set(r.uid,advice);}
 const sortedStored=[...stored].sort((a,b)=>Number(upgradeByUid.has(b.uid))-Number(upgradeByUid.has(a.uid))||(upgradeByUid.get(b.uid)?.gain||0)-(upgradeByUid.get(a.uid)?.gain||0));
 let chosen=null,accessorySlot=preferredAccessory;
 const format=(value,key)=>['crit','eva'].includes(key)?`${Math.round(value*1000)/10}%`:`${Math.round(value*10)/10}`;
 function row(r,isWorn){const g=GEAR.find(g=>g.id===r.gearId),owner=used.get(r.uid),advice=!isWorn?upgradeByUid.get(r.uid):null;return `<div class="gear-row ${advice?'gear-upgrade':''} ${isWorn?'worn-gear':'stored-gear'}" data-gear-row="${r.uid}"><button class="gear-image-select" data-inspect-gear="${r.uid}" aria-label="${escapeHTML(g.name)} 선택">${gearThumb(g)}</button><div class="gear-copy"><button class="gear-inspect" data-inspect-gear="${r.uid}"><b>${g.name}</b> <span class="badge rarity-badge-${g.tier}">${TIERS[g.tier]}</span>${advice?` <span class="gear-recommend-badge">★ ${advice.kind}</span>`:''}<small>${advice?`<span class="gear-recommend-reason">${advice.label} · ${EQUIP_SLOT_NAMES[advice.slot]}</span><br>`:''}${GEAR_KINDS[g.kind].label} · ${gearBonusText(g)}<br>${owner?heroDef(owner).name+' 착用 중':gearCompatible(g,id)?'선택해서 장착 전 비교':'이 캐릭터는 사용 불가'} · ${gearUsers(g)}</small></button><div class="row">${owner===id?`<button class="secondary" data-unwear="${r.uid}" ${locked?'disabled':''}>장착 해제</button>`:''}<button class="secondary" data-sell="${r.uid}" ${locked||owner?'disabled':''}>${gearSell(g).toLocaleString()} G 판매</button></div></div></div>`;}
 showSheet('장비 보관함',`<div class="chaptertabs">${HEROES.filter(h=>h.join<=unlockedChapter()).map(h=>`<button data-bag-hero="${h.id}" class="${id===h.id?'on':''}">${h.name}</button>`).join('')}</div><div class="row"><h3>${heroDef(id).name}</h3><span class="gold">${save.gold.toLocaleString()} G</span></div><h3>현재 착용 · ${heroDef(id).name}</h3>${equipmentBoard(p,[...upgradeByUid.values()])}<p class="footnote">추천 장비는 금색 테두리와 ★ 교체 추천 또는 장착 추천으로 표시됩니다. 캐릭터의 역할에 맞춰 능력치 향상을 비교하며, 다른 능력치는 감소할 수 있으니 최종 수치를 확인하세요. 아이템을 선택해 비교한 뒤 ‘장착’을 누르세요. 캐릭터 선택만으로는 장착되지 않습니다. 악세서리는 부적·반지·장화·마력석 중 두 개를 착용합니다. 각 아이템 한 개는 한 칸에만 장착할 수 있습니다.</p><div class="chaptertabs equip-filters"><button data-filter="all" class="${slotFilter===null?'on':''}">전체</button>${SLOT_NAMES.map((n,i)=>`<button data-filter="${i}" class="${slotFilter===i?'on':''}">${n}</button>`).join('')}</div><div id="equipmentCompare" class="equipment-compare"><p>보관함의 아이템을 선택하면 현재 장비와 능력치 변화를 비교합니다.</p></div><h3>보관함 · 미장착 ${stored.length}개 ${upgradeByUid.size?`<span class="gear-upgrade-count">★ 추천 ${upgradeByUid.size}개</span>`:''} <small class="footnote">전체 ${save.inventory.length}/1000</small></h3><div id="storedEquipment">${stored.length?sortedStored.map(r=>row(r,false)).join(''):'<p>미장착 장비가 없습니다. 전장에서 아이템을 찾아보세요.</p>'}</div><h3>파티가 착용한 장비 ${worn.length}개</h3>${worn.map(r=>row(r,true)).join('')}${locked?'<p class="footnote">전투 중에는 비교만 가능합니다. 장착·해제·판매는 전투 종료 후 가능합니다.</p>':''}`,()=>{
 modelPreview({...heroStats(p),heroId:id},'#equipmentHero');$('#sheet').querySelectorAll('[data-bag-hero]').forEach(b=>b.onclick=()=>showInventory(back,b.dataset.bagHero,slotFilter));$('#sheet').querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>showInventory(back,id,b.dataset.filter==='all'?null:+b.dataset.filter));$('#sheet').querySelectorAll('[data-equip-slot]').forEach(b=>b.onclick=()=>showInventory(back,id,Math.min(2,+b.dataset.equipSlot),+b.dataset.equipSlot>=2?+b.dataset.equipSlot:null,equippedRecord(p,+b.dataset.equipSlot)?.uid));
 $('#sheet').querySelectorAll('[data-inspect-gear]').forEach(b=>b.onclick=()=>{chosen=save.inventory.find(r=>r.uid===b.dataset.inspectGear);if(!chosen)return;const g=GEAR.find(g=>g.id===chosen.gearId),targetSlot=used.get(chosen.uid)===id?p.equipped.indexOf(chosen.uid):g.slot===2?recommendedGearSlot(p,g,accessorySlot)??2:g.slot,old=GEAR.find(v=>v.id===equippedRecord(p,targetSlot)?.gearId),owner=used.get(chosen.uid),compatible=gearCompatible(g,id),changes=owner?[]:equipmentComparison(p,g,targetSlot,chosen.uid);$('#sheet').querySelectorAll('[data-gear-row]').forEach(el=>el.classList.toggle('selected-gear',el.dataset.gearRow===chosen.uid));$('#equipmentCompare').innerHTML=`<b>${EQUIP_SLOT_NAMES[targetSlot]} 비교</b>${g.slot===2?`<div class="row accessory-targets"><button data-accessory-target="2" class="${targetSlot===2?'on':''}">악세서리 1</button><button data-accessory-target="3" class="${targetSlot===3?'on':''}">악세서리 2</button></div>`:''}<div class="compare-items"><div>${old?`<button class="gear-image-select" id="inspectCurrentGear" aria-label="${escapeHTML(old.name)} 착용 장비 선택">${gearThumb(old)}</button>`:'<span class="empty-compare">미장착</span>'}<small>현재 · ${old?.name||'없음'}</small></div><span>→</span><div>${gearThumb(g)}<small>선택 · ${g.name}</small></div></div><div class="gear-deltas">${changes.map(d=>`<div><span>${d.label}</span><span>${format(d.before,d.key)} → ${format(d.after,d.key)}</span><b class="${d.delta>0?'stat-up':d.delta<0?'stat-down':'stat-even'}">${d.delta>0?'+':''}${format(d.delta,d.key)}</b></div>`).join('')}</div><p class="footnote">${owner?heroDef(owner).name+'가 착용 중입니다. 먼저 해제해야 다른 캐릭터가 사용할 수 있습니다.':!compatible?'사용 가능한 캐릭터: '+gearUsers(g):'파란색은 증가, 빨간색은 감소입니다. 교체한 기존 장비는 보관함에 남습니다.'}</p><div class="compare-actions"><button class="primary" id="equipChosen" ${locked||(owner?owner!==id:!compatible)?'disabled':''}>${owner===id?'장착 해제':old?'교체 장착':'장착'}</button><button class="secondary" id="sellChosen" ${locked||owner?'disabled':''}>${gearSell(g).toLocaleString()} G 판매</button></div>`;$('#inspectCurrentGear')?.addEventListener('click',()=>{const uid=equippedRecord(p,targetSlot)?.uid;const button=[...$('#sheet').querySelectorAll('[data-inspect-gear]')].find(el=>el.dataset.inspectGear===uid);button?.click();});$('#equipChosen').onclick=()=>{if(locked||!chosen)return;const wornSlot=p.equipped.indexOf(chosen.uid);if(wornSlot>=0){const uid=chosen.uid;p.equipped[wornSlot]=null;persist();sfx();showInventory(back,id,slotFilter,wornSlot>=2?wornSlot:null,uid);toast(`${g.name} 장착 해제 · 보관함으로 이동`);return;}if(save.party.some(h=>h.equipped?.includes(chosen.uid))||!compatible)return;p.equipped[targetSlot]=chosen.uid;persist();sfx();showInventory(back,id,slotFilter);};$('#sellChosen').onclick=()=>{const sold=chosen;if(locked||!sold||!save.inventory.some(r=>r.uid===sold.uid)||save.party.some(h=>h.equipped?.includes(sold.uid)))return;const scrollTop=$('#sheet').scrollTop,price=gearSell(g);save.inventory=save.inventory.filter(r=>r.uid!==sold.uid);save.gold+=price;persist();sfx();showInventory(back,id,slotFilter,accessorySlot);$('#sheet').scrollTop=scrollTop;toast(`${g.name} 판매 · +${price.toLocaleString()} G`);};$('#equipmentCompare').querySelectorAll('[data-accessory-target]').forEach(btn=>btn.onclick=()=>{accessorySlot=+btn.dataset.accessoryTarget;b.click();});$('#equipmentCompare').scrollIntoView({block:'nearest',behavior:'smooth'});});
 $('#sheet').querySelectorAll('[data-unwear]').forEach(b=>b.onclick=()=>{if(locked)return;const r=save.inventory.find(v=>v.uid===b.dataset.unwear),g=GEAR.find(g=>g.id===r?.gearId);const wornSlot=p.equipped.indexOf(r?.uid);if(!g||wornSlot<0)return;p.equipped[wornSlot]=null;persist();sfx();showInventory(back,id,slotFilter);});
 $('#sheet').querySelectorAll('[data-sell]').forEach(b=>b.onclick=()=>{if(locked)return;const r=save.inventory.find(v=>v.uid===b.dataset.sell);if(!r||used.has(r.uid))return;const g=GEAR.find(g=>g.id===r.gearId);showSheet('장비를 판매할까요?',`${gearThumb(g)}<p>${g.name} · ${TIERS[g.tier]}<br>기준 구매가 ${gearPrice(g).toLocaleString()} G의 30%인 <b>${gearSell(g).toLocaleString()} G</b>를 받습니다.</p><button class="primary" id="confirmSell">판매</button>`,()=>{$('#confirmSell').onclick=()=>{if(!save.inventory.some(v=>v.uid===r.uid)||save.party.some(h=>h.equipped?.includes(r.uid)))return;save.inventory=save.inventory.filter(v=>v.uid!==r.uid);save.gold+=gearSell(g);persist();showInventory(back,id,slotFilter);};},{back:()=>showInventory(back,id,slotFilter)});});
 if(inspectUid){const button=[...$('#sheet').querySelectorAll('[data-inspect-gear]')].find(el=>el.dataset.inspectGear===inspectUid);button?.click();}
 },{back});
}
let previewCleanup=null;
function stopModelPreview(){previewCleanup?.();previewCleanup=null;}
// One shared WebGL renderer for all visible list thumbnails. Never one
// WebGL context per monster; release models and animation on sheet changes.
function codexSkillCard(hero,id,index){const s=SKILLS[id];return `<div class="choice"><div class="skill-summary"><div class="skill-summary-copy"><b>${s.name}${index===4?' · 궁극기':''}</b><small>Lv.${skillUnlock(id,index)} · MP ${s.mp}<br>${skillDescription(s)}<br>고저차 ±${s.heightRange??(s.range<=1?1:3)}${s.heightRange===99?' (실질적으로 높이 무시)':''}${s.status?` · 상태 확률 ${Math.round((s.chance??.5)*100)}%`:''}${s.ignore?` · 방어 무시 ${Math.round(s.ignore*100)}%`:''}${s.cleanse?' · 상태 해제':''}</small></div><figure class="skill-preview-wrap"><canvas class="skill-preview" data-skill-preview="${id}" data-skill-hero="${hero}" aria-label="${heroDef(hero).name}의 ${s.name} 사용 시연"></canvas></figure></div>${detailedSkill(id)}</div>`;}
function codexSkillPreviews(){
 const canvases=[...document.querySelectorAll('[data-skill-preview]')];if(!canvases.length)return;let r;try{r=new THREE.WebGLRenderer({alpha:true,antialias:true});}catch{return;}r.setPixelRatio(Math.min(devicePixelRatio,1.25));
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-3,3,3,-1,.1,40);camera.position.set(5,6,7);camera.lookAt(0,1,0);scene.add(new THREE.HemisphereLight(0xe9f5df,0x253e46,2.5));const light=new THREE.DirectionalLight(0xffeed0,3);light.position.set(-3,6,4);scene.add(light);
 const entries=canvases.map(canvas=>({canvas,ctx:canvas.getContext('2d'),group:null,running:false,next:0}));let frame=0,last=0,disposed=false;
 function create(e){const hid=e.canvas.dataset.skillHero,h=heroDef(hid),s=SKILLS[e.canvas.dataset.skillPreview],friendly=['heal','cleanse','buff'].includes(s.type),self=s.range===0,g=new THREE.Group(),fx=new THREE.Group(),u={...h,id:'caster',heroId:hid,team:'ally',x:0,z:0},v=friendly?{...heroDef(hid==='kyle'?'bran':'kyle'),heroId:hid==='kyle'?'bran':'kyle',team:'ally'}:{...MONSTERS[HEROES.indexOf(h)%MONSTERS.length],team:'enemy'},distance=s.type==='physical'&&s.range<=1?1:Math.min(s.range||1,3),target={x:self?0:distance,z:0,height:0};
 const world=t=>new THREE.Vector3(t.x-distance/2,0,t.z),caster=figure(u),victim=figure(v);caster.position.copy(world(u));caster.rotation.y=Math.PI/2;victim.position.copy(world(target));victim.rotation.y=-Math.PI/2;victim.visible=!self;g.add(caster,victim,fx);for(let x=-1;x<=distance+1;x++)for(let z=-1;z<=1;z++){const tile=new THREE.Mesh(new THREE.BoxGeometry(.96,.18,.96),new THREE.MeshToonMaterial({color:(x+z)%2?0xa0c68d:0x91b681}));tile.position.copy(world({x,z}));tile.position.y=-.12;g.add(tile);}const context={fx,models:new Map([['caster',caster]]),world,speed:1,cancelled:false};Object.assign(e,{group:g,u,target,s,caster,victim,context,friendly,statusEffect:null});}
 async function play(e){e.running=true;try{const c=e.context;if(c.cancelled)return;if(e.statusEffect){e.group.remove(e.statusEffect);disposeGroup(e.statusEffect);e.statusEffect=null;}if(e.s.type==='cleanse'){e.statusEffect=makeStatusVisual({id:'example'},'poison',e.group);e.statusEffect.position.copy(e.victim.position);}const a=await attackWindup(e.u,e.target,e.s,c);if(c.cancelled)return;const projectile=usesProjectile(e.u,e.s,a.melee),hasSpell=e.s.type==='magic'||['heal','cleanse'].includes(e.s.type)||(e.s.type==='physical'&&e.s.element);if(projectile)await flyProjectile(e.u,e.target,e.s,c);if(c.cancelled)return;const spell=hasSpell?spellEffect(e.target,e.s,projectile,c):null;if(spell)await spell.impact;if(c.cancelled)return;e.canvas.dataset.demoPhase='impact';if(e.s.type==='cleanse'&&e.statusEffect){e.group.remove(e.statusEffect);disposeGroup(e.statusEffect);e.statusEffect=null;}if(e.s.status){e.statusEffect=makeStatusVisual({id:'example'},e.s.status,e.group);e.statusEffect.position.copy(e.victim.position);}if(!spell)burst(e.target,0xf3da9d,e.s.area?14:20,c);if(a.melee&&!e.friendly&&e.s.type!=='taunt')await hitReaction(e.victim,a.base,e.u,false,c);await attackRecovery(a.m,a.base,a.forward,a.melee,c);if(spell)await spell.done;}finally{e.running=false;e.next=performance.now()+1100;}}
 function draw(time){if(disposed)return;frame=requestAnimationFrame(draw);if(document.hidden||time-last<60)return;const dt=Math.min(.1,(time-last)/1000);last=time;const area=document.getElementById('sheet').getBoundingClientRect();for(const e of entries){const rect=e.canvas.getBoundingClientRect();if(!e.group&&(rect.bottom<=area.top||rect.top>=area.bottom||!rect.width))continue;if(!e.group)create(e);for(const particle of [...(e.context.particles||[])]){particle.life-=dt;particle.m.position.addScaledVector(particle.v,dt);particle.v.y-=dt*2;particle.m.material.opacity=Math.max(0,particle.life);if(particle.life<=0){e.context.fx.remove(particle.m);particle.m.geometry.dispose();particle.m.material.dispose();e.context.particles.splice(e.context.particles.indexOf(particle),1);}}if(rect.bottom<=area.top||rect.top>=area.bottom||!rect.width||!rect.height)continue;if(!e.running&&time>=e.next){e.canvas.dataset.demoPhase='casting';play(e).catch(()=>{});}e.caster.userData.body.position.y=Math.sin(time*.003)*.022;e.caster.userData.body.rotation.z=e.caster.userData.attackLean||0;e.victim.userData.body.rotation.z=e.victim.userData.hitLean||0;
 if(e.statusEffect)e.statusEffect.children.forEach((m,i)=>{const home=m.userData.home,k=e.s.status||'poison';if(k==='burn'){m.position.y=home.y+Math.sin(time*.012+i)*.045;m.scale.y=.8+Math.sin(time*.017+i)*.25;}else if(k==='poison'){m.position.y=home.y+(time*.0004+i*.2)%.6;m.scale.setScalar(.7+Math.sin(time*.006+i)*.25);}else if(k==='stun')m.rotation.z=time*.005+i*.7;m.material.opacity=.62+Math.sin(time*.006+i)*.15;});const w=Math.round(rect.width),h=Math.round(rect.height),scale=r.getPixelRatio();r.setSize(w,h,false);const span=4.2;camera.left=-span*w/h/2;camera.right=span*w/h/2;camera.top=span/2;camera.bottom=-span/2;camera.updateProjectionMatrix();scene.add(e.group);r.render(scene,camera);scene.remove(e.group);if(e.canvas.width!==Math.round(w*scale)||e.canvas.height!==Math.round(h*scale)){e.canvas.width=Math.round(w*scale);e.canvas.height=Math.round(h*scale);}e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height);e.ctx.drawImage(r.domElement,0,0,e.canvas.width,e.canvas.height);}}
 frame=requestAnimationFrame(draw);previewCleanup=()=>{disposed=true;cancelAnimationFrame(frame);for(const e of entries)if(e.group){e.context.cancelled=true;disposeGroup(e.group);}r.dispose();r.forceContextLoss();};
}

// Shared front-facing idle pose: 24-second sway cycle, subtle 4.5-second breath.
function animateCodexIdle(model,elapsed){
 model.rotation.y=Math.sin(elapsed*Math.PI*2/24000)*Math.PI/6;
 const body=model.userData.body;if(!body)return;
 if(!body.userData.codexIdleBase)body.userData.codexIdleBase={scale:body.scale.clone(),y:body.position.y};
 const base=body.userData.codexIdleBase,breath=Math.sin(elapsed*Math.PI*2/4500);
 body.scale.set(base.scale.x*(1+breath*.006),base.scale.y*(1+breath*.012),base.scale.z*(1+breath*.006));
 body.position.y=base.y+breath*.008;
}
function codexListPreview(){
 const canvases=[...document.querySelectorAll('[data-codex-preview]')];if(!canvases.length)return;
 let r;try{r=new THREE.WebGLRenderer({alpha:true,antialias:true});}catch{return;}
 r.setPixelRatio(Math.min(devicePixelRatio,1.25));
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(30,1,.1,100);
 scene.add(new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));
 const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-3,6,4);scene.add(light);
 const entries=canvases.map(canvas=>({canvas,ctx:canvas.getContext('2d'),model:null}));
 let frame=0,last=0,disposed=false,startTime=null;
 function create(entry){
  const [type,id]=entry.canvas.dataset.codexPreview.split(':');let u;
  if(type==='h')u={...heroStats({id,level:1,classLevel:0,branch:0,equip:[0,0,0],equipped:[null,null,null,null]}),heroId:id,team:'ally'};
  else if(type==='m')u={...MONSTERS[Number(id)],team:'enemy'};
  else{const ch=Number(id),stage=STAGES.find(s=>s.id===(ch===9?'c9s2':`c${ch}b`));u=makeBattle(stage,stage.seed).units.find(u=>u.boss);}
  entry.model=figure(u);
  entry.aura=type==='h'?null:makeElementalAura(u,entry.model);
  const box=new THREE.Box3().setFromObject(entry.model);entry.center=box.getCenter(new THREE.Vector3());entry.size=box.getSize(new THREE.Vector3());
 }
 function draw(time){
  if(disposed)return;if(startTime===null)startTime=time;frame=requestAnimationFrame(draw);
  if(document.hidden||time-last<80)return;last=time;
  const area=document.getElementById('sheet').getBoundingClientRect();
  for(const entry of entries){
   const rect=entry.canvas.getBoundingClientRect();if(rect.bottom<=area.top||rect.top>=area.bottom||!rect.width||!rect.height)continue;
   if(!entry.model)create(entry);const m=entry.model;
   animateCodexIdle(m,time-startTime);
   if(entry.aura)animateElementalAura(entry.aura,time);
   const w=Math.round(rect.width),h=Math.round(rect.height),scale=r.getPixelRatio();
   r.setSize(w,h,false);camera.aspect=w/h;
   const distance=Math.max(entry.size.y,entry.size.x/camera.aspect,entry.size.z/camera.aspect)*.5/Math.tan(Math.PI/12)*(entry.aura?1.55:1.3);
   camera.position.copy(entry.center).add(new THREE.Vector3(0,.28,1).normalize().multiplyScalar(distance));camera.lookAt(entry.center);camera.updateProjectionMatrix();
   scene.add(m);r.render(scene,camera);scene.remove(m);
   if(entry.canvas.width!==Math.round(w*scale)||entry.canvas.height!==Math.round(h*scale)){entry.canvas.width=Math.round(w*scale);entry.canvas.height=Math.round(h*scale);}
   entry.ctx.clearRect(0,0,entry.canvas.width,entry.canvas.height);entry.ctx.drawImage(r.domElement,0,0,entry.canvas.width,entry.canvas.height);
  }
 }
 frame=requestAnimationFrame(draw);
 previewCleanup=()=>{disposed=true;cancelAnimationFrame(frame);for(const e of entries)if(e.model){const group=new THREE.Group();group.add(e.model);disposeGroup(group);}r.dispose();r.forceContextLoss();};
}
function modelPreview(u,selector='#codexModel'){const canvas=$(selector);if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});}catch{return;}r.setPixelRatio(Math.min(devicePixelRatio,1.5));const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(32,1,.1,30),m=figure({...u,team:u.team||'ally'}),aura=u.team==='enemy'?makeElementalAura(u,m):null;s.add(m,new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-3,6,4);s.add(light);if(u.boss){c.position.set(0,2.65,Math.hypot(3,5.5));c.lookAt(0,1.1,0);}else{c.position.set(0,1.8,Math.hypot(2.2,3.3));c.lookAt(0,.6,0);}let frame,startTime=null;const draw=t=>{if(startTime===null)startTime=t;frame=requestAnimationFrame(draw);if(document.hidden)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==Math.round(w*r.getPixelRatio())||canvas.height!==Math.round(h*r.getPixelRatio())){r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix();}animateCodexIdle(m,t-startTime);if(aura)animateElementalAura(aura,t);r.render(s,c);};frame=requestAnimationFrame(draw);previewCleanup=()=>{cancelAnimationFrame(frame);const group=new THREE.Group();group.add(m);disposeGroup(group);r.dispose();r.forceContextLoss();};}
const TERRAIN_INFO=[['grass','평지','이동 비용 1. 가장 기본적인 녹색 지형입니다.'],['forest','숲','이동 비용 2. 나무가 보이지만 별도의 은신·방어 보너스는 없습니다.'],['swamp','늪','이동 비용 3. 발이 묶여 같은 이동력으로 갈 수 있는 칸이 줄어듭니다.'],['water','물','진입 불가. 강을 건너려면 다리 칸을 이용해야 합니다.'],['stone','석재 지면','이동 비용 1. 돌 장식은 통행을 막지 않습니다.'],['bridge','다리','이동 비용 1. 강의 물 타일 사이를 건널 수 있는 통로입니다.'],['dirt','흙','이동 비용 1. 황토색 전장의 기본 지면입니다.'],['desert','사막','이동 비용 1. 굳은 사막 땅입니다.'],['scrub','잡초','이동 비용 2. 흙 위에 드문드문 풀이 자랍니다.'],['sand','모래','이동 비용 2. 발이 빠지는 밝은 모래 지형입니다.']];
function terrainPreview(){const canvas=$('#terrainModel');if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});}catch{return;}r.setPixelRatio(Math.min(devicePixelRatio,1.5));const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(34,1,.1,20),group=new THREE.Group();s.add(group,new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-3,6,4);s.add(light);c.position.set(1.85,2.1,2.8);c.lookAt(0,.18,0);let surface=null,frame;
 const add=(geometry,color,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color}));m.position.set(x,y,z);group.add(m);return m;};
 const select=type=>{disposeGroup(group);surface=null;const data=TERRAIN_INFO.find(v=>v[0]===type)||TERRAIN_INFO[0],colors={grass:0x85b08b,forest:0x669a7b,swamp:0x677f77,water:0x20576a,stone:0x9bafa7,bridge:0xbda67e,dirt:0xb09269,desert:0xd2b274,scrub:0xa19a67,sand:0xe0c58c};add(new THREE.BoxGeometry(.98,.56,.98),colors[data[0]],0,type==='water'?-.36:-.28);if(type==='water'){surface=makeWaterSurface([{x:0,y:0,z:0}]);group.add(surface);}if(type==='forest'){group.add(new THREE.Mesh(bake([['cyl',[-.2,.27,-.14],[.075,.55,.075],0x756c4d],['cone',[-.2,.72,-.14],[.37,.77,.37],0x3a6f5d],['cone',[-.2,1,-.14],[.25,.53,.25],0x5d9270]]),sharedMat));}if(type==='swamp'){add(new THREE.CylinderGeometry(.32,.32,.018,16),0x476d68,-.08,.018,.04);for(const [x,z] of [[-.31,-.26],[.25,-.1],[.32,.28]])add(new THREE.CylinderGeometry(.012,.012,.28,5),0x9ebc7b,x,.16,z);}if(type==='scrub')for(const [x,z] of [[-.22,-.14],[.2,.18]])add(new THREE.ConeGeometry(.09,.24,5),0x84935f,x,.12,z);if(type==='sand'||type==='desert')for(const [x,z] of [[-.24,.16],[.22,-.19]])add(new THREE.DodecahedronGeometry(.14,0),type==='sand'?0xf0d8a3:0xc7a572,x,.025,z).scale.y=.2;if(type==='stone')for(const [x,z] of [[-.24,-.22],[.24,.15]])add(new THREE.DodecahedronGeometry(.12,0),0x738d89,x,.12,z);if(type==='bridge')for(const z of [-.31,0,.31])add(new THREE.BoxGeometry(.86,.045,.25),0xdbc39a,0,.05,z);$('#terrainName').textContent=data[1];$('#terrainDescription').textContent=data[2];$('#sheet').querySelectorAll('[data-terrain]').forEach(b=>{const on=b.dataset.terrain===data[0];b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on));});};
 $('#sheet').querySelectorAll('[data-terrain]').forEach(b=>b.onclick=()=>select(b.dataset.terrain));select('grass');const draw=t=>{frame=requestAnimationFrame(draw);if(document.hidden)return;const w=canvas.clientWidth,h=canvas.clientHeight;if(canvas.width!==Math.round(w*r.getPixelRatio())||canvas.height!==Math.round(h*r.getPixelRatio())){r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix();}group.rotation.y=Math.sin(t*.00027)*.2;if(surface)surface.material.uniforms.uTime.value=t*.001;r.render(s,c);};frame=requestAnimationFrame(draw);previewCleanup=()=>{cancelAnimationFrame(frame);disposeGroup(group);r.dispose();r.forceContextLoss();};}
function codexStats(u){return `<div class="statsgrid">${[['HP',u.maxHp??u.hp],['MP',u.maxMp??u.mp??100],['ATK',u.atk],['DEF',u.def],['MAG',u.mag],['RES',u.res],['SPD',u.spd??10],['MOVE',u.move],['JUMP',u.jump??2],['CRIT',`${Math.round((u.crit??.05)*1000)/10}%`],['EVA',`${Math.round((u.eva??.02)*100)}%`],['사거리',u.range]].map(([k,v])=>`<div>${k}<b>${typeof v==='number'?Math.round(v):v}</b></div>`).join('')}</div>`;}
const SKILL_NOTES={
flame:'검에 불꽃을 둘러 인접한 적 한 명을 베는 물리 공격입니다. 화상에 걸린 적은 자기 페이즈가 시작될 때 최대 HP의 5%를 잃습니다. 마법 공격력이 아니라 물리 공격력을 사용합니다.',
break:'적 한 명을 베고 방어력을 낮춥니다. 명중하면 피해 계산에 쓰는 방어 수치가 30% 감소합니다. 현재 이 약화는 물리 공격의 DEF와 마법 공격의 RES 계산에 모두 적용되므로, 다른 동료보다 먼저 사용하면 후속 공격이 강해집니다.',
windblade:'검기를 날려 지정 위치 주변의 적들을 공격합니다. 원거리에서 쓰지만 물리 공격력을 사용하는 기술입니다. 붙어 있는 적을 공격하거나 근접하기 어려운 지형 너머를 노릴 때 좋습니다.',
valor:'자신과 주변 아군의 공격을 강화합니다. ATK와 MAG를 사용하는 피해 계산 모두 25% 강해집니다. 직접 피해를 주거나 HP를 회복하지 않으므로, 여러 아군이 아직 행동하지 않았을 때 먼저 사용하세요.',
arcaslash:'빛 속성의 강력한 범위 참격입니다. 물리 공격력을 사용하며 사거리와 범위 내 높낮이 제한을 사실상 무시합니다. 암흑 속성 적을 공격하거나 높은 지형의 적을 마무리하기 좋습니다.',
fire:'하늘에서 불덩이가 떨어져 지정 위치와 주변 적에게 화염 마법 피해를 줍니다. 화상에 걸린 대상은 자기 페이즈 시작마다 최대 HP의 5%를 잃습니다. 높이 제한이 엄격하므로 서로 다른 높이의 적이 모두 맞는지는 예상 대상 목록을 확인하세요.',
ice:'얼음 결정을 생성해 주변 적에게 냉기 마법 피해를 줍니다. 빙결은 이동력을 2 낮춥니다. 행동 자체를 막는 효과는 아니므로 사거리 안의 적은 여전히 공격할 수 있습니다. 빠른 적의 접근을 늦추는 데 적합합니다.',
thunder:'적 한 명에게 낙뢰를 떨어뜨립니다. 높이 차를 사실상 무시하는 장거리 번개 마법입니다. 기절에 걸리면 대상은 다음 자기 페이즈에서 이동과 행동을 하지 못합니다. 위험한 적 한 명을 집중 공격하세요.',
storm:'지정 칸을 중심으로 넓은 정사각형 영역에 불꽃을 떨어뜨립니다. 범위 2는 최대 5×5칸을 뜻하며, 높이 조건을 만족하는 적만 맞습니다. 파이어와 달리 별도의 화상 부여 효과는 없습니다.',
meteor:'거대한 화염 운석으로 넓은 영역의 적을 공격합니다. 높은 위력과 넓은 범위, 사실상 높이 제한이 없는 것이 장점입니다. MP 소모가 크므로 적이 모인 때를 노리세요. 이 기술은 별도의 화상을 부여하지 않습니다.',
bash:'방패로 인접한 적 한 명을 공격합니다. 기절에 걸리면 다음 자기 페이즈의 이동과 행동을 잃습니다. 강한 적의 다음 공격을 끊는 데 쓰지만, 명중과 기절 확률을 모두 통과해야 합니다.',
taunt:'브란 주변의 적들에게 도발을 겁니다. 도발된 적은 AI가 공격 대상을 고를 때 브란을 매우 우선적으로 고려합니다. 강제 이동이나 무조건적인 공격 명령은 아니며, 브란에게 닿지 못하거나 보스의 고정 패턴 중이면 다른 행동을 할 수 있습니다.',
guard:'자신과 주변 아군의 피해 계산에 쓰는 방어 수치를 35% 높입니다. 현재 물리 공격의 DEF와 마법 공격의 RES 계산에 모두 적용됩니다. 적의 근접 공격이나 사격을 받아야 하는 아군들을 모아 강화하세요.',
quake:'가까운 위치에 충격을 일으켜 주변 적에게 물리 피해를 줍니다. 지면을 흔드는 연출과 이름을 갖지만 실제 공격 계산은 물리 방식이며, 별도의 기절이나 이동 방해는 없습니다.',
fortress:'자신을 중심으로 넓은 범위의 아군에게 철벽을 부여합니다. 피해 계산에 쓰는 방어 수치가 80% 증가하며, 받는 물리·마법 피해가 추가로 30% 줄어듭니다. 여러 아군이 큰 공격을 받을 상황에서 사용하세요.',
pierce:'최소 거리 2칸부터 쓸 수 있는 장거리 물리 사격입니다. 피해 계산에 쓰는 대상의 물리 방어력 중 50%를 무시합니다. 갑옷이 두꺼운 적에게 유리하지만 바로 옆의 적은 노릴 수 없습니다.',
poison:'적 한 명에게 물리 피해를 주고 독을 부여합니다. 일반 적에게 명중하면 독이 적용되며, 독은 대상의 자기 페이즈 시작마다 최대 HP의 7%를 깎습니다. 독 피해는 최대 HP 기준이므로 체력이 많은 적을 꾸준히 압박하기 좋습니다.',
volley:'지정 위치 주변 적에게 화살을 쏟아붓는 물리 범위 사격입니다. 대상의 높이를 사실상 무시합니다. 붙어 있는 적을 공격하기 좋으며 독·빙결 등 추가 상태는 부여하지 않습니다.',
windstep:'자신과 주변 아군의 이동력을 2 높입니다. SPD나 행동 순서를 바꾸는 효과가 아닙니다. 아직 이동하지 않은 동료에게 먼저 걸어 주면 이번 페이즈에도 더 멀리 이동할 수 있습니다.',
hawk:'먼 거리의 적 한 명을 공격하는 강력한 물리 사격입니다. 물리 방어력의 70%를 무시하고 높이 제한도 사실상 없습니다. 위험한 마법 적이나 단단한 적을 멀리서 마무리할 때 좋습니다.',
heal:'아군 한 명의 HP를 회복합니다. MP 9를 소모하며 기본 회복량은 마법 공격력의 180%에 15를 더한 값이며 최대 HP를 넘지 않습니다. 자신에게도 사용할 수 있고, 실제 회복이 발생하면 경험치를 얻습니다. 전투 불능인 아군을 부활시키지는 못합니다.',
purify:'지정 위치와 주변 아군의 해로운 상태 효과를 해제합니다. 독·화상·빙결·침묵·수면·기절·방어 약화·도발을 제거하며 공격 강화·방어 강화 같은 이로운 효과는 유지합니다. HP 자체를 회복하지 않으며 전투 불능인 아군은 대상이 아닙니다.',
blessing:'지정 위치 주변 아군의 공격을 강화합니다. 물리 공격력과 마법 공격력으로 계산하는 피해가 모두 25% 증가합니다. HP 회복 효과는 없습니다. 카일의 용기의 맹세와 같은 강화이므로 둘을 겹쳐 사용해도 50%가 되지 않습니다.',
holy:'빛 속성의 범위 마법 공격입니다. 지정 위치와 주변의 적에게 피해를 주며 암흑 속성 대상에게 유리합니다. 이름과 달리 아군 HP를 회복하거나 상태를 해제하는 기술은 아닙니다.',
miracle:'넓은 범위의 아군 HP를 회복하고 해로운 상태 효과를 함께 해제합니다. 기본 회복량은 마법 공격력의 250%에 15를 더한 값입니다. 공격 강화·방어 강화 같은 이로운 효과는 유지하며 전투 불능인 아군을 부활시키지는 않습니다.',
backstab:'인접한 적 한 명을 찌르는 물리 공격입니다. 물리 방어력의 30%를 무시합니다. 후방에 있어야만 사용할 수 있는 것은 아니지만, 후방 공격 보너스와 네로의 전직 패시브를 함께 활용하면 더 강해집니다.',
sleep:'짧은 거리의 적에게 물리 피해를 주고 수면을 노립니다. 수면 중에는 자기 페이즈의 이동과 행동을 할 수 없습니다. 피해를 받으면 잠에서 깨므로, 재우려는 적을 동료가 곧바로 공격하지 않도록 순서를 정하세요.',
silence:'적 한 명에게 암흑 속성 물리 피해를 주고 침묵을 부여합니다. 일반 적에게 명중하면 침묵이 적용됩니다. 아군이 침묵 상태라면 비물리 스킬을 사용할 수 없고, 적 마법 유닛은 기본 공격을 근접 물리 공격으로 바꿉니다.',
shadowstep:'자신에게 회피 강화를 걸어 적 공격의 명중 확률을 20%포인트 낮춥니다. 완전 무적이나 보장된 회피는 아닙니다. 전진 후 적의 공격을 받아야 할 때 사용하며, 사용한 네로의 행동은 종료됩니다.',
eclipse:'암흑 속성의 범위 물리 공격입니다. 주변 적에게 높은 피해를 주고 독을 부여합니다. 공격력 ATK를 사용하며, 독은 최대 HP의 7%를 자기 페이즈 시작마다 깎습니다. 높이 제한을 사실상 무시합니다.'
};
function skillExtraNote(s){return [s.debuff==='slow'?'적 이동력 −2 (빙결 3턴)':s.debuff==='stun'?'적의 다음 행동을 봉쇄':'',s.knockback?'명중한 적을 한 칸 밀어냅니다':'',s.buff==='counter'?'3턴 동안 인접한 적의 공격에 화염 반격':'',s.cleanse?'범위 안 아군의 상태 이상도 제거':'',s.range>=7?'긴 사거리의 속성 화살':''].filter(Boolean).join(' · ')||'속성에 따라 상성 배율이 적용됩니다.';}
function detailedSkill(id){const s=SKILLS[id],friendly=['heal','cleanse','buff'].includes(s.type),area=s.area||0,height=s.heightRange??(s.range<=1?1:3),areaHeight=s.heightRange??2;let extra=[];if(s.status)extra.push(`명중한 일반 적에게 ${Math.round((s.chance??.5)*100)}% 확률로 ${STATUS[s.status]} 부여. 보스는 이 상태 부여에 면역입니다.`);if(s.status||s.buff||s.debuff||s.type==='taunt')extra.push(`${s.status==='stun'?'기절은 다음 자기 페이즈 한 번을 건너뜁니다.':'효과는 즉시 적용되며 남은 횟수 3으로 시작합니다. 대상 팀의 다음 페이즈 시작마다 3→2→1→해제됩니다. 일반적인 아군 강화는 시전한 턴과 이후 두 아군 턴에 적용됩니다. 이미 행동한 아군에게 늦게 걸어도 같은 시점에 줄어듭니다. 같은 효과를 다시 걸면 중첩되지 않고 남은 횟수가 3으로 갱신됩니다.'}`);const shape=area?s.shape==='square'?`중심에서 가로·세로 각각 ${area}칸, 최대 ${area*2+1}×${area*2+1}칸`:`중심에서 상하좌우 이동 거리 ${area}칸 이내${area===1?' (중심과 인접 4칸의 십자 범위)':''}`:'선택한 한 칸';return `<div class="skill-detail" data-skill-detail="${id}"><p>${SKILL_NOTES[id]||skillExtraNote(s)}</p>${s.type==='physical'&&Object.hasOwn(ELEMENT,s.element)?'<p><b>유령 계열 공략</b><br>속성이 붙은 물리 공격으로, 물리 이뮤니티 대상에게 피해 60%를 적용합니다 (40% 감소). ATK·DEF로 계산하며 속성 상성은 별도로 적용됩니다.</p>':''}<p><b>대상·범위</b><br>${friendly?'살아 있는 아군만 적용 (자신 포함)':'적군만 적용'} · ${shape}. ${s.range===0?'자신의 위치가 중심입니다.':`중심 위치는 최대 ${s.range}칸 거리${s.minRange?`, 최소 ${s.minRange}칸`:''}에서 선택합니다.`}<br>${height===99?'시전 위치와 중심 사이 높이 제한 없음':`시전 위치와 중심의 높이 차 ±${height}까지`}${area?` · 범위 대상은 중심과 높이 차 ${areaHeight===99?'제한 없음':'±'+areaHeight+'까지'}`:''}.</p>${s.type==='magic'&&area?'<p><b>범위별 피해</b><br>지정한 중심 100%, 중심에서 1칸 거리 80%, 2칸 이상은 모두 60%입니다. 십자·마름모 범위는 상하좌우 이동 거리, 사각 범위는 가로·세로 중 더 먼 거리로 판정합니다. 상태 이상 확률은 거리로 감소하지 않습니다.</p>':''}${area&&['physical','magic'].includes(s.type)?'<p><b>광역 치명타</b><br>지정한 정중앙 칸의 적에게만 시전자의 치명타 확률을 적용합니다. 외곽 적은 치명타가 발생하지 않습니다. 중심이 빈 칸이면 치명타 없이 공격합니다. 외곽의 기존 피해 계산과 상태 이상 확률은 유지합니다.</p>':''}${HEROES.some(h=>isPhysicalHero(h)&&h.skills.includes(id))?'<p class="footnote">물리 캐릭터의 일반 스킬은 전직마다 MP소모가2씩 늘어납니다. 궁극기는 위 기본MP를 유지합니다.</p>':''}${extra.length?`<p><b>추가 효과</b><br>${extra.join('<br>')}</p>`:''}<p class="footnote">MP ${s.mp} 소모 · 이동 전후 사용 가능. 제자리에서 사용했다면 남은 이동을 할 수 있습니다. ${friendly||s.type==='taunt'?'피해·명중·치명타 계산은 하지 않습니다.':'피해 예상은 치명타 전 기준이며 실제 피해는 ±5%와 치명타에 따라 달라집니다.'}</p></div>`;}
const HERO_GUIDES={kyle:'최전선에서 적을 붙잡고 카일 전투 불능을 피하는 것이 우선입니다. 첫 전직은 최대 HP +10%, 두 번째 전직은 치명타 확률 +5%포인트입니다. 전직·장비를 합쳐 최종 치명타 확률은 최대 20%입니다. 용병 계열을 선택하면 전직 이후 ATK +5, DEF −3의 별도 보정이 붙습니다.',ria:'브란이나 카일 뒤에서 적의 밀집 지점을 공격하세요. 첫 전직부터 자기 페이즈 시작 시 기본 MP 회복 3에 4가 추가되고, 두 번째 전직부터 마법 피해가 15% 증가합니다. 파이어 스톰의 범위와 썬더의 높이 무시를 상황에 따라 구분하세요.',bran:'이동력은 낮지만 물리 방어와 HP가 높습니다. 첫 전직은 DEF +15%, 두 번째 전직은 최대 HP +20%입니다. 도발은 적을 순간이동시키거나 강제로 행동시키지 않으므로 적이 브란에게 닿을 경로를 함께 확인하세요.',sera:'기본 활 공격은 거리 2~4칸이며 바로 옆의 적은 공격하지 못합니다. 첫 전직부터 고지대 공격 피해가 추가로 15% 증가하고, 두 번째 전직부터 명중 보정 +10%포인트입니다. 기동력이 높은 적이 접근하기 전에 거리를 유지하세요.',luna:'힐과 정화는 역할이 다릅니다. 힐은 HP를 채우고 정화는 상태를 지웁니다. 첫 전직은 계산된 회복량 +15%, 두 번째 전직은 자기 페이즈 시작 시 기본 MP 회복 3에 5 추가입니다. 생명의 기적도 부활 기술은 아닙니다.',nero:'이동력 6과 JUMP 2로 후방을 노립니다. 첫 전직부터 후방 공격 시 피해가 추가로 25% 증가하고, 두 번째 전직은 회피 확률 +10%포인트입니다. 수면을 걸 적은 마지막에 공격하고, 침묵으로 마법 적의 공격 방식을 제한하세요.'};
const ELEMENT_WEAKNESS={fire:'water',water:'wind',wind:'fire'};
const ELEMENT_RESISTANCE={fire:'wind',water:'fire',wind:'water'};
function elementDetails(element){const kind=elementFamily(element);if(kind==='light')return `약점: ${ELEMENT.dark} 125% · 암흑에게도 125% 약점 피해`;if(kind==='dark')return `약점: ${ELEMENT.light} 125% · 빛에게도 125% 약점 피해`;return kind&&ELEMENT_WEAKNESS[kind]?`약점: ${ELEMENT[ELEMENT_WEAKNESS[kind]]} 125% · 내성: ${ELEMENT[ELEMENT_RESISTANCE[kind]]} 75%`:'약점·내성 없음 (속성 피해 100%)';}
function monsterAdvice(element){const kind=elementFamily(element);return {fire:'리아 프로스트 · 세라 얼음 화살 · 카일 얼음 베기',water:'리아 바람의 창 · 카일 폭풍 베기 · 세라 질풍 화살',wind:'리아 파이어 · 카일 화염검 · 세라 화염 화살',dark:'루나 홀리 · 카일 아르카 참격',light:'네로 침묵의 표식 · 월식'}[kind]||'DEF·RES를 확인하고 적절한 공격을 선택하세요';}
const MONSTER_GUIDES=MONSTERS.map(m=>`${m.magic?'마법':'물리'} 공격형 · MOVE ${m.move}, 사거리 ${m.minRange||1}~${m.range}. ${ELEMENT[m.element]||'무속성'} · ${elementDetails(m.element)}. ${m.immunity==='magic'?'마법 피해 35% 적용 (65% 감소). 물리 스킬이 효과적입니다.':m.immunity==='physical'?'무속성 물리 피해 35% 적용 (65% 감소), 속성 물리 피해 60% 적용 (40% 감소). 마법 또는 속성 물리 스킬을 활용하세요.':'물리·마법 피해 정상 적용.'} ${m.status?`기본 공격에 ${STATUS[m.status]} 부여 가능.`:''} 추천: ${monsterAdvice(m.element)}.`);
const HERO_ROLES=['생존력이 높은 근접 검사. 화염검과 방어 약화로 전선을 엽니다.','아르카의 열쇠인 기억을 잃은 소녀. 다양한 속성과 광역 마법을 사용합니다.','도발과 방어 강화로 동료를 보호하는 중갑 전사.','고지대와 사거리를 활용하는 궁수. 근접한 대상에는 기본 활 공격이 닿지 않습니다.','회복·정화·빛 마법을 사용하는 사제. 회복으로도 경험치를 얻습니다.','빠른 이동과 후방 공격, 수면·침묵을 활용하는 도적.'];
function combatGuideHTML(){const section=(title,body,open=false)=>`<details class="codex-card combat-guide" ${open?'open':''}><summary>${title}</summary>${body}</details>`,table=(heads,rows)=>`<table class="combat-table"><thead><tr>${heads.map(v=>`<th>${v}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
return `<p>현재 게임의 실제 계산 규칙입니다. 물리/마법 분류와 속성은 서로 다른 정보입니다. 적을 탭해 DEF·RES·속성·공격 방식과 이동 범위를 확인하고, 행동을 확정하기 전에 예상 HP 변화를 비교하세요.</p>`+
section('1. 물리·마법 피해와 계산 순서',`<p><b>물리:</b> ATK × 스킬 위력 − 대상 DEF × 0.5<br><b>마법:</b> MAG × 스킬 위력 − 대상 RES × 0.5</p><p>기본 공격 위력은 카일·브란·네로110%, 그 외100%입니다. 근접 세 캐릭터는 DEF +3 보정도 받습니다. 화염검은 불꽃을 두른 <b>물리 공격</b>이므로 ATK와 DEF를 사용합니다. 리아의 기본 공격도 ATK/DEF를 사용하고, 파이어는 MAG/RES를 사용합니다. 속성 그래픽만 보고 공격 종류를 판단하지 마세요.</p><p>계산 순서: 공격/방어 강화·약화 → 위력 및 방어 무시 → 방어 차감(기본값 최소 1) → 물리 방향·높이·직업 보너스 → 마법 패시브·속성 상성 → 철벽 피해 감소 → 적 공격 상한 → 이뮤니티 → 공격용 광역마법의 중심 거리 감쇠 → 최소 1·반올림으로 예상 피해 확정 → 명중 판정 → ±5% 변동·치명타 1.5배 → 최종 반올림 및 최소 1 피해.</p><p>미스는 HP 피해가 없습니다. 실제 HP는 0 아래로 내려가지 않습니다. 예상 피해/HP 비교는 치명타와 무작위 오차를 제외한 기준이며, 타격 시 표시되는 피해 숫자와 대상의 체력바·현재 HP에서 실제 결과를 확인할 수 있습니다.</p>`,true)+
section('광역마법의 중심·외곽 피해',table(['중심에서 거리','피해 비율'],[['정중앙','100%'],['1칸','80%'],['2칸 이상','60%']])+`<p>공격용 광역마법에만 적용합니다. 모든 기존 피해 보정 후 반올림 전에 이 비율을 곱합니다. 십자·마름모 범위는 상하좌우 이동 거리, 사각 범위는 가로·세로 중 더 먼 거리를 사용하며, 높이 차는 거리 감쇠와 별도의 규칙입니다. 명중과 상태 이상 확률은 그대로이며 치명타는 정중앙 칸에만 적용합니다. 단일 대상 마법과 물리 광역 스킬, 회복·정화·강화에는 적용하지 않습니다.</p><p><b>공격 팁:</b> 가장 위험한 적을 중심에 놓으면 최대 피해를 줍니다. 여러 적을 함께 맞힐 때는 각 대상의 예상 피해를 비교하세요. 중심 지정 사거리 밖의 적을 범위 끝에 걸치게 공격하면 피해가 줄어듭니다.</p>`)+
section('2. 정면·측면·후면과 마지막 방향',table(['공격 위치','물리 피해 보너스','명중 보정'],[['정면','+0%','+0%포인트'],['측면','+10%','+10%포인트'],['후면','+20%','+20%포인트']])+`<p>공격받는 유닛이 바라보는 방향을 기준으로 계산합니다. 기본 물리 공격과 물리 스킬에 적용되며, 마법에는 방향 보너스가 없습니다. 대각선 공격은 좌우/앞뒤 거리 중 더 큰 축으로 판정하고, 거리가 같으면 앞뒤 축을 사용합니다.</p><p>방어 차감 후 40 피해라면 같은 높이의 정면 40, 측면 44, 후면 48이 기준입니다. 높이 및 아래 직업 보너스는 방향 보너스에 더해 적용합니다. 첫 전직 네로의 후면 공격은 후면 +20%에 암습 +25%가 더해져 같은 높이에서 총 +45%입니다.</p><p><b>방어 팁:</b> 공격·스킬과 남은 이동을 마친 뒤 대기를 누르면 네 화살표로 마지막 방향을 한 번 정합니다. 현재 방향 유지도 가능합니다. 방향 확정은 추가 행동·이동을 소모하지 않습니다. 공격 직후와 이동 직후에는 방향 선택을 띄우지 않습니다. 여러 적에게 포위되면 가장 위험한 적을 정면으로 두세요.</p>`,true)+
section('3. DEF·RES·강화·방어 무시',table(['능력치','적용 대상','기본 감소량'],[['DEF','물리 공격','DEF의 50% 차감'],['RES','마법 공격','RES의 50% 차감']])+`<p>DEF 20은 기본 물리 피해에서 10을, RES 20은 기본 마법 피해에서 10을 차감합니다. 전체 수치를 빼는 방식이 아닙니다. 방향·높이·속성 등의 배율은 차감 후 적용하므로 최종 피해 감소량도 후속 배율에 영향을 받습니다.</p><p>RES는 불·물·바람뿐 아니라 번개·빛·암흑 등 <b>모든 마법</b>에 적용되는 공통 저항력입니다. RES가 높다고 완전 면역이 되지는 않습니다. 별도 이뮤니티를 가진 골렘 계열은 마법 피해의 35%를 받습니다 (65% 감소). 유령 계열은 무속성 물리 피해의 35%를 받지만, 화염검처럼 속성이 붙은 물리 공격은 60%를 받습니다 (40% 감소). 속성 물리 공격도 ATK와 DEF로 계산하며 마법 공격으로 바뀌지는 않습니다. 불·물·냉기·바람·번개·빛·암흑 속성 물리 공격에 같은 예외를 적용하며 일반·정예·보스 모두 동일합니다. 최소 피해 1과 반올림 때문에 작은 피해에서 비율이 달라질 수 있습니다.</p><p>공격↑는 공격에 사용하는 ATK 또는 MAG를 1.25배로, 방어↑는 피해 방어에 사용하는 DEF 또는 RES를 1.35배로 계산합니다. 방어↓는 해당 방어 수치를 0.7배로 만듭니다. 철벽은 해당 방어 수치를 1.8배로 만들고, 이후 피해도 0.7배로 줄입니다. 일반 방어 강화와 철벽은 동시에 적용될 수 있습니다. 직업·장비로 오른 능력치는 그 다음 전투 계산의 기반입니다.</p><p>방어 무시는 대상 방어 수치 자체를 영구 삭제하는 효과가 아닙니다. 그 공격에서 차감할 DEF ×0.5 부분에만 적용됩니다. DEF 20 대상에게 방어 무시 50%라면 10 대신 5만 차감합니다. 관통 사격 50%, 매의 심판 70%, 그림자 찌르기 30%입니다.</p><p><b>공격 팁:</b> DEF가 높고 RES가 낮은 적은 마법으로, RES가 높고 DEF가 낮은 적은 물리로 공격하세요. 골렘에는 물리, 유령에는 마법을 우선 사용하세요.</p>`)+
section('이뮤니티 공략',table(['대상 특성','받는 공격','피해 적용'],[['유령 계열 · 물리 이뮤니티','무속성 물리','35% 적용 · 65% 감소'],['유령 계열 · 물리 이뮤니티','화염검 등 속성 물리','60% 적용 · 40% 감소'],['유령 계열 · 물리 이뮤니티','마법','이뮤니티 감소 없음'],['골렘 계열 · 마법 이뮤니티','마법','35% 적용 · 65% 감소'],['골렘 계열 · 마법 이뮤니티','무속성·속성 물리','이뮤니티 감소 없음']])+`<p>이뮤니티 적용 직전 피해가 100이라면 각각 35 또는 60이 됩니다. 최종 피해는 속성 상성·지형·방어·범위·반올림에 따라 달라집니다. 최소 피해는 1입니다. 화염검의 화상 효과와 공격 자체의 물리 피해는 별개입니다. 아이템 이름이나 공격 이펙트가 아니라 실제 공격에 설정된 속성과 물리/마법 타입으로 판정합니다.</p><p><b>공격 팁:</b> 유령에게는 마법을 우선 사용하고, 물리 캐릭터는 화염검·화염 화살·냉기 화살 등 속성 물리 기술을 활용하세요. 골렘에게는 물리 공격과 물리 스킬이 유리합니다. 마법도 이제 35% 피해가 들어가므로 필요할 때 광역 공격에 함께 포함할 수 있습니다.</p>`)+
section('이로운 상태 표시와 지속 시간',`<p>강화를 받은 캐릭터의 체력바 바로 위에는 공격 ⚔, 방어 🛡, 이동 👟, 회피 💨, 철벽 🏰, 화염 반격 🔥🛡 아이콘만 작게 표시됩니다. 테두리·배경·화살표·숫자는 표시하지 않습니다. 남은 횟수와 자세한 효과는 캐릭터를 선택한 뒤 하단 상태창에서 확인하세요. 선택한 캐릭터의 하단에는 현재 적용된 ATK·DEF·MOVE와 강화 이름·남은 턴만 간단히 표시됩니다. 능력치 계산표는 전투 화면의 공간 확보를 위해 생략합니다. MOVE는 한 턴의 이동력이며 SPD나 애니메이션 속도가 아닙니다.</p><p>공격 강화는 ATK·MAG +25%, 방어 강화는 DEF·RES +35%, 이동 강화는 MOVE +2, 회피 강화는 회피 +20%포인트입니다. 철벽은 DEF·RES ×1.8과 받은 피해 추가 30% 감소이며 일반 방어 강화와 곱해집니다. 화염 반격은 인접한 적에게 받은 공격 피해의 25%를 돌려줍니다.</p><p>모두 즉시 적용되고 남은 횟수 3으로 시작합니다. 대상 팀의 다음 턴 시작마다 3→2→1→해제되므로, 아군이 자기 턴에 시전하면 시전 턴과 이후 두 아군 턴에 적용됩니다. 같은 효과를 다시 걸면 중첩되지 않고 남은 횟수가 3으로 갱신됩니다. 서로 다른 강화는 함께 유지할 수 있습니다. 전투 불능 또는 전투 종료 시 표시가 사라집니다.</p>`)+
section('4. 명중·회피·치명타',`<p><b>기본 명중:</b> 물리 94%, 마법 100%에서 대상 EVA를 빼고, 물리 방향 보정과 직업 보정을 더합니다. 회피↑ 상태의 대상은 추가로 20%포인트를 뺍니다. 최종 명중은 최소 55%, 최대 100%입니다. 두 번째 전직 세라는 명중 +10%포인트입니다. 아군과 적 모두 같은 명중 규칙을 사용합니다.</p><p>EVA 4% 대상에게 같은 높이의 물리 정면은 90%, 측면은 100%, 후면도 상한 때문에 100%입니다. 같은 대상에 대한 마법은 96%이므로 마법도 미스가 날 수 있습니다. 높이·SPD는 명중률을 직접 올리지 않습니다.</p><p><b>치명타 피해:</b> 명중한 공격의 피해 ×1.5, 즉 +50%입니다. 공격자의 CRIT 확률로 판정하며 미스에는 치명타가 없습니다. 같은 높이·정면에서 예상 피해 40이면 ±5% 오차를 포함한 일반 피해 38~42, 치명타 피해 57~63입니다.</p>`+table(['기본 Lv.1','CRIT'],HEROES.map(h=>[h.name,Math.round(h.crit*100)+'%']))+`<p>일반 적·정예·보스의 통상 공격 기본 CRIT는 5%, 보스가 소환한 적은 2%입니다. 일반 아군의 최종 CRIT는 전직·장비를 모두 포함해 10~20%, 네로는 기본 18%이며 최대 25%입니다. 레벨만으로 치명타 확률은 증가하지 않습니다. 카일 두 번째 전직은 +5%포인트입니다. 활·반지는 일반 +0.5, 희귀 +1, 유니크 +2%포인트이며 날렵한·폭풍·아르카의 검/활 접두 보정은 +0.5%포인트입니다. 기존 부적은 일반/희귀/에픽/전설 순서로 +0.5/1/2/3%포인트입니다. 악세서리 두 칸의 보정은 합산하되 최종 상한을 넘지 않습니다. 비교 화면도 상한 적용 후 변화량을 표시합니다.</p><p>광역 물리·마법 공격은 지정한 정중앙 칸의 적에게만 치명타 확률을 적용합니다. 바깥 칸의 적은 치명타 확률 0%이며 치명타 1.5배 없이 기존 피해를 받습니다. 중심이 빈 칸이거나 중심 대상에게 명중하지 않으면 해당 광역 공격에는 치명타가 없습니다. 외곽의 명중·방어·속성·높이·±5% 변동 및 광역마법 거리 감쇠는 그대로 적용됩니다. 중심 적에게 치명타가 발생하면 공격 장면에 슬로우·확대 연출이 나오지만 외곽 피해까지 증가하지 않습니다. 도움닫기·일직선 배치·이동 거리로 치명타 확률을 올리는 규칙은 없습니다. 회복·정화·강화는 미스나 치명타를 판정하지 않습니다.</p><p><b>공격 팁:</b> 큰 피해라도 명중률이 낮으면 처치가 불확실합니다. 치명타를 기대하기보다 측면·후면과 확실한 예상 피해로 적의 다음 행동을 없애세요.</p>`)+
section('5. 속성 상성 · 불/물/바람 + 빛/암흑',`<p>물 → 불 → 바람 → 물의 3속성 순환과 빛 ↔ 암흑의 상호 약점이 있습니다. <b>물리와 마법 모두 속성이 붙은 공격에 적용</b>하며 무속성은 100%입니다.</p>`+table(['공격 속성','🔥 불 대상','💧 물 대상','🪽 바람 대상'],[['🔥 불','100%','75%','125%'],['💧 물·냉기','125%','100%','75%'],['🪽 바람','75%','125%','100%']])+`<p>3속성은 약점 125%, 내성 75%, 동일 속성 100%입니다. 빛과 암흑은 서로를 공격할 때 125%이며 같은 속성끼리는 100%입니다. 카일의 화염검도 ATK/DEF 계산 뒤 불 속성 배율을 적용하고, 루나의 홀리와 카일의 아르카 참격은 암흑 적에게 125%를 적용합니다.</p>`)+
section('6. 고저차·사거리·지형',`<p>공격자가 대상보다 높으면 <b>높이 1당 피해 +8%</b>입니다. 같은 높이와 낮은 곳에서의 공격에는 이 보너스가 없으며, 낮은 곳이라고 직접 피해를 깎는 페널티는 없습니다. 물리와 마법 모두 적용되고 명중률은 변하지 않습니다.</p><p>고지 보너스는 방향 보너스와 합산합니다. 방어 차감 후 피해 40, 후면 +20%, 높이 차 +2의 +16%라면 40 ×1.36 =54.4 → 예상 54입니다. 1.2 ×1.16으로 별도 곱하는 방식이 아닙니다. 첫 전직 세라는 높은 곳에서 추가 +15%이므로 정면·높이 +1에서는 총 +23%입니다. 두 번째 전직 리아의 마법 피해 +15%는 이 보정 이후 별도로 1.15배입니다.</p><p>높은 곳의 장점이 있어도 사거리·최소 사거리·공격 높이 허용 범위를 모두 만족해야 공격할 수 있습니다. 기본 근접 공격 높이 차 ±1, 원거리 기본 공격 ±4입니다. 파이어는 시전자↔중심과 중심↔각 대상 높이 차가 각각 ±1이라 높은 적과 낮은 적을 동시에 맞히지 못할 수 있습니다. 썬더·메테오는 높이를 사실상 무시합니다. 범위 기술은 칸 안에 보이는 것만으로 적중이 보장되지 않습니다.</p><p>거리와 범위는 상하좌우 칸 수를 기준으로 합니다. 기본 활 공격은 세라/궁수의 최소 사거리 2를 지켜야 합니다. 지형의 숲·잡초·모래는 이동 비용 2, 늪은 3, 평지·흙·사막·석재·다리는 1, 물은 통과 불가입니다. 이동 높이 제한 JUMP와 공격 높이 제한은 별개입니다.</p><p>현재 숲·바위·모래 자체에는 추가 DEF/RES나 엄폐 명중 감소가 없습니다. 높이·이동 비용·점유·JUMP가 전술에 영향을 줍니다. 적의 짙은 붉은색은 이번 이동 범위이며 이동 후 공격 가능한 전체 위협 범위는 아닙니다.</p><p><b>공격 팁:</b> 세라는 고지의 거리 2~4에서, 리아는 높이가 비슷한 적이 모인 지점을 노리세요. 높이 차 때문에 파이어가 닿지 않으면 썬더를 검토하세요.</p>`)+
section('7. 공격 뒤 남는 상태와 후속 피해',table(['상태','실제 효과','몸에 남는 표시'],[['🔥 화상','자기 페이즈 시작 최대 HP 5% 피해','불씨·화염'],['☠ 독','자기 페이즈 시작 최대 HP 7% 피해','초록 기포'],['❄ 빙결','이동력 −2, 지속 피해 없음','얼음 결정'],['⚡ 기절','이동·행동 제한, 지속 피해 없음','머리 위 반짝임'],['Zzz 수면','이동·행동 제한, 지속 피해 없음','수면 표시'],['🔇 침묵','비물리 스킬 제한, 지속 피해 없음','입 주변 봉인']])+`<p>지속 피해는 <b>대상 자신의 페이즈 시작</b>에 발생합니다. 최대 HP를 기준으로 5%/7%를 내림하고 최소 1을 보장합니다. 현재 HP, DEF·RES·고저차·속성 상성·치명타·±5% 오차의 영향을 받지 않습니다. HP 0까지 내려갈 수 있습니다.</p><p>최대 HP 100이면 화상은 매 회 5, 독은 7입니다. 일반 공격으로 부여한 화상/독의 카운터는 3이므로 중간에 정화되거나 처치되지 않으면 보통 자기 페이즈 시작 3회에 걸쳐 각각 15/21 피해를 줍니다. 보스 패턴이 부여하는 상태의 횟수는 다를 수 있습니다. 동일 상태 재부여는 강도나 중첩 피해를 더하지 않고 지속 횟수를 갱신합니다.</p><p><b>동시에 독과 화상이 있으면 현재 규칙은 독 피해만 우선 적용</b>하고 두 상태의 횟수는 모두 감소합니다. 두 피해를 합산하지 않습니다. 상태 카운터는 각 유닛의 페이즈 시작 처리에서 줄어듭니다. 기절은 일반적으로 카운터 1, 다른 일반 공격 상태는 3이므로 기술의 명시된 효과와 남은 상태를 확인하세요.</p><p>수면은 일반 공격·공격 스킬이 명중해 피해를 주면 풀립니다. 지속 피해만으로는 수면 해제를 처리하지 않습니다. 침묵에 걸린 적 마법사는 기본 공격을 근접 물리 공격으로 대체할 수 있으므로 완전한 행동 정지는 아닙니다.</p><p>추가 상태는 해당 공격이 명중한 후 별도 확률로 부여됩니다. 파이어 화상 30%, 화염검 화상 60%, 프로스트 빙결 45%, 썬더 기절 40%, 실드 배시 기절 60%, 수면 단검 수면 70%, 독화살·침묵의 표식·월식의 명시 상태는 100%입니다. 기본 적 상태 공격의 기본 부여 확률은 50%입니다. 보스는 이런 공격 후 상태 부여에 면역이지만 방어 감소·도발은 별도 효과입니다.</p><p>정화는 독·화상·빙결·침묵·수면·기절·방어 약화·도발 같은 해로운 상태만 제거하며 HP를 회복하지 않습니다. 공격 강화·방어 강화·철벽·이동 강화 같은 이로운 효과는 유지됩니다. 생명의 기적은 회복과 같은 해로운 상태 정화를 함께 합니다.</p><p><b>공격 팁:</b> HP가 많은 일반 정예에게 독/화상을 먼저 걸면 효율적입니다. 이미 독이 있는 적에게 화상을 추가해도 턴 피해가 합산되지는 않습니다. 쓰러뜨릴 수 있는 적은 즉시 처치하고, 수면시킨 적은 추가 공격으로 깨우지 않도록 마지막에 수면을 사용하세요.</p>`)+
section('8. 적 피해·보스 특수 공격',`<p>몬스터 공격에도 ATK·DEF 또는 MAG·RES를 사용합니다. <b>대상 최대 HP의 18/21/24%를 강제로 주던 최소 피해 보정은 제거했습니다.</b> 방어 차감 후 계산값이 작으면 최소1피해만 적용합니다. DEF·RES를 올려 실제 피해를 줄일 수 있습니다.</p><p>과도한 한 번의 피해를 막는 최대 HP 비례 상한은 난이도별로 하 29/35/40%, 중 36/43/52%, 상 42/54/63%(일반/정예/보스)입니다. 상한은 방향·높이·속성·철벽 보정 이후, 이뮤니티·무작위 오차·치명타 이전에 적용하므로 치명타 최종 피해는 상한보다 커질 수 있습니다.</p><p>보스의 예고 후 고유 궁극기는 별도 고정 피해이며 MAG × 고유 위력 ×1.30을 사용합니다. DEF·RES·일반 명중·치명타·속성 계산을 거치지 않으므로 위험 칸에서 벗어나세요.</p>`)+
section('9. 실제 능력치로 보는 예시',`<p>장비·강화·약화·패시브·이뮤니티 없음, 같은 높이·정면, 대상 DEF 16 / RES 16, 무속성 대상이며 치명타와 ±5% 변동 전 기준입니다.</p>`+table(['공격','방어 차감 계산','예상 피해'],[['카일 ATK 25 기본 공격110%','25×1.1 − 16×0.5','20'],['카일 ATK 25 화염검 130%','25×1.3 − 16×0.5','25'],['리아 ATK 10 기본 공격','10 − 16×0.5','2'],['리아 MAG 30 파이어 125%','30×1.25 − 16×0.5','30']])+`<p>화염검/파이어의 24.5/29.5는 예상 피해 확정 때 각각 25/30으로 반올림합니다. 파이어 대상이 바람 속성이라면 29.5×1.25 →37, 물 속성이라면 29.5×0.75 →15가 기준입니다. 상성은 반올림 전 단계에 적용되므로 표시된 30에 단순히 배율을 곱한 값과 1 정도 차이가 날 수 있습니다.</p><p>화염검은 MP 7을 쓰는 불 속성 물리 스킬로 ATK/DEF 계산 후 속성 배율을 받습니다. 파이어는 MP 8의 범위 마법이며, 여러 대상의 RES·높이·속성에 따라 각각 다른 피해가 나옵니다. 대상 DEF/RES가 주어지지 않으면 공격자의 능력치만으로 최종 피해를 확정할 수 없습니다.</p>`)+
section('10. 효율적인 공격·방어와 파티 운용',`<p><b>① 다음 적 행동을 줄이세요.</b> 여러 적에게 조금씩 피해를 나누기보다 확실히 처치 가능한 적을 집중 공격하세요. 예상 HP가 0이어도 ±5% 오차와 미스를 고려하고, 적 회피가 높으면 측면/후면으로 명중을 높이세요.</p><p><b>② 먼저 약점을 확인하세요.</b> DEF/RES·속성·이뮤니티를 비교합니다. 마법은 유리한 속성 또는 낮은 RES, 물리는 측면·후면과 낮은 DEF가 주요 공략입니다. 공격 종류가 다르면 비교할 능력치도 달라집니다.</p><p><b>③ 카일·브란은 전선을 잡으세요.</b> 일반 공격으로 처치할 수 있으면 MP를 아끼고, 화염검/실드 배시/갑옷 가르기는 추가 피해·상태·방어 약화가 필요한 적에게 사용하세요. 브란의 강화로 여러 아군을 보호하고, 위협적인 적 쪽으로 최종 방향을 맞추세요. 좋은 방어구로 피해를 크게 줄일 수 있으며 최종 최소 피해는1입니다.</p><p><b>④ 리아는 범위와 속성을 함께 보세요.</b> 높이가 비슷한 적을 파이어 중심+인접 4칸에 모아 공격하면 MP당 총 피해가 늘어납니다. 불리한 속성/골렘에는 다른 공격을 쓰세요. 방어가 약하므로 아군 뒤에서 공격 후 남은 이동으로 안전한 칸으로 빠질 수 있습니다.</p><p><b>⑤ 세라는 고지에서 거리를 유지하세요.</b> 기본 사거리 2~4를 지키고 첫 전직 고지 사격을 활용하세요. 방어가 높은 적은 관통 사격/매의 심판, HP가 높은 일반 정예는 독화살을 검토하세요. 인접한 적에게 기본 활이 닿지 않으니 먼저 이동해 거리를 확보하세요.</p><p><b>⑥ 네로는 후면·교란을 맡기세요.</b> 높은 MOVE로 뒤를 잡으면 후면 +20%와 첫 전직 암습 +25%를 활용합니다. 침묵은 마법 적을 약화시키고 수면은 한 적의 행동을 미룰 수 있습니다. 수면 후 다른 동료가 때려 깨우지 않도록 행동 순서를 정하세요.</p><p><b>⑦ 루나는 위기를 막으세요.</b> HP 부족에는 힐, 위험한 상태에는 정화, 여러 아군 회복·상태 해제에는 생명의 기적입니다. 회복으로도 경험치를 얻습니다. 정화는 유리한 강화도 지울 수 있고 생명의 기적은 부활 기술이 아닙니다.</p><p><b>연계 예시:</b> 브란으로 전선 유지 → 카일의 방어 약화 → 세라/네로의 측·후면 물리 공격 → 리아의 유리한 속성 범위 마법 → 루나의 회복/정화. 순서는 적의 남은 HP·상태·예고 칸에 따라 바꾸세요. 상태 피해만 기다리다 적에게 공격 기회를 주기보다 즉시 처치가 가능한지 먼저 확인하세요.</p><p><b>방어 마무리:</b> 보스 위험 칸을 벗어나고, 서로 보호할 위치를 잡은 다음, 네 방향 선택으로 가장 위험한 적을 정면에 두세요. 회복/강화·고지·방향은 함께 활용할 수 있지만, 이동 범위가 곧 공격 위협 범위는 아니라는 점을 기억하세요.</p>`);
}

let codexGearBand=0,codexGearKind='sword';
function attritionGuideHTML(){return `<h3>챕터 체력 관리 · 회복과 파밍</h3><p>일반·추가 전투 승리 시 현재 최대 HP에서 잃은 HP의50%를 올림하여 회복합니다. 단, 전투 종료 시 손실 HP가 최대 HP의10% 이하인 경상 캐릭터는 즉시100%까지 완전 회복합니다. 최대100, 남은20이면60으로 회복하고 남은92라면100까지 회복합니다. 쓰러진 동료는 최대HP의50%로 복귀합니다. 챕터 보스(서막·최종장은 마지막 본편)를 이기면 전원 HP100%입니다. 회복 후 체력 비율을 저장하고 다음 전투의 최대HP에 적용하므로 장비·성장으로 최대HP가 바뀌어도 회복률을 유지합니다. MP는 매 전투 시작 시 모두 회복합니다.</p><p>승리 체력포션1개 보장, 전장 추가 체력포션50%입니다. 각각 소형60%·중형30%·대형10%를 추첨합니다. 새 게임의 시작 수량은 소형5·중형2·대형2입니다. 이전 저장 포션은 유지합니다. 승리 시 남겨둔 장비·골드·포션을 자동 수거하므로 마지막 몬스터를 남기고 걷지 않아도 됩니다. 전투 중 포션이 필요하면 직접 이동해서 주우세요. 보관함1000개가 가득 차면 추가 장비는 수거하지 못합니다.</p><p>승리 화면에서 정면의 아군과 HP 회복, 보너스포션, 남은 전장 획득물 회수 연출을 보고 확인을 누르세요. 보상은 연출 전에 저장되어 재접속·다시 보기로 중복 지급되지 않습니다. 패배·재도전은 전투 시작의 HP·포션·골드·장비로 복구합니다.</p><h3>물리 캐릭터의 MP와 기본 공격</h3><p>카일·세라·네로 기본MP16, 브란14입니다. 전직마다MP +5이며 레벨만으로MP가 증가하지 않습니다. 장비 포함 상한은 전직0/1/2 순서로20/26/32입니다. 보통 스킬의 MP소모는 전직마다 +2, 궁극기는 기본 소비량을 유지합니다. 예: 카일MP16·화염검7로 처음 두 번 사용할 수 있고, 짝수 턴의 자기 페이즈마다MP1 회복으로 약10턴 이후 세 번째를 사용할 수 있습니다. MP장비·마력포션은 의도적으로 사용 횟수를 늘리는 선택입니다. 리아·루나의 MP성장·매 페이즈 기본MP3 및 전직 패시브는 유지합니다.</p><p>카일·브란·네로 기본 근접 공격 위력110%, DEF +3입니다. 기본 공격은 MP0이라 안정적으로 계속 사용하고, 스킬은 처치·범위·상태 이상이 필요한 순간에 사용하세요. 세라는 기본 활 공격으로 거리2~4를 유지하고 스킬을 아껴 사용합니다. 화염검은 여전히 사거리1의 물리 공격이며 원거리 마법이 아닙니다.</p>`;}
function farmingGuideHTML(){return `<h3>장비 파밍 · 성장과 등급</h3><p>장비는 <b>챕터에 따른 기본형</b>과 <b>일반·희귀·유니크 등급</b>을 별도로 갖습니다. 초반의 희귀 단검과 후반의 일반 대검은 실제 능력치를 비교해 선택하세요. 접두 이름마다 보너스 구성이 다르며 같은 이름의 아이템은 고정 능력치를 갖습니다.</p><div class="combat-table-wrap"><table class="combat-table"><thead><tr><th>진행 구간</th><th>검 / 활 / 지팡이</th><th>갑옷</th></tr></thead><tbody>${[['서막~1장','단검 / 단궁 / 나무 지팡이','가죽'],['2~4장','중검 / 전투궁 / 마도 지팡이','사슬'],['5~7장','대검 / 장궁 / 현자 지팡이','판금'],['8장~최종장','전설검 / 전설궁 / 전설 지팡이','전설']].map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p>여행자·튼튼한·날렵한은 일반, 화염·얼음·폭풍은 희귀, 여명의·망각의·아르카의는 유니크 이름입니다. 기본 능력치는 같은 기본형의 일반 대비 희귀 약 1.5배, 유니크 약 2.15배이며 접두 보너스가 추가됩니다. 치명타·회피 같은 확률 보너스는 별도 수치로 정하며, 최종 치명타는 일반 아군20%·네로25% 상한을 적용합니다. <b>화염·얼음 등의 장비 이름은 외형과 능력치 구성을 뜻하며 공격 속성을 자동 변경하거나 상태 이상을 부여하지 않습니다.</b></p><h3>매 전투의 드롭 추첨</h3><table class="combat-table"><thead><tr><th>종류</th><th>생성 규칙</th></tr></thead><tbody><tr><td>일반 150%</td><td>1개 보장 + 50% 확률로 1개 추가</td></tr><tr><td>희귀 20%</td><td>별도로 20% 확률, 1개 추가</td></tr><tr><td>유니크 5%</td><td>별도로 5% 확률, 1개 추가</td></tr><tr><td>골드 50%</td><td>장비와 독립적으로 50% 확률, 1묶음 추가</td></tr></tbody></table><p>장비는 전투당 1~4개, 평균 1.75개입니다. 골드까지 포함하면 장비와 골드는 평균2.25개이며 추가 전장포션50%를 더하면 전체 평균2.75개의 획득물이 생성됩니다. 유니크 5%는 53전투를 각각 한 번 진행할 때 평균 약 2.65개이며 확정 개수가 아닙니다. 모든 등급이 초반부터 추첨되지만 기본형은 해당 전투 챕터에 맞춰집니다. 이미 완료한 전투를 재도전하면 경험치는 정상의 10%만 얻고 전장 장비·아이템·골드는 생성되지 않습니다. 승리 물약 1개와 전투 후 HP 회복은 유지됩니다. 성장과 파밍은 미완료 정규·선택 전투를 권장합니다.</p><p>아이템은 물·절벽으로 막힌 칸을 피하고 아군이 도달할 수 있는 칸에 떨어집니다. 서로 떨어진 위치에 배치해 수집을 위한 이동과 전투 선택이 필요합니다. 아군이 칸을 지나거나 도착하면 자동 획득하며, 이동 모드에서 이동 범위 안의 아이템을 탭하면 바로 그 칸으로 이동합니다. 획득 장비는 자동 장착되지 않습니다.</p><h3>종류와 사용 캐릭터</h3><p>검: 카일·브란·네로. 활: 세라. 지팡이: 리아·루나. 갑옷과 악세서리는 전원 사용합니다. 검·활은 ATK 중심, 지팡이는 MAG·MP 중심입니다. 부적은 HP·MP, 반지는 ATK·MAG·치명타, 장화는 DEF·회피 및 유니크의 MOVE +1, 마력석은 MAG·RES·MP를 높입니다.</p><p>장착 부위는 무기·방어구·악세서리 1·악세서리 2의 총 4칸입니다. <b>부적·반지·장화·마력석은 악세서리 두 칸을 공유하며 두 개까지 착용합니다. 같은 종류도 서로 다른 아이템이면 두 칸에 장착할 수 있습니다. 한 아이템을 두 칸에 중복 장착할 수는 없습니다.</b> 가방에 소지한 미장착 아이템은 능력치를 올리지 않습니다. 같은 아이템 1개를 두 캐릭터가 동시에 장착할 수 없습니다. 이전 버전에서 얻은 장비는 기존 능력치와 장착 상태를 유지하며 새 드롭·상점에는 나오지 않습니다.</p><h3>가격 · 판매 · 비교 장착</h3><p>가격은 기본형·종류·등급·접두 이름으로 달라집니다. 같은 기본형·접두 순번의 기준으로 희귀 구매가는 일반의 약 3배, 유니크 기준 가치는 약 8배입니다. <b>판매가는 각 아이템 기준 구매가의 30%를 버림한 값</b>입니다. 유니크는 상점에서 구입할 수 없지만 판매할 수 있습니다. 전장 골드는 50 + 추천 레벨 ×7 G입니다. 추가 전장 체력포션50%와 승리 체력포션1개는 장비·골드와 별도입니다. 승리 보상 골드도 별도로 지급됩니다.</p><p>상점은 현재 성장 구간의 일반·희귀 대표 장비를 판매합니다. 파티 관리에서 캐릭터 선택 → 보관함 아이템 선택 → 현재 장비와 HP·MP·ATK·DEF·MAG·RES·MOVE·치명타·회피 변화 비교 → 장착 버튼 순서입니다. 증가량은 파란색, 감소량은 빨간색입니다. 교체된 장비는 가방에 남아 판매할 수 있습니다. 착용 중인 아이템은 먼저 해제해야 판매할 수 있습니다. 전투 중에는 비교만 가능하고 장착·판매는 전투 종료 후 가능합니다.</p><h3>외형과 등급 빛</h3><p>단검→중검→대검→전설검은 실제 모델 크기와 장식이 달라집니다. 활·지팡이·갑옷·악세서리도 각 기본형의 형태가 다릅니다. 희귀는 푸른 빛, 유니크는 금빛이 이미지 주변과 전장 획득물에 은은하게 표시됩니다.</p>`;}
function gearCatalogHTML(){const pool=GEAR.filter(g=>!g.legacy&&g.band===codexGearBand&&g.kind===codexGearKind);return `${farmingGuideHTML()}<h3>아이템 도감 · 새 장비 288종</h3><div class="chaptertabs">${['서막~1장','2~4장','5~7장','8장~최종장'].map((v,i)=>`<button data-gear-band="${i}" class="${i===codexGearBand?'on':''}">${v}</button>`).join('')}</div><div class="chaptertabs">${Object.entries(GEAR_KINDS).map(([id,v])=>`<button data-gear-kind="${id}" class="${id===codexGearKind?'on':''}">${v.label}</button>`).join('')}</div>${pool.map(g=>`<div class="gear-row">${gearThumb(g)}<div class="gear-copy"><b>${g.name}</b> <span class="badge rarity-badge-${g.tier}">${TIERS[g.tier]}</span><small>${SLOT_NAMES[g.slot]} · ${gearBonusText(g)}<br>사용: ${gearUsers(g)}<br>기준 구매가 ${gearPrice(g).toLocaleString()} G · 판매 ${gearSell(g).toLocaleString()} G${g.tier===2?' · 전장 전용':''}</small></div></div>`).join('')}<h3>체력·마력 회복약</h3>${Object.entries(CONSUMABLES).map(([id,v])=>`<p>${v.name} · 최대 ${v.stat.toUpperCase()} ${Math.round(v.ratio*100)}% 회복 · ${v.price} G</p>`).join('')}`;}
function showEncyclopedia(tab='overview',back=closeSheet,scrollPosition=null){const tabs=[['overview','세계관'],['journey','전체 여정'],['heroes','캐릭터'],['monsters','몬스터'],['elements','속성'],['skills','스킬'],['items','아이템'],['terrain','지형'],['rules','전투 규칙'],['combat','공격/방어']];let html='';
if(tab==='combat')html=combatGuideHTML()+attritionGuideHTML();
if(tab==='elements')html=`<h3>속성 상성 · 불 / 물 / 바람</h3><p>💧 물 → 🔥 불 → 🪽 바람 → 💧 물 순서로 약점을 공격합니다. 공격이 물리인지 마법인지와 관계없이 <b>속성이 붙은 공격</b>에 적용됩니다. ❄️ 냉기는 물 속성입니다.</p><table class="combat-table"><thead><tr><th>공격 / 대상</th><th>🔥 불</th><th>💧 물</th><th>🪽 바람</th></tr></thead><tbody><tr><th>🔥 불</th><td>100%</td><td>75%</td><td>125%</td></tr><tr><th>💧 물</th><td>125%</td><td>100%</td><td>75%</td></tr><tr><th>🪽 바람</th><td>75%</td><td>125%</td><td>100%</td></tr></tbody></table><p>공격의 ATK−DEF 또는 MAG−RES 계산과 방향·고저차 보정 뒤 속성 배율을 적용합니다. 무속성 적, 속성이 없는 공격, 번개·빛·암흑의 공격은 100%입니다.</p><h3>전투 중 판단</h3><p>몬스터를 선택하면 하단 정보창에 속성·약점·내성과 추천 공격을 표시합니다. 적 주위의 작은 불씨·물방울·회오리는 고유 속성을 뜻하며 화상·빙결 등의 상태 이상 연출과는 별개입니다. 정예와 보스는 효과가 더 강합니다.</p><p>전투마다 최소 한 종류의 속성 몬스터가 등장합니다. 기본 출현 목표는 무속성 약 40%, 불·물·바람 각각 약 20%이며 챕터 환경에 따라 달라집니다.</p>`;
if(tab==='overview')html=`<h3>에르디아 대륙</h3><p>인간과 정령이 공존하는 세계. 고대 유적 아르카 코어에서 흐르는 마력을 에테르라고 부릅니다. 백 년 전 에테르 전쟁 이후 고대 병기의 연구가 금지되었지만, 북부 제국의 발굴로 병기들이 다시 움직입니다.</p><h3>아르카 연대기</h3><p>용병 카일은 이름 외의 기억을 잃은 리아를 유적에서 발견합니다. 제국의 추격을 피해 동료들과 여행하며, 리아가 백 년 전 전쟁을 멈춘 병기의 열쇠였다는 사실을 알게 됩니다.</p><p>6명의 영웅 · 10개 챕터 구간 · 53개 전투 · 기본 30개와 신규 속성 스킬 13개. 이 백과사전은 발견 여부와 관계없이 모든 구현 데이터를 보여 줍니다.</p><p class="footnote">후반 이야기와 결말이 포함되어 있습니다.</p>`;
if(tab==='journey')html=CHAPTERS.map((c,i)=>`<details class="codex-card"><summary>${c[0]} · ${c[1]}</summary><p>${c[2]}</p>${STAGES.filter(s=>s.chapter===i).map(s=>`<div class="choice">${s.name}<small>${s.kind==='boss'?'보스전':s.kind==='side'?'선택 임무':'스토리'} · Lv.${s.level} · ${goalText(s)}<br>전장 ${battleRules(s).width}×${battleRules(s).height} · ${s.prev?'선행: '+STAGES.find(v=>v.id===s.prev).name:'첫 임무'}</small></div>`).join('')}</details>`).join('');
if(tab==='heroes')html=HEROES.map((h,i)=>`<button class="choice codex-unit-row" data-codex-hero="${h.id}"><canvas class="codex-unit-image" data-codex-preview="h:${h.id}" aria-label="${h.name} 움직이는 모습"></canvas><span class="codex-unit-copy"><b>${h.name}</b><small>${h.job.join(' → ')}<br>${HERO_ROLES[i]}</small></span></button>`).join('');
if(tab==='monsters')html='<p class="footnote">몬스터 3D 미리보기에도 전투와 같은 속성 파티클이 표시됩니다. 상세 화면에서 챕터·전투·난이도·일반/정예별 실제 능력치를 비교할 수 있습니다.</p>'+MONSTERS.map((m,i)=>`<button class="choice codex-unit-row" data-codex-monster="${i}"><canvas class="codex-unit-image" data-codex-preview="m:${i}" aria-label="${m.name} 움직이는 모습"></canvas><span class="codex-unit-copy"><b>${m.name}</b><small>${m.magic?'마법':'물리'} 공격 · ${ELEMENT[m.element]||'무속성'} · ${elementDetails(m.element)} · 사거리 ${m.minRange||1}~${m.range}${m.immunity?` · ${immunityDescription(m)}`:''}</small></span></button>`).join('')+`<h3>보스</h3>${[...BOSS_NAMES.slice(1),'아르카 코어'].map((n,i)=>`<button class="choice codex-unit-row" data-codex-boss="${i+1}"><canvas class="codex-unit-image" data-codex-preview="b:${i+1}" aria-label="${n} 움직이는 모습"></canvas><span class="codex-unit-copy"><b>${n}</b><small>${ELEMENT[BOSS_PROFILES[i+1].element]} · ${BOSS_PROFILES[i+1].wave} · ${BOSS_PROFILES[i+1].finisher}${['golem','ghost'].includes(BOSS_PROFILES[i+1].model)?` · ${immunityDescription({immunity:BOSS_PROFILES[i+1].model==='golem'?'magic':'physical'})}`:''}</small></span></button>`).join('')}<p>보스마다 외형·속성·소환 적·위험 범위가 다릅니다. 5턴 순서는 기본 공격 → 고유 범위 공격 → 소환 → 위험 칸 예고 → 고유 궁극기이며 반복됩니다.</p>`;
if(tab==='skills')html=HEROES.map(h=>`<h3>${h.name}</h3>${h.skills.map((id,i)=>codexSkillCard(h.id,id,i)).join('')}`).join('');
if(tab==='items')html=attritionGuideHTML()+gearCatalogHTML();
if(tab==='terrain')html=`<p>전장에 등장하는 열 가지 지형입니다. 녹색과 황토색 전장이 번갈아 나타납니다. 아래 버튼을 누르면 Three.js 지형 견본을 볼 수 있습니다.</p><canvas id="terrainModel" aria-label="선택한 지형의 3D 미리보기"></canvas><h3 id="terrainName">평지</h3><p id="terrainDescription"></p><div class="terrain-choices">${TERRAIN_INFO.map(([id,name])=>`<button data-terrain="${id}">${name}</button>`).join('')}</div><p class="footnote">높이는 지형 종류와 별도로 적용됩니다. 인접 칸의 높이 차가 캐릭터의 JUMP를 넘으면 이동할 수 없습니다. 물은 높이와 관계없이 이동할 수 없습니다.</p>`;
if(tab==='rules')html=`<h3>무작위 전장 규칙</h3><p>서막~1장은 10×10 또는 12×8, 2~6장은 12×12 또는 10×14, 7장 이후는 14×14 또는 12×16 전장입니다. 녹색과 황토색 지형이 번갈아 나타나며 적 시작 위치는 매번 달라집니다. 아군은 아래쪽에 모여 시작하고 보스는 반대편 가장 바깥에 놓입니다.</p><p>일반 몬스터는 30종이며 전투마다 주로 2~3종이 섞입니다. 정예 1체는 매 전투에 등장하고 같은 종 일반 적의 약 2.6배 HP를 갖습니다. (현재 체력 보정 포함) 각 장의 보스전과 마지막 최종 보스전도 유지됩니다.</p><p>매 전투마다 일반 장비 1개 보장 및 50%로 일반 1개 추가, 별도로 희귀 20%·유니크 5%·골드 50%를 추첨합니다. 완료 전투 재도전은 EXP 10%만 지급하며 전장 장비·아이템·골드는 생성되지 않습니다. 승리 물약 1개와 전투 후 HP 회복은 유지됩니다. 자세한 종류·가격·장착 규칙은 아이템 탭을 확인하세요.</p><h3>턴과 조작</h3><p>아군 페이즈 후 적 페이즈. 아군마다 이동 한 번과 행동 한 번. 제자리에서 공격·스킬을 먼저 사용했다면 남은 이동을 할 수 있습니다. 회복약·대기는 이동까지 마칩니다.</p><p>공격·스킬과 남은 이동 후 대기를 누르면 캐릭터 주변의 네 화살표로 마지막 방향을 한 번 정합니다. ‘현재 방향 유지’를 누르면 지금 방향으로 확정합니다. 방향 선택은 추가 이동·행동을 소모하지 않습니다. 공격·스킬·이동 직후에는 방향을 묻지 않습니다.</p><h3>지형과 공격</h3><p>평지·흙·사막·석재·다리 이동 비용 1, 숲·잡초·모래 2, 늪 3, 물은 이동 불가입니다. 높이 차가 JUMP를 넘으면 이동할 수 없습니다. 물리 피해는 ATK × 위력 − DEF ×0.5, 마법은 MAG × 위력 − RES ×0.5를 기준으로 계산합니다. 적 공격에는 최대 HP에 비례하는 최소 피해 보정은 제거했으며 DEF·RES에 따라 피해가 감소합니다. 최종 최소 피해1은 유지합니다.</p><p>🔥 불·💧 물·🪽 바람 속성 공격은 💧 물→🔥 불→🪽 바람→💧 물 순서로 강합니다. ✨ 빛과 🌑 암흑은 서로에게 125% 약점 피해를 줍니다. 속성 물리·마법 모두 3속성 약점 125%, 내성 75%, 빛↔암흑 상호 약점 125%, 동일 속성·무속성은 100%입니다. 냉기 마법은 물로 취급합니다. 골렘 계열은 마법 피해 35% 적용 (65% 감소), 유령 계열은 무속성 물리 피해 35% 적용 (65% 감소)입니다. 화염검처럼 속성이 붙은 물리 공격은 유령에게 피해 60% 적용 (40% 감소)입니다. 속성 상성은 별도로 곱하며 화상·독의 최대 HP 비례 지속 피해에는 이뮤니티 감소를 적용하지 않습니다.</p><h3>전투 연출과 상태 표시</h3><p>몸에 남은 불씨는 화상, 초록 기포는 독, 얼음 결정은 빙결, 머리 위 반짝임은 기절, Zzz는 수면, 입 주변 봉인과 🔇는 침묵입니다. 독·화상 피해는 자기 페이즈 시작에 효과음·피격 반응·피해 숫자와 함께 적용됩니다. 효과는 남은 지속 시간이 끝나거나 정화·전투 불능 시 사라집니다. 빙결·기절·수면·침묵에는 추가 지속 피해가 없습니다.</p><p>치명타는 타격 전까지 속도가 100%에서 20%로 서서히 느려지고 화면은 최대 3배까지 확대됩니다. 근접 물리 공격은 공격 캐릭터를, 원거리 공격·투사체·마법은 치명타를 맞는 대상과 타격 이펙트를 중심으로 확대합니다. 타격 순간 정상 속도로 복귀하고 화면은 서서히 원래 배율과 위치로 돌아옵니다. 화살과 발사형 마법은 시전자에게서 목표까지 날아갑니다. 파이어·파이어 스톰·메테오는 위에서 낙하하고 썬더는 낙뢰로 표시됩니다.</p><h3>상태와 성장</h3><p>독 최대 HP 7%, 화상 5%의 턴 피해. 빙결 이동 −2, 침묵 비물리 스킬 제한, 수면·기절 행동 제한. 최대 Lv.40, Lv.10/20 전직.</p><h3>세이브</h3><p>행동 종료 시 자동 저장합니다. 기존 저장을 이어받으며 이전 회복약은 중형 체력 회복약으로 전환합니다.</p>`;
if(tab==='overview')html+='<h3>주요 세력과 여정의 목적</h3><p>북부 제국은 금지된 고대 병기를 발굴하고 리아를 추적합니다. 카일 일행은 마을 탈출에서 시작해 왕도의 기록, 아르카 유적과 제국 수도를 거쳐 코어의 진실에 접근합니다. 파티의 중심은 장비 수집보다 여섯 동료의 합류·성장과 스토리 전투입니다.</p><h3>백과사전 사용법</h3><p>캐릭터와 몬스터 항목을 누르면 실제 3D 외형과 능력치를 확인할 수 있습니다. 캐릭터의 레벨·전직을 바꾸면 장비 없는 기준 능력치가 바뀝니다. 실제 전투 수치는 착용 장비·난이도·상태에 따라 달라집니다. 스킬 탭은 기존 기술과 신규 속성 기술의 해금 레벨, MP, 대상, 범위, 실제 효과와 활용법을 설명합니다.</p>';
if(tab==='items')html+='<h3>획득·장착·사용을 구분하세요</h3><p>획득한 장비는 보관함에 들어가며 전투 종료 후 파티 관리에서 장착해야 능력치가 적용됩니다. 검·활은 ATK, 지팡이는 MAG·MP 중심이며 방어구는 DEF·RES, 악세서리는 종류마다 HP·MP·공격·회피 등을 높입니다. 같은 장비 한 개를 두 캐릭터가 동시에 착용할 수 없습니다.</p><p>회복약을 주우면 보유 수량만 증가하며 즉시 회복하지 않습니다. 전투 메뉴에서 선택한 살아 있는 아군에게 사용하면 표시된 HP 또는 MP를 회복하고 행동·이동을 종료합니다. 자원이 가득 찼으면 사용하지 않습니다. 기존 저장의 회복약은 중형 체력 회복약으로 옮겨집니다.</p>';
if(tab==='rules')html+='<h3>프롤로그 입문 전투</h3><p>프롤로그 5개 전투는 별도 입문 밸런스를 사용합니다. NORMAL 첫 전투는 슬라임 2체와 고블린 1체, 이후는 4체입니다. STORY는 최소 3체, TACTICAL은 NORMAL보다 1체 많습니다. 골렘·저항 정령·고속 늑대·독·고회피 적은 출현하지 않습니다. 불에 약한 바람 슬라임으로 파이어와 화염검을 연습하고, 물 공격을 습득한 뒤에는 붉은 진흙 슬라임이 섞일 수 있습니다.</p><p>첫 전투는 선두 1체100%, 나머지10%로 접근합니다. 이후 프롤로그는 선두 최대2체100%, 중간은 STORY10%/NORMAL15%/TACTICAL20%, 후방5%입니다. 마지막 본편 고블린 대장은 일반 적2체가 쓰러진 뒤 합류하며, 아군이 인접하면 즉시 대응합니다. 프롤로그에서는 리아 집중 공격 가중치와 누적 HP 강화를 적용하지 않습니다. 시작 구역과 접근 통로는 평지로 확보하고 높이는 최대1입니다.</p><h3>몬스터 이동 범위 확인</h3><p>몬스터 선택 시 붉은 칸은 현재 위치에서 정상 MOVE를 모두 사용했을 때의 최대 이동 범위입니다. 지형 이동 비용·JUMP·다른 유닛 점유·이동 상태 효과를 반영합니다. 다음 턴의 실제 접근량, 대열 위치, 접근률은 표시하지 않습니다.</p><h3>적의 순차 접근</h3><p>프롤로그를 제외한 전투에서 선두 적은 이동력의 100%로 접근합니다. 생존 아군 1~2명/3명/4명/5명/6명일 때 NORMAL·TACTICAL의 선두는 각각 최대 2/3/4/5/6체입니다. STORY는 생존 아군 1~3명일 때 최대 2체, 4~6명일 때 최대 3체입니다. 적이 이보다 적으면 남은 적만 선두가 됩니다.</p><p>선두 다음 최대 2체의 중간 대열은 STORY 10%, NORMAL 20%, TACTICAL 30%로 이동하며, 그 밖의 후방은 각각 5%/10%/15%입니다. 정예·보스·궁수·마법사도 같은 대열 비율을 적용합니다. 턴이 지나도 자동 가속하지 않습니다.</p><p>소수점 이동량만 다음 턴으로 이월합니다. NORMAL의 MOVE 5 중간 적은 턴당 이동 비용 1, 후방 적은 평균 0.5씩 확보합니다. 숲·늪처럼 비용이 큰 지형에서는 이동이 더 제한될 수 있습니다. 사용하지 않은 정수 이동량은 쌓이지 않습니다.</p><p>아군이 상하좌우 1칸에 인접하면 근접 대응을 위해 100%로 움직일 수 있습니다. 단순히 활·마법 사거리 안에 들어왔다는 이유로 가속하지 않습니다. 이동 없이 사거리 안의 아군을 공격하는 것은 가능합니다. 선두가 쓰러지면 다음 적이 선두로 승격됩니다. 한 적 페이즈 중에는 이동 때문에 대열이 재정렬되지 않습니다.</p>';
showSheet('백과사전',`<p class="footnote">전체 공개 · 현재 게임 데이터 기준 · ver.${GAME_VERSION}</p><div class="chaptertabs codex-tabs">${tabs.map(([id,n])=>`<button data-codex-tab="${id}" class="${id===tab?'on':''}">${n}</button>`).join('')}</div>${html}`,()=>{$('#sheet').querySelectorAll('[data-codex-tab]').forEach(b=>b.onclick=()=>showEncyclopedia(b.dataset.codexTab,back,$('#sheet').scrollTop));$('#sheet').querySelectorAll('[data-codex-hero]').forEach(b=>b.onclick=()=>showCodexHero(b.dataset.codexHero,back));$('#sheet').querySelectorAll('[data-codex-monster]').forEach(b=>b.onclick=()=>showCodexMonster(+b.dataset.codexMonster,back));$('#sheet').querySelectorAll('[data-codex-boss]').forEach(b=>b.onclick=()=>showCodexBoss(+b.dataset.codexBoss,back));if(tab==='terrain')terrainPreview();if(tab==='heroes'||tab==='monsters')codexListPreview();if(tab==='skills')codexSkillPreviews();if(tab==='items'){$('#sheet').querySelectorAll('[data-gear-band]').forEach(b=>b.onclick=()=>{const pos=$('#sheet').scrollTop;codexGearBand=+b.dataset.gearBand;showEncyclopedia('items',back,pos);});$('#sheet').querySelectorAll('[data-gear-kind]').forEach(b=>b.onclick=()=>{const pos=$('#sheet').scrollTop;codexGearKind=b.dataset.gearKind;showEncyclopedia('items',back,pos);});}if(scrollPosition!==null)$('#sheet').scrollTop=scrollPosition;},{back,scrollTop:scrollPosition});}

function showCodexBoss(ch,back){const stage=STAGES.find(s=>s.id===(ch===9?'c9s2':`c${ch}b`)),u=(battle?.stageId===stage.id?battle.units.find(u=>u.boss):null)||makeBattle(stage,stage.seed).units.find(u=>u.boss),p=BOSS_PROFILES[ch],summon=MONSTERS[p.summon].name;showSheet(u.name,`<canvas id="codexModel" aria-label="${u.name} 3D 모델"></canvas><p>${CHAPTERS[ch][0]} · Lv.${u.level} · ${save.difficulty.toUpperCase()} 기준</p>${codexStats(u)}${u.immunity?`<p>${immunityDescription(u)}</p>`:''}<h3>5턴 반복 패턴</h3><p>1턴: 이동 후 근접 기본 공격.<br>2턴: ${p.wave}. 사거리 3, 범위 1, 높이 차 ±2의 ${ELEMENT[p.element]} 마법 공격. 명중 시 50% 확률로 ${STATUS[p.status]} 부여.<br>3턴: 보스 옆 빈 육지 칸에 ${summon} 소환. 빈 칸이 없으면 일반 행동.<br>4턴: 가장 가까운 아군 주변 ${p.radius}칸에 ${p.finisher} 위험 칸 예고. 다음 아군 페이즈에서 벗어나세요.<br>5턴: 예고 칸의 아군에게 MAG ×${p.power} ×1.30 고정 피해. DEF·RES·명중 계산을 거치지 않습니다.</p><p class="footnote">보스는 아군 공격으로 부여하는 일반 상태 이상에 면역입니다. 소환 적은 다음 적 페이즈부터 움직입니다.</p>`,()=>modelPreview(u),{back:()=>showEncyclopedia('monsters',back)});}

function showCodexHero(id,back,level=1,cls=0,branch=0){const h=heroDef(id),u=heroStats({id,level,classLevel:cls,branch,equip:[0,0,0],equipped:[null,null,null,null]});showSheet(h.name,`<canvas id="codexModel" aria-label="${h.name} 3D 모델"></canvas><p>${HERO_ROLES[HEROES.indexOf(h)]}</p><p>${h.job.join(' → ')}</p><h3>운용과 전직 효과</h3><p>${HERO_GUIDES[id]}</p><p>합류: ${h.join===0?'서막':h.join+'장'} · 기본 MOVE ${h.move} · JUMP ${h.jump}. 각 전직은 공통 능력치와 아래 패시브를 함께 강화합니다.</p><div class="settings-row"><label for="codexLevel">기준 레벨</label><select id="codexLevel">${[1,10,20,30,40].map(l=>`<option ${l===level?'selected':''}>${l}</option>`).join('')}</select><label for="codexClass">전직</label><select id="codexClass">${h.job.map((n,i)=>`<option value="${i}" ${i===cls?'selected':''}>${n}</option>`).join('')}</select></div><p class="footnote">착용 장비가 없는 기준 능력치입니다. 전직 선택은 합류·해금과 관계없이 미리 볼 수 있습니다.</p>${codexStats(u)}<h3>패시브</h3>${h.passive.map((n,i)=>`<p>${i+1}차 전직 · ${n}</p>`).join('')}<h3>스킬</h3>${h.skills.map((id,i)=>`<div class="choice">${SKILLS[id].name}<small>Lv.${skillUnlock(id,i)} · MP ${skillCost({...u,heroId:h.id},SKILLS[id])} · ${skillDescription(SKILLS[id])}</small>${detailedSkill(id)}</div>`).join('')}`,()=>{modelPreview({...u,heroId:id});$('#codexLevel').onchange=e=>{const lv=+e.target.value;showCodexHero(id,back,lv,Math.min(promotionRankFor(id,lv),h.job.length-1),0)};$('#codexClass').onchange=e=>{const v=+e.target.value;showCodexHero(id,back,level,v,0)};},{back:()=>showEncyclopedia('heroes',back)});}
function showCodexMonster(i,back,stageId=null,elite=false,difficulty=null){
 const m=MONSTERS[i],activeStage=battle&&STAGES.find(v=>v.id===battle.stageId);
 const defaultStage=activeStage||STAGES.find(v=>v.chapter===(save.missionChapter??0)&&v.kind==='story')||STAGES[0];
 const stage=STAGES.find(v=>v.id===stageId)||defaultStage;
 const mode=['story','normal','tactical'].includes(difficulty)?difficulty:save.difficulty;
 // When inspecting the ongoing battle, use its actual unit (including saves
 // created before this version). Otherwise use the SAME stats as spawning.
 const live=activeStage?.id===stage.id&&mode===save.difficulty&&battle?.units.find(v=>v.team==='enemy'&&!v.boss&&!!v.elite===elite&&(v.monsterIndex===i||(v.monsterIndex===undefined&&v.name.replace(/^정예 /,'')===m.name)));
 const stats=live||enemyCombatStats(m,stage.level,stage.chapter,mode,elite,false);
 const u={...m,...stats,elite,name:elite?`정예 ${m.name}`:m.name,team:'enemy',status:stats.status||{}};
 const stages=STAGES.filter(v=>v.chapter===stage.chapter);
 showSheet(m.name,`<canvas id="codexModel" aria-label="${m.name} 3D 모델과 속성 파티클"></canvas>
 <div class="settings-row"><label for="codexChapter">챕터</label><select id="codexChapter">${CHAPTERS.map((c,j)=>`<option value="${j}" ${j===stage.chapter?'selected':''}>${c[0]}</option>`).join('')}</select></div>
 <div class="settings-row"><label for="codexStage">전투 / 실제 몬스터 레벨</label><select id="codexStage">${stages.map(v=>`<option value="${v.id}" ${v.id===stage.id?'selected':''}>${v.name} · Lv.${v.level}</option>`).join('')}</select></div>
 <div class="settings-row"><label for="codexDifficulty">난이도</label><select id="codexDifficulty">${[['story','하'],['normal','중'],['tactical','상']].map(([v,n])=>`<option value="${v}" ${v===mode?'selected':''}>${n}</option>`).join('')}</select></div>
 <div class="settings-row"><label for="codexElite">몬스터 구분</label><select id="codexElite"><option value="0" ${!elite?'selected':''}>일반</option><option value="1" ${elite?'selected':''}>정예</option></select></div>
 <p class="footnote">${live?'현재 전투의 실제 몬스터 능력치입니다.':`선택한 전투의 Lv.${stage.level}에 이 몬스터가 등장할 때 적용되는 실제 능력치 계산입니다.`} HP는 최대 체력 기준입니다. 기존 저장 전투는 당시 능력치를 그대로 표시합니다.</p>
 ${codexStats(u)}
 <p>${m.magic?'마법':'물리'} 공격 · ${ELEMENT[m.element]||'무속성'} · 사거리 ${m.minRange||1}~${m.range}${m.status?` · ${STATUS[m.status]} 공격`:''}${m.immunity?` · ${immunityDescription(m)}`:''}</p>
 <h3>특징과 상대하는 방법</h3><p>${MONSTER_GUIDES[i]}</p><p><b>${elementDetails(m.element)}</b></p><p>추천 공격: ${monsterAdvice(m.element)}</p>
 <p class="footnote">전투 능력치 계산과 동일한 난이도·챕터·레벨·정예 보정 및 최신 HP/방어 보정이 적용됩니다. 전투 중 일시적인 상태 효과는 별개입니다.</p>`,()=>{
  modelPreview(u);
  $('#codexChapter').onchange=e=>showCodexMonster(i,back,STAGES.find(v=>v.chapter===+e.target.value&&v.kind==='story').id,elite,mode);
  $('#codexStage').onchange=e=>showCodexMonster(i,back,e.target.value,elite,mode);
  $('#codexDifficulty').onchange=e=>showCodexMonster(i,back,stage.id,elite,e.target.value);
  $('#codexElite').onchange=e=>showCodexMonster(i,back,stage.id,e.target.value==='1',mode);
 },{back:()=>showEncyclopedia('monsters',back)});
}


function bake(parts){const arr=parts.map(p=>{let g=geo[p[0]].index?geo[p[0]].toNonIndexed():geo[p[0]].clone();g.scale(...p[2]);g.rotateZ(p[4]||0);if(p[5])g.rotateX(p[5]);if(p[6])g.rotateY(p[6]);g.translate(...p[1]);const color=new THREE.Color(p[3]),a=new Float32Array(g.attributes.position.count*3);for(let i=0;i<a.length;i+=3){a[i]=color.r;a[i+1]=color.g;a[i+2]=color.b;}g.setAttribute('color',new THREE.BufferAttribute(a,3));return g;});const m=mergeGeometries(arr,false);arr.forEach(g=>g.dispose());return m;}
// User-supplied high-detail design, completed for all six heroes.
function detailedHeroParts(u,add,weaponGear){
 const id=u.heroId,skin=0xf4cfa8,hair=id==='ria'?0xebebf5:u.hair||0x464956;
 const palette={kyle:[0x2d7fa3,0x1b4965,0xe8c166],ria:[0xb589d6,0x6b458c,0xf2cf72],bran:[0x6b7b85,0x7e5a3c,0xe2c47e],sera:[0x527f56,0x846642,0xe2bc69],luna:[0xf4ead0,0xe2d6ba,0xc6a766],nero:[0x333b59,0x1e2233,0x8293bd]};
 const [cloth,dark,gold]=palette[id]||palette.kyle,silver=0xdce6ea,robed=['ria','luna'].includes(id),heavy=id==='bran',width=heavy?.28:.21;
 for(const sign of [-1,1]){const x=sign*(heavy?.14:.115);add('cyl',[x,.23,0],[heavy?.09:.07,.25,.08],dark);add('cyl',[x,.11,.01],[.08,.17,.09],robed?cloth:0x4a372b);add('box',[x,.035,.055],[heavy?.16:.13,.07,.21],dark);add('box',[x,.14,.095],[.09,.04,.025],gold);if(id==='kyle'||heavy)add('ball',[x,.24,.08],[.065,.065,.035],silver);}
 add('cone',[0,robed?.33:.37,0],[robed?.34:.30,robed?.48:.30,robed?.29:.24],cloth);
 add('cyl',[0,.58,0],[width,.30,.18],cloth);add('cyl',[0,.44,0],[width+.015,.065,.19],dark);add('box',[0,.44,.19],[.09,.075,.035],gold);
 if(robed){add('cone',[0,.22,0],[.35,.25,.30],id==='ria'?0xfaf3e0:cloth);add('torus',[0,.14,0],[.31,.055,.27],gold,0,Math.PI/2);add('box',[0,.37,.28],[.10,.37,.025],gold);}
 for(const sign of [-1,1]){const x=sign*(heavy?.35:.28);add('ball',[x,.68,0],[heavy?.15:.105,.11,.13],id==='kyle'||heavy?silver:cloth);add('cyl',[x*1.04,.56,.025],[.065,.20,.065],cloth,sign*.13);add('cyl',[x*1.10,.41,.08],[heavy?.085:.06,.17,.065],id==='kyle'||heavy?silver:dark,sign*.08,-.20);add('ball',[x*1.12,.33,.13],[.055,.06,.055],id==='nero'?dark:skin);}
 // Complete head, ears, eyes, nose, mouth and hair; hooded heroes still have faces.
 add('cyl',[0,.75,0],[.075,.10,.075],skin);add('ball',[0,.92,0],[.235,.25,.225],skin);add('ball',[0,1.075,-.045],[.25,.14,.23],hair);add('box',[0,.96,-.18],[.40,.23,.10],hair);
 for(const sign of [-1,1]){add('ball',[sign*.227,.91,0],[.04,.06,.035],skin);add('ball',[sign*.083,.93,.207],[.040,.051,.018],0xffffff);add('ball',[sign*.083,.93,.221],[.026,.037,.014],id==='ria'?0x6f3aa8:id==='sera'?0x386a4a:0x183442);add('ball',[sign*.073,.946,.231],[.010,.012,.008],0xffffff);add('box',[sign*.084,.989,.213],[.063,.014,.018],hair,sign*-.10);if(id==='ria'||id==='luna')add('ball',[sign*.133,.87,.195],[.032,.017,.008],0xf2a7b3);}
 add('cone',[0,.897,.231],[.020,.035,.026],0xe2b68d,0,Math.PI/2);add('box',[0,.849,.214],[.05,.012,.012],0xb87664);
 if(id==='kyle'){
  add('box',[0,.60,.085],[.34,.26,.16],silver);add('box',[0,.60,.173],[.07,.22,.025],gold);add('box',[0,.34,.16],[.14,.24,.035],0xf2efe4);add('box',[0,.34,.18],[.05,.22,.02],gold);add('torus',[0,.735,.01],[.18,.08,.16],0xc84646,0,Math.PI/2);
  add('box',[0,.48,-.21],[.44,.57,.05],dark,0,0,.12);for(const sign of [-1,1]){add('cone',[sign*.16,.40,-.22],[.15,.50,.06],0x235c7d,sign*-.10);add('cone',[sign*.20,.98,.12],[.055,.17,.05],hair,Math.PI,.15);}add('cone',[-.06,1.08,.17],[.07,.17,.05],hair,2.7,.3);add('cone',[.07,1.08,.17],[.08,.18,.05],hair,-2.6,.3);add('box',[0,1.03,.215],[.30,.035,.025],gold);add('rock',[0,1.03,.237],[.035,.04,.018],0x35e0ff);
  add('box',[-.37,.46,.18],[.28,.38,.05],gold);add('box',[-.37,.46,.21],[.23,.33,.03],0x265f82);add('box',[-.37,.46,.23],[.045,.24,.015],gold);add('box',[-.37,.51,.23],[.16,.045,.015],gold);
  if(!weaponGear){add('cyl',[.36,.36,.14],[.032,.22,.032],0x5c3a24);add('ball',[.36,.24,.14],[.05,.05,.05],gold);add('box',[.36,.46,.14],[.24,.045,.085],gold);add('rock',[.36,.46,.19],[.04,.05,.025],0x3de0ff);add('box',[.36,.78,.14],[.08,.60,.032],silver);add('box',[.36,.76,.16],[.023,.48,.015],0x79d7f7);add('cone',[.36,1.15,.14],[.06,.18,.028],silver);}
 }else if(id==='ria'){
  add('cyl',[0,.57,0],[.185,.26,.16],dark);add('cone',[0,.65,0],[.27,.18,.23],cloth,Math.PI);add('ball',[0,.59,.18],[.07,.08,.04],0xffe885);for(const sign of [-1,1]){add('cone',[sign*.18,.68,-.15],[.08,.42,.07],hair,Math.PI);add('cone',[sign*.20,.78,.105],[.05,.24,.05],hair,Math.PI);add('cone',[sign*.09,.57,.18],[.04,.11,.025],0xfaf3e0,sign*1.2);}for(const x of [-.08,0,.08])add('cone',[x,1.02,.19],[.05,.11,.035],hair,Math.PI);
  add('cyl',[0,1.12,-.01],[.37,.035,.34],dark,0,-.10);add('cone',[0,1.32,-.04],[.24,.42,.23],cloth,0,-.15);add('cone',[0,1.52,-.12],[.085,.17,.08],cloth,0,-.45);add('cyl',[0,1.16,-.02],[.225,.05,.21],0xfaf3e0);for(const sign of [-1,1])add('cone',[sign*.09,1.17,.19],[.045,.11,.035],0xfaf3e0,sign*1.35);
  if(!weaponGear){add('cyl',[.36,.64,.06],[.028,1.10,.028],0x8c6d46);add('ball',[.36,.09,.06],[.045,.045,.045],gold);add('torus',[.36,1.24,.06],[.13,.18,.12],gold);add('rock',[.36,1.24,.06],[.09,.12,.09],0xe29eff);for(const sign of [-1,1])add('cone',[.36+sign*.16,1.26,.06],[.04,.17,.035],0xfaf3e0,sign*-.65);}
 }else if(id==='bran'){
  add('box',[0,.57,.06],[.49,.42,.32],0x6b7b85);add('box',[0,.59,.235],[.36,.29,.04],0x8596a0);add('box',[0,.60,.265],[.06,.27,.025],gold);for(const sign of [-1,1]){add('box',[sign*.34,.72,0],[.26,.20,.32],0x6b7b85);add('box',[sign*.34,.76,.17],[.22,.04,.03],gold);}add('box',[0,1.08,0],[.31,.13,.28],0x6b7b85);add('cone',[0,1.22,0],[.10,.20,.10],gold);
  add('box',[-.45,.46,.17],[.40,.55,.08],gold);add('box',[-.45,.46,.22],[.34,.48,.04],0x6b7b85);add('box',[-.45,.46,.25],[.065,.40,.025],gold);add('box',[-.45,.54,.25],[.25,.06,.025],gold);if(!weaponGear){add('cyl',[.40,.53,.13],[.045,.64,.045],dark);add('rock',[.40,.91,.13],[.18,.18,.17],silver);}
 }else if(id==='sera'){
  add('cone',[0,1.14,-.09],[.32,.40,.29],cloth);add('box',[0,.48,-.21],[.36,.55,.045],cloth);for(const sign of [-1,1])add('box',[sign*.19,.94,.09],[.07,.25,.17],cloth);add('box',[0,.79,.19],[.28,.065,.06],cloth);add('box',[0,.55,.20],[.10,.27,.03],dark,.30);add('box',[0,.48,.225],[.16,.06,.025],gold);add('cyl',[-.23,.56,-.20],[.085,.49,.085],dark,-.4);for(const x of [-.26,-.17,-.08]){add('cyl',[x,.79,-.22],[.012,.34,.012],0xb99254);add('cone',[x,.96,-.22],[.025,.13,.025],0xe9d69b);}
  if(!weaponGear){add('cyl',[.40,.62,.11],[.028,.81,.028],gold);add('cyl',[.48,.82,.11],[.025,.43,.025],gold,-.58);add('cyl',[.48,.40,.11],[.025,.43,.025],gold,.58);add('cyl',[.59,.61,.11],[.008,.79,.008],0xf4e6bd);}
 }else if(id==='luna'){
  add('box',[0,.58,.22],[.32,.43,.065],cloth);add('box',[0,.57,.26],[.085,.42,.025],gold);add('box',[0,.66,.26],[.24,.06,.025],gold);add('cone',[0,1.12,-.07],[.22,.23,.20],0xf7edd2);add('box',[0,1.10,.18],[.26,.065,.04],gold);for(const sign of [-1,1]){add('cone',[sign*.19,.78,-.13],[.07,.36,.065],hair,Math.PI);add('cone',[sign*.27,.47,.05],[.11,.23,.10],cloth);}
  if(!weaponGear){add('cyl',[.35,.62,.05],[.03,1.03,.03],gold);add('ball',[.35,1.18,.05],[.12,.12,.11],0xffe6a1);add('box',[.35,1.18,.18],[.20,.04,.025],0xffe6a1);add('box',[.35,1.18,.18],[.04,.23,.025],0xffe6a1);}
 }else if(id==='nero'){
  add('cone',[0,1.15,-.08],[.30,.39,.27],cloth);for(const sign of [-1,1])add('box',[sign*.19,.96,.075],[.07,.25,.17],cloth);add('box',[0,.83,.23],[.32,.13,.06],cloth);add('box',[0,.84,.267],[.18,.03,.018],0x59668a);for(const x of [-.15,.15])add('box',[x,.43,-.20],[.14,.59,.045],0x323c63);add('box',[0,.55,.20],[.35,.065,.025],gold);add('box',[0,.59,.21],[.08,.24,.025],dark,.45);
  for(const x of weaponGear?[-.35]:[-.35,.35]){add('cyl',[x,.34,.14],[.025,.15,.025],dark);add('box',[x,.46,.14],[.05,.22,.035],silver,x<0?-.30:.30);add('cone',[x,.64,.14],[.05,.14,.03],0x62a4ff);add('box',[x,.39,.14],[.13,.03,.06],gold);}
 }
}
function helmetEnemyParts(u,add){
 const armor=0x3e434c,darkIron=0x262930,rustRed=0x6e3535;
 for(const x of [-.13,.13]){add('cyl',[x,.17,0],[.085,.28,.095],darkIron);add('box',[x,.05,.05],[.15,.10,.23],0x1d1f24);}add('cone',[0,.36,-.02],[.33,.48,.26],rustRed);add('box',[0,.56,0],[.42,.40,.30],armor);add('box',[0,.58,.17],[.30,.27,.035],darkIron);add('box',[0,.43,.17],[.35,.045,.035],rustRed);
 add('cyl',[0,.93,0],[.25,.32,.25],armor);add('ball',[0,1.08,0],[.25,.13,.25],darkIron);add('box',[0,.90,.15],[.34,.25,.18],darkIron);add('box',[0,.95,.247],[.26,.04,.018],0xff2e2e);for(const y of [.85,.80])add('box',[0,y,.247],[.18,.016,.018],0x111317);
 for(const sign of [-1,1]){add('cone',[sign*.22,1.15,.02],[.055,.23,.055],rustRed,sign*-.45);add('box',[sign*.29,.69,0],[.19,.15,.25],armor);add('cyl',[sign*.31,.49,.04],[.075,.32,.075],darkIron,sign*.12);add('ball',[sign*.34,.33,.09],[.075,.07,.075],darkIron);}
 if(u.model==='archer'){add('box',[.42,.50,.14],[.47,.07,.11],0x574f46);add('box',[.54,.50,.16],[.065,.29,.065],rustRed);add('cyl',[-.28,.61,-.20],[.085,.42,.085],0x4a3f37);for(const x of [-.35,-.27,-.19])add('cone',[x,.88,-.21],[.023,.27,.023],0xbec1b6);}
 else if(u.model==='goblin'){add('cyl',[.36,.50,.10],[.05,.56,.05],0x624f39);add('rock',[.36,.84,.10],[.16,.15,.14],armor);add('box',[0,.65,.20],[.22,.06,.035],rustRed);}
 else if(u.model==='sentinel'){add('rock',[0,.60,.22],[.11,.14,.06],0x8be6e5);add('cyl',[.39,.66,.10],[.035,.80,.035],darkIron);add('cone',[.39,1.13,.10],[.085,.20,.075],0x82b9bf);}
 else{add('box',[-.38,.49,.17],[.32,.44,.075],armor);add('box',[-.38,.49,.22],[.06,.35,.025],rustRed);add('cyl',[.39,.67,.11],[.045,.90,.045],0x7f817a);add('cone',[.39,1.20,.11],[.085,.25,.075],0xb9bec1);}
}

function figure(u){const weaponGear=u.heroId&&u.equipped?GEAR.find(g=>g.id===save.inventory.find(r=>r.uid===u.equipped[0])?.gearId):null;const p=[],add=(type,pos,scale,col,rot=0,rotX=0,rotY=0)=>p.push([type,pos,scale,col,rot,rotX,rotY]);const c=u.color||0x6c9ba0,skin=0xeac69d,hair=u.hair||0x464956;
if(u.model==='slime'){add('ball',[0,.27,0],[.44,.34,.41],c);add('ball',[0,.22,.2],[.28,.16,.25],0x476b55);add('box',[0,.23,.38],[.24,.055,.025],0x243b35);for(const x of [-.2,0,.2])add('cone',[x,.36,.32],[.035,.12,.035],0xe7e4b0);for(const x of [-.15,.15]){add('ball',[x,.4,.32],[.065,.075,.04],0xffdf83);add('ball',[x,.4,.355],[.025,.035,.015],0x222b26);}for(const x of [-.27,.27])add('cone',[x,.59,-.04],[.1,.27,.1],0x6da675);}
else if(u.model==='flameSpirit'){add('cone',[0,.4,0],[.35,.78,.32],0xb6463a);add('ball',[0,.49,.05],[.25,.31,.25],c);for(const x of [-.28,.28]){add('cone',[x,.47,0],[.17,.58,.16],0xffa24d,x<0?-.35:.35);add('ball',[x*.55,.55,.24],[.05,.07,.04],0xffef9b);}add('cone',[0,.92,-.05],[.18,.42,.18],0xffd36d);add('box',[0,.34,.25],[.18,.05,.03],0x3b2729);}
else if(u.model==='wolf'||u.model==='dragon'){const dragon=u.model==='dragon',belly=dragon?0x547d79:0xc5d2d1;add('box',[0,.38,0],[dragon?.52:.44,.42,.7],c);add('cone',[0,.65,.31],[.29,.42,.32],c,-.25);add('box',[0,.54,.51],[.29,.19,.32],belly);add('box',[0,.46,.66],[.23,.08,.2],0x38434a);for(const x of [-.22,.22]){add('cone',[x,.91,.25],[.12,.27,.12],dragon?0xd2d6b0:0xdfe5e0);add('ball',[x*.65,.7,.54],[.045,.05,.03],dragon?0xff9a78:0xf5c372);add('cone',[x*.65,.41,.65],[.05,.12,.04],0xe9e5d4);for(const z of [-.27,.28]){add('cyl',[x,.17,z],[.095,.34,.095],c);add('cone',[x,.04,z+.13],[.05,.16,.05],0xc6d1c7,.55);}}add('cone',[0,.42,-.65],[.12,.55,.12],c,1.1);if(dragon){for(const x of [-.55,.55]){add('cone',[x,.69,-.12],[.42,.77,.11],0x649d91,x<0?-1:1);add('cone',[x*.75,1.01,-.12],[.16,.37,.09],0x9fc2a9,x<0?-.5:.5);}add('cone',[0,1.03,.18],[.1,.33,.1],0xd9c996);}}
else if(u.model==='spider'){add('ball',[0,.32,-.16],[.37,.28,.38],c);add('ball',[0,.27,.28],[.28,.24,.28],0x5b4659);for(let i=0;i<4;i++){const z=-.37+i*.21;for(const x of [-1,1]){add('cyl',[x*.36,.35,z],[.055,.65,.055],c,x*1.05);add('cyl',[x*.63,.12,z],[.035,.4,.035],0x574459,x*-.45);}}for(const x of [-.15,-.05,.05,.15])add('ball',[x,.38,.5],[.035,.04,.025],0xff8d65);for(const x of [-.12,.12])add('cone',[x,.08,.53],[.065,.2,.06],0xe2d2bc,Math.PI);add('cone',[0,.62,-.26],[.18,.3,.17],0x806487);}
else if(u.model==='golem'){add('box',[0,.56,0],[.59,.71,.46],c);add('box',[0,.63,.28],[.43,.42,.08],0x5d7474);add('rock',[0,1.04,0],[.28,.27,.26],0xa2b0aa);for(const x of [-.45,.45]){add('box',[x,.75,0],[.3,.28,.34],0x536969);add('box',[x*.98,.42,.03],[.23,.48,.27],c);add('rock',[x,.18,.15],[.24,.2,.27],0x536366);}for(const x of [-.18,.18])add('box',[x,.14,0],[.23,.28,.3],0x596f6b);add('rock',[0,.7,.34],[.13,.16,.07],0x71dfcb);for(const x of [-.11,.11])add('box',[x,1.07,.23],[.07,.05,.04],0x80f1dc);}
else if(u.model==='treant'){add('cyl',[0,.54,0],[.38,1,.35],c);add('rock',[0,.72,.31],[.25,.36,.11],0x385844);add('ball',[0,1.12,0],[.43,.34,.41],0x426c4e);for(const x of [-1,1]){add('cyl',[x*.49,.76,0],[.14,.83,.14],0x506c4c,x<0?-.65:.65);add('cyl',[x*.82,1.02,0],[.09,.45,.1],0x536d4d,x<0?-.95:.95);add('cone',[x*.94,1.22,0],[.07,.28,.07],0xa1b678,x<0?-.55:.55);add('ball',[x*.39,1.13,-.07],[.24,.27,.28],0x4b7452);add('cyl',[x*.28,.17,0],[.14,.38,.15],0x4b6045,x<0?-.3:.3);add('cone',[x*.48,.08,.22],[.09,.38,.1],0x6a7851,x<0?-.75:.75);add('ball',[x*.13,.83,.43],[.07,.1,.04],0xf5a264);}add('box',[0,.55,.42],[.26,.065,.05],0x1c3229);for(const x of [-.09,0,.09])add('cone',[x,.5,.47],[.025,.1,.025],0xc7d6a2,Math.PI);add('ball',[0,1.38,-.1],[.25,.22,.25],0x567f51);}
else if(u.model==='ghost'){add('cone',[0,.47,0],[.39,.88,.38],c);add('cone',[0,.96,-.07],[.32,.44,.29],0x43475e);add('ball',[0,.84,.04],[.2,.21,.2],0x73809b);for(const x of [-.1,.1]){add('ball',[x,.87,.24],[.045,.06,.025],0xf6a0a2);add('cyl',[x*3,.5,.05],[.055,.48,.055],c,x<0?-.6:.6);add('cone',[x*3.7,.2,.13],[.07,.24,.07],0x9fafd2,Math.PI);}add('cone',[0,.19,0],[.3,.33,.3],0x596481);}
else if(u.model==='arcacore'){add('rock',[0,.78,0],[.34,.44,.34],0x426e76);add('rock',[0,.79,0],[.25,.34,.25],0x96e5d8);add('rock',[0,.8,.29],[.12,.17,.07],0xf7e9b3);add('cone',[0,1.28,0],[.17,.43,.17],0xd7f4dd);add('cone',[0,.27,0],[.17,.43,.17],0x6bbdb8,Math.PI);for(let i=0;i<8;i++){const a=i*Math.PI/4,x=Math.cos(a)*.54,z=Math.sin(a)*.54;add('rock',[x,.78,z],[.09,.14,.09],i%2?0x98ced0:0xdac993);}for(const x of [-.56,.56]){add('cone',[x,.49,0],[.13,.43,.13],0x658e9a);add('rock',[x,1.05,0],[.1,.19,.1],0xc3f0e2);}for(const z of [-.56,.56])add('cone',[0,.74,z],[.11,.31,.11],0x7cb1ab);}
else if(u.heroId){detailedHeroParts(u,add,weaponGear);
if(u.heroId&&u.equipped){const worn=u.equipped.map(uid=>GEAR.find(g=>g.id===save.inventory.find(r=>r.uid===uid)?.gearId)),accent=[0x779b8a,0x82c5d4,0xc5a4df,0xf2dc9c];if(worn[0]){const hue=gearAura(worn[0]);add('rock',[.35,.72,.13],[.08,.11,.06],hue);add('box',[.35,.58,.19],[.045,.23,.035],hue);}if(worn[1]){const hue=gearAura(worn[1]);add('box',[0,.62,.3],[.27,.21,.045],hue);for(const x of [-.3,.3])add('rock',[x,.74,.03],[.11,.1,.14],hue);}for(const index of [2,3])if(worn[index])add('rock',[index===2?-.08:.08,.56,.35],[.06,.09,.04],gearAura(worn[index]));}
if((u.classLevel||0)>0){for(const x of [-.24,.24])add('box',[x,.65,0],[.18,.15,.27],0xe0c982);}if((u.classLevel||0)>1)add('cone',[0,1.21,0],[.12,.22,.12],0xf4da94);
}else{helmetEnemyParts(u,add);}

 if(weaponGear){const scale=weaponGear.kind==='bow'?.65:.52,root=weaponGear.kind==='sword'?[.3,.37,.44,.48][weaponGear.band]*scale:weaponGear.kind==='bow'?([.65,.92,1.23,1.43][weaponGear.band]/2+.12)*scale:.35;for(const part of gearParts(weaponGear)){const [kind,pos,size,color,rot]=part;add(kind,[.36+pos[0]*scale,.5-root+pos[1]*scale,.13+pos[2]*scale],size.map(v=>v*scale),color,rot);}}
 const variant=u.name?.replace(/^정예 /,'');
 if(!u.heroId&&!u.boss){
  if(variant==='붉은 진흙 슬라임')for(const [x,z] of [[-.24,.18],[.21,-.13]])add('rock',[x,.5,z],[.13,.12,.12],0x784f37);
  else if(variant==='모래 약탈자'){add('box',[0,.85,.24],[.33,.12,.08],0xe3c58b);add('cone',[.38,1.14,0],[.09,.3,.09],0xf0d69d);}
  else if(variant==='회오리 매'){add('cone',[0,.9,.36],[.1,.19,.29],0xe6c78b,Math.PI/2);for(const x of [-.43,.43])add('cone',[x,.66,-.2],[.28,.62,.07],0xd4e5cf,x<0?-.5:.5);}
  else if(variant==='늪지 사냥꾼')for(const x of [-.12,.12])add('cone',[x,.51,.39],[.07,.24,.06],0xe5dfb7,Math.PI);
  else if(variant==='잿불 정령')for(const [x,z] of [[-.32,.1],[.31,-.08]])add('cone',[x,.79,z],[.1,.38,.1],0xffd27b);
  else if(variant==='강철 척후병'){for(const x of [-.38,.38])add('rock',[x,.89,-.02],[.18,.13,.21],0xa5b4b9);add('cone',[0,1.34,0],[.12,.3,.12],0x74858e);}
  else if(variant==='사막 궁수'){add('box',[0,.94,.17],[.38,.16,.1],0xdfc28b);add('cone',[0,1.28,-.06],[.14,.28,.14],0xb98c58);}
  else if(variant==='물안개 유령')for(const [x,z] of [[-.34,.15],[.32,-.12]])add('ball',[x,.58,z],[.1,.17,.1],0xb5e9ed);
  else if(variant==='사암 골렘'){for(const x of [-.37,.37])add('rock',[x,1.08,0],[.18,.24,.17],0xe0c18b);add('rock',[0,1.3,0],[.12,.22,.12],0xf2d7a5);}
  else if(variant==='가시 덩굴병'||variant==='검은 숲 정령'){for(const x of [-.43,.43])add('cone',[x,.88,.07],[.11,.35,.11],variant==='검은 숲 정령'?0x97b3a6:0xc2a872,x<0?-.6:.6);}
  else if(variant==='황혼의 추적자')for(const x of [-.18,.18])add('ball',[x,.91,.27],[.06,.065,.035],0xef776e);
  else if(variant==='화염 포격병'){add('cyl',[.53,.6,.18],[.15,.52,.15],0x5b4c49,Math.PI/2);add('ball',[.53,.58,.48],[.1,.1,.08],0xffa361);}
  else if(variant==='심연의 파수꾼'){add('box',[0,.9,.31],[.36,.08,.05],0x8be6e5);for(const x of [-.34,.34])add('rock',[x,1.1,-.04],[.13,.2,.14],0x507b85);}
 }
 if(u.boss){const id=u.bossId||0;if(id===1){add('cone',[0,1.25,0],[.2,.34,.2],0xd76554);add('box',[.52,.55,.08],[.1,.77,.07],0xf4d1a2);}else if(id===2){for(const x of [-.32,.32])add('cone',[x,1.16,0],[.18,.4,.18],0xe3ecf4);}else if(id===3){for(const x of [-.4,.4])add('ball',[x,1.16,0],[.2,.18,.2],0xa0c47b);}else if(id===4){for(const x of [-.2,0,.2])add('rock',[x,1.29,0],[.1,.16,.1],0xb39dd2);}else if(id===5){for(const x of [-.44,.44]){add('cyl',[x,.87,-.06],[.16,.48,.16],0x454e55);add('ball',[x,.87,.2],[.1,.1,.04],0xffb96e);}}else if(id===6){for(const x of [-.32,.32]){add('cyl',[x,1.15,0],[.06,.5,.06],0x5e8b91);add('rock',[x,1.45,0],[.13,.19,.13],0x9aebed);}}else if(id===7){for(const x of [-.56,.56])add('cone',[x,.64,-.15],[.35,.78,.1],0x866baf,x<0?-1:1);}else if(id===8){for(const x of [-.22,0,.22])add('cone',[x,1.28,0],[.1,.28,.1],0xffd889);add('box',[0,.53,-.2],[.72,.68,.08],0x8a5e6a);}else if(id===9){for(const x of [-.47,.47])add('rock',[x,1.12,0],[.18,.25,.18],0xb5f3e6);}}
 const g=new THREE.Group(),body=new THREE.Mesh(bake(p),sharedMat);g.add(body);if(u.boss)body.scale.setScalar(1.5);else if(u.elite)body.scale.setScalar(1.16);g.userData.body=body;const ring=new THREE.Mesh(new THREE.RingGeometry(.34,.39,24),new THREE.MeshBasicMaterial({color:u.team==='ally'?0x8fe5b4:u.elite?0xffd378:0xf0a58c,transparent:true,opacity:.75,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.024;g.add(ring);const shadow=new THREE.Mesh(new THREE.CircleGeometry(.35,20),new THREE.MeshBasicMaterial({color:0x163338,transparent:true,opacity:.27,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.018;g.add(shadow);return g;}
function elevation(t){return t.height*.33;}
function toWorld(t){return new THREE.Vector3(t.x-(mapWidth(battle)-1)/2,elevation(t)+.02,t.z-(mapHeight(battle)-1)/2);}
function disposeGroup(g){while(g.children.length){const child=g.children[0];child.traverse(o=>{if(o.geometry&&!Object.values(geo).includes(o.geometry))o.geometry.dispose();if(o.material&&o.material!==sharedMat)o.material.dispose();});g.remove(child);}}
let inspectedEnemy=null,inspectedItem=null,lastHitReport=null;
function createUnitLabel(u){const el=document.createElement('div');el.className=`unit-label ${u.team}`;el.dataset.unitId=u.id;el.innerHTML='<div class="done"></div><div class="status-signs"></div><div class="hp-line"><div class="hp"><i></i></div><span class="hp-value"></span></div>';$('#labels').append(el);labelEls.set(u.id,el);return el;}
// Freeze the approach order for each enemy phase so later enemies cannot
// accelerate just because the front line has already moved this turn.
// v0.7.10: scale the active enemy front with the living party, not the chapter.
// Enemies outside the front receive fractional movement credits, saved on the
// unit itself. Existing saves without approachCredit begin with zero credit.
function enemyFrontlineLimit(){
 const n=alive('ally').length,mode=save.difficulty;
 if(getStage()?.chapter===0)return prologueRules(getStage()).first?1:2;
 if(mode==='story')return n<4?2:3;
 if(mode==='tactical')return n<=2?2:n===3?3:n===4?4:n===5?5:6;
 return n<=2?2:n===3?3:n===4?4:n===5?5:6;
}
function enemyRole(e){
 if(e.boss)return 'frontline';
 if(e.magic)return 'caster';
 if((e.range||1)>1)return 'ranged';
 if((e.move||0)>=5)return 'flanker';
 return 'frontline';
}
function enemyApproachPlan(){
 const allies=alive('ally'),enemies=alive('enemy'),ratios={};
 const distances=new Map(enemies.map(e=>[e.id,allies.length?Math.min(...allies.map(a=>dist(e,a))):Infinity]));
 // Keep ordinary troops in front and leaders in reserve. Freeze this order
 // throughout the phase; moving frontliners must not accelerate the reserves.
 const ranked=enemies.slice().sort((a,b)=>Number(!!(a.boss||a.elite))-Number(!!(b.boss||b.elite))||distances.get(a.id)-distances.get(b.id)||a.id.localeCompare(b.id));
 const front=Math.min(enemies.length,enemyFrontlineLimit());
 const mode=save.difficulty,tutorial=getStage()?.chapter===0,first=tutorial&&prologueRules(getStage()).first;
 const middle=tutorial?(first?.10:mode==='story'?.10:mode==='tactical'?.20:.15):mode==='story'?.10:mode==='tactical'?.30:.20;
 const rear=tutorial?(first?.10:.05):mode==='story'?.05:mode==='tactical'?.15:.10;
 for(let i=0;i<ranked.length;i++){
  const e=ranked[i],engaged=distances.get(e.id)<=1;
  // Adjacent allies trigger normal close defense. Being in long bow/magic
  // range alone never unlocks full movement; stationary attacks still work.
  const leaderWaiting=tutorial&&e.prologueLeader&&enemies.length>(battle.mapRules?.enemyCount||enemies.length)-2;
  ratios[e.id]=tutorial&&e.prologueLeader?(leaderWaiting&&!engaged?0:1):engaged?1:i<front?1:i<front+2?middle:rear;
 }
 return {version:15,round:battle.round,enemyIds:enemies.map(e=>e.id).sort().join('|'),front,ratios};
}
function enemyApproachPlanCurrent(){
 const plan=battle.enemyApproachPlan;
 return plan?.version===15&&plan.round===battle.round&&plan.enemyIds===alive('enemy').map(e=>e.id).sort().join('|')&&plan.front===Math.min(alive('enemy').length,enemyFrontlineLimit());
}
function enemyApproachRatio(e){
 if(!battle)return 0;
 if(battle.phase!=='enemy')return enemyApproachPlan().ratios[e.id]??.1;
 // Re-rank immediately if a frontliner dies; do not reset any saved credits.
 if(!enemyApproachPlanCurrent())battle.enemyApproachPlan=enemyApproachPlan();
 return battle.enemyApproachPlan.ratios[e.id]??.1;
}
function enemyMovementCredit(e){
 const max=Math.max(0,e.move+(e.status.speed?2:0)-(e.status.freeze?2:0));
 if(e.status.sleep||e.status.stun||max===0)return 0;
 // Carry fractional credit only, including when migrating old saves.
 // Unused whole points cannot be banked for a later full-speed reserve sprint.
 const previous=Number.isFinite(e.approachCredit)?Math.max(0,e.approachCredit):0;
 const stored=previous-Math.floor(previous);
 return Math.min(max,stored+max*enemyApproachRatio(e));
}
function enemyMoveBudget(e){return Math.floor(enemyMovementCredit(e)+1e-9);}
// Inspection shows full movement potential, never the hidden AI approach budget.
function enemyMoveRange(e){return movement(e);}

function inspectEnemy(e){if(busy||isTitle||e.team!=='enemy'||e.hp<=0)return;inspectedItem=null;inspectedEnemy=e.id;preview=null;sfx();refreshUI();refreshHighlights();}
function renderEnemyInfo(e){const s=basic(e),p=e.boss?BOSS_PROFILES[e.bossId||getStage().chapter]:null,bossStep=(battle.round-1)%5,bossDetails=p?`<span>보스 패턴 ${bossStep+1}/5 · ${['기본 공격',p.wave,MONSTERS[p.summon].name+' 소환',p.finisher+' 예고',p.finisher][bossStep]}</span><span>${ELEMENT[p.element]} 공격 · 범위 공격 명중 시 50% ${STATUS[p.status]} · 궁극기 예고 반경 ${p.radius}칸</span>`:'';$('#panel').innerHTML=`<div class="party-strip">${alive('ally').map(v=>`<button class="party-chip" data-inspect-ally="${v.id}">${v.name}<small>${v.acted?'✓':''}</small></button>`).join('')}</div><div class="unitrow"><div class="portrait enemy-portrait">${portraitHTML(e)}</div><div class="unitinfo"><div class="unitname">${e.name}<small>Lv.${e.level}${e.boss?' · 보스':''}</small></div><div class="bars"><div class="statbar"><div class="numbers"><span>HP</span><span>${Math.ceil(e.hp)} / ${e.maxHp}</span></div><div class="track"><i style="width:${e.hp/e.maxHp*100}%"></i></div></div></div></div></div>${beneficialInfoHTML(e)}<div class="enemy-details" id="enemyInfo"><span>공격 ${e.magic?'마법':'물리'} · ${ELEMENT[s.element]||'◇ 무속성'}${e.statusAttack?' · '+STATUS[e.statusAttack]:''} / <b>본체 ${ELEMENT[e.element]||'◇ 무속성'}</b></span><span>${elementDetails(e.element)}</span><span>추천 공격: ${monsterAdvice(e.element)}</span>${bossDetails}</div><div class="turnrow"><button class="endturn" id="closeEnemyInfo">아군으로 돌아가기</button></div>`;$('#panel').querySelectorAll('[data-inspect-ally]').forEach(b=>b.onclick=()=>selectUnit(battle.units.find(v=>v.id===b.dataset.inspectAlly)));$('#closeEnemyInfo').onclick=()=>{inspectedEnemy=null;inspectedItem=null;refreshUI();refreshHighlights();};}
function forecastHP(a,t,s,center=t){
 const e=estimate(a,t,s,center);
 if(['buff','cleanse','taunt'].includes(s.type))return `<span class="forecast-unit">${t.name}</span> · ${s.name}`;
 if(s.type==='heal')return `<span class="forecast-unit">${t.name}</span> · 회복 +${e.damage} · HP ${Math.ceil(t.hp)}→${Math.min(t.maxHp,t.hp+e.damage)}`;
 const low=Math.max(1,Math.round(e.damage*.95)),high=Math.max(1,Math.round(e.damage*1.05));
 const hpLow=Math.max(0,Math.ceil(t.hp-high)),hpHigh=Math.max(0,Math.ceil(t.hp-low));
 const bonuses=[];
 if(s.type==='physical'&&(e.directionBonus||e.neroDirectionBonus)){
  const label=e.directionZone==='rear'?'후면':e.directionZone==='side'?'측면':'정면';
  const bonus=Math.round(((e.directionBonus||0)+(e.neroDirectionBonus||0))*1000)/10;
  bonuses.push(`${label} +${bonus}%`);
 }
 const mult=e.elementMultiplier??1;
 if(mult!==1)bonuses.push(`속성 ${mult>1?'+':''}${Math.round((mult-1)*100)}%`);
 const hit=Math.round(e.hit*100);
 const extra=[...bonuses,hit<100?`명중 ${hit}%`:null].filter(Boolean).join(' · ');
 return `<span class="forecast-unit">${t.name}</span> · <b class="forecast-damage">피해 ${low}~${high}</b>${extra?` <span class="forecast-bonus">(${extra})</span>`:''} · <span class="forecast-health">HP ${Math.ceil(t.hp)}→${hpLow}~${hpHigh}</span>`;
}

function makeWaterSurface(places){if(!places.length)return null;const pieces=places.map(p=>{const g=new THREE.PlaneGeometry(.94,.94,8,8);g.rotateX(-Math.PI/2);g.translate(p.x,p.y-.075,p.z);return g;}),geometry=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());const material=new THREE.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:`uniform float uTime; varying vec2 vUv; void main(){vUv=uv;vec3 wave=position;wave.y+=.012*sin(uv.x*16.0+uv.y*10.0-uTime*2.0);gl_Position=projectionMatrix*modelViewMatrix*vec4(wave,1.0);}`,fragmentShader:`uniform float uTime; varying vec2 vUv; void main(){float current=sin(vUv.y*20.0+sin(vUv.x*6.0+uTime*.55)*1.2-uTime*2.1);float shimmer=sin(vUv.x*12.0-vUv.y*8.0+uTime*1.1);float crest=smoothstep(.72,.98,current)*(.48+.18*shimmer);float depth=.48+.17*sin(vUv.x*8.0+vUv.y*6.0-uTime*.6);vec3 water=mix(vec3(.025,.25,.38),vec3(.08,.56,.68),depth);water=mix(water,vec3(.72,.91,.88),crest);gl_FragColor=vec4(water,1.0);}`,side:THREE.DoubleSide});return new THREE.Mesh(geometry,material);}
function buildScene(){clearElementalAuras();clearStatusVisuals();facingLayer.replaceChildren();criticalShot=null;visualSlow=1;activeProjectile=null;inspectedEnemy=null;inspectedItem=null;lastHitReport=null;disposeGroup(terrainGroup);waterSurface=null;disposeGroup(unitGroup);disposeGroup(highlightGroup);disposeGroup(fxGroup);particles=[];tileMeshes.length=0;models.clear();labelEls.clear();$('#labels').innerHTML='';
const colors={grass:0x85b08b,forest:0x669a7b,swamp:0x677f77,water:0x20576a,stone:0x9bafa7,bridge:0xbda67e,dirt:0xb09269,desert:0xd2b274,scrub:0xa19a67,sand:0xe0c58c};const geom=new THREE.BoxGeometry(.975,1,.975);const ca=new Float32Array(geom.attributes.position.count*3);for(let i=0;i<geom.attributes.position.count;i++){const f=geom.attributes.normal.getY(i)>.5?1:.64;ca.set([f,f,f],i*3);}geom.setAttribute('color',new THREE.BufferAttribute(ca,3));const tilesMesh=new THREE.InstancedMesh(geom,new THREE.MeshLambertMaterial({vertexColors:true}),battle.tiles.length),dummy=new THREE.Object3D(),waterPlaces=[];battle.tiles.forEach((t,i)=>{const p=toWorld(t),height=.4+elevation(t);dummy.position.set(p.x,height/2-.4-(t.terrain==='water'?.14:0),p.z);dummy.scale.set(1,height,1);dummy.updateMatrix();tilesMesh.setMatrixAt(i,dummy.matrix);tilesMesh.setColorAt(i,new THREE.Color(colors[t.terrain]));if(t.terrain==='water')waterPlaces.push(p);});tilesMesh.instanceMatrix.needsUpdate=true;tilesMesh.userData.tiles=true;terrainGroup.add(tilesMesh);tileMeshes.push(tilesMesh);waterSurface=makeWaterSurface(waterPlaces);if(waterSurface)terrainGroup.add(waterSurface);
const trees=[],rocks=[],wetland=[],planks=[],rand=seeded(battle.mapSeed??getStage()?.seed??4);for(const t of battle.tiles){const p=toWorld(t);if(t.terrain==='forest'){trees.push(['cyl',[p.x-.23,p.y+.23,p.z-.23],[.055,.48,.055],0x756c4d]);trees.push(['cone',[p.x-.23,p.y+.65,p.z-.23],[.32,.72,.32],0x3a6f5d]);trees.push(['cone',[p.x-.23,p.y+.92,p.z-.23],[.24,.5,.24],0x5d9270]);}else if(t.terrain==='swamp'){wetland.push(['cyl',[p.x-.08,p.y+.01,p.z+.04],[.32,.018,.32],0x476d68]);for(const [x,z] of [[-.31,-.26],[.25,-.1],[.32,.28]])wetland.push(['cyl',[p.x+x,p.y+.15,p.z+z],[.012,.28,.012],0x9ebc7b]);}else if(t.terrain==='scrub'){for(const [x,z] of [[-.27,-.18],[.21,.14]])wetland.push(['cone',[p.x+x,p.y+.12,p.z+z],[.09,.24,.09],0x84935f]);}else if(t.terrain==='sand'||t.terrain==='desert'){for(const [x,z] of [[-.25,.2],[.18,-.2]])rocks.push(['rock',[p.x+x,p.y+.025,p.z+z],[.14,.035,.11],t.terrain==='sand'?0xf0d8a3:0xc7a572]);}else if(t.terrain==='bridge'){const alongZ=(t.z>0&&tile(t.x,t.z-1)?.terrain==='water')||(t.z<mapHeight(battle)-1&&tile(t.x,t.z+1)?.terrain==='water');for(const offset of [-.31,0,.31])planks.push(['box',[p.x+(alongZ?0:offset),p.y+.035,p.z+(alongZ?offset:0)],alongZ?[.86,.045,.25]:[.25,.045,.86],0xdbc39a]);}if(t.decor==='rock'||(!battle.mapRules&&t.terrain!=='water'&&rand()<.13)){rocks.push(['rock',[p.x-.35,p.y+.07,p.z-.32],[.1,.12,.12],battle.mapRules?.theme==='ochre'?0xbda87d:0xa6b3a0]);}}
if(trees.length)terrainGroup.add(new THREE.Mesh(bake(trees),sharedMat));if(rocks.length)terrainGroup.add(new THREE.Mesh(bake(rocks),sharedMat));if(wetland.length)terrainGroup.add(new THREE.Mesh(bake(wetland),sharedMat));if(planks.length)terrainGroup.add(new THREE.Mesh(bake(planks),sharedMat));
// Ancient gate, houses and crystals sit beyond playable tiles.
const edgeX=mapWidth(battle)/2,edgeZ=mapHeight(battle)/2,prop=[];if(getStage()?.chapter>=6){for(const x of [-edgeX+1,edgeX-1]){prop.push(['box',[x,1,-edgeZ-.3],[.45,2,.5],0x8faaa3]);prop.push(['rock',[x,2.15,-edgeZ-.3],[.24,.48,.24],0x85ddce]);}}else{prop.push(['box',[-edgeX+.7,.2,-edgeZ-.55],[1.2,.85,.9],0xd1cbb0]);prop.push(['cone',[-edgeX+.7,.9,-edgeZ-.55],[.94,.7,.78],battle.mapRules?.theme==='ochre'?0x947b60:0x6c8980]);for(const x of [-edgeX-.4,edgeX+.4]){prop.push(['cyl',[x,.2,0],[.1,1,.1],0x706b4c]);prop.push(['cone',[x,1,0],[.6,1.4,.6],battle.mapRules?.theme==='ochre'?0x8c9261:0x477f65]);}}
terrainGroup.add(new THREE.Mesh(bake(prop),sharedMat));
for(const u of battle.units){const model=figure(u);model.position.copy(toWorld(tile(u.x,u.z)));model.rotation.y=(2-u.dir)*Math.PI/2;model.visible=u.hp>0;unitGroup.add(model);models.set(u.id,model);createUnitLabel(u);}
refreshLoot();zoom=mapWidth(battle)!==mapHeight(battle)?1.18:1;pan.set(0,0,0);angle=targetAngle=Math.PI/4;resize();refreshHighlights();}
function resize(){const r=viewport.getBoundingClientRect();renderer.setSize(r.width,r.height,false);const aspect=r.width/r.height,span=(battle?.size||8)*.79;camera.left=-span;camera.right=span;camera.top=span/aspect;camera.bottom=-span/aspect;camera.updateProjectionMatrix();}
new ResizeObserver(resize).observe(viewport);
// CSS scaling changes screen pixels without changing the observed layout size.
window.addEventListener('tactics-layout',resize);
function marker(t,color,opacity=.5,size=.9){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(size,size),new THREE.MeshBasicMaterial({color,transparent:true,opacity,depthWrite:false,side:THREE.DoubleSide}));mesh.rotation.x=-Math.PI/2;mesh.position.copy(toWorld(t));mesh.position.y+=.028;highlightGroup.add(mesh);return mesh;}
// Draw only exposed edges of the range, including holes, at each tile's height.
// Triangle ribbons give reliable line thickness on iPhone/WebGL (linewidth does not).
function rangeBoundaryEdges(keys){
 const edges=[];
 for(const k of keys){const [x,z]=k.split(',').map(Number);for(const [dx,dz]of [[-1,0],[1,0],[0,-1],[0,1]])if(!keys.has(key(x+dx,z+dz)))edges.push({x,z,dx,dz});}
 return edges;
}
function drawRangeBoundary(keys,color=0xb1f2ff){
 const edges=rangeBoundaryEdges(keys);
 for(const [width,tint,lift]of [[.085,0x082e55,.064],[.038,color,.066]]){
  const positions=[];
  for(const {x,z,dx,dz}of edges){const p=toWorld(tile(x,z)),y=p.y+lift;
   const ax=p.x+(dx?dx*.5:-.5),az=p.z+(dz?dz*.5:-.5),bx=p.x+(dx?dx*.5:.5),bz=p.z+(dz?dz*.5:.5),ox=dx?width/2:0,oz=dz?width/2:0;
   positions.push(ax-ox,y,az-oz,bx-ox,y,bz-oz,bx+ox,y,bz+oz,ax-ox,y,az-oz,bx+ox,y,bz+oz,ax+ox,y,az+oz);
  }
  if(!positions.length)continue;
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  const mesh=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color:tint,transparent:true,opacity:1,side:THREE.DoubleSide,depthWrite:false}));mesh.renderOrder=2;mesh.userData.rangeBoundary=true;highlightGroup.add(mesh);
 }
}
function drawMovementRange(u){
 const keys=new Set(movement(u).keys());
 for(const k of keys){const [x,z]=k.split(',').map(Number),m=marker(tile(x,z),0x147de8,.72,.96);m.position.y+=.012;m.userData.movementRange=true;}
 drawRangeBoundary(keys);
}
function refreshHighlights(){disposeGroup(highlightGroup);if(!battle)return;const stage=getStage();for(const t of battle.danger||[]){const m=marker(tile(t.x,t.z),0xf18c61,.8);m.position.y+=.055;m.renderOrder=3;}const enemy=battle.units.find(v=>v.id===inspectedEnemy&&v.hp>0);if(enemy&&!isTitle){for(const k of enemyMoveRange(enemy).keys()){const [x,z]=k.split(',').map(Number);const m=marker(tile(x,z),0x8c233b,.74);m.userData.enemyRange=true;}marker(tile(enemy.x,enemy.z),0xffeee0,.85);return;}const selectedItem=battle.pickups?.find(v=>v.id===inspectedItem&&!v.collected);if(selectedItem&&!isTitle){marker(tile(selectedItem.x,selectedItem.z),0xffdc75,.85);return;}const u=unit();if(battle.pendingFacing)return;if(!u||u.hp<=0||isTitle||battle.phase!=='player')return;if((mode==='move'&&!u.moved)||preview?.type==='move')drawMovementRange(u);const selectedMarker=marker(tile(u.x,u.z),0xffffff,.45);selectedMarker.position.y+=.035;selectedMarker.renderOrder=3;if(preview){if(preview.type==='move'){for(const t of pathfind(u,preview.tile).slice(1)){const m=marker(t,0xc7faff,.9,.76);m.position.y+=.045;m.renderOrder=3;}}else{for(const t of areaTiles(preview.tile,skill||basic(u)))marker(t,['heal','buff','cleanse'].includes((skill||{}).type)?0x94f5af:0xffae8e,.75);}return;}
if(mode==='attack'||mode==='skill'){const s=skill||basic(u);for(const t of battle.tiles)if(inRange(u,t,s))marker(t,['heal','buff','cleanse'].includes(s.type)?0x19c48e:0xe34c79,.57,.94);}}
function project(pos){const v=pos.clone().project(camera);return {x:(v.x*.5+.5)*viewport.clientWidth,y:(-v.y*.5+.5)*viewport.clientHeight};}
function floating(u,text,color='#fff3cc'){const m=models.get(u.id);if(!m)return;const p=project(m.position.clone().add(new THREE.Vector3(0,1.1,0))),el=document.createElement('div');el.className='float';el.textContent=text;el.style.left=`${p.x}px`;el.style.top=`${p.y}px`;el.style.color=color;viewport.append(el);setTimeout(()=>el.remove(),1100);}
let activeSpell=null;
// v0.6.61: persistent status visuals, facing selection and attack cinematics.
let criticalShot=null,visualSlow=1,activeProjectile=null;
const statusGroup=new THREE.Group(),statusModels=new Map();scene.add(statusGroup);
const elementalAuraGroup=new THREE.Group(),elementalAuras=new Map();scene.add(elementalAuraGroup);
function clearElementalAuras(){disposeGroup(elementalAuraGroup);elementalAuras.clear();}
// v0.7.1: One shared elemental aura for combat, codex thumbnails and codex details.
// Keep the visuals attached to the monster model and update them using the same clock.
function makeElementalAura(u,parent=elementalAuraGroup){
 const kind=elementFamily(u.element);
 if(!['fire','water','wind'].includes(kind))return null;
 const group=new THREE.Group();
 const power=u.boss?1.5:u.elite?1.2:1;
 // v0.7.2 visual tuning: retain fire density; halve water/wind density.
 // Shared by combat and codex previews to keep their appearance consistent.
 const fireCount=u.boss?14:u.elite?11:8;
 const count=kind==='fire'?fireCount:Math.ceil(fireCount*.5);
 const palettes={fire:[0xff3428,0xff7b20,0xffdc39,0xffac2c],water:[0x2aaaff,0x66d8ff,0xc5f7ff],wind:[0x79dcff,0xf2fdff,0xa9ecff]};
 for(let i=0;i<count;i++){
  let geometry;
  if(kind==='fire')geometry=new THREE.ConeGeometry(.072,.205,5);
  else if(kind==='water'){
   // Teardrop, not an orbiting orb: rounded bottom with a narrow pointed top.
   geometry=new THREE.LatheGeometry([
    new THREE.Vector2(0,-.093),new THREE.Vector2(.046,-.079),
    new THREE.Vector2(.073,-.031),new THREE.Vector2(.061,.025),
    new THREE.Vector2(.033,.076),new THREE.Vector2(0,.133)
   ],7);
  }else{
   // A short curved ribbon reads as wind even in the small encyclopedia thumbnail.
   const curve=new THREE.CatmullRomCurve3([
    new THREE.Vector3(-.19,-.025,0),new THREE.Vector3(-.095,.075,.018),
    new THREE.Vector3(.025,.10,0),new THREE.Vector3(.16,.035,-.012),
    new THREE.Vector3(.23,.055,0)
   ]);
   geometry=new THREE.TubeGeometry(curve,9,.022,4,false);
  }
  const color=palettes[kind][i%palettes[kind].length];
  const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.88,depthWrite:false,side:THREE.DoubleSide,depthTest:true});
  const m=new THREE.Mesh(geometry,material);
  m.userData={index:i,phase:(i*.61803398875)%1};
  group.add(m);
 }
 group.userData={kind,power,bodyHeight:u.boss?1.8:u.model==='golem'?1.22:1.05};
 parent.add(group);
 return group;
}
function animateElementalAura(group,ms){
 if(!group)return;
 const {kind,power,bodyHeight}=group.userData;
 const count=group.children.length;
 group.children.forEach((m,i)=>{
  const seed=m.userData.phase;
  const theta=i*2.39996323;
  if(kind==='water'){
   // Continuous gravity-driven drops: originate near the upper body, run down
   // its sides and disappear at ground level, then restart at the top.
   const progress=(ms*.00046+seed)%1;
   const h=bodyHeight*(.94-.89*progress);
   const side=(i%2?1:-1);
   const lateral=.21+(i%3)*.065;
   const drift=progress*.055;
   m.position.set(side*(lateral+drift)+Math.sin(theta)*.06,h,
    .12+Math.cos(theta)*.20);
   m.rotation.set(0,0,side*(.07+.15*progress));
   const sz=(i%3===0?1.23:1)*(.85+.25*Math.sin(progress*Math.PI));
   m.scale.set(sz,1.13+progress*.42,sz);
   m.material.opacity=progress>.88?.94*(1-progress)/.12:.86+.10*Math.sin(progress*Math.PI);
  }else if(kind==='fire'){
   const progress=(ms*.00036+seed)%1;
   const r=(.29+.06*Math.sin(theta))*power;
   m.position.set(Math.cos(theta)*r,.15+progress*bodyHeight*.88,Math.sin(theta)*r);
   m.rotation.z=Math.sin(ms*.005+i)*.24;
   m.scale.set(.95,1.1+Math.sin(ms*.009+i)*.25,.95);
   m.material.opacity=(.80+.15*Math.abs(Math.sin(ms*.006+i)))*(progress>.84?(1-progress)/.16:1);
  }else{
   const t=ms*.0015+theta;
   const r=(.38+.055*Math.sin(t*.7+i))*power;
   m.position.set(Math.cos(t)*r,.20+((ms*.00024+seed)%1)*bodyHeight*.83,Math.sin(t)*r);
   m.rotation.set(Math.sin(t*.8)*.20,-t+.65,Math.cos(t)*.30);
   m.scale.setScalar(1.0+power*.24);
   m.material.opacity=.75+.18*Math.abs(Math.sin(t*1.4));
  }
 });
}
function updateElementalAuras(ms){
 const wanted=new Set();
 for(const u of battle?.units||[]){
  if(isTitle||u.team!=='enemy'||u.hp<=0)continue;
  const kind=elementFamily(u.element);
  if(!['fire','water','wind'].includes(kind))continue;
  const model=models.get(u.id);if(!model)continue;
  wanted.add(u.id);
  let group=elementalAuras.get(u.id);
  if(!group){group=makeElementalAura(u);elementalAuras.set(u.id,group);}
  group.position.copy(model.position);
  animateElementalAura(group,ms);
 }
 for(const [id,g] of elementalAuras)if(!wanted.has(id)){
  elementalAuraGroup.remove(g);disposeGroup(g);elementalAuras.delete(id);
 }
}

const STATUS_COLORS={burn:0xff792b,poison:0x96e25a,freeze:0x9bddff,stun:0xffe877,sleep:0xc0a2f0,silence:0xec81c0};
const STATUS_SIGNS={burn:'🔥',poison:'☠',freeze:'❄',stun:'⚡',sleep:'Zzz',silence:'🔇',atk:'⚔↑',def:'🛡↑',speed:'👟↑',eva:'💨',fortress:'🏰',counter:'🔥🛡'};
function clearStatusVisuals(){disposeGroup(statusGroup);statusModels.clear();}
function statusMesh(g,geometry,color,position){const m=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color,transparent:true,opacity:.8,depthWrite:false}));m.position.copy(position);g.add(m);return m;}
function makeStatusVisual(u,k,parent=statusGroup){const g=new THREE.Group();g.userData={unitId:u.id,status:k};const color=STATUS_COLORS[k],bodyHeight=u.boss?1.8:1.1;
 for(let i=0;i<(k==='silence'?2:k==='stun'?3:4);i++){const a=i*Math.PI/2,p=new THREE.Vector3(Math.cos(a)*.3,k==='freeze'?.17:k==='sleep'||k==='stun'?bodyHeight+.18:.45+i*.12,Math.sin(a)*.3);
 const geom=k==='burn'||k==='freeze'?new THREE.ConeGeometry(k==='burn'?.09:.13,k==='burn'?.28:.45,5):k==='silence'?new THREE.TorusGeometry(.25,.025,4,20):k==='stun'?new THREE.BoxGeometry(.05,.22,.04):new THREE.SphereGeometry(.065,6,4);
 const m=statusMesh(g,geom,color,p);m.userData.home=p.clone();if(k==='silence'){m.position.set(0,bodyHeight*.72,.22);m.rotation.z=i*Math.PI/2;}if(k==='stun')m.rotation.z=i*.7;
 }parent.add(g);return g;}
function updateStatusVisuals(ms){const wanted=new Set();for(const u of battle?.units||[]){if(isTitle||u.hp<=0)continue;const model=models.get(u.id);if(!model)continue;for(const k of Object.keys(STATUS_COLORS)){if(!u.status[k])continue;const id=u.id+':'+k;wanted.add(id);let g=statusModels.get(id);if(!g){g=makeStatusVisual(u,k);statusModels.set(id,g);}g.position.copy(model.position);const pulse=u.visualPulse?.kind===k&&performance.now()<u.visualPulse.until;g.scale.setScalar(pulse?1.35:1);g.children.forEach((m,i)=>{const home=m.userData.home;if(k==='burn'){m.position.y=home.y+Math.sin(ms*.012+i)*.045;m.scale.y=.8+Math.sin(ms*.017+i)*.25;}else if(k==='poison'){m.position.y=home.y+(ms*.0004+i*.2)% .6;m.scale.setScalar(.7+Math.sin(ms*.006+i)*.25);}else if(k==='sleep'){m.position.y=home.y+Math.sin(ms*.003+i)*.08;}else if(k==='stun'){m.rotation.z=ms*.005+i*.7;}else if(k==='silence'){m.rotation.y=ms*.002;}m.material.opacity=pulse?.95:.62+Math.sin(ms*.006+i)*.15;});}}
 for(const [id,g]of statusModels)if(!wanted.has(id)){statusGroup.remove(g);disposeGroup(g);statusModels.delete(id);}
}
async function statusPulse(u,k,damage=0,release=false,onImpact=null){u.visualPulse={kind:k,until:performance.now()+650/save.settings.speed};const model=models.get(u.id);if(!model)return;const root=new THREE.Group();root.position.copy(model.position);statusGroup.add(root);const m=statusMesh(root,new THREE.TorusGeometry(.36,.045,5,24),release?0xb9fff1:STATUS_COLORS[k]||0xc6eaff,new THREE.Vector3(0,.6,0));m.rotation.x=Math.PI/2;if(k==='burn'&&!release)spellSound('fire',true);else sfx(release?'heal':'magic');if(damage||release)burst(tile(u.x,u.z),STATUS_COLORS[k]||0xc6eaff,damage?12:8);if(onImpact)onImpact();if(damage)floating(u,`${STATUS_SIGNS[k]} −${damage}`,k==='burn'?'#ffbd74':'#c4fb8f');else if(!release)floating(u,`${STATUS_SIGNS[k]} ${STATUS[k]}`, '#e8e5ff');await tween(420,q=>{if(damage)model.userData.hitLean=Math.sin(q*Math.PI)*.12;m.scale.setScalar(1+q*1.7);m.position.y=.35+q*.6;m.material.opacity=1-q;});model.userData.hitLean=0;statusGroup.remove(root);disposeGroup(root);delete u.visualPulse;}
function criticalScale(q){return 1+2*clamp(q,0,1);}
function advanceCritical(amount){if(!criticalShot||criticalShot.returning)return;criticalShot.elapsed+=amount;criticalShot.progress=clamp(criticalShot.elapsed/criticalShot.preDuration,0,1);visualSlow=1-.8*criticalShot.progress;}
function criticalImpact(){if(!criticalShot||criticalShot.returning)return;criticalShot.progress=1;criticalShot.returning=true;criticalShot.returnStart=performance.now();visualSlow=1;}
function faceEnemy(u){const target=alive('ally').sort((a,b)=>dist(u,a)-dist(u,b))[0];if(target){u.dir=facing(u,target);const m=models.get(u.id);if(m)m.rotation.y=(2-u.dir)*Math.PI/2;}}
const facingLayer=document.createElement('div');facingLayer.id='facingLayer';viewport.append(facingLayer);
const DIR_VECTORS=[[0,-1],[1,0],[0,1],[-1,0]],DIR_NAMES=['북쪽','동쪽','남쪽','서쪽'];
function beginFacing(u){if(!u||u.hp<=0||battle.phase!=='player'||checkEnd())return;selected=u.id;inspectedEnemy=inspectedItem=null;preview=skill=null;battle.pendingFacing=u.id;persist();refreshUI();refreshHighlights();}
function finishFacing(dir){if(busy||battle?.phase!=='player'||!battle.pendingFacing)return;const u=battle.units.find(v=>v.id===battle.pendingFacing);if(!u)return;u.turnFinished=true;u.dir=Number.isInteger(dir)?dir:u.dir;models.get(u.id).rotation.y=(2-u.dir)*Math.PI/2;delete battle.pendingFacing;facingLayer.replaceChildren();persist();refreshUI();refreshHighlights();if(u.acted&&u.moved)afterAction();}
function drawFacingUI(){const u=battle.units.find(v=>v.id===battle.pendingFacing);if(!u||u.hp<=0){delete battle.pendingFacing;return;}selected=u.id;$('#panel').innerHTML=`<div class="unitrow"><div class="portrait">${portraitHTML(u)}</div><div><div class="unitname">${u.name}</div><p>마지막으로 바라볼 방향을 선택하세요.</p></div></div><p class="hint">전장의 네 화살표를 탭하세요. 추가 이동·행동은 소모하지 않습니다.${!u.moved?' 이후 남은 이동을 사용할 수 있습니다.':''}</p><button class="endturn" id="keepFacing">현재 방향 유지</button>`;$('#keepFacing').onclick=()=>finishFacing();facingLayer.replaceChildren();DIR_VECTORS.forEach((v,i)=>{const b=document.createElement('button');b.className='facing-arrow';b.dataset.facing=i;b.setAttribute('aria-label',DIR_NAMES[i]+' 바라보기');b.textContent='➤';b.onclick=e=>{e.stopPropagation();finishFacing(i);};facingLayer.append(b);});}
function positionFacingUI(){facingLayer.hidden=!battle?.pendingFacing||isTitle||busy;const u=battle?.units.find(v=>v.id===battle.pendingFacing),m=u&&models.get(u.id);if(!m)return;const center=project(m.position.clone().add(new THREE.Vector3(0,.25,0)));if(center.x<84||center.x>viewport.clientWidth-84||center.y<108||center.y>viewport.clientHeight-84)pan.copy(m.position);for(const b of facingLayer.children){const i=+b.dataset.facing,[x,z]=DIR_VECTORS[i],p=project(m.position.clone().add(new THREE.Vector3(x*.9,.25,z*.9))),dx=p.x-center.x,dy=p.y-center.y,len=Math.hypot(dx,dy)||1,r=58;const px=center.x+dx/len*r,py=center.y+dy/len*r;b.style.left=clamp(px,25,viewport.clientWidth-25)+'px';b.style.top=clamp(py,28,viewport.clientHeight-28)+'px';b.style.transform=`translate(-50%,-50%) rotate(${Math.atan2(dy,dx)}rad)`;b.classList.toggle('current',i===u.dir);}}
function isArrowAttack(u,s){return s.type==='physical'&&(u.heroId==='sera'||u.model==='archer');}
function usesProjectile(u,s,melee){return isArrowAttack(u,s)||!melee&&s.type==='physical'&&s.range>1||s.type==='magic'&&!['파이어','파이어 스톰','메테오','썬더'].includes(s.name)||['heal','cleanse','buff'].includes(s.type)&&s.range>0;}
const globalFxGroup=fxGroup,globalModels=models,globalToWorld=toWorld,getGlobalParticles=()=>particles;
async function flyProjectile(u,t,s,ctx=null){const fxGroup=ctx?.fx||globalFxGroup,models=ctx?.models||globalModels,toWorld=ctx?.world||globalToWorld;const arrow=isArrowAttack(u,s),start=models.get(u.id).position.clone().add(new THREE.Vector3(0,.85,0)),end=toWorld(t).add(new THREE.Vector3(0,.65,0)),color={fire:0xff872c,ice:0x87ddff,water:0x63cafa,wind:0x84f4c3,thunder:0xffe58d,light:0xffed9c,dark:0xb38cff}[s.element]||0xffd786,group=new THREE.Group();fxGroup.add(group);
 const count=arrow&&s.area?5:1;for(let i=0;i<count;i++){const shot=new THREE.Group();shot.userData.offset=(i-(count-1)/2)*.12;group.add(shot);if(arrow){const shaft=statusMesh(shot,new THREE.CylinderGeometry(.026,.026,.65,5),0xe9cf8d,new THREE.Vector3());shaft.rotation.x=Math.PI/2;const tip=statusMesh(shot,new THREE.ConeGeometry(.085,.2,5),s.name==='독화살'?0x8ddd66:0xd9eaf2,new THREE.Vector3(0,0,.4));tip.rotation.x=Math.PI/2;for(const x of [-.065,.065])statusMesh(shot,new THREE.BoxGeometry(.08,.045,.15),0xf7f0ce,new THREE.Vector3(x,0,-.24));}else{statusMesh(shot,new THREE.SphereGeometry(.15,8,6),color,new THREE.Vector3());statusMesh(shot,new THREE.TorusGeometry(.23,.025,4,20),color,new THREE.Vector3());}
 for(let j=0;j<5;j++){const trail=statusMesh(shot,new THREE.SphereGeometry(.04+(5-j)*.008,5,4),color,new THREE.Vector3(0,0,-.18-j*.12));trail.material.opacity=.65-j*.1;}}
 if(!ctx)activeProjectile={kind:arrow?'arrow':'magic',element:s.element,source:u.id,target:{x:t.x,z:t.z},progress:0};if(!ctx)sfx(arrow?'swing':'magic');let previous=start.clone();await tween(500+dist(u,t)*55,q=>{if(!ctx)activeProjectile.progress=q;for(const shot of group.children){shot.position.lerpVectors(start,end,q);shot.position.y+=Math.sin(q*Math.PI)*(arrow?.5:.25);shot.position.x+=shot.userData.offset*Math.sin(q*Math.PI);const ahead=start.clone().lerp(end,Math.min(1,q+.02));ahead.y+=Math.sin(Math.min(1,q+.02)*Math.PI)*(arrow?.5:.25);shot.lookAt(q>=.99?end.clone().add(end.clone().sub(previous)):ahead);previous.copy(shot.position);}},ctx);fxGroup.remove(group);disposeGroup(group);if(!ctx)activeProjectile=null;}
const combatStyle=document.createElement('style');combatStyle.textContent=`#facingLayer{position:absolute;inset:0;pointer-events:none;z-index:12}.facing-arrow{position:absolute;width:48px;height:48px;min-height:48px;border:2px solid transparent;border-radius:50%;background:transparent;color:#fff;font-size:30px;pointer-events:auto;touch-action:manipulation;padding:0;box-shadow:none;text-shadow:1px 1px 2px #132d35,-1px -1px 2px #132d35,0 0 4px #132d35}.facing-arrow:hover,.facing-arrow:active,.facing-arrow.current{background:transparent}.facing-arrow.current{color:#baf2d0}.facing-arrow:focus-visible{outline:2px solid #baf2d0;outline-offset:2px}.status-signs{font-size:11px;font-weight:800;color:white;text-shadow:1px 1px 2px #000,-1px -1px 2px #000;white-space:nowrap}.status-signs{color:#eaffcf}#keepFacing{width:100%;min-height:44px}.combat-guide p{line-height:1.8;overflow-wrap:anywhere}.combat-table{width:100%;border-collapse:collapse;font-size:12px;line-height:1.6;margin:14px 0}.combat-table th,.combat-table td{padding:7px 5px;border:1px solid #c1cbb9;text-align:left;vertical-align:top;word-break:keep-all;overflow-wrap:anywhere}.combat-table th{background:#dce5d4}.combat-guide summary{font-weight:800;line-height:1.6}`;document.head.append(combatStyle);

function spellEffect(t,s,launched=false,ctx=null){const fxGroup=ctx?.fx||globalFxGroup,toWorld=ctx?.world||globalToWorld;const element=s.element||(['heal','cleanse'].includes(s.type)?'light':'dark'),duration=(launched?650:Math.max(1200,(s.id==='meteor'||s.name.includes('메테오')?2200:1800))),group=new THREE.Group(),p=toWorld(t),radius=.55+(s.area||0)*.36,colors={fire:0xff7a21,water:0x65cfff,thunder:0xffed94,ice:0x9aeaff,wind:0x84f5cd,light:0xfff3b1,dark:0xb784ff},color=colors[element]||colors.dark;group.position.copy(p);fxGroup.add(group);const mat=(c,opacity=1)=>new THREE.MeshBasicMaterial({color:c,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending});const ring=new THREE.Mesh(new THREE.RingGeometry(radius*.7,radius,36),mat(color,.7));ring.rotation.x=-Math.PI/2;ring.position.y=.05;group.add(ring);const core=new THREE.Mesh(new THREE.SphereGeometry(element==='fire'?.3:.22,12,8),mat(element==='fire'?0xffe49a:color));group.add(core);const glow=new THREE.Mesh(new THREE.SphereGeometry(.48,12,8),mat(color,.28));if(element==='fire'){glow.material.blending=THREE.NormalBlending;glow.material.opacity=.55;}group.add(glow);const pieces=[];for(let i=0;i<10;i++){const m=new THREE.Mesh(element==='ice'?new THREE.ConeGeometry(.1,.7,5):element==='wind'?new THREE.TorusGeometry(radius,.035,5,32):new THREE.SphereGeometry(.1,6,4),mat(i%2?color:element==='fire'?0xffba42:0xffefc5,.85));group.add(m);pieces.push(m);}const sparkGeometry=new THREE.BufferGeometry(),positions=new Float32Array(40*3);sparkGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));const sparks=new THREE.Points(sparkGeometry,new THREE.PointsMaterial({color,size:.09,transparent:true,opacity:1,depthWrite:false,blending:THREE.AdditiveBlending}));group.add(sparks);const bolts=[];if(element==='thunder'){for(let j=0;j<3;j++){const coords=[];for(let i=0;i<9;i++)coords.push(new THREE.Vector3((Math.random()-.5)*.35+j*.13,3.2-i*.4,(Math.random()-.5)*.3));const line=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(coords),24,j===0?.035:.022,4,false),mat(j===0?0xffffff:0x9bddff));group.add(line);bolts.push(line);}}let impactResolve,doneResolve;const impact=new Promise(r=>impactResolve=r),done=new Promise(r=>doneResolve=r),start=performance.now();let hit=false,last=start,elapsed=0;if(!ctx)activeSpell={element,phase:'casting',duration,elapsed:0};if(!ctx)spellSound(element);function draw(now){if(ctx?.cancelled){impactResolve();doneResolve();return;}const delta=Math.min(60,now-last)*(ctx?.speed||save.settings.speed)*(ctx?1:visualSlow);last=now;elapsed+=delta;if(!ctx&&!hit)advanceCritical(delta);const progress=Math.min(1,elapsed/duration),q=launched?.55+.45*progress:progress,fall=Math.min(1,q/.55),tail=Math.max(0,(q-.55)/.45);if(!ctx)activeSpell={element,phase:q<.55?'casting':'impact',duration,elapsed:now-start};ring.rotation.z=now*.003;ring.scale.setScalar(q<.55?.55+fall*.45:1+tail*.6);ring.material.opacity=q<.55?.35+fall*.45:(1-tail)*.85;if(!hit&&q>=.55){hit=true;if(!ctx){criticalImpact();spellSound(element,true);}impactResolve();}const descend=3.1*(1-fall*fall);core.visible=element!=='thunder';glow.visible=q<.75;core.position.set(element==='fire'?(1-fall)*.6:0,q<.55?element==='fire'?descend+.2:.35+Math.sin(fall*Math.PI)*1.3:.3,0);core.scale.setScalar(q<.55?element==='fire'?.5+fall:1:q<.7?1+tail*4:Math.max(.01,2*(1-tail)));core.material.opacity=1-tail;glow.position.copy(core.position);glow.scale.setScalar(1+tail*3);glow.material.opacity=(element==='fire'?.55:.25)*(1-tail);for(let i=0;i<pieces.length;i++){const m=pieces[i],a=i/pieces.length*Math.PI*2+now*.002;if(element==='fire'){m.position.set(q<.55?core.position.x+(Math.random()-.5)*.18:Math.cos(a)*radius*tail,q<.55?core.position.y+.2+i*.09:.12+Math.sin(tail*Math.PI)*(.5+i%3*.2),q<.55?(Math.random()-.5)*.15:Math.sin(a)*radius*tail);m.scale.setScalar(q<.55?.6+i*.05:2*(1-tail)+.1);}else if(element==='ice'){m.position.set(Math.cos(a)*radius,.1+Math.min(1,fall)*.25,Math.sin(a)*radius);m.scale.y=q<.55?fall:1-tail;}else if(element==='wind'){m.position.set(0,.12+i*.11,0);m.rotation.x=Math.PI/2;m.rotation.y=Math.sin(now*.003+i)*.12;m.scale.setScalar(.25+i*.07);m.material.opacity=(q<.55?fall:1-tail)*.5;}else{m.position.set(Math.cos(a)*radius*(1-tail),.2+i*.08+Math.sin(now*.004+i)*.12,Math.sin(a)*radius*(1-tail));}m.material.opacity*=q>.85?.94:1;}for(let i=0;i<40;i++){const a=i*2.4+now*.001,r=q<.55?radius*(1-fall*.5):radius*(.2+tail*1.6);positions[i*3]=Math.cos(a)*r;positions[i*3+1]=element==='fire'&&q<.55?core.position.y+i*.016:.12+(i%7)*.12*(q<.55?fall:1-tail);positions[i*3+2]=Math.sin(a)*r;}sparkGeometry.attributes.position.needsUpdate=true;sparks.material.opacity=q<.55?fall:1-tail;for(const bolt of bolts){bolt.visible=q>=.5&&q<.88;bolt.material.opacity=(1-tail)*(.4+Math.abs(Math.sin(now*.06))*.6);}if(q<1){requestAnimationFrame(draw);return;}fxGroup.remove(group);disposeGroup(group);if(!ctx)activeSpell=null;doneResolve();}requestAnimationFrame(draw);return {impact,done};}
function burst(t,color=0xffc47f,count=18,ctx=null){const fxGroup=ctx?.fx||globalFxGroup,particles=ctx?(ctx.particles||=[]) :getGlobalParticles(),p=(ctx?.world||toWorld)(t);for(let i=0;i<count;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.035+Math.random()*.04,4,3),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9}));m.position.copy(p).y+=.4;fxGroup.add(m);particles.push({m,v:new THREE.Vector3((Math.random()-.5)*2,Math.random()*2+1,(Math.random()-.5)*2),life:.7});}}
function renderLoop(ms){animId=requestAnimationFrame(renderLoop);if(document.hidden||pauseMainRender)return;const dt=Math.min(.05,(ms-lastFrame)/1000||.016);lastFrame=ms;$('#criticalNotice').hidden=!criticalShot||isTitle;if(waterSurface)waterSurface.material.uniforms.uTime.value=ms*.001;angle+=(targetAngle-angle)*Math.min(1,dt*9);camera.zoom=criticalShot?criticalShot.baseZoom*(criticalShot.returning?3-2*clamp((performance.now()-criticalShot.returnStart)/650,0,1):criticalScale(criticalShot.progress)):camera.zoom+(zoom-camera.zoom)*Math.min(1,dt*9);camera.updateProjectionMatrix();if(heldPanKeys.size&&battle&&!isTitle){let kx=0,ky=0;for(const k of heldPanKeys){const v=PAN_KEYS[k];if(v){kx+=v[0];ky+=v[1];}}if(kx||ky){const sp=dt*7/zoom;pan.x=clamp(pan.x+(kx*Math.cos(angle)-ky*Math.sin(angle))*sp,-battle.size/2,battle.size/2);pan.z=clamp(pan.z+(-kx*Math.sin(angle)-ky*Math.cos(angle))*sp,-battle.size/2,battle.size/2);}}camLook.copy(pan);camLook.y+=.45;if(criticalShot?.focusCenter){const focusModel=models.get(criticalShot.focusUnit);if(focusModel)criticalShot.focusCenter.copy(focusModel.position).y+=.65;const focusWeight=criticalShot.returning?1-clamp((performance.now()-criticalShot.returnStart)/650,0,1):clamp(criticalShot.progress*3,0,1);camLook.copy(criticalShot.baseLook).lerp(criticalShot.focusCenter,focusWeight);}else if(camFocus)camLook.lerp(camFocus,.22);camera.position.set(camLook.x+Math.sin(angle)*16,17+camLook.y,camLook.z+Math.cos(angle)*16);if(impactShake>.001){camera.position.x+=(Math.random()-.5)*impactShake;camera.position.y+=(Math.random()-.5)*impactShake;impactShake*=Math.exp(-dt*18);}camera.lookAt(camLook);if(isTitle)targetAngle+=dt*.027;
for(const u of battle?.units||[]){const m=models.get(u.id);if(!m)continue;m.visible=u.hp>0;m.userData.body.position.y=Math.sin(ms*.003*visualSlow+u.x)*.022;m.userData.body.rotation.z=(u.hp>0&&u.acted?.035:0)+(m.userData.attackLean||0)+(m.userData.hitLean||0);const el=labelEls.get(u.id);if(el){el.style.display=u.hp<=0||isTitle?'none':'block';const p=project(m.position.clone().add(new THREE.Vector3(0,u.boss?1.95:1.33,0)));el.style.left=`${p.x}px`;el.style.top=`${p.y}px`;el.querySelector('i').style.width=`${u.hp/u.maxHp*100}%`;el.querySelector('.hp-value').textContent=`${Math.ceil(u.hp)}/${u.maxHp}`;const signs=el.querySelector('.status-signs'),signHTML=statusSignsHTML(u);if(signs.innerHTML!==signHTML)signs.innerHTML=signHTML;el.querySelector('.done').textContent=u.acted?'✓':u.id===selected?'▼':Object.keys(u.status).length?'•':'';}}
for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.life-=dt*visualSlow;p.m.position.addScaledVector(p.v,dt*visualSlow);p.v.y-=dt*visualSlow*2;p.m.material.opacity=p.life;if(p.life<=0){fxGroup.remove(p.m);p.m.geometry.dispose();p.m.material.dispose();particles.splice(i,1);}}
updateStatusVisuals(ms);updateElementalAuras(ms);positionFacingUI();renderer.render(scene,camera);}
requestAnimationFrame(renderLoop);
const pointers=new Map();let gesture=null,pinchDistance=0;
canvas.addEventListener('pointerdown',e=>{unlockAudio();canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});gesture={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,time:performance.now(),moved:false,pinch:pointers.size>1};if(pointers.size===2){const a=[...pointers.values()];pinchDistance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);}});
canvas.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId)||!gesture)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){const a=[...pointers.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);zoom=clamp(zoom*d/Math.max(1,pinchDistance),.72,maxBattleZoom());pinchDistance=d;gesture.pinch=true;return;}const dx=e.clientX-gesture.lastX,dy=e.clientY-gesture.lastY;if(Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>9)gesture.moved=true;if(gesture.moved){const displayScale=viewport.getBoundingClientRect().width/viewport.clientWidth||1,k=.022/(zoom*displayScale);pan.x-=dx*Math.cos(angle)*k+dy*Math.sin(angle)*k;pan.z+=dx*Math.sin(angle)*k-dy*Math.cos(angle)*k;pan.x=clamp(pan.x,-battle.size/2,battle.size/2);pan.z=clamp(pan.z,-battle.size/2,battle.size/2);}gesture.lastX=e.clientX;gesture.lastY=e.clientY;});
canvas.addEventListener('pointerup',e=>{pointers.delete(e.pointerId);if(!gesture)return;const g=gesture;if(pointers.size){g.pinch=true;return;}gesture=null;if(g.pinch)return;const dx=e.clientX-g.x,dy=e.clientY-g.y;if(g.moved){if(Math.abs(dx)>85&&Math.abs(dy)<55&&performance.now()-g.time<240){targetAngle+=dx>0?-Math.PI/2:Math.PI/2;pan.set(0,0,0);}return;}const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(unitGroup.children,true);if(hits.length){let root=hits[0].object;while(root.parent&&root.parent!==unitGroup)root=root.parent;const entry=[...models].find(([id,m])=>m===root);if(entry){const u=battle.units.find(u=>u.id===entry[0]);if(u.hp>0){tapTile(tile(u.x,u.z));return;}}}const hit=raycaster.intersectObjects(tileMeshes)[0];if(hit)tapTile(battle.tiles[hit.instanceId]);});
canvas.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);gesture=null;});
  // v1.5.1: mouse hover shows the tile under the cursor (PC).
  const hoverMarker=new THREE.Mesh(new THREE.PlaneGeometry(.94,.94),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.24,depthWrite:false,side:THREE.DoubleSide}));hoverMarker.rotation.x=-Math.PI/2;hoverMarker.visible=false;hoverMarker.renderOrder=5;scene.add(hoverMarker);let hoverQueued=null;
  canvas.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||pointers.size||!battle||isTitle||busy){hoverMarker.visible=false;return;}if(!hoverQueued)requestAnimationFrame(()=>{const ev=hoverQueued;hoverQueued=null;if(!ev||!battle)return;const r=canvas.getBoundingClientRect();pointer.set((ev.clientX-r.left)/r.width*2-1,-(ev.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(tileMeshes)[0],t=hit&&battle.tiles[hit.instanceId];hoverMarker.visible=!!t;if(t){hoverMarker.position.copy(toWorld(t));hoverMarker.position.y+=.03;}showTileInfo(t);});hoverQueued=e;});
  canvas.addEventListener('pointerleave',()=>{hoverMarker.visible=false;showTileInfo(null);});canvas.addEventListener('wheel',e=>{e.preventDefault();zoom=clamp(zoom-e.deltaY*.001,.72,maxBattleZoom());},{passive:false});
$('#rotate').onclick=()=>{targetAngle+=Math.PI/2;sfx();};$('#zoomIn').onclick=()=>zoom=clamp(zoom+.2,.72,maxBattleZoom());$('#zoomOut').onclick=()=>zoom=clamp(zoom-.2,.72,maxBattleZoom());$('#resetCam').onclick=()=>{pan.set(0,0,0);zoom=1;targetAngle=Math.PI/4;};
  // v1.5.0: PC keyboard. Keys use e.code, so they also work with the Korean keyboard layout.
  const clickIfReady=sel=>{const b=$(sel);if(b&&!b.disabled&&!b.closest('[hidden]')){b.click();return true;}return false;};
  document.addEventListener('keydown',e=>{
   if(e.ctrlKey||e.metaKey||e.altKey||e.isComposing)return;if(['INPUT','SELECT','TEXTAREA'].includes(e.target?.tagName))return;
   if($('#endingView')||$('#revisionsView')||document.documentElement.classList.contains('phone-landscape'))return;
   const overlayOpen=!$('#overlay').hidden,inBattle=!!battle&&!isTitle&&['player','enemy'].includes(battle.phase),code=e.code,sheetTitle=$('#sheet').dataset.title||'';
   if(PAN_KEYS[code]){if(!overlayOpen&&inBattle){heldPanKeys.add(code);e.preventDefault();}return;}
   const digit=/^(Digit|Numpad)([1-9])$/.exec(code);
   if(digit){const i=+digit[2]-1;if(overlayOpen&&sheetTitle.endsWith('의 스킬')){const b=$('#sheet').querySelector(`[data-skill-index="${i}"]`);if(b)pickSkillIndex(i);e.preventDefault();}else if(!overlayOpen&&inBattle&&!busy&&!$('#skill')?.disabled){pickSkillIndex(i);e.preventDefault();}return;}
   if(code==='Space'){e.preventDefault();if(document.activeElement?.tagName==='BUTTON')document.activeElement.blur();if(overlayOpen){const b=sheetConfirmButton();if(b)b.click();}else if(inBattle)clickIfReady('#endTurn');return;}
   if((code==='Enter'||code==='NumpadEnter')&&overlayOpen){e.preventDefault();const b=sheetConfirmButton();if(b)b.click();return;}
   if((code==='Enter'||code==='NumpadEnter')&&!overlayOpen&&inBattle&&preview){e.preventDefault();clickIfReady('#confirmAction');return;}
   if(code==='Escape'&&!overlayOpen&&inBattle&&preview){clickIfReady('#cancelAction');return;}
   if(overlayOpen||!inBattle)return;
   const action={KeyR:'#rotate',KeyF:'#attack',KeyG:'#skill',KeyH:'#wait'}[code];
   if(action){e.preventDefault();clickIfReady(action);}
  });
  document.addEventListener('keyup',e=>{heldPanKeys.delete(e.code);if(e.code==='Space'&&!$('#overlay').hidden)e.preventDefault();});window.addEventListener('blur',()=>heldPanKeys.clear());
function selectUnit(u){if(!canControl()||u.team!=='ally'||u.hp<=0)return;inspectedEnemy=null;inspectedItem=null;selected=u.id;skill=null;preview=null;mode=u.moved?'attack':'move';sfx();refreshUI();refreshHighlights();}
function tapTile(t,skipItem=false){if(!canControl())return;const u=unit(),o=occ(t.x,t.z),s=skill||(u?basic(u):null);const attacking=u&&!u.acted&&['attack','skill'].includes(mode)&&s&&!['heal','buff','cleanse'].includes(s.type)&&inRange(u,t,s);const item=battle.pickups?.find(v=>!v.collected&&v.x===t.x&&v.z===t.z);if(item&&!o&&!skipItem){if(mode==='move'&&u&&!u.moved&&movement(u).has(key(t.x,t.z))){inspectedEnemy=null;inspectedItem=null;skill=null;preview={type:'move',tile:t};confirmAction();}else showFieldItem(item);return;}if(o?.team==='enemy'&&!attacking){inspectEnemy(o);return;}if(inspectedItem){inspectedItem=null;refreshUI();}if(inspectedEnemy){inspectedEnemy=null;inspectedItem=null;if(o?.team==='ally'){selectUnit(o);return;}if(!attacking){refreshUI();refreshHighlights();return;}}if(!u){if(o?.team==='ally')selectUnit(o);return;}
if(preview&&preview.tile.x===t.x&&preview.tile.z===t.z){confirmAction();return;}
if(mode==='move'){if(o?.team==='ally'){selectUnit(o);return;}if(u.moved){toast('이번 턴에는 더 이동할 수 없어요.');return;}if(!movement(u).has(key(t.x,t.z))){toast('이동 범위 밖이거나 지형에 막혀 있어요.');return;}preview={type:'move',tile:t};}
else{const s=skill||basic(u);if(o?.team==='ally'&&!['heal','cleanse','buff'].includes(s.type)&&!(s.type==='magic'&&s.cleanse)){selectUnit(o);return;}if(u.acted){toast('행동을 마친 캐릭터입니다.');return;}if(!inRange(u,t,s)){toast('사거리 또는 높이 범위 밖입니다.');return;}if(!targets(u,t,s).length&&!(s.type==='magic'&&s.cleanse&&alive(u.team).some(v=>Object.keys(v.status).length&&areaTiles(t,s).some(q=>q.x===v.x&&q.z===v.z)))){toast('이 범위에 대상이 없어요.');return;}preview={type:'action',tile:t};}refreshUI();refreshHighlights();}
function showFieldItem(item){if(!canControl())return;inspectedEnemy=null;inspectedItem=item.id;preview=null;sfx();refreshUI();refreshHighlights();}
function renderFieldItemInfo(item){const g=GEAR.find(v=>v.id===item.gearId),p=CONSUMABLES[item.consumableId||'hpMedium'],u=unit(),t=tile(item.x,item.z),reachable=u&&!u.moved&&movement(u).has(key(item.x,item.z));$('#panel').innerHTML=`<div class="party-strip">${alive('ally').map(v=>`<button class="party-chip ${v.id===selected?'active':''}" data-item-ally="${v.id}">${v.name}<small>${v.acted?'✓':''}</small></button>`).join('')}</div><div class="unitrow"><div class="portrait">${portraitHTML(item,true)}</div><div class="unitinfo"><div class="unitname">${g?.name||(item.type==='potion'?p.name:PICKUP_NAMES[item.type])}</div><div class="hint">${PICKUP_NAMES[item.type]}${g?' · '+TIERS[g.tier]:''}</div></div></div><div class="enemy-details" id="fieldItemInfo"><span>${g?GEAR_KINDS[g.kind].label+' · '+gearBonusText(g):item.type==='gold'?`획득 골드: ${item.amount} G`:`${p.name} 1개 · 최대 ${p.stat.toUpperCase()} ${Math.round(p.ratio*100)}% 회복`}</span><span>위치 (${item.x+1}, ${item.z+1}) · 높이 ${t.height}</span><span>아군이 지나가거나 도착하면 자동으로 획득합니다.</span>${g?`<span>사용: ${gearUsers(g)}</span><span>기준 구매가 ${gearPrice(g)} G · 판매 ${gearSell(g)} G</span><span>전투 종료 후 보관함에서 비교하고 장착하세요.</span>`:''}</div><div class="turnrow"><button class="endturn" id="itemMove" ${reachable?'':'disabled'}>${reachable?'이 칸으로 이동':'현재 이동 범위 밖'}</button><button class="endturn" id="closeItemInfo">아군 정보</button></div>`;$('#panel').querySelectorAll('[data-item-ally]').forEach(b=>b.onclick=()=>selectUnit(battle.units.find(v=>v.id===b.dataset.itemAlly)));$('#closeItemInfo').onclick=()=>{inspectedItem=null;refreshUI();refreshHighlights();};$('#itemMove').onclick=()=>{inspectedItem=null;setMode('move');tapTile(t);};}
function setMode(m){if(!canControl())return;inspectedEnemy=null;inspectedItem=null;const u=unit();if(!u||(m==='move'?u.moved:u.acted))return;mode=m;skill=null;preview=null;sfx();if(m==='skill'){showSkills();return;}refreshUI();refreshHighlights();}
const BENEFICIAL_STATUS={atk:{icon:'⚔↑',detail:'ATK·MAG +25%'},def:{icon:'🛡↑',detail:'DEF·RES +35%'},speed:{icon:'👟↑',detail:'MOVE +2'},eva:{icon:'💨',detail:'회피 +20%p'},fortress:{icon:'🏰',detail:'DEF·RES ×1.8 · 받는 피해 추가 30% 감소'},counter:{icon:'🔥🛡',detail:'인접 공격 피해의 25%를 반격'}};
function activeBenefits(u){return Object.keys(BENEFICIAL_STATUS).filter(k=>u.status[k]>0);}
function buffNumber(n){return String(Math.round((n+Number.EPSILON)*100)/100);}
function effectiveUnitStats(u){const st=u.status||{},defense=(st.def?1.35:1)*(st.defdown?.7:1)*(st.fortress?1.8:1);return {atk:u.atk*(st.atk?1.25:1),mag:u.mag*(st.atk?1.25:1),def:u.def*defense,res:u.res*defense,move:Math.max(0,u.move+(st.speed?2:0)-(st.freeze?2:0)),eva:(u.eva||0)+(st.eva?.2:0)};}
function beneficialInfoHTML(u){const keys=activeBenefits(u);if(!keys.length)return '';return `<div class="beneficial-info"><div class="benefit-list">${keys.map(k=>`<span class="benefit-badge" data-benefit="${k}" title="${BENEFICIAL_STATUS[k].detail}"><b>${BENEFICIAL_STATUS[k].icon.replaceAll('↑','')} ${STATUS[k]}</b> · ${u.status[k]}턴</span>`).join('')}</div></div>`;}
function statusSignsHTML(u){return Object.keys(STATUS_SIGNS).filter(k=>u.status[k]>0).map(k=>BENEFICIAL_STATUS[k]?`<span class="benefit-sign" data-benefit="${k}" title="${STATUS[k]} · ${BENEFICIAL_STATUS[k].detail} · 남은 ${u.status[k]}턴">${BENEFICIAL_STATUS[k].icon.replaceAll('↑','')}</span>`:`<span>${STATUS_SIGNS[k]}</span>`).join('');}
// v1.5.2: landscape command panel extras (hidden in portrait by CSS): the selected hero's skills as one-tap
// shortcuts (numbered like keys 1-9), enemy status sorted by distance with the boss first and the boss warning,
// and a footer line (turn, enemies, items, first-clear record) that shows the hovered tile's terrain on PC.
const WEAK_TO={fire:'💧 물',water:'🪽 바람',wind:'🔥 불'};
function sidePanelFoot(){const s=getStage(),rec=save.chronicle?.[s?.id],items=(battle.pickups||[]).filter(v=>!v.collected).length;return `TURN ${battle.round} · 남은 적 ${alive('enemy').length}${items?` · 아이템 ${items}`:''}${rec?` · 첫 클리어 ${rec.turns}턴`:''}`;}
function sidePanelHTML(u){
 if(!battle||isTitle||u?.team!=='ally')return '';
 const usable=canControl()&&!u.acted,skills=u.skills.map((id,i)=>{const sk=SKILLS[id],locked=u.level<skillUnlock(id,i),silenced=u.status.silence&&sk.type!=='physical',cost=skillCost(u,sk),off=!usable||locked||silenced||u.mp<cost;return `<button class="sp-skill ${skill===sk&&mode==='skill'?'on':''}" data-sp-skill="${i}" ${off?'disabled':''}>${i<9?`<i class="skill-key">${i+1}</i>`:''}<span>${sk.name}</span><em>${sk.element?(ELEMENT[sk.element]||'').split(' ')[0]:''}</em><b>${locked?`Lv.${skillUnlock(id,i)} 🔒`:`MP ${cost}`}</b></button>`;}).join('');
 const foes=alive('enemy').sort((a,b)=>(b.boss?1:0)-(a.boss?1:0)||dist(a,u)-dist(b,u)),shown=foes.slice(0,6);
 const enemies=shown.map(e=>{const weak=WEAK_TO[elementFamily(e.element)];return `<button class="sp-enemy" data-sp-enemy="${e.id}"><span class="sp-name">${e.boss?'♜ ':e.elite?'◆ ':''}${e.name}</span><i class="sp-bar ${e.hp/e.maxHp<.35?'low':''}"><i style="width:${Math.round(e.hp/e.maxHp*100)}%"></i></i><small>${Math.ceil(e.hp)}/${e.maxHp}${weak?` · 약점 ${weak}`:''} · 거리 ${dist(e,u)}</small></button>`;}).join('');
 const danger=battle.danger?.length?`<div class="sp-danger">⚠ 보스 위험 공격 예고 · 붉은 ${battle.danger.length}칸에서 벗어나세요</div>`:'';
 return `<div class="side-panel"><section class="sp-skills"><h4>✦ 스킬 · ${u.name}<small>MP ${u.mp}/${u.maxMp}</small></h4>${skills}</section><section class="sp-enemies"><h4>⚔ 적 현황<small>남은 적 ${foes.length}</small></h4>${danger}${enemies}${foes.length>shown.length?`<div class="sp-more">외 ${foes.length-shown.length}마리</div>`:''}</section><div class="sp-foot" id="spFoot">${sidePanelFoot()}</div></div>`;
}
function showTileInfo(t){const el=$('#spFoot');if(!el||!battle)return;if(!t){el.textContent=sidePanelFoot();el.classList.remove('sp-hover');return;}const info=TERRAIN_INFO.find(v=>v[0]===t.terrain),cost=t.terrain==='water'?'진입 불가':`이동 ${t.terrain==='swamp'?3:['forest','scrub','sand'].includes(t.terrain)?2:1}`,u=occ(t.x,t.z),item=(battle.pickups||[]).find(v=>!v.collected&&v.x===t.x&&v.z===t.z);el.textContent=`${info?.[1]||t.terrain} · ${cost} · 높이 ${t.height}${u?` · ${u.name} ${Math.ceil(u.hp)}/${u.maxHp}`:''}${item?' · 아이템':''}`;el.classList.add('sp-hover');}
function refreshUI(){$('#app').classList.toggle('battle-active',!isTitle);$('#app').classList.toggle('title-active',isTitle);const stage=getStage();$('#stagebar').hidden=isTitle;$('#panel').hidden=isTitle;$('#title').hidden=!isTitle;if(!battle)return;$('#chapterlabel').textContent=(missionMode?'MISSION · ':'')+CHAPTERS[stage.chapter][0];$('#stagetitle').textContent=stage.name;$('#objective').textContent=goalText(stage);$('#turn').textContent=`TURN ${String(battle.round).padStart(2,'0')} · ${battle.phase==='enemy'?'ENEMY':'ALLY'}`;const fieldItem=battle.pickups?.find(v=>v.id===inspectedItem&&!v.collected);if(fieldItem){renderFieldItemInfo(fieldItem);return;}inspectedItem=null;const enemy=battle.units.find(v=>v.id===inspectedEnemy&&v.hp>0);if(enemy){renderEnemyInfo(enemy);return;}inspectedEnemy=null;inspectedItem=null;if(battle.pendingFacing&&battle.phase==='player'&&!busy){drawFacingUI();return;}const u=unit();if(!u){$('#panel').innerHTML=`<div class="hint">아군을 선택하세요.</div>`;return;}
const canAction=canControl()&&!u.acted,canMove=canControl()&&!u.moved,stats=Object.keys(u.status).map(s=>STATUS[s]||s).join(' · '),p=heroRecord(u.heroId);let forecast='';
if(preview){if(preview.type==='move'){const cost=movement(u).get(key(preview.tile.x,preview.tile.z));forecast=`이동 비용 <b>${cost}</b> / ${u.move+(u.status.speed?2:0)-(u.status.freeze?2:0)} · 높이 ${tile(u.x,u.z).height} → ${preview.tile.height}<br>같은 칸을 다시 탭하거나 이동 확정${battle.pickups?.filter(v=>!v.collected&&pathfind(u,preview.tile).slice(1).some(t=>t.x===v.x&&t.z===v.z)).map(v=>`<br>획득: ${PICKUP_NAMES[v.type]}${v.gearId?' · '+GEAR.find(g=>g.id===v.gearId).name:v.type==='gold'?' +'+v.amount+' G':''}`).join('')||''}`;}
else{const s=skill||basic(u),ts=targets(u,preview.tile,s);forecast=`<div class="forecast-heading">${s.name}${s.mp?` · MP ${skillCost(u,s)}`:''} · 대상 ${ts.length}명</div><div class="forecast-targets">${ts.map(t=>`<div class="forecast-target">${forecastHP(u,t,s,preview.tile)}</div>`).join('')}</div>`;}
forecast=`<div class="forecast">${forecast}<div class="confirmrow"><button id="confirmAction" ${busy?'disabled':''}>${preview.type==='move'?'이동 확정':'행동 확정'}</button><button class="cancel" id="cancelAction">취소</button></div></div>`;}
$('#panel').innerHTML=`${forecast}<div class="party-strip">${alive('ally').map(v=>`<button class="party-chip ${v.id===selected?'active':''} ${v.acted?'spent':''}" data-unit="${v.id}" aria-label="${v.name} 선택">${v.name}<small>${v.acted?'✓':v.moved?'•':''}</small><i class="chip-hp ${v.hp/v.maxHp<.35?'low':''}"><i style="width:${Math.round(v.hp/v.maxHp*100)}%"></i></i></button>`).join('')}</div><div class="unitrow"><div class="portrait" style="background:#${new THREE.Color(u.color).getHexString()}35">${portraitHTML(u)}</div><div class="unitinfo"><div class="unitname">${u.name}<small>Lv.${u.level} ${className(u)}</small></div><div class="bars"><div class="statbar"><div class="numbers"><span>HP</span><span>${Math.ceil(u.hp)} / ${u.maxHp}</span></div><div class="track"><i style="width:${u.hp/u.maxHp*100}%"></i></div></div><div class="statbar"><div class="numbers"><span>MP</span><span>${u.mp} / ${u.maxMp}</span></div><div class="track mp"><i style="width:${u.mp/u.maxMp*100}%"></i></div></div></div></div></div><div class="unitstats"><span>ATK ${buffNumber(effectiveUnitStats(u).atk)} · DEF ${buffNumber(effectiveUnitStats(u).def)} · MOV ${effectiveUnitStats(u).move}</span><span>${stats||`이동 ${u.moved?'완료':'가능'} · 행동 ${u.acted?'완료':'가능'}`}</span></div>${beneficialInfoHTML(u)}<div class="actions"><button class="action ${mode==='move'?'active':''}" id="move" ${!canMove?'disabled':''}><b>◇</b>이동</button><button class="action ${mode==='attack'?'active':''}" id="attack" ${!canAction?'disabled':''}><b>⚔</b>공격</button><button class="action ${mode==='skill'?'active':''}" id="skill" ${!canAction?'disabled':''}><b>✦</b>스킬</button><button class="action" id="wait" ${!canControl()||u.turnFinished?'disabled':''}><b>◷</b>대기</button><button class="action endturn" id="endTurn" ${!canControl()?'disabled':''}><b>⏭</b>턴 종료</button></div>${sidePanelHTML(u)}`;
$('#panel').querySelectorAll('[data-target-info]').forEach(b=>b.onclick=()=>inspectEnemy(battle.units.find(v=>v.id===b.dataset.targetInfo)));$('#panel').querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>selectUnit(battle.units.find(u=>u.id===b.dataset.unit)));$('#panel').querySelectorAll('[data-sp-skill]').forEach(b=>b.onclick=()=>pickSkillIndex(+b.dataset.spSkill));$('#panel').querySelectorAll('[data-sp-enemy]').forEach(b=>b.onclick=()=>{const e=battle.units.find(v=>v.id===b.dataset.spEnemy);if(!e)return;const w=toWorld(tile(e.x,e.z));pan.set(clamp(w.x,-battle.size/2,battle.size/2),0,clamp(w.z,-battle.size/2,battle.size/2));inspectEnemy(e);});$('#move').onclick=()=>setMode('move');$('#attack').onclick=()=>setMode('attack');$('#skill').onclick=()=>setMode('skill');$('#wait').onclick=()=>waitUnit();$('#endTurn').onclick=()=>askEndTurn();if(preview){$('#confirmAction').onclick=confirmAction;$('#cancelAction').onclick=()=>{preview=null;refreshUI();refreshHighlights();};}}
function goalText(s){return '승리: 모든 적 처치 · 패배: 카일 전투 불능';}
async function tween(ms,fn,ctx=null){let last=performance.now(),elapsed=0;return new Promise(resolve=>{function tick(now){if(ctx?.cancelled)return resolve();const amount=Math.min(60,now-last)*(ctx?.speed||save.settings.speed)*(ctx?1:visualSlow);last=now;elapsed+=amount;if(!ctx)advanceCritical(amount);const t=clamp(elapsed/ms,0,1);fn(t<.5?2*t*t:1-(-2*t+2)**2/2);if(t<1)requestAnimationFrame(tick);else resolve();}requestAnimationFrame(tick);});}
async function animateMove(u,path){const m=models.get(u.id);for(const t of path.slice(1)){const start=m.position.clone(),end=toWorld(t);u.dir=facing(u,t);m.rotation.y=(2-u.dir)*Math.PI/2;sfx('move');await tween(130,v=>{m.position.lerpVectors(start,end,v);m.position.y+=Math.sin(v*Math.PI)*.1;});u.x=t.x;u.z=t.z;collectPickup(u);}u.moved=true;}
async function confirmAction(){if(!canControl()||!preview)return;const p=preview,u=unit();if(!u||(p.type==='move'?u.moved:u.acted))return;preview=null;busy=true;refreshUI();try{if(p.type==='move'){const path=pathfind(u,p.tile),cost=movement(u).get(key(p.tile.x,p.tile.z));if(cost==null||!path.length)throw Error('이동 경로가 변경되었습니다.');await animateMove(u,path);log(`${u.name} 이동 (${u.x+1}, ${u.z+1})`);mode='attack';}else{const s=skill||basic(u);if(u.mp<skillCost(u,s))throw Error('MP가 부족합니다.');await perform(u,p.tile,s);u.acted=true;skill=null;mode=u.moved?'attack':'move';}checkEnd();persist();}catch(e){toast(e.message);}finally{busy=false;refreshUI();refreshHighlights();}}
async function attackWindup(u,t,s,ctx=null){const m=(ctx?.models||models).get(u.id),base=m.position.clone(),world=ctx?.world||toWorld,melee=s.type==='physical'&&dist(u,t)<=1,direction=world(t).sub(base).setY(0).normalize(),forward=direction.clone().multiplyScalar(melee?.53:.22),hasSpell=s.type==='magic'||['heal','cleanse'].includes(s.type)||(s.type==='physical'&&s.element);
 if(!ctx&&!hasSpell&&!melee)sfx(['buff'].includes(s.type)?'heal':'tap');
 if(melee){
  const back=direction.clone().multiplyScalar(-.18);
  await tween(260,v=>{m.position.copy(base).addScaledVector(back,v);m.position.y=base.y-.05*v;m.userData.body.rotation.x=.23*v;m.userData.attackLean=-.12*v;},ctx);
  if(!ctx)sfx('swing');
  await tween(95,v=>{m.position.copy(base).addScaledVector(back,1-v).addScaledVector(forward,v);m.position.y=base.y+Math.sin(v*Math.PI)*.09;m.userData.body.rotation.x=.23-.56*v;m.userData.attackLean=.2*v;},ctx);
 }else{await tween(180,v=>{m.position.copy(base).addScaledVector(forward,Math.sin(v*Math.PI));m.userData.body.rotation.x=-Math.sin(v*Math.PI)*.2;},ctx);m.position.copy(base);m.userData.body.rotation.x=0;}

return {m,base,melee,forward};}
async function hitReaction(victim,base,u,crit=false,ctx=null){const home=victim.position.clone(),push=home.clone().sub(base).setY(0).normalize().multiplyScalar(crit?.43:.31);await tween(175,q=>{victim.position.copy(home).addScaledVector(push,Math.sin(q*Math.PI));victim.userData.hitLean=(u.x<victim.position.x?-.24:.24)*Math.sin(q*Math.PI);},ctx);victim.position.copy(home);victim.userData.hitLean=0;}
async function attackRecovery(m,base,forward,melee,ctx=null){if(melee){await tween(140,q=>{m.position.copy(base).addScaledVector(forward,1-q);m.userData.body.rotation.x=-.33*(1-q);m.userData.attackLean=.2*(1-q);},ctx);m.position.copy(base);m.userData.body.rotation.x=0;m.userData.attackLean=0;}}
async function perform(u,t,s){
 const list=targets(u,t,s),xpEarned={value:0},report=u.team==='ally'&&['physical','magic'].includes(s.type)?{skill:s.name,rows:[]}:null;
 if(report)lastHitReport=report;u.mp-=skillCost(u,s);const planned=new Map();if(['physical','magic'].includes(s.type))for(const v of list){const e=estimate(u,v,s,t),hit=random()<=e.hit,crit=hit&&targetCriticalRate(u,s,t,v)>0&&random()<targetCriticalRate(u,s,t,v);planned.set(v.id,{e,hit,crit,roll:hit?.95+random()*.1:1});}const critical=[...planned.values()].some(v=>v.crit);if(critical){visualSlow=1;criticalShot={baseZoom:camera.zoom,baseLook:camLook.clone(),progress:0,elapsed:0,preDuration:1,returning:false};}try{
 const m=models.get(u.id);if(dist(u,t))u.dir=facing(u,t);m.rotation.y=(2-u.dir)*Math.PI/2;camFocus=toWorld(t);
 const base=m.position.clone(),melee=s.type==='physical'&&dist(u,t)<=1&&list.length>0,direction=toWorld(t).sub(base).setY(0).normalize(),forward=direction.clone().multiplyScalar(melee?.53:.22);
 const hasSpell=s.type==='magic'||['heal','cleanse'].includes(s.type)||(s.type==='physical'&&s.element),projectile=usesProjectile(u,s,melee);
 if(criticalShot){
  const focusTarget=list.find(v=>planned.get(v.id)?.crit),closeAttack=melee&&!projectile&&s.type==='physical';
  criticalShot.focusUnit=closeAttack?u.id:focusTarget?.id;
  criticalShot.focusKind=closeAttack?'attacker':'target';
  criticalShot.focusCenter=(models.get(criticalShot.focusUnit)?.position.clone()||toWorld(t)).add(new THREE.Vector3(0,.65,0));
  criticalShot.preDuration=(melee?355:180)+(projectile?500+dist(u,t)*55:0)+(hasSpell&&!projectile?(s.id==='meteor'||s.name.includes('메테오')?2200:1800)*.55:0);
 }
 await attackWindup(u,t,s);
 if(projectile)await flyProjectile(u,t,s);const spell=hasSpell?spellEffect(t,s,projectile):null;if(spell)await spell.impact;criticalImpact();
 const colors={fire:0xf3a478,water:0x8adcf8,ice:0x9ddded,thunder:0xebd68c,wind:0xb4e8b9,light:0xf4e9b0,dark:0xbb9adb};
 for(const v of list){
  const beforeHp=Math.ceil(v.hp);if(!spell)burst(tile(v.x,v.z),colors[s.element]||0xf3da9d,s.area?14:20);
  if(s.type==='heal'){const amount=Math.min(v.maxHp-v.hp,estimate(u,v,s).damage);v.hp+=amount;tallyHeal(u,amount);if(s.cleanse){const old=cleanseHarmfulStatus(v);if(old.length)await statusPulse(v,old[0],0,true);}floating(v,`+${amount}`,'#aff0c7');log(`${u.name} → ${v.name} ${amount} 회복`);if(amount>0&&u.heroId)awardActionXP(u.heroId,18,null,xpEarned);}
  else if(s.type==='cleanse'){const old=cleanseHarmfulStatus(v);if(old.length)await statusPulse(v,old[0],0,true);floating(v,'정화','#aff0c7');if(u.heroId)awardActionXP(u.heroId,12,null,xpEarned);}
  else if(s.type==='buff'){v.status[s.buff]=3;floating(v,STATUS[s.buff],'#d4ecc3');if(u.heroId)awardActionXP(u.heroId,10,null,xpEarned);}
  else if(s.type==='taunt'){v.status.taunt=3;v.tauntSource=u.id;floating(v,'도발','#f0c495');}
  else{
   const outcome=planned.get(v.id),e=outcome.e;
   if(!outcome.hit){report?.rows.push({name:v.name,before:beforeHp,after:beforeHp,miss:true});floating(v,'MISS','#e2e9dd');log(`${u.name}의 공격을 ${v.name} 회피`);if(melee)sfx('tap');continue;}
   const crit=outcome.crit,damage=Math.max(1,Math.round(e.damage*outcome.roll*(crit?1.5:1))),hpBefore=v.hp;
   v.hp=Math.max(0,v.hp-damage);tallyHit(u,v,damage,Math.round(hpBefore-v.hp),crit,s);report?.rows.push({name:v.name,before:beforeHp,after:Math.ceil(v.hp),crit});delete v.status.sleep;
   if(melee){const victim=models.get(v.id),home=victim.position.clone(),push=home.clone().sub(base).setY(0).normalize().multiplyScalar(crit?.43:.31);sfx('hit');impactShake=crit?.28:.2;burst(tile(v.x,v.z),crit?0xffef9a:0xffd4a6,crit?40:28);await sleep(35);await hitReaction(victim,base,u,crit);}
   floating(v,`${crit?'CRIT ':''}${damage}`);if(s.status&&random()<(s.chance??.5)&&!v.boss)v.status[s.status]=s.status==='stun'?1:3;if(s.debuff){if(s.debuff==='slow'&&!v.boss)v.status.freeze=3;else if(s.debuff==='stun'&&!v.boss)v.status.stun=1;else if(s.debuff==='def')v.status.defdown=3;}
   const affinity=magicAffinity(s.element,v.element);if(s.element&&affinity!==1){floating(v,affinity>1?'약점 공격!':'내성',affinity>1?'#ffdf91':'#9fc9ff');}
   if(s.knockback&&v.hp>0&&!v.boss){const dx=Math.sign(v.x-u.x),dz=Math.sign(v.z-u.z),pushX=v.x+dx,pushZ=v.z+dz;if(pushX>=0&&pushZ>=0&&pushX<mapWidth(battle)&&pushZ<mapHeight(battle)&&!occ(pushX,pushZ)&&Number.isFinite(moveCost(tile(v.x,v.z),tile(pushX,pushZ),v))){v.x=pushX;v.z=pushZ;models.get(v.id)?.position.copy(toWorld(tile(pushX,pushZ)));floating(v,'넉백','#c9f6ee');}}
   if(v.status.counter&&v.hp>0&&u.hp>0&&dist(u,v)<=1){const counterDamage=Math.max(1,Math.round(damage*.25));const beforeCounter=u.hp;u.hp=Math.max(0,u.hp-counterDamage);floating(u,`🔥 반격 ${counterDamage}`,'#ffbd87');log(`${v.name} 화염 방패 반격 → ${u.name} ${counterDamage}`);if(u.hp<=0){const attacker=models.get(u.id);if(attacker)attacker.visible=false;}}
   log(`${u.name} ${s.name} → ${v.name} ${damage}${crit?' 치명타':''}`);if(u.heroId)awardActionXP(u.heroId,v.hp<=0?38+v.level*2:12,v.level,xpEarned);
   if(v.hp<=0){sfx('death');log(`${v.name} 전투 불능`);models.get(v.id).visible=false;}
  }
 }
 if(s.cleanse&&s.type==='magic'){const area=new Set(areaTiles(t,s).map(p=>key(p.x,p.z)));for(const ally of alive(u.team)){if(!area.has(key(ally.x,ally.z)))continue;const removed=cleanseHarmfulStatus(ally);if(removed.length){floating(ally,'정화','#b6fff0');log(`${u.name} → ${ally.name} 해로운 상태 이상 제거`);}}}
 await attackRecovery(m,base,forward,melee);
 if(spell)await spell.done;else await sleep(melee?120:300);if(criticalShot?.returning){const remaining=650-(performance.now()-criticalShot.returnStart);if(remaining>0)await new Promise(r=>setTimeout(r,remaining));} }finally{if(criticalShot)camera.zoom=criticalShot.baseZoom;criticalShot=null;visualSlow=1;camFocus=null;}
}
function waitUnit(){if(!canControl()||!unit()||unit().turnFinished)return;unit().acted=true;unit().moved=true;preview=null;sfx();persist();refreshUI();refreshHighlights();beginFacing(unit());}
function afterAction(){if(battle.pendingFacing||checkEnd())return;const next=alive('ally').find(u=>!u.turnFinished);if(next)selectUnit(next);else{toast('아군의 행동이 끝났습니다.');endPlayerTurn();}}
function askEndTurn(){if(!canControl())return;const left=alive('ally').filter(u=>!u.turnFinished).length;if(left)showSheet('턴을 종료할까요?',`<p>대기로 마무리하지 않은 아군이 ${left}명 있습니다. 턴 종료 시 현재 방향을 유지합니다.</p><button class="primary" id="yesEnd">적 턴으로 진행</button><button class="secondary" id="noEnd">계속 행동</button>`,()=>{$('#yesEnd').onclick=()=>{closeSheet();endPlayerTurn();};$('#noEnd').onclick=closeSheet;});else endPlayerTurn();}
function announce(text){$('#banner').textContent=text;$('#banner').classList.add('show');setTimeout(()=>$('#banner').classList.remove('show'),1000/save.settings.speed);}
async function phaseStart(team){for(const u of alive(team)){u.moved=false;u.acted=false;u.turnFinished=false;const blocked=u.status.sleep||u.status.stun;if(u.status.poison||u.status.burn){const k=u.status.poison?'poison':'burn',damage=Math.max(1,Math.floor(u.maxHp*(k==='poison'?.07:.05)));camFocus=toWorld(tile(u.x,u.z));await statusPulse(u,k,damage,false,()=>{const before=u.hp;u.hp=Math.max(0,u.hp-damage);});log(`${u.name} ${STATUS[k]} 피해 ${damage}`);if(u.hp<=0)models.get(u.id).visible=false;}if(blocked&&u.hp>0){u.moved=u.acted=u.turnFinished=true;await statusPulse(u,u.status.stun?'stun':'sleep');}for(const k of Object.keys(u.status)){u.status[k]--;if(u.status[k]<=0){delete u.status[k];if(STATUS_COLORS[k]&&u.hp>0)await statusPulse(u,k,0,true);}}u.mp=Math.min(u.maxMp,u.mp+(isPhysicalHero(u)?(battle.round%2===0?1:0):3)+(u.heroId==='ria'&&u.classLevel>=1?4:0)+(u.heroId==='luna'&&u.classLevel>=2?5:0));}camFocus=null;}
async function endPlayerTurn(){if(!canControl())return;inspectedEnemy=null;inspectedItem=null;busy=true;preview=null;skill=null;battle.phase='enemy';await phaseStart('enemy');persist();refreshHighlights();refreshUI();if(checkEnd()){busy=false;return;}announce('ENEMY PHASE');await sleep(700);busy=false;await enemyTurn();}
// v0.7.3: Difficulties share the same rules, but tactical opponents prioritize
// exposed support units, elemental advantages and safe firing positions.
function tacticalTargetPriority(target){
 if(save.difficulty!=='tactical')return 0;
 const missing=1-target.hp/Math.max(1,target.maxHp);
 return (target.heroId==='luna'?30:target.heroId==='ria'?22:target.heroId==='sera'?12:0)
  +missing*42+(target.hp/target.maxHp<.3?18:0);
}
function tacticalPositionRisk(pos){
 if(save.difficulty!=='tactical')return 0;
 return battle.danger.some(t=>t.x===pos.x&&t.z===pos.z)?85:0;
}
function enemyCoordination(u,pos,t,s){
 if(getStage()?.chapter===0)return 0;
 const mode=save.difficulty,role=enemyRole(u),scale=mode==='story'?.12:mode==='tactical'?1.35:.75;
 if(scale===0)return 0;
 const others=alive('ally'),distance=dist(pos,t),nearest=Math.min(...others.map(a=>dist(pos,a)));
 const nearbyAllies=others.filter(a=>dist(pos,a)<=2).length;
 let score=0;
 if(role==='flanker'){
  score+=(sideBonus({...u,x:pos.x,z:pos.z},t)===.2?35:sideBonus({...u,x:pos.x,z:pos.z},t)===.1?15:0);
  score+=(t.heroId==='luna'||t.heroId==='ria'?18:0);
 }else if(role==='ranged'||role==='caster'){
  // Prefer a legal attack from distance over stepping into melee range.
  score+=Math.min(distance,Math.max(2,s.range||2))*5;
  score-=Math.max(0,3-nearest)*18;
  if(role==='caster')score+=nearbyAllies*3;
 }else{
  score+=t.heroId==='kyle'||t.heroId==='bran'?10:0;
 }
 if(mode!=='story'){
  score+=(1-t.hp/Math.max(1,t.maxHp))*24;
  if(s.element&&magicAffinity(s.element,t.element)>1)score+=22;
 }
 return score*scale;
}
function attackScore(u,pos,t,s){
 const e=estimate({...u,x:pos.x,z:pos.z},t,s),tutorial=getStage()?.chapter===0,tactical=!tutorial&&save.difficulty==='tactical';
 if(tutorial)return e.damage;
 return e.damage+(e.damage>=t.hp?(tactical?150:100):0)
  +(tactical?tacticalTargetPriority(t)*1.25:save.difficulty==='normal'?(t.heroId==='luna'?22:t.heroId==='ria'?15:0):0)
  +(tile(pos.x,pos.z).height>tile(t.x,t.z).height?10:0)
  +(u.status.taunt&&t.id===u.tauntSource?300:0)
  -(battle.danger.some(q=>q.x===pos.x&&q.z===pos.z)?(tactical?85:20):0)
  +enemyCoordination(u,pos,t,s);
}

async function bossAction(u){const step=(battle.round-1)%5+1,profile=BOSS_PROFILES[u.bossId||getStage().chapter]||BOSS_PROFILES[9];if(step===3){const t=neighbors(tile(u.x,u.z)).find(t=>t.terrain!=='water'&&!occ(t.x,t.z));if(t){const m=MONSTERS[profile.summon],scale=difficultyProfile(save.difficulty),pressure=chapterDifficultyPressure(getStage().chapter),tune=stageBalance(getStage())||{hp:1,atk:1},summonHP=Math.round((40+u.level*3)*1.30*scale.hp*pressure.hp*tune.hp),v={...m,id:`summon-${battle.round}-${u.id}`,monsterIndex:profile.summon,team:'enemy',x:t.x,z:t.z,hp:summonHP,maxHp:summonHP,mp:0,maxMp:0,atk:Math.round((14+u.level*2)*scale.atk*pressure.atk*tune.atk),def:Math.round((8+u.level)*1.10*scale.def*pressure.def),res:Math.round((8+u.level)*1.10*scale.def*pressure.def),mag:Math.round((10+u.level)*scale.atk*pressure.atk*tune.atk),level:u.level,move:m.move,jump:1,dir:2,crit:.02,eva:0,statusAttack:m.status,status:{},acted:true,moved:true};battle.units.push(v);const model=figure(v);model.position.copy(toWorld(t));unitGroup.add(model);models.set(v.id,model);createUnitLabel(v);burst(t,0xbce6d4);log(`${u.name} ${m.name} 소환`);toast(`${u.name}이(가) ${m.name}을 소환했습니다.`);return true;}}
if(step===4){const allies=alive('ally');const target=save.difficulty==='tactical'?allies.slice().sort((a,b)=>allies.filter(v=>dist(a,v)<=profile.radius).length-allies.filter(v=>dist(b,v)<=profile.radius).length||dist(u,a)-dist(u,b))[0]:allies.sort((a,b)=>dist(u,a)-dist(u,b))[0];if(target){battle.danger=areaTiles(tile(target.x,target.z),{area:profile.radius,heightRange:99}).map(t=>({x:t.x,z:t.z}));refreshHighlights();log(`${u.name} ${profile.finisher} 예고`);toast(save.difficulty==='story'?`${profile.finisher} 예고! 붉은 칸은 다음 적 페이즈에 공격받습니다. 이동해서 피하세요.`:`${profile.finisher} 예고! 붉은 칸에서 벗어나세요.`);sfx('magic');await sleep(450);return true;}}
if(step===5&&battle.danger.length){sfx('magic');for(const t of battle.danger){burst(tile(t.x,t.z),0xe9a5e7,5);const v=occ(t.x,t.z);if(v?.team==='ally'){const damage=Math.max(1,Math.round(u.mag*profile.power*1.30));const beforeBoss=v.hp;v.hp=Math.max(0,v.hp-damage);floating(v,`${damage}`);log(`${profile.finisher} → ${v.name} ${damage}`);if(v.hp<=0)models.get(v.id).visible=false;}}battle.danger=[];await sleep(600);return true;}return false;}
// Find a complete legal route to an attack position, then walk its affordable
// prefix. A detour may initially increase straight-line distance or climb up.
function enemyPursuitPath(u,s,budget){
 const start=tile(u.x,u.z),startKey=key(u.x,u.z),cost=new Map([[startKey,0]]),came=new Map(),open=[start];
 while(open.length){
  open.sort((a,b)=>cost.get(key(a.x,a.z))-cost.get(key(b.x,b.z)));
  const a=open.shift(),ak=key(a.x,a.z);
  for(const b of neighbors(a)){
   const bk=key(b.x,b.z),v=cost.get(ak)+moveCost(a,b,u);
   if(v<(cost.get(bk)??Infinity)){cost.set(bk,v);came.set(bk,a);if(!open.includes(b))open.push(b);}
  }
 }
 const allies=alive('ally'),taunted=allies.find(v=>u.status.taunt&&v.id===u.tauntSource);
 const role=enemyRole(u),mode=save.difficulty,tutorial=getStage()?.chapter===0,coord=tutorial?0:mode==='story'?.12:mode==='tactical'?1.35:.75;
 const prioritized=allies.slice().sort((a,b)=>!tutorial&&mode==='tactical'?tacticalTargetPriority(b)-tacticalTargetPriority(a):0);
 const groups=taunted?[[taunted],prioritized.filter(v=>v!==taunted)]:[prioritized];
 let goal=null;
 for(const group of groups){
  let bestScore=Infinity;
  for(const [k,c] of cost){
   const [x,z]=k.split(',').map(Number),pos=tile(x,z),actor={...u,x,z};
   const reachable=group.filter(v=>inRange(actor,tile(v.x,v.z),s));
   if(!reachable.length)continue;
   for(const v of reachable){
    const d=dist(pos,v),nearest=Math.min(...allies.map(a=>dist(pos,a)));
    let score=c;
    if(role==='flanker')score-=coord*(sideBonus(actor,v)===.2?18:sideBonus(actor,v)===.1?8:0);
    if(role==='ranged'||role==='caster'){
     score-=coord*Math.min(d,Math.max(2,s.range||2))*4;
     score+=coord*Math.max(0,3-nearest)*15;
    }
    if(!tutorial&&mode==='tactical')score-=tacticalTargetPriority(v)*.45;
    else if(!tutorial&&mode==='normal')score-=(v.heroId==='luna'?9:v.heroId==='ria'?6:0);
    if(!tutorial&&mode!=='story'&&s.element&&magicAffinity(s.element,v.element)>1)score-=coord*12;
    score+=tacticalPositionRisk(pos);
    if(score<bestScore){goal=pos;bestScore=score;}
   }
  }
  if(goal)break;
 }
 // If allies are temporarily cut off, still approach the closest legal frontier.
 if(!goal){let best=Infinity,bestCost=Infinity;for(const [k,c]of cost){const [x,z]=k.split(',').map(Number),pos=tile(x,z),score=Math.min(...allies.map(v=>dist(pos,v)+Math.max(0,Math.abs(pos.height-tile(v.x,v.z).height)-(s.heightRange??(s.range<=1?1:3)))));if(score<best||score===best&&c<bestCost){best=score;bestCost=c;goal=pos;}}}
 if(!goal)return [start];
 const path=[goal];let k=key(goal.x,goal.z);
 while(came.has(k)){const t=came.get(k);path.unshift(t);k=key(t.x,t.z);}
 let spent=0,end=0;
 for(let i=1;i<path.length;i++){const step=moveCost(path[i-1],path[i],u);if(spent+step>budget)break;spent+=step;end=i;}
 return path.slice(0,end+1);
}
async function enemyTurn(){if(!battle||battle.phase!=='enemy'||busy)return;busy=true;if(!enemyApproachPlanCurrent())battle.enemyApproachPlan=enemyApproachPlan();refreshUI();for(const u of alive('enemy')){if(u.acted||u.hp<=0)continue;if(checkEnd())break;const specialAction=!!(u.boss&&await bossAction(u));if(specialAction&&checkEnd())break;const profile=u.boss?BOSS_PROFILES[u.bossId||getStage().chapter]:null,s=u.boss&&(battle.round-1)%5===1?{name:profile.wave,type:'magic',power:1.1,mp:0,range:3,area:1,heightRange:2,element:profile.element,status:profile.status,chance:save.difficulty==='tactical'?.65:.5}:basic(u);if(u.status.silence&&s.type==='magic'){s.type='physical';s.range=1;}
const moveCredit=enemyMovementCredit(u),moveBudget=Math.floor(moveCredit+1e-9),moveRange=movement(u,moveBudget);
u.approachCredit=moveCredit;
let best=null;if(!specialAction)for(const k of moveRange.keys()){const [x,z]=k.split(',').map(Number),pos=tile(x,z);for(const v of alive('ally'))if(inRange({...u,x,z},tile(v.x,v.z),s)){const score=attackScore(u,pos,v,s)-(dist(u,pos)*.15);if(!best||score>best.score)best={pos,target:v,score};}}
if(best){if(dist(u,best.pos))await animateMove(u,pathfind(u,best.pos));await perform(u,tile(best.target.x,best.target.z),s);}else{const path=enemyPursuitPath(u,s,moveBudget);if(path.length>1)await animateMove(u,path);}
// Spend actual movement cost, then carry only its fractional remainder.
// movement() was computed at the start position, before animateMove().
const unusedCredit=Math.max(0,u.approachCredit-(moveRange.get(key(u.x,u.z))||0));u.approachCredit=unusedCredit-Math.floor(unusedCredit);
u.acted=true;u.moved=true;faceEnemy(u);persist();refreshUI();if(checkEnd())break;await sleep(180);}
if(battle.phase==='enemy'){battle.round++;battle.phase='player';await phaseStart('ally');checkEnd();if(battle.phase==='player'){announce('PLAYER PHASE');sfx('turn');selected=(alive('ally').find(u=>!u.acted)||alive('ally')[0])?.id;mode='move';}}
busy=false;persist();refreshUI();refreshHighlights();if(battle.phase==='player'&&!alive('ally').some(u=>!u.acted)){await sleep(500);endPlayerTurn();}}
function checkEnd(){if(!battle||!['player','enemy'].includes(battle.phase))return true;const k=battle.units.find(u=>u.heroId==='kyle'),s=getStage();if(!k||k.hp<=0){
 if(k&&save.difficulty==='story'&&!battle.beginnerRescueUsed){
  battle.beginnerRescueUsed=true;
  k.hp=Math.max(1,Math.round(k.maxHp*.4));
  k.status={...k.status,def:2};
  const model=models.get(k.id);if(model)model.visible=true;
  floating(k,'긴급 보호!','#a7f4ca');
  log('하 난이도: 카일이 쓰러질 위기에서 1회 구조되었습니다.');
  toast('긴급 보호! 카일의 HP 40% 회복 · 방어 강화 (전투당 1회)');
  return false;
 }
 finishBattle(false);return true;
}if(!alive('enemy').length){finishBattle(true);return true;}if(battle.round>50){finishBattle(false);return true;}return false;}
function chapterFinalStage(stage){const main=STAGES.filter(s=>s.chapter===stage.chapter&&s.kind!=='side');return main.find(s=>s.kind==='boss')||main.filter(s=>s.kind==='story').sort((a,b)=>b.n-a.n)[0];}
function rollHealthPotion(rand){const roll=rand();return roll<.6?'hpSmall':roll<.9?'hpMedium':'hpLarge';}
function collectVictoryLoot(){const collector=battle.units.find(u=>u.team==='ally'&&u.hp>0),summary={gear:0,potions:0,gold:0,items:[]};if(!collector)return summary;for(const item of battle.pickups||[]){if(item.collected)continue;collectPickup({...collector,x:item.x,z:item.z},true);if(!item.collected)continue;summary.items.push({type:item.type,gearId:item.gearId,consumableId:item.consumableId,amount:item.amount,name:item.gearId?GEAR.find(g=>g.id===item.gearId).name:item.type==='gold'?`골드 ${item.amount} G`:CONSUMABLES[item.consumableId||'hpMedium'].name});if(item.gearId)summary.gear++;else if(item.type==='potion')summary.potions+=item.amount;else if(item.type==='gold')summary.gold+=item.amount;}refreshLoot();return summary;}
function applyVictoryRecovery(stage,fallen=new Set()){
 const full=chapterFinalStage(stage)?.id===stage.id,rows=[];if(full)for(const p of save.party)p.hpRatio=1;
 for(const u of battle.units.filter(u=>u.team==='ally')){if(fallen.has(u.heroId))u.hp=0;const before=Math.ceil(u.hp),minorLoss=u.maxHp-before<=u.maxHp*.10,after=full||minorLoss?u.maxHp:Math.min(u.maxHp,before+Math.ceil((u.maxHp-before)*.5));u.hp=after;u.status={};const p=heroRecord(u.heroId);p.hpRatio=after/u.maxHp;rows.push({heroId:u.heroId,name:u.name,before,after,maxHp:u.maxHp,recovered:after-before,revived:fallen.has(u.heroId),minorLoss:!full&&minorLoss});}
 const rand=seeded(((battle.mapSeed??stage.seed)^stage.seed^0x7632ab)>>>0),potion=rollHealthPotion(rand);save.consumables[potion]=(save.consumables[potion]||0)+1;return {full,rows,potion};
}
function recoveryChime(){if(!save.settings.sound)return;unlockAudio();if(!audioCtx)return;[523.25,659.25,783.99,1046.5,1318.51].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+i*.1;o.type='sine';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.055,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+.65);o.connect(g);g.connect(audioCtx.destination);o.onended=()=>{o.disconnect();g.disconnect();};o.start(t);o.stop(t+.7);});}
function victoryPreview(rows){
 const canvas=$('#victoryCast');let r;try{r=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});}catch{$('#victoryConfirm').disabled=false;return;}r.setPixelRatio(Math.min(devicePixelRatio,1.5));const scene=new THREE.Scene(),cam=new THREE.OrthographicCamera(-3,3,2,-2,.1,40);scene.add(new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const light=new THREE.DirectionalLight(0xffedc7,3);light.position.set(-3,8,6);scene.add(light);const group=new THREE.Group();scene.add(group);const cols=rows.length<=3?rows.length:3,lineCount=Math.ceil(rows.length/cols),models=rows.map((row,i)=>{const u=battle.units.find(u=>u.heroId===row.heroId),m=figure(u);m.rotation.y=0;m.position.set((i%cols-(cols-1)/2)*1.3,(lineCount-1-Math.floor(i/cols))*1.45,0);group.add(m);return m;});const sparks=[];for(let i=0;i<24;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.03,5,4),new THREE.MeshBasicMaterial({color:i%2?0xb1f3bc:0xffe39b,transparent:true,opacity:0,depthWrite:false}));group.add(m);sparks.push(m);}
 let frame=0,start=performance.now(),chimed=false;function draw(now){frame=requestAnimationFrame(draw);const elapsed=now-start,q=clamp((elapsed-250)/1550,0,1),ease=1-(1-q)**3,w=canvas.clientWidth,h=canvas.clientHeight;r.setSize(w,h,false);const span=lineCount===1?1.85:3.3,center=lineCount===1?.65:1.38;cam.left=-span*w/h/2;cam.right=span*w/h/2;cam.top=span/2;cam.bottom=-span/2;cam.position.set(0,center,10);cam.lookAt(0,center,0);cam.updateProjectionMatrix();models.forEach((m,i)=>{m.userData.body.position.y=Math.sin(now*.002+i)*.025;});sparks.forEach((m,i)=>{const hero=models[i%models.length],a=i*2.4;m.position.set(hero.position.x+Math.cos(a)*.35,hero.position.y+.2+((elapsed*.0005+i*.11)%1)*1.1,.3);m.material.opacity=q>0&&q<1?.7:0;});for(const row of rows){const hp=Math.round(row.before+(row.after-row.before)*ease);const el=$(`[data-recovery-hp="${row.heroId}"]`);if(el)el.textContent=`${hp} / ${row.maxHp}`;const bar=$(`[data-recovery-bar="${row.heroId}"]`);if(bar)bar.style.width=hp/row.maxHp*100+'%';}if(!chimed&&elapsed>=250){chimed=true;recoveryChime();}if(elapsed>=1450)$('#victoryPotion')?.classList.add('received');document.querySelectorAll('[data-victory-loot]').forEach((el,i)=>{if(elapsed>=1700+i*130)el.classList.add('received');});if(elapsed>=2500)$('#victoryConfirm').disabled=false;r.render(scene,cam);}frame=requestAnimationFrame(draw);previewCleanup=()=>{cancelAnimationFrame(frame);disposeGroup(group);r.dispose();r.forceContextLoss();};
}
function growthSummaryHTML(events){
 const rows=events||[];if(!rows.length)return '';
 const byHero=new Map();for(const e of rows){if(!byHero.has(e.heroId))byHero.set(e.heroId,[]);byHero.get(e.heroId).push(e);}
 return `<div class="growth-result"><h3>성장 결과</h3>${[...byHero.values()].map(es=>{const levels=es.filter(e=>e.type==='level'),promos=es.filter(e=>e.type==='promotion'),name=es[0].name;const from=levels.length?levels[0].level-1:null,to=levels.length?levels.at(-1).level:null;return `<div class="growth-row"><b>${name}</b>${levels.length?`<span>Lv.${from} → Lv.${to}</span>`:''}${promos.map(e=>`<strong>✨ ${e.fromName} → ${e.toName}</strong>`).join('')}</div>`;}).join('')}</div>`;
}
function showVictoryCelebration(){$('#toast').classList.remove('show');const s=getStage(),r=battle.reward,rest=r.recovery;playBgm('victory');showSheet('VICTORY',`<div class="victory-celebration"><h3>${rest.full?'챕터 클리어 · 완전 회복':'승리 · 잠깐의 휴식'}</h3><canvas id="victoryCast" aria-label="정면을 바라보는 아군의 승리와 회복 연출"></canvas><p class="recovery-rule">${rest.full?'챕터 마지막 전투를 마쳐 전원 HP를 모두 회복합니다.':'잃은 HP의 50% 회복 · 잃은 HP가 최대 HP의 10% 이하면 완전 회복합니다.'}</p><div class="recovery-grid">${rest.rows.map(row=>`<div><b>${row.name}${row.revived?' · 복귀':''}</b><span data-recovery-hp="${row.heroId}">${row.before} / ${row.maxHp}</span><div class="track"><i data-recovery-bar="${row.heroId}" style="width:${row.before/row.maxHp*100}%"></i></div><small>HP ${row.before} → ${row.after} <strong>+${row.recovered}${row.minorLoss?' · 경상 완전 회복':''}</strong></small></div>`).join('')}</div><div id="victoryPotion" class="victory-potion"><div class="portrait">${portraitHTML({type:'potion',consumableId:rest.potion},true)}</div><div><b>승리 보너스 · ${CONSUMABLES[rest.potion].name} ×1</b><small>보관함에 지급되었습니다 · 보유 ${save.consumables[rest.potion]}개</small></div></div><div class="victory-loot"><b>${r.first?'전장에 남은 아이템 회수':'재도전 · 전장 보상 없음'}</b><div class="victory-loot-strip">${(r.autoLoot?.items||[]).map((item,i)=>`<div data-victory-loot="${i}"><div class="loot-recovered-thumb">${portraitHTML(item,true)}</div><small>${item.name}${item.type==='gold'?'':' ×'+item.amount}</small><strong>회수 완료 ✓</strong></div>`).join('')||'<small>남겨둔 아이템이 없습니다.</small>'}</div></div><p class="victory-rewards">${r.first?`남은 전장 자동 수거: 장비 ${r.autoLoot?.gear||0}개 · 포션 ${r.autoLoot?.potions||0}개 · ${r.autoLoot?.gold||0} G`:'재도전 보상: 전장 아이템·골드 없음 · EXP 10%'}</p><p class="victory-rewards">+${r.gold.toLocaleString()} G · 출전 영웅 EXP +${r.xp}</p>${growthSummaryHTML(battle.growthEvents)}<button class="primary" id="victoryConfirm" disabled>확인</button></div>`,()=>{victoryPreview(rest.rows);$('#victoryConfirm').onclick=()=>{const missionDone=missionMode&&save.missionCleared,ending=!missionMode&&s.id==='c9s2';battle=null;save.retry=null;persist();currentChapter=s.chapter;if(missionDone)showMissionClear();else if(ending)showEnding();else showWorld();};},{noClose:true});}

function finishBattle(win){if(!battle||!['player','enemy'].includes(battle.phase))return;battle.phase=win?'victory':'defeat';delete battle.pendingFacing;facingLayer.replaceChildren();preview=null;camFocus=null;if(win&&!battle.rewarded){const s=getStage(),first=!save.completed.includes(s.id),fallen=new Set(battle.units.filter(u=>u.team==='ally'&&u.hp<=0).map(u=>u.heroId));battle.rewarded=true;battle.reward={gold:first?stageFirstClearGold(s):0,xp:Math.max(1,Math.round((70+s.level*14)*(first?1:.1))),first};save.gold+=battle.reward.gold;for(const h of HEROES.filter(h=>h.join<=s.chapter))addXP(h.id,battle.reward.xp);battle.reward.autoLoot=first?collectVictoryLoot():{gear:0,potions:0,gold:0,items:[]};battle.reward.recovery=applyVictoryRecovery(s,fallen);if(first)save.completed.push(s.id);save.chapter=Math.max(save.chapter,s.chapter);playBgm('victory');sfx('win');}else if(!win){playBgm('sad');sfx('lose');}recordBattleStats(win?'win':'loss');if(win&&missionMode)finishMissionVictory(getStage());persist();setTimeout(()=>showResult(),300);}
function recruitForChapter(ch){
 // Story-only recruitment. Mission mode configures their own party levels.
 if(missionMode)return;
 for(const h of HEROES){
  if(h.join===0||h.join>ch)continue;
  const p=heroRecord(h.id);
  if(p.joined||p.level>1){p.joined=true;continue;}
  // Use the existing, already-recruited party, never Lv.1 placeholders.
  const veterans=HEROES.filter(v=>v.join<h.join).map(v=>heroRecord(v.id)).filter(Boolean);
  const average=veterans.length?Math.round(veterans.reduce((sum,v)=>sum+v.level,0)/veterans.length):1;
  p.level=Math.min(HERO_LEVEL_CAP,Math.max(1+h.join*3,average));
  p.xp=0;
  p.joined=true;
 }
}
function startBattle(s,ignoreUnlock=false){if(missionMode&&s.chapter!==save.missionChapter){toast('선택한 챕터의 전투만 진행할 수 있습니다.');return;}if(!ignoreUnlock&&!isUnlocked(s)){showWorld(s.chapter);toast('지나간 추가 전투에는 입장할 수 없습니다.');return;}if(!ignoreUnlock&&s.kind==='story'&&s.n>0){const skipped=STAGES.find(v=>v.chapter===s.chapter&&v.kind==='side'&&v.n===s.n-1);if(skipped&&!save.completed.includes(skipped.id)&&!save.skippedSides.includes(skipped.id))save.skippedSides.push(skipped.id);}recruitForChapter(s.chapter);closeSheet();isTitle=false;battle=makeBattle(s);save.retry=copy(battle);save.retryParty=copy(save.party);save.retryConsumables=copy(save.consumables);save.retryGold=save.gold;save.retryInventory=copy(save.inventory);save.retryLootSeq=save.lootSeq;selected=battle.units[0].id;preview=null;skill=null;busy=false;mode='move';buildScene();refreshUI();persist();playBgm(isBossStage(s)?'boss':'battle');announce('PLAYER PHASE');if(s.id==='c0s0')setTimeout(()=>toast(save.difficulty==='story'?'입문 안내 ① 카일 선택 → 파란 칸을 두 번 탭해 이동 → 공격을 선택하세요. 위험하면 물약을 사용하세요.':'카일을 선택한 뒤 파란 칸을 두 번 탭하세요.'),1100);}
// v1.3.3: actions re-render their sheet (sell, equip, tabs, confirm → back). Keep the scroll position
// when the same sheet is drawn again, or when returning to a sheet left earlier while the overlay stayed
// open (confirm dialog → back, sub-page → back). A new sheet starts at the top; closing the overlay forgets all.
const SHEET_HSCROLL='.chaptertabs,.party-strip,.combat-table-wrap,.victory-loot-strip';
const sheetScrollMemo=new Map();
function sheetScrollSnapshot(title){const sheet=$('#sheet');return{title,top:sheet.scrollTop,lefts:[...sheet.querySelectorAll(SHEET_HSCROLL)].map(e=>e.scrollLeft),cols:[...sheet.querySelectorAll('.sheet-col')].map(e=>e.scrollTop)};}
// v1.5.1: in the landscape layout these sheets split into two independently scrolling columns: everything before
// `at` (plus `left`) on the left, the rest on the right. Children keep their handlers; rotating back unwraps them.
const SHEET_SPLITS={'장비 보관함':{at:'.equip-filters',left:['#equipmentCompare']},'여행자의 상점':{at:'h3',left:['#shopParty']},'파티 관리':{at:el=>el.tagName==='H3'&&el.textContent.trim()==='전직'}};
function applySheetColumns(){
 const sheet=$('#sheet'),wrapped=sheet.querySelector(':scope>.sheet-columns'),cfg=SHEET_SPLITS[sheet.dataset.title],land=document.documentElement.classList.contains('layout-landscape');
 if(!wrapped)sheet.classList.remove('sheet-split');
 if(wrapped&&(!land||!cfg)){for(const el of wrapped._kids)sheet.append(el);wrapped.remove();sheet.classList.remove('sheet-split');return;}
 if(wrapped||!land||!cfg)return;
 const kids=[...sheet.children].filter(el=>!el.classList.contains('sheethead')),idx=kids.findIndex(el=>typeof cfg.at==='string'?el.matches(cfg.at):cfg.at(el));if(idx<=0)return;
 const cols=document.createElement('div'),left=document.createElement('div'),right=document.createElement('div');cols.className='sheet-columns';left.className='sheet-col sheet-col-left';right.className='sheet-col sheet-col-right';
 kids.forEach((el,i)=>((cfg.left||[]).some(sel=>el.matches(sel))||i<idx?left:right).append(el));cols._kids=kids;cols.append(left,right);sheet.append(cols);sheet.classList.add('sheet-split');
}
window.addEventListener('tactics-layout',()=>{if(!$('#overlay').hidden)applySheetColumns();});
function restoreSheetHScroll(snap){if(!snap)return;[...$('#sheet').querySelectorAll(SHEET_HSCROLL)].forEach((e,i)=>{if(snap.lefts[i])e.scrollLeft=snap.lefts[i];});}
function showSheet(title,html,bind=()=>{},options={}){stopModelPreview();const active=document.activeElement;const sheet=$('#sheet'),prevTitle=$('#overlay').hidden?null:sheet.dataset.title??null,current=prevTitle===null?null:sheetScrollSnapshot(prevTitle);const keep=current?.title===title?current:sheetScrollMemo.get(title)??null;if(current&&current.title!==title)sheetScrollMemo.set(current.title,current);$('#overlay').hidden=false;sheet.classList.toggle('world-sheet',!!options.worldMap);sheet.dataset.title=title;sheet.innerHTML=`<div class="sheethead"><div><div class="eyebrow">CNATION TACTICS</div><h2>${title}</h2></div>${options.noClose?'':'<button class="iconbtn" id="closeSheet" aria-label="닫기">×</button>'}</div>${html}`;$('#closeSheet')?.addEventListener('click',()=>{if(options.back)options.back();else closeSheet();});const target=options.scrollTop??keep?.top??0;sheet.scrollTop=target;restoreSheetHScroll(keep);const before=sheet.scrollTop;bind();applySheetColumns();if(keep?.cols)[...sheet.querySelectorAll('.sheet-col')].forEach((e,i)=>{if(keep.cols[i])e.scrollTop=keep.cols[i];});if(options.scrollTop!=null||(sheet.scrollTop===before&&before<target-1))sheet.scrollTop=target;$('#sheet').querySelector('button:not([disabled])')?.focus({preventScroll:true});modalBack=options.noClose?()=>{}:options.back||closeSheet;}
function closeSheet(){stopModelPreview();$('#overlay').hidden=true;modalBack=null;sheetScrollMemo.clear();}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#overlay').hidden)modalBack?.();if(e.key==='Tab'&&!$('#overlay').hidden){const f=[...$('#sheet').querySelectorAll('button:not([disabled]),select,input,a[href]')];if(!f.length)return;if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus();}}});
// v1.5.0: skills are numbered from the top of the list; number keys 1-9 pick them directly (pickSkillIndex).
// v1.5.4: Space and Enter confirm small confirmation windows (판매·확인·적 턴으로 진행·다음 대화 ...): the sheet's only enabled
// primary button, when the sheet has at most four buttons besides ×. Menus and lists with many buttons are left alone.
function sheetConfirmButton(){const sheet=$('#sheet'),buttons=[...sheet.querySelectorAll('button')].filter(b=>b.id!=='closeSheet'&&!b.disabled&&!b.classList.contains('dev-spot')&&b.offsetParent!==null),primary=buttons.filter(b=>b.classList.contains('primary'));return buttons.length<=4&&primary.length===1?primary[0]:null;}
function pickSkillIndex(i){if(!canControl())return false;const u=unit();if(!u||u.acted)return false;const id=u.skills[i];if(!id)return false;const s=SKILLS[id];if(u.level<skillUnlock(id,i)){toast(`${s.name}: Lv.${skillUnlock(id,i)}에 열립니다.`);return false;}if(u.status.silence&&s.type!=='physical'){toast('침묵 상태라 마법 스킬을 쓸 수 없습니다.');return false;}if(u.mp<skillCost(u,s)){toast(`${s.name}: MP가 부족합니다.`);return false;}inspectedEnemy=null;inspectedItem=null;skill=s;mode='skill';preview=null;closeSheet();if(s.range===0)preview={type:'action',tile:tile(u.x,u.z)};refreshUI();refreshHighlights();sfx();return true;}
function showSkills(){const u=unit();showSheet(`${u.name}의 스킬`,u.skills.map((id,i)=>{const s=SKILLS[id],locked=u.level<skillUnlock(id,i),silenced=u.status.silence&&s.type!=='physical';return `<button class="choice" data-skill="${id}" data-skill-index="${i}" ${locked||silenced||u.mp<skillCost(u,s)?'disabled':''}><strong>${locked?`Lv.${skillUnlock(id,i)}`:`MP ${skillCost(u,s)}`}</strong>${i<9?`<i class="skill-key">${i+1}</i>`:''}${s.name}${i===4?' ✦':''}<small>${skillDescription(s)}${silenced?' · 침묵 상태':''}</small><small>${SKILL_NOTES[id]||skillExtraNote(s)}</small></button>`;}).join('')+`<p class="footnote">이동 전후 스킬을 사용할 수 있습니다. 제자리에서 스킬을 먼저 쓰면 이동할 수 있습니다. 대기는 턴을 마칩니다.</p>`,()=>{$('#sheet').querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>pickSkillIndex(+b.dataset.skillIndex));});}
function skillDescription(s){return `${ELEMENT[s.element]||({physical:'물리',magic:'마법',heal:'회복',buff:'강화',cleanse:'상태 해제',taunt:'적 유인'}[s.type])} · ${s.power?`${Math.round(s.power*100)}% · `:''}사거리 ${s.range}${s.area?` · 범위 ${s.shape==='square'?'정사각형 ':''}${s.area}`:''}${s.status?` · ${STATUS[s.status]}`:''}${s.buff?` · ${STATUS[s.buff]}`:''}${s.debuff==='slow'?' · 이동 감소':s.debuff==='stun'?' · 행동 제한':''}${s.knockback?' · 넉백':''}${s.cleanse?' · 정화(해로운 상태만)':''}`;}
function showNewGame(){const damaged=readStorySave().kind==='invalid';showSheet('새로운 여정',`<p>에르디아의 운명을 바꿀 여정을 시작합니다.<br>난이도는 야영지에서 바꿀 수 있습니다.</p>${[['story','하 · STORY','적 HP 80% · 공격력 72% · 방어력 90%, 적 -1명. 전투당 카일 긴급 구조 1회, 보스 공격 안내 강화. 입문자 추천.'],['normal','중 · NORMAL','기본 난이도. 지형과 스킬을 활용하세요.'],['tactical','상 · TACTICAL','적 HP 115% · 공격력 120% · 방어력 112%, 적 +1명. 지원·약점 집중 AI, 보스의 진형 압박 강화. 숙련자 추천.']].map(([id,name,desc])=>`<button class="choice" data-new="${id}">${name}<small>${desc}</small></button>`).join('')}${hasStoredSave()?`<p class="danger">새 여정을 시작하면 기존 ${damaged?'손상된':'정상'} 저장 기록을 덮어씁니다. 먼저 원본을 내보내세요.</p>${damaged?'<button class="secondary" id="exportDamaged">손상된 저장 원본 내보내기</button>':''}`:''}`,()=>{$('#exportDamaged')?.addEventListener('click',exportDamagedSave);$('#sheet').querySelectorAll('[data-new]').forEach(b=>b.onclick=()=>{const difficulty=b.dataset.new;if(hasStoredSave()){showSheet('기존 여정을 덮어쓸까요?',`<p>내보내지 않은 이전 기록은 복구할 수 없습니다.</p>${damaged?'<button class="secondary" id="exportDamaged">손상된 저장 원본 내보내기</button>':''}<button class="primary" id="overwrite">새 여정 시작</button><button class="secondary" id="backNew">돌아가기</button>`,()=>{$('#exportDamaged')?.addEventListener('click',exportDamagedSave);$('#overwrite').onclick=()=>newJourney(difficulty);$('#backNew').onclick=showNewGame;});}else newJourney(difficulty);});});}
function hasSave(){return readStorySave().kind==='valid';}
function hasStoredSave(){return ['valid','invalid'].includes(readStorySave().kind);}
function exportDamagedSave(){const record=readStorySave();if(record.kind!=='invalid')return;const url=URL.createObjectURL(new Blob([record.raw],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=`cnation-tactics-damaged-save-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);toast('손상된 저장 원본을 내보냈습니다.');}
function storySaveSummary(data){
 const b=data.battle,stage=b&&['player','enemy'].includes(b.phase)?STAGES.find(s=>s.id===b.stageId):null,ch=stage?stage.chapter:(data.chapter||0);
 const done=data.completed.filter(id=>STAGES.find(s=>s.id===id)?.kind!=='side').length;
 const when=savedAtOf(data,SAVE_KEY),d=when?new Date(when):null,pad=n=>String(n).padStart(2,'0'),time=d?`${d.getMonth()+1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`:'';
 return `${CHAPTERS[ch][0]} · ${stage?`「${stage.name}」 전투 중`:`본편 ${done}전 완료`}${time?` · ${time} 저장`:''}`;
}
function refreshTitleSaveState(){const record=readStorySave(),state=record.kind;$('#continue').hidden=state!=='valid';$('#continue').innerHTML=state==='valid'?`스토리 이어하기<small class="save-summary">${escapeHTML(storySaveSummary(record.data))}</small>`:'스토리 이어하기';$('#recoverSave').hidden=state!=='invalid';$('#newGame').className=state==='valid'?'secondary':'primary';}
function newJourney(difficulty){save=fresh(difficulty);isTitle=false;battle=null;currentChapter=0;closeSheet();playBgm('world');showStory(STAGES[0]);}
const CHAPTER_SCENES=[
 {land:0x7eaa83,shade:0x628c6d,sky:0xc9dfc9,road:0xcbb998,accent:0x8be1bf,kind:'ruin'},
 {land:0xb59a72,shade:0x8a765d,sky:0xe2cbb0,road:0xd9c39b,accent:0xe2a16d,kind:'fort'},
 {land:0x86a3a7,shade:0x698b94,sky:0xc9dce1,road:0xd8cfb7,accent:0x9ddce9,kind:'river'},
 {land:0x628c69,shade:0x476b55,sky:0xb6d2b7,road:0xb9a987,accent:0xb3e185,kind:'forest'},
 {land:0x92899b,shade:0x716d82,sky:0xd2cbdc,road:0xc7b5ac,accent:0xc8a6e8,kind:'city'},
 {land:0xa49370,shade:0x746f60,sky:0xd8cdb2,road:0xc7b89c,accent:0xe6bc72,kind:'camp'},
 {land:0x829a94,shade:0x5b7778,sky:0xc0d9d2,road:0xb9c7bb,accent:0x8be3dd,kind:'crystal'},
 {land:0x6d7180,shade:0x4d5265,sky:0xb6bacc,road:0xa7a5ab,accent:0xb698df,kind:'tower'},
 {land:0xa4a19a,shade:0x757a7b,sky:0xd5d3ca,road:0xddd0b1,accent:0xe5c391,kind:'wall'},
 {land:0x698e8d,shade:0x456b75,sky:0xb4dad5,road:0xa9c4bd,accent:0xb3f3df,kind:'core'}
];
const MAP_LANDMARKS=[
 {main:['gate','shrine','village'],side:['crystal','wagon']},
 {main:['watchtower','fort','gate'],side:['embers','beacon'],boss:'arena'},
 {main:['pass','lookout','bridge'],side:['beacon','camp'],boss:'frost'},
 {main:['tree','spring','greatTree'],side:['roots','spring'],boss:'blight'},
 {main:['rooftops','archive','throne'],side:['archive','watchtower'],boss:'shadow'},
 {main:['flags','fort','camp'],side:['fort'],boss:'machine'},
 {main:['machine','canal','gate'],side:['canal'],boss:'sentinel'},
 {main:['blade','archive','spire'],side:['tracks'],boss:'shadow'},
 {main:['gate','plaza','throne'],side:['camp'],boss:'arena'},
 {main:['corridor','lights','core'],side:['crystal']}
];
function mapRoute(stages){const main=stages.filter(s=>s.kind!=='side'),mainPoints=main.map((_,i)=>({x:[-.7,.72,-.62,.65][i],z:5.4-i*10.8/(main.length-1)}));let mainIndex=0,sideIndex=0;return stages.map(s=>{if(s.kind!=='side')return mainPoints[mainIndex++];const i=sideIndex++,a=mainPoints[Math.min(i,mainPoints.length-2)],b=mainPoints[Math.min(i+1,mainPoints.length-1)];return {x:i%2?-3.25:3.25,z:(a.z+b.z)/2};});}
function mapRibbon(group,points,width,y,color){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p.x,y,p.z))),steps=32,vertices=[],indices=[];for(let i=0;i<=steps;i++){const t=i/steps,p=curve.getPoint(t),d=curve.getTangent(t),nx=-d.z*width/2,nz=d.x*width/2;vertices.push(p.x+nx,y,p.z+nz,p.x-nx,y,p.z-nz);if(i<steps){const k=i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();group.add(new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide})));return curve;}
function mapLandmarkParts(stage,theme,point){const design=MAP_LANDMARKS[stage.chapter],kind=stage.kind==='boss'?design.boss:stage.kind==='side'?design.side[stage.n]:design.main[stage.n],parts=[],stone=stage.chapter<3?0xaaa38a:0x929e94,dark=stage.kind==='boss'?0x694e56:0x536c60,wood=0x765d42,glow=stage.kind==='side'?0xf6d58a:theme.accent,size=1.45,add=(shape,x,y,z,sx,sy,sz,color,rot=0)=>parts.push([shape,[point.x+x*size,.25+(y-.25)*size,point.z+z*size],[sx*size,sy*size,sz*size],color,rot]);
 add('cyl',0,.33,0,.65,.17,.65,stage.kind==='side'?0x695e49:dark);add('cyl',0,.43,0,.54,.06,.54,stage.kind==='boss'?0x9c6764:stone);
 if(kind==='gate'||kind==='corridor'){for(const x of [-.34,.34]){add('box',x,.78,0,.23,.75,.24,stone);add('rock',x,1.19,0,.19,.15,.2,0x817e70);add('cone',x*.95,.62,.16,.07,.3,.08,0x6d895c);}add('box',0,1.22,0,.94,.21,.28,stone);add('rock',0,1.31,.02,.15,.14,.13,glow);if(kind==='gate'){for(const x of [-.13,.13])add('box',x,.69,.1,.21,.48,.07,wood,x<0?-.16:.16);add('rock',-.48,.52,.22,.17,.1,.18,0x747465);}else for(const z of [-.3,.3])add('cone',0,.64,z,.1,.34,.1,glow);}
 else if(kind==='shrine'){add('box',0,.62,0,.7,.23,.5,stone);add('box',0,.78,0,.55,.13,.38,0xc4baa2);add('rock',0,1.01,0,.28,.29,.21,glow);for(const x of [-.38,.38])add('cone',x,.88,.18,.09,.32,.09,0xf1d791);}
 else if(kind==='village'||kind==='camp'){for(const x of [-.28,.29]){add('box',x,.7,0,.35,.4,.36,kind==='camp'?0xbba984:wood);add('cone',x,.98,0,.31,.34,.31,kind==='camp'?0xcfc196:0x8a7150);}add('cone',0,.62,.35,.1,.26,.1,0xffbb62);}
 else if(kind==='crystal'||kind==='lights'||kind==='core'){const count=kind==='lights'?6:kind==='core'?5:4;for(let i=0;i<count;i++){const a=i*Math.PI*2/count,x=Math.cos(a)*.28,z=Math.sin(a)*.28;add('cone',x,.76,z,.12,kind==='core'?.78:.48,.12,i%2?glow:0x87dad4);}add('rock',0,kind==='core'?1.26:.96,0,kind==='core'?.29:.2,kind==='core'?.37:.24,.2,glow);if(kind==='core')add('cyl',0,.65,0,.33,.42,.33,0x536e77);}
 else if(kind==='wagon'){add('box',0,.69,0,.67,.28,.4,wood);add('box',0,.9,0,.56,.17,.34,0xbca37b);for(const x of [-.35,.35])for(const z of [-.25,.25])add('cyl',x,.5,z,.1,.13,.1,0x514637);add('rock',0,1.03,0,.17,.14,.15,glow);}
 else if(kind==='watchtower'||kind==='lookout'||kind==='beacon'||kind==='spire'||kind==='shadow'){const tall=kind==='spire'||kind==='shadow';for(const x of [-.25,.25])for(const z of [-.2,.2])add('cyl',x,.8,z,.07,.83,.07,wood);add('box',0,1.19,0,.71,.17,.61,stone);add('cone',0,tall?1.66:1.42,0,tall?.42:.48,tall?.8:.37,.42,tall?0x514a64:0x795c4d);if(kind==='beacon')add('cone',0,1.47,0,.14,.4,.14,0xffb95f);if(kind==='shadow')add('rock',0,1.55,.18,.16,.2,.11,0xb590d7);}
 else if(kind==='fort'||kind==='arena'||kind==='plaza'){add('box',0,.67,0,.95,.24,.74,stone);for(const x of [-.43,.43]){add('box',x,.96,0,.15,.44,.7,kind==='arena'?0x825d59:stone);add('cone',x,1.25,0,.12,.28,.13,kind==='arena'?0xc77c63:glow);}if(kind==='arena')add('rock',0,1.06,0,.28,.3,.25,0xcf8975);else add('cyl',0,.97,0,.22,.35,.22,glow);}
 else if(kind==='pass'||kind==='frost'){for(const x of [-.32,0,.33]){add('rock',x,.75,x*.35,.3,.47,.31,kind==='frost'?0xa3c9d7:stone);add('cone',x,.99,x*.35,.19,.52,.18,kind==='frost'?0xd0edf1:0x9aafa2);}add('rock',0,.59,.35,.17,.16,.15,glow);}
 else if(kind==='bridge'||kind==='canal'){for(const x of [-.36,.36])add('box',x,.64,0,.17,.29,.8,stone);add('box',0,.8,0,.62,.09,.82,wood);for(const z of [-.34,0,.34])add('box',0,.86,z,.64,.035,.09,0xcaa875);if(kind==='canal')add('box',0,.51,0,.46,.04,.76,0x68b5c5);}
 else if(kind==='tree'||kind==='greatTree'||kind==='blight'||kind==='roots'){const big=kind==='greatTree'||kind==='blight';add('cyl',0,big?.91:.72,0,big?.25:.18,big?.95:.6,big?.25:.18,kind==='blight'?0x534855:wood);for(const x of [-.4,0,.4])add('ball',x,big?1.55:1.17,0,big?.4:.31,big?.35:.27,big?.37:.29,kind==='blight'?0x69516d:theme.shade);if(kind==='roots')for(const x of [-.45,.45])add('cone',x,.57,.2,.12,.48,.12,0x6a5a4a,x<0?-.6:.6);}
 else if(kind==='spring'){add('cyl',0,.58,0,.45,.18,.45,stone);add('cyl',0,.68,0,.34,.06,.34,0x6cbec7);add('cone',0,.99,0,.13,.58,.13,glow);for(const x of [-.4,.4])add('cone',x,.67,.15,.07,.32,.07,0x79b781);}
 else if(kind==='rooftops'||kind==='archive'||kind==='throne'){add('box',0,.78,0,.77,.65,.63,stone);for(const x of [-.33,.33])add('cyl',x,.91,.29,.08,.75,.08,0xd2c4aa);if(kind==='rooftops')add('cone',0,1.32,0,.53,.49,.44,0x76586c);else if(kind==='archive'){add('box',0,1.18,-.05,.48,.23,.37,wood);add('box',0,1.22,.23,.31,.06,.13,0xe5d7a5);}else{add('box',0,1.17,.1,.37,.44,.17,0x72545e);add('cone',0,1.49,.09,.22,.29,.18,glow);}}
 else if(kind==='flags'||kind==='blade'||kind==='tracks'){for(const x of [-.3,.3]){add('cyl',x,.91,0,.04,.95,.04,wood);add('box',x+.11,1.2,0,.23,.23,.04,kind==='blade'?0xaebcc0:glow);}if(kind==='blade')add('cone',0,.85,.25,.13,.85,.09,0xc7d6d8,.6);if(kind==='tracks')for(const z of [-.27,0,.27])add('rock',0,.49,z,.12,.04,.08,0x4c5357);}
 else if(kind==='machine'||kind==='sentinel'){add('box',0,.85,0,.67,.74,.53,0x687c80);for(const x of [-.42,.42])add('cyl',x,.84,0,.14,.54,.14,stone);add('rock',0,1.09,.3,.2,.22,.12,glow);add('cone',0,1.44,0,.19,.42,.18,kind==='sentinel'?0xa6e7df:stone);}
 else if(kind==='embers'){for(const x of [-.29,.28])add('box',x,.68,0,.25,.3,.35,0x76534d);for(const x of [-.17,.05,.2])add('cone',x,.83,.11,.13,.47,.11,0xffa45b);}
 return parts;}
function chapterProp(parts,kind,x,z,r,accent){
 if(kind==='forest'||kind==='ruin'){parts.push(['cyl',[x,.25,z],[.09,.54,.09],0x6a634e],['cone',[x,.72,z],[.39,.8,.39],kind==='forest'?0x376c50:0x5b8b69]);if(kind==='ruin'&&r>.72)parts.push(['cyl',[x+.18,.45,z+.12],[.14,.85,.14],0xb8bd9d]);}
 else if(kind==='river'){parts.push(['rock',[x,.18,z],[.25,.32,.25],0x7897a7],['cone',[x,.42,z],[.1,.3,.1],0xd8eeee]);}
 else if(kind==='crystal'||kind==='core'){parts.push(['rock',[x,.2,z],[.24,.22,.23],0x5b7979],['cone',[x,.58,z],[.15,.65,.15],accent]);}
 else if(kind==='fort'||kind==='city'||kind==='tower'||kind==='wall'){parts.push(['box',[x,.35,z],[.42,.7,.4],kind==='tower'?0x4f5368:0xaaa594],['cone',[x,.78,z],[.34,.35,.32],kind==='fort'?0x956e5e:kind==='wall'?0x8a7771:0x74647d]);}
 else parts.push(['cone',[x,.28,z],[.3,.5,.3],0x8c795c],['box',[x,.13,z+.12],[.42,.13,.3],0xc8b58d]);
}
function renderChapterMap(ch,stages){
 const canvas=$('#journeyMap');if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,antialias:true});}catch{return;}
 const theme=CHAPTER_SCENES[ch],scene=new THREE.Scene(),cam=new THREE.OrthographicCamera(-8,8,8,-8,.1,80),route=mapRoute(stages),mainRoute=route.filter((_,i)=>stages[i].kind!=='side'),parts=[],rand=seeded(8903+ch*491),group=new THREE.Group(),curves=[],mainCurves=[],sideCurves=new Map();
 scene.background=new THREE.Color(theme.sky);scene.add(group,new THREE.HemisphereLight(0xf3f5df,0x415960,2.2));const light=new THREE.DirectionalLight(0xffe7bd,2.4);light.position.set(-5,10,7);scene.add(light);
 parts.push(['box',[0,-.71,0],[10.2,1.3,15.2],theme.shade]);
 for(let i=0;i<mainRoute.length-1;i++){const a=mainRoute[i],b=mainRoute[i+1],mid={x:(a.x+b.x)/2+(i%2?-.25:.25),z:(a.z+b.z)/2},points=[a,mid,b];mapRibbon(group,points,1.08,.265,0x795f43);const curve=mapRibbon(group,points,.83,.285,0xf1d591);curves.push(curve);mainCurves.push(curve);}
 route.forEach((p,i)=>{const stage=stages[i];if(stage.kind!=='side')return;const segment=Math.min(stage.n,mainRoute.length-2),points=[mainRoute[segment],p,mainRoute[segment+1]];mapRibbon(group,points,.65,.267,0x716552);const curve=mapRibbon(group,points,.44,.278,0xc8b48a);curves.push(curve);sideCurves.set(stage.id,curve);});
 const roadSamples=curves.flatMap(curve=>curve.getPoints(30));
 for(let z=0;z<15;z++)for(let x=0;x<10;x++){const px=x-4.5,pz=z-7,h=.24+.07*(Math.sin(x*.55+ch)+Math.cos(z*.7-ch*.4)+2)/4,water=theme.kind==='river'&&Math.abs(px)>3.4&&z>4&&z<11,shade=rand()>.55?theme.land:theme.shade;parts.push(['box',[px,h/2-.18,pz],[.98,h,.98],water?0x6babb9:shade]);if(!water&&rand()>.84&&route.every(p=>Math.hypot(px-p.x,pz-p.z)>1.25)&&roadSamples.every(p=>Math.hypot(px-p.x,pz-p.z)>.85))chapterProp(parts,theme.kind,px,pz,rand(),theme.accent);}
 let mainIndex=0;route.forEach((p,i)=>{const stage=stages[i],offset=stage.kind==='side'?(p.x<0?-.2:.2):mainIndex++%2?1.4:-1.4;parts.push(...mapLandmarkParts(stage,theme,{x:p.x+offset,z:p.z}));});
 group.add(new THREE.Mesh(bake(parts),sharedMat));cam.position.set(7,22,16);cam.lookAt(0,0,0);cam.updateMatrixWorld();
 const arrowFlows=[];
 function arrowMesh(shaft,head,length,color,height){const neck=length*.08,tail=-length*.5,tip=length*.5,v=new Float32Array([-shaft/2,0,tail,shaft/2,0,tail,-shaft/2,0,neck,shaft/2,0,tail,shaft/2,0,neck,-shaft/2,0,neck,-head/2,0,neck,head/2,0,neck,0,0,tip]),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(v,3));const mesh=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,depthWrite:false}));mesh.position.y=height;return mesh;}
 function addArrowFlow(curve,main){if(!curve)return;const count=main?3:2;for(let i=0;i<count;i++){const arrow=new THREE.Group(),shaft=main?.43:.18,head=main?.86:.43,length=main?1.12:.82;arrow.add(arrowMesh(shaft*1.28,head*1.17,length*1.08,0x554423,0),arrowMesh(shaft,head,length,main?0xffe76a:0xe2b24a,.012));group.add(arrow);arrowFlows.push({arrow,curve,start:main?.12:.055,end:main?.88:.445,offset:i/count,speed:main?.23:.18});}}
 const chapterMain=stages.filter(s=>s.kind!=='side'),nextIndex=chapterMain.findIndex(s=>!save.completed.includes(s.id)&&isUnlocked(s));
 if(nextIndex>0&&save.completed.includes(chapterMain[nextIndex-1].id))addArrowFlow(mainCurves[nextIndex-1],true);
 for(const side of stages.filter(s=>s.kind==='side'&&!save.completed.includes(s.id)&&isUnlocked(s)))addArrowFlow(sideCurves.get(side.id),false);
 function positionArrows(ms){for(const flow of arrowFlows){const progress=(ms/1000*flow.speed+flow.offset)%1,t=flow.start+(flow.end-flow.start)*progress,p=flow.curve.getPoint(t),direction=flow.curve.getTangent(t);flow.arrow.position.set(p.x,.36,p.z);flow.arrow.rotation.y=Math.atan2(direction.x,direction.z);flow.arrow.scale.setScalar(.94+.06*Math.sin(progress*Math.PI));}}
 positionArrows(0);
 function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;r.setPixelRatio(Math.min(devicePixelRatio,1.5));r.setSize(w,h,false);const halfH=Math.max(8.2,7.6*h/w);cam.left=-halfH*w/h;cam.right=halfH*w/h;cam.top=halfH;cam.bottom=-halfH;cam.updateProjectionMatrix();r.render(scene,cam);route.forEach((p,i)=>{const v=new THREE.Vector3(p.x,1.1,p.z).project(cam),node=$('#sheet').querySelector(`[data-map-node="${i}"]`);if(node){node.style.left=`${Math.max(8,Math.min(92,(v.x+1)*50))}%`;node.style.top=`${Math.max(9,Math.min(89,(1-v.y)*50))}%`;}});}
 const observer=new ResizeObserver(draw);observer.observe(canvas);draw();let arrowFrame=0,lastArrowFrame=0;if(arrowFlows.length){const animate=ms=>{arrowFrame=requestAnimationFrame(animate);if(document.hidden||ms-lastArrowFrame<40)return;lastArrowFrame=ms;positionArrows(ms);r.render(scene,cam);};arrowFrame=requestAnimationFrame(animate);}previewCleanup=()=>{cancelAnimationFrame(arrowFrame);observer.disconnect();disposeGroup(group);r.dispose();r.forceContextLoss();};
}
// Join scenes precede the first story battle in each recruitment chapter.
const JOIN_SCENES={
 c1s0:[['카일','파수대 쪽에서 연기가 올라오고 있어. 주민들이 아직 남아 있을까?'],['리아','방패를 든 사람이 이쪽으로 와. 우리에게 할 말이 있는 것 같아.'],['브란','나는 브란, 에린의 전사다. 너희가 주민들을 도와줬다고 들었다.',{arrival:'bran'}],['카일','난 카일이고, 이쪽은 리아야. 함께 사람들을 구하러 가자.'],['리아','만나서 반가워요, 브란. 우리가 뒤에서 도울게요.'],['브란','좋다. 내 방패 뒤로 와라. 지금부터 나도 너희와 함께하겠다.',{joined:'bran'}]],
 c2s0:[['카일','추격은 늦췄지만, 이 산길은 처음이야. 어디로 가야 하지?'],['브란','발자국이 지나치게 조용하다. 매복이 있을지도 모른다.'],['세라','잠깐! 앞쪽 길로 가면 안 돼. 나는 세라, 이 산길을 지키는 궁수야.',{arrival:'sera'}],['카일','경고해 줘서 고마워. 나는 카일이야. 안전한 길을 알려 줄 수 있어?'],['브란','함께 가 준다면 큰 힘이 되겠군. 우리는 리아를 지키며 산을 넘고 있다.'],['세라','좋아, 나도 함께할게. 길은 내가 살피고, 적은 내 활로 막겠어.',{joined:'sera'}]],
 c3s0:[['카일','숲에 들어오자마자 공기가 달라졌어. 나무들이 시들고 있어.'],['리아','에테르가 뒤엉켜 있어. 누군가 정령들의 말을 알아들을 수 있다면…'],['루나','여러분, 잠시만요. 저는 루나예요. 이 숲의 정령들이 도움을 청하고 있어요.',{arrival:'luna'}],['리아','반가워요, 루나. 나는 리아예요. 우리도 오염의 원인을 찾고 있어요.'],['카일','나는 카일이야. 위험한 길이지만, 함께라면 숲을 구할 수 있을 거야.'],['루나','저도 동행할게요. 정령들의 목소리를 전하고, 다친 동료들을 돌보겠어요.',{joined:'luna'}]],
 c4s0:[['카일','왕궁까지 왔지만 정문에는 병사들이 너무 많아. 다른 길이 필요해.'],['세라','지붕 위에도 감시자가 있어. 누군가 이쪽으로 내려오는데?'],['네로','쉿, 목소리를 낮춰. 나는 네로. 너희가 찾는 기록이 어디 있는지 알고 있어.',{arrival:'nero'}],['카일','나는 카일이야. 처음 보는 우리를 왜 도와주려는 거지?'],['세라','일단 인사는 반갑게 할게. 대신 함정이라면 내 눈을 피할 수 없을 거야.'],['네로','왕궁이 감춘 진실을 나도 확인하고 싶거든. 나를 동료로 받아 줘. 길은 내가 열게.',{joined:'nero'}]]
};
function storyLines(stage){const intro=!save.completed.includes(stage.id)&&JOIN_SCENES[stage.id];return intro?[...intro,...STAGE_DIALOGUES[stage.id]]:STAGE_DIALOGUES[stage.id];}
function storySceneState(stage,lines,pos){
 const cast=[...new Set(lines.map(([name])=>name))],hasArrival=lines.some(line=>line[2]?.arrival),speakers=cast.slice(0,2),arrival=lines[pos][2]?.arrival,joined=lines[pos][2]?.joined;
 if(hasArrival)for(let i=0;i<=pos;i++)if(lines[i][2]?.arrival){const name=heroDef(lines[i][2].arrival).name;if(!speakers.includes(name))speakers.push(name);}
 return {speakers,arrival,joined,activeSide:['left','right','center'][Math.max(0,speakers.indexOf(lines[pos][0]))],partyBefore:HEROES.filter(h=>h.join<stage.chapter).length};
}
function storyActor(name,ch){const h=HEROES.find(h=>h.name===name);if(h)return {...h,heroId:h.id,team:'ally'};const bossIndex=BOSS_NAMES.findIndex(n=>n===name||n.includes(name));if(bossIndex>0){const profile=BOSS_PROFILES[bossIndex];return {name,model:profile.model,color:profile.color,boss:true,bossId:bossIndex,team:'enemy'};}const m=MONSTERS[(ch*2+1)%MONSTERS.length];return {...m,name,team:'enemy'};}
function renderStoryScene(stage,lines,pos,speakers,arrival=null){
 const canvas=$('#storyCanvas');if(!canvas)return;let r;try{r=new THREE.WebGLRenderer({canvas,antialias:true});}catch{return;}
 const theme=CHAPTER_SCENES[stage.chapter],scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(35,1,.1,40),group=new THREE.Group(),parts=[['box',[0,-.22,0],[11,.38,5],theme.land]];
 scene.background=new THREE.Color(theme.sky);scene.add(group,new THREE.HemisphereLight(0xf4f0df,0x445565,2.3));const light=new THREE.DirectionalLight(0xffe6bd,2.5);light.position.set(-3,7,5);scene.add(light);
 for(let i=0;i<9;i++){const x=-4+i,z=-1.5-(i%3)*.4;if(Math.abs(x)<1.5)continue;chapterProp(parts,theme.kind,x,z,(i%4)/4,theme.accent);}
 group.add(new THREE.Mesh(bake(parts),sharedMat));
 let arriving=null,arrivalRing=null,arrivalFrame=0;
 speakers.forEach((name,i)=>{const actor=storyActor(name,stage.chapter),m=figure(actor),x=[-1.25,1.25,0][i]??0;m.position.set(x,.02,.5);m.scale.setScalar(actor.boss?.82:1.25);m.rotation.y=i===0?.35:i===1?-.35:0;group.add(m);if(actor.heroId===arrival){arriving=m;m.position.x=4;}if(name===lines[pos][0]){const ring=new THREE.Mesh(new THREE.RingGeometry(.53,.61,24),new THREE.MeshBasicMaterial({color:theme.accent,side:THREE.DoubleSide,transparent:true,opacity:.9}));ring.rotation.x=-Math.PI/2;ring.position.set(m.position.x,.04,.5);group.add(ring);if(actor.heroId===arrival)arrivalRing=ring;}});
 cam.position.set(0,2.4,6.1);cam.lookAt(0,.75,0);
 function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;r.setPixelRatio(Math.min(devicePixelRatio,1.5));r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();r.render(scene,cam);}
 const observer=new ResizeObserver(draw);observer.observe(canvas);draw();
 if(arriving){const begin=performance.now();const enter=now=>{const t=Math.min(1,(now-begin)/650),ease=1-(1-t)**3;arriving.position.x=4*(1-ease);if(arrivalRing)arrivalRing.position.x=arriving.position.x;r.render(scene,cam);if(t<1)arrivalFrame=requestAnimationFrame(enter);};arrivalFrame=requestAnimationFrame(enter);}
 previewCleanup=()=>{cancelAnimationFrame(arrivalFrame);observer.disconnect();disposeGroup(group);r.dispose();r.forceContextLoss();};
}
function showReplayWarning(stage){
 if(!save.completed.includes(stage.id)||missionMode){showStory(stage);return;}
 const normalXP=70+stage.level*14;
 showSheet('완료 전투 · 재도전 확인',`<h3>${escapeHTML(stage.name)}</h3><p>이미 클리어한 전투입니다. 신규 전투를 진행하는 것을 추천합니다.</p><div class="codex-card"><b>재도전 보상 안내</b><p class="footnote">경험치: 최초 클리어 보상의 <b>10%</b> (승리 EXP 약 ${Math.round(normalXP*.1)}, 전투 행동 EXP도 10%)<br>전장 장비·아이템·골드: <b>획득 불가</b><br>승리 보너스: <b>회복 물약 1개 유지</b><br>승리 후 HP: <b>잃은 HP의 50% 회복</b> (경상 10% 이하 또는 챕터 최종전은 완전 회복)</p></div><p class="footnote">전투를 다시 즐기고 싶을 때만 도전하세요. 성장·장비 확보는 미완료 정규전투 또는 선택전투를 권장합니다.</p><button class="primary" id="confirmReplay">보상을 확인했습니다 · 재도전</button><button class="secondary" id="cancelReplay">취소 · 월드맵으로</button>`,()=>{$('#confirmReplay').onclick=()=>showStory(stage);$('#cancelReplay').onclick=()=>showWorld(stage.chapter);},{back:()=>showWorld(stage.chapter)});
}
function showStory(stage){
 const music=!save.completed.includes(stage.id)&&JOIN_SCENES[stage.id]?'town':['c9s0','c9s2'].includes(stage.id)?'sad':stage.chapter===0||stage.chapter===6||stage.id==='c4s1'?'mystery':'world';playBgm(music);
 const lines=storyLines(stage),replay=save.completed.includes(stage.id);let pos=0;
 const draw=()=>{
  const active=lines[pos][0],state=storySceneState(stage,lines,pos),{speakers,activeSide}=state;
  showSheet(stage.name,`
   <span class="badge">${CHAPTERS[stage.chapter][0]} · ${CHAPTERS[stage.chapter][2]}${replay?' · 재도전':''}</span>
   <div class="story-scene"><canvas id="storyCanvas" aria-label="${CHAPTERS[stage.chapter][0]}의 인물 대화 장면"></canvas><div class="story-cast ${speakers.length===3?'three-cast':''}">${speakers.map((name,i)=>`<span class="cast-${['left','right','center'][i]} ${name===active?'active':''}">${name}</span>`).join('')}</div></div>
   <div class="story-bubble speaker-${activeSide}"><b>${active}</b><p>${lines[pos][1]}</p></div>
   ${state.arrival?`<div class="join-notice">${heroDef(state.arrival).name} 등장</div>`:state.joined?`<div class="join-notice">${heroDef(state.joined).name} 합류 · 파티 ${state.partyBefore}명 → ${state.partyBefore+1}명</div>`:''}
   <div class="row"><span class="footnote">${pos+1} / ${lines.length}</span><button class="secondary" style="width:auto;margin:0" id="skipStory">대화 건너뛰기</button></div>
   <button class="primary" id="nextStory">${pos===lines.length-1?'전투 준비':'다음 대화'}</button>`,()=>{
    renderStoryScene(stage,lines,pos,speakers,state.arrival);
    $('#nextStory').onclick=()=>{sfx();if(++pos===lines.length)showPrepare(stage);else draw();};
    $('#skipStory').onclick=()=>showPrepare(stage);
   },{back:showWorld});
 };
 draw();
}
function gearReadiness(heroId,chapter){
 const p=heroRecord(heroId),band=gearBandForChapter(chapter);
 const worn=(p?.equipped||[]).map(uid=>GEAR.find(g=>g.id===save.inventory.find(v=>v.uid===uid)?.gearId)).filter(Boolean);
 return {ready:worn.filter(g=>g.band>=band).length,total:worn.length,needed:band};
}
function showPrepare(s){playBgm('town');recruitForChapter(s.chapter);const party=HEROES.filter(h=>h.join<=s.chapter);showSheet('출전 준비',`<div class="eyebrow">${CHAPTERS[s.chapter][0]} · ${s.kind==='side'?'SIDE QUEST':s.kind==='boss'?'BOSS BATTLE':'STORY BATTLE'}</div><h3 style="font-size:23px;margin:12px 0">${s.name}</h3><p>${goalText(s)}<br>50턴 제한 · 추천 Lv.${s.level}<br>${battleRules(s).width}×${battleRules(s).height} · 적 ${battleRules(s).enemyCount}명 · 정예 1체<br>${save.completed.includes(s.id)?'재도전: EXP 10% · 전장 아이템·골드 없음 · 승리 물약 1개 유지':'최초 클리어: 장비 일반 1~2개 보장 · 희귀 20% · 유니크 5%<br>전장 골드 확률 50% · 선택전투 최초 승리 골드 +25%'}<br>전투 시작 시 규칙에 따라 새 지형을 생성합니다.</p><div class="row">${party.map(h=>`<div style="text-align:center"><div class="portrait" style="width:40px;height:44px;font-size:23px">${h.icon}</div><span class="footnote">${h.name}<br>Lv.${heroRecord(h.id).level}<br>${s.chapter>=3?`장비 ${gearReadiness(h.id,s.chapter).ready}/4 ${gearReadiness(h.id,s.chapter).ready<3?'⚠':'✓'}`:''}</span></div>`).join('')}</div><p class="footnote">전투 시작 시 HP는 이전 전투의 회복 후 체력을 이어받고 MP는 모두 회복됩니다. 캐릭터는 챕터 진행에 따라 합류합니다.${s.chapter>=3?'<br>⚠ 장비 숫자는 현재 챕터 수준 이상 장비를 착용한 슬롯 수입니다. 부족하다면 상점·파티 관리에서 교체하세요.':''}</p><button class="primary" id="beginBattle">전투 시작</button><button class="secondary" id="prepareParty">파티 · 장비 · 전직</button>`,()=>{$('#beginBattle').onclick=()=>startBattle(s);$('#prepareParty').onclick=()=>showParty(()=>showPrepare(s),s.chapter);},{back:showWorld});}
function showWorld(ch=currentChapter){
 if(busy)return;
 const available=unlockedChapter();recruitForChapter(available);currentChapter=missionMode?save.missionChapter:Math.max(0,Math.min(available,Number.isInteger(ch)?ch:currentChapter));isTitle=false;$('#title').hidden=true;$('#stagebar').hidden=true;$('#panel').hidden=true;playBgm('world');
 const stages=STAGES.filter(s=>s.chapter===currentChapter&&(missionMode?s.kind!=='side':true)).sort((a,b)=>(a.kind==='boss'?4:a.kind==='side'?.5+a.n*.1:a.n)-(b.kind==='boss'?4:b.kind==='side'?.5+b.n*.1:b.n)),mainStages=STAGES.filter(s=>s.kind!=='side'),sideStages=STAGES.filter(s=>s.kind==='side'),mainDone=mainStages.filter(s=>save.completed.includes(s.id)).length,sideDone=sideStages.filter(s=>save.completed.includes(s.id)).length,nextMainId=mainStages.find(s=>!save.completed.includes(s.id)&&isUnlocked(s))?.id,lastChapterMainId=stages.filter(s=>s.kind!=='side').at(-1)?.id;
 showSheet('에르디아 대륙',`
  <div class="row world-progress"><span class="footnote">${missionMode?`미션 · ${CHAPTERS[currentChapter][0]} · ${stages.filter(s=>save.completed.includes(s.id)).length}/${stages.length}전`: `본편 ${mainDone}/${mainStages.length} · 추가 ${sideDone}/${sideStages.length} 완료`}</span><span class="diff-badge diff-${save.difficulty}">난이도 ${({story:'하',normal:'중',tactical:'상'})[save.difficulty]||'중'}</span><span class="gold">${save.gold.toLocaleString()} G</span></div>
  <div class="chaptertabs">${CHAPTERS.slice(missionMode?currentChapter:0,missionMode?currentChapter+1:available+1).map((c,offset)=>{const i=missionMode?currentChapter:offset;return`<button data-chapter="${i}" class="${i===currentChapter?'on':''}">${i===0?'서막':i===9?'최종장':`${i}장`}</button>`;}).join('')}</div>
  <div class="map-heading"><span class="eyebrow">${CHAPTERS[currentChapter][0]}</span><h3>${CHAPTERS[currentChapter][1]}</h3><p>${CHAPTERS[currentChapter][2]}</p></div>
  <div class="journey-map"><canvas id="journeyMap" aria-label="${CHAPTERS[currentChapter][0]}의 3D 입체 지도"></canvas><div class="map-route-legend"><b>본편 1 → 2 → 3${stages.some(s=>s.kind==='boss')?' → 보스':''}</b><span>◇ 추가 전투는 건너뛰기 가능</span></div>
   ${stages.map((s,i)=>{const done=save.completed.includes(s.id),missed=isSkippedSide(s),open=isUnlocked(s),label=s.kind==='boss'?'보스':s.kind==='side'?'추가 전투':`전투 ${s.n+1}`,state=done?'complete':missed?'missed-extra':!open?'locked':s.kind==='side'?'available-extra':s.id===nextMainId?'next-main':'available-main',labelPosition=s.kind==='side'?(s.n===0?'label-right':'label-left'):s.id===lastChapterMainId?'label-top':s.n===0?'label-bottom':'label-right',labelShift=s.kind==='side'?'':s.n===1?'label-raised label-main-middle':'';return `<button class="map-node ${state} ${labelPosition} ${labelShift}" data-map-node="${i}" data-stage="${s.id}" aria-label="${s.name} · ${label}${missed?' (지나가서 입장 불가)':s.kind==='side'?' (건너뛰기 가능)':''}" ${open?'':'disabled'}><span>${done?'✓':s.kind==='boss'?'♜':s.kind==='side'?'◇':s.n+1}</span><small><strong>${label}</strong><br><span>${s.name}</span></small></button>`;}).join('')}
  </div>

  ${missionMode?'<button class="secondary" id="missionExit">미션 종료 · 타이틀로</button>':''}<div class="row map-actions"><button class="secondary" id="campParty">파티 관리</button><button class="secondary" id="campShop">상점</button><button class="secondary" id="campMenu">설정</button></div>
  ${battle&&['player','enemy'].includes(battle.phase)?'<button class="primary" id="resumeBattle">진행 중인 전투로 돌아가기</button>':''}`,()=>{
   renderChapterMap(currentChapter,stages);
   $('#sheet').querySelectorAll('[data-chapter]').forEach(b=>b.onclick=()=>showWorld(+b.dataset.chapter));
   $('#sheet').querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>{const s=STAGES.find(v=>v.id===b.dataset.stage);if(battle&&['player','enemy'].includes(battle.phase)){toast('진행 중인 전투를 먼저 마치거나 메뉴에서 철수해 주세요.');return;}showReplayWarning(s);});
   $('#missionExit')?.addEventListener('click',()=>showSheet('미션을 종료할까요?',`<p>미션 진행 기록은 자동 저장됩니다. 스토리 기록은 변경되지 않습니다.</p><button class="primary" id="confirmMissionExit">타이틀로</button><button class="secondary" id="cancelMissionExit">취소</button>`,()=>{$('#confirmMissionExit').onclick=exitMission;$('#cancelMissionExit').onclick=()=>showWorld();}));$('#campParty').onclick=()=>showParty(showWorld);$('#campShop').onclick=showShop;$('#campMenu').onclick=()=>showSettings(showWorld);
   $('#resumeBattle')?.addEventListener('click',resumeBattle);
  },{noClose:true,worldMap:true});
}
function unlockedChapter(){if(missionMode)return save.missionChapter;return Math.max(0,...STAGES.filter(isUnlocked).map(s=>s.chapter));}
function showParty(back=showWorld,chapter=unlockedChapter(),id='kyle'){
 if(!battle||!['player','enemy'].includes(battle.phase))playBgm('town');
 const h=heroDef(id),p=heroRecord(id),u=heroStats(p),locked=!!battle&&['player','enemy'].includes(battle.phase);
 showSheet('파티 관리',`
  <div class="chaptertabs">${HEROES.filter(h=>h.join<=chapter).map(h=>`<button data-hero="${h.id}" class="${id===h.id?'on':''}">${h.icon} ${h.name}</button>`).join('')}</div>
  <div class="row"><div><h3 style="margin:0;font-size:24px">${h.name} <span class="footnote">Lv.${p.level}</span></h3><p style="margin:6px 0">${className({...u,heroId:id})}</p></div><span class="gold">${save.gold.toLocaleString()} G</span></div>
  <div class="track"><i style="width:${p.level>=HERO_LEVEL_CAP?100:Math.min(100,p.xp/xpToNextLevel(p.level)*100)}%"></i></div><p class="footnote">EXP ${p.level>=HERO_LEVEL_CAP?'MAX':`${p.xp} / ${xpToNextLevel(p.level)}`} · 최대 Lv.${HERO_LEVEL_CAP}</p>
  <p class="footnote">다음 전투 HP ${Math.round(u.maxHp*(p.hpRatio??1))} / ${u.maxHp} · MP ${u.maxMp} / ${u.maxMp}</p><h3>착용 장비</h3><p class="footnote">역할별 장비 효율 ${equipmentEfficiency(p,chapter).effective}% · 현 챕터 상점 희귀 장비 기준 100% (유니크는 100% 초과 가능)</p>${equipmentBoard(p)}
  <button class="secondary" id="partyBag">장비 보관함 · 장착 변경</button>
  <p class="footnote">장비를 탭하면 전체 보관함이 열립니다. 무기·방어구·악세서리는 전장에서 획득하거나 챕터 상점에서 구입합니다.</p>
  <div class="statsgrid">${[['HP',u.maxHp],['MP',u.maxMp],['ATK',u.atk],['DEF',u.def],['MAG',u.mag],['RES',u.res]].map(([a,b])=>`<div>${a}<b>${Math.round(b)}</b></div>`).join('')}</div>
  <h3>전직</h3><p class="footnote">레벨 도달 시 자동 전직합니다. ${h.id==='kyle'?'카일: Lv.10 기사 → Lv.20 성기사 → Lv.30 소드마스터.':'Lv.10 1차 → Lv.20 2차 전직.'}</p>
  <div class="choice" style="pointer-events:none"><strong>${className({...p,heroId:p.id})}</strong><small>${p.id==='kyle'?(p.classLevel<3?`다음 전직: Lv.${p.classLevel===0?10:p.classLevel===1?20:30}`:'최종 전직 완료'):p.classLevel<2?`다음 전직: Lv.${p.classLevel===0?10:20}`:'최종 전직 완료'}</small></div>
  <h3>패시브</h3>${h.passive.map((v,i)=>`<p style="margin:7px 0;opacity:${p.classLevel>i?1:.45}">${p.classLevel>i?'✓':'◇'} ${v}</p>`).join('')}
  <h3>스킬</h3>${h.skills.map((sid,i)=>`<div class="choice" style="opacity:${p.level>=skillUnlock(sid,i)?1:.45}">${SKILLS[sid].name}<strong>Lv.${skillUnlock(sid,i)}</strong><small>${skillDescription(SKILLS[sid])}</small>${detailedSkill(sid)}</div>`).join('')}
  ${locked?'<p class="footnote">전투 중에는 장착 변경과 전직을 할 수 없습니다.</p>':''}`,()=>{
   modelPreview({...u,heroId:id},'#equipmentHero');
   $('#partyBag').onclick=()=>showInventory(()=>showParty(back,chapter,id),id);
   $('#sheet').querySelectorAll('[data-equip-slot]').forEach(b=>b.onclick=()=>showInventory(()=>showParty(back,chapter,id),id,Math.min(2,+b.dataset.equipSlot),+b.dataset.equipSlot>=2?+b.dataset.equipSlot:null,equippedRecord(p,+b.dataset.equipSlot)?.uid));
   $('#sheet').querySelectorAll('[data-hero]').forEach(b=>b.onclick=()=>showParty(back,chapter,b.dataset.hero));
   // 전직은 레벨 도달 시 자동 처리됩니다. 전투 중에도 레벨업과 함께 즉시 반영됩니다.
  },{back:()=>back()});
}
function showShop(){
 if(!battle||!['player','enemy'].includes(battle.phase))playBgm('town');
 const locked=!!battle&&['player','enemy'].includes(battle.phase),chapter=unlockedChapter(),tier=gearTierForChapter(chapter);
 const stock=GEAR.filter(g=>!g.legacy&&g.band===tier&&g.tier<2&&g.variant===0);
 showSheet('여행자의 상점',`
  <div class="row"><span>체력·마력 회복약</span><span class="gold">${save.gold.toLocaleString()} G</span></div>
  <p class="footnote">${CHAPTERS[chapter][0]} 진행 기준 재고입니다. 새로운 성장 구간에 도착하면 더 강한 기본형이 열립니다. 일반·희귀 대표 장비를 판매하며 유니크는 전장에서만 획득합니다. 구입한 장비는 파티 관리에서 장착하세요.</p>
  ${Object.entries(CONSUMABLES).map(([id,v])=>`<button class="choice" data-buy-consumable="${id}" ${locked||save.gold<v.price?'disabled':''}><strong>${v.price} G</strong>${v.name} · 보유 ${save.consumables[id]}개<small>대상의 최대 ${v.stat.toUpperCase()} ${Math.round(v.ratio*100)}% 회복 · 전투 중 행동 1회 사용</small></button>`).join('')}
  <p class="footnote">현재 파티 장비 효율 ${partyEquipmentEfficiency(chapter).percent}%</p><h3>무기 · 방어구 · 악세서리</h3>
  ${stock.map(g=>`<div class="gear-row">${gearThumb(g)}<div class="gear-copy"><b>${g.name}</b> <span class="badge">${TIERS[g.tier]}</span><small>${GEAR_KINDS[g.kind].label} · ${gearBonusText(g)}<br>사용: ${gearUsers(g)}</small><button class="secondary" data-buy-gear="${g.id}" ${locked||save.gold<gearPrice(g)||save.inventory.length>=1000?'disabled':''}>${gearPrice(g).toLocaleString()} G · 구입</button></div></div>`).join('')}
  <button class="secondary" id="shopParty">파티 관리 · 장비 장착</button>
  ${locked?'<p class="footnote">전투가 끝나면 구매할 수 있습니다.</p>':''}`,()=>{
   $('#sheet').querySelectorAll('[data-buy-consumable]').forEach(b=>b.onclick=()=>{const id=b.dataset.buyConsumable,v=CONSUMABLES[id];if(locked||!v||save.gold<v.price){toast('골드가 부족합니다.');return;}save.gold-=v.price;save.consumables[id]++;persist();sfx();showShop();});
   $('#sheet').querySelectorAll('[data-buy-gear]').forEach(b=>b.onclick=()=>{if(locked)return;const g=GEAR.find(g=>g.id===b.dataset.buyGear);if(!g||!stock.includes(g)||save.gold<gearPrice(g)||save.inventory.length>=1000){toast('골드가 부족하거나 보관함이 가득 찼습니다.');return;}save.gold-=gearPrice(g);save.inventory.push({uid:`loot-${++save.lootSeq}`,gearId:g.id});persist();sfx('heal');toast(`${g.name} 구입 완료`);showShop();});
   $('#shopParty').onclick=()=>showParty(showShop,chapter);
  },{back:showWorld});
}
function useConsumable(id){const v=CONSUMABLES[id],u=unit();if(!v||!u||!canControl()||u.acted||!save.consumables[id])return;const cap=v.stat==='hp'?u.maxHp:u.maxMp;if(u[v.stat]>=cap){toast(`${v.stat.toUpperCase()}가 가득 차 있습니다.`);return;}save.consumables[id]--;const amount=Math.min(cap-u[v.stat],Math.round(cap*v.ratio));u[v.stat]+=amount;const tally=battleTally();if(tally){tally.potions++;if(v.stat==='hp')tally.healed+=amount;}u.acted=u.moved=true;log(`${u.name} ${v.name} ${amount} 회복`);closeSheet();sfx('heal');floating(u,`+${amount} ${v.stat.toUpperCase()}`,'#aff0c7');persist();refreshUI();refreshHighlights();}
function returnToTitle(){
 if(busy){toast('행동이 끝난 후 타이틀로 이동해 주세요.');return;}
 if(isTitle){closeSheet();return;}
 if(missionMode){exitMission();return;}
 
 persist();closeSheet();isTitle=true;preview=null;skill=null;inspectedEnemy=null;inspectedItem=null;mode='move';selected='kyle';
 battle=makeBattle(STAGES[0]);buildScene();refreshUI();refreshTitleSaveState();playBgm('title');
}
function showMenu(){if(busy){toast('행동이 끝난 후 메뉴를 열어 주세요.');return;}if(isTitle){showSettings(()=>{closeSheet();});return;}showSheet('여정 메뉴',`<button class="choice" id="menuTitle">타이틀 화면으로</button><button class="choice" id="menuCodex">백과사전 · 전체 공개</button><button class="choice" id="menuBag">장비 보관함</button><button class="choice" id="menuWorld">월드맵 · 야영지</button><h3>회복약 · 선택한 아군에게 사용</h3>${Object.entries(CONSUMABLES).map(([id,v])=>`<button class="choice" data-use-consumable="${id}" ${!canControl()||unit()?.acted||!save.consumables[id]?'disabled':''}>${v.name} <strong>${save.consumables[id]}개</strong><small>최대 ${v.stat.toUpperCase()} ${Math.round(v.ratio*100)}% 회복 · 행동 종료</small></button>`).join('')}<button class="choice" id="menuLog">전투 기록</button><button class="choice" id="menuSave">💾 저장 / 불러오기</button><button class="choice" id="menuSettings">설정</button><button class="choice" id="menuHelp">플레이 방법</button>${battle&&['player','enemy'].includes(battle.phase)?'<button class="choice" id="menuRetreat">전투 철수<small>진행 중인 전투는 초기화됩니다.</small></button>':''}`,()=>{$('#menuTitle').onclick=returnToTitle;$('#menuCodex').onclick=()=>showEncyclopedia('overview',showMenu);$('#menuBag').onclick=()=>showInventory(showMenu);$('#menuWorld').onclick=()=>showWorld(getStage()?.chapter||0);$('#sheet').querySelectorAll('[data-use-consumable]').forEach(b=>b.onclick=()=>useConsumable(b.dataset.useConsumable));$('#menuLog').onclick=()=>showSheet('전투 기록',`<div class="battlelog">${(battle?.log||['아직 전투 기록이 없습니다.']).slice().reverse().map(l=>`<div>${escapeHTML(l)}</div>`).join('')}</div>`,()=>{},{back:showMenu});$('#menuSave').onclick=()=>showSaveManager(showMenu);$('#menuSettings').onclick=()=>showSettings(showMenu);$('#menuHelp').onclick=()=>showHelp(showMenu);$('#menuRetreat')?.addEventListener('click',()=>showSheet('전투에서 철수할까요?',`<p>전투 시작 전 파티와 회복약 상태로 돌아갑니다.</p><button class="primary" id="doRetreat">철수</button><button class="secondary" id="cancelRetreat">계속 전투</button>`,()=>{$('#doRetreat').onclick=()=>{if(battle&&['player','enemy'].includes(battle.phase))recordBattleStats('retreat');restoreRetryProgress();battle=null;save.retry=null;persist();showWorld();};$('#cancelRetreat').onclick=closeSheet;}));});}
function showSettings(back=closeSheet){showSheet('설정 · 저장',`${isTitle?'<button class="choice" id="settingsTitle">타이틀 화면으로</button>':''}<div class="settings-row"><span>게임 속도</span><select id="setSpeed" aria-label="게임 속도">${[1,1.5,2].map(v=>`<option value="${v}" ${save.settings.speed===v?'selected':''}>×${v}</option>`).join('')}</select></div><div class="settings-row"><span>효과음 · BGM</span><button id="setSound">${save.settings.sound?'켜짐':'꺼짐'}</button></div><div class="settings-row"><span>배경음악 볼륨</span><select id="setBgmVolume" aria-label="배경음악 볼륨">${BGM_VOLUMES.map(v=>`<option value="${v}" ${bgmVolume()===v?'selected':''}>${v?Math.round(v*100)+'%':'끄기'}</option>`).join('')}</select></div><div class="settings-row"><span>화면 품질</span><select id="setQuality" aria-label="화면 품질"><option value="1" ${save.settings.quality===1?'selected':''}>표준</option><option value="0" ${save.settings.quality===0?'selected':''}>절전</option></select></div><div class="settings-row"><span>난이도</span><select id="setDifficulty" aria-label="난이도" ${battle&&['player','enemy'].includes(battle.phase)&&!isTitle?'disabled':''}>${['story','normal','tactical'].map(v=>`<option ${save.difficulty===v?'selected':''}>${v}</option>`).join('')}</select></div><h3>게임 저장</h3><p>자동 저장과 수동 저장 슬롯 3개를 기기에 보관합니다. 장기 보관용 JSON 파일 내보내기도 지원합니다.</p><button class="primary" id="openSaveManager">저장 / 불러오기 · 슬롯 3개</button><button class="secondary" id="settingsHelp">플레이 방법</button><p class="footnote">ver.${GAME_VERSION} · 배경음악 기본 볼륨 50% · 효과음 자체 생성<br>인터넷에 연결한 상태로 한 번 실행한 뒤 홈 화면에 추가하세요. 오프라인 데이터는 브라우저가 삭제할 수 있습니다.</p><button id="endingTest" class="dev-spot" tabindex="-1" aria-hidden="true"></button>`,()=>{$('#settingsTitle')?.addEventListener('click',returnToTitle);$('#setSpeed').onchange=e=>{save.settings.speed=+e.target.value;persistSettings();};$('#setSound').onclick=()=>{toggleSound();showSettings(back);};$('#setBgmVolume').onchange=e=>{save.settings.bgmVolume=+e.target.value;filePlayer?.setVolume(bgmGain());soundtrack?.setVolume(.75*bgmGain());if(bgm)bgm.volume=bgmGain();persistSettings();};$('#setQuality').onchange=e=>{save.settings.quality=+e.target.value;renderer.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.75));resize();persistSettings();};$('#setDifficulty').onchange=e=>{save.difficulty=e.target.value;persistSettings();};$('#openSaveManager').onclick=()=>showSaveManager(()=>showSettings(back));$('#settingsHelp').onclick=()=>showHelp(()=>showSettings(back));$('#endingTest').onclick=()=>showEndingTest(back);},{back});}
function persistSettings(){if(missionMode){persist();return;}if(isTitle&&hasSave()){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY));s.settings=save.settings;s.difficulty=save.difficulty;localStorage.setItem(SAVE_KEY,JSON.stringify(s));}catch{}}else persist();}
function toggleSound(){save.settings.sound=!save.settings.sound;$('#sound').textContent=save.settings.sound?'♪':'♩';if(save.settings.sound){unlockAudio();sfx();}else stopBgmPlayback();persistSettings();}
function showHelp(back=closeSheet){showSheet('플레이 방법',`<h3>한 턴에 이동 한 번, 행동 한 번</h3><p>아군을 선택하면 파란 이동 범위가 나타납니다. 목적지를 한 번 탭해 경로를 확인하고, 같은 칸을 다시 탭하거나 확정 버튼을 눌러 이동하세요.</p><p>공격 또는 스킬을 누른 뒤 대상을 탭하면 예상 피해가 나타납니다. 다시 탭해 확정합니다. 제자리에서 공격·스킬을 먼저 쓰면 그 뒤 한 번 이동할 수 있습니다. 회복약·대기는 이동까지 마칩니다.</p><p>공격·스킬과 남은 이동 후 대기를 누르면 캐릭터 주변의 네 화살표로 마지막 방향을 한 번 정합니다. ‘현재 방향 유지’를 누르면 지금 방향으로 확정합니다. 방향 선택은 추가 이동·행동을 소모하지 않습니다. 공격·스킬·이동 직후에는 방향을 묻지 않습니다.</p><h3>전장을 읽어 보세요</h3><p>숲·잡초·모래 이동 비용 2, 늪 3, 물은 통과할 수 없습니다. 높이 차가 JUMP를 넘으면 이동할 수 없습니다. 높은 곳과 적의 옆·뒤에서 공격하면 피해가 커집니다. 카일이 쓰러지면 패배합니다.</p><p>🔥 불·💧 물·🪽 바람 속성 공격은 💧 물→🔥 불→🪽 바람→💧 물 순으로 유리합니다. 속성 공격 약점 125%, 내성 75%, 무속성 공격 100%입니다. 냉기는 물로 취급합니다. 골렘 계열은 마법 피해 35% 적용 (65% 감소), 유령 계열은 무속성 물리 피해 35% 적용 (65% 감소)입니다. 화염검처럼 속성이 붙은 물리 공격은 유령에게 피해 60% 적용 (40% 감소)입니다. 속성 상성은 별도로 곱하며 화상·독의 최대 HP 비례 지속 피해에는 이뮤니티 감소를 적용하지 않습니다. 독·화상은 지속 피해, 빙결은 이동 감소, 침묵은 스킬 제한, 수면·기절은 행동 제한입니다.</p><h3>난이도 안내</h3><p>하(STORY): 중 난이도 대비 적 HP 80%·공격력 72%·방어력 90%, 적 -1명, 카일이 쓰러지면 전투당 1회 HP 40%로 긴급 구조되고 2페이즈 방어 강화가 적용됩니다. 보스 위험 공격 예고도 자세히 표시됩니다.<br>중(NORMAL): 기준 능력치 100%, 기본 AI 및 보스 패턴.<br>상(TACTICAL): 중 난이도 대비 적 HP 115%·공격력 120%·방어력 112%, 적 +1명. 적이 지원·체력이 낮은 아군과 속성 약점을 노리고 보스가 밀집 진형을 겨냥합니다. 보스의 소환수도 강화됩니다.</p><h3>시점 조작</h3><p>한 손가락 드래그로 이동, 두 손가락으로 확대·축소합니다. 빠르게 좌우로 쓸거나 회전 버튼을 눌러 90도 회전하세요. ⌖ 버튼은 원래 시점으로 돌아갑니다.</p><h3>키보드 (PC · 노트북)</h3><p>W·A·S·D: 화면 위·왼쪽·아래·오른쪽 이동 (누르고 있으면 계속 이동)<br>R: 화면 90도 회전 · 마우스 휠: 확대·축소<br>F: 공격 · G: 스킬 목록 · H: 대기<br>1~9: 스킬 바로 사용 (스킬 목록 맨 위부터 1번)<br>Space: 턴 종료<br>Space 또는 Enter: 확인 창의 확인·판매·진행 등 주 버튼 실행 (마우스로 판매를 누른 뒤 키보드로 바로 확정)<br>Enter: 전투에서 선택한 행동 확정 · Esc: 선택 취소·창 닫기</p><p>태블릿을 가로로 돌리거나 PC·노트북에서 플레이하면 왼쪽에 전장, 오른쪽에 정보와 행동 버튼이 놓인 가로 화면으로 바뀝니다. 스마트폰은 세로 화면으로 플레이합니다.</p><h3>성장과 모험</h3><p>프롤로그와 8개 챕터, 최종장에 스토리 전투 30개, 선택 임무 15개, 별도 보스전 8개가 있습니다. 선택 임무는 건너뛰어도 됩니다. 클리어한 전투는 다시 도전할 수 있습니다.</p><p>기본 스킬은 Lv.1·4·8·14·20에 열리고 신규 속성 스킬은 개별 레벨에 열립니다. Lv.10·20에는 파티 관리에서 전직하세요. 승리 시 손실 HP의 50%를 회복하며 다음 전투에 이어집니다. 챕터 마지막 전투 승리 시 전원 HP가 모두 회복됩니다. 쓰러진 동료도 일반 승리 후 HP50%로 복귀하고 MP는 매 전투 시작에 모두 회복됩니다. 회복약은 체력 소·중·대와 마력 소·대로 나뉘며 전투 메뉴에서 사용합니다.</p><h3>홈 화면 · 오프라인</h3><p>iPhone은 Safari의 공유 메뉴에서 ‘홈 화면에 추가’, Android는 Chrome 메뉴에서 앱 설치를 선택하세요. HTTPS 주소에서 첫 실행이 완료되면 기본 파일을 오프라인으로 사용할 수 있습니다.</p>`,()=>{},{back});}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function exportSave(){if(missionMode){toast('스토리 저장 파일 관리는 타이틀에서 이용해 주세요.');return;}if(!isTitle)persist();const record=isTitle?readStorySave():{kind:'valid',data:save};if(record.kind==='invalid'){exportDamagedSave();return;}const s=record.kind==='valid'?record.data:save,blob=new Blob([JSON.stringify(s,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`cnation-tactics-save-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}
$('#import').onchange=async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;try{if(file.size>8e6)throw Error('파일이 너무 큽니다 (최대 8MB).');const parsed=JSON.parse(await file.text());const wrapped=parsed?.format==='cnation-tactics-backup-v2';const kind=wrapped?parsed.mode:'story',data=wrapped?parsed.data:parsed;if(!['story','mission'].includes(kind)||!validModeRecord(kind,data))throw Error('지원하지 않거나 손상된 저장 파일입니다.');if(!isTitle&&saveMode()!==kind)throw Error('다른 모드의 파일은 타이틀 화면에서 불러와 주세요.');confirmLoad(kind,()=>data,`파일 (${modeLabel(kind)})`,isTitle?closeSheet:showMenu);}catch(err){toast(err.message||'파일을 읽지 못했습니다.');}};

function showResult(){if(!battle||!['victory','defeat'].includes(battle.phase))return;if(battle.phase==='victory'&&battle.reward?.recovery){showVictoryCelebration();return;}playBgm(battle.phase==='victory'?'victory':'sad');const win=battle.phase==='victory',s=getStage(),r=battle.reward;showSheet(win?'VICTORY':'DEFEAT',`<div class="result"><div class="seal">${win?'✧':'◇'}</div><h3>${win?'전투에서 승리했습니다':'다시 도전할 수 있습니다'}</h3><p>${s.name} · ${battle.round}턴</p>${win?`<div class="rewards"><span class="gold">+${r.gold.toLocaleString()} G</span><p style="margin-bottom:0">모든 출전 영웅 EXP +${r.xp}</p></div>`:'<p>카일이 쓰러졌거나 50턴을 넘겼습니다.<br>전투 시작 상태에서 다시 도전하세요.</p>'}<button class="primary" id="resultNext">${win?'월드맵으로':'다시 도전'}</button>${!win?'<button class="secondary" id="resultWorld">월드맵으로</button>':''}</div>`,()=>{$('#resultNext').onclick=()=>{if(win){const missionDone=missionMode&&save.missionCleared,ending=!missionMode&&s.id==='c9s2';battle=null;save.retry=null;persist();currentChapter=s.chapter;if(missionDone)showMissionClear();else if(ending)showEnding();else showWorld();}else retryBattle();};$('#resultWorld')?.addEventListener('click',()=>{restoreRetryProgress();battle=null;save.retry=null;persist();showWorld(s.chapter);});},{noClose:true});}
function restoreRetryProgress(){if(Number.isFinite(save.retryGold))save.gold=save.retryGold;if(save.retryInventory)save.inventory=copy(save.retryInventory);if(Number.isSafeInteger(save.retryLootSeq))save.lootSeq=save.retryLootSeq;if(save.retryParty)save.party=copy(save.retryParty);if(save.retryConsumables)save.consumables=copy(save.retryConsumables);}
function refreshLegacyPrologueBattle(){
 const stage=STAGES.find(s=>s.id===battle?.stageId);
 if(stage?.chapter!==0||battle.mapRules?.prologueVersion===1||battle.rewarded||battle.phase==='victory')return false;
 const seed=battle.mapSeed;restoreRetryProgress();battle=makeBattle(stage,seed);save.retry=copy(battle);save.retryParty=copy(save.party);save.retryConsumables=copy(save.consumables);save.retryGold=save.gold;save.retryInventory=copy(save.inventory);save.retryLootSeq=save.lootSeq;
 log('프롤로그 입문 밸런스를 적용해 전투 시작 상태로 돌아왔습니다.');persist();return true;
}
function retryBattle(){restoreRetryProgress();battle=copy(save.retry||makeBattle(getStage()));refreshLegacyPrologueBattle();busy=false;preview=null;skill=null;selected=battle.units[0].id;mode='move';closeSheet();buildScene();refreshUI();persist();playBgm(isBossStage(getStage())?'boss':'battle');}
// v1.4.0: story ending — opening, chapter recap, epilogue, journey statistics, credits, FIN, played over
// track 12. Stage 2 will put scripted 3D battle scenes behind the recap cards. showEndingTest() (settings menu)
// plays it with sample data or the current save without changing the save.
const ENDING_OST_URL='https://youtu.be/sd9nIfcOuGQ?si=7WfFx5f8prnp8m6f',ENDING_CONTACT='mmk75@naver.com';
const ENDING_SECTIONS=['opening','recap','epilogue','stats','credits','fin'];
function sampleEndingData(){
 const levels={kyle:40,ria:40,bran:39,sera:39,luna:38,nero:39},chronicle={},mvps=['kyle','ria','bran','sera','luna','nero','sera','kyle','ria','kyle'];
 const blow=(id,c,k,crit)=>{const sk=edSkillFor(id,c,true);return {hero:id,skill:sk.name,skillId:skillIdOf(sk),v:Math.round((60+c*45)*k),crit};},tops=['ria','bran','sera','luna','ria','nero','kyle','sera','nero','ria'];
 for(let c=0;c<10;c++){const joined=HEROES.filter(h=>h.join<=c).map(h=>h.id),top=joined.includes(tops[c])&&tops[c]!==mvps[c]?tops[c]:joined.find(id=>id!==mvps[c]);chronicle[chapterFinalStageId(c)]={turns:[5,7,8,9,8,10,11,9,12,14][c],mvp:mvps[c],date:Date.now()-(10-c)*3*864e5,alive:c===9?6:Math.min(6,2+c),seed:null,last:blow(mvps[c],c,2.4,c%2===0),top:top?blow(top,c,2.8,true):null};}
 const chapters={};for(let c=0;c<10;c++){const battles=[3,6,6,6,7,7,7,8,8,6][c],mvp={};for(const h of HEROES)mvp[h.id]=0;mvp[mvps[c]]=Math.ceil(battles/2);chapters[c]={battles,wins:battles-(c%3===2?1:0),kills:[9,38,52,61,70,78,84,92,101,60][c],damage:[620,5400,9800,14500,19800,24600,29400,34800,41200,32500][c],turns:battles*8,mvp};}
 return {sample:true,difficulty:'normal',levels,chronicle,stats:{chapters,battles:64,wins:57,losses:5,retreats:2,turns:498,kills:812,bossKills:10,damage:248930,crits:143,healed:38420,potions:47,downed:21,goldEarned:52380,gearEarned:96,playMs:(11*60+23)*6e4,maxHit:{v:1874,hero:'ria',skill:SKILLS.meteor?.name||'메테오'},mvp:{kyle:14,ria:11,bran:6,sera:10,luna:8,nero:8}}};
}
function currentEndingData(){ensureStats();return {sample:false,difficulty:save.difficulty,levels:Object.fromEntries(save.party.map(p=>[p.id,p.level])),chronicle:save.chronicle,stats:save.stats};}
function endingColor(n){return '#'+n.toString(16).padStart(6,'0');}
function endingDate(t){const d=new Date(t);return `${d.getMonth()+1}/${d.getDate()}`;}
function endingPlayTime(ms){const m=Math.floor(ms/6e4);return `${Math.floor(m/60)}시간 ${m%60}분`;}
async function runEnding({test=false,start='opening',sample=false,onExit=null,returnBgm=null,recapFrom=0}={}){
 if($('#endingView'))return;
 closeSheet();unlockAudio();
 const data=sample?sampleEndingData():currentEndingData(),prevBgm=returnBgm??playingBgm,view=document.createElement('div');
 view.id='endingView';view.setAttribute('role','dialog');view.setAttribute('aria-label','엔딩');
 view.innerHTML='<div class="ed-stage"></div><button class="ed-skip" hidden>건너뛰기 ▶▶</button>';
 $('#app').append(view);
 const stage=view.querySelector('.ed-stage'),skipBtn=view.querySelector('.ed-skip');
 let skipped=false,wake=null,skipTimer=0,closed=false,onSkipHook=null;pauseMainRender=true;sfxScale=.55;
 const wait=ms=>skipped||closed?Promise.resolve():new Promise(r=>{const t=setTimeout(()=>{wake=null;r();},ms);wake=()=>{clearTimeout(t);wake=null;r();};});
 view.addEventListener('click',e=>{if(e.target.closest('a,button')||stage.dataset.section==='fin')return;skipBtn.hidden=false;clearTimeout(skipTimer);skipTimer=setTimeout(()=>skipBtn.hidden=true,3000);});
 skipBtn.onclick=()=>{skipped=true;skipBtn.hidden=true;onSkipHook?.();wake?.();};
 const show=(section,html)=>{stage.dataset.section=section;stage.innerHTML=html;stage.scrollTop=0;};
 const fade=async(el,ms=900)=>{el?.classList.add('ed-out');await new Promise(r=>setTimeout(r,skipped?0:ms));};
 // Music first, so the picture starts with it.
 const url=window.TACTICS_BGM?.[ENDING_BGM_TRACK];
 if(url&&audioCtx&&save.settings.sound&&!failedBgm.has(url)){show('loading','');const p=loadBgm(url).catch(()=>{});if(!loadedBgm.has(url))showLoading(p);await Promise.race([p,new Promise(r=>setTimeout(r,20000))]);}
 playBgm('ending');
 const hero=id=>HEROES.find(h=>h.id===id),sections={
  async opening(){show('opening','<div class="ed-flash"></div><div class="ed-title"><div class="ed-eyebrow">cnation TACTICS</div><h1>THE ARCA CHRONICLE</h1><p>아르카 연대기 · 여정의 끝</p></div>');await wait(6500);await fade(stage.querySelector('.ed-title'));},
  async recap(){
   // v1.4.1: each chapter shows its battle (3D, top) and its record (card, bottom) together.
   show('recap','<div class="ed-recap"><div class="ed-scene"><div class="ed-floats"></div><i class="ed-bar ed-bar-top"></i><i class="ed-bar ed-bar-bottom"></i></div><div class="ed-cardwrap"></div><div class="ed-white"></div></div>');
   const wrap=stage.querySelector('.ed-recap'),cardwrap=wrap.querySelector('.ed-cardwrap'),white=wrap.querySelector('.ed-white'),theater=createEndingTheater(wrap.querySelector('.ed-scene'));
   onSkipHook=()=>theater?.cancel();
   const countUp=el=>{for(const n of el.querySelectorAll('[data-count]:not(.ed-counted)')){n.classList.add('ed-counted');const target=+n.dataset.count,t0=performance.now(),step=now=>{if(!n.isConnected)return;const q=Math.min(1,(now-t0)/1400);n.textContent=Math.round(target*(1-(1-q)**3)).toLocaleString('ko-KR');if(q<1)requestAnimationFrame(step);};requestAnimationFrame(step);}};
   try{
    for(let c=recapFrom;c<10&&!skipped;c++){
     const ch=CHAPTERS[c],sc=CHAPTER_SCENES[c],line=ch[4][ch[4].length-1],rec=data.chronicle?.[chapterFinalStageId(c)],cs=data.stats.chapters?.[c],joined=HEROES.filter(h=>h.join<=c);
     const mvpEntry=Object.entries(cs?.mvp||{}).filter(([id,n])=>n>0&&joined.some(h=>h.id===id)).sort((a,b)=>b[1]-a[1])[0],mvpId=mvpEntry?.[0]||(joined.some(h=>h.id===rec?.mvp)?rec.mvp:null),finisher=(joined.some(h=>h.id===rec?.last?.hero)?rec.last.hero:null)||mvpId||joined[joined.length-1].id;
     wrap.style.cssText=`--sky:${endingColor(sc.sky)};--land:${endingColor(sc.land)};--accent:${endingColor(sc.accent)}`;wrap.classList.toggle('ed-final',c===9);
     cardwrap.innerHTML=`<div class="ed-card"><div class="ed-eyebrow">${ch[0]}</div><h2>${ch[1]}</h2><div class="ed-place">${ch[2]}</div><blockquote><b>${line[0]}</b>${escapeHTML(line[1])}</blockquote>${cs?.battles?`<div class="ed-cstats"><span>전투<b data-count="${cs.battles}">0</b></span><span>처치<b data-count="${cs.kills}">0</b></span><span>피해<b data-count="${cs.damage}">0</b></span></div>`:''}${rec?`<div class="ed-record">마지막 전투 ${rec.turns}턴 클리어 · ${endingDate(rec.date)}</div>`:''}${rec?.last?`<div class="ed-lastblow">마지막 일격 · ${hero(rec.last.hero)?.name} 「${escapeHTML(rec.last.skill)}」 ${rec.last.v.toLocaleString()}${rec.last.crit?' Critical':''}</div>`:''}<div class="ed-party">${joined.map(h=>`<span class="${h.id===mvpId?'ed-mvp':''}">${h.icon}<small>${h.name}</small></span>`).join('')}</div>${mvpId?`<div class="ed-mvp-line">★ MVP ${hero(mvpId).name}</div>`:''}</div>`;
     const card=cardwrap.firstElementChild,built=theater?.build(c,finisher,rec);
     const hooks={onAction:()=>countUp(card),onImpact:()=>card.classList.add('ed-glow'),onRise:()=>{white.classList.add('ed-on');setTimeout(()=>white.classList.remove('ed-on'),1500);}};
     if(c<9)setTimeout(()=>card.classList.add('ed-in'),250);
     if(built)await Promise.race([theater.play(hooks),wait(c===9?24000:16000)]);else{await wait(1500);countUp(card);card.classList.add('ed-glow');await wait(2500);}
     if(c===9){card.classList.add('ed-in');countUp(card);card.classList.add('ed-glow');await wait(5200);}else await wait(1300);
     white.classList.add('ed-flash');if(!skipped)sfx('swing');await wait(260);card.classList.add('ed-out');await wait(140);white.classList.remove('ed-flash');
    }
   }finally{onSkipHook=null;theater?.dispose();}
  },
  async epilogue(){
   show('epilogue','<div class="ed-epilogue"><p class="ed-line"><b>리아</b>이제 들리지 않아. 나를 부르던 코어의 목소리도, 백 년 전의 전쟁도.</p><p class="ed-line"><b>카일</b>그럼 이제 네가 가고 싶은 곳으로 가자. 우리 모두 함께.</p><p class="ed-line ed-narration">에테르는 다시 대륙을 흘렀다.<br>병기의 시대는 끝났지만, 여섯 사람의 여행은 아직 끝나지 않았다.</p></div>');
   for(const el of stage.querySelectorAll('.ed-line')){el.classList.add('ed-in');await wait(4600);}
   await wait(1500);await fade(stage.querySelector('.ed-epilogue'));
  },
  async stats(){
   const st=data.stats,ace=Object.entries(st.mvp||{}).sort((a,b)=>b[1]-a[1])[0],aceHero=ace&&ace[1]>0?hero(ace[0]):null,winRate=st.battles?Math.round(st.wins/st.battles*100):0;
   const cards=[['플레이 시간',null,endingPlayTime(st.playMs)],['총 전투',st.battles,'회'],['승리',st.wins,`회 · 승률 ${winRate}%`],['패배 · 철수',st.losses+st.retreats,`회 (철수 ${st.retreats})`],['총 턴',st.turns,'턴'],['처치한 몬스터',st.kills,'마리'],['보스 처치',st.bossKills,'회'],['총 피해량',st.damage,''],['크리티컬',st.crits,'회'],['총 회복량',st.healed,''],['사용한 회복약',st.potions,'개'],['쓰러진 동료',st.downed,'회'],['획득 골드',st.goldEarned,'G'],['획득 장비',st.gearEarned,'개']];
   show('stats',`<div class="ed-stats"><div class="ed-eyebrow">JOURNEY RECORD · ${({story:'하 · STORY',normal:'중 · NORMAL',tactical:'상 · TACTICAL'})[data.difficulty]||''}</div><h2>여정의 기록</h2>${data.sample?'<div class="ed-sample">테스트용 예시 수치</div>':''}<div class="ed-grid">${cards.map(([label,n,unit])=>`<div class="ed-stat"><span>${label}</span><b${n===null?'':` data-count="${n}"`}>${n===null?unit:'0'}</b>${n===null?'':`<i>${unit}</i>`}</div>`).join('')}<div class="ed-stat ed-wide"><span>최대 한 방</span>${st.maxHit?`<b data-count="${st.maxHit.v}">0</b><i>${hero(st.maxHit.hero)?.name} · ${escapeHTML(st.maxHit.skill)}</i>`:'<b>—</b>'}</div></div><div class="ed-levels">${HEROES.map(h=>`<span>${h.icon} ${h.name}<b>Lv.${data.levels[h.id]||1}</b></span>`).join('')}</div>${aceHero?`<div class="ed-ace"><div class="ed-eyebrow">YOUR ACE</div><div class="ed-ace-icon">${aceHero.icon}</div><h3>당신의 에이스 · ${aceHero.name}</h3><p>MVP ${ace[1]}회 · ${aceHero.job[0]}</p></div>`:''}</div>`);
   const items=[...stage.querySelectorAll('.ed-stat,.ed-levels,.ed-ace')];
   items.forEach((el,i)=>setTimeout(()=>el.classList.add('ed-in'),skipped?0:200+i*160));
   for(const el of stage.querySelectorAll('[data-count]')){const target=+el.dataset.count,t0=performance.now();const step=now=>{if(!el.isConnected)return;const q=Math.min(1,(now-t0)/1600);el.textContent=Math.round(target*(1-(1-q)**3)).toLocaleString('ko-KR');if(q<1)requestAnimationFrame(step);};setTimeout(()=>requestAnimationFrame(step),300);}
   // Long lists scroll down slowly once the cards are in, so the ace card comes into view.
   await wait(6000);if(!skipped&&stage.scrollHeight>stage.clientHeight+4)stage.scrollTo({top:stage.scrollHeight,behavior:'smooth'});
   await wait(16000);await fade(stage.querySelector('.ed-stats'));
  },
  async credits(){
   show('credits',`<div class="ed-credits"><div class="ed-roll"><div class="ed-eyebrow">cnation TACTICS</div><h2>아르카 연대기</h2><p class="ed-role">제작</p><p class="ed-name">cnation (문명국)</p><p class="ed-role">연락</p><p class="ed-name"><a href="mailto:${ENDING_CONTACT}">${ENDING_CONTACT}</a></p><p class="ed-role">Original Soundtrack</p><p class="ed-name"><a href="${ENDING_OST_URL}" target="_blank" rel="noopener">YouTube에서 OST 듣기 ↗</a></p><p class="ed-role">등장인물</p>${HEROES.map(h=>`<p class="ed-name">${h.icon} ${h.name} <small>${h.job[0]}</small></p>`).join('')}<p class="ed-role">사용한 오픈소스</p><p class="ed-name"><small>three.js — MIT License<br>Stylish · Gowun Dodum — SIL Open Font License</small></p><p class="ed-role">그리고</p><p class="ed-name">끝까지 함께해 준 당신</p><p class="ed-thanks">플레이해 주셔서 감사합니다</p></div></div>`);
   const roll=stage.querySelector('.ed-roll');roll.style.animationDuration='42s';
   await wait(43000);await fade(stage.querySelector('.ed-credits'),600);
  },
  async fin(){
   show('fin',`<div class="ed-fin"><div class="ed-eyebrow">THE ARCA CHRONICLE</div><h1>FIN</h1><p>여섯 사람의 여행은 아직 끝나지 않았다.</p><div class="ed-links"><a href="${ENDING_OST_URL}" target="_blank" rel="noopener">🎵 OST 듣기</a><a href="mailto:${ENDING_CONTACT}">✉ ${ENDING_CONTACT}</a></div>${test?'<button class="primary" id="endingReplay">처음부터 다시 보기</button><button class="secondary" id="endingExit">설정으로 돌아가기</button>':'<button class="primary" id="endingContinue">남은 모험 계속하기</button><button class="secondary" id="endingTitle">타이틀로</button>'}</div>`);
   skipBtn.hidden=true;
   await new Promise(resolve=>{
    const close=next=>{closed=true;pauseMainRender=false;sfxScale=1;view.remove();resolve();next();};
    stage.querySelector('#endingReplay')?.addEventListener('click',()=>close(()=>runEnding({test,start:'opening',sample,onExit,returnBgm:prevBgm})));
    stage.querySelector('#endingExit')?.addEventListener('click',()=>close(()=>{playBgm(prevBgm||'title');onExit?.();}));
    stage.querySelector('#endingContinue')?.addEventListener('click',()=>close(()=>showWorld(9)));
    stage.querySelector('#endingTitle')?.addEventListener('click',()=>close(returnToTitle));
   });
  }
 };
 for(const name of ENDING_SECTIONS.slice(Math.max(0,ENDING_SECTIONS.indexOf(start)))){if(closed)break;skipped=false;await sections[name]();}
}
// v1.4.1: ending recap theater. One WebGL renderer for the whole recap; each chapter is built from that
// chapter's last battle (makeBattle with the stage's fixed seed: same map, monsters and boss) and played as a
// script with the game's own attack animations (attackWindup / flyProjectile / spellEffect / hitReaction through
// a ctx), not with game logic. The chapter's MVP lands the finishing blow. pauseMainRender stops the game's
// renderer behind the ending.
var pauseMainRender=false;
const ED_TERRAIN={grass:0x85b08b,forest:0x669a7b,swamp:0x677f77,water:0x3b7d92,stone:0x9bafa7,bridge:0xbda67e,dirt:0xb09269,desert:0xd2b274,scrub:0xa19a67,sand:0xe0c58c};
const edEase=q=>q<.5?2*q*q:1-(-2*q+2)**2/2,edEaseOut=q=>1-(1-q)**3;
function edSkillFor(heroId,c,strongest){const h=heroDef(heroId),lvl=(MISSION_START_LEVELS[c]||1)+2,list=h.skills.map(id=>SKILLS[id]).filter(s=>s&&['physical','magic'].includes(s.type)&&(s.unlock||0)<=lvl);if(!list.length)return basic({...h,heroId,team:'ally'});return strongest?list.reduce((a,b)=>(b.power||1)>(a.power||1)?b:a):list[Math.floor(Math.random()*list.length)];}
function createEndingTheater(host){
 const canvas=document.createElement('canvas');canvas.className='ed-canvas';host.prepend(canvas);
 let r;try{r=new THREE.WebGLRenderer({canvas,antialias:true});}catch{canvas.remove();return null;}
 r.setPixelRatio(Math.min(devicePixelRatio,save.settings.quality===0?1:1.5));r.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,800),root=new THREE.Group(),floats=host.querySelector('.ed-floats');
 scene.add(new THREE.HemisphereLight(0xe4f0ce,0x203844,2.4));const sun=new THREE.DirectionalLight(0xffedc7,3);sun.position.set(-5,12,6);scene.add(sun,root);
 const camPos=new THREE.Vector3(0,12,12),camLook=new THREE.Vector3();
 let move=null,frame=0,last=performance.now(),disposed=false,st=null;
 function draw(now){
  if(disposed)return;frame=requestAnimationFrame(draw);const dt=Math.min(.05,(now-last)/1000);last=now;if(document.hidden)return;
  if(move){const q=Math.min(1,(now-move.t0)/move.ms),e=move.ease(q);camPos.lerpVectors(move.p0,move.p1,e);camLook.lerpVectors(move.l0,move.l1,e);if(q>=1){const done=move.done;move=null;done();}}
  const w=host.clientWidth,h=host.clientHeight;if(w&&h&&(canvas.width!==Math.round(w*r.getPixelRatio())||canvas.height!==Math.round(h*r.getPixelRatio()))){r.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
  camera.position.copy(camPos);camera.lookAt(camLook);
  if(st){for(const p of [...st.ctx.particles]){p.life-=dt;p.m.position.addScaledVector(p.v,dt);p.v.y-=dt*2;p.m.material.opacity=Math.max(0,p.life);if(p.life<=0){st.ctx.fx.remove(p.m);p.m.geometry.dispose();p.m.material.dispose();st.ctx.particles.splice(st.ctx.particles.indexOf(p),1);}}
   for(const m of st.models.values()){const b=m.userData.body;if(!b)continue;b.rotation.z=(m.userData.attackLean||0)+(m.userData.hitLean||0);if(!m.userData.down)b.position.y=m.userData.bobBase+Math.sin(now*.003+m.userData.bob)*.02;}}
  r.render(scene,camera);
 }
 frame=requestAnimationFrame(draw);
 const shot=(pos,look,ms=0,ease=edEase)=>{move?.done();move=null;if(!ms||!st||st.ctx.cancelled){camPos.copy(pos);camLook.copy(look);return Promise.resolve();}return new Promise(done=>{move={p0:camPos.clone(),l0:camLook.clone(),p1:pos.clone(),l1:look.clone(),t0:performance.now(),ms,ease,done};});};
 const pause=ms=>new Promise(res=>{if(st?.ctx.cancelled)return res();const t=setTimeout(res,ms/(st?.ctx.speed||1));st?.ctx.timers.push([t,res]);});
 function clear(){if(st){st.ctx.cancelled=true;for(const [t,res] of st.ctx.timers){clearTimeout(t);res();}}move?.done();move=null;disposeGroup(root);floats.replaceChildren();st=null;}
 function build(c,finisherId,rec=null){
  clear();const stage=STAGES.find(s=>s.id===chapterFinalStageId(c)),sc=CHAPTER_SCENES[c];
  scene.background=new THREE.Color(sc.sky);scene.fog=new THREE.Fog(sc.sky,26,90);
  // v1.4.2: the recorded map seed rebuilds the map and monsters the player actually fought.
  let b=null;try{b=makeBattle(stage,Number.isFinite(rec?.seed)?rec.seed:stage.seed);}catch{try{b=makeBattle(stage,stage.seed);}catch{}}
  if(!b)return false;
  const w=mapWidth(b),h=mapHeight(b),at=new Map(b.tiles.map(t=>[t.x+','+t.z,t])),top=t=>(at.get(t.x+','+t.z)?.height||0)*.33;
  const world=t=>new THREE.Vector3(t.x-(w-1)/2,top(t)+.02,t.z-(h-1)/2);
  const allies=b.units.filter(u=>u.team==='ally').map(u=>({...heroDef(u.heroId),...u})),foes=b.units.filter(u=>u.team==='enemy');
  const boss=foes.find(u=>u.boss)||foes.reduce((a,v)=>v.maxHp>a.maxHp?v:a,foes[0]);
  // Bring the fight together: the boss stands a few tiles in front of the party, two guards beside it,
  // a few more monsters behind. The rest of the encounter is left out.
  const taken=new Set(allies.map(u=>u.x+','+u.z)),open=(x,z)=>x>=0&&z>=0&&x<w&&z<h&&at.get(x+','+z).terrain!=='water'&&!taken.has(x+','+z);
  const cx=allies.reduce((s,u)=>s+u.x,0)/allies.length,cz=allies.reduce((s,u)=>s+u.z,0)/allies.length;
  const near=(x0,z0,dmin,dmax)=>b.tiles.filter(t=>open(t.x,t.z)&&Math.abs(t.x-x0)+Math.abs(t.z-z0)>=dmin&&Math.abs(t.x-x0)+Math.abs(t.z-z0)<=dmax);
  const place=(u,list)=>{const t=list.sort((a,b)=>(a.x+a.z)-(b.x+b.z)).reverse()[0]||list[0];if(!t)return false;u.x=t.x;u.z=t.z;taken.add(t.x+','+t.z);return true;};
  const front=near(cx,cz,4,5).filter(t=>t.x<cx&&t.z<cz);place(boss,front.length?front:near(cx,cz,3,6));
  const enemies=[boss];for(const u of foes.filter(v=>v!==boss)){if(enemies.length>=6)break;const ring=enemies.length<3?near(boss.x,boss.z,1,2).filter(t=>Math.abs(t.x-cx)+Math.abs(t.z-cz)>=3):near(boss.x,boss.z,2,4).filter(t=>t.x+t.z<boss.x+boss.z+1);if(place(u,ring))enemies.push(u);}
  const geoBox=new THREE.BoxGeometry(.975,1,.975),units=[...allies,...enemies];
  for(const t of b.tiles){const height=t.height*.33,depth=height+.6,col=new THREE.Color(ED_TERRAIN[t.terrain]||sc.land);if((t.x+t.z)%2)col.offsetHSL(0,0,-.025);const m=new THREE.Mesh(geoBox,new THREE.MeshToonMaterial({color:col}));m.scale.y=depth;m.position.set(t.x-(w-1)/2,height-depth/2,t.z-(h-1)/2);root.add(m);
   if(t.terrain==='forest'&&!units.some(u=>u.x===t.x&&u.z===t.z)){const tree=new THREE.Mesh(new THREE.ConeGeometry(.3,.85,6),new THREE.MeshToonMaterial({color:0x4b8259}));tree.position.set(m.position.x,height+.45,m.position.z);root.add(tree);}}
  const models=new Map(),target=(u)=>u.team==='ally'?boss:{x:cx,z:cz};
  for(const u of units){const m=figure(u);m.position.copy(world(u));if(u.boss&&!m.userData.bossScaled)m.scale.multiplyScalar(1.15);m.rotation.y=(2-facing(u,target(u)))*Math.PI/2;m.userData.bob=Math.random()*6;m.userData.bobBase=m.userData.body?.position.y||0;root.add(m);models.set(u.id,m);}
  const ctx={fx:new THREE.Group(),models,world,speed:1.25,cancelled:false,particles:[],timers:[]};root.add(ctx.fx);
  const finisher=allies.find(u=>u.heroId===finisherId)||allies[allies.length-1];
  st={c,w,h,world,allies,enemies,boss,models,ctx,finisher,rec,center:world({x:Math.round((cx+boss.x)/2),z:Math.round((cz+boss.z)/2)})};
  // Opening frame: wide and high, so the first picture is never empty.
  const span=Math.max(w,h);camPos.set(st.center.x+span*.6,span*.9,st.center.z+span*.6);camLook.copy(st.center);return true;
 }
 function popup(t,text,crit){const v=st.world(t).add(new THREE.Vector3(0,1.25,0)).project(camera),el=document.createElement('div');el.className='ed-float'+(crit?' ed-crit':'');el.textContent=text;el.style.left=`${(v.x+1)/2*host.clientWidth}px`;el.style.top=`${(1-v.y)/2*host.clientHeight}px`;floats.append(el);setTimeout(()=>el.remove(),1300);}
 async function approach(u,t){const ctx=st.ctx,spots=[[1,0],[-1,0],[0,1],[0,-1]].map(([dx,dz])=>({x:t.x+dx,z:t.z+dz})).filter(p=>p.x>=0&&p.z>=0&&p.x<st.w&&p.z<st.h&&![...st.allies,...st.enemies].some(v=>v!==u&&v.x===p.x&&v.z===p.z&&!st.models.get(v.id)?.userData.down)).sort((a,b)=>dist(a,u)-dist(b,u));const p=spots[0];if(!p)return;const m=st.models.get(u.id),start=m.position.clone(),end=st.world(p);u.x=p.x;u.z=p.z;m.rotation.y=(2-facing(u,t))*Math.PI/2;await tween(380,q=>{m.position.lerpVectors(start,end,q);m.position.y+=Math.sin(q*Math.PI)*.35;},ctx);}
 async function fall(t,big=false){const ctx=st.ctx,m=st.models.get(t.id);if(!m)return;m.userData.down=true;if(big&&!ctx.cancelled)sfx('death');const y=m.position.y,rot=m.rotation.x;await tween(big?900:550,q=>{m.rotation.x=rot-1.35*q;m.position.y=y-.25*q;},ctx);burst(t,0xfff1c0,big?40:24,ctx);await pause(250);m.visible=false;}
 async function strike(u,t,skill,dmg,{crit=false,kill=false,hooks=null,last=false,loud=false}={}){
  const ctx=st.ctx;if(ctx.cancelled)return;const melee=skill.type==='physical'&&(skill.range||1)<=1;
  if(melee&&dist(u,t)>1)await approach(u,t);if(ctx.cancelled)return;
  st.models.get(u.id).rotation.y=(2-facing(u,t))*Math.PI/2;
  if(loud&&melee)setTimeout(()=>{if(!ctx.cancelled)sfx('swing');},220/ctx.speed);
  const a=await attackWindup(u,t,skill,ctx);if(ctx.cancelled)return;
  const projectile=usesProjectile(u,skill,a.melee),hasSpell=skill.type==='magic'||(skill.type==='physical'&&!!skill.element);
  if(projectile)await flyProjectile(u,t,skill,ctx);if(ctx.cancelled)return;
  const spell=hasSpell?spellEffect(t,skill,projectile,ctx):null;if(spell)await spell.impact;if(ctx.cancelled)return;
  if(!spell)burst(t,crit?0xffe08a:0xf3da9d,crit?32:18,ctx);
  // Only the key blows make sound, kept low under the ending music (sfxScale).
  if(loud){if(spell)spellSound(skill.element||'light',true);sfx('hit');if(crit)setTimeout(()=>{if(!ctx.cancelled)sfx('hit');},90);}
  popup(t,crit?`Critical!! ${dmg.toLocaleString()}`:dmg.toLocaleString(),crit);if(last)hooks?.onImpact?.();
  await hitReaction(st.models.get(t.id),a.base,u,crit,ctx);await attackRecovery(a.m,a.base,a.forward,a.melee,ctx);
  if(kill)await fall(t,t===st.boss);
 }
 async function play(hooks={}){
  if(!st)return;const {ctx,boss,finisher,center,c}=st,power=60+c*45,rand=(k)=>Math.round(power*k*(.9+Math.random()*.2));
  const fp=st.world(finisher),bp=st.world(boss),dir=fp.clone().sub(bp).setY(0).normalize(),side=new THREE.Vector3(-dir.z,0,dir.x),span=Math.max(st.w,st.h);
  const orbit=(ang,rad,y,look=center)=>look.clone().add(new THREE.Vector3(Math.cos(ang)*rad,y,Math.sin(ang)*rad)),a0=Math.atan2(dir.z,dir.x)+.85;
  const others=st.allies.filter(u=>u!==finisher),guards=st.enemies.filter(u=>u!==boss),rec=st.rec;
  // Recorded blows (v1.4.2): the real last blow finishes the boss; the battle's biggest hit, when it was a
  // different blow, is the second strike. Without a record the script picks skills and plausible numbers.
  const recSkill=(h,id)=>SKILLS[h?.skillId]||(h&&Object.values(SKILLS).find(v=>v.name===h.skill))||(h&&h.skill==='기본 공격'?basic({...heroDef(id),heroId:id,team:'ally'}):null);
  const last=rec?.last&&rec.last.hero===finisher.heroId?rec.last:null,top=rec?.top&&!(last&&rec.top.hero===last.hero&&rec.top.v===last.v)&&st.allies.some(u=>u.heroId===rec.top.hero)?rec.top:null;
  const finSkill=recSkill(last,finisher.heroId)||edSkillFor(finisher.heroId,c,true),finDmg=last?last.v:rand(c===9?3.2:2.6),finCrit=last?last.crit:true;
  if(c===9){
   // FINAL: look up at the last boss, every hero strikes in turn, the boss falls, the camera rises into the sky.
   // Low angle from the boss's flank (not through the party), slowly circling toward the heroes.
   await shot(bp.clone().addScaledVector(side,7).addScaledVector(dir,-1).setY(bp.y+.4),bp.clone().setY(bp.y+1.6));
   shot(bp.clone().addScaledVector(side,5.4).addScaledVector(dir,2.2).setY(bp.y+.7),bp.clone().setY(bp.y+1.4),2400);await pause(2400);
   // Wide enough to hold the boss and all six heroes.
   hooks.onAction?.();const fight=bp.clone().lerp(fp,.4);shot(fight.clone().addScaledVector(side,8.5).addScaledVector(dir,5).setY(fight.y+7.5),fight,900).then(()=>shot(fight.clone().addScaledVector(side,6.5).addScaledVector(dir,7).setY(fight.y+6.5),fight,4200));
   const order=[...others,finisher];
   await Promise.all(order.map((u,i)=>{const fin=i===order.length-1,isTop=!fin&&top&&top.hero===u.heroId;return pause(i*650).then(()=>fin?strike(u,boss,finSkill,finDmg,{crit:finCrit,kill:true,hooks,last:true,loud:true}):strike(u,isTop||!(guards[i]&&i%2)?boss:guards[i],isTop?recSkill(top,u.heroId)||edSkillFor(u.heroId,c,true):edSkillFor(u.heroId,c,true),isTop?top.v:rand(1.5),{crit:isTop?top.crit:false,kill:!isTop&&!!(guards[i]&&i%2),loud:true}));}));
   if(ctx.cancelled)return;
   for(let i=0;i<5;i++)burst(boss,[0xffe08a,0xb3f3df,0xffffff,0xb784ff,0xff9a6b][i],30,ctx);
   hooks.onRise?.();await shot(center.clone().addScaledVector(dir,span*.5).addScaledVector(side,span*.3).setY(span*2.4),center,4200,edEaseOut);
   return;
  }
  await shot(fp.clone().addScaledVector(dir,4).addScaledVector(side,1.5).setY(fp.y+1.6),fp.clone().setY(fp.y+.7));
  shot(fp.clone().addScaledVector(dir,3).addScaledVector(side,1.1).setY(fp.y+1.3),fp.clone().setY(fp.y+.7),1500);await pause(1500);
  hooks.onAction?.();await shot(orbit(a0,7,4.4),center,700);shot(orbit(a0+.45,6.4,4.1),center,5200);
  if(guards[0])await strike(others[0]||finisher,guards[0],edSkillFor((others[0]||finisher).heroId,c,false),rand(1.2),{kill:true});
  if(top){const u=st.allies.find(v=>v.heroId===top.hero);await strike(u,boss,recSkill(top,u.heroId)||edSkillFor(u.heroId,c,true),top.v,{crit:top.crit,loud:true});}
  else if(others[1]||!guards[0])await strike(others[1]||others[0]||finisher,boss,edSkillFor((others[1]||others[0]||finisher).heroId,c,false),rand(1.4));
  if(ctx.cancelled)return;
  await shot(orbit(a0+.6,4.6,2.7,bp.clone().lerp(fp,.35)),bp.clone().lerp(fp,.35).setY(bp.y+.6),600);
  await strike(finisher,boss,finSkill,finDmg,{crit:finCrit,kill:true,hooks,last:true,loud:true});
  if(ctx.cancelled)return;
  await shot(center.clone().addScaledVector(dir,span*.75).addScaledVector(side,span*.35).setY(span*1.05),center,1700,edEaseOut);
 }
 return {build,play,cancel:()=>{if(st){st.ctx.cancelled=true;for(const [t,res] of st.ctx.timers){clearTimeout(t);res();}}move?.done();move=null;},dispose(){clear();disposed=true;cancelAnimationFrame(frame);r.dispose();r.forceContextLoss();canvas.remove();}};
}
function showEnding(){runEnding();}
function showEndingTest(back){
 let sample=true;
 const draw=()=>showSheet('엔딩 화면 (테스트용)',`<p>스토리 모드 엔딩을 미리 봅니다. 저장 데이터는 바뀌지 않습니다. 재생 중 화면을 탭하면 「건너뛰기」가 나타납니다.</p><h3>표시할 기록</h3><button class="choice ${sample?'on':''}" data-ending-data="sample">예시 수치<small>최종 보스까지 클리어한 것처럼 만든 임의 데이터</small></button><button class="choice ${sample?'':'on'}" data-ending-data="real">내 실제 기록<small>현재 저장 데이터의 통계 (v1.4.0부터 집계)</small></button><h3>시작 위치</h3>${[['opening','처음부터'],['recap','챕터 회상부터'],['final','FINAL 전투부터'],['stats','여정의 기록부터'],['credits','크레딧부터']].map(([id,n])=>`<button class="secondary" data-ending-start="${id}">${n}</button>`).join('')}`,()=>{
  $('#sheet').querySelectorAll('[data-ending-data]').forEach(b=>b.onclick=()=>{sample=b.dataset.endingData==='sample';draw();});
  $('#sheet').querySelectorAll('[data-ending-start]').forEach(b=>b.onclick=()=>{const final=b.dataset.endingStart==='final';runEnding({test:true,start:final?'recap':b.dataset.endingStart,recapFrom:final?9:0,sample,onExit:()=>showSettings(back)});});
 },{back:()=>showSettings(back)});
 draw();
}
function resumeBattle(){if(busy)return;closeSheet();isTitle=false;selected=selected||alive('ally')[0]?.id;refreshUI();refreshHighlights();playBgm(isBossStage(getStage())?'boss':'battle');if(battle.phase==='enemy')enemyTurn();}
function continueJourney(){unlockAudio();if(!missionMode){const record=readStorySave();if(record.kind!=='valid'){refreshTitleSaveState();toast('이어갈 저장 기록을 찾지 못했습니다.');return;}save=record.data;}isTitle=false;battle=save.battle?copy(save.battle):null;currentChapter=save.chapter||0;closeSheet();const updatedTutorial=battle&&refreshLegacyPrologueBattle();if(updatedTutorial)toast('프롤로그 난이도를 조정해 전투를 새로 시작합니다.');if(battle){selected=(battle.units.find(u=>u.team==='ally'&&u.hp>0&&!u.acted)||battle.units.find(u=>u.team==='ally'))?.id;preview=null;skill=null;mode=battle.units.find(u=>u.id===selected)?.moved?'attack':'move';busy=false;buildScene();refreshUI();if(['victory','defeat'].includes(battle.phase))showResult();else resumeBattle();}else{battle=makeBattle(STAGES[0]);buildScene();battle=null;showWorld(currentChapter);}}
// A previous service worker can briefly pair old HTML with the new script.
// Upgrade the small title surface in-place so this transition never crashes.
if(!$('#encyclopediaBtn')){const button=document.createElement('button');button.id='encyclopediaBtn';button.className='secondary';button.textContent='백과사전';$('#newGame').after(button);}
const recoverButton=document.createElement('button');recoverButton.id='recoverSave';recoverButton.className='secondary';recoverButton.textContent='손상된 저장 원본 내보내기';recoverButton.onclick=exportDamagedSave;$('#newGame').after(recoverButton);
if($('.version'))$('.version').innerHTML=`ver.${GAME_VERSION} (<a href="revisions.html">rev. history</a>)`;
// v1.3.5: open the revision history inside the game (iframe) instead of navigating away, so the page,
// the loaded music and its playback position stay as they are.
function showRevisions(){if($('#revisionsView'))return;const view=document.createElement('div');view.id='revisionsView';view.setAttribute('role','dialog');view.setAttribute('aria-modal','true');view.innerHTML=`<iframe src="revisions.html?v=${GAME_VERSION}" title="Revision History"></iframe><button class="iconbtn" id="closeRevisions" aria-label="닫기">×</button>`;$('#app').append(view);const onKey=e=>{if(e.key==='Escape')close();};const close=()=>{view.remove();window.removeEventListener('message',onMessage);document.removeEventListener('keydown',onKey);};document.addEventListener('keydown',onKey);const onMessage=e=>{if(e.origin===location.origin&&e.data==='tactics:close-revisions')close();};window.addEventListener('message',onMessage);$('#closeRevisions').onclick=close;$('#closeRevisions').focus({preventScroll:true});}
$('.version a')?.addEventListener('click',e=>{if(e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();showRevisions();});
const codexStyle=document.createElement('style');codexStyle.textContent='.skill-detail p{font-size:13px;line-height:1.8;margin:10px 0}.skill-detail b{float:none;color:#345c4b}.codex-card p{line-height:1.8}.model-portrait{display:block;width:100%;height:100%;object-fit:contain}.portrait:has(.model-portrait){overflow:hidden}.battle-active header{height:calc(42px + env(safe-area-inset-top));padding:calc(4px + env(safe-area-inset-top)) 14px 4px}.battle-active header .eyebrow{display:none}.battle-active header .brand{font-size:17px;letter-spacing:1px;margin:0}.battle-active header .iconbtn{height:34px;min-width:34px;font-size:17px}.party-chip{font-size:12px;min-width:44px;flex:1;padding:0 7px;white-space:nowrap}.party-strip{gap:6px}.unit-label{width:100px}.hp-line{display:flex;align-items:center;justify-content:center;gap:3px}.hp-line .hp{width:32px;flex:none}.hp-value{font-size:10px;line-height:1.2;font-weight:800;color:#fff;background:transparent;padding:1px 0;white-space:nowrap;-webkit-text-stroke:.5px #000;paint-order:stroke fill;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.enemy-portrait{background:#e1c5ae;color:#875442}.enemy-details{display:grid;gap:5px;margin-top:10px;font-size:12px;line-height:1.45}.hit-report{border:1px solid #bca570;border-radius:6px;padding:7px 10px;margin-bottom:9px;background:#eee3c9;font-size:12px;line-height:1.5}.hit-report button{background:transparent;color:#725b38;font-size:20px;padding:0 5px}.hit-report-rows{max-height:66px;overflow:auto}.forecast-targets{max-height:126px;overflow:auto}.forecast-target{border-bottom:1px solid #c9b788;padding:5px 0}.target-info{background:transparent!important;color:#43665a!important;border:1px solid #9fae91;padding:4px 6px!important;margin:3px 0;font-size:11px!important;border-radius:4px}.forecast .confirmrow{margin-top:7px}.form-wide{width:100%;padding:12px;border-radius:6px;background:#d9e2d0;color:#355142;border:1px solid #b7c5af;margin:10px 0}.settings-row select{max-width:70%}#codexModel{width:100%;height:220px;background:radial-gradient(ellipse,#9abca8,#d8e2d0);border-radius:12px;margin-bottom:10px}.codex-card{border:1px solid #c2cbb7;border-radius:8px;padding:12px;margin:10px 0}.codex-card summary{cursor:pointer;font-weight:700;line-height:1.6}.sheet p{line-height:1.7}.title-bottom small{margin-top:10px}.title-bottom button{padding:12px;margin:6px auto}.title-screen .version{color:#bdd0c1}.growth-result{border:1px solid #c2cbb7;border-radius:10px;padding:10px 12px;margin:12px 0;background:#f2f0df}.growth-result h3{margin:0 0 8px}.growth-row{display:grid;grid-template-columns:72px 1fr;gap:3px 8px;padding:7px 0;border-top:1px solid #d6d0b9}.growth-row:first-of-type{border-top:0}.growth-row span{font-size:12px}.growth-row strong{grid-column:2;color:#8b6a2e;font-size:12px}@media(max-height:700px){.title-bottom p{margin:5px 0}.title-bottom button{padding:10px;margin:4px auto}.title-bottom small{margin-top:6px}}';document.head.append(codexStyle);
const visualStyle=document.createElement('style');visualStyle.textContent=".equip-stage{display:grid;grid-template-columns:minmax(0,1fr) minmax(120px,1.55fr) minmax(0,1fr);grid-template-areas:\"weapon hero armor\" \". accessory .\";gap:8px;align-items:center;padding:12px;margin:10px 0 14px;border:1px solid #b8c8b5;border-radius:12px;background:radial-gradient(ellipse at 50% 32%,#c3deca,#d9e5d6 70%);min-width:0}\n#equipmentHero{grid-area:hero;width:100%;height:190px;min-width:0;display:block}\n.equip-slot{min-width:0;min-height:144px;padding:6px!important;margin:0!important;border:1px solid #aabcae!important;border-radius:10px;background:#eef1e7!important;color:#284d47!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:11px!important;line-height:1.15;text-align:center;overflow:hidden}\n.equip-slot img{width:64px;height:70px;object-fit:contain}\n.equip-slot>span:first-child{font-weight:700}\n.equip-slot strong{font-size:11px;max-width:100%;overflow-wrap:anywhere}\n.equip-empty{font-size:32px;color:#83a499;line-height:68px}\n.slot-0{grid-area:weapon}.slot-1{grid-area:armor}.slot-2{grid-area:accessory;min-height:86px}.slot-2 img{height:42px;width:44px}.slot-2 .equip-empty{line-height:32px}\n.equip-filters{margin-top:12px}\n.gear-row{display:flex;align-items:center;gap:10px;border:1px solid #c2cbb7;border-radius:9px;background:#edf0e6;padding:8px;margin:9px 0;min-width:0}\n.gear-thumb{flex:none;width:70px;height:76px;border-radius:8px;background:radial-gradient(ellipse,#a7c9b3,#dce7d5)}\n.gear-thumb img{width:100%;height:100%;object-fit:contain}\n.gear-copy{flex:1;min-width:0}.gear-copy b{font-size:14px}.gear-copy small{display:block;font-size:12px;line-height:1.5;margin:4px 0}.gear-copy .row{gap:5px}.gear-copy .row button[disabled]{display:none}.gear-copy button{margin:3px 0!important;padding:7px!important;font-size:11px!important}\n.map-heading{margin:12px 0 7px}.map-heading h3{font-size:22px;margin:2px 0}.map-heading p{font-size:12px;line-height:1.45;margin:0;color:#5f7268}\n.journey-map{height:340px;position:relative;overflow:hidden;border-radius:13px;border:1px solid #9eb3a5;background:#acc9b7;box-shadow:inset 0 0 28px #28483844}\n#journeyMap{width:100%;height:100%;display:block}\n.map-node{position:absolute;z-index:2;transform:translate(-50%,-50%);width:75px;min-height:66px;padding:2px 3px!important;margin:0!important;border:0!important;background:transparent!important;color:#183c37!important;text-align:center;filter:drop-shadow(0 2px 2px #17382d80)}\n.map-node>span{display:grid;place-items:center;width:36px;height:36px;margin:auto;border:2px solid #fff5d8;border-radius:50%;background:#356f63;color:#fff7db;font-size:17px;font-weight:800;box-shadow:0 0 0 4px #28554c55,0 3px 8px #17382d99}\n.map-node small{display:block;width:100%;padding:2px 3px;margin-top:3px;border-radius:5px;background:#f2efdded;color:#274c42;font-size:10px;font-weight:700;line-height:1.15;overflow-wrap:anywhere}\n.map-node.complete>span{background:#a6884f}.map-node.locked{opacity:.6;filter:none}.map-node.locked>span{background:#6b7976}.map-node.locked small{display:none}\n.story-scene{position:relative;overflow:hidden;border-radius:12px;margin:10px 0 0;border:1px solid #abc1ad;background:#a8c5b3}\n#storyCanvas{width:100%;height:245px;display:block}\n.story-cast{position:absolute;left:8%;right:8%;bottom:9px;display:flex;justify-content:space-between;pointer-events:none}\n.story-cast span{padding:4px 10px;border-radius:12px;background:#173b38d9;color:#f7f0cf;font-size:12px;font-weight:700}\n.story-bubble{position:relative;margin:-4px 8px 16px;padding:13px 16px 12px;background:#fcf9e9;border:2px solid #a7bba8;border-radius:13px;box-shadow:0 4px 9px #40574c33}\n.story-bubble:before{content:\"\";position:absolute;top:-12px;left:22%;border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:12px solid #a7bba8}\n.story-bubble b{display:block;color:#265d55;font-size:14px;margin-bottom:4px}.story-bubble p{margin:0!important;font-size:15px;line-height:1.7;color:#283e37}\n@media(max-width:430px){.equip-stage{padding:8px;gap:5px;grid-template-columns:minmax(0,1fr) minmax(105px,1.4fr) minmax(0,1fr)}#equipmentHero{height:168px}.equip-slot{min-height:130px}.equip-slot img{width:55px;height:60px}.slot-2{min-height:79px}.journey-map{height:305px}.map-node{width:65px}.map-node small{font-size:9px}#storyCanvas{height:215px}}\n";visualStyle.textContent+="\n/* v0.6.60: one shared equipment layout in party and inventory screens. */\n.equip-stage{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:\"hero hero\" \"weapon armor\" \"accessory accessory2\";gap:8px;align-items:stretch;padding:10px}\n#equipmentHero{height:184px;max-width:230px;justify-self:center}\n.equip-stage .equip-slot{min-height:112px;gap:4px}\n.equip-stage .equip-slot img{width:54px;height:58px}\n.equip-stage .equip-empty{line-height:52px}\n.equip-stage .slot-2,.equip-stage .slot-3{min-height:112px}\n.gear-image-select{flex:none;padding:0!important;margin:0!important;background:transparent!important;border:0!important;border-radius:8px;cursor:pointer;min-width:0}\n.gear-image-select:focus-visible{outline:2px solid #327fae;outline-offset:3px}\n@media(max-width:430px){.equip-stage{grid-template-columns:repeat(2,minmax(0,1fr))}#equipmentHero{height:166px}.equip-stage .equip-slot{min-height:102px}.equip-stage .equip-slot img{width:48px;height:52px}}\n";visualStyle.textContent+="\n.equipment-compare .compare-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}.equipment-compare .compare-actions #equipChosen,.equipment-compare .compare-actions #sellChosen{width:100%;min-width:0;margin:0;padding:12px 6px;font-size:13px;min-height:44px}\n";visualStyle.textContent+='\n/* v0.7.4 equipment upgrade suggestions */\n.gear-row.gear-upgrade{border:2px solid #c29437;background:linear-gradient(110deg,#fff8df,#f1f1e4);box-shadow:0 0 0 2px #e5c77744,0 2px 8px #6e522b22}\n.gear-recommend-badge,.gear-upgrade-count,.slot-upgrade-hint{display:inline-block;background:#d5a93d;color:#352a12;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:800;line-height:1.4}\n.gear-recommend-reason{color:#71521c;font-weight:700}\n.gear-upgrade-count{vertical-align:middle;margin-left:5px}\n.equip-stage .equip-slot.upgrade-slot{border:2px solid #c29437!important;background:#fff6d9!important;box-shadow:inset 0 0 0 1px #f1d992}\n.equip-stage .slot-upgrade-hint{font-size:10px;padding:2px 5px;max-width:100%}\n@media(max-width:430px){.gear-recommend-badge{font-size:10px}.gear-recommend-reason{font-size:11px}}\n';visualStyle.textContent+=`
/* v0.7.10: clear angle and element contributions in attack preview */
.forecast-targets{max-height:min(38vh,300px);overflow-y:auto;overscroll-behavior:contain}
.forecast-target{padding:8px 0;line-height:1.55}
.forecast-name{font-size:12px;margin-bottom:4px}
.direction-forecast,.affinity-forecast{display:grid;gap:2px;padding:6px 8px;margin:4px 0;border-radius:6px;font-size:11px;line-height:1.45}
.direction-forecast{background:#e5eaf2;border:1px solid #b6c8db;color:#355272}
.direction-forecast b{color:#1d527b}
.affinity-forecast{margin:4px 0}
.forecast-total{margin-top:5px;font-size:12px}
@media(max-width:430px){.forecast-targets{max-height:min(36vh,265px)}.direction-forecast,.affinity-forecast{font-size:10.5px}}
/* v0.7.10: battle viewport takes priority; AoE targets use one compact row each. */
.forecast{padding:6px 9px;margin-bottom:6px;font-size:11px;line-height:1.3}
.forecast-heading{font-weight:700;color:#35564d;font-size:11px;margin-bottom:3px}
.forecast-targets{max-height:min(19vh,140px);overflow-y:auto;overscroll-behavior:contain}
.forecast-target{padding:4px 1px;border-bottom:1px solid #c9b788;font-size:11px;line-height:1.35}
.forecast-target:last-child{border-bottom:0}
.forecast-unit{font-weight:750}.forecast-damage{color:#a1513e}.forecast-bonus{color:#426e61}.forecast-health{font-weight:650;white-space:nowrap}
.forecast .confirmrow{margin-top:5px}.forecast .confirmrow button{padding:6px 10px;font-size:12px}
@media(max-width:430px){.forecast-targets{max-height:min(17vh,110px)}.forecast-target{font-size:10.5px}}

`;document.head.append(visualStyle);
const storyStyle=document.createElement('style');storyStyle.textContent='.story-cast span.active{background:#f7efcd;color:#1d5046;box-shadow:0 0 0 2px #327f6f,0 0 14px #fff3bf}.story-bubble.speaker-right:before{left:auto;right:22%}.story-bubble b{display:block;font-size:17px;font-weight:800}.story-cast.three-cast{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}.three-cast .cast-left{grid-column:1;grid-row:1}.three-cast .cast-center{grid-column:2;grid-row:1}.three-cast .cast-right{grid-column:3;grid-row:1}.story-bubble.speaker-center:before{left:calc(50% - 6px);right:auto}.join-notice{text-align:center;padding:8px;border-radius:6px;background:#d3dfcb;color:#295b43;font-size:13px;font-weight:700;margin:8px 0}';document.head.append(storyStyle);
const mapGuideStyle=document.createElement('style');mapGuideStyle.textContent='.map-guide{margin:11px 0 14px;padding:10px 12px;border:1px solid #bdcdb8;border-radius:8px;background:#e5ebde;color:#36584d!important;font-size:12px!important;line-height:1.6!important}.map-guide b{color:#205646}.map-route-legend{position:absolute;top:8px;left:8px;z-index:3;display:grid;gap:2px;padding:5px 8px;border-radius:6px;background:#f5f1dfe8;color:#225247;box-shadow:0 2px 6px #20483744;pointer-events:none;font-size:10px;line-height:1.3}.map-route-legend b{font-size:10px}.map-route-legend span{white-space:nowrap}';document.head.append(mapGuideStyle);
const mapLandmarkStyle=document.createElement('style');mapLandmarkStyle.textContent='.journey-map{height:440px}.map-node{width:86px;min-height:58px}.map-node>span{width:32px;height:32px}.map-node small{font-size:10px;line-height:1.15;background:#f7f2e8ed}.map-node.locked{opacity:.72}.map-node.locked small{display:block}.map-node[data-stage*="q"]>span{background:#8c7652}.map-node[data-stage*="q"].complete>span{background:#a6884f}@media(max-width:430px){.journey-map{height:400px}.map-node{width:72px}.map-node small{font-size:9px}}';document.head.append(mapLandmarkStyle);
const mapNodeStyle=document.createElement('style');mapNodeStyle.textContent=`
.map-node{width:36px;height:36px;min-height:36px;padding:0!important;overflow:visible;filter:none}
.map-node>span{width:36px;height:36px;margin:0;box-sizing:border-box}
.map-node small{position:absolute;top:50%;width:90px;margin:0;padding:0!important;border:0;border-radius:0;background:transparent!important;box-shadow:none;color:#173d32;font-size:11px;font-weight:700;line-height:1.18;overflow-wrap:anywhere;pointer-events:none;text-shadow:0 1px 1px #edf3df,1px 0 1px #edf3df,-1px 0 1px #edf3df,0 -1px 1px #edf3df;transform:translateY(-50%)}
.map-node small strong{font-size:12px;font-weight:900}
.map-node small span{font-size:11px;font-weight:700}
.map-node.label-right small{left:44px;text-align:left}
.map-node.label-left small{right:44px;text-align:right}
.map-node.label-bottom small{top:44px;left:50%;transform:translateX(-50%);text-align:center}
.map-node.label-top small{top:auto;bottom:54px;left:50%;transform:translateX(-50%);text-align:center}
.map-node.label-raised small{top:0;transform:translateY(-100%)}
.map-node.complete>span,.map-node[data-stage*="q"].complete>span{background:#89918c;border-color:#e1e5da;color:#f8faf4;box-shadow:0 0 0 3px #596e6866,0 2px 5px #17382d66}
.map-node.next-main>span,.map-node.available-main>span{background:#ffe16c;border-color:#fff6be;color:#59431b;box-shadow:0 0 0 4px #ffdf746e,0 0 15px #ffeb8b}
.map-node.available-extra>span{background:#b78d3d;border-color:#edcf80;color:#fff8df;box-shadow:0 0 0 3px #9a762b88,0 2px 7px #493b2088}
.map-node.locked{opacity:1;filter:none}
.map-node.locked>span{background:#899688;border-color:#d8dfd3;color:#e1e8db;opacity:.28;box-shadow:none}
.map-node.locked small{display:block;color:#42594b;opacity:.85}
.map-node.missed-extra>span{background:#777d77;border-color:#d4dbd1;color:#ebeee8;opacity:.4;box-shadow:none}
.map-node.missed-extra small{color:#4c6256;opacity:.8}
@media(max-width:430px){.map-node{width:34px;height:34px;min-height:34px}.map-node>span{width:34px;height:34px}.map-node small{width:78px;font-size:10px}.map-node small strong{font-size:11px}.map-node small span{font-size:10px}.map-node.label-right small{left:41px}.map-node.label-left small{right:41px}.map-node.label-bottom small{top:41px}.map-node.label-top small{bottom:50px}.map-node.label-main-middle.label-right small{left:77px;width:58px}}
`;document.head.append(mapNodeStyle);
const titleSaveButton=document.createElement('button');titleSaveButton.id='titleSaveManager';titleSaveButton.className='secondary';titleSaveButton.textContent='💾 저장 / 불러오기';$('#encyclopediaBtn').before(titleSaveButton);titleSaveButton.onclick=()=>showSaveManager(closeSheet,null);
$('#encyclopediaBtn').onclick=()=>{unlockAudio();showEncyclopedia();};
$('#newGame').onclick=()=>{unlockAudio();playBgm('title');showNewGame();};$('#missionGameBtn').onclick=()=>{unlockAudio();playBgm('title');showMissionSetup();};$('#continue').onclick=continueJourney;refreshTitleSaveState();$('#sound').onclick=toggleSound;$('#menu').onclick=showMenu;
document.addEventListener('pointerdown',unlockAudio,{passive:true});document.addEventListener('keydown',unlockAudio);
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopBgmPlayback();if(!busy)persist();}else if(save.settings.sound)unlockAudio();});window.addEventListener('pagehide',()=>{stopBgmPlayback();if(!busy)persist();});window.addEventListener('pageshow',()=>{if(save.settings.sound&&audioCtx)unlockAudio();});
playBgm('title');
// Public, read-only diagnostic state. Useful for reproducing battle reports.
window.TACTICS={version:GAME_VERSION,getState:()=>copy({stage:battle?.stageId,phase:battle?.phase,round:battle?.round,mapSeed:battle?.mapSeed,mapRules:battle?.mapRules,selected,mode,busy,isTitle,activeSpell,activeProjectile,criticalShot,visualSlow,pendingFacing:battle?.pendingFacing,statusVisuals:[...statusModels.keys()],inspectedEnemy,inspectedItem,lastHitReport,units:battle?.units,tiles:battle?.tiles,pickups:battle?.pickups,completed:save.completed,missionMode,missionChapter:missionMode?save.missionChapter:null,missionCleared:!!save.missionCleared,drawCalls:renderer.info.render.calls}),getCatalog:()=>({chapters:CHAPTERS.length,stages:STAGES.length,heroes:HEROES.length,skills:Object.keys(SKILLS).length}),tileScreen:(x,z)=>project(toWorld(tile(x,z)).add(new THREE.Vector3(0,.1,0)))};
battle=makeBattle(STAGES[0]);selected='kyle';buildScene();refreshUI();$('#sound').textContent=save.settings.sound?'♪':'♩';window.TACTICS_READY=true;restoreNewerAutoSaves();
// Track 1 (title and every non-battle screen) is loaded once at startup.
// Then the first battle's track is preloaded in the background.
if(window.TACTICS_BGM?.[1]){const titleLoad=loadBgm(window.TACTICS_BGM[1]).catch(()=>{});showLoading(titleLoad);titleLoad.then(()=>preloadBgm(upcomingBattleBgm()));}

if(document.modelContext?.registerTool){const life=new AbortController();try{Promise.resolve(document.modelContext.registerTool({name:'read_tactics_battle',title:'전투 상태 확인',description:'현재 전투의 턴, 캐릭터, 지형 상태를 확인합니다. 게임 상태는 바뀌지 않습니다.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length)throw Error('빈 객체를 입력하세요.');return window.TACTICS.getState();}},{signal:life.signal})).catch(()=>{});}catch{}window.addEventListener('pagehide',()=>life.abort(),{once:true});}
})();
