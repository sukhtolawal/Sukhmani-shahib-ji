import { useState } from 'react'
import Switch from './PopupSwitch/Switch'
import { FaMinus, FaPlus } from 'react-icons/fa'

export const TranslationButton = () => {

    const [togglePopup, setTogglePopup] = useState(false)
    

    const handleTogglePopup = ()=>{
        setTogglePopup(!togglePopup)
    }
  return (
    <div className='flex flex-col items-end fixed bottom-5 right-8 tansition-all duration-300'>

       {togglePopup && <div className='px-4 flex gap-7 bg-white/70 backdrop-blur-3xl w-fit py-2 rounded-3xl mb-3'>Translation <Switch name= {'Translation'} handleToggle = {handleTogglePopup}/> </div>}
      <button className='bg-white/70 backdrop-blur-3xl rounded-full flex justify-center items-center p-5 shadow-lg cursor-pointer active:bg-white/40 transition-all duration-200 transform active:scale-80' onClick={handleTogglePopup}>{!togglePopup ? <FaPlus size={26} onClick={handleTogglePopup}/> : <FaMinus onClick={handleTogglePopup}/>}</button>
      
      

      </div>
  )
}
