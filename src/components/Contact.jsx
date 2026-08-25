import { buildWhatsappLink } from '../data/contact'

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="#25D366" />
      <path
        d="M22.6 9.4a8.9 8.9 0 0 0-14.1 10.7L7 24.5l4.5-1.4a8.9 8.9 0 0 0 11.1-13.7Zm-6.6 13.2a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.7.8.8-2.6-.2-.3a7.4 7.4 0 1 1 6.2 3.3Zm4.1-5.5c-.2-.1-1.3-.7-1.6-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.4c.1.2 1.7 2.7 4.2 3.7.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1Z"
        fill="#fff"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="url(#ig-grad)" />
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#D6249F" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="16" height="16" rx="5" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="4" stroke="#fff" strokeWidth="1.6" />
      <circle cx="21" cy="11" r="1.1" fill="#fff" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#0A66C2" />
      <path d="M9 13h3v10H9V13Zm1.5-4.8a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM15 13h2.9v1.4h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.66 2 3.66 4.6V23h-3v-4.9c0-1.2-.02-2.7-1.65-2.7-1.65 0-1.9 1.3-1.9 2.6V23h-3V13Z" fill="#fff" />
    </svg>
  )
}

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: buildWhatsappLink('Hola! Quiero más información sobre orquídea print.'),
    Icon: WhatsappIcon,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    Icon: InstagramIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    Icon: LinkedinIcon,
  },
]

function Contact() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="contact__inner">
        <h2 className="contact__title" id="contact-title">¡hablemos!</h2>
        <p className="contact__copy">
          en orquídea print nos encanta crear, pero nos encanta aún más conectar contigo. ¿tienes una idea, un
          proyecto o simplemente quieres saber más sobre nuestras impresiones 3d ecofriendly? ¡escríbenos! estamos
          siempre listos para ayudarte.
        </p>
        <ul className="contact__channels">
          {channels.map((channel) => (
            <li key={channel.id}>
              <a className="channel-card" href={channel.href} target="_blank" rel="noopener noreferrer" aria-label={channel.label}>
                <channel.Icon />
                <span>{channel.label.toLowerCase()}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
