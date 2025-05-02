import { useState } from 'react'
import bg from '../assets/bg2.png'
import seperator_img from '../assets/seperator.png'

export default function Trailer() {
  return (
    <>
    <div className="section_wrapper" id='trailer'>
      <div className="story_wrapper">
        <h1>TRAILER</h1>
        <img src={seperator_img} alt="" />
        <div className="video">
        </div>
      </div>
    </div>
    </>
  )
}
