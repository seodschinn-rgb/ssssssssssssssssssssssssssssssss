import fs from 'fs'

const sourcePath = new URL('./schema-markup-source.html', import.meta.url)

let body = fs.readFileSync(sourcePath, 'utf8')

body = body
  .replace(/<figure>\s*<img[^>]*schema-markup-thumbnail[^>]*>\s*<\/figure>\s*/i, '')
  .replace(/\.\.\/images\/schema-markup-thumbnail\.png/g, '/images/blog/schema-markup-thumbnail.webp')
  .replace(
    /\.\.\/images\/schema-markup-einbauen-schritte\.png/g,
    '/images/blog/schema-markup-einbauen-schritte.webp'
  )
  .replace(
    /\.\.\/images\/schema-markup-typen-rich-results\.png/g,
    '/images/blog/schema-markup-typen-rich-results.webp'
  )
  .replace(/https:\/\/seomuenchen\.com/g, '')
  .replace(/href="(\/[^"#]+)\/"/g, 'href="$1"')
  .replace(/class="table-wrap"/g, 'class="table-wrapper"')
  .replace(
    /<nav aria-label="Inhaltsverzeichnis"[\s\S]*?<\/nav>/,
    `<nav class="sm-toc" aria-label="Inhaltsverzeichnis">
    <p class="sm-toc-title">Inhaltsverzeichnis</p>
    <ol>
      <li><a href="#was-ist-schema">Was ist Schema Markup? Strukturierte Daten einfach erklärt</a></li>
      <li><a href="#format">JSON-LD, Microdata oder RDFa? Das richtige Format</a></li>
      <li><a href="#erstellen">Schema Markup erstellen: dein erstes JSON-LD in 4 Schritten</a></li>
      <li><a href="#typen">Die wichtigsten Schema-Typen mit Code-Beispielen</a></li>
      <li><a href="#einbauen">Schema Markup einbauen: WordPress, manuell &amp; via GTM</a></li>
      <li><a href="#testen">Schema Markup testen &amp; validieren</a></li>
      <li><a href="#fehler">Häufige Fehler &amp; Troubleshooting</a></li>
      <li><a href="#rich-results-2026">Schema &amp; Rich Results 2026: Was Google wirklich anzeigt</a></li>
      <li><a href="#lokal-muenchen">Schema für lokale Sichtbarkeit in München &amp; Bayern</a></li>
      <li><a href="#faq">Häufig gestellte Fragen</a></li>
      <li><a href="#fazit">Fazit</a></li>
    </ol>
  </nav>`
  )
  .replace(
    /<p style="color:var\(--text-light\); font-size:0\.9rem; margin-bottom:24px;">[\s\S]*?<\/p>/,
    `<div class="meta-info">
    <span>Veröffentlicht: 27. Juni 2026</span>
    <span>Lesezeit: ca. 16 Min.</span>
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
  ' * Blog: Schema Markup Anleitung — sm-article Layout.',
  ' *',
  ' * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx',
  ' * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).',
  ' */',
  'export const schemaMarkupAnleitungContent =',
  "  '<div class=\"sm-article\">' +",
  '  `',
  body,
  '` +',
  "  '</div>'",
].join('\n')

fs.writeFileSync('lib/blog-posts/schema-markup-anleitung-content.ts', out, 'utf8')
console.log('written', out.length, 'chars')
