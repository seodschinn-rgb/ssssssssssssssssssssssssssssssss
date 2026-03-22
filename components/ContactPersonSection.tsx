import HomeSectionLabel from '@/components/HomeSectionLabel'

export default function ContactPersonSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="contact-person-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/15 to-zinc-50/60" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="flex flex-col items-center gap-3">
          <HomeSectionLabel>Persönlich</HomeSectionLabel>
          <h2
            id="contact-person-heading"
            className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl"
          >
            Dein Ansprechpartner
          </h2>
        </div>
        <p className="mt-6 text-left leading-relaxed text-zinc-600 sm:text-center">
          Bei uns arbeitest du nicht mit wechselnden Teams — sondern mit einem festen Ansprechpartner, der dein
          Projekt von Tag 1 kennt. Persönlich, direkt erreichbar, mit klarer Verantwortung für deine Ergebnisse.
        </p>
        <div className="mt-10 rounded-3xl border border-zinc-200/80 bg-white/95 p-8 text-left shadow-xl shadow-zinc-200/50 ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-10">
          <p className="m-0 text-lg font-bold text-zinc-900">Julian Schäfer</p>
          <p className="mb-4 mt-1 text-sm font-semibold text-indigo-600">Gründer &amp; SEO-Stratege</p>
          <p className="m-0 leading-relaxed text-zinc-600">
            Spezialisiert auf datengetriebene Suchmaschinenoptimierung für KMU und lokale Dienstleister in München
            und Bayern. Über 100 erfolgreich umgesetzte SEO-Projekte.
          </p>
        </div>
      </div>
    </section>
  )
}
