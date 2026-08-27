import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/productLines'

function useReveal() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function PricingStrip() {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`pricing-strip${visible ? ' pricing-strip--visible' : ''}`}>
      <div className="pricing-strip__grid">
        {stats.map((stat, i) => (
          <div key={stat.value} className="pricing-strip__item" style={{ '--stagger': `${i * 70}ms` }}>
            <p className="pricing-strip__value">{stat.value}</p>
            <p className="pricing-strip__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingStrip
