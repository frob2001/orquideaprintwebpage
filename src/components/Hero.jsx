import heroVideo from '../assets/inicio/inicio.MOV'
import Navbar from './Navbar'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero__gradient" aria-hidden="true" />

      <Navbar />

      <div className="hero__content">
        <p className="hero__title">
          damos <br /> forma a <br /> tu imaginación.
        </p>
      </div>
    </section>
  )
}

export default Hero
