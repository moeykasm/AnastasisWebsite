import { useEffect, useState } from 'react'
import bg from '../assets/bg2.png'
import seperator_img from '../assets/seperator.png'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../pages/data';
import { getContent } from '../pages/endpoint';

export default function Newsletter() {

  const[ storedEmail, setStoredEmail] = useState()

  async function addEmailToMailingList() {

    if(storedEmail) {
      const mailingListRef = doc(db, "adminPanel", "mailing_list");
      try {
        await updateDoc(mailingListRef, {
          emails: arrayUnion(storedEmail)
        });
      } catch (error) {
        console.error(error);
      }
        setStoredEmail('')
    }

  }

  function emailInputChanged(e) {
    setStoredEmail(e.target.value)
  }

  const [webData, setWebData] = useState()
  useEffect(() => {
    getContent('newsletter', setWebData)
  }, [])

  return (
    <>
    <div className="section_wrapper" id='trailer'>
      <div className="story_wrapper">
        <h1>{webData && webData.heading}</h1>
        <img className='sep' src={seperator_img} alt="" />

        <div className="submission">
          <input value={storedEmail} onChange={emailInputChanged} className="newsletter" type="text" placeholder='youremail@email.com' />
          <div className="submit" onClick={addEmailToMailingList}>
          <p>^</p></div>
        </div>
        <br />
        <p>
          {webData && webData.description}
        </p>
      </div>
    </div>
    </>
  )
}
