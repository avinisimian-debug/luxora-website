import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { BEFORE_AFTER_COMPARE } from '../data/content'
import { Reveal } from './Reveal'

const { before, after, detail } = BEFORE_AFTER_COMPARE

export function BeforeAfterStory() {
  const [pos, setPos] = useState(52)
  const [dragging, setDragging] = useState(false)
  const [lightbox, setLightbox] = useState<'before' | 'after' | 'detail' | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    // RTL: 0% = after fully shown from the inline-start (right);
    // we store pos as % of after visible from the physical left for clip-path simplicity.
    const raw = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, raw)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [dragging, updateFromClientX])

  useEffect(() => {
    if (!lightbox) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const lightSrc =
    lightbox === 'before' ? before : lightbox === 'after' ? after : lightbox === 'detail' ? detail : null

  return (
    <>
      <Reveal>
        <div
          className="ba-compare"
          ref={trackRef}
          onPointerDown={(e) => {
            setDragging(true)
            updateFromClientX(e.clientX)
            ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
          }}
        >
          <div className="ba-compare__layer ba-compare__layer--after">
            <img
              src={after.src}
              alt={after.alt}
              width={after.width}
              height={after.height}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className="ba-compare__label ba-compare__label--after">אחרי</span>
          </div>

          <div
            className="ba-compare__layer ba-compare__layer--before"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={before.src}
              alt={before.alt}
              width={before.width}
              height={before.height}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className="ba-compare__label ba-compare__label--before">לפני</span>
          </div>

          <div
            className="ba-compare__handle"
            style={{ left: `${pos}%` }}
            role="slider"
            aria-valuemin={4}
            aria-valuemax={96}
            aria-valuenow={Math.round(pos)}
            aria-label="השוואת לפני ואחרי — גרור להצגת השינוי"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPos((p) => Math.min(96, p + 3))
              if (e.key === 'ArrowRight') setPos((p) => Math.max(4, p - 3))
            }}
          >
            <span className="ba-compare__handle-line" aria-hidden="true" />
            <span className="ba-compare__handle-knob" aria-hidden="true">
              ‹ ›
            </span>
          </div>
        </div>
      </Reveal>

      <div className="ba-compare__actions">
        <button
          type="button"
          className="ba-compare__open"
          onClick={() => setLightbox('before')}
        >
          לפני
        </button>
        <button
          type="button"
          className="ba-compare__open"
          onClick={() => setLightbox('after')}
        >
          אחרי
        </button>
        <button
          type="button"
          className="ba-compare__open"
          onClick={() => setLightbox('detail')}
        >
          פרט
        </button>
      </div>

      <Reveal delayMs={80} className="ba-compare__detail">
        <button
          type="button"
          className="ba-compare__detail-btn"
          onClick={() => setLightbox('detail')}
          aria-label={`פתיחת תמונה בגודל מלא: ${detail.alt}`}
        >
          <span className="ba-compare__label ba-compare__label--after">אחרי</span>
          <img
            src={detail.src}
            alt={detail.alt}
            width={detail.width}
            height={detail.height}
            loading="lazy"
            decoding="async"
          />
        </button>
      </Reveal>

      {lightbox && lightSrc ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setLightbox(null)}
        >
          <p id={titleId} className="visually-hidden">
            {lightSrc.alt}
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
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightSrc.src}
              alt={lightSrc.alt}
              width={lightSrc.width}
              height={lightSrc.height}
              decoding="async"
            />
            <figcaption>
              {lightbox === 'before' ? 'לפני' : lightbox === 'after' ? 'אחרי' : 'פרט'}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
