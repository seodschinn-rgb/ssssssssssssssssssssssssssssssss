import Link from 'next/link'

const entryPoints = [
  { question: 'Wo soll ich mit SEO anfangen?', label: 'SEO-Audit: Prioritäten klären', href: '/leistungen/seo-audit' },
  { question: 'Wie finden mich lokale Kunden?', label: 'Local SEO: Einzugsgebiet abdecken', href: '/leistungen/local-seo' },
  { question: 'Warum werden Seiten nicht gefunden?', label: 'Technisches SEO: Ursachen prüfen', href: '/leistungen/technisches-seo' },
  { question: 'Welche Inhalte braucht meine Website?', label: 'Keyword-Recherche: Themen planen', href: '/leistungen/keyword-recherche' },
]

export default function LeistungenHero() {
  return (
    <section className="border-b border-zinc-200 bg-slate-50 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Brotkrümelnavigation" className="mb-8 flex gap-3 text-sm text-zinc-600">
          <Link href="/" className="hover:text-indigo-700 hover:underline">Startseite</Link>
          <span aria-hidden="true">/</span><span aria-current="page">Leistungen</span>
        </nav>
        <p className="mb-4 text-sm font-semibold tracking-wide text-indigo-700">SEO für Unternehmen in München und Bayern</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">Die passende SEO-Leistung für dein Vorhaben.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
          Erst verstehen, was deine Website braucht. Dann gezielt daran arbeiten:
          mit einem Audit, lokaler Optimierung, technischer Unterstützung oder klar geplanten Inhalten.
          Hier findest du für jede Leistung Umfang, Ablauf und ein gekennzeichnetes Arbeitsbeispiel.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#leistungen" className="rounded-xl bg-indigo-700 px-6 py-3 font-semibold text-white hover:bg-indigo-800">Alle acht Leistungen ansehen <span aria-hidden="true">↓</span></a>
          <a href="#kontakt" className="rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-800 hover:border-indigo-700">Vorhaben besprechen</a>
        </div>
        <p className="mt-5 text-sm text-zinc-600">Geschäftssitz Engelskirchen · Betreuung für München und Bayern · Zusammenarbeit remote</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Einstieg nach deinem Anliegen">
          {entryPoints.map(p => <Link key={p.href} href={p.href} className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-400 focus-visible:outline-indigo-600">
            <span className="block font-semibold leading-snug text-zinc-900">{p.question}</span>
            <span className="mt-3 block text-sm leading-relaxed text-indigo-700">{p.label} <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </div>
    </section>
  )
}
