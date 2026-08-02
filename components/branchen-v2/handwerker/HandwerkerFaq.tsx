import { HANDWERKER_V2_FAQS } from '@/lib/branchen/handwerker-v2'

export default function HandwerkerFaq() {
  const left = HANDWERKER_V2_FAQS.slice(0, 3)
  const right = HANDWERKER_V2_FAQS.slice(3)

  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="sec-head rv">
          <p className="eyebrow">
            <span className="num">07</span>
            <span className="rail" />
            FAQ
          </p>
          <h2 id="faq-heading">Häufige Fragen zu SEO für Handwerker</h2>
        </div>
        <div className="faq-cols rv">
          <div className="faq-col">
            {left.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="fx" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="faq-col">
            {right.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="fx" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
