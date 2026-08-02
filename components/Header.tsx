'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LEISTUNGEN } from '@/lib/leistungen-data'
import { BRANCHE_PAGES } from '@/lib/branchen/pages'
import BrandMark from '@/components/BrandMark'

const SIMPLE_LINKS = [
  { href: '/preise', label: 'Preise' },
  { href: '/blog', label: 'Blog' },
  { href: '/standorte', label: 'Standorte' },
  { href: '/kontakt', label: 'Kontakt' },
] as const

const LEISTUNG_NAV = LEISTUNGEN.map((l) => ({
  href: `/leistungen/${l.slug}`,
  label: l.title,
  desc: l.shortDescription,
}))

const BRANCHE_NAV = BRANCHE_PAGES.map((b) => ({
  href: `/branchen/${b.slug}`,
  label: b.name,
  desc: b.hubDescription,
}))

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      className={`nav-chevron${open ? ' is-open' : ''}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4.5 L6 7.5 L9 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BrandLink() {
  return (
    <Link className="brand" href="/" aria-label="SEO München, zur Startseite">
      <BrandMark />
      <span>
        SEO<span className="muc">{'\u00a0'}München</span>
      </span>
    </Link>
  )
}

function isActivePath(pathname: string, href: string) {
  if (!pathname) return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

type PanelKey = 'leistungen' | 'branchen' | null

export default function Header() {
  const pathname = usePathname() || '/'
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopPanel, setDesktopPanel] = useState<PanelKey>(null)
  const [mobilePanel, setMobilePanel] = useState<PanelKey>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    setMenuOpen(false)
    setDesktopPanel(null)
    setMobilePanel(null)
  }, [pathname, mounted])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const openDesktop = (key: PanelKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDesktopPanel(key)
  }
  const scheduleCloseDesktop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setDesktopPanel(null), 180)
  }
  const toggleMobilePanel = (key: Exclude<PanelKey, null>) => {
    setMobilePanel((prev) => (prev === key ? null : key))
  }

  // Bis zum Mount: identisches SSR/Client-Markup ohne Active-/Open-States
  const pathForActive = mounted ? pathname : ''
  const showScrolled = mounted && (scrolled || menuOpen)
  const showDesktopLeistungen = mounted && desktopPanel === 'leistungen'
  const showDesktopBranchen = mounted && desktopPanel === 'branchen'
  const showMenu = mounted && menuOpen
  const showMobileLeistungen = mounted && mobilePanel === 'leistungen'
  const showMobileBranchen = mounted && mobilePanel === 'branchen'

  return (
    <header className={`site-chrome nav${showScrolled ? ' scrolled' : ''}`} id="top">
      <div className="wrap nav-inner">
        <BrandLink />

        <nav className="nav-desktop" aria-label="Hauptnavigation">
          <ul className="nav-links">
            <li
              className="nav-item has-panel"
              onMouseEnter={() => mounted && openDesktop('leistungen')}
              onMouseLeave={() => mounted && scheduleCloseDesktop()}
            >
              <button
                type="button"
                className={`nav-trigger${isActivePath(pathForActive, '/leistungen') ? ' is-active' : ''}${showDesktopLeistungen ? ' is-open' : ''}`}
                aria-expanded={showDesktopLeistungen}
                aria-controls="nav-panel-leistungen"
                onClick={() =>
                  mounted && setDesktopPanel((p) => (p === 'leistungen' ? null : 'leistungen'))
                }
              >
                Leistungen
                <Chevron open={showDesktopLeistungen} />
              </button>
              <div
                id="nav-panel-leistungen"
                className={`nav-panel${showDesktopLeistungen ? ' is-open' : ''}`}
                onMouseEnter={() => mounted && openDesktop('leistungen')}
                onMouseLeave={() => mounted && scheduleCloseDesktop()}
              >
                <div className="nav-panel-inner">
                  <div className="nav-panel-head">
                    <p className="nav-panel-kicker">Leistungen</p>
                    <Link
                      href="/leistungen"
                      className="nav-panel-all"
                      onClick={() => setDesktopPanel(null)}
                    >
                      Alle Leistungen
                    </Link>
                  </div>
                  <ul className="nav-panel-grid">
                    {LEISTUNG_NAV.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`nav-panel-link${isActivePath(pathForActive, item.href) ? ' is-active' : ''}`}
                          onClick={() => setDesktopPanel(null)}
                        >
                          <span className="nav-panel-title">{item.label}</span>
                          <span className="nav-panel-desc">{item.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li
              className="nav-item has-panel"
              onMouseEnter={() => mounted && openDesktop('branchen')}
              onMouseLeave={() => mounted && scheduleCloseDesktop()}
            >
              <button
                type="button"
                className={`nav-trigger${isActivePath(pathForActive, '/branchen') ? ' is-active' : ''}${showDesktopBranchen ? ' is-open' : ''}`}
                aria-expanded={showDesktopBranchen}
                aria-controls="nav-panel-branchen"
                onClick={() =>
                  mounted && setDesktopPanel((p) => (p === 'branchen' ? null : 'branchen'))
                }
              >
                Branchen
                <Chevron open={showDesktopBranchen} />
              </button>
              <div
                id="nav-panel-branchen"
                className={`nav-panel nav-panel--branchen${showDesktopBranchen ? ' is-open' : ''}`}
                onMouseEnter={() => mounted && openDesktop('branchen')}
                onMouseLeave={() => mounted && scheduleCloseDesktop()}
              >
                <div className="nav-panel-inner">
                  <div className="nav-panel-head">
                    <p className="nav-panel-kicker">Branchen</p>
                    <Link
                      href="/branchen"
                      className="nav-panel-all"
                      onClick={() => setDesktopPanel(null)}
                    >
                      Alle Branchen
                    </Link>
                  </div>
                  <ul className="nav-panel-grid nav-panel-grid--compact">
                    {BRANCHE_NAV.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`nav-panel-link${isActivePath(pathForActive, item.href) ? ' is-active' : ''}`}
                          onClick={() => setDesktopPanel(null)}
                        >
                          <span className="nav-panel-title">{item.label}</span>
                          <span className="nav-panel-desc">{item.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {SIMPLE_LINKS.map((link) => (
              <li key={link.href} className="nav-item">
                <Link
                  href={link.href}
                  className={`nav-link${isActivePath(pathForActive, link.href) ? ' is-active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="btn btn-primary nav-cta" href="/kontakt">
          Erstgespräch sichern
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={showMenu}
          aria-controls="mobile-menu"
          aria-label={showMenu ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => mounted && setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {showMenu ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Menü schließen"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div className={`nav-mobile${showMenu ? ' open' : ''}`} id="mobile-menu">
        <div className="nav-mobile-scroll">
          <ul className="nav-mobile-list">
            <li>
              <button
                type="button"
                className={`nav-mobile-row${showMobileLeistungen ? ' is-open' : ''}`}
                aria-expanded={showMobileLeistungen}
                onClick={() => mounted && toggleMobilePanel('leistungen')}
              >
                <span>Leistungen</span>
                <Chevron open={showMobileLeistungen} />
              </button>
              {showMobileLeistungen ? (
                <ul className="nav-mobile-sub">
                  <li>
                    <Link href="/leistungen" onClick={() => setMenuOpen(false)}>
                      Alle Leistungen
                    </Link>
                  </li>
                  {LEISTUNG_NAV.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>

            <li>
              <button
                type="button"
                className={`nav-mobile-row${showMobileBranchen ? ' is-open' : ''}`}
                aria-expanded={showMobileBranchen}
                onClick={() => mounted && toggleMobilePanel('branchen')}
              >
                <span>Branchen</span>
                <Chevron open={showMobileBranchen} />
              </button>
              {showMobileBranchen ? (
                <ul className="nav-mobile-sub">
                  <li>
                    <Link href="/branchen" onClick={() => setMenuOpen(false)}>
                      Alle Branchen
                    </Link>
                  </li>
                  {BRANCHE_NAV.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>

            {SIMPLE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-mobile-row link${isActivePath(pathForActive, link.href) ? ' is-active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-mobile-actions">
          <a className="nav-mobile-phone" href="tel:+4915565087694">
            Anrufen: +49 155 65087694
          </a>
          <Link className="btn btn-primary" href="/kontakt" onClick={() => setMenuOpen(false)}>
            Kostenloses Erstgespräch
          </Link>
        </div>
      </div>
    </header>
  )
}
