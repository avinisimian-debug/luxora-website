import { Link } from 'react-router-dom'
import {
  BRAND,
  CONTACT,
  CUSTOMIZATION_INTRO,
  CUSTOMIZATION_POINTS,
  DIFFERENTIATORS,
  EDITORIAL_IMAGE,
  HOME_FEATURED,
  KITCHEN_STYLES,
  STYLES_INTRO,
  TESTIMONIALS,
} from '../data/content'
import { MEDIA } from '../data/media'
import { BrandLogo } from '../components/BrandLogo'
import { Reveal } from '../components/Reveal'

export function HomePage() {
  const [heroFeature, ...sideFeatures] = HOME_FEATURED

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
          <p className="home-hero__mark" aria-hidden="true">
            {BRAND.nameEn}
          </p>
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
        <div className="container editorial editorial--wide-gap">
          <Reveal>
            <div className="editorial__media editorial__media--tall">
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
              <p className="eyebrow">הגישה של לקסורה</p>
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

      <section className="section section--custom" aria-labelledby="custom-title">
        <div className="container custom-split">
          <Reveal>
            <div className="custom-split__intro">
              <p className="eyebrow">התאמה אישית</p>
              <h2 id="custom-title" className="section-title section-title--wide">
                מטבחים בהתאמה אישית
              </h2>
              <p className="custom-split__quote">{CUSTOMIZATION_INTRO}</p>
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <ul className="custom-list">
              {CUSTOMIZATION_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="styles-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">סוגי מטבחים</p>
            <h2 id="styles-title" className="section-title">
              סגנונות
            </h2>
            <p className="section-lead">{STYLES_INTRO}</p>
            <ul className="styles-strip styles-strip--editorial">
              {KITCHEN_STYLES.map((style, i) => (
                <li key={style.id}>
                  {style.title}
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-preview-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">גלריה</p>
              <h2 id="gallery-preview-title" className="section-title">
                תמונות השראה
              </h2>
              <p className="section-lead">
                מבחר מתמונות ההשראה בגלריה — להמחשת כיווני עיצוב.
              </p>
            </div>
          </Reveal>
          <div className="featured-mosaic">
            {heroFeature ? (
              <Reveal>
                <Link to="/gallery" className="featured-card featured-card--hero">
                  <img
                    src={heroFeature.src}
                    alt={heroFeature.alt}
                    width={1400}
                    height={1800}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="featured-card__caption">{heroFeature.alt}</span>
                </Link>
              </Reveal>
            ) : null}
            <div className="featured-mosaic__side">
              {sideFeatures.map((item, i) => (
                <Reveal key={item.src} delayMs={i * 45}>
                  <Link to="/gallery" className="featured-card">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={900}
                      height={700}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="featured-card__caption">{item.alt}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
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

      <section className="section section--ivory" aria-labelledby="diff-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">מה מייחד</p>
              <h2 id="diff-title" className="section-title">
                היתרונות של לקסורה
              </h2>
            </div>
          </Reveal>
          <div className="diff-rail">
            {DIFFERENTIATORS.map((point, i) => (
              <Reveal key={point.title} delayMs={i * 35}>
                <article className="diff-item">
                  <span className="diff-item__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="voices-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">לקוחות</p>
              <h2 id="voices-title" className="section-title">
                מדברי לקוחות
              </h2>
            </div>
          </Reveal>
          <div className="quotes-grid">
            {TESTIMONIALS.map((item, i) => (
              <Reveal key={item.name} delayMs={i * 40}>
                <blockquote className="quote-block">
                  <p>{item.quote}</p>
                  <footer>{item.name}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dest">
        <div className="container">
          <Reveal>
            <p className="eyebrow">ניווט</p>
            <h2 className="section-title section-title--wide">המשך בעמודים</h2>
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
                חומרים וחזיתות
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
            <p className="eyebrow eyebrow--on-dark">יצירת קשר</p>
            <h2 className="section-title">{BRAND.tagline}</h2>
            <p className="section-lead">שירות בכל הארץ.</p>
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
