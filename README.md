# לקסורה – LUXORA

אתר מטבחים ונגרות בהתאמה אישית (Vite + React + TypeScript).

## פיתוח מקומי

```bash
npm install
npm run dev
```

## בניה

```bash
npm run build
npm run preview
```

## טופס יצירת קשר (Vercel)

הטופס שולח קודם ל־`/api/contact` (Serverless). אם אין מפתח מייל מוגדר בשרת — נופל חזרה ל־FormSubmit.

ב־Vercel → Project → Settings → Environment Variables הגדירו **אחד** מהבאים (Production + Preview):

| משתנה | תיאור |
|--------|--------|
| `RESEND_API_KEY` | מפתח מ־[Resend](https://resend.com) (מומלץ) |
| `RESEND_FROM_EMAIL` | אופציונלי. ברירת מחדל: `LUXORA Website <onboarding@resend.dev>` |
| `WEB3FORMS_ACCESS_KEY` | חלופה מ־[Web3Forms](https://web3forms.com) |

המייל לקבלת פניות: `luxora90080@gmail.com` (מוגדר ב־`src/data/content.ts` וב־`api/contact.ts`).

ראו גם `.env.example`.

לאחר הוספת משתנים — Redeploy.

## פריסה

הפרויקט מחובר ל־GitHub ול־Vercel. Push ל־`master` מפעיל דיפלוי אוטומטי אם הוגדר ב־Vercel.
