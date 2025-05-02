import { useState } from 'react'

import bg from '../assets/bg2.png'

export default function Hero () {

  return (
    <>
    <div className="hero" id='home'>
      
      <img src={bg} alt="" />

      <div className="hero_content">
        <h1>ANASTASIS</h1>
        <p>Shape Magic, Defy Darkness</p>
        <button>EXPLORE</button>
      </div>


    </div>
    </>
  )
}
