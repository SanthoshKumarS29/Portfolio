import React from 'react';
import about from '../assets/About.jpeg';
import csv from '../assets/Santhosh-Resume.pdf'


const About = () => {
    return (
        <div id="About">
            <div className='max-w-[1240px] mx-auto text-black py-10 lg:py-16 px-4'>
                <div className='grid md:grid-cols-2 items-center justify-between'>
                    <img src={about} alt="About Image" className='lg:w-[300px] mx-auto py-6 w-[300px] rounded-[50%] ' />
                    <div className='flex flex-col gap-4 justify-center text-white w-full'>
                        <p className='text-[#7a50eb] font-bold text-lg md:text-xl'>About Me</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lets Introduce Myself...</h1>
                        <p className='text-xl'>Hi, I'm Santhosh, a passionate developer skilled in MERN Stack, Python(Django) and Tailwind CSS. I enjoy creating elegant solutions for complex problems, from intuitive user interfaces to robust backend systems. Always eager to learn and grow</p>
                        <button className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold my-6 md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-black ease-in-out duration-500'><a href={csv}  download="Santhosh-Resume.pdf">Download CV</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
