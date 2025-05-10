import  {  type ReactNode } from 'react'

const PathLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-screen w-screen flex justify-center px-2 overflow-y-auto'>
        <div className='mt-20 px-5 py-20 flex flex-col  bg-white/30 shadow-lg rounded-2xl font-bold text-lg gap-20 h-fit'>
        
            {children}
                    
               
       

           
        </div>
    </div>
  )
}

export default PathLayout