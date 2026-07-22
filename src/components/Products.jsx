import logo from '../assets/inicio/logo.png'
import productBadges from '../assets/productos/gafete.png'
import productKeychains from '../assets/productos/llaveros.png'
import productPins from '../assets/productos/pines.png'
import hogarCathouse1 from '../assets/productos/hogar/cathouse/1.webp'
import hogarCathouse2 from '../assets/productos/hogar/cathouse/2.webp'
import hogarOrganizador1 from '../assets/productos/hogar/organizador/1.webp'
import hogarOrganizador2 from '../assets/productos/hogar/organizador/2.webp'
import hogarPortavasos1 from '../assets/productos/hogar/portavasos/1.webp'
import hogarPortavasos2 from '../assets/productos/hogar/portavasos/2.webp'
import hogarPortavasos3 from '../assets/productos/hogar/portavasos/3.webp'
import MediaSlot from './MediaSlot'

const lines = [
  {
    id: 'hogar',
    theme: 'light',
    accent: '#a02168',
    title: 'hogar',
    description: 'organizadores y complementos minimalistas para tus espacios — piezas funcionales que ordenan y decoran tu casa.',
    images: [
      { srcs: [hogarCathouse1, hogarCathouse2], alt: 'Casa para gato impresa en 3D' },
      { srcs: [hogarOrganizador1, hogarOrganizador2], alt: 'Organizador de baño impreso en 3D' },
      { srcs: [hogarPortavasos1, hogarPortavasos2, hogarPortavasos3], alt: 'Portavasos con forma de hoja impresos en 3D' },
    ],
    items: [
      'portallaves de pared.',
      'saleros, pimenteros y servilleteros.',
      'organizadores de cubiertos y hueveras.',
      'soportes para manteles y posavasos.',
      'macetas y regaderas modernas.',
    ],
    helper: '¿buscas algo más para tu casa? creamos el diseño que nos pidas.',
  },
  {
    id: 'negocios',
    theme: 'dark',
    accent: '#ffffff',
    title: 'negocios',
    description: 'artículos corporativos e interactivos con tecnología qr y nfc que llevan tu marca a otro nivel.',
    images: [
      { src: productBadges, alt: 'Gafetes interactivos con QR y NFC' },
      { src: productKeychains, alt: 'Llaveros con QR y NFC' },
      { src: productPins, alt: 'Pines con logotipo' },
    ],
    items: [
      'porta celulares de escritorio con qr/nfc.',
      'llaveros y pines con tu logotipo.',
      'gafetes interactivos para eventos.',
    ],
    helper: '¿tu negocio necesita otra idea? cuéntanosla y la fabricamos.',
  },
  {
    id: 'personalizados',
    theme: 'light',
    accent: '#d52574',
    title: 'personalizados',
    description: 'tus figuras, pasatiempos y proyectos cobrando vida — desde coleccionables hasta prototipos únicos.',
    images: [
      { placeholder: 'figuras coleccionables' },
      { placeholder: 'litofanías' },
      { placeholder: 'prototipos y piezas' },
    ],
    items: [
      'figuras coleccionables (cine, series, anime, videojuegos).',
      'litofanías (fotos impresas en 3d que revelan luz).',
      'prototipos y piezas mecánicas.',
    ],
    helper: 'si tienes un diseño propio o una sugerencia diferente, también lo hacemos.',
  },
]

function ProductLine({ id, theme, accent, title, description, images, items, helper }) {
  return (
    <div id={id} className={`product-line product-line--${theme} product-line--${id}`} style={{ '--line-accent': accent }}>
      <div className="product-line__inner">
        <div className="product-line__eyebrow">
          <span
            className="product-line__eyebrow-icon"
            style={{ WebkitMaskImage: `url(${logo})`, maskImage: `url(${logo})` }}
            aria-hidden="true"
          />
          <span className="product-line__eyebrow-label">línea</span>
        </div>
        <h3 className="product-line__title">{title}</h3>
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
        <a className="product-line__helper" href="#contacto">{helper}</a>
      </div>
    </div>
  )
}

function Products() {
  return (
    <section className="products" id="productos" aria-label="productos">
      {lines.map((line) => (
        <ProductLine key={line.id} {...line} />
      ))}
    </section>
  )
}

export default Products
