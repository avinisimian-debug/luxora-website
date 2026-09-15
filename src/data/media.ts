/**
 * LUXORA media registry — client-supplied project photos only.
 * To replace an image: drop a new file in /public/images and update the path here.
 * Do not point these entries at stock/Pinterest URLs presented as LUXORA work.
 */
export const MEDIA = {
  hero: {
    src: '/images/hero.jpg',
    alt: 'מטבח מודרני יוקרתי עם חזיתות בהירות, ויטרינות מוארות ותאורה אדריכלית',
    width: 2400,
    height: 1600,
  },
  about: {
    src: '/images/kitchen-wide.jpg',
    alt: 'מטבח בהתאמה אישית עם ויטרינות מוארות וחזיתות מחורצות',
    width: 1600,
    height: 2400,
  },
  cta: {
    src: '/images/corner-fridge.jpg',
    alt: '',
    width: 1600,
    height: 2400,
  },
  atmosphere: {
    src: '/images/vitrine-pastries.jpg',
    alt: 'פרט מטבח — ויטרינה מוארת, משטח אבן וחזית מחורצת',
    width: 1600,
    height: 2400,
  },
  materialsMain: {
    src: '/images/fluted-detail.jpg',
    alt: 'פרט חזית מחורצת בגימור איכותי',
    width: 998,
    height: 1498,
  },
  materialsDrawer: {
    src: '/images/drawers.jpg',
    alt: 'מגירות עם ידיות מתכת וגימור מדויק',
    width: 998,
    height: 1498,
  },
  materialsHardware: {
    src: '/images/drawer-open.jpg',
    alt: 'מגירה פתוחה עם פרזול פנימי איכותי',
    width: 998,
    height: 1498,
  },
  stoneLifestyle: {
    src: '/images/pastries.jpg',
    alt: 'משטח אבן במטבח — אווירת חומרים וחלל מעוצב',
    width: 1600,
    height: 2400,
  },
} as const

export type MediaKey = keyof typeof MEDIA
