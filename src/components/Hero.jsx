import { useEffect, useRef } from 'react'
import heroVideo from '../assets/inicio/inicio.mp4'

function Hero() {
  const videoRef = useRef(null)

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
    </section>
  )
}

export default Hero
