"""Target difficulty grades and the grading rules used by the balance simulation."""
import statistics as st

GRADES = ['매우쉬움', '쉬움', '적정', '어려움', '매우어려움', '클리어불가']
DIFFS = ['story', 'normal', 'tactical']  # 하, 중, 상
# Calibrate / validate only some difficulties: BAL_DIFFS=tactical
import os
RUN_DIFFS = [d for d in os.environ.get('BAL_DIFFS', ','.join(DIFFS)).split(',') if d in DIFFS]

# role -> (하, 중, 상) target grade index
TARGETS = {
    'prologue': {'first': (0, 0, 0), 'last': (2, 2, 3), 'other': (0, 1, 2)},
    'chapter':  {'first': (1, 2, 3), 'last': (2, 2, 3), 'other': (1, 2, 3)},
    'final':    {'first': (1, 2, 3), 'last': (3, 3, 4), 'other': (2, 3, 4)},
}
# v1.5.6: 상 is one grade above 중 in every battle after the prologue (중·하 unchanged).

def role(stage_id):
    c, kind = int(stage_id[1]), stage_id[2]
    group = 'prologue' if c == 0 else 'final' if c == 9 else 'chapter'
    if stage_id == f'c{c}s0':
        return group, 'first'
    last = f'c{c}s2' if c in (0, 9) else f'c{c}b'
    return group, 'last' if stage_id == last else 'other'

def target(stage_id, diff):
    group, r = role(stage_id)
    return TARGETS[group][r][DIFFS.index(diff)]

def metrics(runs):
    """runs: list of attempt lists (one per campaign run). Returns aggregate metrics."""
    first = sum(r[0]['win'] for r in runs) / len(runs)
    anyw = sum(any(t['win'] for t in r) for r in runs) / len(runs)
    wins = [next(t for t in r if t['win']) for r in runs if any(t['win'] for t in r)]
    hp = st.mean(100 * t['hp'] / t['maxHp'] for t in wins) if wins else 0
    alive = st.mean(t['alive'] / t['deployed'] for t in wins) if wins else 0
    rounds = st.mean(t['rounds'] for t in wins) if wins else 0
    return dict(first=first, any=anyw, hp=hp, alive=alive, rounds=rounds, n=len(runs))

def grade(m):
    """Grade = band of the continuous score: <0.5, <1.5, <2.5, <3.5, else very hard; never cleared = 5.
    (v1.3.0: replaces hard cut-offs, where a single first-try loss in four runs jumped straight to 어려움.)"""
    if m['any'] == 0: return 5
    s = score(m)
    return 0 if s < .5 else 1 if s < 1.5 else 2 if s < 2.5 else 3 if s < 3.5 else 4

def score(m):
    """Continuous difficulty on the grade scale (0 = very easy ... 5 = impossible)."""
    if m['any'] == 0: return 5.5
    pts = [(95, -.2), (85, .3), (70, 1), (50, 2), (30, 3), (15, 4), (0, 4.6)]
    hp = m['hp']; d = 4.6
    for (h1, d1), (h2, d2) in zip(pts, pts[1:]):
        if h2 <= hp <= h1:
            d = d1 + (d2 - d1) * (h1 - hp) / (h1 - h2); break
    if hp > 95: d = -.2
    d += (1 - m['first']) * 2.2 + (1 - m['alive']) * 1.5 + (1 - m['any']) * 2
    if m['rounds'] >= 20: d += 1
    return max(-.5, min(5.5, d))
