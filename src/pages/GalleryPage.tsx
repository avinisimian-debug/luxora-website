import { STYLES_INTRO } from '../data/content'
import { BeforeAfterStory } from '../components/BeforeAfterStory'
import { EditorialGallery } from '../components/EditorialGallery'
import { Reveal } from '../components/Reveal'
import { StylesShowcase } from '../components/StylesShowcase'

export function GalleryPage() {
  return (
    <>
      <header className="page-intro page-intro--compact">
        <div className="container">
          <p className="eyebrow">גלריה</p>
          <h1>תמונות השראה</h1>
          <p className="page-intro__lead">
            גלריה ויזואלית למטבחים ונגרות בהתאמה אישית. {STYLES_INTRO}
          </p>
        </div>
      </header>

      <section className="section section--tight-top section--gallery" aria-label="גלריית תמונות השראה">
        <div className="container">
          <EditorialGallery />
        </div>
      </section>

      <section className="section section--ba" aria-labelledby="ba-title">
        <div className="container">
          <Reveal>
            <h2 id="ba-title" className="section-title">
              לפני ואחרי
            </h2>
          </Reveal>
          <BeforeAfterStory />
        </div>
      </section>

      <section className="section section--ivory" id="styles" aria-labelledby="styles-title">
        <div className="container">
          <StylesShowcase headingId="styles-title" galleryCta={false} />
        </div>
      </section>
    </>
  )
}
