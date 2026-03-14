import { useEffect, useRef, useState } from 'react'
import descriptionLogo from '../assets/descripcion/logo.png'
import blackKeychain from '../assets/descripcion/black_kaychain.png'
import whiteKeychain from '../assets/descripcion/white_keychain_key.png'

function Description() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`description ${isVisible ? 'description--visible' : ''}`}
      id="quienes-somos"
    >
      <div className="description__logo" aria-hidden="true">
        <img src={descriptionLogo} alt="" />
      </div>

      <div className="description__inner">
        <div className="description__text">
          <p className="description__intro">
            En <strong>orqu&iacute;dea print</strong> convertimos tus ideas en objetos reales.
          </p>
          <p className="description__copy">
            Creamos desde <strong>figuras, juguetes y utensilios</strong> hasta productos empresariales como{' '}
            <strong>llaveros, pines, se&ntilde;al&eacute;ticas y tarjetas de presentaci&oacute;n</strong>,
            totalmente personalizadas y con la opci&oacute;n de integrar <strong>tecnolog&iacute;a NFC</strong>.
          </p>
        </div>
      </div>

      <div className="description__keychains" aria-hidden="true">
        <img src={whiteKeychain} alt="" className="keychain keychain--top" />
        <img src={blackKeychain} alt="" className="keychain keychain--bottom" />
      </div>
    </section>
  )
}

export default Description
