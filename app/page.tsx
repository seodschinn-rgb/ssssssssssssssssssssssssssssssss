import type { Metadata } from 'next'
import './home-v2.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePageSchema from '@/components/HomePageSchema'
import HomeInteractions from '@/components/home-v2/HomeInteractions'
import HeroMunich from '@/components/home-v2/HeroMunich'
import TrustMarquee from '@/components/home-v2/TrustMarquee'
import VisibilityRoute from '@/components/home-v2/VisibilityRoute'
import ServicesBento from '@/components/home-v2/ServicesBento'
import ProofModule from '@/components/home-v2/ProofModule'
import ReferenceTeaser from '@/components/home-v2/ReferenceTeaser'
import FounderSpotlight from '@/components/home-v2/FounderSpotlight'
import PricingCards from '@/components/home-v2/PricingCards'
import KnowledgeList from '@/components/home-v2/KnowledgeList'
import CityNetwork from '@/components/home-v2/CityNetwork'
import SeoTextBlock from '@/components/home-v2/SeoTextBlock'
import FaqTwoCol from '@/components/home-v2/FaqTwoCol'
import ContactCta from '@/components/home-v2/ContactCta'
import { absoluteCanonical } from '@/lib/canonical'

export const metadata: Metadata = {
  title: {
    absolute: 'SEO Agentur München | Sichtbarkeit bei Google & KI-Suche',
  },
  description:
    'SEO Agentur München: Suchmaschinenoptimierung für KMU und lokale Unternehmen. Fester Ansprechpartner, transparente Preise. Jetzt kostenlos beraten lassen.',
  alternates: { canonical: absoluteCanonical('/') },
  openGraph: {
    title: 'SEO Agentur München | Sichtbarkeit bei Google & KI-Suche',
    description:
      'SEO Agentur München: Suchmaschinenoptimierung für KMU und lokale Unternehmen. Fester Ansprechpartner, transparente Preise. Jetzt kostenlos beraten lassen.',
  },
}

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <Header />
      <div className="home-v2">
        <a className="skip" href="#main">
          Zum Inhalt springen
        </a>
        <main id="main">
          <HeroMunich />
          <TrustMarquee />
          <VisibilityRoute />
          <ServicesBento />
          <ProofModule />
          <ReferenceTeaser />
          <FounderSpotlight />
          <PricingCards />
          <KnowledgeList />
          <CityNetwork />
          <SeoTextBlock />
          <FaqTwoCol />
          <ContactCta />
        </main>
        <HomeInteractions />
      </div>
      <Footer />
    </>
  )
}
