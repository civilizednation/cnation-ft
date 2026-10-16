# v0.7.23 캐릭터 밸런스/자동 전직 작업

기준: v0.7.22 챕터/전투 밸런스 조정본.

## 캐릭터 밸런스
- 네로 silence/firecurse/iceprison: physical 유지.
- 브란 MOVE: 기본3 / 1차4 / 2차5.
- 루나 heal: MP10 / power1.6.
- 리아 windlance: MP16 / power1.7.
- 세라 pierce1.4 / flamearrow1.3 / icearrow1.25.
- 카일: 검사→기사→성기사→소드마스터 단일 경로.

## 자동 전직
- 일반 영웅: Lv.10→1차, Lv.20→2차.
- 카일: Lv.10→기사, Lv.20→성기사, Lv.30→소드마스터.
- 경험치로 레벨이 상승할 때 promotionRankFor/syncPromotion이 자동으로 classLevel을 동기화.
- 기존 branch 값은 호환을 위해 저장 구조에는 남을 수 있으나 normalizeSave에서 0으로 정규화.
- 기존 카일 분기 보너스는 제거하고, 기존 소드마스터 계열 공격 보너스는 최종 c3에서만 적용.

## 결과 화면
- battle.growthEvents에 전투 중 발생한 레벨업/전직을 기록.
- 승리 축하 화면의 성장 결과 영역에서 Lv 변화와 전직 경로를 표시.

## 백과사전
- 카일 전직 경로를 단일 4단계로 표시.
- 전직 선택 UI는 자동 전직 단계 조회용으로만 사용.

Validation:
- node --check game.js 통과.
# v0.7.21 · 미션 모드 스토리 평균 장비 기준 패치

Base: v0.7.21 all-defeat.
- 스토리 모드는 변경하지 않음.
- 미션 모드 시작 장비를 선택 챕터의 현재 장비가 아니라, 스토리 모드에서 해당 챕터 직전까지 정상적으로 진행했을 때 기대할 수 있는 보수적인 평균 장비로 변경.
- 프롤로그(0장)는 장비 0부위로 시작.
- 1장 이후 참가 캐릭터는 4슬롯 기준 3개 일반 + 1개 희귀 장비를 자동 장착.
- 장비 티어는 선택 챕터의 미래 드롭을 미리 지급하지 않고 직전 챕터의 장비 밴드를 사용.
- 기존 미션의 챕터별 자동 장비 지급(5장 이후 희귀 4부위)은 제거.
- 스토리 전투/스토리 저장 데이터/전투 밸런스/몬스터 AI는 변경하지 않음.
- 미션 화면 안내를 '스토리 모드 평균 장비 자동 장착'으로 수정.

Validation:
- `node --check game.js` 통과.

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


## v0.7.22 밸런스 조정
이번 버전은 스토리/미션 모드 양쪽에 동일한 전투별 난이도 보정을 적용한다. 전투별로 몬스터 HP, 공격력, 몬스터 수, 일부 구성 완화를 혼합하며, 기존 STORY/NORMAL/TACTICAL 난이도 프로필 자체는 변경하지 않는다. 제3장과 제5장~FINAL은 수정 대상에서 제외했다.
