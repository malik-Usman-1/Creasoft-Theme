import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();





export default function Navbar() {
    const [showNavbar, setShownavbar] = useState(false)
    const [showcompo, setshowcompo] = useState(false)

    const open = () => {
        setShownavbar(true)
    }
    const openpage = () => {
        setshowcompo(true)
    }
    return (
        <>
            <div className='  fixed  h-20 w-full grid xl:grid-cols-4 sm:grid-cols-4 grid-cols-4  z-50  bg-gray-900'>
                <div data-aos-duration="3000" data-aos="fade-right"  className='  flex col-span-2  sm:col-span-1  justify-center items-center  px-3'>
                    <img src="./asets/img/logo (1).svg" alt="" />
                </div>
                <div   className='  xl:col-span-3  sm:col-span-3 col-span-2 flex sm:justify-end justify-end sm:pr-7 pr-6 items-center sm:items-center '>
                    <button onClick={open} className='  lg:hidden xl:hidden h-12 text-3xl sm:flex flex  sm:justify-center sm:items-center  md:flex justify-center items-center w-14  text-teal-500'>
                        <GiHamburgerMenu />
                    </button>
                    {showNavbar === true && (

                        <div className="fixed h-screen w-56 bg-black inset-0 right-0  z-[99999] duration-300 flex flex-col justify-center items-center ">
                            <button className='text-white absolute top-5 right-5 text-2xl' onClick={() => setShownavbar(false)}>X</button>
                            <ul className="text-white text-lg">
                                <Link to='/'>
                                    <li className=' text-white lg:text-sm'>Home</li>

                                </Link>
                                <Link to='/blog'>
                                    <li className=' text-white lg:text-sm'>Blogs</li>
                                </Link>

                                <Link to='/project'>
                                    <li className=' text-white lg:text-sm'>Projects</li>
                                </Link>

                                <Link to='/about'>
                                    <li className=' text-white lg:text-sm'>About Us</li>

                                </Link>






                                <li className=' text-white lg:text-sm'>Job portal</li>
                                <Link to='/service'>
                                    <li className=' text-white lg:text-sm'>Services</li>
                                </Link>
                                <Link to='/contact'>
                                    <li className=' text-white lg:text-sm'>Contact Us</li>
                                </Link>


                            </ul>
                        </div>


                    )}
                    <ul data-aos-duration="3000"  data-aos="fade-left" className=' hidden  lg:flex h-full  w-[72%]  xl:flex justify-end items-center xl:gap-10 lg:gap-7'>
                        <Link to='/'>
                            <li className=' text-teal-500 lg:text-sm'>Home</li>

                        </Link>
                        <Link to='/blog'>
                            <li className=' text-white hover:text-teal-500 duration-300 lg:text-sm'>Blogs</li>
                        </Link>

                        <Link to='/project'>
                            <li className=' text-white hover:text-teal-500 duration-300 lg:text-sm'>Projects</li>
                        </Link>

                        <Link to='/about'>
                            <li className=' text-white hover:text-teal-500 duration-300 lg:text-sm'>About Us</li>

                        </Link>






                        <li className=' text-white hover:text-teal-500 duration-300 lg:text-sm'>Job portal</li>
                        <Link to='/service'>
                            <li className=' text-white hover:text-teal-500 duration-300 lg:text-sm'>Services</li>
                        </Link>
                        <Link to='/contact'>
                            <li className=' text-white hover:text-teal-500 duration-300 lg:text-sm'>Contact Us</li>
                        </Link>






                    </ul>
                    <div className=' hidden h-full  xl:w-[28%] lg:w-[28%] md:w-[40%] md:flex xl:flex pl-5 items-center'>
                        <button onClick={openpage} className=' hidden md:block xl:block h-14 w-48  duration-300 bg-black hover:bg-teal-500 hover:text-black font-bold text-white'>Get Consulation</button>
                        
                        {
                            showcompo && (
                                <div className='flex justify-center items-center h-screen absolute left-1/2'>
                                    <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-50'></div>
                                    <div className='bg-black fixed top-5 p-20 md:w-1/2 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50'>
                                        <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setshowcompo(false)}>X</h1>
                                        <div className='flex justify-between  items-center'>
                                            <div>
                                                <img src="./img/Group_1261152774_zjd1pb.svg" alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-3xl lg:text-5xl font-bold text-[#63B597]'>01</h4>
                                            </div>
                                        </div>
                                        <h4 className='text-xl lg:text-3xl font-bold text-white tracking-wider'>Usman Developer</h4>
                                        <p className='text-sm lg:text-base text-white tracking-wider'>At Creasoft, we're not just a service provider; we're your dedicated partner in success. Our commitment to excellence permeates every aspect of what we do. With a team of seasoned experts, a proven track record of delivering results, and a client-centric approach, we stand out in the industry. Choose us for unparalleled quality, reliability, and a personalized experience that goes beyond your expectations. Join hands with us and embark on a journey of service excellence that's tailored to your unique needs. Your success is our success, and we're here to make it happen.</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>



            </div>
        </>
    )
}
