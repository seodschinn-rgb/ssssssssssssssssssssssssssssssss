'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xvzbgggb'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setErrorMsg('')
    try {
      const formData = new FormData(form)
      formData.append('_subject', `Kontaktanfrage: ${formData.get('name')}`)
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
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
          // Bestätigungs-Mail optional, kein Hinweis mehr
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
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Kostenloses SEO-Gespräch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-zinc-400"
        >
          Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24
          Stunden.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4"
        >
          <a
            href="tel:+4915565087694"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen: +49 155 65087694
          </a>
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 space-y-4"
          onSubmit={handleSubmit}
        >
          {status === 'success' && (
            <div className="rounded-2xl bg-emerald-500/20 border border-emerald-400/30 px-4 py-3 text-emerald-200">
              Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns in Kürze.
            </div>
          )}
          {status === 'error' && (
            <div className="rounded-2xl bg-red-500/20 border border-red-400/30 px-4 py-3 text-red-200">
              {errorMsg}
            </div>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              disabled={status === 'sending'}
              className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors disabled:opacity-70"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              required
              disabled={status === 'sending'}
              className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors disabled:opacity-70"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            disabled={status === 'sending'}
            className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors disabled:opacity-70"
          />
          <textarea
            name="message"
            placeholder="Ihr Anliegen"
            rows={4}
            disabled={status === 'sending'}
            className="w-full rounded-2xl border-2 border-zinc-600/50 bg-zinc-800/50 px-5 py-3.5 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none transition-colors disabled:opacity-70"
          />
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={status !== 'sending' ? { scale: 1.02 } : undefined}
            whileTap={status !== 'sending' ? { scale: 0.98 } : undefined}
            className="w-full sm:w-auto sm:px-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-8 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Wird gesendet…' : 'Beratung anfragen'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
