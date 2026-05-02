import React from 'react';
import hero from '../assets/hero.jpeg';

const Home = () => {
    return (
        <div id='hero'>
            <div className='h-screen place-content-center py-10 lg:py-16 px-lg-12 banner'>
                <div className='text-center space-y-7 max-w-[1240px] mx-auto '>
                    <h1 className='text-4xl md:text-7xl lg:text-9xl uppercase hover:tracking-wider duration-200 ease-in-out'><span className='text-[#7a50eb]'>S</span><span className='text-xl md:text-5xl lg:text-8xl'>anthosh</span> <br className='hidden lg:block'/><span className='text-[#7a50eb]'>K</span><span className='text-xl md:text-5xl lg:text-8xl'>umar</span></h1>
                    <p className='md:text-end pr-5'><a href="#Project">— <span className='hover:text-[#7a50eb] cursor-pointer duration-300 ease-in-out'>Frontend Developer</span> | <span className='hover:text-[#7a50eb] cursor-pointer duration-300 ease-in-out'>React & Tailwind Enthusiast</span></a></p>
                    <p className='text-xl lg:text-3xl'>Building cool, fast, and responsive UIs because the web deserves better!</p>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        <button className='py-4 border-2 border-[#7a50eb] w-[200px] rounded-md font-bold hover:bg-[#7a50eb] ease-in-out duration-500 hidden lg:block'><a href="#Contact">Get in Touch</a></button>
                        <button className='py-4 border-2 border-[#7a50eb] w-[200px] rounded-md font-bold hover:bg-[#7a50eb] ease-in-out duration-500' type='button'><a href="./santhoshResume.pdf" download="Santhosh_Kumar_Resume.pdf" target='_blank'>Download Cv</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
