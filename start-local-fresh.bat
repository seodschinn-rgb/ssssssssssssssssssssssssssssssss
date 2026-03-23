@echo off
chcp 65001 >nul
echo ========================================
echo  SEO-Website: Cache leeren + lokal starten
echo  URL: http://localhost:4010
echo ========================================
echo.
echo Wichtig: Schliesse zuerst alle anderen Fenster mit "npm run dev" / Next.js.
echo.
pause
call npm run clean
if errorlevel 1 (
  echo.
  echo Clean ist fehlgeschlagen ^(oft: OneDrive oder Datei gesperrt^).
  echo Loesche den Ordner ".next" manuell im Explorer, dann starte diese Datei erneut.
  echo.
  pause
  exit /b 1
)
echo.
call npm run dev:local
pause
