import '@/app/branchen-anwaelte-v2.css'
import BranchenInteractions from '@/components/branchen-v2/BranchenInteractions'
import AnwaelteHero from './AnwaelteHero'
import AnwaeltePain from './AnwaeltePain'
import AnwaelteServices from './AnwaelteServices'
import AnwaelteBand from './AnwaelteBand'
import AnwaelteBerufsrecht from './AnwaelteBerufsrecht'
import AnwaelteInvest from './AnwaelteInvest'
import AnwaelteFaq from './AnwaelteFaq'
import AnwaelteContactCta from './AnwaelteContactCta'

export default function AnwaeltePage() {
  return (
    <div className="branche-anwaelte-v2">
      <a className="skip" href="#main">
        Zum Inhalt springen
      </a>
      <main id="main">
        <AnwaelteHero />
        <AnwaeltePain />
        <AnwaelteServices />
        <AnwaelteBand />
        <AnwaelteBerufsrecht />
        <AnwaelteInvest />
        <AnwaelteFaq />
        <AnwaelteContactCta />
      </main>
      <BranchenInteractions rootSelector=".branche-anwaelte-v2" />
    </div>
  )
}
