import { Link } from 'react-router-dom'
import { CONTACT, HARDWARE_NOTE, MATERIALS_DETAIL } from '../data/content'
import { MEDIA } from '../data/media'
import { Reveal } from '../components/Reveal'

export function MaterialsPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">חומרים</p>
          <h1>חומרים וגימורים</h1>
          <p className="page-intro__lead">
            בחירת חומרים וגימור ברמה גבוהה — בהתאם לסגנון, לתחזוקה ולתקציב.
          </p>
        </div>
      </header>

      <section className="section section--tight-top">
        <div className="container">
          <div className="materials-showcase">
            <Reveal>
              <div className="materials-showcase__media">
                <img
                  src={MEDIA.materialsMain.src}
                  alt={MEDIA.materialsMain.alt}
                  width={MEDIA.materialsMain.width}
                  height={MEDIA.materialsMain.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
            <Reveal delayMs={50}>
              <ul className="materials-detail">
                {MATERIALS_DETAIL.map((item) => (
                  <li key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div className="note-box">
              <strong>פרזול.</strong> {HARDWARE_NOTE}
            </div>
          </Reveal>

          <div className="materials-pair">
            <Reveal>
              <figure>
                <img
                  src={MEDIA.materialsDrawer.src}
                  alt={MEDIA.materialsDrawer.alt}
                  width={MEDIA.materialsDrawer.width}
                  height={MEDIA.materialsDrawer.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{MEDIA.materialsDrawer.alt}</figcaption>
              </figure>
            </Reveal>
            <Reveal delayMs={40}>
              <figure>
                <img
                  src={MEDIA.materialsHardware.src}
                  alt={MEDIA.materialsHardware.alt}
                  width={MEDIA.materialsHardware.width}
                  height={MEDIA.materialsHardware.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{MEDIA.materialsHardware.alt}</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <h2>רוצים לבחור חומרים יחד?</h2>
          <p>נלווה אתכם בבחירת הגימורים שמתאימים לחלל ולשימוש.</p>
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
