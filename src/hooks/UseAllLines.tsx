import { useQueries } from "@tanstack/react-query"
import { urls } from "../utils/urls"

const useAllLines = () => {
    const queries = useQueries({queries:urls.map(({url, page})=>({
        queryKey: ["data",page],
        queryFn: ()=> fetch(url).then((res)=>res.json())
    }))})

    const allLines:any = []

    const ispending = queries.some((val)=>{
        return val.isPending
    })
    if (!ispending){
        queries.map((item)=>{
            item.data.page.map((val:any)=>{
                allLines.push(val.line)
            })
        })
    }
    
  
  return allLines.slice(12,allLines.length-24)
  
}

export default useAllLines