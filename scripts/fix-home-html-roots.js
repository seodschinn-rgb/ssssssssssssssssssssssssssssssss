/**
 * Ensure each home-v2 HTML fragment has a single element root (no leading comments as siblings).
 * Wraps content so dangerouslySetInnerHTML hydrates reliably.
 */
const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '../lib/home-v2')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))

for (const file of files) {
  const full = path.join(dir, file)
  const src = fs.readFileSync(full, 'utf8')
  const match = src.match(/^([\s\S]*?export const \w+\s*=\s*)([\s\S]*)$/)
  if (!match) continue
  const html = new Function('return ' + match[2].replace(/;?\s*$/, ''))()
  // Already wrapped?
  if (html.trimStart().startsWith('<div class="hv2-root"')) {
    console.log('skip', file)
    continue
  }
  const wrapped = `<div class="hv2-root">${html}</div>`
  const out = match[1] + JSON.stringify(wrapped) + '\n'
  fs.writeFileSync(full, out, 'utf8')
  console.log('wrapped', file, html.length, '->', wrapped.length)
}
