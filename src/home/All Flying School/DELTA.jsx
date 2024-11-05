import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import delt1 from '../pictures/delt1.jpg';
import delt2 from '../pictures/delt2.jpg';
import delt3 from '../pictures/delt3.jpg';
import delt4 from '../pictures/delt4.jpg';
import delt5 from '../pictures/delt5.jpg';
import delt6 from '../pictures/delt6.jpg';
import delt7 from '../pictures/delt7.jpg';
import delt8 from '../pictures/delt8.jpg';
import delt9 from '../pictures/delt9.png';
import deltalogo from '../pictures/DELTAlogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function DELTA() {
    return (
        <>

            <Helmet>
                <title>Delta Air International Aviation Academy - Pilot Training</title>
                <meta name="description" content="Join Delta Air International Aviation Academy for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Delta Air International Aviation Academy" />
                <link rel="canonical" href="https://yourwebsite.com/aaa" />
            </Helmet>

            <header>
                <Navbar />
            </header>

            <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-800 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
            <div className="w-[366px] hidden h-[366px] -z-10  bg-blue-500 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
            <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-blue-400 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>

            <main>
                <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[100px] lg:mt-[150px]  px-[24px] xl:px-0 relative">
                    <Link to="/landinglist" className="absolute lg:-top-12 top-0 left-0 bg-blue-500 text-white py-2 px-4 rounded z-50 mt-4 ml-4 lg:ml-0">
                        Return
                    </Link>
                    <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
                        <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                            <div>
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#b22826] to-[#828483] text-5xl lg:text-[56px] font-bold via-[#000000] leading-[1.3] mt-12 lg:mt-0">
                                    Delta Air International Aviation Academy
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    Delta Air International Aviation Academy, Inc. (DAIAA) was originally started in 2001 by a group of young, idealistic pilots who anticipated a growing demand for quality aviation training at reasonable fees. Backed by a pool of competent senior pilots serving as flight instructors, the school grew to become one of the biggest in the Philippines, counting proud graduates from the Philippines, India, Pakistan and the United States through the years.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    In June 2011, AMA Education System (AMAES), through AMA Properties Management Inc., took over the assets and management of DAIAA. For the Chairman of AMAES, Dr. Amable R. Aguiluz V, this was the fulfillment of a long-cherished dream. He envisions his newest venture to raise and set the bar in the aviation industry, blending state-of-the art technology with the highest standards of safety and quality in all its flight training and operations.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    With an annual student population of 150,000 in more than 200 campuses in the Philippines and other parts of the world, AMAES prides itself in having a sterling record in the field of education. Thus, in the short time that AMAES has taken over DAIAA, it has put in place improvements in the Company’s facilities, systems and procedures. This is in line with its thrust to produce only world-class and globally competitive pilots.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    Today, as the newest member of the AMA Education System, the new DELTA AIR is flying higher!
                                </p>
                            </div>
                            <a
                                href="hhttps://www.daiaa.com.ph/p/contact-us.html"
                                className="relative z-10 bg-[#b22826] hover:bg-[#828483]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={deltalogo} alt="" />
                        </div>
                    </div>
                </section>
            </main>


            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Aircraft and Simulator Fleets</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                            "Delta Air International Aviation Academy has an aircraft fleet consisting of Cessna 152, Cessna 172, and Piper Seneca PA 34-200. The academy also has a Redbird MCX Full Motion Flight Simulator
                        </p>
                    </div>
                </section>
            </div>

            <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-[51px]">
                    <div className="grid gap-4" >
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt1} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt2} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt3} alt="" />
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt4} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt5} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt6} alt="" />
                        </a>
                    </div>
                    <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt7} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt8} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={delt9} alt="" />
                        </a>
                    </div>
                </div>
            </section>


            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Training Locations</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                        Brgy Lumang Bayan Plaridel Airport
                        </p>
                    </div>
                </section>
            </div>

            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#b22826]/[70%] to-[#828483] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Course Overview</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Private Pilot License Course for Airplane Multi-Engine Land</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot License Course for Airplane Single-Engine Land</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot License/Instrument Rating-Multi-Engine/CRM Integrated(CPL/IR,ME/CRM) Course for Airplane</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Instrument Rating Course for Airplane</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Crew Resource Management Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Instructor License Course for Airplane Single-Engine Land</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Instructor License Course for Airplane Multi-Engine Land</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section >
            </div >

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px]  from-[#b22826]/[70%] to-[#828483] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">daiaa@amaes.edu.ph</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Delta Air International Aviation Academy Inc.</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/amadeltaaviation" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default DELTA;