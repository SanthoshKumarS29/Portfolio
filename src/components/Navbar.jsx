import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoMailUnreadOutline } from "react-icons/io5";

const Navbar = () => {

  return (
    <div>
        <div className='fixed w-[100%] z-50 top-0'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='flex justify-between items-center h-20 px-4 text-white bg-black'>
                    <h1 className='text-3xl font-bold text-[#7a50eb] font-customFont'>Santhosh.</h1>
                    <ul className='hidden md:flex'>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#hero">Home</a></li>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#About">About</a></li>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Education">TechStack</a></li>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Project">Projects</a></li>
                    </ul>
                    <ol className='flex justify-end'>
                        <li className='hidden md:block px-6 py-2 font-medium border border-[#7a50eb] rounded-3xl cursor-pointer hover:bg-[#7a50eb] duration-300'><a href="#Contact" >Contact</a></li>
                        <li className='block md:hidden px-4 py-4 font-medium border border-[#7a50eb] rounded-full cursor-pointer hover:bg-[#7a50eb] duration-300'><a href="#Contact"><IoMailUnreadOutline /></a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
