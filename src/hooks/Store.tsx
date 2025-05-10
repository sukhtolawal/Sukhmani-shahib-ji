
import { create } from 'zustand'


interface StoreProps{
    currentAsht : number;
    setCurrentAsht(Asht:number):void
}
export const useStore = create<StoreProps>((set)=>({
    currentAsht: 0,
    setCurrentAsht:(asht)=>{

        set(()=>({
            currentAsht: asht

        }
        ))

    }
}))