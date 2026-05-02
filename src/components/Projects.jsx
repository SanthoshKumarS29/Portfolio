import React, { useState } from 'react';
import fresh from '/projects/fresh-cart.webp'
import grow from '/projects/grow-data.webp'
import gym from '/projects/gym-infl.webp'
import hospital from '/projects/hospital-mange.webp'
import resume from '/projects/resume-builder.webp'
import hotelBooking from '/projects/hotel-booking.webp'
import officeTemplate from '/projects/officeSite-template.webp'



const Work = () => {

    return (
        <div id='Project'>
            <div className='py-10 px-4'>
                <div className='flex flex-col gap-7 items-center my-6 p-2'>
                    <h2 className='text-4xl text-[#7a50eb]'>Projects</h2>
                    <p className='text-xl text-center'>A personal portfolio showcasing projects, skills, and experience with an interactive and modern UI. Built using Reactjs and Tailwind CSS 
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className='col-span-1'>
                        <div className='h-full bg-[#7a50eb] rounded-lg'>
                            <div></div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                            <img src={fresh} alt="fresh" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-lg font-semibold">Fresh Cart Website</p>
                                <button className="mt-2 px-4 py-2 border-2 border-[#7a50eb] text-white font-medium rounded-md hover:bg-[#7a50eb] duration-200"><a href="https://santhoshkumars29.github.io/E-commerce-Website/" target="_blank" rel="noopener noreferrer">Check It</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                            <img src={gym} alt="gym" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-lg font-semibold">Gym Influncer</p>
                                <button className="mt-2 px-4 py-2 border-2 border-[#7a50eb] text-white font-medium rounded-md hover:bg-[#7a50eb] duration-200"><a href="https://santhoshkumars29.github.io/GymInfluencer/" target="_blank" rel="noopener noreferrer">Check It</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-2'>
                        <div className="relative group overflow-hidden rounded-lg h-64 cursor-pointer">
                            <img src={grow} alt="grow" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-lg font-semibold">Grow Data Website</p>
                                <button className="mt-2 px-4 py-2 border-2 border-[#7a50eb] text-white font-medium rounded-md hover:bg-[#7a50eb] duration-200"><a href="https://reactsmallwebsite.netlify.app" target='_blank'>Check It</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="relative group overflow-hidden rounded-lg cursor-pointer h-full">
                            <img src={hotelBooking} alt="hospital" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-lg font-semibold">Hotel Booking Management</p>
                                <button className="mt-2 px-4 py-2 border-2 border-[#7a50eb] text-white font-medium rounded-md hover:bg-[#7a50eb] duration-200"><a href="https://santhoshkumars29.github.io/Hotel-BookingManagement/" target="_blank" rel="noopener noreferrer">Check It</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="relative group overflow-hidden rounded-lg cursor-pointer h-full">
                            <img src={officeTemplate} alt="Fresh Cart" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-lg font-semibold">Resume Builder</p>
                                <button className="mt-2 px-4 py-2 border-2 border-[#7a50eb] text-white font-medium rounded-md hover:bg-[#7a50eb] duration-200"><a href="https://office-template.onrender.com/" target="_blank" rel="noopener noreferrer">Check It</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-2'>
                        <div className='h-[250px] w-full bg-[#7a50eb] rounded-lg'>
                            <div className=''></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
