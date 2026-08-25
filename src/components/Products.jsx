import { Link } from 'react-router-dom'
import { lines } from '../data/productLines'
import MediaSlot from './MediaSlot'

function LineCard({ line }) {
  return (
    <Link to={line.path} className={`line-card line-card--${line.theme}`} style={{ '--line-accent': line.accent }}>
      <MediaSlot image={line.cover ?? line.images[0]} className="line-card__cover" />
      <div className="line-card__body">
        <h3 className="line-card__title">{line.title}</h3>
        <p className="line-card__tagline">{line.tagline}</p>
        <span className="line-card__link">ver productos →</span>
      </div>
    </Link>
  )
}

function Products() {
  return (
    <section className="products" id="productos" aria-label="productos">
      <div className="products__chooser">
        <h2 className="products__chooser-title">elige tu línea</h2>
        <div className="products__chooser-grid">
          {lines.map((line) => (
            <LineCard key={line.id} line={line} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
