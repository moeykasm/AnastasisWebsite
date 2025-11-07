import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu () {

  const [scroll, setScroll] = useState()
  const [mobMenu, setMobMenu] = useState(false)

  useEffect( () => {  

    window.addEventListener('scroll', function() {
      console.log(window.scrollY)
      setScroll(window.scrollY)
    })

  }, [] )

  return (
    <>
      <header
        style={{
          top: scroll ? '0' : '2rem',
          background: scroll ? 'black' : 'transparent',
          padding: scroll ? '1.5rem 0' : '0'
        }}
      >
        <menu>
          {/* <a href="#home">HOME</a> */}
          <a href="/#the-story">STORY</a>
          <div className="sep"></div>
          <a href="/#trailer">TRAILER</a>
          <div className="sep"></div>
          <a href="/#about-us">ABOUT US</a>
          <div className="sep"></div>
          <a href="/report-a-bug">SUPPORT</a>
          <div className="sep"></div>
          <a href="/element-lab">ELEMENT LAB</a>



        </menu>


        <div className="mobile_menu">
          <Link to={'/'}
          style={{
            textDecoration: 'none'
          }}
          >
          <p>ANASTASIS</p>
          </Link>

          <div onClick={() => setMobMenu(true)} className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        {
          mobMenu &&
        <div className="mob_popup">
          <a onClick={() => setMobMenu(false)} href="/#the-story">STORY</a>
          <div className="sep"></div>
          <a onClick={() => setMobMenu(false)} href="/#trailer">TRAILER</a>
          <div className="sep"></div>
          <a onClick={() => setMobMenu(false)} href="/#about-us">ABOUT US</a>
          <div className="sep"></div>
          <a onClick={() => setMobMenu(false)} href="/report-a-bug">SUPPORT</a>
          <div className="sep"></div>
          <a onClick={() => setMobMenu(false)} href="/element-lab">ELEMENT LAB</a>
          <span className="x" onClick={() => setMobMenu(false)}>+</span>
        </div>
        }


      </header>
    </>
  )
}
