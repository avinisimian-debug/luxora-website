import type { VercelRequest, VercelResponse } from '@vercel/node'

type LeadBody = {
  fullName?: string
  phone?: string
  projectType?: string
  message?: string
  website?: string
}

const TO_EMAIL = 'luxora90080@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'LUXORA Website <onboarding@resend.dev>'

function badRequest(res: VercelResponse, message: string) {
  return res.status(400).json({ success: false, message })
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as LeadBody

  // Honeypot — silent reject for bots
  if (body.website?.trim()) {
    return res.status(200).json({ success: true })
  }

  const fullName = body.fullName?.trim() || ''
  const phone = body.phone?.trim() || ''
  const projectType = body.projectType?.trim() || ''
  const message = body.message?.trim() || '—'

  if (!fullName || phone.replace(/\D/g, '').length < 9 || !projectType) {
    return badRequest(res, 'חסרים פרטים נדרשים')
  }

  const resendKey = process.env.RESEND_API_KEY
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY

  if (!resendKey && !web3Key) {
    return res.status(503).json({
      success: false,
      message: 'שירות המייל לא מוגדר בשרת',
      code: 'EMAIL_NOT_CONFIGURED',
    })
  }

  try {
    if (resendKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          subject: `פנייה חדשה מאתר לקסורה – ${fullName}`,
          reply_to: TO_EMAIL,
          text: [
            `שם: ${fullName}`,
            `טלפון: ${phone}`,
            `סוג פרויקט: ${projectType}`,
            `הודעה: ${message}`,
            '',
            'מקור: luxora-website /api/contact',
          ].join('\n'),
        }),
      })

      if (!response.ok) {
        const errText = await response.text().catch(() => '')
        console.error('Resend error', response.status, errText)
        throw new Error('שליחת המייל נכשלה')
      }

      return res.status(200).json({ success: true, provider: 'resend' })
    }

    // Web3Forms fallback
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `פנייה חדשה מאתר לקסורה – ${fullName}`,
        from_name: 'LUXORA Website',
        name: fullName,
        phone,
        project_type: projectType,
        message,
        to: TO_EMAIL,
      }),
    })

    const data = (await response.json().catch(() => null)) as {
      success?: boolean
      message?: string
    } | null

    if (!response.ok || !data?.success) {
      throw new Error(data?.message || 'שליחת המייל נכשלה')
    }

    return res.status(200).json({ success: true, provider: 'web3forms' })
  } catch (err) {
    console.error(err)
    return res.status(502).json({
      success: false,
      message: err instanceof Error ? err.message : 'שליחת המייל נכשלה',
    })
  }
}
