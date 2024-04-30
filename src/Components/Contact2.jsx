import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

export default function Contact2() {
  return (
   <>
   <div className='  grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8 w-full bg-gray-900 xl:px-28 px-3 md:px-8 sm:px-6 pb-36 pt-20'>
   <div className=' space-y-8 p-6'>
  <h2 className='text-white text-5xl font-bold'>Contact Us If You Have More Questions.</h2>
  <div className='flex flex-col md:flex-row md:items-center group gap-4'>
    <div className='h-24 bg-gray-600 w-24 rounded-full text-white text-4xl flex justify-center items-center group-hover:text-teal-500 duration-300'>
      <FaLocationDot />
    </div>
    <div className='flex-1 '>
      <h2 className='text-white text-3xl font-bold'> Location </h2>
      <p className='text-white text-sm'>2001, City Tower 2, Near Emirates Tower Metro station, Sheikh Zaid road Dubai</p>
    </div>
  </div>
  <div className='flex flex-col md:flex-row md:items-center group gap-4'>
    <div className='h-24 bg-gray-600 w-24 rounded-full text-white text-4xl flex justify-center items-center group-hover:text-teal-500 duration-300'>
      <IoCall />
    </div>
    <div className='flex-1 '>
      <h2 className='text-white text-3xl font-bold'> Phone </h2>
      <p className='text-white text-sm'>03164466401</p>
    </div>
  </div>
  <div className='flex flex-col md:flex-row md:items-center group gap-4'>
    <div className='h-24 bg-gray-600 w-24 rounded-full text-white text-4xl flex justify-center items-center group-hover:text-teal-500 duration-300'>
      <MdMailOutline />
    </div>
    <div className='flex-1 '>
      <h2 className='text-white text-3xl font-bold'> Email </h2>
      <p className='text-white text-sm'>ujamshaid@gmail.com</p>
    </div>
  </div>
  <div className='flex justify-center'>
    <button className='h-12 w-40 rounded-xl hover:text-black hover:bg-teal-500 duration-300 font-bold bg-gray-400 text-white'>Book Meeting</button>
  </div>
</div>

    <div className='  '>
        <img src="../asets/img/vt (2).png" alt="" />
    </div>

   </div>
   </>
  )
}
