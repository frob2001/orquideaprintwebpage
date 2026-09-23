import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { WHATSAPP_NUMBER } from '../data/contact'
import './PrivacyPolicy.css'

const LAST_UPDATE = '23 de septiembre de 2026'
const PRIVACY_EMAIL = 'contacto@orquideaprint.com'

function PrivacyPolicy() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDesc = document.querySelector('meta[name="description"]')
    const previousDesc = metaDesc?.getAttribute('content')

    document.title = 'Política de Privacidad — orquídea print'
    metaDesc?.setAttribute(
      'content',
      'Política de privacidad de orquídea print: qué datos recopilamos, para qué los usamos, con quién los compartimos y tus derechos según la Ley Orgánica de Protección de Datos Personales de Ecuador.',
    )
    window.scrollTo(0, 0)

    return () => {
      document.title = previousTitle
      if (previousDesc) metaDesc?.setAttribute('content', previousDesc)
    }
  }, [])

  return (
    <div className="privacy-page">
      <article className="privacy">
        <header className="privacy__header">
          <h1 className="privacy__title">Política de Privacidad</h1>
          <p className="privacy__updated">Última actualización: {LAST_UPDATE}</p>
        </header>

        <p className="privacy__intro">
          En <strong>orquídea print</strong> respetamos tu privacidad y nos comprometemos a proteger los datos
          personales que compartes con nosotros. Esta política explica de forma clara qué información recopilamos,
          cómo la usamos, con quién la compartimos y qué derechos tienes sobre ella. Al usar nuestro sitio web
          <a href="https://orquideaprint.com"> orquideaprint.com</a> o contactarnos por nuestros canales, aceptas
          las prácticas descritas en este documento.
        </p>

        <section className="privacy__section">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de tus datos personales es <strong>orquídea print</strong>, negocio de
            impresión 3D personalizada con base en Quito, Ecuador, y envíos a todo el país. Para cualquier consulta
            relacionada con esta política o con tus datos, puedes escribirnos a{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> o por WhatsApp al{' '}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              +{WHATSAPP_NUMBER}
            </a>
            .
          </p>
        </section>

        <section className="privacy__section">
          <h2>2. Qué datos recopilamos</h2>
          <p>Recopilamos únicamente los datos necesarios para atenderte y mejorar nuestro servicio:</p>
          <ul>
            <li>
              <strong>Datos que nos entregas voluntariamente:</strong> cuando nos escribes por WhatsApp, redes
              sociales o correo para cotizar o consultar, podemos recibir tu nombre, número de teléfono, correo,
              los mensajes que envías y los archivos o diseños 3D que compartas para tu pedido.
            </li>
            <li>
              <strong>Datos de interacción del sitio:</strong> cuando haces clic en nuestros botones de contacto
              (WhatsApp, Instagram, LinkedIn), registramos de forma técnica el canal y botón usado, la fecha y hora,
              tu dirección IP aproximada y el país de origen. Esto nos ayuda a entender qué canales prefieren
              nuestros clientes y a medir el interés en cada línea de producto.
            </li>
            <li>
              <strong>Datos técnicos de navegación:</strong> nuestro proveedor de infraestructura (Cloudflare) puede
              procesar datos técnicos básicos (IP, tipo de dispositivo, navegador) con fines de seguridad,
              prevención de abuso y rendimiento del sitio.
            </li>
          </ul>
          <p>
            <strong>No recopilamos datos sensibles</strong> (salud, origen étnico, orientación, datos financieros
            de tarjetas, etc.) ni te pedimos crear cuentas ni ingresar contraseñas en este sitio.
          </p>
        </section>

        <section className="privacy__section">
          <h2>3. Para qué usamos tus datos</h2>
          <ul>
            <li>Responder tus consultas y elaborar cotizaciones personalizadas.</li>
            <li>Producir, gestionar y entregar los pedidos que nos encargues.</li>
            <li>Darte seguimiento y soporte antes, durante y después de tu compra.</li>
            <li>Entender el interés en nuestros productos y mejorar el sitio y nuestro servicio.</li>
            <li>Cumplir obligaciones legales y prevenir fraudes o usos indebidos.</li>
          </ul>
          <p>
            <strong>Nunca vendemos ni alquilamos tus datos personales.</strong> Tampoco los usamos para enviarte
            publicidad de terceros.
          </p>
        </section>

        <section className="privacy__section">
          <h2>4. Base legal del tratamiento</h2>
          <p>
            Tratamos tus datos con base en tu <strong>consentimiento</strong> (al contactarnos voluntariamente), en
            la <strong>ejecución de la relación comercial</strong> que solicitas (tu pedido o cotización), en
            nuestro <strong>interés legítimo</strong> de operar y mejorar el negocio, y en el{' '}
            <strong>cumplimiento de obligaciones legales</strong> aplicables.
          </p>
        </section>

        <section className="privacy__section">
          <h2>5. Con quién compartimos tus datos</h2>
          <p>
            Solo compartimos datos con proveedores que nos permiten operar, y únicamente lo necesario para prestar
            el servicio:
          </p>
          <ul>
            <li>
              <strong>WhatsApp / Meta:</strong> cuando eliges contactarnos por esos canales, tu comunicación se rige
              también por sus propias políticas de privacidad.
            </li>
            <li>
              <strong>Cloudflare:</strong> proveedor de hosting, CDN y seguridad de nuestro sitio.
            </li>
            <li>
              <strong>Servicios de envío:</strong> cuando corresponda, para hacerte llegar tu pedido compartimos los
              datos de entrega necesarios (nombre, dirección, teléfono).
            </li>
            <li>
              <strong>Autoridades competentes:</strong> si la ley lo exige mediante requerimiento válido.
            </li>
          </ul>
        </section>

        <section className="privacy__section">
          <h2>6. Cuánto tiempo conservamos tus datos</h2>
          <p>
            Conservamos tus datos solo durante el tiempo necesario para cumplir con los fines descritos: mientras
            dure nuestra relación comercial y, después, durante el plazo que exijan las obligaciones legales,
            contables o tributarias aplicables. Los registros técnicos de interacción se conservan por periodos
            limitados con fines estadísticos y de seguridad. Cuando ya no son necesarios, se eliminan o anonimizan.
          </p>
        </section>

        <section className="privacy__section">
          <h2>7. Tus derechos</h2>
          <p>
            De acuerdo con la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador (LOPDP)</strong>,
            tienes derecho a:
          </p>
          <ul>
            <li><strong>Acceder</strong> a los datos personales que tenemos sobre ti.</li>
            <li><strong>Rectificar</strong> datos inexactos o incompletos.</li>
            <li><strong>Eliminar</strong> tus datos cuando ya no sean necesarios o retires tu consentimiento.</li>
            <li><strong>Oponerte</strong> o solicitar la <strong>limitación</strong> de ciertos tratamientos.</li>
            <li><strong>Portabilidad</strong> de tus datos, cuando sea técnicamente posible.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, escríbenos a{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>. Responderemos en los plazos que establece la
            ley. Si consideras que no atendimos adecuadamente tu solicitud, puedes acudir a la{' '}
            <strong>Superintendencia de Protección de Datos Personales del Ecuador</strong>.
          </p>
        </section>

        <section className="privacy__section">
          <h2>8. Cookies y tecnologías similares</h2>
          <p>
            Este sitio no utiliza cookies publicitarias ni de seguimiento de terceros. Solo empleamos las
            tecnologías estrictamente necesarias para que el sitio funcione, se mantenga seguro y podamos medir de
            forma básica el interés en nuestros canales de contacto. Puedes configurar tu navegador para bloquear o
            eliminar cookies en cualquier momento.
          </p>
        </section>

        <section className="privacy__section">
          <h2>9. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no
            autorizados, pérdida o alteración. Ninguna transmisión por internet es 100 % segura, pero trabajamos
            con proveedores confiables y limitamos el acceso a la información al mínimo necesario.
          </p>
        </section>

        <section className="privacy__section">
          <h2>10. Menores de edad</h2>
          <p>
            Nuestro sitio está dirigido a un público general. No recopilamos de forma consciente datos de menores de
            edad sin el consentimiento de su representante legal. Si crees que un menor nos ha proporcionado datos,
            contáctanos y los eliminaremos.
          </p>
        </section>

        <section className="privacy__section">
          <h2>11. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios en nuestras prácticas o en la normativa vigente.
            Publicaremos siempre la versión más reciente en esta página, indicando la fecha de última actualización.
          </p>
        </section>

        <section className="privacy__section privacy__contact">
          <h2>12. Contacto</h2>
          <p>
            ¿Dudas sobre tu privacidad o tus datos? Escríbenos a{' '}
            <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> o por WhatsApp al{' '}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              +{WHATSAPP_NUMBER}
            </a>
            . Estamos para ayudarte.
          </p>
        </section>

        <p className="privacy__back">
          <Link to="/#inicio">← Volver al inicio</Link>
        </p>
      </article>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
