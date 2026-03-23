/**
 * Löscht .next — behebt fehlende middleware-manifest.json / kaputte Builds.
 *
 * Tritt EPERM auf: OneDrive oder ein laufender "next dev" sperrt Dateien.
 * Dann: alle Node-/Terminal-Fenster schließen, ggf. .next im Explorer manuell löschen.
 */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const dir = path.join(__dirname, '..', '.next')

function rmNode() {
  fs.rmSync(dir, { recursive: true, force: true })
}

if (!fs.existsSync(dir)) {
  console.log('[clean] .next war nicht vorhanden — ok.')
  process.exit(0)
}

try {
  rmNode()
  console.log('[clean] Ordner .next entfernt.')
  process.exit(0)
} catch (e) {
  if (e.code === 'ENOENT') {
    console.log('[clean] .next war nicht vorhanden — ok.')
    process.exit(0)
  }

  if (e.code === 'EPERM' || e.code === 'EBUSY' || /EPERM|EBUSY|EACCES/i.test(String(e.message))) {
    console.error('[clean] Konnte .next nicht löschen (Datei gesperrt).')
    console.error('')
    console.error('So behebst du das:')
    console.error('  1. Alle Fenster schließen, in denen "npm run dev" / Next.js läuft.')
    console.error('  2. Im Task-Manager alle "Node.js"-Prozesse beenden (falls nötig).')
    console.error('  3. Ordner .next im Explorer manuell löschen (Rechtsklick → Löschen).')
    console.error('  4. OneDrive: Projekt liegt unter OneDrive — am besten Ordner "website"')
    console.error('     in Windows als "Immer auf diesem Gerät behalten" markieren,')
    console.error('     oder das Repo nach z.B. C:\\Dev\\website kopieren (weniger Sperren).')
    console.error('')
    // Windows: rd /s /q manchmal erfolgreicher wenn Node beendet
    if (process.platform === 'win32') {
      try {
        execSync(`cmd /c rmdir /s /q "${dir}"`, { stdio: 'inherit' })
        console.log('[clean] Ordner .next mit rmdir entfernt.')
        process.exit(0)
      } catch {
        /* ignore */
      }
    }
    process.exit(1)
  }

  console.error('[clean] Fehler:', e.message)
  process.exit(1)
}
