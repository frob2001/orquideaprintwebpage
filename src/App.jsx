import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import Description from './components/Description'
import Ecofriendly from './components/Ecofriendly'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Inspiration from './components/Inspiration'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Products from './components/Products'
import TechNfc from './components/TechNfc'
function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="app">
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <Description />
      <Products />
      <Inspiration />
      <TechNfc />
      <Ecofriendly />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
