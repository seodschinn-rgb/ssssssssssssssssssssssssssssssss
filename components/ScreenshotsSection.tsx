import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'
import FallstudieSeoDashboard from '@/components/FallstudieSeoDashboard'

export default function ScreenshotsSection() {
  return (
    <section
      id="referenzen"
      className="border-y border-zinc-200/80 bg-zinc-50 py-20 md:py-24"
      aria-labelledby="screenshots-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 flex justify-center">
            <HomeSectionLabel>Erfolge</HomeSectionLabel>
          </div>
          <h2
            id="screenshots-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem] md:leading-snug"
          >
            Messbare Ergebnisse für unsere Kunden
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            Wir könnten viel erzählen. Stattdessen zeigen wir dir, was bei unseren Kunden passiert ist:
          </p>
        </div>

        {/* Fallstudie: Text-Karte + Dashboard getrennt nebeneinander (nicht ein gemeinsamer Kasten) */}
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
          <article className="min-w-0 flex-1 rounded-2xl border border-indigo-200/60 bg-white p-6 shadow-md shadow-indigo-950/[0.04] ring-1 ring-indigo-100/50 sm:p-8 lg:rounded-3xl lg:p-10">
            <h3 className="text-lg font-bold leading-snug text-zinc-900 sm:text-xl">
              Fallstudie: Schreinerei in München — von Seite 3 auf Platz 2 in 5 Monaten
            </h3>
            <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/50 py-4 pl-4 pr-3 sm:pl-5 lg:rounded-2xl">
              <p className="m-0 border-l-4 border-indigo-600 pl-4 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                <strong className="text-zinc-800">Ausgangslage:</strong> Eine Schreinerei in München-Sendling (8
                Mitarbeiter) war bei Google praktisch unsichtbar. Haupt-Keywords wie „Schreiner München“ rankten auf
                Seite 3–4. Monatlich kamen weniger als 150 Besucher über die organische Suche. Neue Aufträge kamen fast
                ausschließlich über Mundpropaganda.
              </p>
            </div>
            <p className="mb-2 mt-8 text-sm font-semibold text-zinc-900">Maßnahmen (Paket: Growth):</p>
            <ul className="mb-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-indigo-400 sm:text-[15px]">
              <li>
                <strong className="text-zinc-800">Monat 1:</strong> SEO-Audit, Google Business Profile Optimierung,
                technische Fehler behoben
              </li>
              <li>
                <strong className="text-zinc-800">Monat 2–3:</strong> Lokale Keyword-Strategie umgesetzt, 6 optimierte
                Leistungsseiten erstellt
              </li>
              <li>
                <strong className="text-zinc-800">Monat 4–5:</strong> Content-Aufbau, Bewertungsstrategie, Core Web
                Vitals optimiert
              </li>
            </ul>
            <p className="mb-2 text-sm font-semibold text-zinc-900">Ergebnis nach 5 Monaten:</p>
            <ul className="m-0 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 marker:text-emerald-500 sm:text-[15px]">
              <li>
                Von Seite 3 auf <strong className="text-zinc-800">Platz 2</strong> für „Schreiner München“
              </li>
              <li>
                Von 150 auf <strong className="text-zinc-800">570 organische Besucher/Monat</strong> (+280 %)
              </li>
              <li>
                <strong className="text-zinc-800">+160 %</strong> mehr Kontaktanfragen über die Website
              </li>
              <li>
                Google Maps: <strong className="text-zinc-800">Top 3</strong> im Local Pack für „Schreinerei München“
              </li>
            </ul>
          </article>

          {/* Volle nutzbare Breite bis lg (auch Mobil); ab lg schmale Sidebar neben Text */}
          <div className="mx-auto w-full min-w-0 max-w-full md:max-w-4xl lg:mx-0 lg:max-w-[min(100%,32rem)] lg:flex-none lg:sticky lg:top-28 lg:self-start">
            <FallstudieSeoDashboard large />
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12">
          <p className="text-sm font-semibold text-zinc-900 sm:text-base">
            Du willst ähnliche Ergebnisse für dein Unternehmen?
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex max-w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-zinc-800 sm:px-8"
          >
            <span className="text-center leading-snug">
              → Jetzt kostenloses Erstgespräch sichern — wir zeigen dir dein SEO-Potenzial
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
