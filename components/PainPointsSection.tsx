import HomeSectionLabel from '@/components/HomeSectionLabel'

export default function PainPointsSection() {
  return (
    <section
      className="relative border-y border-zinc-200/60 bg-zinc-50/80 px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="pain-points-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(at 0% 0%, rgb(99 102 241 / 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgb(59 130 246 / 0.1) 0px, transparent 45%)`,
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-12 flex flex-col items-center gap-3 text-center md:mb-14">
          <HomeSectionLabel>Reality Check</HomeSectionLabel>
          <h2
            id="pain-points-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            Kommt dir das bekannt vor?
          </h2>
        </div>
        <ul className="space-y-4 text-zinc-700 md:space-y-5">
          <li className="group relative rounded-3xl border border-l-4 border-l-indigo-500 border-zinc-200/80 bg-white/90 p-6 pl-5 shadow-lg shadow-zinc-200/40 ring-1 ring-black/[0.03] sm:p-7 sm:pl-6">
            <strong className="text-zinc-900">Deine Website existiert — aber Google ignoriert sie.</strong>{' '}
            Potenzielle Kunden suchen genau deine Leistung, finden aber die Konkurrenz.
          </li>
          <li className="group relative rounded-3xl border border-l-4 border-l-violet-500 border-zinc-200/80 bg-white/90 p-6 pl-5 shadow-lg shadow-zinc-200/40 ring-1 ring-black/[0.03] sm:p-7 sm:pl-6">
            <strong className="text-zinc-900">Ohne Google Ads läuft nichts.</strong> Jeden Monat fließen Hunderte Euro in
            Anzeigen. Sobald du stoppst, stoppt der Traffic.
          </li>
          <li className="group relative rounded-3xl border border-l-4 border-l-blue-500 border-zinc-200/80 bg-white/90 p-6 pl-5 shadow-lg shadow-zinc-200/40 ring-1 ring-black/[0.03] sm:p-7 sm:pl-6">
            <strong className="text-zinc-900">Deine letzte Agentur hat nur geredet.</strong> Schöne Präsentationen, vage
            Reports — aber keine Rankings, die sich bewegen.
          </li>
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          Wenn einer dieser Punkte auf dich zutrifft, wird es Zeit für eine SEO-Beratung in München, die tatsächlich
          funktioniert.
        </p>
      </div>
    </section>
  )
}
