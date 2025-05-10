import { useQueries } from '@tanstack/react-query'

import { urls } from '../utils/urls'
import useAllLines from './UseAllLines'




export const useTanstackQuery = () => {

    

        const lines = useAllLines()

        const salok:number[] = lines.reduce((acc:number[],item:any,index:number)=>{
            if (item.transliteration.english.text === "salok |"){
                acc.push(index)
            }
            return acc
        },[])

        

      return salok
        
 
}


    

    


