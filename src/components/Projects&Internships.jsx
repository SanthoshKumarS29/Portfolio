import React, { useState } from 'react';
import data from '../datas/project.json';


const Work = () => {
    const [visibleCount, setVisibleCount] = useState(3); // Default to show 3 projects

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3); // Show 3 more projects
    };

    const handleShowLess = () => {
        setVisibleCount((prevCount) => (prevCount > 3 ? prevCount - 3 : 3)); // Show 3 less projects or reset to 3
    };

    const visibleProjects = data.proj.slice(0, visibleCount);

    return (
        <div id='Project'>
            <div className='max-w-[1240px] mx-auto py-16 px-4 text-white'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-2xl mb-2 text-[#7a50eb]'>Projects</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 px-2 md:px-0 mt-16 gap-5'>
                    {visibleProjects.map((project) => (
                        <div key={project.id} className='max-w-md flex justify-center border-2 border-[#7a50eb] rounded-xl'>
                            <div className='py-7 px-3 md:px-6'>
                                <div className='flex justify-start items-center pb-5 gap-2'>
                                    <p className='border-2 border-[#7a50eb] p-2 text-sm rounded-xl'></p>
                                    <p className='border-2 border-[#7a50eb] p-2 text-sm rounded-xl'></p>
                                </div>
                                    <img className='h-[200px] object-cover border-2 border-black rounded-md' src={project.img} />
                                    <h1 className='font-bold pt-6 text-base md:text-xl'>{project.title}</h1>
                                <div className='flex flex-col justify-between'>
                                    <div className='pt-4'>
                                        <p className='uppercase font-mono text-[12px] text-[#7a50eb]'>{project.des}</p>
                                    </div>
                                    <div className='flex pt-5 gap-2'>
                                        <p className='border-2 border-[#7a50eb] px-4 py-2 text-[13px] font-medium rounded-md hover:bg-[#7a50eb] duration-200'><a href={project.link}>Visit Now</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-start mt-10'>
                    {visibleCount < data.proj.length && (
                        <button onClick={handleShowMore} className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-white ease-in-out duration-500'>Show More</button>
                    )}
                    {visibleCount > 3 && (
                        <button onClick={handleShowLess} className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-white ease-in-out duration-500 ml-4'>Show Less</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Work;
