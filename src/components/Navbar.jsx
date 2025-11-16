import navbarLogo from '../assets/inicio/logo.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <img src={navbarLogo} alt="Logo de orquidea print" />
        <span>orquidea print</span>
      </div>
      <nav className="navbar__links">
        <a href="#inicio">inicio</a>
        <a href="#productos">productos</a>
        <a href="#quienes-somos">¿quiénes somos?</a>
        <a href="#contacto">contáctanos</a>
      </nav>
    </header>
  )
}

export default Navbar
