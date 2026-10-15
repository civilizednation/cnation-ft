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
