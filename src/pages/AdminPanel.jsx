import { useEffect, useState } from 'react'
import seperator_img from '../assets/seperator2.png'
import Menu from '../components/Menu'
import { auth, db } from './data'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
    import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { updateContent } from './endpoint';

export default function AdminPanel() {


  const [user, setUser] = useState()
  const [load, setLoad] = useState()
  const [displayError, setDisplayError] = useState()
  const [menuSelected, setMenuSelected] = useState('mailing_list')
  const [websiteData, setWebsiteData] = useState()
  const [changed, setChanged] = useState()

  const [updatedWebsiteData, setUpdatedWebsiteData] = useState({
    hero: {
      heading: '',
      description: ''
    },
    aboutUs: {
      heading: '',
      description: '',
      img: ''
    },
    theStory: {
      heading: '',
      description: ''
    },
    trailer: {
      heading: '',
      link: ''
    },
    newsletter: {
      heading: '',
      description: ''
    },
    socials: {
      tiktok: '',
      youtube: '',
      instagram: ''
    },
    popup: {
      show: null,
      show_img: null,
      heading: '',
      description: '',
      img: '',
      delay: 0
    },
  })

  const [panelData, setPanelData] = useState(
    {
      mailing_list: []
    }
  )

  const [loginInfo, setLoginInfo] = useState(
    {
      user: '',
      password: ''
    }
  )

  function signUserIn() {
    setLoad(true)
    signInWithEmailAndPassword(auth, loginInfo.user+"@playanastasis.com", loginInfo.password)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email)
          setUser(user)
          setLoad(false)
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)

          setDisplayError('Incorrect user or password.')
          setLoad(false)
      });
  }

  function signUserOut() {
    signOut(auth)
      .then(() => {
        setUser()
      }).catch((error) => {
        console.log(error)
      });
  }

  function inputChanged(event) {
    setLoginInfo(prev => (
      {
        ...prev,
        [event.target.id]: event.target.value
      }
    ))
  }

  async function getAllWebsiteData() {
    const querySnapshot = await getDocs(collection(db, "websiteData"))
    const result = {}
  
    querySnapshot.forEach((doc) => {
      result[doc.id] = doc.data()
    })
  
    setWebsiteData(result)
    setUpdatedWebsiteData(result)

  }

  async function getMailingList() {

    const docRef = doc(db, "adminPanel", "mailing_list");

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {

      const data = docSnap.data()

      setPanelData(prev => ({
        ...prev,
        mailing_list: data.emails
      }))

      console.log(panelData)
    } else {
      console.log("No such document!");
    }
  }

  function getChangedSections() {
    const changed = {}
    if(!websiteData || !updatedWebsiteData) {
      return;
    }
    for (const section in updatedWebsiteData) {
      if (!websiteData[section]) {
        changed[section] = updatedWebsiteData[section]
        continue
      }
  
      const sectionChanges = {}
  
      for (const key in updatedWebsiteData[section]) {
        if (updatedWebsiteData[section][key] !== websiteData[section][key]) {
          sectionChanges[key] = updatedWebsiteData[section][key]
        }
      }
  
      if (Object.keys(sectionChanges).length > 0) {
        changed[section] = sectionChanges
      }
    }
  
    setChanged(changed)
  }
  
  function updateInputChanged(event) {

    const section = event.target.dataset.section
    const field = event.target.id
    const value = event.target.value

    setUpdatedWebsiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section], 
        [field]: value
      }
    }))

    console.log(updatedWebsiteData)
  }
  
  function updateRadioChanged(event) {

    const section = event.target.dataset.section
    const field = event.target.id
    const value = event.target.value

    setUpdatedWebsiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section], 
        [field]: !prev[section][field]
      }
    }))

    console.log(updatedWebsiteData)
  }

  async function updateAndRefreshSection(section) {
    await updateContent(section, updatedWebsiteData[section] )
    getAllWebsiteData()
  }

  useEffect( () => {
    getMailingList()
    getAllWebsiteData()
  }, [])

  useEffect( () => {
    getChangedSections()
  }, [updatedWebsiteData])
  
  return (
    <>

      {
        !user &&
        <div className="login">
          <h1>Anastasis Admin Panel</h1>
          <div className='login_widget'>

            <div className="inp">
              <label htmlFor="">User</label>
              <input onInput={inputChanged} id='user' type="email" />
            </div>

            <div className="inp">
              <label htmlFor="">Password</label>
              <input onInput={inputChanged} id='password' type="password" />
            </div>

            <button onClick={signUserIn}>
              LOGIN { load && <div className="load"></div> }
            </button>

            <p>{displayError && displayError}</p>
            
          </div>
        </div>
      }
  
      {
        user &&

        <div className="admin_panel">

          <div className="side_bar">
            <h1>ANASTASIS</h1>
            <ul>
              <li onClick={() => setMenuSelected('mailing_list')} className={menuSelected === 'mailing_list' && 'active'}><p>Mailing list</p></li>
              <li onClick={() => setMenuSelected('site_content')} className={menuSelected === 'site_content' && 'active'}><p>Site content</p></li>
              <li onClick={() => setMenuSelected('social_media')} className={menuSelected === 'social_media' && 'active'}><p>Social media</p></li>
              <li onClick={() => setMenuSelected('update_popup')} className={menuSelected === 'update_popup' && 'active'}><p>Update popup</p></li>
              <li onClick={() => setMenuSelected('bug_reports')} className={menuSelected === 'bug_reports' && 'active'}><p>Bug reports</p></li>
              <li onClick={() => setMenuSelected('elements_app')} className={menuSelected === 'elements_app' && 'active'}><p>Elements app</p></li>
            </ul>
            <div className="logged_in_as">
              <p>Logged in as: {user.email}</p>
              <button onClick={signUserOut}>LOG OUT</button>
            </div>
          </div>

          <div className="panel_content">
            <div className="panel_menu">

              <h1>
                { menuSelected === 'mailing_list' ? 'Manage mailing list' :
                  menuSelected === 'site_content' ? 'Manage site content' :
                  menuSelected === 'social_media' ? 'Manage social media' :
                  menuSelected === 'elements_app' ? 'Manage elements app' :
                  menuSelected === 'bug_reports' ? 'Manage bug reports' :
                  menuSelected === 'update_popup' && 'Manage popup' }
              </h1>

              {
                menuSelected === 'mailing_list' &&
                <div className="panel mailing_list">
                  <div className="filter">
                    <p>Emails collected: {panelData.mailing_list.length}</p>
                    <button style={{marginLeft: 'auto'}} onClick={getMailingList}>Reload</button>
                    <button onClick={getMailingList}>Download JSON</button>
                  </div>

                  <div className="line"></div>

                  <div className='emails_wrapper'>
                    {
                      panelData.mailing_list.map( email => {
                        return (
                          <p className='email'>{email}</p>
                        )
                      }
                      )
                    }
                  </div>
                  {/* <button onClick={() => console.log(panelData.mailing_list)}>consloe</button> */}
                </div>
              }
              
              {
                menuSelected === 'site_content' &&
                <div className="panel site_content">
                  <div className="site_inputs">

                    <label htmlFor="">
                      HERO
                      <button 
                      style={{opacity: changed?.hero ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('hero')}>MAKE CHANGES</button>
                    </label>

                    <div className="inp">
                      <label htmlFor="">
                        Hero heading
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="hero"
                        id="heading"
                        value={updatedWebsiteData && updatedWebsiteData.hero.heading}
                      />

                    </div>
                    <div className="inp">
                      <label htmlFor="">
                        Hero description
                      </label>
                      <textarea
                        onChange={updateInputChanged}
                        type="text"
                        data-section="hero"
                        id="description"
                        value={updatedWebsiteData && updatedWebsiteData.hero.description}
                      />

                    </div>

                    <br />

                    <label htmlFor="">
                      THE STORY
                      <button 
                      style={{opacity: changed?.theStory ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('theStory')}>MAKE CHANGES</button>
                    </label>
                    <div className="inp">
                      <label htmlFor="">
                        Story heading
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="theStory"
                        id="heading"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.theStory.heading}

                      />

                    </div>
                    <div className="inp">
                      <label htmlFor="">Story description *use {`<br>`} for line cuts*</label>
                      <textarea
                        onChange={updateInputChanged}
                        type="text"
                        data-section="theStory"
                        id="description"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.theStory.description}

                      />

                    </div>

                    <br />

                    <label htmlFor="">
                      TRAILER
                      <button 
                      style={{opacity: changed?.trailer ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('trailer')}>MAKE CHANGES</button>
                    </label>
                    <div className="inp">
                      <label htmlFor="">Trailer heading
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="trailer"
                        id="heading"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.trailer.heading}

                      />

                    </div>
                    <div className="inp">
                      <label htmlFor="">Youtube video link
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="trailer"
                        id="link"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.trailer.link}

                      />

                    </div>

                    <br />

                    <label htmlFor="">
                      ABOUT US
                      <button 
                      style={{opacity: changed?.aboutUs ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('aboutUs')}>MAKE CHANGES</button>
                    </label>
                    <div className="inp">
                      <label htmlFor="">About us heading
                      
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="aboutUs"
                        id="heading"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.aboutUs.heading}
                      />

                    </div>
                    <div className="inp">
                      <label htmlFor="">About us description *use {`<br>`} for line cuts*</label>
                      <textarea
                        onChange={updateInputChanged}
                        type="text"
                        data-section="aboutUs"
                        id="description"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.aboutUs.description}
                      />

                    </div>

                    <div className="inp">
                      <label htmlFor="">Image link</label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="aboutUs"
                        id="img"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.aboutUs.img}
                      />

                    </div>

                    <br />

                    <label htmlFor="">
                      NEWSLETTER
                      <button 
                      style={{opacity: changed?.newsletter ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('newsletter')}>MAKE CHANGES</button>
                    </label>
                    <div className="inp">
                      <label htmlFor="">Newsletter heading
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="newsletter"
                        id="heading"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.newsletter.heading}
                      />

                    </div>
                    <div className="inp">
                      <label htmlFor="">Newsletter description
                      </label>
                      <textarea
                        onChange={updateInputChanged}
                        type="text"
                        data-section="newsletter"
                        id="description"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.newsletter.description}
                      />

                    </div>

                  </div>
                </div>
              }

              {
                menuSelected === 'social_media' &&
                <div className="panel site_content">
                  <div className="site_inputs">

                  <label htmlFor="">
                      SOCIAL MEDIA LINKS
                      <button 
                      style={{opacity: changed?.socials ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('socials')}>MAKE CHANGES</button>
                    </label>
                    <div className="inp">
                      <label htmlFor="">Tiktok
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="socials"
                        id="tiktok"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.socials.tiktok}
                      />
                    </div>
                    <div className="inp">
                      <label htmlFor="">Instagram
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="socials"
                        id="instagram"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.socials.instagram}
                      />
                    </div>

                    <div className="inp">
                      <label htmlFor="">Youtube
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="socials"
                        id="youtube"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.socials.youtube}
                      />
                    </div>
                  </div>
                </div>
              }


{
                menuSelected === 'update_popup' &&
                <div className="panel site_content">
                  <div className="site_inputs">

                  <label htmlFor="">
                      *NEW UPDATE* POPUP
                      <button 
                      style={{opacity: changed?.popup ? 1 : 0.2}}
                      onClick={ () => updateAndRefreshSection('popup')}>MAKE CHANGES</button>
                    </label>

                    <div className="radio-option">
                      <input
                        onClick={updateRadioChanged}
                        type="radio"
                        data-section="popup"
                        id="show"
                        value={updatedWebsiteData && updatedWebsiteData.popup.show}
                        checked={updatedWebsiteData?.popup.show}
                      />
                      <label className='radio-label'>Activate popup</label>
                    </div>
                    
                    <div className="inp">
                      <label htmlFor="">Delay in seconds (how long before the popup shows)
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="popup"
                        id="delay"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.popup.delay}
                      />

                    </div>
                 

                    <div className="inp">
                      <label htmlFor="">Update heading
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="popup"
                        id="heading"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.popup.heading}
                      />

                    </div>
                    <div className="inp">
                      <label htmlFor="">Update description
                      </label>
                      <textarea
                        onChange={updateInputChanged}
                        type="text"
                        data-section="popup"
                        id="description"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.popup.description}
                      />

                    </div>

                    <div className="radio-option">
                      <input
                        onClick={updateRadioChanged}
                        type="radio"
                        data-section="popup"
                        id="show_img"
                        value={updatedWebsiteData && updatedWebsiteData.popup.show_img}
                        checked={updatedWebsiteData?.popup.show_img}
                      />
                      <label className='radio-label'>Show image</label>

                    </div>

                    <div className="inp">
                      <label htmlFor="">Image link
                      </label>
                      <input
                        onChange={updateInputChanged}
                        type="text"
                        data-section="popup"
                        id="img"
                        placeholder=""
                        value={updatedWebsiteData && updatedWebsiteData.popup.img}
                      />

                    </div>

                
                  </div>
                </div>
              }




            </div>
          </div>

        </div>
      }

    </>
  )
}
