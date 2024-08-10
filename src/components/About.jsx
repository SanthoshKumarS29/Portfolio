import React, { useEffect } from 'react';
import about from '../assets/About.jpeg';
import csv from '../assets/SK Resume.pdf'
import {motion,useAnimation} from 'framer-motion'

const About = () => {
    const textControls = useAnimation()
    const imgControls = useAnimation()

    const handleScroll = () =>{
        const scrollY = window.scrollY
        // animate based on scroll
        textControls.start(scrollY > 200 ? 'visible' : 'hidden')
        imgControls.start(scrollY > 400 ? 'visible' : 'hidder')
    }
    
    useEffect(()=> {
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[textControls,imgControls])

    const textVariants = {
        hidden:{ opactiy: 0, y:50},
        visible: { opactiy:1, y:0, transition:{ duration:1}}
    }
    const imgVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    }
    return (
        <div id="About">
            <div className='max-w-[1240px] mx-auto text-black py-16 px-4'>
                <div className='grid md:grid-cols-2 items-center justify-between'>
                    <motion.img initial='hidden' animate={imgControls} variants={imgVariants} src={about} alt="About Image" className='lg:w-[300px] mx-auto py-6 w-[300px] rounded-[50%] ' />
                    <motion.div initial='hidder' animate={textControls} variants={textVariants} className='flex flex-col gap-4 justify-center text-white w-full'>
                        <p className='text-[#7a50eb] font-bold text-lg md:text-xl'>About Me</p>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lets Introduce Myself...</h1>
                        <p className='md:text-base'>Hi, I'm Santhosh, a passionate developer skilled in ReactJS, Django, Python, and Tailwind CSS. I enjoy creating elegant solutions for complex problems, from intuitive user interfaces to robust backend systems. Always eager to learn and grow, I thrive in collaborative environments and continuously seek new challenges.</p>
                        <button className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold my-6 md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-black ease-in-out duration-500'><a href={csv}  download="Santhosh-Kumar-CV.pdf">Download CV</a></button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
