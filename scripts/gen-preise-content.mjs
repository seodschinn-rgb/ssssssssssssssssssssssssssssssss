import fs from 'fs'

const sourcePath = new URL('./preise-source.html', import.meta.url)

let body = fs.readFileSync(sourcePath, 'utf8')

body = body
  .replace(/https:\/\/seomuenchen\.com\/?/g, '/')
  .replace(/href="(\/[^"#]+)\/"/g, 'href="$1"')
  .trim()

const out = [
  '/**',
  ' * Preisseite — sm-pricing Layout.',
  ' */',
  'export const preisePageContent =',
  "  '<div class=\"sm-pricing\">' +",
  '  `',
  body,
  '` +',
  "  '</div>'",
].join('\n')

fs.writeFileSync('lib/preise-content.ts', out, 'utf8')
console.log('written', out.length, 'chars')
