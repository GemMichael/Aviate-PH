import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { useState } from 'react';
import aaglogo from '../pictures/AAGlogo.jpg';
import afeslogo from '../pictures/AFESlogo.jpg';
import airworkslogo from '../pictures/Airworkslogo.jpg';
import aaalogo from '../pictures/AAAlogo.jpg';
import avianlogo from '../pictures/AVIANlogo.jpg';
import cheynair from '../pictures/CHEYNAIRlogo.jpg';
import constrails from '../pictures/CONSTRAILSlogo.jpg';
import continental from '../pictures/CONTINENTALlogo.jpg';
import deltalogo from '../pictures/DELTAlogo.jpg';
import echologo from '../pictures/ECHOlogo.png'
import faalogo from '../pictures/FAAlogo.png';
import fastlogo from '../pictures/FASTlogo.png';
import flitelogo from '../pictures/FLITElogo.jpg';
import iaulogo from '../pictures/IAUlogo.jpg';
import laminarlogo from '../pictures/LAMINARlogo.png';
import leiaalogo from '../pictures/LEIAAlogo.jpg';
import omnilogo from '../pictures/OMNIlogo.jpg';
import orientlogo from '../pictures/ORIENTlogo.jpg';
import pilipinaslogo from '../pictures/PILIPINASlogo.jpg';
import precisionlogo from '../pictures/PRECISION.jpg';
import royhlelogo from '../pictures/ROYHLElogo.jpg';
import sapphirelogo from '../pictures/SAPPHIRElogo.jpg';
import secdealogo from '../pictures/SECDEAlogo.jpg';
import strikelogo from '../pictures/STRIKElogo.jpg';
import topflitelogo from '../pictures/TOPFLITElogo.png';
import wcclogo from '../pictures/WCClogo.jpg';
import alexiuslogo from '../pictures/ALEXIUSlogo.png';


function Landinglist() {

    const [hoveredLogo, setHoveredLogo] = useState(null);

    const alphaAviationLogo = aaglogo;
    const adventureFlightLogo = afeslogo;
    const airworksLogo = airworkslogo;
    const allAsiaLogo = aaalogo;
    const aviantechLogo = avianlogo;
    const cheynairLogo = cheynair;
    const continentalLogo = continental;
    const constrailsLogo = constrails;
    const deltaLogo = deltalogo;
    const echoLogo = echologo;
    const faaLogo = faalogo;
    const fastLogo = fastlogo;
    const fliteLogo = flitelogo;
    const iauLogo = iaulogo;
    const laminarLogo = laminarlogo;
    const leiaaLogo = leiaalogo;
    const omniLogo = omnilogo;
    const orientLogo = orientlogo;
    const pilipinasLogo = pilipinaslogo;
    const precisionLogo = precisionlogo;
    const royhleLogo = royhlelogo;
    const sapphireLogo = sapphirelogo;
    const secdeaLogo = secdealogo;
    const alexiusLogo = alexiuslogo;
    const strikeLogo = strikelogo;
    const topfliteLogo = topflitelogo;
    const wccLogo = wcclogo; 
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
                                onMouseEnter={() => setHoveredLogo(alphaAviationLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/AAG" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Alpha Aviation Group</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(adventureFlightLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/AFES" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Adventure Flight Education and Sports</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(airworksLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/Airworks" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Airworks Aviation Academy</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(allAsiaLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/AAA" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">All Asia Aviation Academy</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(aviantechLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/AVIAN" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Aviantech Institute for Aviation Training Center</span>
                                </Link>
                            </li>
                            <li
                                onMouseEnter={() => setHoveredLogo(cheynairLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/CHEYNAIR" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Cheynair Aviation</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(continentalLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/CONTINENTAL" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Continental Aero Flying School</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(constrailsLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/CONSTRAILS" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Constrails International Avaition Academy, Inc.</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(deltaLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/DELTA" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Delta Air International Aviation Academy</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(echoLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/ECHO" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Echo Air Internation Aviation Academy INC.</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(fastLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/FAST" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Fast Aviation Academy</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(faaLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/FAA" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">First Aviation Academy</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(fliteLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/FLITE" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Fliteline Aviation</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(iauLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/IAU" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Indiana Aerospace University</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(laminarLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/LAMINAR" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Laminar Aviation PH</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(leiaaLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/LEIAA" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Leading Edge International Aviation Academy INC.</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(omniLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/OMNI" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Omni Aviation</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(orientLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/ORIENT" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Orient Aviation Corporation</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(pilipinasLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/PILIPINAS" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Pilipinas Space and Aviation Academy, Inc</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(precisionLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/PRECISION" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Precision Flight Controls Philippines Inc.</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(royhleLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/ROYHLE" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Royhle Aviation Academy</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(sapphireLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/SAPPHIRE" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Sapphire International Aviation Academy</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(secdeaLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/SECDEA" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Secdea Aviation Corporation</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(alexiusLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/ALEXIUS" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">St. Alexius College</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(strikeLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/STRIKE" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Strike Wing Aviation Training Center</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(topfliteLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/TOPFLITE" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">Topflite Academy</span>
                                </Link>
                            </li>

                            <li
                                onMouseEnter={() => setHoveredLogo(wccLogo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                className='cursor-pointer'
                            >
                                <Link to="/WCC" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 flex-shrink-0 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V2a1 1 0 0 0-2 0v7l-8 5v2l8-2.5V21l-2 1v1l3-1 3 1v-1l-2-1v-7.5l8 2.5Z" />
                                    </svg>
                                    <span className="ms-3">WCC Aeronautical & Technological College</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>

                <main className="flex-1 p-4 flex flex-col items-center justify-center h-screen" data-aos="fade-up" data-aos-duration="1000" >
                    {hoveredLogo && (
                        <img src={hoveredLogo} alt="Alpha Aviation Logo" className="mt-8 max-w-xs mx-auto hidden md:block " data-aos="zoom-in" data-aos-delay="200" />
                    )}
                </main>
            </div>



        </>

    );
}

export default Landinglist;