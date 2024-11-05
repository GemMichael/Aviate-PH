import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import const1 from '../pictures/conts1.jpg';
import const2 from '../pictures/conts2.webp';
import const3 from '../pictures/const3.jpg';
import const4 from '../pictures/const4.webp';
import const5 from '../pictures/const5.webp';
import const6 from '../pictures/const6.jpg';
import const7 from '../pictures/const7.jpg';
import const8 from '../pictures/const8.jpg';
import const9 from '../pictures/const9.webp';
import constrails from '../pictures/CONSTRAILSlogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';

function CONSTRAILS() {
    return (
        <>

            <Helmet>
                <title>Constrails International Aviation Academy, Inc. - Pilot Training</title>
                <meta name="description" content="Join Constrails International Aviation Academy, Inc. for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Constrails International Aviation Academy, Inc." />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#3e46cb] to-[#009e3d] text-5xl lg:text-[56px] font-bold via-[#fe0002] leading-[1.3] mt-12 lg:mt-0">
                                    Constrails International Aviation Academy, Inc.
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    Choose Contrails International Aviation Academy, Where our qualified and well-rounded instructors will teach you from basic to advanced flying and will equip you with the knowledge and skills to confidently fly a single-engine aircraft. Plus our training facility is located at the centre of the Philippines where numerous airports are situated.
                                </p>
                            </div>
                            <a
                                href="https://contrailsaviation.com.ph/contact-us/"
                                className="relative z-10 bg-[#3e46cb] hover:bg-[#009e3d]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={constrails} alt="" />
                        </div>
                    </div>
                </section>
            </main>


            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-[#87CEEB] to-[#191970] rounded-full blur-[123px] opacity-[46%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Aircraft and Simulator Fleets</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                            Constrail International Aviation Academy (CIAAI) currently owns five (5) Cessna 172 and a Precision Flight Controls (PFC) Flight Simulator.
                        </p>
                    </div>
                </section>
            </div>

            <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-[51px]">
                    <div className="grid gap-4" >
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const1} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const2} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const3} alt="" />
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const4} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const5} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const6} alt="" />
                        </a>
                    </div>
                    <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const7} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const8} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={const9} alt="" />
                        </a>
                    </div>
                </div>
            </section>

            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-[#87CEEB] to-[#191970] rounded-full blur-[123px] opacity-[46%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Training Locations</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">

                            Mactan-Cebu International Airport
                        </p>
                    </div>
                </section>
            </div>


            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-[#87CEEB] to-[#191970] rounded-full blur-[123px] opacity-[46%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#3e46cb]/[70%] to-[#009e3d] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Pilot Training Programs</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Private Pilot Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Instrument Rating Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">CPL With IR Package</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Complete Package (PPL to FI)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px]  from-[#3e46cb]/[70%] to-[#009e3d] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">admin@contrailsaviation.com.ph</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Constrails International Aviation Academy Incorporated</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/ContrailsAviation" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/contrailsaviation/" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default CONSTRAILS;