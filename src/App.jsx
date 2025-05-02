import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Story from './components/Story'
import Trailer from './components/Trailer'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import NewUpdate from './components/popups/NewUpdate'

function App() {
  const [update, setUpdate] = useState(true)

  return (
    <>

      <Menu />
      <Hero />
      <Story />
      <Trailer />
      <AboutUs />
      <Footer />

      {/* if we have a new update */}
      {
        update &&
        <NewUpdate />
      }

    </>
  )
}

export default App
