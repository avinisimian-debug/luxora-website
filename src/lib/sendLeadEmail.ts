import { CONTACT } from '../data/content'

export type LeadPayload = {
  fullName: string
  phone: string
  projectType: string
  message: string
}

/**
 * Sends lead details to the business email via FormSubmit.
 * First submission requires confirming the inbox once (activation email).
 */
export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
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
