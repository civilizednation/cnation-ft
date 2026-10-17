#!/usr/bin/env python3
"""Measure the current tuning against the targets without changing it.

    python3 tools/balance/validate.py <work_dir> [runs] [tuning.json]

Uses the STAGE_TUNING in game.js unless a tuning file is given. Writes <work_dir>/validation.json
with per-battle results for each mode and the combined grade per battle and difficulty.
"""
import json, os, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(__file__))
from targets import DIFFS, GRADES, metrics, grade, score, target

HERE = os.path.dirname(os.path.abspath(__file__))
WORK = os.path.abspath(sys.argv[1]); RUNS = int(sys.argv[2]) if len(sys.argv) > 2 else 4
TFILE = os.path.abspath(sys.argv[3]) if len(sys.argv) > 3 else '-'
PORT = 8812; PAR = 6
os.makedirs(WORK, exist_ok=True)
HARNESS = os.path.join(WORK, 'harness')
subprocess.run([sys.executable, os.path.join(HERE, 'harness.py'), HARNESS], check=True)
server = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--bind', '127.0.0.1'], cwd=HARNESS, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
npm_root = subprocess.run(['npm', 'root', '-g'], capture_output=True, text=True).stdout.strip()
outdir = os.path.join(WORK, 'runs'); os.makedirs(outdir, exist_ok=True)

def run_job(args):
    mode, diff, run, chapters = args
    out = os.path.join(outdir, f'{mode}-{diff}-{run}-{chapters.replace(",", "") or "all"}.json')
    if not os.path.exists(out):
        subprocess.run(['node', os.path.join(HERE, 'run.js'), str(PORT), mode, diff, out, TFILE] + ([chapters] if chapters else []),
                       env={**os.environ, 'NODE_PATH': npm_root}, timeout=3600, capture_output=True)
    return out

jobs = [(m, d, r, ch) for r in range(RUNS) for d in DIFFS for m, ch in (('story', ''), ('mission', '0,1,2,3,4'), ('mission', '5,6,7,8,9'))]
jobs.sort(key=lambda j: (j[0] != 'story', j[1] != 'tactical'))
t0 = time.time()
with ThreadPoolExecutor(PAR) as ex:
    files = list(ex.map(run_job, jobs))
server.terminate()

per_mode, combined, meta = {}, {}, {}
for f in files:
    if not os.path.exists(f): continue
    j = json.load(open(f))
    stages = j['result'] if j['mode'] == 'story' else [s for ch in j['result'] for s in ch['stages']]
    for s in stages:
        per_mode.setdefault((j['mode'], j['diff'], s['id']), []).append(s['tries'])
        combined.setdefault((j['diff'], s['id']), []).append(s['tries'])
        meta[s['id']] = dict(name=s['name'], kind=s['kind'], level=s['level'])

def row(runs, sid, d):
    m = metrics(runs); g = grade(m)
    lv = sum(r[0]['avgLv'] for r in runs) / len(runs)
    return dict(grade=GRADES[g], target=GRADES[target(sid, d)], score=round(score(m), 2), hp=round(m['hp']), alive=round(m['alive'] * 100),
                rounds=round(m['rounds'], 1), first=m['first'], any=m['any'], n=m['n'], partyLv=round(lv, 1))
out = {'minutes': round((time.time() - t0) / 60, 1), 'meta': meta, 'combined': {}, 'modes': {}}
for (d, sid), runs in combined.items():
    out['combined'].setdefault(sid, {})[d] = row(runs, sid, d)
for (mode, d, sid), runs in per_mode.items():
    out['modes'].setdefault(mode, {}).setdefault(sid, {})[d] = row(runs, sid, d)
json.dump(out, open(os.path.join(WORK, 'validation.json'), 'w'), ensure_ascii=False)
rows = [r for v in out['combined'].values() for r in v.values()]
exact = sum(r['grade'] == r['target'] for r in rows); within = sum(abs(GRADES.index(r['grade']) - GRADES.index(r['target'])) <= 1 for r in rows)
print(f'validation: exact {exact}/{len(rows)}, within±1 {within}/{len(rows)}, {out["minutes"]} min')
