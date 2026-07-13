import fs from 'fs'

const sourcePath = new URL('./keyword-recherche-source.html', import.meta.url)

let body = fs.readFileSync(sourcePath, 'utf8')

body = body
  .replace(/<figure>\s*<img[^>]*keyword-recherche-thumbnail[^>]*>\s*<\/figure>\s*/i, '')
  .replace(
    /\.\.\/images\/keyword-recherche-thumbnail\.png/g,
    '/images/blog/keyword-recherche-thumbnail.webp'
  )
  .replace(
    /\.\.\/images\/keyword-recherche-schritte\.png/g,
    '/images/blog/keyword-recherche-schritte.webp'
  )
  .replace(
    /\.\.\/images\/keyword-recherche-long-tail-vergleich\.png/g,
    '/images/blog/keyword-recherche-long-tail-vergleich.webp'
  )
  .replace(/https:\/\/seomuenchen\.com\/?/g, '/')
  .replace(/href="(\/[^"#]+)\/"/g, 'href="$1"')
  .replace(/class="table-wrap"/g, 'class="table-wrapper"')
  .replace(
    /<nav aria-label="Inhaltsverzeichnis"[\s\S]*?<\/nav>/,
    `<nav class="sm-toc" aria-label="Inhaltsverzeichnis">
    <p class="sm-toc-title">Inhaltsverzeichnis</p>
    <ol>
      <li><a href="#was-ist">Was ist Keyword-Recherche und warum entscheidet sie über deinen Erfolg?</a></li>
      <li><a href="#ueberblick">Keyword-Recherche in 7 Schritten: der Überblick</a></li>
      <li><a href="#intention">Schritt 1: Suchintention verstehen</a></li>
      <li><a href="#seed">Schritt 2: Seed-Keywords sammeln</a></li>
      <li><a href="#kostenlos">Schritt 3: Kostenlos Keywords finden mit Google Suggest, GSC &amp; Keyword Planner</a></li>
      <li><a href="#tools">Schritt 4: Tools gezielt einsetzen (und wann du keins brauchst)</a></li>
      <li><a href="#bewerten">Schritt 5: Keywords bewerten (Suchvolumen ist nicht alles)</a></li>
      <li><a href="#long-tail">Schritt 6: Long-Tail zuerst als Keyword-Strategie für kleine Websites</a></li>
      <li><a href="#mapping">Schritt 7: Keywords auf Seiten verteilen (Keyword-Mapping)</a></li>
      <li><a href="#ki">KI-Recherche 2026: ChatGPT als Ideen-Quelle und AI Overviews</a></li>
      <li><a href="#muenchen">Lokale Keyword-Recherche: Beispiele aus München</a></li>
      <li><a href="#fehler">Häufige Fehler bei der Keyword-Recherche</a></li>
      <li><a href="#faq">Häufig gestellte Fragen</a></li>
      <li><a href="#fazit">Fazit</a></li>
    </ol>
  </nav>`
  )
  .replace(
    /<p style="color:var\(--text-light\); font-size:0\.9rem; margin-bottom:24px;">[\s\S]*?<\/p>/,
    `<div class="meta-info">
    <span>Veröffentlicht: 1. März 2026</span>
    <span>Aktualisiert: 13. Juli 2026</span>
    <span>Lesezeit: ca. 11 Min.</span>
    <span>Ratgeber</span>
  </div>`
  )
  .replace(
    /<div style="background:#F9FAFB; border-radius:8px; padding:20px 24px; margin:40px 0 32px; border-left:4px solid var\(--primary\);">[\s\S]*?<\/div>\s*/,
    ''
  )
  .replace(/<nav aria-label="Verwandte Artikel"[\s\S]*?<\/nav>\s*/i, '')
  .trim()

const out = [
  '/**',
  ' * Blog: Keyword-Recherche-Anleitung — sm-article Layout.',
  ' *',
  ' * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx',
  ' * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).',
  ' */',
  'export const keywordRechercheAnleitungContent =',
  "  '<div class=\"sm-article\">' +",
  '  `',
  body,
  '` +',
  "  '</div>'",
].join('\n')

fs.writeFileSync('lib/blog-posts/keyword-recherche-anleitung-content.ts', out, 'utf8')
console.log('written', out.length, 'chars')
