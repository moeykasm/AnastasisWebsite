import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Menu from './components/Menu'
import Hero from './components/Hero'
import Story from './components/Story'
import Trailer from './components/Trailer'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import NewUpdate from './components/popups/NewUpdate'
import AdminPanel from './pages/AdminPanel'
import Newsletter from './components/Newsletter'

import Support from './pages/Support'
import Minigame from './pages/Minigame'
import ReportABug from './pages/ReportABug'
import Credits from './components/Credits'

function App() {
  const [update, setUpdate] = useState(true)

  const host = window.location.hostname;
  const subdomain = host.split('.')[0];

  return (
    <Router>
      <Routes>
        {subdomain === 'adminpanel' ? (
          <Route path="*" element={<AdminPanel />} />
        ) : (
          <>
            <Route
              path="/"
              element={
                <>
                  <img src="./shinybg.png" className='shinybg' alt="" />
                  <Menu />
                  <Hero />
                  <Story />
                  <Trailer />
                  <AboutUs />
                  <Newsletter />
                  <Credits />
                  <Footer />
                  {update && <NewUpdate />}
                </>
              }
            />
            <Route path="/report" element={<Support />} />
            <Route path="/element-lab" element={<Minigame />} />
            <Route path="/report-a-bug" element={<ReportABug />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
