import React, { useState } from 'react'

export default function Home1() {
  const [show,setshow] = useState(false)
  return (
   <>
   <div className='   grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 pt-20  pb-5  bg-gray-900 main xl:px-24 sm:px-5 md:px-10 px-3'>
   
    <div className='  flex justify-center  flex-col space-y-14 pt-5 '>
        <h2 className=' text-white xl:text-4xl lg:text-4xl text-2xl md:text-5xl sm:text-3xl  font-bold'>THE FUSION OF BLOCKCHAIN <span className=' text-teal-500 text-4xl font-bold'>& ARTIFICIAL INTELLIGENCE TECHNOLOGIES</span></h2>
        <p className=' text-white xl:text-3xl lg:text-3xl text-sm   sm:text-lg'>Boost Your Online Presence And Drive Sales With Our Proven Strategies</p>
        <button onClick={()=>setshow(true)} className=' relative  xl:h-12 lg:h-12 md:h-12  xl:w-44 lg:w-44 md:w-44 h-10 w-36 duration-300 bg-black hover:bg-teal-500 hover:text-black font-bold text-white font-bold '>Get In Touch</button>
        {show === true && (
      <>
     <div className='h-64 xl:w-96 lg:w-96 sm:w-80 md:w-96 w-72 absolute bg-white rounded-lg shadow-lg p-4'>
  {/* Close button */}
  <button onClick={() => setshow(false)} className='absolute top-2 right-2 text-black text-xl hover:text-gray-500 focus:outline-none'>
    X
  </button>

  {/* Calendar */}
  <div className="grid grid-cols-7 gap-1 pt-5">
    {/* Weekdays */}
    <div className="text-center text-gray-500 font-semibold">Sun</div>
    <div className="text-center text-gray-500 font-semibold">Mon</div>
    <div className="text-center text-gray-500 font-semibold">Tue</div>
    <div className="text-center text-gray-500 font-semibold">Wed</div>
    <div className="text-center text-gray-500 font-semibold">Thu</div>
    <div className="text-center text-gray-500 font-semibold">Fri</div>
    <div className="text-center text-gray-500 font-semibold">Sat</div>

    {/* Calendar days */}
    {Array.from({ length: 30 }).map((_, index) => (
      <div key={index} className="text-center py-2 rounded-md cursor-pointer hover:bg-gray-200">{index + 1}</div>
    ))}
  </div>
</div>


      </>
    )}

    </div>
    <div className=' md:hidden hidden sm:hidden xl:block lg:block'>
        <img src="../asets/img/Homer-Banner_apghtd.webp" alt="" />
    </div>

   </div>
   </>
  )
}
