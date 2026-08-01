const fs = require('fs')
const path = require('path')

const htmlPath =
  'c:/Users/julia/OneDrive/Dokumente/agentic-seo-system-v1.0.0/sites/seomuenchen-com/output/published/homepage-redesign/html-neu/index.html'
const outPath = path.join(__dirname, '../app/home-v2.css')

const html = fs.readFileSync(htmlPath, 'utf8')
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/)
if (!styleMatch) throw new Error('No style block found')
let css = styleMatch[1]

function scopeSelector(sel) {
  sel = sel.trim()
  if (!sel) return sel
  if (/^(from|to|\d+%)$/.test(sel)) return sel
  if (sel === ':root') return '.home-v2'
  if (sel === 'html' || sel === 'body') return '.home-v2'
  if (sel.startsWith('.home-v2')) return sel
  // .js .rv → .home-v2.js .rv (js class lives on the homepage wrapper)
  if (sel.startsWith('.js ') || sel === '.js') {
    return sel.replace(/^\.js\b/, '.home-v2.js')
  }
  if (sel === '.dark' || sel.startsWith('.dark ') || sel.startsWith('.dark.')) {
    return `.home-v2 ${sel}`
  }
  if (sel.startsWith(':') || sel.startsWith('::')) return `.home-v2 ${sel}`
  return `.home-v2 ${sel}`
}

function scopeSelectors(selList) {
  return selList
    .split(',')
    .map((s) => scopeSelector(s))
    .filter(Boolean)
    .join(', ')
}

function parseAndScope(input) {
  let out = ''
  let i = 0
  const len = input.length

  while (i < len) {
    // whitespace
    if (/\s/.test(input[i])) {
      out += input[i]
      i++
      continue
    }
    // comments — keep as-is, do not prefix
    if (input.startsWith('/*', i)) {
      const end = input.indexOf('*/', i + 2)
      out += input.slice(i, end === -1 ? len : end + 2)
      i = end === -1 ? len : end + 2
      continue
    }
    // at-rules
    if (input[i] === '@') {
      const brace = input.indexOf('{', i)
      if (brace === -1) {
        out += input.slice(i)
        break
      }
      const prelude = input.slice(i, brace).trim()
      let depth = 1
      let j = brace + 1
      while (j < len && depth > 0) {
        if (input[j] === '{') depth++
        else if (input[j] === '}') depth--
        j++
      }
      const inner = input.slice(brace + 1, j - 1)
      if (/^@keyframes|^@-webkit-keyframes/.test(prelude)) {
        out += `${prelude}{${inner}}`
      } else {
        out += `${prelude}{${parseAndScope(inner)}}`
      }
      i = j
      continue
    }
    // rule
    const brace = input.indexOf('{', i)
    if (brace === -1) {
      out += input.slice(i)
      break
    }
    const selPart = input.slice(i, brace).trim()
    // skip stray tokens
    if (!selPart || selPart.startsWith('/*')) {
      i = brace + 1
      continue
    }
    let depth = 1
    let j = brace + 1
    while (j < len && depth > 0) {
      if (input[j] === '{') depth++
      else if (input[j] === '}') depth--
      j++
    }
    const decls = input.slice(brace + 1, j - 1)
    out += `${scopeSelectors(selPart)}{${decls}}`
    i = j
  }
  return out
}

const scoped = parseAndScope(css)

const header = `/* Homepage v2 — scoped under .home-v2 (from html-neu redesign) */\n`
const extras = `
.home-v2{
  background:var(--bg);
  color:var(--ink);
  font-family:var(--sans);
  font-size:var(--fs-body);
  line-height:1.7;
  overflow-x:hidden;
  -webkit-text-size-adjust:100%;
}
`

fs.writeFileSync(outPath, header + extras + scoped, 'utf8')
console.log('Wrote', outPath, 'bytes', fs.statSync(outPath).size)

// sanity checks
const out = fs.readFileSync(outPath, 'utf8')
const checks = [
  ['.home-v2.js .rv{', 'reveal hide'],
  ['.home-v2.js .rv.in{', 'reveal show'],
  ['.home-v2 .nav{', 'nav'],
  ['.home-v2 .hero{', 'hero'],
  ['@media (min-width:900px){.home-v2 .nav-links', 'media nav'],
]
for (const [needle, label] of checks) {
  console.log(label, out.includes(needle) ? 'OK' : 'MISSING: ' + needle)
}
