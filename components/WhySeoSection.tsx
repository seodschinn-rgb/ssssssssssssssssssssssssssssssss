import type { ReactNode } from 'react'
import HomeSectionLabel from '@/components/HomeSectionLabel'
import { GradientBlobs, GridPattern } from './ModernGraphics'

type Reason = { icon: ReactNode; title: string; text: ReactNode }

const reasons: Reason[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Die große Mehrheit aller Online-Erlebnisse startet bei Google',
    text: (
      <>
        Wer nicht auf der ersten Seite steht, wird von potenziellen Kunden schlicht nicht gefunden. Laut{' '}
        <a
          href="https://www.brightedge.com/resources/research-reports"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-accent font-medium hover:underline"
        >
          BrightEdge-Studien
        </a>{' '}
        generiert organische Suche über 50&nbsp;% des gesamten Website-Traffics — mehr als jeder andere Kanal.
      </>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Organischer Traffic kostet keinen Klick',
    text: 'Anders als bei Google Ads zahlst du pro Besucher nichts. Ein Klick auf „SEO Agentur München“ kostet in Ads über 15 EUR. Mit SEO bekommst du diesen Traffic dauerhaft — ohne laufende Anzeigenkosten.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Besucher mit konkreter Kaufabsicht',
    text: 'Wer bei Google „Steuerberater München“ oder „Dachdecker Rosenheim“ sucht, hat ein konkretes Anliegen. SEO bringt genau diese Nutzer auf deine Seite — keine Streuverluste. Und mit GEO (Generative Engine Optimization) sorgen wir dafür, dass du auch in KI-gestützten Suchergebnissen wie Google AI Overviews sichtbar bleibst.',
  },
]

export default function WhySeoSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-100/80 bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/40 px-4 py-20 sm:px-6 md:py-28">
      <GradientBlobs />
      <GridPattern />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 text-center md:mb-16">
          <HomeSectionLabel>Warum SEO?</HomeSectionLabel>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
            Warum SEO für dein Unternehmen entscheidend ist
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Deine Wettbewerber investieren in SEO. Die Frage ist nicht ob, sondern wann du nachziehst.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-zinc-200/70 bg-white/90 p-8 shadow-lg shadow-zinc-200/40 ring-1 ring-black/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/12 to-accent/5 text-accent shadow-inner transition-all duration-300 group-hover:from-accent group-hover:to-accent-hover group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-900">{item.title}</h3>
              <div className="text-sm leading-relaxed text-zinc-600">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
