import { Link } from 'react-router-dom'
import { CONTACT, PROCESS_STEPS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function ProcessPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">תהליך</p>
          <h1>מתכנון ראשוני עד הפרט האחרון</h1>
          <p className="page-intro__lead">
            מעטפת מלאה משלב הרעיון והתכנון ועד למוצר המוגמר — עם לוחות זמנים
            ברורים וליווי לאורך הדרך.
          </p>
        </div>
      </header>

      <section className="section section--ivory section--tight-top">
        <div className="container">
          <div className="process-rail">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delayMs={i * 40}>
                <article className="process-item">
                  <span className="process-item__num" aria-hidden="true">
                    {step.step}
                  </span>
                  <div>
                    <h2>{step.title}</h2>
                    <p>{step.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <aside className="process-aside">
              <h2>אחרי אישור התכנון</h2>
              <p>
                לאחר בחירת החומרים והגימורים נקבעים שלבי הייצור וההתקנה. הליווי
                נמשך עד למסירת המטבח — כולל התאמות באתר לפי הצורך.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <h2>מתחילים בתכנון?</h2>
          <p>נחזור תוך יום עסקים. אפשר גם לכתוב ב־WhatsApp.</p>
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
        </div>
      </section>
    </>
  )
}
