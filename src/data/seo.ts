import { BRAND, CONTACT, KITCHEN_STYLES, MATERIALS } from './content'

/** Canonical production origin (Vercel). */
export const SITE_URL = 'https://website-ecru-iota-36.vercel.app' as const

export const SITE_NAME = BRAND.full

/** Keywords derived only from approved LUXORA offerings — no invented claims. */
export const SEO_KEYWORDS = [
  'לקסורה',
  'LUXORA',
  'מטבחים בהתאמה אישית',
  'נגרות בהתאמה אישית',
  'תכנון מטבח',
  'עיצוב מטבח',
  'מטבח מודרני',
  'מטבח מינימליסטי',
  'מטבח קלאסי',
  'מטבח כפרי',
  'חזיתות מטבח',
  'צבע בתנור',
  'פורמיקה',
  'אקריל',
  'פולימר',
  'ויטרינות מטבח',
  'פרזול בלום',
  'מטבחים בכל הארץ',
  'נגרות מטבח',
  'פגישת תכנון מטבח',
].join(', ')

export type SeoPage = {
  path: string
  title: string
  description: string
  keywords?: string
}

const styleNames = KITCHEN_STYLES.map((s) => s.title).join(', ')
const materialNames = MATERIALS.join(', ')

export const SEO_PAGES: Record<string, SeoPage> = {
  '/': {
    path: '/',
    title: `${BRAND.nameHe} – ${BRAND.nameEn} | מטבחים ונגרות בהתאמה אישית`,
    description: `${BRAND.tagline} ${BRAND.field}. תכנון מדויק, עיצוב מוקפד ושירות ${CONTACT.serviceArea}.`,
    keywords: SEO_KEYWORDS,
  },
  '/about': {
    path: '/about',
    title: `אודות | ${BRAND.nameHe} – ${BRAND.nameEn}`,
    description: `${BRAND.intro} ${BRAND.field}. שירות ${CONTACT.serviceArea}.`,
    keywords: `אודות לקסורה, ${BRAND.nameEn}, מטבחים בהתאמה אישית, נגרות בהתאמה אישית`,
  },
  '/gallery': {
    path: '/gallery',
    title: `המטבחים שלנו | תמונות השראה | ${BRAND.nameHe} – ${BRAND.nameEn}`,
    description: `גלריית השראה למטבחים ונגרות בהתאמה אישית. סגנונות: ${styleNames}.`,
    keywords: `גלריית מטבחים, תמונות מטבח, ${styleNames}, לקסורה`,
  },
  '/carpentry': {
    path: '/carpentry',
    title: `נגרות בהתאמה אישית | ${BRAND.nameHe} – ${BRAND.nameEn}`,
    description: `נגרות בהתאמה אישית למטבח ולחלל. כל פתרון נגרות מתוכנן במיוחד עבור הלקוח. ${BRAND.nameHe} – ${BRAND.nameEn}.`,
    keywords: 'נגרות בהתאמה אישית, נגרות מטבח, פתרונות נגרות, לקסורה, LUXORA',
  },
  '/materials': {
    path: '/materials',
    title: `חומרים וחזיתות | ${BRAND.nameHe} – ${BRAND.nameEn}`,
    description: `חומרים וגימורים למטבח: ${materialNames}. פרזול בעיקר בלום. ${BRAND.field}.`,
    keywords: `${materialNames}, חזיתות מטבח, פרזול בלום, לקסורה`,
  },
  '/process': {
    path: '/process',
    title: `תהליך העבודה | ${BRAND.nameHe} – ${BRAND.nameEn}`,
    description: `מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות — ליווי אישי, הבנת צרכים ובחירת חומרים. ${BRAND.nameHe}.`,
    keywords: 'תהליך תכנון מטבח, ליווי מעצבת, תכנון אישי, לקסורה',
  },
  '/contact': {
    path: '/contact',
    title: `יצירת קשר | ${BRAND.nameHe} – ${BRAND.nameEn}`,
    description: `לתיאום פגישת תכנון עם ${BRAND.nameHe}. טלפון ${CONTACT.phoneDisplay}, WhatsApp, אימייל ${CONTACT.email}. שירות ${CONTACT.serviceArea}.`,
    keywords: `יצירת קשר לקסורה, תיאום פגישת תכנון, ${CONTACT.phoneDisplay}, מטבחים בכל הארץ`,
  },
}

export const DEFAULT_SEO = SEO_PAGES['/']

export const OG_IMAGE_PATH = '/images/hero-home.jpg' as const
