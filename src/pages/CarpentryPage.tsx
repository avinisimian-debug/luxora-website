import { Reveal } from '../components/Reveal'

export function CarpentryPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container">
          <p className="eyebrow">נגרות</p>
          <h1>נגרות בהתאמה אישית</h1>
          <p className="page-intro__lead">
            כל מטבח וכל פתרון נגרות מתוכננים במיוחד עבור החלל והצרכים של הלקוח.
          </p>
        </div>
      </header>

      <section className="section section--ivory">
        <div className="container editorial editorial--flip">
          <Reveal>
            <div className="editorial__media">
              <img
                src="/images/drawer-open.jpg"
                alt="פרט נגרות — מגירה ופרזול"
                width={1200}
                height={1600}
                loading="lazy"
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
    </>
  )
}
