import { useEffect, useState } from 'react'
import bg from '../assets/bg2.png'
import seperator_img from '../assets/seperator.png'
import { getContent } from '../pages/endpoint'

export default function AboutUs() {


  const [webData, setWebData] = useState()
  useEffect(() => {
    getContent('aboutUs', setWebData)
  }, [])

  return (
    <>
    <div className="section_wrapper" id='about-us'>
      <div className="story_wrapper">
        <h1>{webData?.heading && webData.heading}</h1>
        <img className='sep' src={seperator_img} alt="" />
        <div className="about_us">
          <div className="about_text">
            <p>
              {
                webData && 
                webData.description.split('<br>').map((line, index) => (
                  <span key={index}>{line.trim()}</span>
                ))
              }
            </p>
          </div>
          <div className="about_img"
            style={{
              background: webData?.img && 'none'
            }}
          >
            {
              webData?.img &&
              <img src={webData.img} alt="" />
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
