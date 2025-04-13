import React, { useState } from 'react'
import { RiRobot3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import ChatBot from '../components/chatbot/shareContext/Bot'

const Navbar = () => {

    const [open,setOpen] = useState(false)

    const toggleChatbot = () => {
        setOpen(prev => !prev);
    };

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
                        <li className='hidden md:block px-6 py-2 font-medium border border-[#7a50eb] rounded-3xl cursor-pointer hover:bg-[#7a50eb] duration-300' onClick={toggleChatbot}>
                        {open ? <p>Close</p> : <p>ChatBot</p>}
                        </li>
                        <li className='block md:hidden px-4 py-4 font-medium border border-[#7a50eb] rounded-full cursor-pointer hover:bg-[#7a50eb] duration-300' onClick={toggleChatbot}>
                            {open ? <IoMdClose size={20} /> : <RiRobot3Fill size={20} />}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        {open && (
                <div className='fixed z-10 w-full h-full flex justify-center items-center'>
                    <div className='w-100'>
                        <ChatBot /> 
                    </div>
                </div>
            )}
    </div>
  )
}

export default Navbar
