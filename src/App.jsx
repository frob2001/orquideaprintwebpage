import './App.css'
import Description from './components/Description'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Description />
      <Products />
    </div>
  )
}

export default App
