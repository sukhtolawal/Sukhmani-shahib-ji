import { useRef, useState } from 'react'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import { ashtpadiArray, gurmukhiDigits } from '../../utils/Arrays'
import { useStore } from '../../hooks/Store';

const AshtLayout = ({text,ashttoggle,setFullPath}:{text:string;ashttoggle():void;setFullPath(val:boolean):void}) => {

    // const {currentAsht, setCurrentAsht}=useStore()


    const devRef = useRef<HTMLSpanElement>(null)

    const [togglePauri, setTogglePauri] = useState(false)
    const {setCurrentAsht} = useStore()
    const handleTogglePauri = ()=>{
        setTogglePauri(!togglePauri)
       
       
        
        
        
    }
    const handlCurrentAsht = ()=>{
        if (devRef.current){
            setCurrentAsht(ashtpadiArray.indexOf(devRef.current.innerText))
        }
        setFullPath(false)
        ashttoggle()
    }
    
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between items-center border-b flex-1 border-b-gray-200 px-6 py-4 transform hover:transform hover:scale-105 hover:cursor-pointer hover:bg-white/40 hover:rounded-full transition-colors duration-300 ease-in-out' onClick={handlCurrentAsht}>
        <span ref={devRef} className=' text-xl'>{text}</span><span>{togglePauri ? <FaChevronCircleDown  onClick={handleTogglePauri}/> :<FaChevronCircleUp  onClick={handleTogglePauri}/> }</span>
        
    </div>
    {togglePauri && <div className='space-y-2'>
    {gurmukhiDigits.map((item,index)=>(
        <div key={index} className='h-full text-end border-b border-b-gray-200 pr-10 py-2 cursor-pointer hover:bg-white/40'>
            {item}

        </div>

    ))}
    </div>}
    </div>
  )
}

export default AshtLayout