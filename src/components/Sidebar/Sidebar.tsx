import  { useEffect, useState } from 'react'
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiX } from 'react-icons/hi'
import AshtLayout from './AshtLayout'
import { ashtpadiArray } from '../../utils/Arrays'
import "./sidebar.css"


const Sidebar = ({setFullPath}:{setFullPath(val:boolean):void}) => {
    const [togleSideBar, setTogleSidebar]= useState(false)
    const [showMenuButton, setMenuButton]= useState(true)
    const [toggleAsht , setToggleAsht] = useState(false)
    
    
    const handleTogle= ()=>{

        setTogleSidebar(!togleSideBar)

    }
    const handleAshtToggle = () =>{
      setToggleAsht(!toggleAsht)
      
    }

    const handleAshtSideToggle = ()=>{
      
      setFullPath(true)
    } 



    
    useEffect(()=>{
        if (togleSideBar){
            setMenuButton(false)
        }
        else {
            const timer = setTimeout(() => {

              setMenuButton(true)
                
            }, 400);
            return clearInterval(timer)
        }
       
    })
    
  return (
    <div className='flex'>

       {showMenuButton && <GiHamburgerMenu className='fixed top-4 left-4 cursor-pointer' size={32} onClick={handleTogle}/>}

        <aside className={`select-none bg-white/40 backdrop-blur-lg transform transition-transform duration-500 ${togleSideBar ? "translate-x-0": "-translate-x-full"} h-screen fixed top-0 left-0 w-80 shadow shadow-7xl rounded-2xl p-6`}>
        <div className='absolute top-3 right-4 cursor-pointer'>
        <HiX size={22} onClick={handleTogle}/>
        </div>
        

            
                
                <div className='mt-10 ml-2 text-xl font-sans font-semibold px-8 py-4 bg-white/70 w-[90%] shadow-xl rounded-xl flex justify-between items-center cursor-pointer' onClick={handleAshtSideToggle}> <span>ਸੁਖਮਨੀ ਸਾਹਿਬ </span><span> {toggleAsht ? <FaChevronCircleDown onClick={handleAshtToggle} /> :<FaChevronCircleUp onClick={handleAshtToggle}/>}</span></div>

                <div className='mt-5 overflow-y-auto scrollbar h-full'>
                
                <div className={`mt-10 ml-2 font-sans font-semibold py-4 bg-white/70 w-[90%] shadow-xl rounded-xl overflow-hidden ${toggleAsht ? "h-auto":"h-0 opacity-0 overflow-hidden"}   transition-all duration-500`}>
                  
                  {ashtpadiArray.map((asht,index)=>(

                     <AshtLayout key={index} text= {asht} ashttoggle = {handleTogle} setFullPath = {setFullPath}/>
                  
                  
                ))}
                
                  
                 </div>
                 </div>
                


            

        

        </aside>

    </div>
  )
}

export default Sidebar