import React from 'react'
import { first } from '../Data'
import Card1 from '../Cards/Card1'

export default function Service2() {
  return (
   <>
    <div className=' bg-gray-900 xl:px-24 px-3 md:px-8 sm:px-6  pb-36 pt-20 '>
          <div className='h-2/5  flex justify-center items-center flex-col gap-3 text-center'>
            <h2 className='text-4xl text-white'>Services</h2>
            <p className='text-white text-lg'>Discover the Scope of Our Expertise. Leveraging comprehensive full-stack Blockchain solutions, we develop cutting-edge products and empower businesses to establish robust financial frameworks.</p>
          </div>
          <div className=' w-full  grid xl:grid-cols-3 lg:grid-cols-2 lg:px-36 xl:px-2 md:px-12 sm:px-10 px-8  gap-8  pt-24'>
            {first.map((ele)=>{
                return(
                    (<Card1 Data={ele}/>)
                )
            })}
            </div>
            </div>
   </>
  )
}
