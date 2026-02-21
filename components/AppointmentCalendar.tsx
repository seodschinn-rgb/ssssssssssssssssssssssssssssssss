'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzbgggb'

interface AppointmentCalendarProps {
  cityName: string
}

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
]

const WEEKDAY_NAMES = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

export default function AppointmentCalendar({ cityName }: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  // Termine ab dem nächsten Tag (5 Tage)
  const selectableDates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + 1 + i)
    return d
  })

  async function handleSubmitClick() {
    const form = formRef.current
    if (!form || !selectedDate || !selectedTime) return
    if (!form.reportValidity()) return
    setStatus('sending')
    setErrorMsg('')
    try {
      const formData = new FormData(form)
      formData.set('termin_datum', selectedDate)
      formData.set('termin_uhrzeit', selectedTime)
      formData.append('_subject', `Terminanfrage: ${formData.get('name')} – ${selectedDate} ${selectedTime}`)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (!json.ok) {
        throw new Error(json.error || 'Fehler beim Senden.')
      }
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        termin_datum: selectedDate,
        termin_uhrzeit: selectedTime,
        message: '',
      }
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
      setSelectedDate(null)
      setSelectedTime(null)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-2">Termin angefragt</h3>
        <p className="text-zinc-600">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen, um den Termin zu bestätigen.
        </p>
      </motion.div>
    )
  }

  return (
    <section
      id="termin"
      className="py-20 px-6 bg-zinc-50/80 scroll-mt-24"
      aria-labelledby="termin-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="termin-heading" className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Termin vereinbaren
        </h2>
        <p className="text-zinc-600 mb-12">
          Kostenloses 30-Minuten-Gespräch für Unternehmen in {cityName}. Wählen Sie Datum und Uhrzeit.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white border border-zinc-200 shadow-card overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8">
              <h3 className="font-semibold text-zinc-900 mb-4">Datum wählen</h3>
              <div className="flex flex-wrap gap-2">
                {selectableDates.map((date) => {
                  const dateStr = date.toISOString().split('T')[0]
                  const label = `${WEEKDAY_NAMES[date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.`
                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => setSelectedDate(dateStr)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors touch-manipulation ${
                        selectedDate === dateStr
                          ? 'bg-accent text-white'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>

              {selectedDate && (
                <>
                  <h3 className="font-semibold text-zinc-900 mt-6 mb-4">Uhrzeit wählen</h3>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors touch-manipulation ${
                          selectedTime === time
                            ? 'bg-accent text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="bg-zinc-50 p-6 md:p-8">
              <form
                ref={formRef}
                onSubmit={(e) => { e.preventDefault(); handleSubmitClick(); }}
                className="space-y-4"
              >
                {status === 'error' && (
                  <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label htmlFor="termin-name" className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Name *
                  </label>
                  <input
                    id="termin-name"
                    name="name"
                    type="text"
                    required
                    disabled={status === 'sending'}
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none disabled:opacity-70"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="termin-email" className="block text-sm font-medium text-zinc-700 mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    id="termin-email"
                    name="email"
                    type="email"
                    required
                    disabled={status === 'sending'}
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none disabled:opacity-70"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="termin-phone" className="block text-sm font-medium text-zinc-700 mb-1.5">
                    Telefon
                  </label>
                  <input
                    id="termin-phone"
                    name="phone"
                    type="tel"
                    disabled={status === 'sending'}
                    className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-zinc-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none disabled:opacity-70"
                    placeholder="+49 123 456789"
                  />
                </div>
                {selectedDate && selectedTime && (
                  <p className="text-sm text-zinc-500">
                    Gewählter Termin: {new Date(selectedDate).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })} um {selectedTime} Uhr
                  </p>
                )}
                <button
                  type="button"
                  disabled={!selectedDate || !selectedTime || status === 'sending'}
                  onClick={handleSubmitClick}
                  className="w-full rounded-lg bg-accent py-3.5 font-semibold text-white hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
                >
                  {status === 'sending' ? 'Wird gesendet…' : 'Termin anfragen'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
