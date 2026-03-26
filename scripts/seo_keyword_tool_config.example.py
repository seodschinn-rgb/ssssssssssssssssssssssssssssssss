"""
Vorlage für DataForSEO – oft im Dashboard unter „SEO Keyword Tool“ / API Access.

DataForSEO nutzt Basic Auth: Login = E-Mail, „API Password“ = Secret (wird oft als API-Key bezeichnet).

Kopiere nach `seo_keyword_tool_config.py` (liegt in .gitignore):

  copy seo_keyword_tool_config.example.py seo_keyword_tool_config.py

Alternativ: gleicher Inhalt in `dataforseo_config.py` – die Skripte lesen beide Dateinamen.
"""

# Login = E-Mail aus dem DataForSEO-Konto
DATAFORSEO_LOGIN = "dein-login@beispiel.de"

# API-Passwort aus dem Dashboard (nicht dein Login-Passwort für die Webseite)
# Alias: DATAFORSEO_API_KEY = "..." falls du es so nennen willst
DATAFORSEO_PASSWORD = "dein-api-passwort"
