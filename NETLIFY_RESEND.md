# Bestätigungs-Mail aktivieren (Netlify)

Damit Nutzer nach einer Kontakt- oder Terminanfrage eine Bestätigungs-E-Mail erhalten, muss der Resend-API-Key in Netlify gesetzt werden.

## Schritte

1. **Netlify öffnen**  
   [app.netlify.com](https://app.netlify.com) → einloggen

2. **Site auswählen**  
   Deine Site (z. B. seomuenchen.com) anklicken

3. **Umgebungsvariablen öffnen**  
   - **Site configuration** (oder **Site settings**)  
   - Links: **Environment variables**

4. **Variable hinzufügen**  
   - **Add a variable** / **Add variable** → **Add a single variable**  
   - **Key:** `RESEND_API_KEY`  
   - **Value:** dein Resend-API-Key (beginnt mit `re_`, z. B. von [resend.com](https://resend.com) → API Keys)  
   - **Scopes:** **Production** (und ggf. **Deploy Previews**) aktivieren  
   - **Save** / **Create variable**

5. **Neues Deploy auslösen**  
   - **Deploys**  
   - Beim letzten Deploy: **Trigger deploy** → **Deploy site**  
   Ohne neues Deploy wird die neue Variable nicht verwendet.

## Prüfen

Nach dem Deploy einmal eine Kontakt- oder Terminanfrage auf der Live-Seite absenden. Wenn alles stimmt, kommt die Bestätigungs-Mail an die angegebene E-Mail-Adresse.

Falls die Meldung erscheint „Die Bestätigungs-E-Mail konnte nicht versendet werden“: Key und Schreibweise (`RESEND_API_KEY`) prüfen und erneut deployen.
