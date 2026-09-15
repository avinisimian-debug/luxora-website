import { CONTACT } from '../data/content'

export type LeadPayload = {
  fullName: string
  phone: string
  projectType: string
  message: string
}

async function sendViaApi(payload: LeadPayload): Promise<'ok' | 'unavailable' | 'failed'> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.status === 404 || response.status === 503) {
      return 'unavailable'
    }

    const data = (await response.json().catch(() => null)) as {
      success?: boolean
      message?: string
      code?: string
    } | null

    if (data?.code === 'EMAIL_NOT_CONFIGURED') {
      return 'unavailable'
    }

    if (!response.ok || data?.success === false) {
      throw new Error(data?.message || 'שליחת המייל נכשלה')
    }

    return 'ok'
  } catch (err) {
    // Network / CORS on local Vite without API — treat as unavailable for fallback
    if (err instanceof TypeError) return 'unavailable'
    throw err
  }
}

/**
 * Prefer Vercel serverless (/api/contact with Resend or Web3Forms).
 * Fall back to FormSubmit only when the API is not configured.
 * Never reports success unless a provider confirms delivery.
 */
export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const apiResult = await sendViaApi(payload)
  if (apiResult === 'ok') return
  if (apiResult === 'failed') {
    throw new Error('שליחת המייל נכשלה')
  }

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      שם: payload.fullName,
      טלפון: payload.phone,
      'סוג פרויקט': payload.projectType,
      הודעה: payload.message.trim() || '—',
      _subject: `פנייה חדשה מאתר לקסורה – ${payload.fullName}`,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      source: 'luxora-website',
    }),
  })

  const data = (await response.json().catch(() => null)) as {
    success?: boolean | string
    message?: string
  } | null

  if (!response.ok || data?.success === false || data?.success === 'false') {
    throw new Error(data?.message || 'שליחת המייל נכשלה')
  }
}
