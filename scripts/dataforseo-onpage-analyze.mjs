/**
 * On-Page-Analyse einer URL über DataForSEO API v3 (instant_pages).
 *
 * Voraussetzung: In .env.local (nicht committen) – Zugangsdaten wie im Dashboard
 * „SEO Keyword Tool“ / API Access:
 *   DATAFORSEO_LOGIN=deine@email.de
 *   DATAFORSEO_PASSWORD=dein_api_secret
 *   (alternativ statt PASSWORD: DATAFORSEO_API_KEY – gleiches Secret)
 *
 * Aufruf:
 *   node scripts/dataforseo-onpage-analyze.mjs
 *   node scripts/dataforseo-onpage-analyze.mjs "https://seomuenchen.com/blog/onpage-seo-checkliste"
 *
 * Hinweis: Jeder Aufruf kostet laut DataForSEO (siehe Pricing). Kein JS-Rendering standardmäßig
 * (günstiger); für SPAs optional --render setzen.
 */

import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

function loadEnvLocal() {
  const p = join(root, '.env.local')
  if (!existsSync(p)) return
  const raw = readFileSync(p, 'utf8')
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
      val = val.slice(1, -1)
    if (process.env[key] === undefined) process.env[key] = val
  }
}

loadEnvLocal()

const API = 'https://api.dataforseo.com/v3/on_page/instant_pages'

const targetUrl =
  process.argv[2] || 'https://seomuenchen.com/blog/onpage-seo-checkliste'
const useRender = process.argv.includes('--render')

const login = process.env.DATAFORSEO_LOGIN
const password = process.env.DATAFORSEO_PASSWORD || process.env.DATAFORSEO_API_KEY

if (!login || !password) {
  console.error(
    'Fehlende Variablen: DATAFORSEO_LOGIN und DATAFORSEO_PASSWORD (oder DATAFORSEO_API_KEY) in .env.local'
  )
  process.exit(1)
}

const auth = Buffer.from(`${login}:${password}`).toString('base64')

const task = {
  url: targetUrl,
  accept_language: 'de-DE,de;q=0.9,en;q=0.8',
}

if (useRender) {
  task.enable_browser_rendering = true
  task.disable_cookie_popup = true
}

const body = [task]

const res = await fetch(API, {
  method: 'POST',
  headers: {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})

const json = await res.json()

if (!res.ok) {
  console.error('HTTP', res.status, JSON.stringify(json, null, 2))
  process.exit(1)
}

const status = json.status_code
if (status !== 20000) {
  console.error('API status_code:', status, json.status_message)
  console.error(JSON.stringify(json, null, 2))
  process.exit(1)
}

const taskResult = json.tasks?.[0]
if (!taskResult || taskResult.status_code !== 20000) {
  console.error('Task-Fehler:', JSON.stringify(taskResult, null, 2))
  process.exit(1)
}

const items = taskResult.result?.[0]?.items
const page = Array.isArray(items) ? items.find((i) => i.resource_type === 'html') : null

if (!page?.meta) {
  console.error('Keine HTML-Item-Daten:', JSON.stringify(taskResult.result, null, 2).slice(0, 2000))
  process.exit(1)
}

const m = page.meta
const content = m.content || {}
const checks = m.checks || {}
const cost = json.cost ?? taskResult.cost

/** @param {Record<string, boolean>} obj */
function listTrue(obj) {
  return Object.entries(obj)
    .filter(([, v]) => v === true)
    .map(([k]) => k)
}

console.log('\n=== DataForSEO On-Page: ' + targetUrl + ' ===\n')
console.log('Kosten (USD, laut API):', cost)
console.log('onpage_score (0–100):', m.onpage_score ?? '—')
console.log('\n--- Meta ---')
console.log('Title:', m.title ?? m.meta_title)
console.log('Title-Länge:', m.title_length)
console.log('Meta Description:', (m.description || '').slice(0, 160) + (m.description?.length > 160 ? '…' : ''))
console.log('Description-Länge:', m.description_length)

console.log('\n--- Content-Metriken ---')
console.log('Wörter (plain_text_word_count):', content.plain_text_word_count)
console.log('plain_text_rate:', content.plain_text_rate)
console.log('Title ↔ Content Konsistenz (0–1):', content.title_to_content_consistency)
console.log('Description ↔ Content Konsistenz (0–1):', content.description_to_content_consistency)
console.log('Flesch–Kincaid Lesbarkeit:', content.flesch_kincaid_readability_index)

console.log('\n--- Struktur ---')
console.log('internal_links_count:', m.internal_links_count)
console.log('external_links_count:', m.external_links_count)
console.log('images_count:', m.images_count)
if (m.htags) console.log('H-Tags:', JSON.stringify(m.htags, null, 2))

console.log('\n--- Checks (nur TRUE = Problem laut Schwellen) ---')
const problems = listTrue(checks)
if (problems.length === 0) {
  console.log('Keine markierten Check-Flags (oder keine boolean warnings).')
} else {
  problems.forEach((p) => console.log(' •', p))
}

if (m.page_timing?.largest_contentful_paint != null) {
  console.log('\n--- CWV (falls mit Rendering geliefert) ---')
  console.log('LCP ms:', m.page_timing.largest_contentful_paint)
  console.log('CLS:', m.cumulative_layout_shift)
}

console.log('\n--- Kurzinterpretation ---')
const score = m.onpage_score
if (typeof score === 'number') {
  if (score >= 85) console.log('On-Page-Score: stark (' + score + '/100).')
  else if (score >= 65) console.log('On-Page-Score: solide (' + score + '/100), Details bei den Checks prüfen.')
  else console.log('On-Page-Score: Nachholbedarf (' + score + '/100).')
}
if (content.title_to_content_consistency != null && content.title_to_content_consistency < 0.3) {
  console.log('Hinweis: Title passt schwach zum sichtbaren Text (Konsistenz niedrig).')
}
if (content.description_to_content_consistency != null && content.description_to_content_consistency < 0.2) {
  console.log('Hinweis: Meta-Description passt schwach zum Inhalt — prüfen.')
}

console.log('\nVollständige Rohantwort: scripts/dataforseo-last-response.json (optional speichern mit --save)\n')

if (process.argv.includes('--save')) {
  const { writeFileSync } = await import('fs')
  writeFileSync(join(root, 'scripts/dataforseo-last-response.json'), JSON.stringify(json, null, 2), 'utf8')
  console.log('Gespeichert: scripts/dataforseo-last-response.json')
}
