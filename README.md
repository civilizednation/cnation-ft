# cnation-ft
cnation 파랜드 택틱스 (명작 턴제 게임) · **cnation TACTICS · 아르카 연대기**

## 실행에 필요한 파일
`index.html`, `game.js`, `vendor/three-r170.js`, `sw.js`, `manifest.webmanifest`, `icon.png`, `revisions.html`

정적 호스팅(GitHub Pages, Vercel 등)에 그대로 올리면 됩니다. 로컬에서는 `python3 -m http.server 8080` 후 http://localhost:8080 으로 열어 주세요 (`file://`로 직접 열면 오프라인 캐시가 동작하지 않습니다).

## 버전
현재 버전과 변경 내역은 [revisions.html](revisions.html) (타이틀 화면 하단 `rev. history` 링크)에서 확인할 수 있습니다.

`bgm/` 폴더의 음악 파일은 현재 사용하지 않습니다. 사용하려면 `index.html`의 `window.TACTICS_BGM`에 경로를 넣으세요.
