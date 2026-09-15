import { Link } from 'react-router-dom'
import { BRAND, CONTACT, EDITORIAL_IMAGE, HERO_IMAGE } from '../data/content'
import { BrandLogo } from '../components/BrandLogo'
import { Reveal } from '../components/Reveal'

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero__media" aria-hidden="true">
          <img
            src={HERO_IMAGE.src}
            alt=""
            width={2400}
            height={1600}
            fetchPriority="high"
            decoding="async"
          />
          <div className="home-hero__veil" />
        </div>

        <div className="container home-hero__content">
          <div className="home-hero__logo">
            <BrandLogo variant="hero" />
          </div>
          <h1 id="hero-title">{BRAND.tagline}</h1>
          <p className="home-hero__sub">{BRAND.field}</p>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              לתיאום פגישת תכנון
            </Link>
            <Link className="btn btn--ghost" to="/gallery">
              המטבחים שלנו
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container editorial">
          <Reveal>
            <div className="editorial__media">
              <img
                src={EDITORIAL_IMAGE.src}
                alt={EDITORIAL_IMAGE.alt}
                width={1600}
                height={2000}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="editorial__copy">
              <p className="eyebrow">אודות</p>
              <h2 className="section-title">{BRAND.full}</h2>
              <p className="section-lead">{BRAND.intro}</p>
              <div className="btn-row">
                <Link className="btn btn--line" to="/about">
                  לאודות
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <nav className="destinations" aria-label="עמודי האתר">
              <Link to="/gallery">
                המטבחים שלנו
                <span>גלריה</span>
              </Link>
              <Link to="/carpentry">
                נגרות בהתאמה אישית
                <span>נגרות</span>
              </Link>
              <Link to="/materials">
                חומרים וגימורים
                <span>חומרים</span>
              </Link>
              <Link to="/process">
                תהליך העבודה
                <span>תהליך</span>
              </Link>
              <Link to="/contact">
                יצירת קשר
                <span>קשר</span>
              </Link>
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__bg" aria-hidden="true">
          <img src="/images/corner-fridge.jpg" alt="" loading="lazy" width={1600} height={2000} />
          <div className="cta-band__veil" />
        </div>
        <div className="container cta-band__inner">
          <Reveal>
            <h2 className="section-title">{BRAND.tagline}</h2>
            <p className="section-lead">שירות בכל הארץ.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                לתיאום פגישת תכנון
              </Link>
              <a className="btn btn--ghost" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
