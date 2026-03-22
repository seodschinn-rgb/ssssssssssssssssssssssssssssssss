import Link from 'next/link'
import { CITIES } from '@/lib/seo-data'

const MUENCHEN = {
  name: 'München',
  slug: '',
  region: 'Kreisfreie Stadt, Oberbayern',
  highlight:
    'Landeshauptstadt Bayerns. Hauptstandort unserer SEO Agentur. Metropolregion mit über 1,5 Mio. Einwohnern.',
  economy: 'Wirtschafts- und Technologiezentrum, zahlreiche DAX-Unternehmen, starker Mittelstand.',
  population: 1500000,
}

export default function StandorteList() {
  return (
    <section className="px-6 py-16" aria-labelledby="standorte-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 id="standorte-heading" className="sr-only">
            Alle Standorte in Bayern
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <article>
            <Link
              href="/"
              className="group block h-full rounded-xl border-2 border-accent/30 bg-accent/5 p-6 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">Hauptstandort</p>
                  <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-accent-hover">
                    München
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{MUENCHEN.highlight}</p>
                  <p className="mt-3 text-xs text-zinc-400">ca. 1,5 Mio. Einwohner</p>
                </div>
                <span className="shrink-0 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
          {CITIES.map((city) => (
            <article key={city.slug}>
              <Link
                href={`/standorte/${city.slug}`}
                className="group block h-full rounded-2xl border border-zinc-200/80 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-50/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{city.region}</p>
                    <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-zinc-700">
                      {city.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{city.highlight}</p>
                    <p className="mt-3 text-xs text-zinc-400">{city.population.toLocaleString('de-DE')} Einwohner</p>
                  </div>
                  <span className="shrink-0 text-zinc-300 transition-colors group-hover:text-zinc-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  )
}
