@echo off
cd /d "%~dp0"

where py >nul 2>1
if %ERRORLEVEL% EQU 0 (
    set PY_CMD=py
) else (
    set PY_CMD=python
)

start http://127.0.0.1:8000/

%PY_CMD% -m http.server 8000
