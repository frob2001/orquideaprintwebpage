import { useState } from 'react'
import navbarLogo from '../assets/inicio/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__brand">
        <img src={navbarLogo} alt="Logo de orquidea print" />
        <span>orquidea print</span>
      </div>
      <button
        className="navbar__toggle"
        type="button"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="navbar-links"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="navbar__links" id="navbar-links">
        <a href="#inicio">inicio</a>
        <a href="#productos">productos</a>
        <a href="#quienes-somos">&iquest;quienes somos?</a>
        <a href="#contacto">contactanos</a>
      </nav>
    </header>
  )
}

export default Navbar