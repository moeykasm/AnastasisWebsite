import { useState, useMemo } from 'react'

import './css/minigame.css'

const elements = [
  {
    id: 1,
    name: 'Fire',
    description: 'A blazing force of destruction.',
    img: '/s1.png',

  },
  {
    id: 2,
    name: 'Water',
    description: 'Flows with calm or fury.',
    img: '/s2.png',
  },
  {
    id: 3,
    name: 'Earth',
    description: 'Steady and unmoving.',
    img: '/s3.png',

  },
  {
    id: 4,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s4.png',
  },
  {
    id: 5,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s5.png',
  },
  {
    id: 6,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s6.png',
  },
  {
    id: 7,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s7.png',
  },
  {
    id: 8,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s8.png',
  },
  {
    id: 9,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s9.png',
  },
  {
    id: 10,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s10.png',
  },
  {
    id: 11,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s11.png',
  },
  {
    id: 12,
    name: 'Air',
    description: 'Light, quick, and everywhere.',
    img: '/s12.png',
  },
]

const positions = [
  { top: '10%', left: '10%' },
  { top: '15%', left: '30%' },
  { top: '12.5%', left: '60%' },
  { top: '30%', left: '20%' },
  { top: '30%', left: '45%' },
  { top: '70%', left: '45%' },
  { top: '50%', left: '35%' },
  { top: '50%', left: '60%' },
  { top: '30%', left: '70%' },
  { top: '70%', left: '75%' },
  { top: '45%', left: '80%' },
  { top: '2%', left: '85%' },
]



function ElementLab() {
  const [selected, setSelected] = useState(null)

  const elementStyles = useMemo(() => {
    return elements.map((_, i) => ({
      ...positions[i],
      animationDuration: `${4 + Math.random() * 4}s`
    }))
  }, [])
  
  
  return (
    <div className="lab-wrapper">
      <h1 className="lab-title">The Element Lab</h1>
      <p className="lab-desc">Click on a element to learn more about it</p>
      <div className="lab-area">
   
      {elements.map((el, i) => (
        <img
          key={el.id}
          src={el.img}
          alt={el.name}
          className="element-img"
          style={elementStyles[i]}
          onClick={() => setSelected(el)}
        />
      ))}

      </div>

      {selected && (
        <div className="info-panel">
          <img src={selected.img} alt="" />
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  )
}

export default ElementLab
