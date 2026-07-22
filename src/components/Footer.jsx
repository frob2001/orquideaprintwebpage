import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import logo from '../assets/inicio/logo.png'

const waHref = `https://wa.me/?text=${encodeURIComponent('Hola! Quiero más información sobre orquídea print.')}`

const socialLinks = [
  { id: 'whatsapp', label: 'WhatsApp', href: waHref, Icon: FaWhatsapp },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com', Icon: FaInstagram },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', Icon: FaLinkedin },
]

const navLinks = [
  { label: 'inicio', href: '#inicio' },
  { label: 'productos', href: '#productos' },
  { label: '¿quiénes somos?', href: '#quienes-somos' },
  { label: 'contáctanos', href: '#contacto' },
]

const productLinks = [
  { label: 'hogar', href: '#hogar' },
  { label: 'negocios', href: '#negocios' },
  { label: 'personalizados', href: '#personalizados' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__brand-mark" href="#inicio">
              <img src={logo} alt="Logo de orquídea print" />
              <span>orquídea print</span>
            </a>
            <p>
              impresión 3d personalizada y ecofriendly — desde figuras, juguetes y utensilios hasta llaveros,
              pines y soluciones para tu negocio con tecnología nfc.
            </p>
            <ul className="footer__social">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>navegación</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>productos</h3>
            <ul>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>contacto</h3>
            <ul>
              {socialLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} target="_blank" rel="noopener noreferrer">{label.toLowerCase()}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} orquídea print. todos los derechos reservados.</p>
          <p className="footer__tag">impresión 3d ecofriendly, hecha con pla de origen vegetal.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
