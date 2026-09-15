import { useState, type FormEvent } from 'react'
import { CONTACT, PROJECT_TYPES } from '../data/content'
import { sendLeadEmail } from '../lib/sendLeadEmail'
import { Reveal } from '../components/Reveal'

type FormState = {
  fullName: string
  phone: string
  projectType: string
  message: string
  website: string // honeypot
}

const initial: FormState = {
  fullName: '',
  phone: '',
  projectType: '',
  message: '',
  website: '',
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status === 'error' || status === 'success') setStatus('idle')
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'נא להזין שם מלא'
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9) {
      next.phone = 'נא להזין מספר טלפון תקין'
    }
    if (!form.projectType) next.projectType = 'נא לבחור סוג פרויקט'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    // Bot filled honeypot — pretend success (no network call)
    if (form.website.trim()) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await sendLeadEmail({
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        projectType: form.projectType,
        message: form.message.trim(),
      })
      setStatus('success')
      setForm(initial)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'לא הצלחנו לשלוח את הפנייה. נסו שוב או התקשרו אלינו.',
      )
    }
  }

  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">יצירת קשר</p>
          <h1>לקסורה – LUXORA</h1>
          <p className="page-intro__lead">
            מטבחים ונגרות בהתאמה אישית. שירות בכל הארץ. אין אולם תצוגה.
          </p>
        </div>
      </header>

      <section className="section section--ivory section--tight-top">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <p className="contact-sla">
                נחזור אליכם תוך יום עסקים — בטלפון, במייל או ב־WhatsApp.
              </p>
              <div className="contact-links">
                <a href={CONTACT.phoneHref}>
                  <span className="label">טלפון</span>
                  <span className="value">{CONTACT.phoneDisplay}</span>
                </a>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                  <span className="label">WhatsApp</span>
                  <span className="value">{CONTACT.phoneDisplay}</span>
                </a>
                <a href={CONTACT.emailHref}>
                  <span className="label">אימייל</span>
                  <span className="value">{CONTACT.email}</span>
                </a>
                <div>
                  <span className="label">אזורי שירות</span>
                  <span className="value">{CONTACT.serviceArea}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={60}>
            {status === 'success' ? (
              <div className="contact-form contact-form--success" role="status">
                <h2>הפנייה התקבלה</h2>
                <p className="form-status form-status--ok">
                  הפרטים נשלחו בהצלחה. נחזור אליכם תוך יום עסקים.
                </p>
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn btn--line btn--full"
                    onClick={() => setStatus('idle')}
                  >
                    שליחת פנייה נוספת
                  </button>
                  <a className="btn btn--primary btn--full" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                    המשך ב־WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <h2>יצירת קשר</h2>
                <p className="contact-form__hint">
                  השאירו פרטים — הפנייה תגיע אלינו למייל. נחזור תוך יום עסקים.
                </p>

                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update('website', e.target.value)}
                  />
                </div>

                <div className={`form-field${errors.fullName ? ' form-field--error' : ''}`}>
                  <label htmlFor="fullName">שם מלא</label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    enterKeyHint="next"
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    disabled={status === 'loading'}
                  />
                  {errors.fullName ? <span className="field-error">{errors.fullName}</span> : null}
                </div>

                <div className={`form-field${errors.phone ? ' form-field--error' : ''}`}>
                  <label htmlFor="phone">טלפון</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    enterKeyHint="next"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    disabled={status === 'loading'}
                  />
                  {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
                </div>

                <div className={`form-field${errors.projectType ? ' form-field--error' : ''}`}>
                  <label htmlFor="projectType">סוג הפרויקט</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={(e) => update('projectType', e.target.value)}
                    disabled={status === 'loading'}
                  >
                    <option value="">בחרו אפשרות</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType ? (
                    <span className="field-error">{errors.projectType}</span>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="message">הודעה</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-actions">
                  <button
                    className="btn btn--primary btn--full"
                    type="submit"
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? 'שולח…' : 'שליחה'}
                  </button>
                  <a className="btn btn--line btn--full" href={CONTACT.phoneHref}>
                    התקשרו {CONTACT.phoneDisplay}
                  </a>
                </div>

                {status === 'error' ? (
                  <p className="form-status form-status--error" role="alert">
                    {errorMessage} אפשר גם לכתוב ישירות ל־
                    <a href={CONTACT.emailHref}>{CONTACT.email}</a>, להתקשר, או
                    לשלוח הודעה ב־
                    <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                    .
                  </p>
                ) : null}
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
