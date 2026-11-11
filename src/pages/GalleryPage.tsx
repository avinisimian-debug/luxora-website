import {
  GALLERY_SLIDES,
  KITCHEN_04_GALLERY,
  LIBRARIES_GALLERY,
  STYLES_INTRO,
} from "../data/content";
import { EditorialGallery } from "../components/EditorialGallery";
import { Reveal } from "../components/Reveal";
import { StylesShowcase } from "../components/StylesShowcase";

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

      <section
        className="section section--tight-top section--gallery"
        aria-label="גלריית תמונות השראה"
      >
        <div className="container">
          <EditorialGallery />
        </div>
      </section>

      <section
        className="section section--gallery"
        aria-labelledby="kitchen-04-title"
      >
        <div className="container">
          <Reveal>
            <h2 id="kitchen-04-title" className="section-title">
              מטבח בשילוב עץ
            </h2>
          </Reveal>
          <EditorialGallery
            items={KITCHEN_04_GALLERY}
            label="מטבח בשילוב עץ"
            contain
          />
        </div>
      </section>

      <section
        className="section section--gallery"
        aria-labelledby="details-title"
      >
        <div className="container">
          <Reveal>
            <h2 id="details-title" className="section-title">
              מטבח סהרה עם ויטרינות
            </h2>
          </Reveal>
          <EditorialGallery
            items={GALLERY_SLIDES}
            label="מטבח סהרה עם ויטרינות"
            contain
          />
        </div>
      </section>

      <section
        className="section section--gallery"
        aria-labelledby="libraries-title"
      >
        <div className="container">
          <Reveal>
            <h2 id="libraries-title" className="section-title">
              ספריית קודש
            </h2>
          </Reveal>
          <EditorialGallery
            items={LIBRARIES_GALLERY}
            label="ספריית קודש"
            contain
          />
        </div>
      </section>

      <section
        className="section section--ivory"
        id="styles"
        aria-labelledby="styles-title"
      >
        <div className="container">
          <StylesShowcase headingId="styles-title" galleryCta={false} />
        </div>
      </section>
    </>
  );
}
