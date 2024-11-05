import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import sputnik from '../pictures/Sputniklogo.jpg';
import yatzarlogo from '../Recreational/Pics/yatzarlogo.jpg';
import goodboys from '../Recreational/Pics/thegoodlogo.jpg';


function LandingDiscovery() {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const sputnikLogo = sputnik;
    const yatzarrLogo = yatzarlogo;
    const goodboysLogo = goodboys;

    return (

        <>
            <nav className="fixed top-0 w-full z-50">
                <Navbar />
            </nav>
            <div className='flex  max-w-[1160px] w-full mx-auto  px-[24px] xl:px-0 relative'>
                <aside id="logo-sidebar" className="top-0 left-0 z-40 w-80 md:w-64 h-screen pt-20 transition-transform sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="h-full px-3 pb-2 overflow-y-auto bg-white dark:bg-black">
                        <ul className="space-y-2 font-medium">
                            <li
                                onMouseEnter={() => setHoveredLogo(sputnikLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/Sputnik" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Sputnik Aviation</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(goodboysLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/Goodboys" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Good Boys Flying</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(yatzarrLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/Yatzar" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Yatzar Simulation</span>
                                </Link>
                            </li>
                            <li
                            >
                                <Link to="/Subic" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Subic Aerial Sightseeing Tours</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                <main className="flex-1 p-4 flex flex-col items-center justify-center h-screen" data-aos="fade-up" data-aos-duration="1000" >
                    {hoveredLogo && (
                        <img src={hoveredLogo} alt="" className="mt-8 max-w-xs mx-auto hidden md:block " data-aos="zoom-in" data-aos-delay="200" />
                    )}
                </main>
            </div>



        </>

    );
}

export default LandingDiscovery;