#!/usr/bin/env python3
"""Build an instrumented copy of the game for balance simulation.

    python3 tools/balance/harness.py <out_dir>

The copy exposes game internals as window.__T, reports every battle result to
window.__onFinish, and has no soundtrack. Serve <out_dir> with any static server.
"""
import os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
out = sys.argv[1]
os.makedirs(out, exist_ok=True)
for name in ['index.html', 'sw.js', 'manifest.webmanifest', 'icon.png', 'revisions.html']:
    shutil.copy(os.path.join(ROOT, name), out)
for d in ['vendor', 'fonts']:
    shutil.copytree(os.path.join(ROOT, d), os.path.join(out, d), dirs_exist_ok=True)

src = open(os.path.join(ROOT, 'game.js'), encoding='utf-8').read()
guard = "function finishBattle(win){if(!battle||!['player','enemy'].includes(battle.phase))return;"
assert src.count(guard) == 1
src = src.replace(guard, guard + "try{window.__onFinish?.(win,JSON.parse(JSON.stringify(battle)));}catch(e){}")
hook = """window.__T={renderer,STAGES,SKILLS,HEROES,GEAR,CONSUMABLES,MONSTERS,STAGE_TUNING,MISSION_START_LEVELS,newJourney,beginMission,exitMission,missionStages,startBattle,retryBattle,finishBattle,perform,animateMove,movement,pathfind,inRange,targets,estimate,basic,skillCost,skillUnlock,alive,tile,occ,dist,facing,endPlayerTurn,enemyTurn,checkEnd,heroRecord,heroStats,closeSheet,recommendedGearSlot,equipmentValue,gearCompatible,equippedRecord,isBossStage,SECRET_STAGES,startSecretTest,showSecretHub,
get save(){return save},get battle(){return battle},set busy(v){busy=v},get busy(){return busy},set missionSelection(v){missionSelection=v},get missionMode(){return missionMode}};
"""
i = src.rstrip().rfind('})();')
open(os.path.join(out, 'game.js'), 'w', encoding='utf-8').write(src[:i] + hook + src[i:])

html = open(os.path.join(out, 'index.html'), encoding='utf-8').read()
html = re.sub(r'window\.TACTICS_BGM=\{[^}]*\};', 'window.TACTICS_BGM={};', html, flags=re.S)
open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(html)
print('harness ready:', out)
