import { useEffect, useState } from 'react'
import logo from '../assets/inicio/logo.png'

const MIN_DISPLAY = 1000

function LoadingScreen({ onDone }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const start = Date.now()

    const finish = () => {
      const elapsed = Date.now() - start
      const wait = Math.max(0, MIN_DISPLAY - elapsed)
      setTimeout(() => {
        setHiding(true)
        setTimeout(onDone, 650)
      }, wait)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
      return () => window.removeEventListener('load', finish)
    }
  }, [onDone])

  return (
    <div className={`loading-screen${hiding ? ' loading-screen--out' : ''}`}>
      <img className="loading-screen__logo" src={logo} alt="Orquidea Print" />
    </div>
  )
}

export default LoadingScreen
