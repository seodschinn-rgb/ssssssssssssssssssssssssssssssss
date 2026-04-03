/**
 * Liest scripts/seo-vs-sea-full.html (Export aus dem Editor: von <style> bis vor <script type="application/ld+json">)
 * und schreibt lib/blog-posts/seo-vs-sea-2026-html-body.ts
 * Aufruf: node scripts/build-seo-vs-sea-content.mjs
 */
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const inputPath = join(__dirname, 'seo-vs-sea-full.html')

const rawFile = fs.readFileSync(inputPath, 'utf8')
const start = rawFile.indexOf('<div class="sm-article">')
if (start < 0) throw new Error('sm-article not found')
let s = rawFile.slice(start)

const entities = [
  ['&uuml;', 'ü'],
  ['&Uuml;', 'Ü'],
  ['&auml;', 'ä'],
  ['&Auml;', 'Ä'],
  ['&ouml;', 'ö'],
  ['&Ouml;', 'Ö'],
  ['&szlig;', 'ß'],
  ['&nbsp;', ' '],
  ['&ndash;', '–'],
  ['&mdash;', '—'],
  ['&bdquo;', '„'],
  ['&ldquo;', '“'],
  ['&rsquo;', '’'],
  ['&quot;', '"'],
  ['&amp;', '&'],
]

for (const [from, to] of entities) {
  s = s.split(from).join(to)
}

s = s.replace(/https:\/\/seomuenchen\.com(\/[^"'>\s]*)/g, (_, p) => {
  const t = p.replace(/\/$/, '')
  return t || '/'
})

s = s.replace(
  /<nav aria-label="Inhaltsverzeichnis"[^>]*>/,
  '<nav class="sm-toc" aria-label="Inhaltsverzeichnis">',
)
s = s.replace(
  /<p style="color:var\(--text-light\); font-size:0\.9rem; margin-bottom:24px;">/,
  '<p class="sm-meta">',
)
s = s.replace(
  /<p style="font-weight:700; font-size:1\.05rem; margin-bottom:12px; color:var\(--primary\);">Inhaltsverzeichnis<\/p>/,
  '<p class="sm-toc-title">Inhaltsverzeichnis</p>',
)
s = s.replace(/<ol style="margin:0; padding-left:20px; line-height:2;">/g, '<ol>')
s = s.replace(/class="table-scroll"/g, 'class="sm-table-wrap"')
s = s.replace(
  /<img src="\.\.\/images\/seo-vs-sea-kostenvergleich\.png"([^>]*)>/,
  '<img src="/images/blog/seo-vs-sea-kostenvergleich.webp"$1 width="900" height="506" loading="lazy">',
)
s = s.replace(
  /<img src="\.\.\/images\/seo-vs-sea-phasenmodell\.png"([^>]*)>/,
  '<img src="/images/blog/seo-vs-sea-phasenmodell.webp"$1 width="900" height="506" loading="lazy">',
)

// Alle style-Attribute entfernen (globales Layout kommt aus page.tsx)
s = s.replace(/\sstyle="[^"]*"/g, '')

// Autorenbox (BlogAuthorBox übernimmt)
s = s.replace(
  /<div[^>]*>\s*<p[^>]*>Über den Autor<\/p>[\s\S]*?<\/div>\s*(?=<div class="fazit">)/,
  '',
)

s = s.replace(
  /<nav aria-label="Weiterführende Artikel"[^>]*>[\s\S]*?<\/nav>/,
  `<div class="sm-related">
    <p class="sm-related-title">Weiterführende Artikel</p>
    <div class="sm-related-links">
      <a href="/blog/google-ranking-verbessern" class="sm-related-chip internal-link">Google Ranking verbessern: Bewährte Tipps für 2026</a>
      <a href="/blog/local-seo-guide" class="sm-related-chip internal-link">Local SEO Guide für München</a>
      <a href="/blog/seo-fuer-kleine-unternehmen" class="sm-related-chip internal-link">SEO für kleine Unternehmen</a>
      <a href="/blog/seo-kosten" class="sm-related-chip internal-link">SEO Kosten 2026: Was kostet Suchmaschinenoptimierung?</a>
    </div>
  </div>`,
)

s = s.trim()

const outPath = join(root, 'lib/blog-posts/seo-vs-sea-2026-html-body.ts')
const out = `/**
 * Blog: SEO vs. SEA (2026), sm-article — generiert via scripts/build-seo-vs-sea-content.mjs
 */
export const seoVsSea2026HtmlBody = ${JSON.stringify(s)}
`
fs.writeFileSync(outPath, out, 'utf8')
console.log('Wrote', outPath, s.length, 'chars')
