@echo off
setlocal enableextensions

set SFDX_INSTALLER=false&set BIN_NAME=run
REM @OVERRIDES@

for %%x in (%*) do (
   if "%%~x"=="--dev-suspend" set DEV_SUSPEND=--inspect-brk
)

set SFDX_BINPATH="%~dp0%BIN_NAME%.cmd"
set LATEST_BINPATH="%LOCALAPPDATA%\%BIN_NAME%\client\bin\%BIN_NAME%.cmd"
if "%SFDX_INSTALLER%"=="true" (
    REM installer/update that shipped its own node binary
    set "UPDATED="
    REM if redirected from a v7 script
    IF "%SFDX_REDIRECTED%" == "1" set UPDATED=1
    REM if redirected from a v6 script, or first install of a v7 update
    IF /I %LATEST_BINPATH% == %SFDX_BINPATH% set UPDATED=1
    IF defined UPDATED (
        REM latest version installed by the autoupdater
        "%~dp0node.exe" %DEV_SUSPEND% "%~dp0%BIN_NAME%.js" %*
    ) else if exist %LATEST_BINPATH% (
        REM if an autoupdater version exists and this is not it, run that instead
        %LATEST_BINPATH% %*
    ) else if exist "%~dp0..\client\bin\node.exe" (
        REM installer version
        "%~dp0..\client\bin\node.exe" %DEV_SUSPEND% "%~dp0..\client\bin\%BIN_NAME%.js" %*
    ) else (
        REM unpacked tarball version
        node %DEV_SUSPEND% "%~dp0%BIN_NAME%" %*
    )
) else (
    REM npm install or local dev
    node %DEV_SUSPEND% "%~dp0run" %*
)
