import React from 'react'

export default function Home4() {
  return (
  <>
  <div className=' w-full bg-black grid xl:grid-cols-2 lg:grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 xl:px-28 px-3 md:px-8 sm:px-6'>
    <div className='  flex justify-center flex-col py-10  gap-6'>
        <h2 className=' text-white font-bold text-5xl'>About Us</h2>
        <p className=' text-white text-lg'>At Creasoft, we're not just a service provider; we're your dedicated partner in success.
             Our commitment to excellence permeates every aspect of what we do. With a team of seasoned experts,
              a proven track record of delivering results, and a client-centric approach, we stand out in the industry.
               Choose us for unparalleled quality, reliability, and a personalized experience that goes beyond your expectations.
                Join hands with us and embark on a journey of service excellence that's
             tailored to your unique needs. Your success is our success, and we're here to make it happen.</p>
        <button className=' rounded-xl xl:h-12 lg:h-12 md:h-12  xl:w-44 lg:w-44 md:w-44 h-10 w-36 bg-gray-400 font-bold text-white'>Our Story</button>

    </div>
    <div className='  flex justify-center items-center flex-col relative py-16 '>
        <img src="../asets/img/about-baner-1_cvxzp8.webp" alt="" />
        <img src="../asets/img/about-baner-2_mqowwr.webp" alt="" className=' absolute xl:right-3 lg:right-0 md:right-16 sm:right-1 right-0 bottom-6' />
    </div>

  </div>
  </>
  )
}
