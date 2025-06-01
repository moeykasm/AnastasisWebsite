import { useEffect, useState } from 'react'
import tiktok from '../assets/tiktok.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
export default function Footer () {

  return (
    <>
     <footer>
      <p>playanastasis.com</p>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam enim similique sed.</p> */}
      <div className="socials">
          <img src={tiktok} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
     </footer>
    </>
  )
}
