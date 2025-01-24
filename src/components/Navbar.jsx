import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

  return (
    <div>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black'>
            <h1 className='w-full text-3xl font-bold text-[#7a50eb] font-customFont'>Santhosh.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#hero">Home</a></li>
                <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#About">About</a></li>
                <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Education">Education</a></li>
                <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Project">Projects</a></li>
                <li className='p-4 font-medium cursor-pointer hover:text-[#7a50eb] duration-300'><a href="#Contact">Contact</a></li>
            </ul>
            <div>
                <a href="https://github.com/SanthoshKumarS29" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-3xl hover:text-[#7a50eb] block md:hidden" />
                </a>
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
  )
}

export default Navbar
