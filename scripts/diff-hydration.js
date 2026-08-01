/**
 * Fetch SSR HTML and check for patterns that browsers rewrite.
 */
const http = require('http')

function fetch(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = ''
        res.on('data', (c) => (data += c))
        res.on('end', () => resolve(data))
      })
      .on('error', reject)
  })
}

async function main() {
  for (const path of ['/', '/preise']) {
    const html = await fetch('http://localhost:4010' + path)
    console.log('\n==', path, 'len', html.length)
    // count home-html-slot
    console.log('home-html-slot', (html.match(/home-html-slot/g) || []).length)
    console.log('site-chrome nav', /site-chrome nav/.test(html))
    // check for invalid: p > ul roughly via regex on SSR string (before browser fix)
    const badP = []
    const re = /<p\b[^>]*>([\s\S]*?)<\/p>/gi
    let m
    while ((m = re.exec(html))) {
      if (/<(div|ul|ol|table|h[1-6]|p|section)\b/i.test(m[1])) {
        badP.push(m[1].slice(0, 120).replace(/\s+/g, ' '))
      }
    }
    console.log('bad p blocks', badP.length)
    if (badP[0]) console.log(' example', badP[0])

    // summary with h3
    console.log('summary>h3', (html.match(/<summary[^>]*>\s*<h3/g) || []).length)

    // script tags in body
    console.log('ld+json scripts', (html.match(/application\/ld\+json/g) || []).length)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
