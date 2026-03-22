import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'Erstgespräch & Analyse',
    desc: 'Wir starten mit einem kostenlosen Erstgespräch, um deine Ziele zu verstehen. Anschließend analysieren wir deine Website, deine Konkurrenz und den Markt. Kein Smalltalk — sondern konkrete Erkenntnisse.',
  },
  {
    num: '02',
    title: 'Strategie & Keyword-Recherche',
    desc: 'Auf Basis der Analyse entwickeln wir eine maßgeschneiderte SEO-Strategie: Welche Keywords haben das größte Potenzial? Wo sind Quick Wins? Welche Seiten brauchen Optimierung? Klare Meilensteine, messbare Ziele.',
  },
  {
    num: '03',
    title: 'Umsetzung: Technik, Content & OnPage',
    desc: 'Wir optimieren Seitenstruktur, Ladezeiten, Meta-Tags und Inhalte. Jede Maßnahme wird priorisiert nach Impact — die wichtigsten Hebel zuerst.',
  },
  {
    num: '04',
    title: 'Monitoring, Reporting & Skalierung',
    desc: 'Monatliche Reports zeigen dir genau, was sich bewegt: Rankings, Traffic, Conversions. Wir passen die Strategie laufend an und skalieren, was funktioniert.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent/90">So arbeiten wir</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">So arbeiten wir: Unser SEO-Prozess</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Transparent, strukturiert und mit Fokus auf messbare Ergebnisse — von der ersten Analyse bis zum
            nachhaltigen Google-Ranking in München.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="rounded-3xl border border-zinc-700/60 bg-zinc-900/60 p-8 ring-1 ring-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-accent/35 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-accent/5">
                <span className="bg-gradient-to-br from-accent/80 to-accent/30 bg-clip-text text-4xl font-bold text-transparent">
                  {step.num}
                </span>
                <h3 className="mb-3 mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-0.5 w-8 bg-zinc-600 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:scale-[1.02] hover:bg-accent-hover"
          >
            Kostenloses Erstgespräch vereinbaren
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
