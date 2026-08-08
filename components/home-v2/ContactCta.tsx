'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzbgggb'

export default function ContactCta() {
  const [mounted, setMounted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    if (!form.reportValidity()) return
    setStatus('sending')
    setErrorMsg('')
    try {
      const formData = new FormData(form)
      formData.append('_subject', `Kontaktanfrage: ${formData.get('name')}`)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (json.ok) {
        const data = Object.fromEntries(new FormData(form))
        try {
          await fetch('/api/termin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, sendConfirmationOnly: true }),
          })
        } catch {
          // Bestätigungs-Mail optional
        }
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(json.error || 'Fehler beim Senden.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Netzwerkfehler. Bitte später erneut versuchen.')
    }
  }

  return (
    <section className="contact dark" id="kontakt" aria-labelledby="kontakt-heading">
      <div className="mesh-dark" aria-hidden="true" />
      <div className="wrap contact-grid">
        <div className="rv">
          <p className="eyebrow">
            <span className="num">10</span>
            <span className="rail" />
            Kontakt
          </p>
          <h2 id="kontakt-heading">Deine Konkurrenz wartet nicht. Du solltest es auch nicht tun.</h2>
          <p className="lead">
            In 30 Minuten analysieren wir gemeinsam deine aktuelle Google-Situation und zeigen dir, wo die größten
            Chancen liegen. Kostenlos, unverbindlich, konkret.
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
        <div className="form-card rv">
          {/* Formular erst nach Mount: verhindert Hydration-Errors durch Browser-Extensions */}
          {mounted ? (
            <form ref={formRef} onSubmit={handleSubmit} suppressHydrationWarning>
              {status === 'success' && (
                <p className="note" style={{ color: 'var(--pos)', marginBottom: '1rem' }}>
                  Vielen Dank! Deine Nachricht wurde gesendet. Wir melden uns in Kürze.
                </p>
              )}
              {status === 'error' && (
                <p className="note" style={{ color: '#FCA5A5', marginBottom: '1rem' }}>
                  {errorMsg}
                </p>
              )}
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="field">
                <label htmlFor="f-email">E-Mail</label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="field">
                <label htmlFor="f-tel">Telefon</label>
                <input id="f-tel" name="phone" type="tel" autoComplete="tel" disabled={status === 'sending'} />
              </div>
              <div className="field">
                <label htmlFor="f-msg">Dein Anliegen</label>
                <textarea id="f-msg" name="message" required disabled={status === 'sending'} />
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
              </button>
              <p className="note form-note">Kostenlos und unverbindlich.</p>
            </form>
          ) : (
            <div className="form-placeholder" aria-hidden="true">
              <div className="field">
                <span className="label-like">Name</span>
                <div className="input-like" />
              </div>
              <div className="field">
                <span className="label-like">E-Mail</span>
                <div className="input-like" />
              </div>
              <div className="field">
                <span className="label-like">Telefon</span>
                <div className="input-like" />
              </div>
              <div className="field">
                <span className="label-like">Dein Anliegen</span>
                <div className="input-like input-like--tall" />
              </div>
              <div className="btn btn-primary" style={{ width: '100%', opacity: 0.7 }}>
                Nachricht senden
              </div>
              <p className="note form-note">Kostenlos und unverbindlich.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
