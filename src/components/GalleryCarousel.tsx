import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { GALLERY_SLIDES } from '../data/content'

const INTERVAL_MS = 5500

type Props = {
  fullBleed?: boolean
}

export function GalleryCarousel({ fullBleed = true }: Props) {
  const slides = GALLERY_SLIDES
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback(
    (next: number) => {
      const len = slides.length
      setIndex(((next % len) + len) % len)
    },
    [slides.length],
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || slides.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((c) => (c + 1) % slides.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, slides.length])

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current == null) return
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    if (Math.abs(delta) > 48) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  if (!slides.length) {
    return <div className="cinema"><p className="container cinema__empty">אין תמונות להצגה כרגע.</p></div>
  }

  return (
    <div
      className={`cinema${fullBleed ? ' cinema--bleed' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="מצגת"
      aria-label="המטבחים שלנו"
    >
      <div className="cinema__stage">
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            className={`cinema__slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'low'}
            />
          </figure>
        ))}

        <div className="cinema__ui">
          <div className="cinema__arrows">
            <button type="button" className="cinema__btn" onClick={prev} aria-label="תמונה קודמת">
              ‹
            </button>
            <button type="button" className="cinema__btn" onClick={next} aria-label="תמונה הבאה">
              ›
            </button>
          </div>
          <div className="cinema__meta">
            <p className="cinema__count" aria-live="polite">
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </p>
            <div className="cinema__dots" role="tablist" aria-label="בחירת תמונה">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`תמונה ${i + 1}`}
                  className={`cinema__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
