import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Blog2() {
  return (
 <>
 <div className=' bg-gray-900 grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1  pb-36 pt-28  xl:px-28 px-3 md:px-8 sm:px-6'>
    <div className='  flex justify-end pt-5'>
        <div  className='  h-64 space-y-6 pt-6 lg:w-96 sm:w-full w-full border px-10 rounded-lg'>
            <h2 className=' text-3xl text-white underline' >CATEGORY</h2>
            <div className='  flex justify-between items-center '>
                <h2 className=' text-xl text-white'>Artificial Intelligence</h2>
                <FaArrowRight  className=' text-white text-xl hover:text-teal-500  duration-300 cursor-pointer'/>
            </div>
            <div className='  flex justify-between items-center '>
                <h2 className=' text-xl text-white'>Blockchain</h2>
                <FaArrowRight  className=' text-white text-xl hover:text-teal-500  duration-300 cursor-pointer'/>
            </div>
            <div className='  flex justify-between items-center '>
                <h2 className=' text-xl text-white'>Web Development</h2>
                <FaArrowRight  className=' text-white text-xl hover:text-teal-500  duration-300 cursor-pointer'/>
            </div>
        </div>
    </div>
    <div className="flex flex-wrap  justify-center col-span-2 ">
      
      <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-3/5    p-4 relative">
   
      <div className="bg-white rounded-lg shadow-lg overflow-hidden   pb-20  relative ">
         <Link to='/blogdetail'>
         <img src="../asets/img/Group_1261152779_yjjqvz.webp" alt="" className=' duration-500 hover:scale-110 hover:skew-y-3' />
         </Link>
 
  <button className='absolute top-4 left-4 bg-teal-500 text-black  rounded-full font-bold h-8 w-24 '>Blockchain</button>
  
  <div className="black-overlay absolute bottom-0 w-full  bg-black opacity-100 transition-all duration-300 pl-4 pb-2 pt-2">
    <h2 className='text-white text-xl'>The Future Of Blockchain Technology: Trends And Predictions For 2024</h2>
  </div>
</div>

      </div>

     
      <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-3/5   p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden   pb-20  relative ">
<img src="../asets/img/Group_1261152780_qby2bh.webp" alt="" className=' duration-500 hover:scale-110 hover:skew-y-3' />
<button className='absolute top-4 left-4 bg-teal-500 text-black  rounded-full font-bold h-8 w-24 '>Al</button>

<div className="black-overlay absolute bottom-0 w-full  bg-black opacity-100 transition-all duration-300 pl-4 pb-2 pt-2">
 <h2 className='text-white text-xl'>Exploring The Role Of AI In Blockchain: Enhancing Security And Efficiency</h2>
</div>
</div>

   </div>

   <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-3/5   p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden   pb-20  relative ">
<img src="../asets/img/robotic-hand-holograms-rpa-concept_1_hznsrw.webp" alt=" " className=' duration-500 hover:scale-110 hover:skew-y-3' />
<button className='absolute top-4 left-4 bg-teal-500 text-black  rounded-full font-bold h-8 w-24 '>Defi</button>

<div className="black-overlay absolute bottom-0 w-full  bg-black opacity-100 transition-all duration-300 pl-4 pb-2 pt-2">
 <h2 className='text-white text-xl'>Understanding Decentralized Finance (DeFi) And Its Impact On Traditional Banking</h2>
</div>
</div>

   </div>

   <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-3/5   p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden   pb-20  relative ">
<img src="../asets/img/man-using-laptop-work-connect-with-others_1_wxcims.webp" alt="" className=' duration-500 hover:scale-110 hover:skew-y-3' />
<button className='absolute top-4 left-4 bg-teal-500 text-black text-[12px]  rounded-full font-bold h-8 w-28 '>Gaming Industry</button>

<div className="black-overlay absolute bottom-0 w-full  bg-black opacity-100 transition-all duration-300 pl-4 pb-2 pt-2">
 <h2 className='text-white text-xl'>Blockchain's Impact On Supply Chain Management: Enhancing Transparency And Traceability</h2>
</div>
</div>

   </div>
   <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-3/5   p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden   pb-20  relative ">
<img src="../asets/img/gcgame_bpyyj6.webp" alt="" className=' duration-500 hover:scale-110 hover:skew-y-3' />
<button className='absolute top-4 left-4 bg-teal-500 text-black  rounded-full font-bold h-8 w-24 '>Al</button>

<div className="black-overlay absolute bottom-0 w-full  bg-black opacity-100 transition-all duration-300 pl-4 pb-2 pt-2">
 <h2 className='text-white text-xl'>The Role Of Blockchain In The Gaming Industry: NFTs, Virtual Economies, And Beyond</h2>
</div>
</div>

   </div>
   <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-3/5   p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden   pb-20  relative ">
<img src="../asets/img/blog_6_fevmtp.webp" alt="" className=' duration-500 hover:scale-110 hover:skew-y-3' />
<button className='absolute top-4 left-4 bg-teal-500 text-black  rounded-full font-bold h-8 w-24 '>Blockchain</button>

<div className="black-overlay absolute bottom-0 w-full  bg-black opacity-100 transition-all duration-300 pl-4 pb-2 pt-2">
 <h2 className='text-white text-xl'>Leveraging AI For Enhanced Customer Experience In Blockchain-Based Platforms</h2>
</div>
</div>

   </div>
    </div>

 </div>
 </>
  )
}
