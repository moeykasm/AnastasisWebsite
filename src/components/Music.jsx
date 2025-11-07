import { SpeakerHigh, SpeakerSimpleX } from 'phosphor-react'
import { useState, useRef } from 'react'

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handleClick = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="music" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {isPlaying ? 
        <SpeakerHigh size={32} color="#000" weight="fill" />
      : 
        <SpeakerSimpleX size={32} color="#000" weight="fill" />
      }
      <audio ref={audioRef} src="/thememusic.mp3" loop />

    </div>
  )

}
