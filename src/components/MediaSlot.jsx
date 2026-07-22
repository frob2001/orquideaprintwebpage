import { useEffect, useRef, useState } from 'react'

const CYCLE_INTERVAL = 1400
const SWIPE_TRANSITION = 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)'

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 16.5L8.5 12L13 15.5L16.5 12.5L21 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SlideGallery({ srcs, alt, className }) {
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [slotWidth, setSlotWidth] = useState(1)
  const intervalRef = useRef(null)
  const slotRef = useRef(null)
  const startXRef = useRef(0)

  useEffect(() => () => clearInterval(intervalRef.current), [])

  const startAutoplay = () => {
    if (srcs.length <= 1) return
    clearInterval(intervalRef.current)
    setIndex((i) => (i + 1) % srcs.length)
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % srcs.length)
    }, CYCLE_INTERVAL)
  }

  const stopAutoplay = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setIndex(0)
  }

  const handleTouchStart = (e) => {
    if (srcs.length <= 1) return
    clearInterval(intervalRef.current)
    startXRef.current = e.touches[0].clientX
    setSlotWidth(slotRef.current?.offsetWidth || 1)
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    setDragOffset(e.touches[0].clientX - startXRef.current)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = slotWidth * 0.18
    if (dragOffset < -threshold && index < srcs.length - 1) {
      setIndex((i) => i + 1)
    } else if (dragOffset > threshold && index > 0) {
      setIndex((i) => i - 1)
    }
    setDragOffset(0)
  }

  const atStart = index === 0 && dragOffset > 0
  const atEnd = index === srcs.length - 1 && dragOffset < 0
  const resistedOffset = atStart || atEnd ? dragOffset / 3 : dragOffset
  const translatePercent = -index * 100 + (resistedOffset / slotWidth) * 100

  return (
    <div
      ref={slotRef}
      className={`media-slot ${className}`}
      onMouseEnter={startAutoplay}
      onMouseLeave={stopAutoplay}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="media-slot__track"
        style={{
          transform: `translateX(${translatePercent}%)`,
          transition: isDragging ? 'none' : SWIPE_TRANSITION,
        }}
      >
        {srcs.map((src) => (
          <img key={src} src={src} alt={alt} draggable={false} />
        ))}
      </div>
      {srcs.length > 1 && (
        <div className="media-slot__dots" aria-hidden="true">
          {srcs.map((src, i) => (
            <span key={src} className={`media-slot__dot${i === index ? ' media-slot__dot--active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  )
}

function MediaSlot({ image, className = '' }) {
  if (image.srcs) {
    return <SlideGallery srcs={image.srcs} alt={image.alt} className={className} />
  }

  if (image.src) {
    return (
      <div className={`media-slot ${className}`}>
        <img src={image.src} alt={image.alt} />
      </div>
    )
  }

  return (
    <div className={`media-slot media-slot--placeholder ${className}`}>
      <PlaceholderIcon />
      <span>{image.placeholder}</span>
    </div>
  )
}

export default MediaSlot
