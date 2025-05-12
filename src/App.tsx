import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import MainArea from './components/MainArea'

import AshtpadiCard from './components/AshtpadiCard'

import { TranslationButton } from './components/TranslationButton'
import Audio from './components/buttons/Audio'
import { useTranslation } from './hooks/TranslationStore'


const App = () => {
  
 const [fullPath, setFullPath] = useState(true)

 const {isAudio} = useTranslation()
 
 
 
  
  return (
    <div>
    
      <aside className='relative z-100'><Sidebar setFullPath = {setFullPath}/></aside>

      {fullPath && <MainArea/>}

      
      {!fullPath && <AshtpadiCard/>}

      <TranslationButton/>
       {isAudio && <div className='fixed bottom-0 ml-3 bg-white/40 backdrop-blur-2xl p-5 rounded-full overflow-hidden w-[95%] flex justify-center items-center'><Audio/></div>}
      

     </div>
      
  )
}

export default App