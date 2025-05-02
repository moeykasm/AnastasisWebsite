import { useState } from 'react'
import bg from '../../assets/bg2.png'
import seperator_img from '../../assets/seperator2.png'

export default function NewUpdate() {

  const [on,setOn] = useState(true)
  return (
    <>
    {
      on &&
  
      <div className="new_update_wrapper">


        <div className="new_update">

          <div className="border">
            <div className="x" onClick={() => setOn(false)}>+</div>
          </div>
          <h1>NEW RELEASE</h1>
          <img src={seperator_img} className='seperator' alt="" />
          <div className="image"><p>IMAGE</p></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae impedit consequatur obcaecati voluptatum, quos adipisci sint dolorum. Dignissimos, natus illo possimus sunt tempore sapiente qui exercitationem aut delectus earum!</p>
        </div>

      </div>
      
    }
   </>
  )
}
