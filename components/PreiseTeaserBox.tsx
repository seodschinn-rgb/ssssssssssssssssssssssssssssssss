import Link from 'next/link'

/**
 * Indigo-Hinweisbox mit Link auf /preise.
 * Preiszahlen 990 / 2.990 EUR bei Paketänderungen synchron mit /preise pflegen
 * (Homepage-Teaser, seo-audit, local-seo-Anker, technisches-seo, geo-agentur).
 */
type Props = {
  lead: string
  text: string
  anchor: string
}

export default function PreiseTeaserBox({ lead, text, anchor }: Props) {
  return (
    <div
      style={{
        background: '#EEF2FF',
        borderLeft: '5px solid #4F46E5',
        borderRadius: 8,
        padding: '18px 22px',
        margin: '32px 0 0',
      }}
    >
      <p style={{ margin: 0, lineHeight: 1.7 }}>
        <strong style={{ color: '#4F46E5' }}>{lead}</strong> {text}{' '}
        <Link href="/preise" style={{ color: '#4F46E5', fontWeight: 600 }}>
          {anchor}
        </Link>
      </p>
    </div>
  )
}
