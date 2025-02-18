import React, { useEffect, useRef } from 'react';
import { FaPython , FaBootstrap ,FaReact  } from 'react-icons/fa';
import { SiTailwindcss,SiJavascript  } from "react-icons/si";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Details = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
      };
      const logos = [FaReact , FaBootstrap , SiTailwindcss, SiJavascript,FaPython ];

    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     const scrollContainer = scrollRef.current;
    //     let scrollAmount = 0;
    //     const scrollInterval = setInterval(() => {
    //         if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
    //             scrollAmount = 0;
    //         } else {
    //             scrollAmount += 260; // Adjust this value based on the width of your cards
    //         }
    //         scrollContainer.scrollTo({
    //             left: scrollAmount,
    //             behavior: 'smooth'
    //         });
    //     }, 3000); // 3 seconds interval
    //     return () => clearInterval(scrollInterval);
    // }, []);


    return (
        <div className='text-white max-w-[1240px] mx-auto' id="Education">
            {/* <div className='md:mt-[96px] '>
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
            </div> */}
            <div className='my-10 lg:my-40' id='service'>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-center'>
                    <div className='w-full lg:w-9/12 px-6 lg:px-16 space-y-3 lg:space-y-6'>
                        <h1 className='text-2xl lg:text-5xl font-semibold'>Our Clinets</h1>
                        <p className='text-lg text-gray-400'>Serveral Selected clients, who already believe in our service.</p>
                    </div>
                    {/* i use to scroll for react-slicks library */}
                    <div className="w-full lg:w-8/12">
                    <Slider {...settings} className='flex overflow-x-hidden items-center'>
                        {logos.map((logo, index) => (
                        <div key={index} className="px-4">
                            <logo className="text-7xl text-white" />
                        </div>
                    ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details