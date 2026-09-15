import { Link } from 'react-router-dom'
import { CONTACT, NAV } from '../data/content'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand brand--footer" aria-label="לקסורה LUXORA">
            <BrandLogo variant="footer" />
          </Link>
          <p className="footer-desc">
            מטבחים ונגרות בהתאמה אישית. שירות בכל הארץ.
          </p>
        </div>

        <div>
          <p className="footer-title">ניווט</p>
          <nav className="footer-links" aria-label="ניווט בפוטר">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer-title">יצירת קשר</p>
          <div className="footer-links">
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <span>{CONTACT.serviceArea}</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} לקסורה – LUXORA</span>
        <span>אין אולם תצוגה</span>
      </div>
    </footer>
  )
}
