/**
 * LUXORA — SOURCE OF TRUTH only.
 * Do not invent claims, numbers, testimonials, materials, or styles.
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
  belief:
    'אנחנו מאמינים שמטבח טוב צריך להיות הרבה מעבר ליפה. הוא צריך להתאים לאנשים שחיים בו, לאופן שבו הם משתמשים בחלל ולצרכים המשתנים לאורך השנים.',
  craft:
    'מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות, אנחנו שמים דגש על דיוק, פונקציונליות, בחירת חומרים וגימור ברמה גבוהה. כל פרויקט מתוכנן באופן אישי, מתוך הבנה שאין שני בתים זהים ואין שני לקוחות עם אותם צרכים.',
} as const

export const NAV = [
  { to: '/', label: 'ראשי', end: true },
  { to: '/about', label: 'אודות' },
  { to: '/gallery', label: 'המטבחים שלנו' },
  { to: '/carpentry', label: 'נגרות' },
  { to: '/materials', label: 'חומרים' },
  { to: '/process', label: 'תהליך' },
  { to: '/contact', label: 'יצירת קשר' },
] as const

/** Official kitchen styles only */
export const KITCHEN_STYLES = [
  { id: 'modern', title: 'מטבח מודרני' },
  { id: 'minimal', title: 'מטבח מינימליסטי' },
  { id: 'classic', title: 'מטבח קלאסי' },
  { id: 'rustic', title: 'מטבח כפרי' },
] as const

export const STYLES_INTRO =
  'מטבחים בהתאמה אישית לכל חלל וכל סגנון.' as const

export const MATERIALS = [
  'צבע בתנור',
  'פורמיקה',
  'אקריל',
  'פולימר',
  'זכוכית / ויטרינות',
] as const

/** Official hardware wording — Blum primary; Turkish option for significant cost reduction */
export const HARDWARE_NOTE =
  'לקסורה עובדת בעיקר עם פרזול בלום, ובפרט במגירות. במקרים שבהם הלקוח מעוניין בהוזלה משמעותית בעלות המגירות, ניתן להשתמש בחברות טורקיות.' as const

/** Official differentiators only (section 4) */
export const DIFFERENTIATORS = [
  {
    title: 'מעטפת מלאה',
    text: 'מהרעיון והתכנון ועד למוצר המוגמר.',
  },
  {
    title: 'ליווי אישי',
    text: 'לכל לקוח יש מעצבת מקצועית שמעניקה שירות אישי וליווי צמוד לאורך תהליך התכנון.',
  },
  {
    title: 'הבנת צרכי הלקוח',
    text: 'התהליך כולל הבנת הצרכים והרגלי השימוש, בחירת החומרים וירידה לפרטים הקטנים.',
  },
  {
    title: 'נגרות בהתאמה אישית',
    text: 'כל מטבח וכל פתרון נגרות מתוכננים במיוחד עבור החלל והצרכים של הלקוח.',
  },
  {
    title: 'תכנון וביצוע',
    text: 'שילוב בין עיצוב מקצועי, שירות אישי, נגרות בהתאמה אישית וביצוע איכותי.',
  },
  {
    title: 'מחיר הוגן',
    text: 'הקפדה על מחירים הוגנים ותחרותיים, עם דגש על תמורה גבוהה למחיר.',
  },
  {
    title: 'פתרון אישי ומדויק',
    text: 'השילוב בין כלל המרכיבים מאפשר להעניק ללקוח פתרון שלם, אישי ומדויק.',
  },
] as const

export const CUSTOMIZATION_INTRO =
  'התאמה אישית היא חלק מרכזי מההתמחות של לקסורה.' as const

export const CUSTOMIZATION_POINTS = [
  'כל מטבח מתוכנן בהתאם לחלל.',
  'התכנון מתחשב בצרכים של הלקוח.',
  'התכנון מתחשב בהרגלי השימוש.',
  'בחירת החומרים נעשית כחלק מתהליך אישי.',
  'כל פרויקט מתוכנן באופן אישי.',
  'אין שני בתים זהים ואין שני לקוחות עם אותם צרכים.',
] as const

/** Process derived only from official personal-design / full-envelope wording */
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'הבנת הצרכים והרגלי השימוש',
    text: 'ליווי צמוד לאורך תהליך התכנון, החל מהבנת הצרכים והרגלי השימוש.',
  },
  {
    step: '02',
    title: 'תכנון אישי',
    text: 'כל פרויקט מתוכנן באופן אישי, מתוך הבנה שאין שני בתים זהים ואין שני לקוחות עם אותם צרכים.',
  },
  {
    step: '03',
    title: 'בחירת חומרים ופרטים',
    text: 'בחירת החומרים וירידה לפרטים הקטנים — כחלק מתהליך אישי עם מעצבת מקצועית.',
  },
  {
    step: '04',
    title: 'נגרות בהתאמה אישית',
    text: 'מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות — עם דגש על דיוק, פונקציונליות וגימור ברמה גבוהה.',
  },
  {
    step: '05',
    title: 'המוצר המוגמר',
    text: 'מעטפת מלאה מהרעיון והתכנון ועד למוצר המוגמר.',
  },
] as const

/** Contact form options — based on official offerings only */
export const PROJECT_TYPES = [
  'מטבח מודרני',
  'מטבח מינימליסטי',
  'מטבח קלאסי',
  'מטבח כפרי',
  'נגרות בהתאמה אישית',
  'אחר / עדיין לא בטוח/ה',
] as const

/**
 * Gallery images — visual inspiration only.
 * Do not present as named client projects unless officially confirmed.
 */
export const GALLERY_SLIDES = [
  { src: '/images/hero-home.jpg', alt: 'תמונת השראה — מטבח עם ברז מוזהב ומשטח שיש' },
  { src: '/images/kitchen-wide.jpg', alt: 'תמונת השראה — מטבח עם ויטרינות וחזיתות מחורצות' },
  { src: '/images/corner-fridge.jpg', alt: 'תמונת השראה — פינת מטבח עם נגרות גבוהה' },
  { src: '/images/breakfast-bar.jpg', alt: 'תמונת השראה — פינת ישיבה ונגרות' },
  { src: '/images/vitrine-pastries.jpg', alt: 'תמונת השראה — ויטרינה ומשטח עבודה' },
  { src: '/images/corner-detail.jpg', alt: 'תמונת השראה — פרט חזית ומשטח' },
  { src: '/images/fluted-detail.jpg', alt: 'תמונת השראה — פרט חזית מחורצת' },
  { src: '/images/drawers.jpg', alt: 'תמונת השראה — מגירות מטבח' },
  { src: '/images/drawer-open.jpg', alt: 'תמונת השראה — מגירה פתוחה' },
  { src: '/images/sink-drawer.jpg', alt: 'תמונת השראה — פתרון אחסון במטבח' },
  { src: '/images/pastries.jpg', alt: 'תמונת השראה — משטח במטבח' },
  { src: '/images/styling-vases.jpg', alt: 'תמונת השראה — פרט עיצובי בחלל' },
] as const

/**
 * Primary editorial gallery — kitchen inspiration visuals.
 * Shown as inspiration / gallery visuals, not as named client projects.
 */
export const EDITORIAL_GALLERY = [
  {
    id: 'kitchen-01',
    src: '/images/projects/kitchen-01.jpg',
    alt: 'תמונת השראה — מטבח מודרני עם חזיתות אפורות, עץ ומשטח אבן',
    width: 1600,
    height: 1200,
    layout: 'hero',
  },
  {
    id: 'kitchen-03',
    src: '/images/projects/kitchen-03.jpg',
    alt: 'תמונת השראה — מטבח מינימליסטי עם חזיתות בהירות, פס עץ וברז מוזהב',
    width: 935,
    height: 721,
    layout: 'wide',
  },
  {
    id: 'kitchen-05',
    src: '/images/projects/kitchen-05.jpg',
    alt: 'תמונת השראה — מטבח עם אי מרכזי, משטח אבן וארונות גבוהים',
    width: 960,
    height: 710,
    layout: 'wide',
  },
  {
    id: 'kitchen-04',
    src: '/images/projects/kitchen-04.jpg',
    alt: 'תמונת השראה — מבט על מטבח עם אי, תאורת קו ותנורים משולבים',
    width: 724,
    height: 960,
    layout: 'portrait',
  },
  {
    id: 'kitchen-02',
    src: '/images/projects/kitchen-02.jpg',
    alt: 'תמונת השראה — יחידת מטבח עם חזיתות עץ וברזים בגימור נחושת',
    width: 1600,
    height: 739,
    layout: 'banner',
    objectPosition: 'center center',
  },
  {
    id: 'kitchen-06',
    src: '/images/projects/kitchen-06.jpg',
    alt: 'תמונת השראה — מטבח בצורת U עם משטח אבן מלא וחזיתות בהירות',
    width: 770,
    height: 960,
    layout: 'portrait',
  },
  {
    id: 'kitchen-07',
    src: '/images/projects/kitchen-07.jpg',
    alt: 'תמונת השראה — מטבח בהיר עם חזית מחורצת, ויטרינות שחורות וברזים שחורים',
    width: 1024,
    height: 682,
    layout: 'wide',
  },
] as const

export const HERO_IMAGE = GALLERY_SLIDES[0]
export const EDITORIAL_IMAGE = GALLERY_SLIDES[1]

/** Home preview — first images from the editorial kitchen set */
export const HOME_FEATURED = [
  EDITORIAL_GALLERY[0],
  EDITORIAL_GALLERY[1],
  EDITORIAL_GALLERY[2],
  EDITORIAL_GALLERY[3],
] as const

/**
 * Before & After visual storytelling — Part 2.
 * Frames only as supplied. No invented project names, claims, or stage labels
 * unless a true before/after pair is provided with matching intent.
 *
 * Current delivery: two editorial frames of the same finished kitchen
 * (overview + faucet detail). Shown as visual storytelling — not as a
 * labeled לפני→אחרי renovation claim.
 */
export const BEFORE_AFTER_SETS = [
  {
    id: 'ba-01',
    type: 'story' as const,
    index: '01',
    image: {
      src: '/images/before-after/set-01-overview.jpg',
      alt: 'מטבח — מבט כללי',
      width: 1024,
      height: 682,
      orientation: 'landscape' as const,
    },
  },
  {
    id: 'ba-02',
    type: 'story' as const,
    index: '02',
    image: {
      src: '/images/before-after/set-01-detail.jpg',
      alt: 'מטבח — ברזים',
      width: 682,
      height: 1024,
      orientation: 'portrait' as const,
    },
  },
] as const

/** Real client testimonials — provided by the business */
export const TESTIMONIALS = [
  {
    name: 'שמואל',
    quote:
      'אנחנו ממש מרוצים מהמטבח. מההתחלה קיבלנו יחס טוב וסבלני, עזרו לנו לבחור ולתכנן בדיוק מה שמתאים לנו. המטבח יצא יפה מאוד והכי חשוב שגם נוח לנו איתו ביום יום. תודה רבה.',
  },
  {
    name: 'נעמי',
    quote:
      'בהתחלה קצת חששנו לעשות מטבח בהתאמה אישית, אבל מהר מאוד הבנו שאנחנו בידיים טובות. היו קשובים למה שרצינו, נתנו רעיונות ועשו שינויים עד שהגענו למה שאהבנו. גם המחיר היה הוגן מבחינתנו. יצא ממש יפה.',
  },
  {
    name: 'רחלי',
    quote:
      'קיבלנו שירות מצוין לאורך כל הדרך. היו זמינים לכל שאלה, הסבירו לנו הכול בסבלנות והמטבח יצא בדיוק כמו שתכננו. אהבנו במיוחד את הירידה לפרטים ואת זה שהיו איתנו גם בדברים הקטנים.',
  },
  {
    name: 'רותי',
    quote:
      'חיפשנו מטבח ברמה טובה בלי להגיע למחירים מוגזמים, וכאן מצאנו בדיוק את מה שחיפשנו. התכנון היה מקצועי, העבודה טובה והמטבח יצא אפילו יותר יפה ממה שדמיינו. אנחנו מאוד מרוצים מהתוצאה.',
  },
] as const
