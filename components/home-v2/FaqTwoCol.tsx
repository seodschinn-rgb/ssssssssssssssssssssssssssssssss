import { HOME_PAGE_FAQ_ANSWER_HTML, HOME_PAGE_FAQ_ITEMS } from '@/lib/home-page-faqs'

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
  const html = HOME_PAGE_FAQ_ANSWER_HTML[question] ?? answer
  return (
    <details className="faq-item">
      {/* Kein <h3> in <summary>: manche Browser verschieben Headings im DOM → Hydration-Mismatch */}
      <summary>
        <span className="faq-q-text">{question}</span>
        <span className="fx" aria-hidden="true" />
      </summary>
      <div className="faq-answer">
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </details>
  )
}
