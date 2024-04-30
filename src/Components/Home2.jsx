import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegIdCard } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home2() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [slides, setSlides] = useState(
      Array.from({ length: 12 }).map((_, index) => `Slide ${index + 1}`)
    );
  
    return (
      <>
        <div className=' bg-black xl:px-24 px-3 md:px-8 sm:px-6 pb-5 pt-20 '>
        <div  data-aos="fade-up" data-aos-duration="3000" className='   flex justify-center items-center flex-col gap-3 text-center'>
    <div className='   w-[40%] space-y-6'>
    <h2 className='text-4xl text-white   font-bold'>Services</h2>
            <p className='text-white text-sm'>Discover the Scope of Our Expertise. Leveraging comprehensive full-stack Blockchain solutions, we develop cutting-edge products and empower businesses to establish robust financial frameworks.</p>
    </div>
            
          </div>
          <div  data-aos="fade-up" data-aos-duration="3000" className='h-3/5 w-full pt-14 '>
            <Swiper
              modules={[Virtual, Navigation, Pagination]}
              onSwiper={setSwiperRef}
              slidesPerView={1} // By default, show 1 slide
              spaceBetween={30}
              virtual
              breakpoints={{
                // When window width is >= 1200px (xl)
                
                1200: {
                  slidesPerView: 3, // Show 3 slides
                },
                // When window width is >= 992px (lg)
                992: {
                  slidesPerView: 3, // Show 3 slides
                },
                // When window width is >= 768px (md)
                768: {
                  slidesPerView: 2, // Show 2 slides
                },
                // When window width is >= 576px (sm)
                576: {
                  slidesPerView: 2, // Show 2 slides
                },
              }}
            >
              {slides.map((slideContent, index) => (
                <SwiperSlide key={index} className='flex items-center justify-center bg-gray-900'>
                  <div className=' bg-gray-900 h-full max-w-lg'>
                    <div className='h-32 flex justify-between items-center px-4'>
                      <FaRegIdCard className='text-5xl text-teal-500' />
                      <h2 className='text-5xl font-bold'>02</h2>
                    </div>
                    <div className='p-6 gap-2 flex flex-col items-start'>
                      <h2 className='text-2xl text-white font-bold'>Web Develpmont</h2>
                      <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ea, accusamus explicabo perferendis consequatur eveniet.</p>
                    </div>
                    <div className='absolute right-0 bottom-2 mr-4'> 
                      <button className=' text-white'>Read more</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    )
}
