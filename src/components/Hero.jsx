import { useEffect, useRef } from 'react'
import heroVideo from '../assets/inicio/inicio.mp4'
import { buildWhatsappLink } from '../data/contact'
import { isHolidayPromoActive } from '../data/holidayPromo'

function Hero() {
  const videoRef = useRef(null)
  const showHolidayPromo = isHolidayPromoActive()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // React no siempre setea el atributo `muted` en el DOM; sin muted real
    // Chrome/Safari en móvil bloquean el autoplay. Lo forzamos por propiedad.
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')

    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Si el navegador aún lo bloquea, reintenta al primer toque/scroll.
          const kick = () => {
            v.play().catch(() => {})
            document.removeEventListener('touchstart', kick)
            document.removeEventListener('click', kick)
            document.removeEventListener('scroll', kick)
          }
          document.addEventListener('touchstart', kick, { once: true, passive: true })
          document.addEventListener('click', kick, { once: true })
          document.addEventListener('scroll', kick, { once: true, passive: true })
        })
      }
    }

    tryPlay()
    // Reintenta cuando el video ya tiene datos y al volver a la pestaña.
    v.addEventListener('loadeddata', tryPlay)
    v.addEventListener('canplay', tryPlay)
    const onVisible = () => { if (!document.hidden) tryPlay() }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      v.removeEventListener('loadeddata', tryPlay)
      v.removeEventListener('canplay', tryPlay)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return (
    <section className="hero" id="inicio">
      <video
        ref={videoRef}
        className="hero__video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero__gradient" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="sr-only">
          Impresión 3D en Quito y todo Ecuador — llaveros personalizados, regalos corporativos y más | orquídea print
        </h1>
        <p className="hero__title">
          damos <br /> forma a <br /> tu imaginación
        </p>
      </div>

      {showHolidayPromo && (
        <div className="hero__holiday-promo">
          <div className="hero__holiday-promo-card">
            <p className="hero__holiday-promo-text">
              🎄 <strong>juguetes personalizados</strong> y <strong>regalos de navidad para tu empresa</strong>,
              impresos en 3d.
            </p>
            <a
              className="hero__holiday-promo-cta"
              href={buildWhatsappLink('Hola! Quiero cotizar juguetes personalizados o regalos de navidad para mi empresa.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              cotiza tu regalo →
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
