import { Link } from 'react-router-dom'
import { CONTACT } from '../data/content'
import { Reveal } from '../components/Reveal'

export function CarpentryPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">נגרות</p>
          <h1>נגרות בהתאמה אישית</h1>
          <p className="page-intro__lead">
            כל מטבח וכל פתרון נגרות מתוכננים במיוחד עבור החלל והצרכים של הלקוח.
          </p>
        </div>
      </header>

      <section className="section section--ivory section--tight-top">
        <div className="container editorial editorial--flip">
          <Reveal>
            <div className="editorial__media">
              <img
                src="/images/drawer-open.jpg"
                alt="תמונת השראה — מגירה פתוחה"
                width={1200}
                height={1600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal delayMs={60}>
            <div className="editorial__copy">
              <div className="prose">
                <p>
                  נגרות בהתאמה אישית היא חלק מרכזי מההתמחות של לקסורה. כל מטבח
                  וכל פתרון נגרות מתוכננים במיוחד עבור החלל והצרכים של הלקוח.
                </p>
                <p>
                  מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות, אנחנו שמים דגש על
                  דיוק, פונקציונליות, בחירת חומרים וגימור ברמה גבוהה.
                </p>
                <p>מעטפת מלאה מהרעיון והתכנון ועד למוצר המוגמר.</p>
              </div>
            </div>
          </Reveal>
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
