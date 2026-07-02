import fs from 'fs'

const sourcePath = new URL('./seo-tools-anfaenger-source.html', import.meta.url)

let body = fs.readFileSync(sourcePath, 'utf8')

body = body
  .replace(/<figure>\s*<img[^>]*seo-tools-anfaenger-thumbnail[^>]*>\s*<\/figure>\s*/i, '')
  .replace(
    /\.\.\/images\/seo-tools-anfaenger-thumbnail\.png/g,
    '/images/blog/seo-tools-anfaenger-thumbnail.webp'
  )
  .replace(/\.\.\/images\/seo-tools-vergleich\.png/g, '/images/blog/seo-tools-vergleich.webp')
  .replace(
    /\.\.\/images\/seo-tools-starter-stack\.png/g,
    '/images/blog/seo-tools-starter-stack.webp'
  )
  .replace(/https:\/\/seomuenchen\.com/g, '')
  .replace(/href="(\/[^"#]+)\/"/g, 'href="$1"')
  .replace(/class="table-wrap"/g, 'class="table-wrapper"')
  .replace(
    /<nav aria-label="Inhaltsverzeichnis"[\s\S]*?<\/nav>/,
    `<nav class="sm-toc" aria-label="Inhaltsverzeichnis">
    <p class="sm-toc-title">Inhaltsverzeichnis</p>
    <ol>
      <li><a href="#warum">Warum du SEO-Tools brauchst (aber weniger, als du denkst)</a></li>
      <li><a href="#kostenlose-basis">Die kostenlose Basis: 5 Tools, die du zuerst einrichtest</a></li>
      <li><a href="#deutsche-tools">Deutsche SEO-Tools: Seobility, Sistrix &amp; SEORCH im Check</a></li>
      <li><a href="#internationale-tools">Ahrefs, Semrush &amp; Mangools: der Realitäts-Check</a></li>
      <li><a href="#technik">Technik-Check: Screaming Frog und die 500-URL-Grenze</a></li>
      <li><a href="#aufgaben">Welches Tool für welche Aufgabe? Die Übersicht</a></li>
      <li><a href="#starter-stack">Dein Starter-Stack in 4 Schritten</a></li>
      <li><a href="#ki-tools">ChatGPT, Claude &amp; AI Overviews: Was KI-Tools taugen</a></li>
      <li><a href="#kosten">Die Kosten-Wahrheit: kostenlos vs. bezahlt</a></li>
      <li><a href="#fehler">Häufige Anfängerfehler mit SEO-Tools</a></li>
      <li><a href="#faq">Häufig gestellte Fragen</a></li>
      <li><a href="#fazit">Fazit</a></li>
    </ol>
  </nav>`
  )
  .replace(
    /<p style="color:var\(--text-light\); font-size:0\.9rem; margin-bottom:24px;">[\s\S]*?<\/p>/,
    `<div class="meta-info">
    <span>Veröffentlicht: 2. Juli 2026</span>
    <span>Lesezeit: ca. 12 Min.</span>
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
  ' * Blog: SEO-Tools für Anfänger — sm-article Layout.',
  ' *',
  ' * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx',
  ' * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).',
  ' */',
  'export const seoToolsAnfaengerContent =',
  "  '<div class=\"sm-article\">' +",
  '  `',
  body,
  '` +',
  "  '</div>'",
].join('\n')

fs.writeFileSync('lib/blog-posts/seo-tools-anfaenger-content.ts', out, 'utf8')
console.log('written', out.length, 'chars')
