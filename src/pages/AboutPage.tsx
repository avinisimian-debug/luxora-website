import { Link } from 'react-router-dom'
import { BRAND, CONTACT, EDITORIAL_IMAGE } from '../data/content'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  return (
    <>
      <header className="page-intro page-intro--editorial">
        <div className="container page-intro__grid">
          <div>
            <p className="eyebrow">אודות</p>
            <h1>{BRAND.tagline}</h1>
            <p className="page-intro__lead">{BRAND.field}</p>
          </div>
        </div>
      </header>

      <section className="section section--tight-top">
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
          <Reveal delayMs={70}>
            <div className="editorial__copy">
              <div className="prose">
                <p>{BRAND.intro}</p>
                <p>{BRAND.belief}</p>
                <p>{BRAND.craft}</p>
                <p>
                  <strong>{BRAND.tagline}</strong>
                </p>
              </div>
              <p className="section-lead about-service-note">
                שירות בכל הארץ. אין אולם תצוגה.
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" to="/contact">
                  לתיאום פגישת תכנון
                </Link>
                <Link className="btn btn--line" to="/process">
                  תהליך העבודה
                </Link>
                <a
                  className="btn btn--line"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
