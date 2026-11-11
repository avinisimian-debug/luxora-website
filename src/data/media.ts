/**
 * LUXORA media registry.
 * Images are shown as visual inspiration - not as named client projects.
 */
export const MEDIA = {
  hero: {
    src: '/images/gallery/hero-home.jpg',
    alt: 'תמונת השראה - מטבח עם ברז מוזהב, משטח שיש ותאורה חמה',
    width: 1024,
    height: 682,
  },
  about: {
    src: '/images/gallery/kitchen-wide.jpg',
    alt: 'תמונת השראה - מטבח עם ויטרינות וחזיתות מחורצות',
    width: 1600,
    height: 2400,
  },
  cta: {
    src: '/images/gallery/corner-fridge.jpg',
    alt: 'תמונת השראה - פינת מטבח עם נגרות גבוהה',
    width: 1600,
    height: 2400,
  },
  atmosphere: {
    src: '/images/gallery/vitrine-pastries.jpg',
    alt: 'תמונת השראה - ויטרינה ומשטח עבודה',
    width: 1600,
    height: 2400,
  },
  materialsMain: {
    src: '/images/gallery/fluted-detail.jpg',
    alt: 'תמונת השראה - פרט חזית מחורצת',
    width: 998,
    height: 1498,
  },
  materialsDrawer: {
    src: '/images/gallery/drawers.jpg',
    alt: 'תמונת השראה - מגירות מטבח',
    width: 998,
    height: 1498,
  },
  materialsHardware: {
    src: '/images/gallery/drawer-open.jpg',
    alt: 'תמונת השראה - מגירה פתוחה',
    width: 998,
    height: 1498,
  },
  stoneLifestyle: {
    src: '/images/gallery/pastries.jpg',
    alt: 'תמונת השראה - משטח במטבח',
    width: 1600,
    height: 2400,
  },
} as const

export type MediaKey = keyof typeof MEDIA
