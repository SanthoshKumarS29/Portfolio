import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative flex items-center justify-center">
                <motion.div
                    className="w-24 h-24 border-4 border-t-4 border-gray-200 border-t-[#7a50eb] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <div className="absolute text-[#7a50eb] text-4xl font-bold">SK</div>
            </div>
        </div>
    );
};

export default Loading;
