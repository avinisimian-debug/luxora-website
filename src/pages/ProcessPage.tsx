import { Link } from 'react-router-dom'
import { CONTACT, PROCESS_STEPS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function ProcessPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">תהליך</p>
          <h1>תהליך העבודה והליווי האישי</h1>
          <p className="page-intro__lead">
            מעטפת מלאה מהרעיון והתכנון ועד למוצר המוגמר. לכל לקוח יש מעצבת
            מקצועית שמעניקה שירות אישי וליווי צמוד לאורך תהליך התכנון.
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
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <h2>לתיאום פגישת תכנון</h2>
          <p>שירות בכל הארץ.</p>
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
