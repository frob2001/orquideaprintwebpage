import { useEffect, useState } from 'react'
import { buildWhatsappLink } from '../data/contact'
import { getHolidayPromoStorageKey, isHolidayPromoActive } from '../data/holidayPromo'

function HolidayModal() {
  const active = isHolidayPromoActive()
  const storageKey = getHolidayPromoStorageKey()

  const [dismissed, setDismissed] = useState(() => {
    if (!active) return true
    try {
      return window.localStorage.getItem(storageKey) === '1'
    } catch {
      return false
    }
  })

  const visible = active && !dismissed

  useEffect(() => {
    if (!visible) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleDismiss()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  if (!visible) return null

  function handleDismiss() {
    try {
      window.localStorage.setItem(storageKey, '1')
    } catch {
      // localStorage no disponible (modo privado, etc.) — el cierre no persiste.
    }
    setDismissed(true)
  }

  return (
    <div className="holiday-modal-overlay" onClick={handleDismiss}>
      <div
        className="holiday-modal"
        role="dialog"
        aria-modal="true"
        aria-label="promoción de navidad"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="holiday-modal__close"
          aria-label="cerrar aviso"
          onClick={handleDismiss}
        >
          ×
        </button>
        <p className="holiday-modal__eyebrow">promoción de navidad</p>
        <h2 className="holiday-modal__title">regalos de navidad, hechos a tu medida</h2>
        <p className="holiday-modal__text">
          <strong>juguetes personalizados</strong> y <strong>regalos de navidad para empresas</strong>, impresos
          en 3d — cotiza antes de que se acabe el tiempo de entrega.
        </p>
        <a
          className="holiday-modal__cta"
          href={buildWhatsappLink('Hola! Quiero cotizar juguetes o regalos de navidad para mi empresa.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          cotiza por whatsapp →
        </a>
      </div>
    </div>
  )
}

export default HolidayModal
