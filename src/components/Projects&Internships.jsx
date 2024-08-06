import React, { useState } from 'react';
import data from '../datas/project.json';

const Work = () => {
    const [selectedType, setSelectedType] = useState('All');
    const [visibleCount, setVisibleCount] = useState(3); // Default to show 3 projects

    const handleTypeClick = (type) => {
        setSelectedType(type);
        setVisibleCount(3); // Reset visibleCount when type changes
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3); // Show 3 more projects
    };

    const handleShowLess = () => {
        setVisibleCount((prevCount) => (prevCount > 3 ? prevCount - 3 : 3)); // Show 3 less projects or reset to 3
    };

    const filteredProjects = selectedType === 'All' ? data.proj : data.proj.filter(project => project.type === selectedType);
    const visibleProjects = filteredProjects.slice(0, visibleCount);

    return (
        <div id='Project'>
            <div className='max-w-[1240px] mx-auto py-16 px-4'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-4xl mb-2 text-[#7a50eb]'>My Projects</h1>
                </div>
                <div>
                    <ul className='flex mt-10 gap-3 cursor-pointer text-white'>
                        <li className={`font-bold md:text-xl ${selectedType === 'All' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('All')}>All</li>
                        <li className={`font-bold md:text-xl hover:text-[#7a50eb] ease-in duration-300 ${selectedType === 'Website' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('Website')}>Websites</li>
                        <li className={`font-bold md:text-xl hover:text-[#7a50eb] ease-in duration-300 ${selectedType === 'Portfolio' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('Portfolio')}>Portfolio</li>
                        <li className={`font-bold md:text-xl hover:text-[#7a50eb] ease-in duration-300 ${selectedType === 'ReactWebsite' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('ReactWebsite')}>React Website</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center mt-16 md:px-10 gap-5'>
                    {visibleProjects.map((project) => (
                        <div key={project.id} className='relative animate-[up_1s_ease-in-out_1]'>
                            <img className='h-[200px] w-[300px] p-2 bg-[#7a50eb] object-cover border-2 border-black rounded-md' src={project.imag} />
                            <div className='w-[300px] project-description opacity-0 hover:opacity-100 duration-300 bg-black border-2 border-[#7a50eb]'>
                                <p className='text-center px-5 py-4'>{project.des}</p>
                                <div className='flex justify-center'>
                                    <a className='button' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-start mt-10'>
                    {filteredProjects.length > visibleCount && (
                        <button
                            onClick={handleShowMore}
                            className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-white ease-in-out duration-500'
                        >
                            Show More
                        </button>
                    )}
                    {visibleCount > 3 && (
                        <button
                            onClick={handleShowLess}
                            className='border-2 border-[#7a50eb] w-[200px] rounded-md font-bold py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-white ease-in-out duration-500 ml-4'
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Work;
