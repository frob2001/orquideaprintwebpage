import { FaWhatsapp } from 'react-icons/fa6'
import { buildWhatsappLink } from '../data/contact'
import { trackContact } from '../data/track'

function WhatsappFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsappLink('¡Hola! Quiero más información sobre orquídea print.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      onClick={() => trackContact('whatsapp', 'float')}
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

export default WhatsappFloat
