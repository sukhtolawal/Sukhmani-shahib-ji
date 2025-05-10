import { useQueries } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { urls } from '../utils/urls'
import { useStore } from '../hooks/Store'
import UseAshtAccording from '../hooks/UseAshtAccording'
import PathLayout from './PathLayout'
import { useTranslation } from '../hooks/TranslationStore'

const AshtpadiCard = () => {
     const { currentAsht} = useStore()

     const ashtArr = UseAshtAccording()  

     const {isTranslation} = useTranslation()
     

     
     

     
    
   
  
  return (
    < PathLayout>
    {ashtArr && 
     

                ashtArr[currentAsht].map((lines: any) => (

                    <div key={Math.random()}>

<div className={`w-full text-2xl text-center ${lines.transliteration.english.text === 'salok |'? 'text-3xl':lines.gurmukhi.unicode ==="ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥" ?'text-3xl text-blue-700':lines.gurmukhi.unicode === 'ਅਸਟਪਦੀ ॥'? 'text-3xl text-gray-600': 'text-black'}`}>
                        {lines.gurmukhi.unicode}
                    </div>
                    {isTranslation && <div className='flex justify-center items-center text-gray-600 mt-3'>
                            {lines.translation.punjabi.default.unicode}
                   </div>}
                    </div>
                ))
                
                
            }
    </PathLayout>
  )
}

export default AshtpadiCard