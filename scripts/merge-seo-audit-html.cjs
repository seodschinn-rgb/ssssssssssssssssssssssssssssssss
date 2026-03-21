/**
 * Baut lib/blog-posts/seo-audit-checkliste-content.ts aus den HTML-Partials.
 * Ausführen: node scripts/merge-seo-audit-html.cjs
 */
const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', 'lib', 'blog-posts')
const parts = ['seo-audit-part1.html', 'seo-audit-part2.html', 'seo-audit-part3.html'].map((f) =>
  fs.readFileSync(path.join(dir, f), 'utf8')
)
let html = parts.join('')

html = html.replace(/src="images\//g, 'src="/images/blog/')
html = html.replace(/href="\/kontakt\//g, 'href="/kontakt"')
html = html.replace(/href="\/technisches-seo\//g, 'href="/leistungen/technisches-seo"')
html = html.replace(/href="\/ai-seo\//g, 'href="/blog/onpage-seo-checkliste#ai-optimierung"')
html = html.replace(/href="\/onpage-seo-checkliste\//g, 'href="/blog/onpage-seo-checkliste"')
html = html.replace(/href="\/local-seo-muenchen\//g, 'href="/leistungen/local-seo"')
html = html.replace(/href="\/interne-verlinkung\//g, 'href="/blog/interne-verlinkung-anleitung"')

const out =
  '/**\n * Blog: SEO Audit 2026 — HTML (generiert aus seo-audit-part*.html via scripts/merge-seo-audit-html.cjs)\n */\n' +
  'export const seoAuditChecklisteContent = ' +
  JSON.stringify(html) +
  '\n'

fs.writeFileSync(path.join(dir, 'seo-audit-checkliste-content.ts'), out, 'utf8')
console.log('Wrote lib/blog-posts/seo-audit-checkliste-content.ts')
