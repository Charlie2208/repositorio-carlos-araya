import { useState } from 'react'
import NavBar from './components/Navbar'
import Header from './components/Header'
import SobreMi from './components/SobreMi'
import CardsPortafolio from './components/CardsPortafolio'
import Skills from './components/Skills'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
//import reactLogo from './assets/react.svg'

// import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Header />
      <SobreMi />
     <CardsPortafolio />
     <Skills />
     <Contacto />
     <Footer />

    </div>
  )
}

export default App
