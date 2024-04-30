import React from 'react'
import { Link } from 'react-router-dom'

export default function Project2() {
  return (
    <>
  <div className=' pb-24 pt-20 w-full bg-gray-900 xl:px-28 px-3 md:px-8 sm:px-6'>
  <div className='  flex justify-center flex-col w-full  items-center py-10  gap-6'>
        <h2 className=' text-white font-bold text-5xl'>Project</h2>
       <p className=' text-white'>Unlock Success with Our Expert Service Offerings - Get Started Today!</p>
        {/* <button className=' rounded-xl xl:h-12 lg:h-12 md:h-12  xl:w-44 lg:w-44 md:w-44 h-10 w-36 bg-gray-400 font-bold text-white'>Our Story</button> */}

    </div>

    <div className="flex flex-wrap justify-center ">
      {/* Card 1 */}
      <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4 relative">
   
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group ">
          <Link to='/projectdetail'>
          <img src="../asets/img/Card-Image_tbal7g.webp" alt="" />
          </Link>
       
        
          <div className="black-overlay absolute bottom-3 left-4 w-[90%] h-12 group-hover:h-20 bg-black opacity-100 transition-all duration-300 pl-4 pt-2 ">
            <h2 className=' text-white text-xl'>MintStargram Tech</h2>
          </div>
        </div>
      </div>

     
      <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group  ">
   <Link to='/projectdetail'>
   <img src="../asets/img/Group_1261152861_sdjjzi.webp" alt="" />
   </Link>
   
     <div className="black-overlay absolute bottom-3 left-4 w-[90%]  h-12 group-hover:h-20 bg-black opacity-100 transition-all duration-300 pl-4 pt-2 ">
       <h2 className=' text-white text-xl'>Jones Dao</h2>
     </div>
     
   </div>
 </div>

 <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group ">
   <Link to='/projectdetail'>
   <img src="../asets/img/Group_1261152993_evuogr.webp" alt="" />
   </Link>
   
     <div className="black-overlay absolute bottom-3 left-4 w-[90%] h-12 group-hover:h-20 bg-black opacity-100 transition-all duration-300 pl-4 pt-2 ">
       <h2 className=' text-white text-xl'>Pendel finance</h2>
     </div>
   </div>
 </div>

 <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group ">
   <Link to='/projectdetail'>
   <img src="../asets/img/Group_1261152994_dygtcf.webp" alt="" />
   </Link>
   
     <div className="black-overlay absolute bottom-3 left-4 w-[90%] h-12 group-hover:h-20 bg-black opacity-100 transition-all duration-300 pl-4 pt-2 ">
       <h2 className=' text-white text-xl'>Symbiosis</h2>
     </div>
   </div>
 </div>

 <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group ">
   <Link to='/projectdetail'>
   <img src="../asets/img/Group_1261152991_fngg0d.webp" alt="" />
   </Link>
   
     <div className="black-overlay absolute bottom-3 left-4 w-[90%] h-12 group-hover:h-20 bg-black opacity-100 transition-all duration-300 pl-4 pt-2 ">
       <h2 className=' text-white text-xl'>Copin</h2>
     </div>
   </div>
 </div>

 <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/3 p-4 relative">
   
   <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group ">
   <Link to='/projectdetail'>
   <img src="../asets/img/Group_1261153003_lztwck.webp" alt="" />
   </Link>
   
     <div className="black-overlay absolute bottom-3 left-4 w-[90%] h-12 group-hover:h-20 bg-black opacity-100 transition-all duration-300 pl-4 pt-2 ">
       <h2 className=' text-white text-xl'>Ayanza</h2>
     </div>
   </div>
 </div>
    </div>
    <div className=' py-14 flex justify-center items-center'>
    <button className=' xl:h-12 lg:h-12 md:h-12  xl:w-44 lg:w-44 md:w-44 h-10 w-36 bg-black font-bold text-white'>View More</button>

    </div>

  </div>
  </>
  )
}
