/**
 * Content from client brief / business document only.
 */
export const CONTACT = {
  phoneDisplay: '052-719-0080',
  phoneTel: '0527190080',
  phoneHref: 'tel:0527190080',
  whatsappHref:
    'https://wa.me/972527190080?text=' +
    encodeURIComponent('שלום, אשמח לתאם תכנון מטבח / נגרות עם לקסורה.'),
  email: 'luxora90080@gmail.com',
  emailHref: 'mailto:luxora90080@gmail.com',
  serviceArea: 'בכל הארץ',
} as const

export const BRAND = {
  nameHe: 'לקסורה',
  nameEn: 'LUXORA',
  full: 'לקסורה – LUXORA',
  tagline: 'לקסורה – תכנון שנכון לחיים, בעיצוב שנשאר.',
  field: 'מטבחים ונגרות בהתאמה אישית',
  intro:
    'לקסורה היא חברת מטבחים ונגרות בהתאמה אישית, המשלבת בין תכנון מדויק, עיצוב מוקפד ואיכות בלתי מתפשרת.',
} as const

/** Clean 7-item nav — kitchen types live under gallery page */
export const NAV = [
  { to: '/', label: 'ראשי', end: true },
  { to: '/about', label: 'אודות' },
  { to: '/gallery', label: 'המטבחים שלנו' },
  { to: '/carpentry', label: 'נגרות' },
  { to: '/materials', label: 'חומרים' },
  { to: '/process', label: 'תהליך' },
  { to: '/contact', label: 'יצירת קשר' },
] as const

export const KITCHEN_STYLES = [
  { id: 'modern', title: 'מטבחים מודרניים' },
  { id: 'minimal', title: 'מטבחים מינימליסטיים' },
  { id: 'classic', title: 'מטבחים קלאסיים' },
  { id: 'rustic', title: 'מטבחים כפריים' },
] as const

export const STYLES_INTRO =
  'מטבחים בהתאמה אישית לכל חלל ולכל סגנון.' as const

export const MATERIALS = [
  'צבע בתנור',
  'פורמיקה',
  'אקריל',
  'פולימר',
  'זכוכית וויטרינות',
] as const

export const HARDWARE_NOTE =
  'עובדים עם BLUM בפרזול. במגירות בעיקר BLUM, וניתן להציע חלופות בהתאם לתקציב.' as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'הבנת הצרכים והרגלי השימוש',
    text: 'ליווי צמוד לאורך תהליך התכנון, החל מהבנת הצרכים והרגלי השימוש.',
  },
  {
    step: '02',
    title: 'תכנון מדויק',
    text: 'תכנון מדויק ועיצוב מוקפד. כל פרויקט מתוכנן באופן אישי, מתוך הבנה שאין שני בתים זהים ואין שני לקוחות עם אותם צרכים.',
  },
  {
    step: '03',
    title: 'בחירת חומרים וגימורים',
    text: 'בחירת חומרים וגימור ברמה גבוהה — עד לבחירת החומרים ולירידה לפרטים הקטנים.',
  },
  {
    step: '04',
    title: 'נגרות בהתאמה אישית',
    text: 'מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות, עם דגש על דיוק ופונקציונליות. כל מטבח וכל פתרון נגרות מתוכננים במיוחד עבור החלל והצרכים של הלקוח.',
  },
  {
    step: '05',
    title: 'המוצר המוגמר',
    text: 'מעטפת מלאה משלב הרעיון והתכנון ועד למוצר המוגמר.',
  },
] as const

export const PROJECT_TYPES = [
  'מטבח חדש',
  'שיפוץ מטבח',
  'נגרות בהתאמה אישית',
  'עדיין לא בטוח/ה',
] as const

/** Client-supplied photos only — swap via this list */
export const GALLERY_SLIDES = [
  { src: '/images/hero-opt.jpg', alt: 'מטבח מודרני עם ויטרינות מוארות וחזיתות בהירות' },
  { src: '/images/kitchen-wide.jpg', alt: 'מטבח רחב עם ויטרינות, חזיתות מחורצות ומשטח אבן' },
  { src: '/images/corner-fridge.jpg', alt: 'פינת מטבח עם נגרות גבוהה ומקרר משולב' },
  { src: '/images/breakfast-bar.jpg', alt: 'פינת ישיבה עם נגרות ומשטח עבודה' },
  { src: '/images/vitrine-pastries.jpg', alt: 'ויטרינה מוארת ליד משטח עבודה' },
  { src: '/images/corner-detail.jpg', alt: 'פרט חזית ואבן בפינת המטבח' },
  { src: '/images/fluted-detail.jpg', alt: 'פרט חזית מחורצת בגימור עדין' },
  { src: '/images/drawers.jpg', alt: 'מגירות מטבח עם ידיות מתכת' },
  { src: '/images/drawer-open.jpg', alt: 'מגירה פתוחה עם פרזול פנימי' },
  { src: '/images/sink-drawer.jpg', alt: 'פתרון אחסון מתחת לכיור' },
  { src: '/images/pastries.jpg', alt: 'משטח אבן במטבח מעוצב' },
  { src: '/images/styling-vases.jpg', alt: 'פרט עיצובי על משטח במטבח' },
] as const

export const HERO_IMAGE = GALLERY_SLIDES[0]
export const EDITORIAL_IMAGE = GALLERY_SLIDES[1]

/** Featured works on home — client photos only */
export const HOME_FEATURED = [
  GALLERY_SLIDES[0],
  GALLERY_SLIDES[1],
  GALLERY_SLIDES[2],
  GALLERY_SLIDES[3],
] as const

export const TRUST_POINTS = [
  {
    title: 'תכנון אישי',
    text: 'מעצבת מקצועית מלווה כל פרויקט — מהבנת הצרכים ועד לפרט האחרון.',
  },
  {
    title: 'פרזול BLUM',
    text: 'עובדים עם BLUM בפרזול. במגירות בעיקר BLUM, וניתן להציע חלופות לפי תקציב.',
  },
  {
    title: 'שירות בכל הארץ',
    text: 'ליווי והתקנה בכל הארץ. אין אולם תצוגה — הפגישה מתקיימת לפי תיאום.',
  },
  {
    title: 'לוחות זמנים ברורים',
    text: 'לאחר אישור התכנון והחומרים נקבעים שלבי ביצוע והתקנה בשקיפות.',
  },
] as const

/**
 * Placeholder testimonials — replace with real client quotes when available.
 * Do NOT present these as verified Google reviews.
 */
export const TESTIMONIALS_PLACEHOLDER = [
  {
    quote: 'התכנון היה מדויק לצרכים שלנו, והתוצאה נראית ומרגישה כמו מטבח שנבנה לבית.',
    attribution: 'לקוח/ה — להחלפה בציטוט אמיתי',
  },
  {
    quote: 'ליווי צמוד לאורך כל התהליך, מהבחירות ועד ההתקנה. שקט נפשי מקצועי.',
    attribution: 'לקוח/ה — להחלפה בציטוט אמיתי',
  },
] as const

export const PRICE_FACTORS = [
  'מידות החלל ומורכבות התכנון',
  'סוג החזיתות והגימור (צבע בתנור, פורמיקה, אקריל ועוד)',
  'כמות האחסון והפרזול (כולל BLUM)',
  'עבודות נגרות נוספות מעבר למטבח',
  'לוחות זמנים ודרישות התקנה באתר',
] as const

export const CARPENTRY_POINTS = [
  {
    title: 'פתרונות לפי החלל',
    text: 'ארונות גבוהים, פינות ישיבה, ויטרינות ואחסון נסתר — כל פתרון נגזר מהמדידות ומהרגלי השימוש.',
  },
  {
    title: 'דיוק בביצוע',
    text: 'דגש על חיבורים נקיים, יישור מדויק וגימור שמחזיק לאורך שנים.',
  },
  {
    title: 'פונקציונליות יומיומית',
    text: 'מגירות, מחיצות פנימיות ופתרונות אחסון שמפשטים את השימוש השוטף במטבח.',
  },
] as const

export const MATERIALS_DETAIL = [
  {
    name: 'צבע בתנור',
    text: 'גימור אחיד ועמיד, מתאים לחזיתות מודרניות ומינימליסטיות.',
  },
  {
    name: 'פורמיקה',
    text: 'מגוון טקסטורות וגוונים, איזון בין מראה לתחזוקה נוחה.',
  },
  {
    name: 'אקריל',
    text: 'משטח חלק עם נוכחות חזקה של אור והשתקפות.',
  },
  {
    name: 'פולימר',
    text: 'עמידות וגימור עקבי לפרויקטים שדורשים חוזק וניקיון קל.',
  },
  {
    name: 'זכוכית וויטרינות',
    text: 'תצוגה מוארת לאחסון נבחר — שילוב עיצובי ופונקציונלי.',
  },
] as const
