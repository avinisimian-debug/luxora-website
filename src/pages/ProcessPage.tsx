import { PROCESS_STEPS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function ProcessPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container">
          <p className="eyebrow">תהליך</p>
          <h1>מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות</h1>
          <p className="page-intro__lead">
            מעטפת מלאה משלב הרעיון והתכנון ועד למוצר המוגמר.
          </p>
        </div>
      </header>

      <section className="section section--ivory">
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
    </>
  )
}
