import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import MainArea from './components/MainArea'
import { urls } from './utils/urls'


import  { useTanstackQuery } from './hooks/UseTanstack'
import AshtpadiCard from './components/AshtpadiCard'
import useAllLines from './hooks/UseAllLines'
import UseAshtAccording from './hooks/UseAshtAccording'
import { FaPlus } from 'react-icons/fa'
import Switch from './components/PopupSwitch/Switch'
import { TranslationButton } from './components/TranslationButton'


const App = () => {
  
 const [fullPath, setFullPath] = useState(true)
 
 
 
  
  return (
    <div>
    
      <Sidebar setFullPath = {setFullPath}/>

      {fullPath && <MainArea/>}

      
      {!fullPath && <AshtpadiCard/>}

      <TranslationButton/>

      

     </div>
      
  )
}

export default App