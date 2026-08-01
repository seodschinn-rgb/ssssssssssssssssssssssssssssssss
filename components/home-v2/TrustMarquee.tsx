function MarqueeLine() {
  return (
    <span>
      Fester Ansprechpartner ab Tag 1 <b>●</b> Preise offen auf der Website <b>●</b> Monatlich
      kündbar <b>●</b> SEO + GEO für die KI-Suche <b>●</b> München & Bayern <b>●</b>
    </span>
  )
}

export default function TrustMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeLine />
        <MarqueeLine />
      </div>
    </div>
  )
}
