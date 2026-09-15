import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { BEFORE_AFTER_SETS } from '../data/content'
import { Reveal } from './Reveal'

type Frame = (typeof BEFORE_AFTER_SETS)[number]['image'] & {
  index: string
  id: string
}

const FRAMES: Frame[] = BEFORE_AFTER_SETS.map((set) => ({
  ...set.image,
  index: set.index,
  id: set.id,
}))

export function BeforeAfterStory() {
  const [active, setActive] = useState<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const open = active !== null
  const current = open ? FRAMES[active] : null

  const close = useCallback(() => setActive(null), [])
  const showPrev = useCallback(() => {
    setActive((i) => (i === null ? i : (i - 1 + FRAMES.length) % FRAMES.length))
  }, [])
  const showNext = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % FRAMES.length))
  }, [])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') showPrev()
      if (e.key === 'ArrowLeft') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, showPrev, showNext])

  return (
    <>
      <div className="ba-story" role="list">
        <Reveal className="ba-story__set ba-story__set--primary">
          <button
            type="button"
            role="listitem"
            className="ba-story__panel ba-story__panel--wide"
            onClick={() => setActive(0)}
            aria-label={`פתיחת תמונה בגודל מלא: ${FRAMES[0].alt}`}
          >
            <span className="ba-story__mark" aria-hidden="true">
              {FRAMES[0].index}
            </span>
            <img
              src={FRAMES[0].src}
              alt={FRAMES[0].alt}
              width={FRAMES[0].width}
              height={FRAMES[0].height}
              loading="lazy"
              decoding="async"
            />
          </button>
        </Reveal>

        <div className="ba-story__bridge" aria-hidden="true">
          <span className="ba-story__bridge-line" />
        </div>

        <Reveal delayMs={80} className="ba-story__set ba-story__set--detail">
          <button
            type="button"
            role="listitem"
            className="ba-story__panel ba-story__panel--tall"
            onClick={() => setActive(1)}
            aria-label={`פתיחת תמונה בגודל מלא: ${FRAMES[1].alt}`}
          >
            <span className="ba-story__mark" aria-hidden="true">
              {FRAMES[1].index}
            </span>
            <img
              src={FRAMES[1].src}
              alt={FRAMES[1].alt}
              width={FRAMES[1].width}
              height={FRAMES[1].height}
              loading="lazy"
              decoding="async"
            />
          </button>
        </Reveal>
      </div>

      {open && current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={close}
        >
          <p id={titleId} className="visually-hidden">
            {current.alt}
          </p>
          <button
            ref={closeBtnRef}
            type="button"
            className="lightbox__close"
            aria-label="סגירת תצוגה"
            onClick={close}
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="תמונה קודמת"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
          >
            ›
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              decoding="async"
            />
            <figcaption>
              {current.index} / {String(FRAMES.length).padStart(2, '0')}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="תמונה הבאה"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
          >
            ‹
          </button>
        </div>
      ) : null}
    </>
  )
}
