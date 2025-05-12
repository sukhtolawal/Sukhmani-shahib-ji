import { create } from "zustand";

interface TranslationInterface {
    isTranslation : boolean;
    setIsTranslation(val:boolean):void
    isAudio: boolean;
    setIsAudio(val:boolean):void
}

export const useTranslation = create<TranslationInterface>((set)=>({
    isTranslation:false,
    isAudio: false,

    setIsTranslation:(val)=>{
        set(()=>({
            isTranslation: val 

        }))
    },
    setIsAudio:(val)=>{
        set(()=>({
            isAudio: val
        }))
    }
}))
   