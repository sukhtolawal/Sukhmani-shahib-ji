import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import MainArea from './components/MainArea'

import AshtpadiCard from './components/AshtpadiCard'

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