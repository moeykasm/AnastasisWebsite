import { useEffect, useState } from 'react'
import bg from '../../assets/bg2.png'
import seperator_img from '../../assets/seperator2.png'
import { getContent } from '../../pages/endpoint'

export default function NewUpdate() {

  const [on,setOn] = useState(false)
  const [switchedOff, setSwitchedOff] = useState(false)
  const [webData, setWebData] = useState()


  useEffect(() => {
    getContent('popup', setWebData)
  }, [] )
  useEffect( () => {

    if (webData?.delay) {
      setTimeout(() => {
        setOn(true)
      }, webData?.delay * 1000);
    }

  }, [webData])

  return (
    <>
    {
       on && webData?.show &&
  
      <div className="new_update_wrapper">


        <div className="new_update">

          <div className="border">
            <div className="x" onClick={() => setOn(false)}>+</div>
          </div>
          <h1>{webData?.heading}</h1>
          <img src={seperator_img} className='seperator' alt="" />
          {
            webData?.show_img &&
            <div className="image">
              {
                webData?.img ?
                <img src={webData.img} alt="" />
                :
                <p>IMAGE</p>
              }
            </div>
          }
        
          <p>{webData?.description}</p>
        </div>

      </div>
    }

   </>
  )
}
