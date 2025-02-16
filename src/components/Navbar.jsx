import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { IoMailUnreadOutline } from "react-icons/io5";

const Navbar = () => {

  return (
    <div>
        <div className='fixed w-[100%]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className=' flex justify-between items-center h-20 px-4 text-white bg-black'>
                    <h1 className='text-3xl font-bold text-[#7a50eb] font-customFont'>Santhosh.</h1>
                    <ul className='hidden md:flex'>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#hero">Home</a></li>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#About">About</a></li>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Education">Education</a></li>
                        <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Project">Projects</a></li>
                    </ul>
                    <ol className='flex justify-end'>
                        <li className='hidden md:block px-6 py-2 font-medium border border-[#7a50eb] rounded-3xl cursor-pointer hover:bg-[#7a50eb] duration-300'><a href="#Contact" >Contact</a></li>
                        <li className='block md:hidden px-4 py-4 font-medium border border-[#7a50eb] rounded-full cursor-pointer hover:bg-[#7a50eb] duration-300'><a href="#Contact"><IoMailUnreadOutline /></a></li>
                    </ol>
                    {/* <div className='block md:hidden'>
                        <a href="https://github.com/SanthoshKumarS29" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white text-3xl hover:text-[#7a50eb]" />
                        </a>
                    </div> */}
                </div>
            </div>
            {/* <div className='fixed left-4 bottom-5 w-[90%] h-[10%] border-2 border-[#7a50eb] rounded-3xl bg-[#000300] ease-in-out duration-300 z-10 block md:hidden'>
                <ul className='uppercase p-4 flex justify-around items-center h-full'>
                    <li className='flex flex-col items-center p-2 font-medium cursor-pointer text-white rounded-full hover:bg-[#7a50eb] duration-300'>
                        <a href="#hero" className='flex flex-col items-center'>
                            <GiCastle size={22} />
                        </a>
                    </li>
                    <li className='flex flex-col items-center p-2 font-medium cursor-pointer text-white rounded-full hover:bg-[#7a50eb] duration-300'>
                        <a href="#About" className='flex flex-col items-center'>
                            <GiHumanTarget size={24} />
                        </a>
                    </li>
                    <li className='flex flex-col items-center p-2 font-medium cursor-pointer text-white rounded-full hover:bg-[#7a50eb] duration-300'>
                        <a href="#Education" className='flex flex-col items-center'>
                            <GiPaperPlane size={20} />
                        </a>
                    </li>
                    <li className='flex flex-col items-center p-2 font-medium cursor-pointer text-white rounded-full hover:bg-[#7a50eb] duration-300'>
                        <a href="#Project" className='flex flex-col items-center'>
                            <GiSwordSpade size={20} />
                        </a>
                    </li>
                    <li className='flex flex-col items-center p-2 font-medium cursor-pointer text-white rounded-full hover:bg-[#7a50eb] duration-300'>
                        <a href="#Contact" className='flex flex-col items-center'>
                            <GiAbstract021 size={20} />
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar
