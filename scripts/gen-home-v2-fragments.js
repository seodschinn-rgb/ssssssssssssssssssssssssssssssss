const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '../.tmp-home-v2')
const outDir = path.join(__dirname, '../lib/home-v2')
fs.mkdirSync(outDir, { recursive: true })

const map = {
  nav: 'navHtml',
  hero: 'heroHtml',
  marquee: 'marqueeHtml',
  route: 'routeHtml',
  services: 'servicesHtml',
  proof: 'proofHtml',
  person: 'personHtml',
  pricing: 'pricingHtml',
  knowledge: 'knowledgeHtml',
  cities: 'citiesHtml',
  detail: 'detailHtml',
  footer: 'footerHtml',
}

for (const [file, exp] of Object.entries(map)) {
  let html = fs.readFileSync(path.join(dir, `${file}.html`), 'utf8')
  if (file === 'proof') {
    html = html.replace(
      /\s*<!-- \[GBP-LINK:[\s\S]*?<p class="gbp-row rv"><a class="arrow-link" href="\[GBP-LINK\]">Bewertungen auf Google ansehen<\/a><\/p>\n?/,
      '\n',
    )
  }
  const ts =
    '/** Auto-extracted from homepage-redesign html-neu — copy is source of truth. */\n' +
    `export const ${exp} = ${JSON.stringify(html)}\n`
  fs.writeFileSync(path.join(outDir, `${file}.ts`), ts)
  console.log('ok', file, html.length)
}
