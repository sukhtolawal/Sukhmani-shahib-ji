
import useAllLines from './UseAllLines'
import { useTanstackQuery } from './UseTanstack'

const UseAshtAccording = () => {

    const lines = useAllLines()
    const slok = useTanstackQuery()
    const ashtArray:any[] =[]
    for(let i =0; i< slok.length; i++){
        ashtArray.push(lines.slice(slok[i],slok[i+1]))
    }

    
  return ashtArray
}

export default UseAshtAccording