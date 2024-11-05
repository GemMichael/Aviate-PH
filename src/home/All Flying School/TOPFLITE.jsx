import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import t1 from '../pictures/t1.jpg';
import t2 from '../pictures/t2.jpg';
import t3 from '../pictures/t3.jpg';
import t4 from '../pictures/t4.jpg';
import t5 from '../pictures/t5.jpg';
import t6 from '../pictures/t6.jpg';
import t7 from '../pictures/t7.jpg';
import t8 from '../pictures/t8.jpg';
import t9 from '../pictures/t9.jpg';
import topflitelogo from '../pictures/TOPFLITElogo.png';
import Navbar from '../Navbar';
import Footer from '../Footer';


function TOPFLITE() {
    return (
        <>

            <Helmet>
                <title>Topflite Academy - Pilot Training</title>
                <meta name="description" content="Join Topflite Academy for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Topflite Academy" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#3160a9] to-[#4285bc] text-5xl lg:text-[56px] font-bold via-[#010101] leading-[1.3] mt-12 lg:mt-0">
                                    Topflite Academy
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    Topflite Academy is an aviation school located in the Philippines that offers aviation courses for those interested in becoming pilots. The school offers both ground school and flight training, and their courses are designed to provide students with a well-rounded education in all aspects of aviation
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    Some of the topics covered in Topflite's aviation courses include aviation history, aircraft systems, flying techniques, and navigation. In addition, the school also has a strong focus on safety, and their courses are designed to teach students how to operate airplanes safely and efficiently.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    If you're interested in taking aviation courses at Topflite Academy, then be sure to contact us and inquire about our admission requirements and course fees. This way, you can be sure that you're getting the best possible value for your money.
                                </p>
                            </div>
                            <a
                                href="https://www.topfliteacademy.com/become-a-pilot"
                                className="relative z-10 bg-[#3160a9] hover:bg-[#4285bc]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={topflitelogo} alt="" />
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
                            Topflite Aviation boasts a versatile fleet, featuring the iconic Cessna 172M, the modern Cessna 172R, and two models of the compact and nimble Cessna 152.
                            These aircraft offer both reliability and performance, perfect for pilots at any level.
                        </p>
                    </div>
                </section>
            </div>

            <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-[51px]">
                            <div className="grid gap-4" >
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t1} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t2} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t3} alt="" />
                                </a>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t4} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t5} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t6} alt="" />
                                </a>
                            </div>
                            <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t7} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t8} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={t9} alt="" />
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
                           Bicol Internation Airport and Subic Bay International Airport
                        </p>
                    </div>
                </section>
            </div>


            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-[#87CEEB] to-[#191970] rounded-full blur-[123px] opacity-[46%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#3160a9]/[70%] to-[#4285bc]/[50%] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Courses</h1>
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
                                    <p className="text-black font-bold">Instrument Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Instructor Course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>




            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#3160a9]/[70%] to-[#4285bc]/[50%] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">info@topfliteacademy.com</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Topflite Academy</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/topfliteacademy" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="hhttps://www.instagram.com/topfliteacademy/" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
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

export default TOPFLITE;