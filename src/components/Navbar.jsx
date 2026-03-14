import { useState } from 'react'
import navbarLogo from '../assets/inicio/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <a className="navbar__brand" href="#inicio" onClick={closeMenu}>
        <img src={navbarLogo} alt="Logo de orquidea print" />
        <span>orquidea print</span>
      </a>
      <button
        className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
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
        <a href="#quienes-somos" onClick={closeMenu}>inicio</a>
        <a href="#productos" onClick={closeMenu}>productos</a>
        <a href="#quienes-somos" onClick={closeMenu}>&iquest;quienes somos?</a>
        <a href="#contacto" onClick={closeMenu}>contactanos</a>
      </nav>
    </header>
  )
}

export default Navbar
