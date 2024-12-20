import React, { useEffect, useRef } from 'react';
import { FaSchool, FaUniversity } from 'react-icons/fa';


const Details = () => {

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;
        const scrollInterval = setInterval(() => {
            if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
                scrollAmount = 0;
            } else {
                scrollAmount += 260; // Adjust this value based on the width of your cards
            }
            scrollContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 3000); // 3 seconds interval
        return () => clearInterval(scrollInterval);
    }, []);


    return (
        <div className='text-white max-w-[1240px] mx-auto' id="Education">
            <div className='md:mt-[96px] '>
                <div className='flex flex-col md:flex md:flex-row gap-4 p-2 '>
                    <div className="p-2 bg-transparent rounded-lg shadow-md w-full">
                        <h1 className="text-2xl font-bold mb-4 text-[#7a50eb]">Education</h1>
                        <div ref={scrollRef}  className="flex overflow-x-hidden md:flex-col gap-3 py-4">
                            <div className="min-w-[250px] border-2 border-[#7a50eb] p-4 rounded-lg shadow-md flex items-center space-x-4">
                                <FaSchool className="text-[#7a50eb] text-4xl hidden md:block" />
                                <div>
                                    <p className="mb-2 text-white uppercase font-bold">
                                        Grace Matric Hr sec school (HSC), 2014-2018 with <span className="text-[#7a50eb]">57%</span> of mark
                                    </p>
                                </div>
                            </div>
                            <div className="min-w-[250px] border-2 border-[#7a50eb] p-4 rounded-lg shadow-md flex items-center space-x-4">
                                <FaSchool className="text-[#7a50eb] text-4xl hidden md:block" />
                                <div>
                                    <p className="mb-2 text-white uppercase font-bold">
                                        Grace Matric Hr sec school (SSLC), 2018-2020 with <span className="text-[#7a50eb]">65%</span> of mark
                                    </p>
                                </div>
                            </div>
                            <div className="min-w-[250px] border-2 border-[#7a50eb] p-4 rounded-lg shadow-md flex items-center space-x-4">
                                <FaUniversity className="text-[#7a50eb] text-4xl hidden md:block" />
                                <div>
                                    <p className="mb-2 text-white uppercase font-bold">
                                        K.L.N arts and sciences college, 2020-2023 with <span className="text-[#7a50eb]">71%</span> of mark
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 bg-transparent rounded-lg shadow-md w-full'>
                        <h1 className='text-2xl font-bold mb-4 text-[#7a50eb]'>Skills</h1>
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <li className='flex justify-between items-center py-2 border-b border-[#7a50eb]'>
                                <span className='text-white font-normal'>Tailwind CSS</span>
                                <span className='bg-[#7a50eb] text-white px-2 py-3 rounded-full'>92%</span>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b border-[#7a50eb]'>
                                <span className='text-white font-normal'>ReactJs</span>
                                <span className='bg-[#7a50eb] text-white px-2 py-3 rounded-full'>88%</span>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b border-[#7a50eb]'>
                                <span className='text-white font-medium'>NodeJs</span>
                                <span className='bg-[#7a50eb] text-white px-2 py-3 rounded-full'>78%</span>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b border-[#7a50eb]'>
                                <span className='text-white font-medium'>Python(Django)</span>
                                <span className='bg-[#7a50eb] text-white px-2 py-3 rounded-full'>80%</span>
                            </li>
                            
                            <li className='flex justify-between items-center py-2 border-b border-[#7a50eb]'>
                                <span className='text-white font-medium'>MongoDb</span>
                                <span className='bg-[#7a50eb] text-white px-2 py-3 rounded-full'>75%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details