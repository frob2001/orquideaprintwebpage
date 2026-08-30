import { FaWhatsapp } from 'react-icons/fa6'
import { buildWhatsappLink } from '../data/contact'

function WhatsappFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsappLink('Hola! Quiero más información sobre orquídea print.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

export default WhatsappFloat
