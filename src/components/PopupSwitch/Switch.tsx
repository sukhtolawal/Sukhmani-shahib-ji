import { useState} from 'react'
import "./Switch.css"
import { useTranslation } from '../../hooks/TranslationStore'

const Switch = ({name,handleToggle}:{name:string; handleToggle():void}) => {
  const [,setVal] = useState(false)

    const { isTranslation, setIsTranslation, isAudio, setIsAudio}  = useTranslation()


  const handleCheck = (e:any)=>{
    if (name === "Translation"){
    setVal(e.target.checked)
    setIsTranslation(e.target.checked)}
    else {
      setVal(e.target.checked)
      setIsAudio(!isAudio)
    }
    
    handleToggle()
  }

 
  
 
  return (
    <div className='transition-all duration-1000'>
        <label className='switch'>
            <input type="checkbox" onChange={(e)=>handleCheck(e)} name={name} checked={name==="Translation"? isTranslation: isAudio}/>
            <span className='slider'></span>
            
        </label>
    </div>
  )
}

export default Switch