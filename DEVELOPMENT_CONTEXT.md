# v0.7.21 · 승리 조건 일원화 패치

Base: v0.7.21 prologue-balance.
- 모든 스토리/선택/보스 전투의 승리 조건을 적 전멸로 통일.
- `checkEnd()`는 살아 있는 적이 0명일 때만 승리 처리하며 생존 5턴/목표 도착/보스만 처치 조건은 사용하지 않음.
- 보스 식별은 승리 조건이 아니라 `kind:'boss'` 또는 최종 보스 `c9s2`로 분리하여 보스 생성, 배치, BGM, 보상 배수를 유지.
- 기존 저장의 전투는 stageId를 통해 새 승리 규칙을 적용하며, 전투 중 남아 있는 적이 있으면 승리하지 않음.

# v0.7.21

Base: v0.7.20. User-approved prologue-only balancing.
- prologueRules/prologueEnemyStats/prologueMonsterTypes/clearPrologueRoutes helpers.
- battleRules chapter0 overrides only. enemyCombatStats chapter0 early return for codex/runtime parity.
- First tutorial 3 enemies NORMAL; others4. No special resistances or fast/status monsters.
- can-counter elemental selection checks learned water attacks; fire-slime inserted only if available.
- Final main battle leader is explicit prologueLeader; starts stationary and activates after two regular deaths, or adjacent defense.
- enemyApproachPlan v15 invalidates saved older plans. Non-prologue rates remain v0.7.19.
- Tutorial AI removes explicit mage preference and team coordination while preserving legal attacks.
- clearPrologueRoutes gives height0 grass start zone and routes; remaining heights0/1.
- refreshLegacyPrologueBattle rolls back retry resources before regenerating old active/defeat tutorial saves. Victory/rewarded snapshots untouched. New retry snapshot/resources established.
- Models/MP/gear/affinities/potions/recovery unchanged.
- Runtime diagnostic-only tests inject temporary APIs in HTTP response; not added to shipped source.

Validation limits: synthetic normal combat simulation uses the real movement/range/estimate/AI functions, level1/no gear/no potions/basic and Fire only, stochastic hit/crit/damage. No burn or attack XP effects (conservative). It does not render action effects or represent all human choices. Actual browser attack/facing/enemy phase also tested.
