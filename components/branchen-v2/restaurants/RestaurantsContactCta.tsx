export default function RestaurantsContactCta() {
  return (
    <section className="contact dark" id="kontakt-cta" aria-labelledby="kontakt-heading">
      <div className="mesh-dark" aria-hidden="true" />
      <div className="wrap contact-inner">
        <div className="rv">
          <p className="eyebrow">
            <span className="num">07</span>
            <span className="rail" />
            Kontakt
          </p>
          <h2 id="kontakt-heading">Bereit für mehr Gäste über Google?</h2>
          <p className="lead">
            Wir analysieren dein Maps-Profil, deine Bewertungen und deine Website und zeigen dir einen konkreten
            Fahrplan für mehr Gäste und Reservierungen. Kostenlos und ohne Bindung.
          </p>
          <div className="contact-ctas">
            <a className="btn btn-primary" href="tel:+4915233524138">
              Jetzt anrufen: +49 152 33524138
            </a>
            <a className="btn btn-ghost" href="mailto:info@seomuenchen.com">
              E-Mail schreiben
            </a>
          </div>
          <p className="note">Wir melden uns innerhalb von 24 Stunden.</p>
        </div>
      </div>
    </section>
  )
}
