import { useEffect, useState } from 'react'
import bg from '../assets/bg2.png'
import seperator_img from '../assets/seperator.png'
import { getContent } from '../pages/endpoint'

export default function Trailer() {

  const [webData, setWebData] = useState()
  useEffect(() => {
    getContent('trailer', setWebData)
  }, [])

  function getYouTubeVideoId(url) {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  }
  

  return (
    <>
    <div className="section_wrapper" id='trailer'>

      <div className="story_wrapper">
        <h1>{webData && webData.heading}</h1>
        <img className='sep' src={seperator_img} alt="" />

        <div className="video">
          {
            webData?.link &&
            <iframe src={`https://www.youtube.com/embed/${getYouTubeVideoId(webData.link)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          }
        </div>
      </div>
    </div>
    </>
  )
}
