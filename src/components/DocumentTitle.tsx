import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TITLES: Record<string, string> = {
  '/': 'לקסורה – LUXORA | מטבחים ונגרות בהתאמה אישית',
  '/about': 'אודות | לקסורה – LUXORA',
  '/gallery': 'המטבחים שלנו | לקסורה – LUXORA',
  '/carpentry': 'נגרות בהתאמה אישית | לקסורה – LUXORA',
  '/materials': 'חומרים וחזיתות | לקסורה – LUXORA',
  '/process': 'תהליך העבודה | לקסורה – LUXORA',
  '/contact': 'יצירת קשר | לקסורה – LUXORA',
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/']
  }, [pathname])

  return null
}
