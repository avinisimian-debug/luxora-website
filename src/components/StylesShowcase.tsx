import { Link } from 'react-router-dom'
import { KITCHEN_STYLES, STYLES_INTRO } from '../data/content'
import { Reveal } from './Reveal'

/** Visual atmosphere only — not labeled as named client projects. */
const STYLE_VISUALS = [
  {
    id: KITCHEN_STYLES[0].id,
    title: KITCHEN_STYLES[0].title,
    src: '/images/projects/kitchen-01.jpg',
    width: 1600,
    height: 1200,
    position: 'center 40%',
  },
  {
    id: KITCHEN_STYLES[1].id,
    title: KITCHEN_STYLES[1].title,
    src: '/images/projects/kitchen-07.jpg',
    width: 1024,
    height: 682,
    position: 'center 45%',
  },
  {
    id: KITCHEN_STYLES[2].id,
    title: KITCHEN_STYLES[2].title,
    src: '/images/projects/kitchen-05.jpg',
    width: 960,
    height: 710,
    position: 'center 50%',
  },
  {
    id: KITCHEN_STYLES[3].id,
    title: KITCHEN_STYLES[3].title,
    src: '/images/projects/kitchen-02.jpg',
    width: 1600,
    height: 739,
    position: 'center 55%',
  },
] as const

type StylesShowcaseProps = {
  headingId?: string
  showCta?: boolean
  /** On gallery page, secondary CTA to gallery is redundant */
  galleryCta?: boolean
}

export function StylesShowcase({
  headingId = 'styles-title',
  showCta = true,
  galleryCta = true,
}: StylesShowcaseProps) {
  return (
    <div className="styles-atelier">
      <Reveal className="styles-atelier__intro">
        <p className="eyebrow">סוגי מטבחים</p>
        <h2 id={headingId} className="section-title">
          סגנונות
        </h2>
        <p className="section-lead">{STYLES_INTRO}</p>
      </Reveal>

      <ul className="styles-atelier__grid" role="list">
        {STYLE_VISUALS.map((style, i) => (
          <li key={style.id} className="styles-atelier__cell">
            <Reveal delayMs={i * 70}>
              <article className="styles-atelier__panel">
                <div className="styles-atelier__media" aria-hidden="true">
                  <img
                    src={style.src}
                    alt=""
                    width={style.width}
                    height={style.height}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: style.position }}
                  />
                </div>
                <div className="styles-atelier__veil" aria-hidden="true" />
                <p className="styles-atelier__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="styles-atelier__title">{style.title}</h3>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      {showCta ? (
        <Reveal delayMs={120} className="styles-atelier__cta">
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              לתיאום פגישת תכנון
            </Link>
            {galleryCta ? (
              <Link className="btn btn--line" to="/gallery">
                המטבחים שלנו
              </Link>
            ) : null}
          </div>
        </Reveal>
      ) : null}
    </div>
  )
}
