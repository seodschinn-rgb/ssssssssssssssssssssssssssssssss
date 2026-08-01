import type { ReactNode } from 'react'
import Link from 'next/link'
import { HOME_PAGE_FAQ_ITEMS } from '@/lib/home-page-faqs'

const FAQ_ANSWER_NODES: Record<string, ReactNode> = {
  'Bietet ihr auch Einmal-Leistungen an?': (
    <>
      Ja. Neben den monatlichen Paketen bieten wir Einmal-Leistungen wie ein{' '}
      <Link href="/leistungen/seo-audit">SEO-Audit</Link> oder eine{' '}
      <Link href="/leistungen/keyword-recherche">Keyword-Recherche</Link> an. Sprich uns im
      Erstgespräch darauf an.
    </>
  ),
  'Welche Erfahrungen haben Kunden mit eurer SEO-Agentur in München gemacht?': (
    <>
      Am besten siehst du das an konkreten Projekten: Im{' '}
      <a href="#referenzen">Referenzen-Bereich</a> findest du Stimmen aus einer Schreinerei, einer
      Zahnarztpraxis und einem IT-Unternehmen in München, weitere Bewertungen kannst du direkt bei
      Google nachlesen. Im kostenlosen Erstgespräch zeigen wir dir gerne Beispiele aus deiner
      Branche.
    </>
  ),
}

export default function FaqTwoCol() {
  const left = HOME_PAGE_FAQ_ITEMS.slice(0, 4)
  const right = HOME_PAGE_FAQ_ITEMS.slice(4)

  return (
    <section className="faq" id="faq-start" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">09</span>
            <span className="rail" />
            FAQ
          </p>
          <h2 id="faq-heading">Häufig gestellte Fragen</h2>
        </div>
        <div className="faq-cols rv">
          <div className="faq-col">
            {left.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div className="faq-col">
            {right.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="faq-item">
      {/* Kein <h3> in <summary>: manche Browser verschieben Headings im DOM → Hydration-Mismatch */}
      <summary>
        <span className="faq-q-text">{question}</span>
        <span className="fx" aria-hidden="true" />
      </summary>
      <div className="faq-answer">
        <p>{FAQ_ANSWER_NODES[question] ?? answer}</p>
      </div>
    </details>
  )
}
