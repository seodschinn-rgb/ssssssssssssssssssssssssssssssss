const fs = require('fs')
const path = require('path')

const htmlPath =
  'c:/Users/julia/OneDrive/Dokumente/agentic-seo-system-v1.0.0/sites/seomuenchen-com/output/published/homepage-redesign/html-neu/index.html'
const outDir = path.join(__dirname, '../lib/home-v2')

const html = fs.readFileSync(htmlPath, 'utf8')
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1].replace(/<script>[\s\S]*?<\/script>/, '')

const sections = [
  ['nav', 'navHtml', /<!-- ================= NAV[\s\S]*?<\/header>/],
  ['hero', 'heroHtml', /<!-- ================= HERO[\s\S]*?<\/section>/],
  [
    'marquee',
    'marqueeHtml',
    /<!-- Marquee[\s\S]*?<div class="marquee"[\s\S]*?<\/div>\s*<\/div>/,
  ],
  ['route', 'routeHtml', /<!-- ================= 01[\s\S]*?<\/section>/],
  ['services', 'servicesHtml', /<!-- ================= 02[\s\S]*?<\/section>/],
  ['proof', 'proofHtml', /<!-- ================= 03[\s\S]*?<\/section>/],
  ['person', 'personHtml', /<!-- ================= 04[\s\S]*?<\/section>/],
  ['pricing', 'pricingHtml', /<!-- ================= 05[\s\S]*?<\/section>/],
  ['knowledge', 'knowledgeHtml', /<!-- ================= 06[\s\S]*?<\/section>/],
  ['cities', 'citiesHtml', /<!-- ================= 07[\s\S]*?<\/section>/],
  ['detail', 'detailHtml', /<!-- ================= 08[\s\S]*?<\/section>/],
  ['footer', 'footerHtml', /<!-- ================= FOOTER[\s\S]*?<\/footer>/],
]

function balance(html, tag) {
  const o = (html.match(new RegExp(`<${tag}\\b`, 'g')) || []).length
  const c = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length
  return { o, c, ok: o === c }
}

fs.mkdirSync(outDir, { recursive: true })

for (const [file, exp, re] of sections) {
  const m = body.match(re)
  if (!m) {
    console.error('MISSING', file)
    continue
  }
  let chunk = m[0]
    .replace(/src="images\/muenchen-hero\.webp"/g, 'src="/images/blog/muenchen-hero.webp"')
    .replace(
      /src="images\/homepage-redesign-gsc-beispiel\.webp"/g,
      'src="/images/blog/homepage-redesign-gsc-beispiel.webp"',
    )

  if (file === 'proof') {
    chunk = chunk.replace(
      /\s*<!-- \[GBP-LINK:[\s\S]*?<p class="gbp-row rv"><a class="arrow-link" href="\[GBP-LINK\]">Bewertungen auf Google ansehen<\/a><\/p>\n?/,
      '\n',
    )
  }

  // Single root for hydration
  const wrapped = `<div class="hv2-root">${chunk}</div>`
  const divBal = balance(wrapped, 'div')
  const secBal = balance(wrapped, 'section')
  console.log(
    file,
    'div',
    divBal.o + '/' + divBal.c,
    'section',
    secBal.o + '/' + secBal.c,
    divBal.ok && (secBal.o === 0 || secBal.ok) ? 'OK' : 'BAD',
  )

  const ts =
    '/** Auto-extracted from homepage-redesign html-neu — copy is source of truth. */\n' +
    `export const ${exp} = ${JSON.stringify(wrapped)}\n`
  fs.writeFileSync(path.join(outDir, `${file}.ts`), ts, 'utf8')
}
