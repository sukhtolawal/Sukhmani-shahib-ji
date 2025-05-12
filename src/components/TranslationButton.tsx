import { useState } from 'react'
import Switch from './PopupSwitch/Switch'

import { BsThreeDotsVertical } from 'react-icons/bs'

export const TranslationButton = () => {

    const [togglePopup, setTogglePopup] = useState(false)
    

    const handleTogglePopup = ()=>{
        setTogglePopup(!togglePopup)
    }
  return (
    <div className='flex flex-col items-end fixed top-4 right-8 tansition-all duration-300'>

       
       <button className=' rounded-full flex justify-center items-center cursor-pointer mb-2' onClick={handleTogglePopup}>< BsThreeDotsVertical size={32}/></button>
       {togglePopup && <div className='px-4 flex gap-7 bg-white/70 backdrop-blur-3xl w-fit py-2 rounded-3xl mb-3 shadow-2xl'><div className='font-semibold font-sans'>Translation</div> <Switch name= {'Translation'} handleToggle = {handleTogglePopup}/> </div>}
       {togglePopup && <div className='px-4 flex gap-7 bg-white/70 backdrop-blur-3xl w-fit py-2 rounded-3xl mb-3 shadow-2xl'><div className='font-semibold font-sans'>Audio player</div> <Switch name= {'audio-player'} handleToggle = {handleTogglePopup}/> </div>}

      </div>
  )
}
