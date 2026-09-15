import { Seo } from './Seo'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppFab } from './WhatsAppFab'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Seo />
      <a className="skip-link" href="#main">
        דילוג לתוכן
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

