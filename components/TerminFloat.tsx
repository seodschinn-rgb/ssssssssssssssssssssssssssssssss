'use client'

import { useEffect, useId, useRef, useState } from 'react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xvzbgggb'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
]

const WEEKDAY_NAMES = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

export default function TerminFloat() {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  const selectableDates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + 1 + i)
    return d
  })

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function resetFormState() {
    setSelectedDate(null)
    setSelectedTime(null)
    setStatus('idle')
    setErrorMsg('')
    formRef.current?.reset()
  }

  function closeModal() {
    setOpen(false)
    if (status === 'success') resetFormState()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form || !selectedDate || !selectedTime) return
    if (!form.reportValidity()) return

    setStatus('sending')
    setErrorMsg('')

    try {
      const formData = new FormData(form)
      formData.set('termin_datum', selectedDate)
      formData.set('termin_uhrzeit', selectedTime)
      formData.append(
        '_subject',
        `Terminanfrage (Floating): ${formData.get('name')} – ${selectedDate} ${selectedTime}`
      )

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (!json.ok) throw new Error(json.error || 'Fehler beim Senden.')

      try {
        await fetch('/api/termin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || '',
            message: formData.get('message') || '',
            termin_datum: selectedDate,
            termin_uhrzeit: selectedTime,
            sendConfirmationOnly: true,
          }),
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

  return (
    <>
      <button
        type="button"
        className="termin-float"
        onClick={() => {
          setOpen(true)
          if (status === 'success') resetFormState()
        }}
        aria-label="Termin vereinbaren"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false" fill="none">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 13h3M13 13h3M8 17h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="termin-modal" role="presentation">
          <button
            type="button"
            className="termin-modal-backdrop"
            aria-label="Dialog schließen"
            onClick={closeModal}
          />
          <div
            className="termin-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="termin-modal-head">
              <div>
                <p className="termin-modal-eyebrow">Kostenloses Erstgespräch</p>
                <h2 id={titleId}>Termin vereinbaren</h2>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                className="termin-modal-close"
                onClick={closeModal}
                aria-label="Schließen"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {status === 'success' ? (
              <div className="termin-modal-success">
                <div className="termin-modal-success-icon" aria-hidden="true">
                  ✓
                </div>
                <h3>Termin angefragt</h3>
                <p>Wir melden uns innerhalb von 24 Stunden, um den Termin zu bestätigen.</p>
                <button type="button" className="termin-modal-submit" onClick={closeModal}>
                  Schließen
                </button>
              </div>
            ) : (
              <form ref={formRef} className="termin-modal-form" onSubmit={handleSubmit}>
                {status === 'error' && <div className="termin-modal-error">{errorMsg}</div>}

                <fieldset className="termin-modal-fieldset">
                  <legend>Datum wählen</legend>
                  <div className="termin-modal-chips">
                    {selectableDates.map((date) => {
                      const dateStr = date.toISOString().split('T')[0]
                      const label = `${WEEKDAY_NAMES[date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.`
                      return (
                        <button
                          key={dateStr}
                          type="button"
                          className={`termin-chip${selectedDate === dateStr ? ' is-active' : ''}`}
                          onClick={() => {
                            setSelectedDate(dateStr)
                            setSelectedTime(null)
                          }}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                {selectedDate && (
                  <fieldset className="termin-modal-fieldset">
                    <legend>Uhrzeit wählen</legend>
                    <div className="termin-modal-chips">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`termin-chip${selectedTime === time ? ' is-active' : ''}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                <div className="termin-modal-fields">
                  <label>
                    Name *
                    <input name="name" type="text" required autoComplete="name" placeholder="Max Mustermann" />
                  </label>
                  <label>
                    E-Mail *
                    <input name="email" type="email" required autoComplete="email" placeholder="max@firma.de" />
                  </label>
                  <label>
                    Telefon
                    <input name="phone" type="tel" autoComplete="tel" placeholder="+49 …" />
                  </label>
                  <label>
                    Nachricht
                    <textarea name="message" rows={3} placeholder="Kurz dein Anliegen (optional)" />
                  </label>
                </div>

                {selectedDate && selectedTime && (
                  <p className="termin-modal-summary">
                    Gewählt:{' '}
                    {new Date(selectedDate).toLocaleDateString('de-DE', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}{' '}
                    um {selectedTime} Uhr
                  </p>
                )}

                <button
                  type="submit"
                  className="termin-modal-submit"
                  disabled={!selectedDate || !selectedTime || status === 'sending'}
                >
                  {status === 'sending' ? 'Wird gesendet…' : 'Termin anfragen'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
