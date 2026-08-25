import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { lines } from '../data/productLines'
import MediaSlot from '../components/MediaSlot'
import Footer from '../components/Footer'

function LineaPage({ lineId }) {
  const line = lines.find((l) => l.id === lineId)

  useEffect(() => {
    if (!line) return undefined
    const metaDesc = document.querySelector('meta[name="description"]')
    const previousTitle = document.title
    const previousDesc = metaDesc?.getAttribute('content')

    document.title = line.metaTitle
    metaDesc?.setAttribute('content', line.metaDescription)
    window.scrollTo(0, 0)

    return () => {
      document.title = previousTitle
      if (previousDesc) metaDesc?.setAttribute('content', previousDesc)
    }
  }, [line])

  if (!line) return null

  const { theme, id, accent, title, description, images, items, helper, cta } = line

  return (
    <div className="linea-page">
      <div className={`product-line product-line--${theme} product-line--${id}`} style={{ '--line-accent': accent }}>
        <div className="product-line__inner">
          <h1 className="product-line__title">{title}</h1>
          <p className="product-line__desc">{description}</p>
          <div className="product-line__grid">
            {images.map((image, i) => (
              <MediaSlot key={i} image={image} className="product-slot" />
            ))}
          </div>
          <ul className="product-line__list">
            {items.map((item) => (
              <li key={item}>
                <span className="product-line__bullet" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {cta && (
            <a className="product-line__cta" href={cta.href} target="_blank" rel="noopener noreferrer">
              <span className="product-line__cta-title">{cta.title}</span>
              <span className="product-line__cta-text">{cta.text}</span>
              <span className="product-line__cta-button">{cta.buttonLabel}</span>
            </a>
          )}

          <Link className="product-line__helper" to="/#contacto">{helper}</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LineaPage
