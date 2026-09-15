import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'
import { Reveal } from '../components/Reveal'

export function AboutPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container">
          <p className="eyebrow">אודות</p>
          <h1>{BRAND.tagline}</h1>
          <p className="page-intro__lead">{BRAND.field}</p>
        </div>
      </header>

      <section className="section">
        <div className="container--narrow">
          <Reveal>
            <div className="prose">
              <p>{BRAND.intro}</p>
              <p>
                אנחנו מאמינים שמטבח טוב צריך להיות הרבה מעבר ליפה. הוא צריך
                להתאים לאנשים שחיים בו, לאופן שבו הם משתמשים בחלל ולצרכים
                המשתנים לאורך השנים.
              </p>
              <p>
                מתהליך התכנון הראשוני ועד לפרט האחרון בנגרות, אנחנו שמים דגש על
                דיוק, פונקציונליות, בחירת חומרים וגימור ברמה גבוהה. כל פרויקט
                מתוכנן באופן אישי, מתוך הבנה שאין שני בתים זהים ואין שני לקוחות
                עם אותם צרכים.
              </p>
              <p>
                לכל לקוח יש מעצבת מקצועית שמעניקה שירות אישי וליווי צמוד לאורך
                תהליך התכנון, החל מהבנת הצרכים והרגלי השימוש ועד לבחירת החומרים
                ולירידה לפרטים הקטנים.
              </p>
              <p>
                אנחנו מעניקים מעטפת מלאה, משלב הרעיון והתכנון ועד למוצר המוגמר.
              </p>
              <p>
                לצד התכנון והביצוע, אנחנו מקפידים להציע מחירים הוגנים ותחרותיים
                עם דגש על תמורה גבוהה למחיר.
              </p>
              <p>
                השילוב בין עיצוב מקצועי, שירות אישי, נגרות בהתאמה אישית, ביצוע
                איכותי ומחיר הוגן מאפשר לנו לתת ללקוח פתרון שלם, אישי ומדויק.
              </p>
              <p>שירות בכל הארץ. אין אולם תצוגה.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                לתיאום פגישת תכנון
              </Link>
              <Link className="btn btn--line" to="/process">
                תהליך העבודה
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
