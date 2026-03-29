import { useState } from 'react'
import './App.css'
import Description from './components/Description'
import Hero from './components/Hero'
import Inspiration from './components/Inspiration'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Products from './components/Products'
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
    </div>
  )
}

export default App
