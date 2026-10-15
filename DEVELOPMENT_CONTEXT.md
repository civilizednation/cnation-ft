# cnation TACTICS v0.7.12 개발 컨텍스트

## 게임 목표 및 이번 변경
- 정상 플레이(정규+선택 전투)에서 중후반 난이도가 단계적으로 상승.
- 아군이 소극적으로 적을 기다리면 후방 몬스터가 가속해 포위 위험이 증가.
- 챕터별 상점 장비 교체가 의미 있도록 후반 HP/DEF/RES 강화.
- 반복 전투 파밍 지양: 완료 전투는 EXP 10%, 필드 보상/승리 골드 없음.
- 재도전 자체를 즐기는 플레이어를 위해 재도전 선택은 유지하며 확인 창 제공.
- 승리 회복: 50% missing HP, minor loss <=10% full, chapter final full.

## 호환성
- 저장 키 `cnation-tactics-save-v1` 유지.
- 전투 시작 시 적 능력치 계산에 새 챕터 보정 적용; 이미 진행 중인 전투의
  적 능력치는 저장된 값을 유지.
- 재도전 진행 중인 이전 버전 저장을 로드하면 필드 보상을 제거.
- 리아 MP 35/45/60, 메테오 ×1.98은 유지.

## QA
- QA_v0.7.12_progression_replay.txt 참고.
- 실제 브라우저 플레이 밸런스는 별도 검증 필요.

---

# cnation TACTICS v0.7.11 개발 기록

## 이번 버전 목표
- 리아의 상위 광역 마법 사용 빈도를 MP 자원 관리로 제한.
- 메테오의 높은 피해 계수만 10% 감소, 나머지 2종 피해 및 광역 범위는 유지.

## 변경
- `SKILLS.whirlwind`: MP 35, MAG ×1.20, 사거리 4, 마름모 13칸.
- `SKILLS.storm`: MP 45, MAG ×1.35, 사거리 4, 정사각형 25칸.
- `SKILLS.meteor`: MP 60, MAG ×1.98, 사거리 6, 마름모 13칸.
- 기존 스킬 정의 기반의 전투 MP 차감(`skillCost`), 스킬 메뉴, 백과사전, 예상 피해(`estimate`)가 변경값을 공유.
- 서비스 워커·HTML 빌드 캐시 및 게임 버전 0.7.11로 갱신.

## 유지 사항
- v0.7.10의 백과사전/전투 몬스터 능력치 일치, 축소된 공격 예상창, 몬스터 HP/DEF/RES 강화, AI 접근 수치 모두 유지.
- 이전 대화에서 검토한 v0.7.11 몬스터 접근 대폭 강화 제안은 별도 승인/적용하지 않았으므로 이번 릴리스에 미포함.
- 저장 구조 변경 없음. 저장된 전투에서도 스킬 사용 시 새 MP 비용·피해 계수 적용.

## 테스트
- Node.js 구문 검사, 게임 스킬 정의 및 전투 사용 경로 정적/동적 검사, 압축파일 무결성 검사.
- 실제 iOS Safari/WebGL 플레이 테스트는 미수행.

---

# cnation TACTICS v0.7.10 개발 기록

## 이번 버전 목표
1. 전투/백과사전 몬스터 능력치 불일치 제거.
2. 공격 예고 패널 축소: 다수 광역 피해 대상도 1명당 1행.
3. 아군 4~6명 시 중후반 난이도 강화: HP +30% 추가, 방어력 강화, 적 선두 수 증가.

## 구현
- `enemyCombatStats(m,level,chapter,difficulty,elite,boss)`: `makeBattle()`과 `showCodexMonster()`가 같은 능력치 계산 함수를 사용. 스테이지 레벨 및 난이도/정예 보정 포함.
- `showCodexMonster()`: 챕터, 전투, 난이도, 일반/정예 선택. 실제 진행 중인 전투에 동일 종이 있으면 저장된 유닛 수치를 표시하고, 없는 경우 동일 생성식으로 예측. 구형 저장의 `monsterIndex` 누락 시 이름으로 매칭.
- `showCodexBoss()`: 해당 보스와 현재 전투가 일치하면 저장된 보스 수치 표시.
- `forecastHP()`: 피해 예상 95~105% 범위, 방향/속성 보너스 및 공격 후 HP만 한 줄로 표현. 명중률이 100% 미만이면 표시. 대상이 많으면 높이 제한 스크롤.
- `enemyFrontlineLimit()`: 하 2/2/3/3/3, 중 2/2/4/4/5, 상 2/3/4/5/6 (아군 2~6명). `enemyApproachPlan()` 중간·후방 접근 비율 상향, 기존 소수점 이동 예산 및 순차 합류 유지. 접근 계획 버전 9.
- 전투 몬스터 HP: v0.7.9 HP에서 약 +30% (기존 v0.7.6 +30%는 유지). DEF/RES 일반 +10%, 정예·보스 +15%. 보스 소환 몬스터는 별도 생성식을 유지하면서 HP +30%, DEF/RES +10%.

## 저장 데이터 및 적용 시점
- 저장 구조 버전은 그대로 유지. 기존 세이브/전투/장비/미션 구조 유지.
- 기존 전투에 이미 존재하는 적의 HP는 강제로 바꾸지 않음. 새 전투에서 새로운 능력치가 생성됨.
- AI 선두 재산정은 기존 전투에도 적용되며 구 버전의 접근 계획 캐시는 재생성됨.
- 백과사전에서 현재 전투의 적은 실제 저장된 수치를 표시하므로 구버전에서 생성한 전투에도 맞음.

## 검증 범위
- Node.js JavaScript 구문 검사.
- 독립 계산 단위 검사 199개: 챕터·난이도·정예/보스 HP 증가율, DEF/RES, AI 선두 수, 예고 한 줄 포맷, 백과사전 계산 및 구버전 전투 수치 참조.
- 실제 모바일 WebGL 조작 및 장기 플레이 검증은 수행하지 않음.


## v0.7.13
NORMAL 중심 난이도 재설계, STORY 50% 장비 효율/ NORMAL 100%/ TACTICAL 100%+물약 목표. 챕터별 목표 회복 전 평균 HP: 70/60/50/40/30% (목표치, 검증되지 않음). 실제 전투 결과에서 회복 전 평균 HP 및 물약 등 측정, 최근 30회 저장. 이전 v0.7.12 XP/재도전/회복 정책 유지.


## v0.7.14 — 전체 기획안 구현 보강
cnation TACTICS v0.7.14 QA — 1~9 integrated balance audit

- Role-weighted equipment efficiency: each hero, party; 50/75/100% reference is shop-rare chapter-tier gear, NOT number of equipped slots.
- Chapter economy forecast: first-clear guaranteed gold vs expected field gold, essential gear cost, potion allowance; deliberately no guaranteed income from random loot.
- Combat telemetry: pre-recovery HP, real incoming damage by hero, healing magic and potion totals, max hit, min HP, KO, first enemy attack, turns, equipment efficiency and target delta.
- Dev audit: chapter/difficulty stats via actual enemy generation function; 50/75/100% gear reference; historical results; JSON export.
- Existing v0.7.13 enemy stat scaling/AI and v0.7.12 XP/replay/recovery preserved.
- IMPORTANT: Static chapter/economy audit is NOT a full automated combat simulation; only real play can establish victory rates/target HP.
- No changes to store prices, loot rates or player save format. Old history fields may be absent and are shown as '-'.


### v0.7.14 검증 결과
- 신규 분석 101건 및 기존 난이도/AI 회귀 193건 통과. 실제 WebGL 전투 플레이와 난이도 목표 달성은 사용자 플레이 테스트 필요.
- 전투 기록에서 개별 아군 피해/회복과 목표 HP 차이 확인, 개발용 성장·경제 분석에서 JSON 내보내기 지원.
- 기존 v0.7.13 몬스터 능력치·AI 수치, v0.7.12 경험치/재도전/회복 규칙 유지.


## v0.7.15 — 성장 상한 및 동료 합류 레벨
- 아군 최대 Lv.40. 몬스터 레벨은 스테이지 고정(Lv.1~30), 선택전투 경험치 보상 유지.
- xpToNextLevel(level): Lv.1~25 = 80+18×Lv; Lv.26~30 = ceil((80+18×Lv)×1.15); Lv.31~39 = ceil((80+18×Lv)×1.30); Lv.40은 MAX. 레벨 25→26은 기존 요구량, 26→27부터 증가.
- 스토리 신규 동료: join 챕터보다 먼저 합류한 동료들의 현재 평균 레벨을 반올림하여 최초 1회 적용. 해당 챕터 기본 합류 레벨(1+join×3)을 최솟값으로 보장. 이미 합류한 동료를 다시 조정하지 않음.
- 이전 저장 Lv.41~50은 로드 시 Lv.40, EXP 0으로 변환; 전직·장비·재화·스토리·미션 기록 보존. 저장 스키마 version=1 유지, 검증 단계에서 기존 Lv.50 허용 후 정규화. 진행 중인 전투는 전투 종료 후 새 전투부터 재계산.
- 미션/커스텀은 명시적인 파티 생성 레벨 유지. 테스트 커스텀 레벨 선택 상한 40.
