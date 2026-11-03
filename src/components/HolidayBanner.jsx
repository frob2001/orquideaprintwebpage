import { useLayoutEffect, useRef, useState } from 'react'
import { buildWhatsappLink } from '../data/contact'
import { getHolidayBannerStorageKey, isHolidayPromoActive } from '../data/holidayPromo'

function HolidayBanner({ onHeightChange }) {
  const active = isHolidayPromoActive()
  const storageKey = getHolidayBannerStorageKey()
  const barRef = useRef(null)

  const [dismissed, setDismissed] = useState(() => {
    if (!active) return true
    try {
      return window.localStorage.getItem(storageKey) === '1'
    } catch {
      return false
    }
  })

  const visible = active && !dismissed

  useLayoutEffect(() => {
    if (!visible) {
      onHeightChange(0)
      return undefined
    }

    const el = barRef.current
    if (!el) return undefined

    const report = () => onHeightChange(el.offsetHeight)
    report()

    const observer = new ResizeObserver(report)
    observer.observe(el)

    return () => {
      observer.disconnect()
      onHeightChange(0)
    }
  }, [visible, onHeightChange])

  if (!visible) return null

  const handleDismiss = () => {
    try {
      window.localStorage.setItem(storageKey, '1')
    } catch {
      // localStorage no disponible (modo privado, etc.) — el cierre no persiste.
    }
    setDismissed(true)
  }

  return (
    <div className="holiday-banner" ref={barRef} role="region" aria-label="promoción de navidad">
      <p className="holiday-banner__text">
        🎄 llegó diciembre: <strong>juguetes personalizados</strong> y{' '}
        <strong>regalos de navidad para empresas</strong>, impresos en 3d — cotiza antes de que se acabe el
        tiempo de entrega.
      </p>
      <a
        className="holiday-banner__cta"
        href={buildWhatsappLink('Hola! Quiero cotizar juguetes o regalos de navidad para mi empresa.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        cotiza por whatsapp →
      </a>
      <button
        type="button"
        className="holiday-banner__close"
        aria-label="cerrar aviso"
        onClick={handleDismiss}
      >
        ×
      </button>
    </div>
  )
}

export default HolidayBanner
