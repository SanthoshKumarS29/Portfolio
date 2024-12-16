import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const urls = {Lindein: 'import.meta.env.LINKDIN_URL', Github:'import.meta.env.GITHUB_URL', Whatsapp:'import.meta.env.WHATSUPP_URL'}

  return (
    <div id='Contact'>
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-white'>
            <div className="shadow-lg p-6 rounded-lg mb-10">
                <h3 className="text-2xl text-center font-semibold text-[#7a50eb]">Get In Touch</h3>
                <p className='text-xl text-center py-5 font-semibold'>Message Me In Linkedin</p>
                <div className="flex space-x-4 justify-center">
                    <a href={urls.Lindein} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
                    </a>
                    <a href={urls.Github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
                    </a>
                    <a href={urls.Whatsapp} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact