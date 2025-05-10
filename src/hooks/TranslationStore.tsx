import { create } from "zustand";

interface TranslationInterface {
    isTranslation : boolean;
    setIsTranslation(val:boolean):void
}

export const useTranslation = create<TranslationInterface>((set)=>({
    isTranslation:false,

    setIsTranslation:(val)=>{
        set(()=>({
            isTranslation: val 

        }))
    }
}))
   