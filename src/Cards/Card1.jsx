import React from 'react'
import { FaRegIdCard } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Card1({Data}) {
  return (
    <>
     <div className=' bg-black  pb-8 '>
                    <div className='h-32 flex justify-between items-center px-4'>
                      <FaRegIdCard className='text-5xl text-teal-500' />
                      <h2 className='text-5xl text-white font-bold'>{Data.head1}</h2>
                    </div>
                    <div className='p-6 gap-2 flex flex-col items-start'>
                      <h2 className='text-2xl text-white font-bold'>{Data.head2}</h2>
                      <p className='text-sm text-white'>{Data.para1}</p>
                      <div className='  w-full relative '> 
                      <Link to='/servicedetail'>
                      <button className=' absolute right-0 text-white'>Read more</button>
                      </Link>
                     
                    </div>
                    </div>
                   
                  </div>
    </>
  )
}
