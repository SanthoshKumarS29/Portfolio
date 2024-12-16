import React from 'react';
import hero from '../assets/hero.jpeg';

const Home = () => {
    return (
        <div id='hero'> 
            <div className='max-w-[1240px] mx-auto xl:h-screen place-content-center py-10 lg:py-16 px-4 '>
                <div className='grid md:grid-cols-2 items-center justify-center'>
                    {/* Text Content With Animation */}
                    <div className='flex flex-col gap-4 justify-center text-white'>
                        <p className='text-[#7a50eb] font-bold'>Hi, I am</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SANTHOSH KUMAR</h1>
                        <p className='text-xl'>Building digital experiences with careful coding and creative design. Welcome to my world, where every detail matters</p>
                        <button className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold my-6 md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-black ease-in-out duration-500'><a href="#Contact">Hire Me</a></button>
                    </div>
                    {/* Image with Animation */}
                    <img src={hero} alt="Hero Image" className="lg:w-[300px] mx-auto py-6 w-[300px] rounded-[50%] hidden md:block" />
                </div>
            </div>
        </div>
    );
};

export default Home;
