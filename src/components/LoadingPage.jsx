import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex items-center justify-center gap-2 h-screen w-full text-white">
            <motion.div className="flex items-center justify-center gap-2">
                <motion.div initial={{opacity:0, y:40}}
                    animate={{opacity:1, y:0}} transition={{duration: 2, delay: 0.5}} className="text-base md:text-3xl font-bold font-customFont">Hello</motion.div>
                <motion.div initial={{opacity:0, y:45}}
                    animate={{opacity:1, y:0}} transition={{duration: 2, delay: 0.8}} className="text-base md:text-3xl font-bold font-customFont">Welcome To My</motion.div>
                <motion.div initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}} transition={{duration: 2, delay: 1.0}} className="text-[#7a50eb] text-base md:text-3xl font-Mono uppercase">Portfolio</motion.div>
            </motion.div>
        </div>
    );
};

export default Loading;
