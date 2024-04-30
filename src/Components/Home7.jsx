
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Home7() {
  return (
   <>
   <div className=' w-full bg-gray-900 xl:px-28 px-3 md:px-8 sm:px-6 pt-24 pb-24'>
    <div className='h-2/5  flex justify-center items-center flex-col gap-3 text-center '>
            <h2 className='text-4xl text-white'>Client Say About Us</h2>
            <p className='text-white text-lg'>Discover the Scope of Our Expertise. Leveraging comprehensive full-stack Blockchain solutions, we develop cutting-edge products and empower businesses to establish robust financial frameworks.</p>
          </div>
          <div className='  xl:px-44 sm:px-7 pt-10 lg:px-16 px-4'>
          <Swiper
          
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
            <div className='  bg-black h-full flex flex-col items-start justify-center xl:gap-6 lg:gap-4 md:gap-4 sm:gap-4 gap-1 pb-28 pt-28 px-20'>
                <h2 className='text-white xl:text-4xl text-2xl lg:text-4xl  md:text-2xl sm:text-2xl  '>Nathan C.</h2>
                <p className=' text-white text-[11px] sm:text-[12px] md:text-sm lg:text-lg xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Nathan_C_r9eil7.webp" alt="" className=' ' />
                     </div>
            </div>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>John H.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/John_A_fhneig.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>Sarah M.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Olivia_F_srw5wc.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>Mustafa C.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Lucas_H_mcccx3.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>David P.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Nathan_C_r9eil7.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>Alice L.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Nathan_C_r9eil7.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>Warner C.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Nathan_C_r9eil7.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='  bg-black h-full flex flex-col items-start justify-center gap-6 px-20'>
                <h2 className='text-white text-4xl '>Mitchal S.</h2>
                <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae rem voluptatum, blanditiis
                     ratione laborum quibusdam 
                    quasi.
                     Totam excepturi obcaecati quia possimus cupiditate corporis ipsam esse, quae perferendis incidunt voluptas?</p>
                     <div className=' h-14 w-14'>
                     <img src="../asets/img/Nathan_C_r9eil7.webp" alt="" className=' ' />
                     </div>
            </div>
        </SwiperSlide>
      
      </Swiper>
          </div>
          </div>
   </>
  )
}
