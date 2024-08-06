import React from 'react';
import hero from '../assets/hero.jpeg';
import {motion} from 'framer-motion'

const Home = () => {
    return (
        <div id='hero'> 
            <div className='max-w-[1240px] mx-auto py-16 px-4 '>
                <div className='grid md:grid-cols-2 items-center justify-center'>
                    {/* Text Content With Animation */}
                    <motion.div initial={{opacity:0, y:40}}
                    animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.5}} className='flex flex-col gap-4 justify-center text-white'>
                        <p className='text-[#7a50eb] font-bold'>Hi, I am</p>
                        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.7}} className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SANTHOSH KUMAR</motion.h1>
                        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.9}}>Crafting digital experiences with the precision of a coder and the imagination of an artist. Dive into my world, where every pixel tells a story.</motion.p>
                        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.1}} className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold my-6 md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-black ease-in-out duration-500'><a href="#Contact">Hire Me</a></motion.button>
                    </motion.div>
                    {/* Image with Animation */}
                    <motion.img initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:1, delay:0.5}} src={hero} alt="Hero Image" className="lg:w-[300px] mx-auto py-6 w-[300px] rounded-[50%] hidden md:block" />
                </div>
            </div>
        </div>
    );
};

export default Home;
