import { useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CONTACT, NAV } from '../data/content'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [portalReady, setPortalReady] = useState(false)
  const { pathname } = useLocation()
  const overHero = pathname === '/'

  useEffect(() => {
    setPortalReady(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useLayoutEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const close = () => setOpen(false)
  const headerClass = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    overHero ? 'is-over-hero' : '',
    open ? 'is-menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const mobileNav =
    open && portalReady
      ? createPortal(
          <nav
            id="mobile-nav"
            className="nav-mobile is-open"
            aria-label="ניווט מובייל"
          >
            <div className="nav-mobile__panel">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={'end' in item ? item.end : false}
                  onClick={close}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="nav-mobile__cta">
                <a className="btn btn--primary" href={CONTACT.phoneHref}>
                  {CONTACT.phoneDisplay}
                </a>
                <Link className="btn btn--line" to="/contact" onClick={close}>
                  לתיאום פגישת תכנון
                </Link>
                <a
                  className="btn btn--line"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>,
          document.body,
        )
      : null

  return (
    <header className={headerClass}>
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="לקסורה LUXORA — לדף הבית" onClick={close}>
          <BrandLogo variant="header" />
        </Link>

        <nav className="nav-desktop" aria-label="ניווט ראשי">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={'end' in item ? item.end : false}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={CONTACT.phoneHref} dir="ltr">
            {CONTACT.phoneDisplay}
          </a>
          <Link className="btn btn--primary header-cta" to="/contact">
            לתיאום פגישת תכנון
          </Link>
          <button
            type="button"
            className={`menu-toggle${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      {mobileNav}
    </header>
  )
}
