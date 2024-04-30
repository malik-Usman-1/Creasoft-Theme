import React from 'react'

export default function Home3() {
  return (
  <>
  <div className='  pb-20 pt-20 w-full bg-gray-900 xl:px-24 px-3 md:px-8 sm:px-6'>
  <div className='     flex justify-center items-center flex-col gap-3 text-center'>
    <div className='  w-[60%] space-y-6'>
    <h2 className='text-4xl text-white   font-bold'>Excelling In <span className=' text-teal-400'> Mobile Applications</span> Development</h2>
            <p className='text-white text-sm'>Discover the Scope of Our Expertise. Leveraging comprehensive full-stack Blockchain solutions, we develop cutting-edge products and empower businesses to establish robust financial frameworks.</p>
    </div>
            
          </div>
          <div className='  w-full flex flex-wrap justify-center  pt-14 '>
          <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/4 p-3 duration-500   -skew-y-6 hover:skew-y-0">
        <div className="bg-black gap-4 rounded-lg shadow-lg flex justify-center items-center flex-col pt-20 pb-24">
        <img src="../asets/img/Group_1261152778_en6rux.svg" alt="" />

          <h2 className="text-2xl text-white font-semibold mb-4">100 +</h2>
          <p className="text-white">Project Completed</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/4 p-3 duration-500 -skew-y-6 hover:skew-y-0 ">
        <div className="bg-black gap-4 rounded-lg shadow-lg flex justify-center items-center flex-col pt-20 pb-24">
        <img src="../asets/img/Group_1261152766_a1rxcw.svg" alt="" />

          <h2 className="text-2xl text-white font-semibold mb-4">120 +</h2>
          <p className="text-white">Satisfied Clients</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/4 p-3 duration-500 -skew-y-6 hover:skew-y-0">
        <div className="bg-black gap-4 rounded-lg shadow-lg flex justify-center items-center flex-col pt-20 pb-24">
        <img src="../asets/img/Group_1261152774_zjd1pb.svg" alt="" />

          <h2 className="text-2xl text-white font-semibold mb-4">50 +</h2>
          <p className="text-white">Expert Teams</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className=" max-w-xs w-full sm:max-w-sm sm:w-1/2 lg:w-1/4 p-3 duration-500 -skew-y-6 hover:skew-y-0">
        <div className="bg-black gap-4 rounded-lg shadow-lg flex justify-center items-center  flex-col pt-20 pb-24">
            <img src="../asets/img/Group_1261152772_pacezz.svg" alt="" />
          <h2 className="text-2xl text-white font-semibold mb-4">10 +</h2>
          <p className="text-white">Win Awards</p>
        </div>
      </div>
          </div>
  </div>
  </>
  )
}
