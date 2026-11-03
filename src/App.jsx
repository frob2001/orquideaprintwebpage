import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Description from './components/Description'
import Ecofriendly from './components/Ecofriendly'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HolidayBanner from './components/HolidayBanner'
import Inspiration from './components/Inspiration'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import PricingStrip from './components/PricingStrip'
import Products from './components/Products'
import TechNfc from './components/TechNfc'
import WhatsappFloat from './components/WhatsappFloat'
import LineaPage from './pages/LineaPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  return (
    <>
      <Hero />
      <Description />
      <Products />
      <Inspiration />
      <PricingStrip />
      <TechNfc />
      <Ecofriendly />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(0)

  return (
    <div
      className={`app ${bannerHeight > 0 ? 'app--with-banner' : ''}`}
      style={{ '--banner-h': `${bannerHeight}px` }}
    >
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <HolidayBanner onHeightChange={setBannerHeight} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hogar" element={<LineaPage lineId="hogar" />} />
        <Route path="/marketing" element={<LineaPage lineId="negocios" />} />
        <Route path="/llaveros" element={<LineaPage lineId="llaveros" />} />
        <Route path="/juguetes" element={<LineaPage lineId="personalizados" />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
      </Routes>
      <WhatsappFloat />
    </div>
  )
}

export default App
