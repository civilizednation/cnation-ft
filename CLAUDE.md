# cnation TACTICS (아르카 연대기)

Mobile-first 3D turn-based tactics RPG (Korean). Static site: no build step, no server code.

## Communication
Always write every message to the user in Korean (한국어) — progress updates, questions, and summaries.

## Files
- `index.html` — page shell, all base CSS, title screen markup, script tags (with `?v=` cache-busting).
- `vendor/three-r170.js` — bundled three.js r170 + BufferGeometryUtils, exposes global `CNATION3D`. Do not edit.
- `game.js` — all game code in one IIFE (`const THREE=CNATION3D`). Data tables at top
  (`HEROES`, `SKILLS`, `CHAPTERS`, `BOSS_PROFILES`, `STAGES`, `MONSTERS`, `GEAR`), then save/load,
  stats/XP, encounter generation (`makeBattle`), damage (`estimate`), rendering, UI, turn flow
  (`perform`, `phaseStart`, `enemyTurn`, `bossAction`, `checkEnd`, `finishBattle`).
- `sw.js` — service worker, network-first, caches only the files in `CACHED_PATHS`.
- `revisions.html` — public revision history, linked from the title screen.
- `manifest.webmanifest`, `icon.png` — PWA.
- `fonts/` — `stylish.woff2` is the DEFAULT for all text (menus, titles, buttons, stats, dialogue); `gowun-dodum.woff2`
  only for detailed descriptions (`p`, `small`, `li`, `td`, `.footnote`, `.battlelog`, ...; dialogue `p` stays Stylish),
  SIL OFL (`fonts/OFL-*.txt`). Subset to the characters used in index.html/game.js/revisions.html.
  **After adding or changing any in-game text, run `python3 tools/subset-fonts.py`** (needs `pip install fonttools brotli`)
  and bump `?v=` on the font URLs (index.html, revisions.html, sw.js) — otherwise new characters fall back to the system font.
  `size-adjust` in @font-face matches the old system-font Hangul height (Stylish 118%, Gowun Dodum 104%).
- `bgm/` — soundtrack (WebM/Opus), mapped in `window.TACTICS_BGM` in index.html (key = track id).
  Track 1 plays on every non-battle screen except victory; every victory plays track 10 once (no loop);
  every battle plays one of 4–7, never repeating the previous battle's track (`battleBgmTrack`, stored as
  `battle.bgmTrack`). The next battle's track is chosen in advance (`upcomingBattleBgm`, persisted in
  localStorage) and preloaded one file at a time (`preloadBgm`): track 1 then the next battle track at startup;
  victory track then the following battle track whenever a battle track starts. A battle whose track is not
  loaded yet shows the loading notice. Tracks are decoded at 32 kHz with
  Web Audio, kept in memory (`bgmBuffers`), and looped with a crossfade (`BgmFilePlayer`). Fallbacks:
  `<audio>` loop, then procedural music (`TacticsSoundtrackEngine`). Volume: `save.settings.bgmVolume` (default .5); actual output gain is `bgmGain()` = setting × `BGM_OUTPUT_SCALE` (.5).
  The non-battle track resumes where it was interrupted (`bgmResume`, in memory only; `BgmFilePlayer.start(pos)`/`position()`);
  battle and victory tracks always start from the top.
  The story ending plays track 12 (`ENDING_BGM_TRACK`), preloaded when the final battle (c9s2) starts.
  sw.js caches bgm files cache-first.

## Layout & input (v1.5.0)
The fit script at the end of index.html sets the layout class on `<html>` (`window.TACTICS_LAYOUT`):
- phone (coarse pointer, short screen side < 600): fluid portrait; landscape shows `#rotateNotice` (`phone-landscape`).
- `layout-tablet`: tablet portrait / narrow windows, 500x960 scaled (`--game-scale`).
- `layout-landscape`: tablet landscape and PC/laptop; 820px logical height scaled, width `--land-w` fills the screen;
  `#app` is a grid: viewport left, header + `.panel` (400px) right; sheets open as centered windows.
- `has-keyboard` (fine pointer): keyboard hints. Keys (game.js, e.code): WASD pan (`heldPanKeys`, applied in renderLoop),
  R rotate, F attack, G skills, H wait, 1-9 skills from the top (`pickSkillIndex`), Space end turn (again confirms),
  Enter confirm, Esc cancel. manifest `orientation` is `any`.
Landscape screens (v1.5.1, CSS in index.html unless noted): world map grid (map left, info right); `SHEET_SPLITS` +
`applySheetColumns()` (game.js) wrap 장비 보관함 / 여행자의 상점 / 파티 관리 into two scrolling `.sheet-col`s (column scroll
positions are part of the sheet scroll memo; rotating unwraps); codex list two columns, codex detail and story via `:has()`;
ending recap scene left / card right; `.panel-log` (recent battle log) in the panel; mouse hover tile marker in game.js.
Phone portrait must stay unchanged: scope every landscape rule under `html.layout-landscape` (or `has-keyboard`).

## Revision management (required for every change)
Version format `ver.MAJOR.MINOR.PATCH` (user-defined, starting at 1.0.0):
- PATCH (3rd) = fixes, tuning, and small feature additions/improvements (e.g. title music resume, a new badge,
  follow-up improvements to an existing big feature such as the ending's 3D recap).
- MINOR (2nd) = big feature additions only (e.g. real soundtrack files in 1.1.0, the story ending in 1.4.0).
- MAJOR (1st) = whole-game overhaul.
When unsure whether a change is "big", treat it as PATCH.
On every change that ships, bump the version and update ALL of:
1. `game.js` — `const GAME_VERSION='x.y.z'`.
2. `index.html` — title fallback text `ver.x.y.z`, `window.TACTICS_BUILD`, and `game.js?v=x.y.z`.
3. `sw.js` — `const VERSION='x.y.z'`.
4. `revisions.html` — add a new `<section class="rev" id="vx.y.z">` at the top (date, 수정/변경/밸런스 bullets in Korean),
   move the `현재` tag to it.
Title screen shows `ver.x.y.z (rev. history)`; the link opens `revisions.html`.

## Balance (v1.3.0)
- `STAGE_TUNING` in game.js: per stage and difficulty `[hp, atk, enemy count delta, soften]`, shared by story and mission.
  The enemy per-hit damage cap scales with the stage's atk tuning (when > 1).
- `MISSION_START_LEVELS`: missions start at the typical story party level of that chapter, so both modes match.
- Target grades per battle role live in `tools/balance/targets.py` (prologue / chapters 1–8 / final × first / last / other).
- Re-calibrate after balance-relevant changes: `python3 tools/balance/calibrate.py <work> [iters] [runs]`
  (Playwright + Chromium; ~15 min per iteration on 4 CPUs), then check with `tools/balance/validate.py <work> 4 <tuning.json>`
  and copy the tuning into `STAGE_TUNING`. The bot (`tools/balance/bot.js`) plays like an ordinary player.

## Ending & statistics (v1.4.0)
`runEnding()` shows the story ending (opening → recap → epilogue → stats → credits → FIN) in `#endingView`;
`showEndingTest()` (settings menu, bottom) previews it with sample data (`sampleEndingData`) or the current save.
The recap shows each chapter's battle (`createEndingTheater`: own WebGL renderer, chapter's last battle via `makeBattle(stage, stage.seed)`,
scripted with the game's attack animations through a ctx) above its record card; the chapter MVP lands the last blow.
`save.chronicle[stageId]` also keeps `seed` (battle.mapSeed), `last` (boss kill / last kill) and `top` (biggest hit) as
`{hero, skill, skillId, v, crit}`; the recap rebuilds that map and replays those blows. Ending effect sounds go through
`sfxOut()` at `sfxScale` .55. `pauseMainRender` stops the game renderer while the ending is open. Per-chapter totals live in `save.stats.chapters[0..9]`.
`save.stats` (totals) and `save.chronicle` (first clear of each chapter's last battle) are normalized in `normalizeStats`.
Each battle collects `battle.tally` and adds it to `save.stats` exactly once in `recordBattleStats` (finishBattle / retreat;
`battle.tallied` guards it). Retry/retreat restore never touches `save.stats`.

## Saves
`validSave`/`validBattle` are strict; a save that fails validation is treated as damaged on load.
Any new field on save/battle/unit must stay valid under these checks (or update them with migration in `normalizeSave`).
Save keys: `cnation-tactics-save-v1` (story), `cnation-tactics-mission-save-v1` (mission).
`persist()` stamps `save.savedAt` and mirrors every auto-save to IndexedDB (`auto:<key>` in the slot DB);
`restoreNewerAutoSaves()` restores the newer copy at startup. The startup save load runs at module top level,
so anything `validSave`/`normalizeSave` touch (e.g. `HERO_LEVEL_CAP`) must be declared above it.
`continueJourney()` re-reads the story save from disk.

## Checks before pushing
- `node --check game.js && node --check sw.js`
- Load in Chromium (Playwright, `--use-gl=swiftshader`), confirm `window.TACTICS_READY` and no page errors.
