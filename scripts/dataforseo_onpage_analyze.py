#!/usr/bin/env python3
"""
On-Page-Analyse per DataForSEO API v3 (instant_pages).

Zugangsdaten (wie im DataForSEO-Dashboard unter „SEO Keyword Tool“ / API Access):
  • scripts/dataforseo_config.py  oder  scripts/seo_keyword_tool_config.py
  • oder Umgebungsvariablen DATAFORSEO_LOGIN + DATAFORSEO_PASSWORD
    (Passwort auch als DATAFORSEO_API_KEY möglich – gleiches Secret wie „API Password“)

Beispiel:
  python scripts/dataforseo_onpage_analyze.py
  python scripts/dataforseo_onpage_analyze.py "https://seomuenchen.com/blog/onpage-seo-checkliste"
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path

SCRIPTS_DIR = Path(__file__).resolve().parent
API_URL = "https://api.dataforseo.com/v3/on_page/instant_pages"


def _load_credentials_from_py_file(path: Path) -> tuple[str, str] | None:
    """Liest DATAFORSEO_LOGIN + DATAFORSEO_PASSWORD oder DATAFORSEO_API_KEY (Passwort)."""
    import importlib.util

    spec = importlib.util.spec_from_file_location(path.stem, path)
    if not spec or not spec.loader:
        return None
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    l = getattr(mod, "DATAFORSEO_LOGIN", None)
    p = getattr(mod, "DATAFORSEO_PASSWORD", None) or getattr(mod, "DATAFORSEO_API_KEY", None)
    if l and p:
        return str(l), str(p)
    return None


def load_credentials() -> tuple[str, str]:
    login = os.environ.get("DATAFORSEO_LOGIN")
    password = os.environ.get("DATAFORSEO_PASSWORD") or os.environ.get("DATAFORSEO_API_KEY")

    custom = os.environ.get("SEO_KEYWORD_TOOL_CONFIG")
    paths = [
        SCRIPTS_DIR / "dataforseo_config.py",
        SCRIPTS_DIR / "seo_keyword_tool_config.py",
    ]
    if custom:
        paths.insert(0, Path(custom).expanduser())

    for config_path in paths:
        if config_path.is_file():
            creds = _load_credentials_from_py_file(config_path)
            if creds:
                return creds

    if login and password:
        return login, password

    print(
        "Keine Zugangsdaten: Lege scripts/seo_keyword_tool_config.py oder "
        "scripts/dataforseo_config.py an (siehe *_config.example.py) oder setze "
        "DATAFORSEO_LOGIN und DATAFORSEO_PASSWORD (bzw. DATAFORSEO_API_KEY).",
        file=sys.stderr,
    )
    sys.exit(1)


def main() -> None:
    parser = argparse.ArgumentParser(description="DataForSEO On-Page Instant Pages")
    parser.add_argument(
        "url",
        nargs="?",
        default="https://seomuenchen.com/blog/onpage-seo-checkliste",
        help="Zu analysierende URL (öffentlich erreichbar)",
    )
    parser.add_argument(
        "--render",
        action="store_true",
        help="Browser-Rendering (teurer, u.a. Core Web Vitals)",
    )
    parser.add_argument(
        "--save",
        action="store_true",
        help="Antwort nach scripts/dataforseo_last_response.json speichern",
    )
    args = parser.parse_args()

    login, password = load_credentials()
    auth = base64.b64encode(f"{login}:{password}".encode()).decode()

    task: dict = {
        "url": args.url,
        "accept_language": "de-DE,de;q=0.9,en;q=0.8",
    }
    if args.render:
        task["enable_browser_rendering"] = True
        task["disable_cookie_popup"] = True

    body = json.dumps([task]).encode("utf-8")

    req = urllib.request.Request(
        API_URL,
        data=body,
        method="POST",
        headers={
            "Authorization": f"Basic {auth}",
            "Content-Type": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            raw = resp.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        print(e.read().decode("utf-8", errors="replace"), file=sys.stderr)
        sys.exit(1)

    data = json.loads(raw)

    if data.get("status_code") != 20000:
        print(json.dumps(data, indent=2, ensure_ascii=False))
        sys.exit(1)

    task_info = data["tasks"][0]
    if task_info.get("status_code") != 20000:
        print(json.dumps(task_info, indent=2, ensure_ascii=False))
        sys.exit(1)

    items = task_info.get("result", [{}])[0].get("items") or []
    page = next((i for i in items if i.get("resource_type") == "html"), None)

    if not page or "meta" not in page:
        print("Keine HTML-Metadaten in der Antwort.", file=sys.stderr)
        print(json.dumps(task_info, indent=2, ensure_ascii=False)[:4000])
        sys.exit(1)

    m = page["meta"]
    content = m.get("content") or {}
    checks = m.get("checks") or {}

    def true_flags(d: dict) -> list[str]:
        return [k for k, v in d.items() if v is True]

    print("\n=== DataForSEO On-Page ===")
    print("URL:", args.url)
    print("Kosten (USD):", data.get("cost"))
    print("onpage_score:", m.get("onpage_score"))
    print("\n--- Meta ---")
    print("Title:", m.get("title") or m.get("meta_title"))
    print("Title-Länge:", m.get("title_length"))
    desc = m.get("description") or ""
    print("Description:", (desc[:200] + "…") if len(desc) > 200 else desc)
    print("\n--- Content ---")
    print("Wörter:", content.get("plain_text_word_count"))
    print("Title↔Content:", content.get("title_to_content_consistency"))
    print("Description↔Content:", content.get("description_to_content_consistency"))
    print("Flesch–Kincaid:", content.get("flesch_kincaid_readability_index"))
    print("\n--- Checks (TRUE = Hinweis) ---")
    flags = true_flags(checks)
    if flags:
        for f in flags:
            print(" •", f)
    else:
        print("(keine booleschen Warn-Flags)")

    if args.save:
        out = SCRIPTS_DIR / "dataforseo_last_response.json"
        out.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
        print("\nGespeichert:", out)


if __name__ == "__main__":
    main()
