import React, { useEffect, useRef, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { MdForward10, MdReplay10 } from 'react-icons/md'
import "./Audio.css"
import { FaCirclePause } from 'react-icons/fa6'

const Audio = () => {
  const [progress, setProgress] = useState(0) // current progress in seconds
  const [duration, setDuration] = useState(0) // total duration of audio
  const [play, setPlay] = useState(true)
  const ref = useRef<HTMLInputElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Handle slider input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setProgress(value)
    if (audioRef.current) {
      audioRef.current.currentTime = value // sync audio to slider
    }
  }

  // Handle audio time update
  const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement>) => {
    const currentTime = e.currentTarget.currentTime
    setProgress(currentTime)
  }

  // On loaded metadata (duration becomes available)
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handlePlay = ()=>{
    if (play){
      audioRef.current?.play()
    }
    else{
      audioRef.current?.pause()
    }
    setPlay(!play)
  }

  // Update custom slider background
  useEffect(() => {
    if (ref.current && duration > 0) {
      const perc = (progress / duration) * 100
      ref.current.style.background = `linear-gradient(to right, white 0%, white ${perc}%, rgba(0,0,0,0.5) ${perc}%, rgba(0,0,0,0.5) 100%)`
    }
  }, [progress, duration])

  return (
    <div className='flex justify-center items-center flex-col gap-8 w-screen'>
      <div className='flex w-1/2 justify-around items-center'>
        <MdReplay10 className='btn' onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0)
          }
        }} />
        {play ?<FaPlayCircle className='btn' onClick={handlePlay} />: <FaCirclePause className='btn' onClick={handlePlay}/>}
        <MdForward10 className='btn' onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration)
          }
        }} />
      </div>

      <input
        ref={ref}
        type="range"
        className='w-1/2'
        min={0}
        max={duration}
        step={0.1}
        value={progress}
        onChange={handleChange}
      />

      <audio
        ref={audioRef}
        src="https://hindi2.djpunjab.app/load/dFjKaVCinjTs4mMDCf2W7w==/Sukhmani%20Sahib.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className='hidden'
      />
    </div>
  )
}

export default Audio
