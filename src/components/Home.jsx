import React from 'react';
import hero from '../assets/hero.jpeg';

const Home = () => {
    return (
        <div id='hero'>
            <div className='h-screen place-content-center py-10 lg:py-16 px-lg-12'>
                {/* <div className='grid md:grid-cols-2 items-center justify-center'>
                    <div className='flex flex-col gap-4 justify-center text-white'>
                        <p className='text-[#7a50eb] font-bold'>Hi, I am</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SANTHOSH KUMAR</h1>
                        <p className='text-xl'>Building digital experiences with careful coding and creative design. Welcome to my world, where every detail matters</p>
                        <button className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold my-6 md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-black ease-in-out duration-500'><a href="#Contact">Hire Me</a></button>
                    </div>
                    <img src={hero} alt="Hero Image" className="lg:w-[300px] mx-auto py-6 w-[300px] rounded-[50%] hidden md:block" />
                </div> */}
                <div className='text-center space-y-7'>
                    <h1 className='text-4xl md:text-9xl uppercase hover:tracking-wider duration-200 ease-in-out'><span className='text-[#7a50eb]'>S</span><span className='text-xl md:text-8xl'>anthosh</span> <br className='hidden md:block'/><span className='text-[#7a50eb]'>K</span><span className='text-xl md:text-8xl'>umar</span></h1>
                    <p className='md:text-end pr-5'><a href="#Project">— <span className='hover:text-[#7a50eb] cursor-pointer duration-300 ease-in-out'>Frontend Developer</span> | <span className='hover:text-[#7a50eb] cursor-pointer duration-300 ease-in-out'>React & Tailwind Enthusiast</span></a></p>
                    <h6 className='text-xl lg:text-3xl'>Building cool, fast, and responsive UIs—because the web deserves better!</h6>
                    <button className='py-4 border-2 border-[#7a50eb] w-[200px] rounded-md font-bold hover:bg-[#7a50eb] ease-in-out duration-500'><a href="#Contact">Get in Touch</a></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
