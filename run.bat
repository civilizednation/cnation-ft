@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
set "GAME_PORT=8080"
set "PYTHON_CMD="
py -3 -c "import sys; assert sys.version_info >= (3,7)" >nul 2>&1
if not errorlevel 1 set "PYTHON_CMD=py -3"
if defined PYTHON_CMD goto launch
python -c "import sys; assert sys.version_info >= (3,7)" >nul 2>&1
if not errorlevel 1 set "PYTHON_CMD=python"
if defined PYTHON_CMD goto launch
python3 -c "import sys; assert sys.version_info >= (3,7)" >nul 2>&1
if not errorlevel 1 set "PYTHON_CMD=python3"
if defined PYTHON_CMD goto launch
echo Python 3.7 or newer is required.
echo Install Python from https://www.python.org/downloads/windows/
echo Enable 'Add python.exe to PATH', then run this file again.
echo See README.txt for details.
pause
exit /b 1
:launch
echo Starting cnation TACTICS v0.6.12...
echo Keep this window open while playing.
echo Close this window or press Ctrl+C to stop the server.
%PYTHON_CMD% -c "import http.server,threading,webbrowser,sys; port=int(sys.argv[1]); server=http.server.ThreadingHTTPServer(('127.0.0.1',port),http.server.SimpleHTTPRequestHandler); url='http://localhost:'+str(port)+'/'; print('cnation TACTICS v0.6.12 - '+url,flush=True); threading.Timer(0.8,lambda:webbrowser.open(url)).start(); server.serve_forever()" %GAME_PORT%
if not errorlevel 1 exit /b 0
echo.
echo Server stopped. If port 8080 is occupied, close the other local server.
echo You can also change GAME_PORT in run.bat.
pause
