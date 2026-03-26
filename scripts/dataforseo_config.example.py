"""
Vorlage für DataForSEO-API-Zugangsdaten.

Im DataForSEO-Dashboard heißt der Bereich u. a. „SEO Keyword Tool“ / API Access.
Du brauchst Login (E-Mail) + API-Passwort (das Secret – oft als „API Key“ bezeichnet).

1. Kopieren nach `dataforseo_config.py` ODER `seo_keyword_tool_config.py`:
     copy dataforseo_config.example.py dataforseo_config.py   (Windows)

2. Werte eintragen: https://app.dataforseo.com/api-access

`dataforseo_config.py` / `seo_keyword_tool_config.py` sind in .gitignore.
"""

DATAFORSEO_LOGIN = "dein-login@beispiel.de"
DATAFORSEO_PASSWORD = "dein-api-passwort"

# Optional: statt DATAFORSEO_PASSWORD kannst du auch DATAFORSEO_API_KEY setzen (gleiche Bedeutung).
# DATAFORSEO_API_KEY = "dein-api-passwort"
