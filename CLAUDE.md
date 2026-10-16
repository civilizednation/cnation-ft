# cnation TACTICS (아르카 연대기)

Mobile-first 3D turn-based tactics RPG (Korean). Static site: no build step, no server code.

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
- `bgm/` — real soundtrack files, planned for ver 1.1.0 (KEEP). Currently unused: `window.TACTICS_BGM` in index.html is empty,
  so music is procedural (`TacticsSoundtrackEngine`). File numbers match track ids in `bgmTrackFor()`
  (1 title, 2 world, 3 town, 4/5/6 battle by chapter, 7 boss, 8 sad, 9 mystery, 10 victory, 11 final battle, 12 ending);
  `TACTICS_BGM` accepts either the track id or the type name as key. Tracks without a file fall back to procedural music.

## Revision management (required for every change)
Version format `ver.MAJOR.MINOR.PATCH`: PATCH = fixes/tuning, MINOR = new features, MAJOR = big overhaul.
On every change that ships, bump the version and update ALL of:
1. `game.js` — `const GAME_VERSION='x.y.z'`.
2. `index.html` — title fallback text `ver.x.y.z`, `window.TACTICS_BUILD`, and `game.js?v=x.y.z`.
3. `sw.js` — `const VERSION='x.y.z'`.
4. `revisions.html` — add a new `<section class="rev" id="vx.y.z">` at the top (date, 수정/변경/밸런스 bullets in Korean),
   move the `현재` tag to it.
Title screen shows `ver.x.y.z (rev. history)`; the link opens `revisions.html`.

## Saves
`validSave`/`validBattle` are strict; a save that fails validation is treated as damaged on load.
Any new field on save/battle/unit must stay valid under these checks (or update them with migration in `normalizeSave`).
Save keys: `cnation-tactics-save-v1` (story), `cnation-tactics-mission-save-v1` (mission).

## Checks before pushing
- `node --check game.js && node --check sw.js`
- Load in Chromium (Playwright, `--use-gl=swiftshader`), confirm `window.TACTICS_READY` and no page errors.
