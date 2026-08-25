import { useState } from 'react'
import { Link } from 'react-router-dom'
import navbarLogo from '../assets/inicio/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <Link className="navbar__brand" to="/" onClick={closeMenu}>
        <img src={navbarLogo} alt="Logo de orquidea print" />
        <span>orquidea print</span>
      </Link>
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
        <Link to="/" onClick={closeMenu}>inicio</Link>
        <Link to="/hogar" onClick={closeMenu}>hogar</Link>
        <Link to="/marketing" onClick={closeMenu}>marketing</Link>
        <Link to="/juguetes" onClick={closeMenu}>juguetes</Link>
      </nav>
    </header>
  )
}

export default Navbar
