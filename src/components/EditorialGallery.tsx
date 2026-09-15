import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { EDITORIAL_GALLERY } from '../data/content'

const AUTO_MS = 4500

export function EditorialGallery() {
  const items = EDITORIAL_GALLERY
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const touchX = useRef<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback(
    (next: number) => {
      const len = items.length
      setIndex(((next % len) + len) % len)
    },
    [items.length],
  )

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    if (paused || items.length < 2 || reduceMotion.current) return
    if (lightbox !== null) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, items.length, lightbox])

  useEffect(() => {
    if (lightbox === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') {
        setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length))
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((i) => (i === null ? i : (i + 1) % items.length))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, items.length])

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null
    setPaused(true)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return
    const endX = e.changedTouches[0]?.clientX ?? touchX.current
    const delta = endX - touchX.current
    if (Math.abs(delta) > 42) {
      // RTL swipe: finger moves right → previous visual in LTR track terms is next in RTL feel
      if (delta > 0) prev()
      else next()
    }
    touchX.current = null
    setPaused(false)
  }

  const current = lightbox !== null ? items[lightbox] : null

  return (
    <>
      <div
        className="inspire-carousel"
        aria-roledescription="מצגת"
        aria-label="תמונות השראה"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="inspire-carousel__viewport">
          <div
            className="inspire-carousel__track"
            style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
          >
            {items.map((item, i) => (
              <figure
                key={item.id}
                className={`inspire-carousel__slide${i === index ? ' is-active' : ''}`}
                aria-hidden={i !== index}
              >
                <button
                  type="button"
                  className="inspire-carousel__open"
                  onClick={() => setLightbox(i)}
                  aria-label={`פתיחת תמונה בגודל מלא: ${item.alt}`}
                  tabIndex={i === index ? 0 : -1}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                    style={
                      'objectPosition' in item && item.objectPosition
                        ? { objectPosition: item.objectPosition }
                        : undefined
                    }
                  />
                </button>
              </figure>
            ))}
          </div>
        </div>

        <div className="inspire-carousel__ui">
          <button
            type="button"
            className="inspire-carousel__nav inspire-carousel__nav--prev"
            aria-label="תמונה קודמת"
            onClick={prev}
          >
            ›
          </button>
          <button
            type="button"
            className="inspire-carousel__nav inspire-carousel__nav--next"
            aria-label="תמונה הבאה"
            onClick={next}
          >
            ‹
          </button>

          <div className="inspire-carousel__dots" role="tablist" aria-label="בחירת תמונה">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`תמונה ${i + 1}`}
                className={`inspire-carousel__dot${i === index ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <p className="inspire-carousel__count" aria-live="polite">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </p>
        </div>

        <div
          className="inspire-carousel__progress"
          aria-hidden="true"
          key={`${index}-${paused}-${lightbox}`}
        >
          <span
            className={`inspire-carousel__progress-bar${paused || lightbox !== null ? ' is-paused' : ''}`}
            style={{ animationDuration: `${AUTO_MS}ms` }}
          />
        </div>
      </div>

      {current ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setLightbox(null)}
        >
          <p id={titleId} className="visually-hidden">
            {current.alt}
          </p>
          <button
            ref={closeBtnRef}
            type="button"
            className="lightbox__close"
            aria-label="סגירת תצוגה"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="תמונה קודמת"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length))
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
              {String((lightbox ?? 0) + 1).padStart(2, '0')} /{' '}
              {String(items.length).padStart(2, '0')}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="תמונה הבאה"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i === null ? i : (i + 1) % items.length))
            }}
          >
            ‹
          </button>
        </div>
      ) : null}
    </>
  )
}
