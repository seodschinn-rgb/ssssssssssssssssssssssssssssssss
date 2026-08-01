const fs = require('fs')
const path = 'lib/home-v2/person.ts'
const s = fs.readFileSync(path, 'utf8')
const html = new Function(
  'return ' + s.replace(/^[\s\S]*?export const \w+\s*=\s*/, '').replace(/;?\s*$/, ''),
)()

const next = html.replace(
  /<div class="person-visual rv">[\s\S]*?<\/div>\n    <div class="person-side">/,
  `<div class="person-visual rv">
      <img src="/images/julian-schaefer.jpg" alt="Julian Schäfer, Gründer und SEO-Stratege bei SEO München" width="1200" height="1500" loading="lazy" decoding="async" />
    </div>
    <div class="person-side">`,
)

if (next === html) {
  console.error('REPLACE FAIL')
  process.exit(1)
}

fs.writeFileSync(
  path,
  '/** Auto-extracted from homepage-redesign html-neu — copy is source of truth. */\n' +
    'export const personHtml = ' +
    JSON.stringify(next) +
    '\n',
)
console.log('ok')
