const fs = require('fs')
const path = require('path')

const htmlPath =
  'c:/Users/julia/OneDrive/Dokumente/agentic-seo-system-v1.0.0/sites/seomuenchen-com/output/published/homepage-redesign/html-neu/index.html'
const outDir = path.join(__dirname, '../.tmp-home-v2')
fs.mkdirSync(outDir, { recursive: true })

const html = fs.readFileSync(htmlPath, 'utf8')
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1]

// Extract script
const scriptMatch = body.match(/<script>([\s\S]*?)<\/script>/)
if (scriptMatch) {
  fs.writeFileSync(path.join(outDir, 'interactions.js'), scriptMatch[1])
}

const withoutScript = body.replace(/<script>[\s\S]*?<\/script>/, '')

const sections = [
  ['skip', /(<a class="skip"[\s\S]*?<\/a>)/],
  ['nav', /(<!-- ================= NAV[\s\S]*?<\/header>)/],
  ['hero', /(<!-- ================= HERO[\s\S]*?<\/section>)/],
  ['marquee', /(<!-- Marquee[\s\S]*?<\/div>\s*\n)/],
  ['route', /(<!-- ================= 01[\s\S]*?<\/section>)/],
  ['services', /(<!-- ================= 02[\s\S]*?<\/section>)/],
  ['proof', /(<!-- ================= 03[\s\S]*?<\/section>)/],
  ['person', /(<!-- ================= 04[\s\S]*?<\/section>)/],
  ['pricing', /(<!-- ================= 05[\s\S]*?<\/section>)/],
  ['knowledge', /(<!-- ================= 06[\s\S]*?<\/section>)/],
  ['cities', /(<!-- ================= 07[\s\S]*?<\/section>)/],
  ['detail', /(<!-- ================= 08[\s\S]*?<\/section>)/],
  ['faq', /(<!-- ================= 09[\s\S]*?<\/section>)/],
  ['contact', /(<!-- ================= 10[\s\S]*?<\/section>)/],
  ['footer', /(<!-- ================= FOOTER[\s\S]*?<\/footer>)/],
]

for (const [name, re] of sections) {
  const m = withoutScript.match(re)
  if (!m) {
    console.error('MISSING', name)
    continue
  }
  let chunk = m[1]
  // Fix image paths
  chunk = chunk
    .replace(/src="images\/muenchen-hero\.webp"/g, 'src="/images/blog/muenchen-hero.webp"')
    .replace(
      /src="images\/homepage-redesign-gsc-beispiel\.webp"/g,
      'src="/images/blog/homepage-redesign-gsc-beispiel.webp"',
    )
  fs.writeFileSync(path.join(outDir, `${name}.html`), chunk)
  console.log(name, chunk.length)
}
