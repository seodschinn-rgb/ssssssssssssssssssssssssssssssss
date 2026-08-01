const fs = require('fs')
const src = fs.readFileSync(require('path').join(__dirname, '../lib/home-page-faqs.ts'), 'utf8')

const faqs = []
const re = /q: '((?:\\'|[^'])*)',\s*\n\s*a: '((?:\\'|[^'])*)'/g
let m
while ((m = re.exec(src))) {
  faqs.push({ q: m[1], a: m[2].replace(/\\'/g, "'") })
}

const htmlStart = src.indexOf('HOME_PAGE_FAQ_ANSWER_HTML')
const htmlBlock = src.slice(htmlStart)

for (const faq of faqs) {
  const idx = htmlBlock.indexOf(`'${faq.q}':`)
  if (idx === -1) {
    console.log('plain OK', faq.q.slice(0, 50))
    continue
  }
  const after = htmlBlock.slice(idx + faq.q.length + 3)
  const hm = after.match(/^\s*\n?\s*'((?:\\'|[^'])*)'/)
  if (!hm) {
    console.log('PARSE FAIL', faq.q)
    continue
  }
  const text = hm[1].replace(/\\'/g, "'").replace(/<[^>]+>/g, '')
  console.log(text === faq.a ? 'SYNC OK' : 'SYNC FAIL', faq.q.slice(0, 50))
  if (text !== faq.a) {
    console.log('  a:', faq.a)
    console.log('  t:', text)
  }
}
console.log('count', faqs.length)
