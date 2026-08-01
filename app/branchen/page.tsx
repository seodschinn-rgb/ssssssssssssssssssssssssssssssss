import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BranchenHubSchema from '@/components/branchen-v2/BranchenHubSchema'
import BranchenHero from '@/components/branchen-v2/BranchenHero'
import BranchenGrid from '@/components/branchen-v2/BranchenGrid'
import BranchenWhy from '@/components/branchen-v2/BranchenWhy'
import BranchenMiniRoute from '@/components/branchen-v2/BranchenMiniRoute'
import BranchenInvest from '@/components/branchen-v2/BranchenInvest'
import BranchenFaq from '@/components/branchen-v2/BranchenFaq'
import BranchenContactCta from '@/components/branchen-v2/BranchenContactCta'
import BranchenInteractions from '@/components/branchen-v2/BranchenInteractions'
import { absoluteCanonical } from '@/lib/canonical'
import '../branchen-v2.css'

const TITLE = 'Branchen-SEO München: SEO für Ärzte, Handwerk & Kanzleien'
const DESCRIPTION =
  'Branchenspezifisches SEO in München: eigene Strategien für Ärzte, Handwerker, Kanzleien und 7 weitere Branchen. Transparente Preise, kostenlose Beratung.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: absoluteCanonical('/branchen') },
  openGraph: {
    type: 'website',
    url: absoluteCanonical('/branchen'),
    siteName: 'SEO München',
    locale: 'de_DE',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function BranchenHubPage() {
  return (
    <>
      <BranchenHubSchema />
      <Header />
      <div className="branchen-v2">
        <a className="skip" href="#main">
          Zum Inhalt springen
        </a>
        <main id="main">
          <BranchenHero />
          <BranchenGrid />
          <BranchenWhy />
          <BranchenMiniRoute />
          <BranchenInvest />
          <BranchenFaq />
          <BranchenContactCta />
        </main>
        <BranchenInteractions />
      </div>
      <Footer />
    </>
  )
}
