import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='Contact'>
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-white'>
            <div className="shadow-lg p-6 rounded-lg mb-10">
                <h3 className="text-2xl text-center font-semibold text-[#7a50eb]">Get In Touch</h3>
                <p className='text-xl text-center py-5 font-semibold'>Message Me In Linkedin</p>
                <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/sk-frontenddev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
                    </a>
                    <a href="https://github.com/SanthoshKumarS29" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
                    </a>
                    <a href="https://wa.me//9751093403/" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact