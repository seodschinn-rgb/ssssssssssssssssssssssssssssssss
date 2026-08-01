import puppeteer from 'puppeteer'

const url = process.argv[2] || 'http://localhost:4010/'

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-extensions'],
})
const page = await browser.newPage()
const errors = []
const logs = []

page.on('pageerror', (err) => errors.push(String(err)))
page.on('console', (msg) => {
  const type = msg.type()
  const text = msg.text()
  if (type === 'error' || text.includes('Hydration') || text.includes('hydrat')) {
    logs.push(`[${type}] ${text}`)
  }
})

await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
await new Promise((r) => setTimeout(r, 1500))

console.log('URL', url)
console.log('pageerrors', errors.length)
errors.forEach((e) => console.log(' ERR', e.slice(0, 500)))
console.log('console', logs.length)
logs.forEach((l) => console.log(' LOG', l.slice(0, 800)))

await browser.close()
