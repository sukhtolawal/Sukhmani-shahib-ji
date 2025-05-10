
import useAllLines from '../hooks/UseAllLines'
import PathLayout from './PathLayout'
import { useTranslation } from '../hooks/TranslationStore'

const MainArea = () => {
    const lines = useAllLines()
    const {isTranslation} = useTranslation()
    
  return (
<PathLayout>
   {lines.map((val:any,index:number)=>(
    
    <>
    <div key={index} className=''>

        <div className={`w-full text-2xl text-center ${val.transliteration.english.text === 'salok |'? 'text-3xl':val.gurmukhi.unicode ==="ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥" ?'text-3xl text-blue-700': val.gurmukhi.unicode === 'ਅਸਟਪਦੀ ॥'? 'text-3xl text-gray-600': 'text-black'}`}>
            {val.gurmukhi.unicode}



                        
        </div>
        {isTranslation && <div className='flex justify-center items-center text-gray-600 mt-3'>
            {val.translation.punjabi.default.unicode}
        </div>}
        </div>
        
     </>
    
   ))}
   </PathLayout>
    
    
  )
}

export default MainArea