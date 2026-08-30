import heroVideo from '../assets/inicio/inicio.mp4'

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

      <div className="hero__content">
        <h1 className="sr-only">
          Impresión 3D en Quito y todo Ecuador — llaveros personalizados, regalos corporativos y más | orquídea print
        </h1>
        <p className="hero__title">
          damos <br /> forma a <br /> tu imaginación
        </p>
      </div>
    </section>
  )
}

export default Hero
