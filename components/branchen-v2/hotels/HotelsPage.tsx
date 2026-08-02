import '@/app/branchen-hotels-v2.css'
import BranchenInteractions from '@/components/branchen-v2/BranchenInteractions'
import HotelsHero from './HotelsHero'
import HotelsPain from './HotelsPain'
import HotelsServices from './HotelsServices'
import HotelsPath from './HotelsPath'
import HotelsSpec from './HotelsSpec'
import HotelsBand from './HotelsBand'
import HotelsProof from './HotelsProof'
import HotelsInvest from './HotelsInvest'
import HotelsFaq from './HotelsFaq'
import HotelsContactCta from './HotelsContactCta'

export default function HotelsPage() {
  return (
    <div className="branche-hotels-v2">
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <main id="main">
        <HotelsHero />
        <HotelsPain />
        <HotelsServices />
        <HotelsPath />
        <HotelsSpec />
        <HotelsBand />
        <HotelsProof />
        <HotelsInvest />
        <HotelsFaq />
        <HotelsContactCta />
      </main>
      <BranchenInteractions rootSelector=".branche-hotels-v2" />
    </div>
  )
}
