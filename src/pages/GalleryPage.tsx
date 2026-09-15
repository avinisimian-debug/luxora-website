import { Link } from 'react-router-dom'
import { KITCHEN_STYLES, STYLES_INTRO } from '../data/content'
import { GalleryCarousel } from '../components/GalleryCarousel'
import { Reveal } from '../components/Reveal'

export function GalleryPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">גלריה</p>
          <h1>המטבחים שלנו</h1>
          <p className="page-intro__lead">
            תמונות השראה למטבחים ונגרות בהתאמה אישית. {STYLES_INTRO}
          </p>
        </div>
      </header>

      <GalleryCarousel />

      <section className="section section--ivory" id="styles">
        <div className="container">
          <Reveal>
            <p className="eyebrow">סוגי מטבחים</p>
            <h2 className="section-title">סגנונות</h2>
            <p className="section-lead">{STYLES_INTRO}</p>
            <ul className="styles-strip">
              {KITCHEN_STYLES.map((style, i) => (
                <li key={style.id}>
                  {style.title}
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </li>
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
    </>
  )
}
