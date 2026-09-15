import { Link } from 'react-router-dom'
import {
  BRAND,
  CONTACT,
  EDITORIAL_IMAGE,
  HOME_FEATURED,
  PRICE_FACTORS,
  TESTIMONIALS_PLACEHOLDER,
  TRUST_POINTS,
} from '../data/content'
import { MEDIA } from '../data/media'
import { BrandLogo } from '../components/BrandLogo'
import { Reveal } from '../components/Reveal'

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="home-hero__media" aria-hidden="true">
          <img
            src={MEDIA.hero.src}
            alt=""
            width={MEDIA.hero.width}
            height={MEDIA.hero.height}
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

      <section className="section" aria-labelledby="featured-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">המטבחים שלנו</p>
              <h2 id="featured-title" className="section-title">
                מבחר מהעבודות
              </h2>
              <p className="section-lead">
                תמונות מפרויקטים של לקוחות — כל מטבח מתוכנן ומותאם אישית.
              </p>
            </div>
          </Reveal>
          <div className="featured-grid">
            {HOME_FEATURED.map((item, i) => (
              <Reveal key={item.src} delayMs={i * 50}>
                <Link to="/gallery" className="featured-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="featured-card__caption">{item.alt}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="btn-row">
              <Link className="btn btn--line" to="/gallery">
                לכל הגלריה
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="trust-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">למה לקסורה</p>
              <h2 id="trust-title" className="section-title">
                תכנון, ביצוע וליווי
              </h2>
            </div>
          </Reveal>
          <ul className="trust-grid">
            {TRUST_POINTS.map((point, i) => (
              <li key={point.title}>
                <Reveal delayMs={i * 40}>
                  <article className="trust-item">
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="price-title">
        <div className="container container--narrow">
          <Reveal>
            <p className="eyebrow">שקיפות</p>
            <h2 id="price-title" className="section-title">
              מה משפיע על המחיר
            </h2>
            <p className="section-lead">
              אין מחירון אחיד — כל פרויקט מתומחר לפי התכנון והחומרים. הגורמים
              העיקריים:
            </p>
            <ul className="factor-list">
              {PRICE_FACTORS.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                לתיאום פגישת תכנון
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Placeholder quotes — replace with real testimonials; not Google reviews */}
      <section className="section section--sand" aria-labelledby="voices-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">קולות מהשטח</p>
              <h2 id="voices-title" className="section-title">
                המלצות (טיוטה)
              </h2>
              <p className="section-lead section-lead--compact">
                ציטוטים לדוגמה להחלפה — אינם ביקורות מאומתות מגוגל.
              </p>
            </div>
          </Reveal>
          <div className="quotes-grid">
            {TESTIMONIALS_PLACEHOLDER.map((item, i) => (
              <Reveal key={item.attribution} delayMs={i * 60}>
                <blockquote className="quote-block">
                  <p>{item.quote}</p>
                  <footer>{item.attribution}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
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
          <img
            src={MEDIA.cta.src}
            alt=""
            loading="lazy"
            width={MEDIA.cta.width}
            height={MEDIA.cta.height}
            decoding="async"
          />
          <div className="cta-band__veil" />
        </div>
        <div className="container cta-band__inner">
          <Reveal>
            <h2 className="section-title">{BRAND.tagline}</h2>
            <p className="section-lead">שירות בכל הארץ. נחזור תוך יום עסקים.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                לתיאום פגישת תכנון
              </Link>
              <a
                className="btn btn--ghost"
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
