import blackKeychain from '../assets/descripcion/black_kaychain.png'
import whiteKeychain from '../assets/descripcion/white_keychain_key.png'
import flowerLogo from '../assets/descripcion/logo.png'

const products = [
  {
    title: 'llaveros / NFC / QR',
    image: blackKeychain,
    alt: 'Llaveros personalizados con tecnología NFC y QR',
  },
  {
    title: 'pines',
    image: flowerLogo,
    alt: 'Pines personalizados con identidad de marca',
  },
  {
    title: 'tarjetas / gafetes',
    image: whiteKeychain,
    alt: 'Tarjetas y gafetes corporativos personalizados',
  },
]

function Products() {
  return (
    <section className="products" aria-labelledby="productos-title">
      <div className="products__inner">
        <h2 className="products__title" id="productos-title">
          productos
        </h2>
        <div className="products__grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
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
