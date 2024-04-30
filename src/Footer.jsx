import React from 'react'

export default function Footer() {
  return (
   <>
    <div className='p-5 md:p-12 bg-black'>
            <footer className='xl:flex flex-wrap  text-white justify-evenly'>
                <ul className='space-y-4'>
                    <li><img src="./img/logo (1).svg" alt="" /></li>
                    <li>At Creasoft, we're not just a service <br /> provider; we're your dedicated partner in <br /> success. Our commitment to excellence <br /> permeates every aspect of what we do.</li>
                </ul>
                <ul className='space-y-4'>
                    <li className='text-lg md:text-2xl font-bold'>Our Services</li>
                    <li>AI Development</li>
                    <li>Blockchain Development</li>
                    <li>Web Development</li>
                    <li>UI/UX Designing</li>
                    <li>Digital Marketing</li>
                    <li>Metaverse Development</li>
                </ul>
                <ul className='space-y-4'>
                    <li className='text-lg md:text-2xl font-bold'>Quick Links</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blogs</li>
                    <li>Privacy</li>
                    <li>Term of Use</li>
                </ul>
                <ul className='space-y-4'>
                    <li className='text-lg md:text-2xl font-bold'>Contacts</li>
                    <li>+971506443271</li>
                    <li>info@creasoft.io</li>
                    <li>2001, City Tower 2, Near <br /> Emirates Tower Metro station, <br /> Sheikh Zaid road Dubai</li>
                </ul>
            </footer>
            <hr className='mt-8' />
            <p className='text-gray-100 text-center px-5 md:px-44 pt-8 '>© Copyright 2023 Crea soft</p>
        </div>


   </>
  )
}
