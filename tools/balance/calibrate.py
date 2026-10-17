#!/usr/bin/env python3
"""Calibrate STAGE_TUNING against the target grades by repeated simulation.

    python3 tools/balance/calibrate.py <work_dir> [iterations] [runs]

Needs: node + playwright (Chromium), a static server for the harness (started here).
Writes <work_dir>/iter-N/ results, <work_dir>/tuning.json (latest) and history.json.
"""
import json, math, os, subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(__file__))
from targets import DIFFS, GRADES, metrics, grade, score, target

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
WORK = os.path.abspath(sys.argv[1]); ITER = int(sys.argv[2]) if len(sys.argv) > 2 else 8; RUNS = int(sys.argv[3]) if len(sys.argv) > 3 else 2
PORT = 8810; PAR = 6
os.makedirs(WORK, exist_ok=True)
HARNESS = os.path.join(WORK, 'harness')
subprocess.run([sys.executable, os.path.join(HERE, 'harness.py'), HARNESS], check=True)
server = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--bind', '127.0.0.1'], cwd=HARNESS, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)

def initial_tuning():
    src = open(os.path.join(ROOT, 'game.js'), encoding='utf-8').read()
    i = src.index('const STAGE_TUNING={') + len('const STAGE_TUNING=')
    j = src.index('\n};', i) + 2
    js = src[i:j].replace("'", '"')
    import re
    js = re.sub(r'(\b(?:story|normal|tactical)\b):', r'"\1":', js)
    return json.loads(js)

tuning_path = os.path.join(WORK, 'tuning.json')
tuning = json.load(open(tuning_path))['stages'] if os.path.exists(tuning_path) else initial_tuning()
history = json.load(open(os.path.join(WORK, 'history.json'))) if os.path.exists(os.path.join(WORK, 'history.json')) else []
npm_root = subprocess.run(['npm', 'root', '-g'], capture_output=True, text=True).stdout.strip()

def run_job(args):
    mode, diff, run, chapters, outdir, tfile = args
    out = os.path.join(outdir, f'{mode}-{diff}-{run}-{chapters.replace(",", "") or "all"}.json')
    cmd = ['node', os.path.join(HERE, 'run.js'), str(PORT), mode, diff, out, tfile] + ([chapters] if chapters else [])
    subprocess.run(cmd, env={**os.environ, 'NODE_PATH': npm_root}, timeout=3600, capture_output=True)
    return out

def simulate(it):
    outdir = os.path.join(WORK, f'iter-{it}'); os.makedirs(outdir, exist_ok=True)
    tfile = os.path.join(outdir, 'tuning.json'); json.dump({'stages': tuning}, open(tfile, 'w'))
    jobs = []
    for r in range(RUNS):
        for d in DIFFS:
            jobs.append(('story', d, r, '', outdir, tfile))
            jobs.append(('mission', d, r, '0,1,2,3,4', outdir, tfile))
            jobs.append(('mission', d, r, '5,6,7,8,9', outdir, tfile))
    jobs.sort(key=lambda j: (j[0] != 'story', j[1] != 'tactical'))  # long jobs first
    with ThreadPoolExecutor(PAR) as ex:
        files = list(ex.map(run_job, jobs))
    samples = {}
    for f in files:
        if not os.path.exists(f): continue
        j = json.load(open(f))
        stages = j['result'] if j['mode'] == 'story' else [s for ch in j['result'] for s in ch['stages']]
        for s in stages:
            samples.setdefault((s['id'], j['diff']), []).append(s['tries'])
    return samples

def clamp(v, a, b): return max(a, min(b, v))

for it in range(len(history), len(history) + ITER):
    t0 = time.time()
    samples = simulate(it)
    rows, exact, within = [], 0, 0
    for (sid, d), runs in sorted(samples.items()):
        m = metrics(runs); g = grade(m); s = score(m); tgt = target(sid, d)
        exact += g == tgt; within += abs(g - tgt) <= 1
        hp, atk, count, soften = tuning[sid][d]
        e = s - tgt  # >0: too hard
        if abs(e) > .35:
            step = clamp(e, -2.5, 2.5) * .75
            atk = clamp(atk * math.exp(-.16 * step), .45, 2.2)
            hp = clamp(hp * math.exp(-.11 * step), .45, 2.2)
            if e > 1 and atk <= .5 and count > -2: count -= 1
            if e < -1 and atk >= 2.1 and count < 2: count += 1
        tuning[sid][d] = [round(hp, 3), round(atk, 3), count, soften]
        rows.append(dict(id=sid, diff=d, grade=GRADES[g], target=GRADES[tgt], score=round(s, 2), **{k: round(v, 3) if isinstance(v, float) else v for k, v in m.items()}, tuning=tuning[sid][d]))
    total = len(rows)
    history.append(dict(iter=it, exact=exact, within=within, total=total, minutes=round((time.time() - t0) / 60, 1), rows=rows))
    json.dump(history, open(os.path.join(WORK, 'history.json'), 'w'), ensure_ascii=False)
    json.dump({'stages': tuning}, open(tuning_path, 'w'))
    print(f'iter {it}: exact {exact}/{total}, within±1 {within}/{total}, {history[-1]["minutes"]} min', flush=True)
    if within == total and exact >= .85 * total:
        break
server.terminate()
