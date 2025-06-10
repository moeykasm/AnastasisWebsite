import { useState, useMemo } from 'react'

import './css/minigame.css'
import Menu from '../components/Menu'

const elements = [
  {
    id: 1,
    name: 'Fire',
    description: 'A blazing force of destruction.',
    img: '/s1.png',

  },
  {
    id: 2,
    name: 'Fire',

    description: 'Flows with calm or fury.',
    img: '/s2.png',
  },
  {
    id: 3,
    name: 'Fire',
    description: 'Steady and unmoving.',
    img: '/s3.png',

  },
  {
    id: 4,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s4.png',
  },
  {
    id: 5,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s5.png',
  },
  {
    id: 6,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s6.png',
  },
  {
    id: 7,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s7.png',
  },
  {
    id: 8,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s8.png',
  },
  {
    id: 9,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s9.png',
  },
  {
    id: 10,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s10.png',
  },
  {
    id: 11,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s11.png',
  },
  {
    id: 12,
    name: 'Fire',
    description: 'Light, quick, and everywhere.',
    img: '/s12.png',
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
          <p>{selected.description}</p>
        </div>
      )}
    </div>
    </>

  )
}

export default ElementLab
