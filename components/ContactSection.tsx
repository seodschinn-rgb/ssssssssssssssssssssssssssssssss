'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import HomeSectionLabel from '@/components/HomeSectionLabel'

/** Formspree-Endpoint – Sie erhalten Nachrichten unter https://formspree.io/f/xvzbgggb */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzbgggb'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  // Absenden per Button-Klick statt Form-Submit – funktioniert auf Mobile zuverlässig.
  async function handleSubmitClick() {
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
    <section
      id="kontakt"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/12 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="flex flex-col items-center gap-3 mb-2">
          <HomeSectionLabel variant="dark">Kontakt</HomeSectionLabel>
          <h2
            id="contact-heading"
            className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Deine Konkurrenz wartet nicht. Du solltest es auch nicht tun.
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-300">
          In 30 Minuten analysieren wir gemeinsam deine aktuelle Google-Situation und zeigen dir, wo die größten
          Chancen liegen. Kostenlos, unverbindlich, konkret.
        </p>
        <p className="mt-4">
          <a
            href="tel:+4915565087694"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 ring-1 ring-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen: +49 155 65087694
          </a>
        </p>
        <div className="mx-auto mt-4 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-lg sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="mailto:info@seomuenchen.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10 sm:min-w-[14rem]"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            E-Mail schreiben
          </a>
          <Link
            href="/kontakt"
            prefetch
            className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:border-indigo-300/60 hover:bg-indigo-500/25 sm:min-w-[14rem]"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"
              />
            </svg>
            Termin fürs SEO-Erstgespräch
          </Link>
        </div>
        <p className="mt-4 text-sm italic text-zinc-500">Wir melden uns innerhalb von 24 Stunden.</p>
        <p className="mt-10 text-sm text-zinc-400">Oder schreib uns direkt über das Formular:</p>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 ring-1 ring-white/[0.06] backdrop-blur-md sm:p-8">
          <form
            ref={formRef}
            id="contact-form"
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); handleSubmitClick(); }}
          >
            {status === 'success' && (
              <div className="rounded-2xl bg-emerald-500/20 border border-emerald-400/30 px-4 py-3 text-emerald-200">
                Vielen Dank! Deine Nachricht wurde gesendet. Wir melden uns in Kürze.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-2xl bg-red-500/20 border border-red-400/30 px-4 py-3 text-red-200">
                {errorMsg}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                required
                disabled={status === 'sending'}
                className="w-full rounded-2xl border border-zinc-600/60 bg-zinc-900/40 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-indigo-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-colors disabled:opacity-70"
              />
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="E-Mail"
                required
                disabled={status === 'sending'}
                className="w-full rounded-2xl border border-zinc-600/60 bg-zinc-900/40 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-indigo-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-colors disabled:opacity-70"
              />
            </div>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Telefon"
              disabled={status === 'sending'}
              className="w-full rounded-2xl border border-zinc-600/60 bg-zinc-900/40 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-indigo-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-colors disabled:opacity-70"
            />
            <textarea
              id="contact-message"
              name="message"
                placeholder="Dein Anliegen"
              rows={4}
              disabled={status === 'sending'}
              className="w-full rounded-2xl border border-zinc-600/60 bg-zinc-900/40 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-indigo-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 resize-none transition-colors disabled:opacity-70"
            />
            <button
              type="button"
              disabled={status === 'sending'}
              onClick={handleSubmitClick}
              className="w-full sm:w-auto sm:px-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 py-4 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-violet-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:enabled:scale-[1.02] active:enabled:scale-[0.98] touch-manipulation"
            >
              {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
