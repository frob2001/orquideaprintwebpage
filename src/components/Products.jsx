import productKeychains from '../assets/productos/llaveros.png'
import productPins from '../assets/productos/pines.png'
import productBadges from '../assets/productos/gafete.png'

const products = [
  {
    slug: 'llaveros',
    title: 'llaveros/NFC/QR',
    image: productKeychains,
    alt: 'Llaveros personalizados con QR y NFC',
  },
  {
    slug: 'pines',
    title: 'pines',
    image: productPins,
    alt: 'Pines personalizados de orquidea print',
  },
  {
    slug: 'gafetes',
    title: 'tarjetas/gafetes',
    image: productBadges,
    alt: 'Tarjetas y gafetes corporativos personalizados',
  },
]

function Products() {
  return (
    <section className="products" id="productos" aria-labelledby="productos-title">
      <div className="products__inner">
        <h2 className="products__title" id="productos-title">
          productos
        </h2>

        <div className="products__grid">
          {products.map((product) => (
            <article className={`product-card product-card--${product.slug}`} key={product.slug}>
              <div className="product-card__image">
                <img src={product.image} alt={product.alt} />
              </div>
              <p className="product-card__label">{product.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
