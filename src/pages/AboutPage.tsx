import { Link } from 'react-router-dom'
import {
  BRAND,
  CONTACT,
  CUSTOMIZATION_INTRO,
  CUSTOMIZATION_POINTS,
  DIFFERENTIATORS,
} from '../data/content'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">אודות</p>
          <h1>{BRAND.tagline}</h1>
          <p className="page-intro__lead">{BRAND.field}</p>
        </div>
      </header>

      <section className="section section--tight-top">
        <div className="container--narrow">
          <Reveal>
            <div className="prose">
              <p>{BRAND.intro}</p>
              <p>{BRAND.belief}</p>
              <p>{BRAND.craft}</p>
              <p>{BRAND.tagline}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="about-custom">
        <div className="container container--narrow">
          <Reveal>
            <p className="eyebrow">התאמה אישית</p>
            <h2 id="about-custom" className="section-title">
              ההתמחות של לקסורה
            </h2>
            <p className="section-lead">{CUSTOMIZATION_INTRO}</p>
            <ul className="price-list">
              {CUSTOMIZATION_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="about-diff">
        <div className="container">
          <Reveal>
            <p className="eyebrow">מה מייחד</p>
            <h2 id="about-diff" className="section-title">
              היתרונות של לקסורה
            </h2>
          </Reveal>
          <ul className="trust-grid">
            {DIFFERENTIATORS.map((point, i) => (
              <li key={point.title}>
                <Reveal delayMs={i * 30}>
                  <article className="trust-item">
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <p className="section-lead about-service-note">
              שירות בכל הארץ. אין אולם תצוגה.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                לתיאום פגישת תכנון
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
          </Reveal>
        </div>
      </section>
    </>
  )
}
