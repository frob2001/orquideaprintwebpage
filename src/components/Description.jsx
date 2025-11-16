import descriptionLogo from '../assets/descripcion/logo.png'
import blackKeychain from '../assets/descripcion/black_kaychain.png'
import whiteKeychain from '../assets/descripcion/white_keychain_key.png'

function Description() {
  return (
    <section className="description" id="productos">
      <div className="description__logo" aria-hidden="true">
        <img src={descriptionLogo} alt="Símbolo floral de orquidea print" />
      </div>
      <div className="description__text">
        <p className="description__eyebrow">productos</p>
        <p>
          En orquídea print convertimos tus ideas en objetos reales.
        </p>
        <p>
          Creamos desde figuras, juguetes y utensilios hasta productos empresariales como llaveros, pines,
          señaléticas y tarjetas de presentación, totalmente personalizadas y con la opción de integrar tecnología
          NFC.
        </p>
      </div>
      <div className="description__keychains" aria-hidden="true">
        <img src={blackKeychain} alt="Llavero oscuro" className="keychain keychain--top" />
        <img src={whiteKeychain} alt="Llavero claro" className="keychain keychain--bottom" />
      </div>
    </section>
  )
}

export default Description
