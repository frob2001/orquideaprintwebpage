import { createRef, useCallback, useEffect, useRef, useState } from 'react'
import productKeychains from '../assets/productos/llaveros.png'
import productPins from '../assets/productos/pines.png'
import productBadges from '../assets/productos/gafete.png'

const products = [
  {
    slug: 'llaveros',
    title: 'llaveros/NFC/QR',
    image: productKeychains,
    alt: 'Llaveros personalizados con QR y NFC',
  },
  {
    slug: 'pines',
    title: 'pines',
    image: productPins,
    alt: 'Pines personalizados de orquidea print',
  },
  {
    slug: 'gafetes',
    title: 'tarjetas/gafetes',
    image: productBadges,
    alt: 'Tarjetas y gafetes corporativos personalizados',
  },
]

const total = products.length
const INTERVAL = 3500
const DRAG_THRESHOLD = 50

function getOffset(index, cur) {
  const raw = ((index - cur) % total + total) % total
  // 0 = center, 1 = right, 2→-1 = left
  return raw > 1 ? raw - total : raw
}

function Products() {
  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const cardRefs = useRef(products.map(() => createRef()))
  const isPaused = useRef(false)
  const timerRef = useRef(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)

  const navigate = useCallback((direction) => {
    const cur = currentRef.current
    const next = (cur + direction + total) % total

    // The card that must teleport (jumps from -1 to +1 or vice versa)
    const teleportIndex = direction === 1
      ? (cur - 1 + total) % total   // left card → will become right
      : (cur + 1) % total           // right card → will become left
    const teleportPos = direction === 1 ? '1' : '-1'

    const el = cardRefs.current[teleportIndex]?.current
    if (el) {
      el.dataset.position = teleportPos
      el.classList.add('notransition')
      void el.getBoundingClientRect() // force reflow so transition is suppressed
      el.classList.remove('notransition')
    }

    currentRef.current = next
    setCurrent(next)
  }, [])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!isPaused.current) navigate(1)
    }, INTERVAL)
  }, [navigate])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const goTo = (targetIndex) => {
    const cur = currentRef.current
    if (targetIndex === cur) return
    const forwardSteps = (targetIndex - cur + total) % total
    navigate(forwardSteps <= Math.floor(total / 2) ? 1 : -1)
    resetTimer()
  }

  const handleArrow = (direction) => {
    navigate(direction)
    resetTimer()
  }

  const startDrag = (clientX) => {
    isDragging.current = true
    dragStartX.current = clientX
    isPaused.current = true
  }

  const endDrag = (clientX) => {
    if (!isDragging.current) return
    isDragging.current = false
    isPaused.current = false
    const delta = clientX - dragStartX.current
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      handleArrow(delta < 0 ? 1 : -1)
    }
  }

  return (
    <section className="products" id="productos" aria-labelledby="productos-title">
      <div className="products__inner">
        <h2 className="products__title" id="productos-title">productos</h2>

        <div
          className="carousel"
          onMouseEnter={() => { isPaused.current = true }}
          onMouseLeave={() => { isPaused.current = false }}
        >
          <button className="carousel__btn" onClick={() => handleArrow(-1)} aria-label="producto anterior">‹</button>

          <div
            className="carousel__stage"
            onMouseDown={(e) => startDrag(e.clientX)}
            onMouseUp={(e) => endDrag(e.clientX)}
            onMouseLeave={(e) => { if (isDragging.current) endDrag(e.clientX) }}
            onTouchStart={(e) => startDrag(e.touches[0].clientX)}
            onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
          >
            {products.map((product, i) => (
              <div
                key={product.slug}
                ref={cardRefs.current[i]}
                className="carousel__slide"
                data-position={String(getOffset(i, current))}
              >
                <article className={`product-card product-card--${product.slug}`}>
                  <div className="product-card__image">
                    <img src={product.image} alt={product.alt} draggable={false} />
                  </div>
                  <p className="product-card__label">{product.title}</p>
                </article>
              </div>
            ))}
          </div>

          <button className="carousel__btn" onClick={() => handleArrow(1)} aria-label="producto siguiente">›</button>
        </div>

        <div className="carousel__dots">
          {products.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`producto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
