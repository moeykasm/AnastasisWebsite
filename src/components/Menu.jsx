import { useEffect, useState } from 'react'

export default function Menu () {

  const [scroll, setScroll] = useState()

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
          background: scroll ? 'black' : 'transparent'
        }}
      >
        <menu>
          <a href="#home">HOME</a>
          <div className="sep"></div>
          <a href="#the-story">STORY</a>
          <div className="sep"></div>
          <a href="#trailer">TRAILER</a>
          <div className="sep"></div>
          <a href="#about-us">ABOUT US</a>
        </menu>
      </header>
    </>
  )
}
