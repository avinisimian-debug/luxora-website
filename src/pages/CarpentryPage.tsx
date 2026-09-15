import { Link } from 'react-router-dom'
import { CONTACT, CARPENTRY_POINTS } from '../data/content'
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
                alt="פרט נגרות — מגירה פתוחה עם פרזול פנימי"
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
                  אנחנו מתמחים בנגרות בהתאמה אישית, כך שכל מטבח וכל פתרון נגרות
                  מתוכננים במיוחד עבור החלל והצרכים של הלקוח.
                </p>
                <p>
                  מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות, אנחנו שמים דגש על
                  דיוק, פונקציונליות, בחירת חומרים וגימור ברמה גבוהה.
                </p>
                <p>מעטפת מלאה משלב הרעיון והתכנון ועד למוצר המוגמר.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <Reveal>
            <p className="eyebrow">מה כוללים</p>
            <h2 className="section-title">נגרות שמתאימה לחיים</h2>
          </Reveal>
          <ul className="detail-grid">
            {CARPENTRY_POINTS.map((item, i) => (
              <li key={item.title}>
                <Reveal delayMs={i * 40}>
                  <article className="detail-item">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="editorial editorial--compact materials-follow">
            <Reveal>
              <div className="editorial__media editorial__media--wide">
                <img
                  src="/images/drawers.jpg"
                  alt="מגירות מטבח עם ידיות מתכת וגימור מדויק"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <div className="editorial__copy">
                <p className="eyebrow">פרטים</p>
                <h2 className="section-title">מהרעיון עד הפרט האחרון</h2>
                <p className="section-lead">
                  אחסון נסתר, מחיצות פנימיות, פינות ישיבה וויטרינות — כל אלמנט
                  נגזר מהתכנון ומהשימוש היומיומי בחלל.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <h2>מוכנים לתכנן נגרות מדויקת?</h2>
          <p>תיאום פגישת תכנון או שיחה קצרה ב־WhatsApp.</p>
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
