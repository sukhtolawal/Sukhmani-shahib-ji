import { useState} from 'react'
import "./Switch.css"
import { useTranslation } from '../../hooks/TranslationStore'

const Switch = ({name,handleToggle}:{name:string; handleToggle():void}) => {
  const [,setVal] = useState(false)

    const { isTranslation, setIsTranslation}  = useTranslation()


  const handleCheck = (e:any)=>{
    setVal(e.target.checked)
    setIsTranslation(e.target.checked)
    handleToggle()
  }

 
  
 
  return (
    <div className='transition-all duration-1000'>
        <label className='switch'>
            <input type="checkbox" onChange={(e)=>handleCheck(e)} name={name} checked={isTranslation}/>
            <span className='slider'></span>
            
        </label>
    </div>
  )
}

export default Switch