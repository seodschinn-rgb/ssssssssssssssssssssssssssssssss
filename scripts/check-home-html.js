const fs = require('fs')
const path = require('path')

function getHtml(file) {
  const s = fs.readFileSync(path.join('lib/home-v2', file), 'utf8')
  return new Function(
    'return ' + s.replace(/^[\s\S]*?export const \w+\s*=\s*/, '').replace(/;?\s*$/, ''),
  )()
}

const files = [
  'hero.ts',
  'route.ts',
  'services.ts',
  'proof.ts',
  'person.ts',
  'pricing.ts',
  'knowledge.ts',
  'cities.ts',
  'detail.ts',
  'marquee.ts',
  'nav.ts',
  'footer.ts',
]

const issues = []
const allIds = []

for (const f of files) {
  const html = getHtml(f)

  const pre = /<p\b[^>]*>([\s\S]*?)<\/p>/gi
  let m
  while ((m = pre.exec(html))) {
    const inner = m[1]
    if (/<(div|section|ul|ol|table|h[1-6]|p|figure|blockquote|nav)\b/i.test(inner)) {
      issues.push(`${f}: <p> contains block -> ${inner.slice(0, 100).replace(/\s+/g, ' ')}`)
    }
  }

  if (/<a\b[^>]*>[\s\S]*?<a\b/i.test(html)) {
    // crude: check properly with stack
    let depth = 0
    const re = /<\/?a\b[^>]*>/gi
    let a
    while ((a = re.exec(html))) {
      if (a[0].startsWith('</')) depth--
      else {
        if (depth > 0) {
          issues.push(`${f}: nested <a> near ${html.slice(Math.max(0, a.index - 40), a.index + 40)}`)
          break
        }
        depth++
      }
    }
  }

  for (const idm of html.matchAll(/\bid="([^"]+)"/g)) {
    allIds.push([f, idm[1]])
  }
}

const seen = new Map()
for (const [f, id] of allIds) {
  if (seen.has(id)) issues.push(`DUP id="${id}" in ${seen.get(id)} and ${f}`)
  else seen.set(id, f)
}

console.log(issues.length ? issues.join('\n') : 'OK: no structural issues')
console.log('ids', allIds.length)
