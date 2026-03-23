@echo off
echo Starte SEO-Website lokal auf http://localhost:4010
echo Alternative bei belegtem Port: npm run dev:4020  ^(http://localhost:4020^)
echo.
echo Falls der Port belegt ist: Alle anderen Fenster mit "npm run dev" schließen,
echo dann diese Datei erneut ausfuehren.
echo.
echo Bei Fehler "middleware-manifest.json": start-local-fresh.bat ausfuehren
echo ^(loescht Ordner .next und startet neu^).
echo.
npm run dev:local
pause
