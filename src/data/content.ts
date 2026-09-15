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
  { src: '/images/hero.jpg', alt: 'מטבח בהתאמה אישית' },
  { src: '/images/kitchen-wide.jpg', alt: 'מטבח עם ויטרינות וחזיתות' },
  { src: '/images/corner-fridge.jpg', alt: 'פינת מטבח עם נגרות גבוהה' },
  { src: '/images/breakfast-bar.jpg', alt: 'פינת ישיבה ונגרות' },
  { src: '/images/vitrine-pastries.jpg', alt: 'ויטרינה ומשטח עבודה' },
  { src: '/images/corner-detail.jpg', alt: 'פרט חזית ואבן' },
  { src: '/images/fluted-detail.jpg', alt: 'פרט חזית מחורצת' },
  { src: '/images/drawers.jpg', alt: 'מגירות ופרזול' },
  { src: '/images/drawer-open.jpg', alt: 'מגירה פתוחה' },
  { src: '/images/sink-drawer.jpg', alt: 'פתרון אחסון במטבח' },
  { src: '/images/pastries.jpg', alt: 'משטח במטבח' },
  { src: '/images/styling-vases.jpg', alt: 'פרט עיצובי בחלל' },
] as const

export const HERO_IMAGE = GALLERY_SLIDES[0]
export const EDITORIAL_IMAGE = GALLERY_SLIDES[1]
