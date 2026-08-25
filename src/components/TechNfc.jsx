import logo from '../assets/inicio/logo.png'
import nfcImage from '../assets/nfc.png'

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 2.5V6M15 2.5V6M9 18V21.5M15 18V21.5M2.5 9H6M2.5 15H6M18 9H21.5M18 15H21.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function TechNfc() {
  return (
    <section className="tech-nfc" aria-labelledby="nfc-title">
      <span className="tech-nfc__watermark" aria-hidden="true">nfc</span>
      <div className="tech-nfc__inner">
        <div className="tech-nfc__copy">
          <div className="tech-nfc__eyebrow">
            <img src={logo} alt="" />
            <h2 id="nfc-title">tecnología nfc</h2>
          </div>
          <p>
            integramos tecnología nfc directamente dentro de impresiones 3d, permitiendo que cualquier objeto
            impreso actúe como un punto de contacto inteligente. simplemente acerca tu smartphone y el objeto
            desbloqueará acciones personalizadas: abrir enlaces, mostrar información, validar accesos, activar
            automatizaciones o conectar con tu marca.
          </p>
        </div>
        <div className="tech-nfc__visual">
          <div className="tech-nfc__photo">
            <img src={nfcImage} alt="Celular acercándose a una pieza impresa en 3D con punto NFC integrado" />
          </div>
          <div className="tech-nfc__chip">
            <span className="tech-nfc__chip-icon">
              <ChipIcon />
            </span>
            <p>un pequeño chip nfc integrado convierte cualquier pieza en un objeto conectado.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechNfc
