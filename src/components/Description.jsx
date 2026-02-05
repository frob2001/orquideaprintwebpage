import descriptionLogo from '../assets/descripcion/logo.png'
import blackKeychain from '../assets/descripcion/black_kaychain.png'
import whiteKeychain from '../assets/descripcion/white_keychain_key.png'

function Description() {
  return (
    <section className="description" id="productos">
      <div className="description__logo" aria-hidden="true">
        <img src={descriptionLogo} alt="Símbolo floral de orquídea print" />
      </div>
      <div className="description__text">
        <p>
          En <strong>orquídea print</strong> convertimos tus ideas en objetos reales.
        </p>
        <p>
          Creamos desde <strong>figuras, juguetes y utensilios</strong> hasta productos empresariales como{' '}
          <strong>llaveros</strong>, <strong>pines</strong>,{' '}
          <strong>señaléticas y tarjetas de presentación</strong>, totalmente personalizadas y con la opción de
          integrar <strong>tecnología NFC</strong>.
        </p>
      </div>
      <div className="description__keychains" aria-hidden="true">
        <img src={whiteKeychain} alt="Llavero claro" className="keychain keychain--top" />
        <img src={blackKeychain} alt="Llavero oscuro" className="keychain keychain--bottom" />
      </div>
    </section>
  )
}

export default Description
