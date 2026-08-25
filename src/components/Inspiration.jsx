import { useEffect, useRef, useState } from 'react'
import { buildWhatsappLink } from '../data/contact'
import imgMakerWorld from '../assets/paginas/makerworld.png'
import imgPrintables from '../assets/paginas/printables.png'
import imgThingiverse from '../assets/paginas/thingiverse.png'
import imgCults from '../assets/paginas/cults.png'

const platforms = [
  { id: 'makerworld', label: 'MakerWorld', img: imgMakerWorld, url: 'https://makerworld.com' },
  { id: 'printables', label: 'Printables', img: imgPrintables, url: 'https://www.printables.com' },
  { id: 'thingiverse', label: 'Thingiverse', img: imgThingiverse, url: 'https://www.thingiverse.com' },
  { id: 'cults', label: 'Cults3D', img: imgCults, url: 'https://cults3d.com' },
]

function PlatformModal({ platform, onClose }) {
  const [link, setLink] = useState('')
  const [sent, setSent] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleSend = (e) => {
    e.preventDefault()
    if (!link.trim()) return
    window.open(buildWhatsappLink(`Hola! Me interesa que me coticen este modelo: ${link.trim()}`), '_blank', 'noopener')
    setSent(true)
    setLink('')
    setTimeout(() => setSent(false), 3000)
  }

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="platform-modal" onClick={handleBackdrop} role="dialog" aria-modal="true">
      <div className="platform-modal__panel">

        <button className="platform-modal__close" onClick={onClose} aria-label="cerrar">✕</button>

        {/* Logo + nombre */}
        <div className="platform-modal__hero">
          <img src={platform.img} alt={platform.label} className="platform-modal__logo" />
          <h2 className="platform-modal__name">{platform.label.toLowerCase()}</h2>
          <p className="platform-modal__hint">
            abre el catálogo, encuentra lo que te gusta,<br />
            copia el link y pégalo abajo para cotizar.
          </p>
          <a
            className="platform-modal__open-btn"
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            explorar {platform.label.toLowerCase()} →
          </a>
        </div>

        {/* Divider */}
        <div className="platform-modal__divider" />

        {/* Formulario de cotización */}
        <div className="platform-modal__quote">
          <p className="platform-modal__quote-title">
            ¿te interesó algo?
          </p>
          <p className="platform-modal__quote-sub">
            envíanos el link que quieres que te cotizemos e imprimamos
          </p>
          <form className="platform-modal__form" onSubmit={handleSend}>
            <input
              ref={inputRef}
              className="platform-modal__input"
              type="url"
              placeholder="https://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              autoFocus
            />
            <button className="platform-modal__send" type="submit">
              {sent ? '✓ enviado' : 'cotizar →'}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

function Inspiration() {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const wordmarkRef = useRef(null)

  useEffect(() => {
    const el = wordmarkRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section
        className={`inspiration${visible ? ' inspiration--visible' : ''}`}
        id="inspiracion"
        aria-labelledby="inspiration-title"
      >
        <div className="inspiration__inner">
          <h2 className="inspiration__title" id="inspiration-title">
            ¿tienes una idea en mente pero no sabes cómo hacerla realidad?
          </h2>
          <p className="inspiration__copy">
            inspírate en los catálogos de modelos 3D más populares del mundo.
            <span className="inspiration__copy-extra"><br />encuentra figuras, accesorios y objetos únicos… ¡nosotros los imprimimos por ti!</span>
          </p>
          <ul className="inspiration__platforms">
            {platforms.map((p) => (
              <li key={p.id}>
                <button
                  className={`platform-card platform-card--${p.id}`}
                  onClick={() => setActive(p)}
                  aria-label={`Explorar ${p.label}`}
                >
                  <img src={p.img} alt={p.label} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <span ref={wordmarkRef} className="inspiration__wordmark" aria-hidden="true">print</span>
      </section>

      {active && <PlatformModal platform={active} onClose={() => setActive(null)} />}
    </>
  )
}

export default Inspiration
