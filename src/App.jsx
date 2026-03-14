import './App.css'
import Description from './components/Description'
import Hero from './components/Hero'
import Inspiration from './components/Inspiration'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Description />
      <Products />
      <Inspiration />
    </div>
  )
}

export default App
