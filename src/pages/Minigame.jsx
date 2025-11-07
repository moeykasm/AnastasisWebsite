import { useState, useMemo } from 'react'

import './css/minigame.css'
import Menu from '../components/Menu'

import AUV from '../assets/Elements/AUV.png'
import CMB from '../assets/Elements/CMB.png'
import CPR from '../assets/Elements/CPR.png'
import FER from '../assets/Elements/FER.png'
import HYG from '../assets/Elements/HYG.png'
import IGN from '../assets/Elements/IGN.png'
import IRD from '../assets/Elements/IRD.png'
import LBD from '../assets/Elements/LBD.png'
import NTR from '../assets/Elements/NTR.png'
import OXN from '../assets/Elements/OXN.png'
import QRZ from '../assets/Elements/QRZ.png'
import SIL from '../assets/Elements/SIL.png'

const elements = [
  {
    id: 1,
    name: 'AUV',
    // description: 'A blazing force of destruction.',
    img: AUV,

  },
  {
    id: 2,
    name: 'CMB',
    // description: 'Flows with calm or fury.',
    img: CMB,
  },
  {
    id: 3,
    name: 'CPR',
    // description: 'Steady and unmoving.',
    img: CPR,

  },
  {
    id: 4,
    name: 'FER',
    // description: 'Light, quick, and everywhere.',
    img: FER,
  },
  {
    id: 5,
    name: 'HYG',
    // description: 'Light, quick, and everywhere.',
    img: HYG,
  },
  {
    id: 6,
    name: 'IGN',
    // description: 'Light, quick, and everywhere.',
    img: IGN,
  },
  {
    id: 7,
    name: 'IRD',
    // description: 'Light, quick, and everywhere.',
    img: IRD,
  },
  {
    id: 8,
    name: 'LBD',
    // description: 'Light, quick, and everywhere.',
    img: LBD,
  },
  {
    id: 9,
    name: 'NTR',
    // description: 'Light, quick, and everywhere.',
    img: NTR,
  },
  {
    id: 10,
    name: 'OXN',
    // description: 'Light, quick, and everywhere.',
    img: OXN,
  },
  {
    id: 11,
    name: 'QRZ',
    // description: 'Light, quick, and everywhere.',
    img: QRZ,
  },
  {
    id: 12,
    name: 'SIL',
    // description: 'Light, quick, and everywhere.',
    img: SIL,
  },
]


const positions = [
  { top: '-10%', left: '10%' },
  { top: '5%', left: '30%' },
  { top: '47.5%', right: '45.5%' },
  { top: '30%', left: '5%' },


  { top: '20%', left: '17.5%' },
  { top: '20%', right: '17.5%' },

  
  { top: '40%', left: '30%' },
  { top: '40%', right: '30%' },


  { top: '30%', right: '5%' },
  { top: '12.5%', right: '45.5%' },
  { top: '5%', right: '30%' },
  { top: '-10%', right: '10%' },
]

function ElementLab() {

  const [selected, setSelected] = useState(null)

  const elementStyles = useMemo(() => {
    return elements.map((_, i) => ({
      ...positions[i],
      animationDuration: `${4 + Math.random() * 4}s`
    }))
  }, [])

  const closePopup = () => {
    setSelected()
  }
  
  return (
    <>
      <Menu />
      <div className="minigame_wrapper">
      <h1>The Element Lab</h1>
      <p>Click on a element to learn more about it</p>

      <div className="element_area">
        {elements.map((el, i) => (
          <img
            key={el.id}
            src={el.img}
            alt={el.name}
            className="element_img"
            style={elementStyles[i]}
            onClick={() => setSelected(el)}
          />
        ))}
      </div>

      {selected && (
        <div className="info_panel" onClick={closePopup}>
          <p className='exit' onClick={closePopup}>+</p>
          <img src={selected.img} alt="" />
          <h2>{selected.name}</h2>
          <p>{selected?.description}</p>
        </div>
      )}
    </div>
    </>

  )
}

export default ElementLab
