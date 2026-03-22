import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'

const packages = [
  { name: 'Starter', price: '990 EUR', ideal: 'Lokale Unternehmen & Startups' },
  { name: 'Growth', price: '1.590 EUR', ideal: 'Wachsende KMU' },
  { name: 'Business', price: '2.390 EUR', ideal: 'Etablierte Mittelständler' },
  { name: 'Professional', price: '2.590 EUR', ideal: 'Ambitionierte Unternehmen' },
  { name: 'Enterprise', price: '2.990 EUR', ideal: 'Großunternehmen & komplexe Projekte' },
]

export default function HomePricingSection() {
  return (
    <section
      id="preise"
      className="relative overflow-hidden border-y border-zinc-100/70 bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/30 px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center md:mb-12">
          <HomeSectionLabel>Investition</HomeSectionLabel>
          <h2
            id="pricing-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            Was kostet SEO in München? Transparente Preise
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Keine versteckten Kosten, keine langfristigen Knebelverträge. Unsere Pakete sind klar strukturiert — du
            weißt von Anfang an, was du bekommst.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200/80 bg-white/95 shadow-xl shadow-zinc-200/40 ring-1 ring-black/[0.04] backdrop-blur-sm">
          <table className="w-full min-w-[520px] text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-zinc-200/80 bg-gradient-to-r from-indigo-50/90 to-zinc-50/90">
                <th className="px-4 py-4 font-semibold text-zinc-900 sm:px-6">Paket</th>
                <th className="px-4 py-4 font-semibold text-zinc-900 sm:px-6">Preis/Monat</th>
                <th className="px-4 py-4 font-semibold text-zinc-900 sm:px-6">Ideal für</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-zinc-100/90 last:border-0 transition-colors hover:bg-indigo-50/25"
                >
                  <td className="px-4 py-3.5 font-semibold text-zinc-900 sm:px-6">{row.name}</td>
                  <td className="px-4 py-3.5 font-semibold tabular-nums text-indigo-700 sm:px-6">{row.price}</td>
                  <td className="px-4 py-3.5 text-zinc-600 sm:px-6">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 space-y-4 leading-relaxed text-zinc-600">
          <p>
            <strong className="text-zinc-800">Gut zu wissen:</strong> Im Vergleich zu Google Ads, wo ein Klick für
            „SEO Agentur München&quot; über 15 EUR kostet, amortisiert sich organische Sichtbarkeit bereits nach
            wenigen Monaten — und liefert dann dauerhaft kostenlosen Traffic.
          </p>
          <p>
            Nicht sicher, welches Paket passt? Im kostenlosen Erstgespräch analysieren wir deine Situation und
            empfehlen die richtige Lösung — ohne Verkaufsdruck.
          </p>
          <p className="flex flex-col flex-wrap gap-3 pt-2 sm:flex-row sm:gap-6">
            <Link
              href="/kontakt"
              className="inline-flex font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              → Unverbindlich beraten lassen
            </Link>
            <Link
              href="/blog/seo-kosten"
              className="inline-flex font-semibold text-zinc-700 hover:text-zinc-900 hover:underline"
            >
              → Detaillierter SEO-Kosten-Guide
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
