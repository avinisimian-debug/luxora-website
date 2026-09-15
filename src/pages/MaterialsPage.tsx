import { HARDWARE_NOTE, MATERIALS } from '../data/content'
import { Reveal } from '../components/Reveal'

export function MaterialsPage() {
  return (
    <>
      <header className="page-intro">
        <div className="container">
          <p className="eyebrow">חומרים</p>
          <h1>חומרים וגימורים</h1>
          <p className="page-intro__lead">בחירת חומרים וגימור ברמה גבוהה.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <Reveal>
            <ul className="materials-list">
              {MATERIALS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <p className="note-box">{HARDWARE_NOTE}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
