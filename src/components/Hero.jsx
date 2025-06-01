import { useEffect, useState } from 'react'

import bg from '../assets/bg2.png'
import tiktok from '../assets/tiktok.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import { getContent } from '../pages/endpoint'

export default function Hero () {

  const [webData, setWebData] = useState()
  useEffect(() => {
    getContent('hero', setWebData)
  }, [])


  return (
    <>
    <div className="hero" id='home'>
      
      <img src={bg} alt="" />

      <div className="hero_content">
        <h1>{webData && webData.heading}</h1>
        <p>{webData && webData.description}</p>
        <button>EXPLORE</button>

        <div className="socials">
          <img src={tiktok} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>


    </div>
    </>
  )
}
