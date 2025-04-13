import React from 'react';
import about from '/usuals/About.webp';
// import csv from '../assets/Santhosh-Resume.pdf'


const About = () => {
    return (
        <div id="About">
            <div className='py-7 lg:py-16 px-4 text-white'>
                <div className='grid md:grid-cols-2 gap-10 place-content-center place-items-center'>
                    <div className='space-y-10'>
                        <p className='text-4xl text-[#7a50eb]'>About Me</p>
                        <h4 className='text-xl'>Hey, I'm Sk! A MERN Stack developer who loves turning ideas into smooth, functional web experiences with Tailwind CSS. <span className='hidden md:block'>Always exploring, always improving! Let's build something awesome together.</span></h4>
                        <div className='flex gap-10'>
                            <div className='space-y-4'>
                                <h3 className='border-b-4 border-[#7a50eb] py-3 text-xl'>Education</h3>
                                <p>Grace Matric Hr Sec School 2018-2020 with<span className='text-xl font-bold text-[#7a50eb]'> 57% </span>of mark</p>
                                <p>KLN Arts and Science College 2020-2023 with<span className='text-xl font-bold text-[#7a50eb]'> 71% </span>of mark</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='border-b-4 border-[#7a50eb] py-3 text-xl'>Experience</h3>
                                <p>Built React,Django skills in a 4-month internship at <span className='text-xl font-bold text-[#7a50eb]'>WizIona.</span></p>
                                <p>Worked on full-stack projects in a 3-month internship at <span className='text-xl font-bold text-[#7a50eb]'>Servwing.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src={about} alt="this is about image" className='w-[400px] h-[550px] object-cover rounded-lg'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
