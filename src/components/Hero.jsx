import heroVideo from '../assets/inicio/Articulated Dragon 3D Print Time Lapse with Closeup Lens.mp4'
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
