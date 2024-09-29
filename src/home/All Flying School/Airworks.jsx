import React from 'react'
import { Link } from 'react-router-dom';
import pilot1 from '../pictures/pilot1.jpg';
import airworkslogo from '../pictures/Airworkslogo.jpg';
import Footer from '../Footer';



function Airworks() {
    return (
        <>
            <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-800 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
            <div className="w-[366px] hidden h-[366px] -z-10  bg-blue-500 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
            <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-blue-400 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>
            <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[100px] lg:mt-[150px]  px-[24px] xl:px-0 relative">
                <Link to="/landinglist" className="absolute -top-12 left-0 bg-blue-500 text-white py-2 px-4 rounded">
                    Return
                </Link>

                <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
                    <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                        <div>
                            <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1F2479] to-[#FFC40D] text-5xl lg:text-[56px] font-bold via-[#C0C0C0] leading-[1.3] ">
                                Airworks Aviation Academy
                            </h1>
                        </div>
                        <div className="w-full lg:max-w-[79%]">
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                            We are one of the country’s premier flight schools and a national leader in aviation education. We have extensive experience in training students from all over the world. We are offering affordable training costs and flexible payment terms of our students, highly regarded training standard, a fun environment, and a desirable lifestyle.
                            </p >
                        </div>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={airworkslogo} alt="" />
                    </div>

                </div>
            </section>

            <div>

                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="services" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Aircraft and Simulator Fleets</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                        We believe every aspiring pilot deserves the best training experience. 
                        That's why we proudly operate a comprehensive fleet of over 24 well-equipped training aircraft, including the Cessna 152, Cessna 172, and Piper Seneca II/Baron 58. 
                        Our commitment to excellence ensures that each aircraft is maintained to the highest safety standards by our dedicated in-house maintenance team, fully approved by the Civil Aviation Authority of the Philippines (CAAP).
                        We are also committed to providing the best training resources for our students. Our state-of-the-art Redbird Flight Simulator LD is both FAA and CAAP certified as an Advanced Aviation Training Device (AATD), ensuring you receive the highest quality training experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1">
                            <div className="flex items-center gap-3">
                                <a href="#" className="block w-full h-full overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img
                                        className="w-full h-full object-cover transform hover:scale-150 transition-transform duration-[600ms]"
                                        src={pilot1}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1">
                            <div className="flex items-center gap-3">
                                <a href="#" className="block w-full h-full overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img
                                        className="w-full h-full object-cover transform hover:scale-150 transition-transform duration-[600ms]"
                                        src={pilot1}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1">
                            <div className="flex items-center gap-3">
                                <a href="#" className="block w-full h-full overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img
                                        className="w-full h-full object-cover transform hover:scale-150 transition-transform duration-[600ms]"
                                        src={pilot1}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1">
                            <div className="flex items-center gap-3">
                                <a href="#" className="block w-full h-full overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img
                                        className="w-full h-full object-cover transform hover:scale-150 transition-transform duration-[600ms]"
                                        src={pilot1}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-blue-500/[70%] to-blue-500/[50%] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Modular Pilot Course</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Private Pilot License</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot License</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Instrument Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Multi Engine Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Airline Transport Pilot License Theory</p>
                                </div>
                            </div>
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Integrated Pilot Course</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot License w/ Instrument Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot License-Multi Engine w/ Instrument Rating</p>
                                </div>
                            </div>
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Airline Cadet Program</h1>
                            </div>
                            <div 
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Cebu Pacific Cadet Pilot Program 2.0</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>

            <Footer />


            
        </>
    )
}

export default Airworks;