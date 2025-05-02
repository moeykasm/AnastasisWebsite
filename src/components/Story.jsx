import { useState } from 'react'
import bg from '../assets/bg2.png'
import seperator_img from '../assets/seperator.png'

export default function Story () {
  return (
    <>
    <div className="section_wrapper" id='the-story'>
      <div className="story_wrapper">
        <h1>THE STORY</h1>
        <img src={seperator_img} alt="" />
        <p>
          <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </span>
          <span>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </span>
          <span>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </span>
          <span>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          </span>
        </p>
      </div>
    </div>
    </>
  )
}
