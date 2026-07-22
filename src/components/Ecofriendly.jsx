import leafIcon from '../assets/leafes.png'
import ecoMasorca from '../assets/ecofriendly/masorca.png'
import ecoColores from '../assets/ecofriendly/colores.png'
import MediaSlot from './MediaSlot'

const rows = [
  {
    id: 'materia-prima',
    layout: 'photo-right',
    image: { src: ecoMasorca, alt: 'Filamento PLA rosa junto a una mazorca de maíz' },
    text: (
      <>
        utilizamos pla, un bioplástico elaborado a partir de materias primas vegetales como{' '}
        <strong>maíz, caña de azúcar, yuca, remolacha y otros cultivos ricos en almidón.</strong> estos
        azúcares se fermentan para producir ácido láctico, que luego se transforma en un material resistente,
        seguro y no tóxico.
      </>
    ),
  },
  {
    id: 'impacto',
    layout: 'photo-left',
    image: { src: ecoColores, alt: 'Bobinas de filamento PLA de distintos colores' },
    text: (
      <>
        al ser de origen vegetal, el <strong>pla es biodegradable y compostable</strong> en ambientes
        controlados, lo que reduce drásticamente el impacto ambiental frente a los plásticos derivados del
        petróleo. y gracias a la impresión 3d <strong>producimos solo lo necesario, minimizando desperdicios y
        cuidando el planeta con cada pieza que fabricamos.</strong>
      </>
    ),
  },
]

function Ecofriendly() {
  return (
    <section className="ecofriendly" aria-labelledby="eco-title">
      <div className="ecofriendly__inner">
        <div className="ecofriendly__head">
          <h2 className="ecofriendly__head-title" id="eco-title">
            ecofriendly
            <img src={leafIcon} alt="" />
          </h2>
          <p className="ecofriendly__lead">
            en orquídea print somos ecofriendly <strong>desde el origen.</strong>
          </p>
        </div>

        {rows.map((row) => (
          <div key={row.id} className={`eco-row eco-row--${row.layout}`}>
            <MediaSlot image={row.image} className="eco-row__media" />
            <p className="eco-row__text">{row.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ecofriendly
