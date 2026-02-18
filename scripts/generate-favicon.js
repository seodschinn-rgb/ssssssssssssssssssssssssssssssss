/**
 * Erzeugt app/icon.png (48x48) aus app/icon.svg.
 * Google zeigt in Suchergebnissen bevorzugt PNG-Favicons; SVG wird oft nicht angezeigt.
 *
 * Ausführen: npm run generate-favicon (im Ordner website)
 */
const path = require('path')
const fs = require('fs')

const appDir = path.join(__dirname, '..', 'app')
const publicDir = path.join(__dirname, '..', 'public')
const svgPath = path.join(appDir, 'icon.svg')

async function run() {
  try {
    const sharp = require('sharp')
    const svgBuffer = fs.readFileSync(svgPath)
    const outPath = path.join(publicDir, 'icon.png')
    await sharp(svgBuffer).resize(48, 48).png().toFile(outPath)
    console.log('Erstellt: public/icon.png (48x48) – unter /icon.png für Google-Suchergebnisse erreichbar.')
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log('Sharp nicht installiert. Bitte ausführen: npm install --save-dev sharp')
      console.log('Alternativ: Exportiere app/icon.svg manuell als PNG (48x48) und speichere als app/icon.png')
    } else {
      throw e
    }
  }
}

run()
