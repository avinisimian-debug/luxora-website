import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { EDITORIAL_GALLERY } from '../data/content'
import { Reveal } from './Reveal'

export function EditorialGallery() {
  const items = EDITORIAL_GALLERY
  const [active, setActive] = useState<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const open = active !== null
  const current = open ? items[active] : null

  const close = useCallback(() => setActive(null), [])
  const showPrev = useCallback(() => {
    setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length))
  }, [items.length])
  const showNext = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % items.length))
  }, [items.length])

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
      <div className="editorial-gallery" role="list">
        {items.map((item, index) => (
          <Reveal
            key={item.id}
            delayMs={index * 40}
            className={`editorial-gallery__cell editorial-gallery__cell--${item.layout}`}
          >
            <button
              type="button"
              role="listitem"
              className="editorial-gallery__item"
              onClick={() => setActive(index)}
              aria-label={`פתיחת תמונה בגודל מלא: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                style={
                  'objectPosition' in item && item.objectPosition
                    ? { objectPosition: item.objectPosition }
                    : undefined
                }
              />
            </button>
          </Reveal>
        ))}
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
              {String(active! + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
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
