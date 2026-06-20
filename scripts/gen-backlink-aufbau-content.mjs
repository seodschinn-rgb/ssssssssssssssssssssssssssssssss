import fs from 'fs'

/** Raw HTML pasted from content export (sm-article inner body). */
const sourcePath = new URL('./backlink-aufbau-source.html', import.meta.url)

let body = fs.readFileSync(sourcePath, 'utf8')

body = body
  .replace(/<figure>\s*<img[^>]*backlink-aufbau-thumbnail[^>]*>\s*<\/figure>\s*/i, '')
  .replace(/\.\.\/images\/backlink-aufbau-thumbnail\.png/g, '/images/blog/backlink-aufbau-thumbnail.webp')
  .replace(/\.\.\/images\/backlink-aufbau-quality-scorecard\.png/g, '/images/blog/backlink-aufbau-quality-scorecard.webp')
  .replace(/\.\.\/images\/backlink-aufbau-10-methoden\.png/g, '/images/blog/backlink-aufbau-10-methoden.webp')
  .replace(/https:\/\/seomuenchen\.com/g, '')
  .replace(/href="(\/[^"#]+)\/"/g, 'href="$1"')
  .replace(/class="table-wrap"/g, 'class="table-wrapper"')
  .replace(
    /<nav aria-label="Inhaltsverzeichnis"[\s\S]*?<\/nav>/,
    `<nav class="sm-toc" aria-label="Inhaltsverzeichnis">
    <p class="sm-toc-title">Inhaltsverzeichnis</p>
    <ol>
      <li><a href="#was-ist-ein-backlink">Was ist ein Backlink? Linkjuice einfach erklärt</a></li>
      <li><a href="#warum-backlinks">Warum Backlinks fürs Ranking entscheidend sind</a></li>
      <li><a href="#offpage-seo">Off-Page SEO: Wo Backlinks reinpassen</a></li>
      <li><a href="#linkarten">Dofollow, Nofollow, UGC &amp; Sponsored</a></li>
      <li><a href="#hochwertiger-backlink">Was einen hochwertigen Backlink ausmacht</a></li>
      <li><a href="#10-methoden">Backlinks aufbauen: 10 Methoden Schritt für Schritt</a></li>
      <li><a href="#strategie">Backlink-Strategie: natürlich &amp; nachhaltig</a></li>
      <li><a href="#fehler">Die häufigsten Fehler &amp; Google-Richtlinien</a></li>
      <li><a href="#tools">Die besten Backlink-Tools (kostenlos &amp; kostenpflichtig)</a></li>
      <li><a href="#monitoring">Backlink-Monitoring &amp; Disavow</a></li>
      <li><a href="#ki-zeitalter">Zukunft: Linkaufbau im KI-Zeitalter 2026</a></li>
      <li><a href="#seo-muenchen">Backlink-Aufbau mit SEO München</a></li>
      <li><a href="#faq">Häufig gestellte Fragen</a></li>
      <li><a href="#fazit">Fazit</a></li>
    </ol>
  </nav>`
  )
  .replace(
    /<p class="meta-line">[\s\S]*?<\/p>|<p style="color:var\(--text-light\); font-size:0\.9rem; margin-bottom:24px;">[\s\S]*?<\/p>/,
    `<div class="meta-info">
    <span>Veröffentlicht: 20. Juni 2026</span>
    <span>Lesezeit: ca. 18 Min.</span>
    <span>Ratgeber</span>
  </div>`
  )
  .replace(/<div class="author-box">[\s\S]*?<\/div>\s*/i, '')
  .replace(
    /<div style="background:#F9FAFB; border-radius:8px; padding:20px 24px; margin:40px 0 32px; border-left:4px solid var\(--primary\);">[\s\S]*?<\/div>\s*/,
    ''
  )
  .replace(/<nav aria-label="Verwandte Artikel"[\s\S]*?<\/nav>\s*/i, '')
  .trim()

const out = [
  '/**',
  ' * Blog: Backlink Aufbau Grundlagen — sm-article Layout.',
  ' *',
  ' * Hinweis: Styles + Schema kommen zentral aus app/blog/[slug]/page.tsx',
  ' * (BLOG_ARTICLE_STYLE + ArticleSchema + BlogFAQSchema).',
  ' */',
  'export const backlinkAufbauGrundlagenContent =',
  "  '<div class=\"sm-article\">' +",
  '  `',
  body,
  '` +',
  "  '</div>'",
].join('\n')

fs.writeFileSync('lib/blog-posts/backlink-aufbau-grundlagen-content.ts', out, 'utf8')
console.log('written', out.length, 'chars')
