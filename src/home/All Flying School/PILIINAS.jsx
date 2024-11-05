import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pi1 from '../pictures/pi1.jpg';
import pi2 from '../pictures/pi2.jpg';
import pi3 from '../pictures/pi3.jpg';
import pi4 from '../pictures/pi4.jpg';
import pi5 from '../pictures/pi5.jpg';
import pi6 from '../pictures/pi6.jpg';
import pi7 from '../pictures/pi7.jpg';
import pi8 from '../pictures/pi8.jpg';
import pi9 from '../pictures/pi9.jpg';
import pilipinaslogo from '../pictures/PILIPINASlogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function PILIPINAS() {
    return (
        <>

            <Helmet>
                <title>Pilipinas Space and Aviation 
                    Academy, Inc - Pilot Training</title>
                <meta name="description" content="Join Pilipinas Space and Aviation Academy, Inc for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Pilipinas Space and Aviation Academy, Inc" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e7f] to-[#e21f29] text-5xl lg:text-[56px] font-bold via-[#6b2d6d] leading-[1.3] mt-12 lg:mt-0">
                                    Pilipinas Space and Aviation Academy, Inc
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    PILIPINAS SPACE AND AVIATION ACADEMY, INCORPORATED is one of the fastest growing aviation training organization in the Philippines. Aviation, academic and business veterans established PSAAI to prepare aspiring pilots to be globally competitive in their commercial and airline careers.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    PSAAI offers private, commercial and flight instructor pilot courses under a unique training program that aims to ensure flight proficiency in shortest allowable opportunity. Its training programs are designed in accordance with the quality and safety standards of the global aviation industry.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    Our pilot trainees benefit from a complete range of services catering to all of their aviation training requirements through professional relations with them. Our experienced and dedicated instructors ensure they graduate with above standard qualifications acceptable to the global aviation markets.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    PSAAI is committed in providing the global aviation industry with consistently excellent, professional, innovative and safe pilots. It ensures that its graduates gain successful entry into and continued growth in global aviation opportunities.
                                </p>
                            </div>
                            <a
                                href="https://pilipinasspaceaviation.com/contact-us/"
                                className="relative z-10 bg-[#2a2e7f] hover:bg-[#e21f29]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={pilipinaslogo} alt="" />
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
                            PSAAI has a Cessna 152, Cessna 172 aircraft, and a DCX MAX 6-DOF simulator.
                        </p>
                    </div>
                </section>
            </div>

            <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-[51px]">
                    <div className="grid gap-4" >
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi1} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi2} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi3} alt="" />
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi4} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi5} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi6} alt="" />
                        </a>
                    </div>
                    <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi7} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi8} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pi9} alt="" />
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
                            Lingayen Airport
                        </p>
                    </div>
                </section>
            </div>




            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#2a2e7f]/[70%] to-[#e21f29] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Course Overview</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Orientation Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Executive Course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px]  from-[#2a2e7f]/[70%] to-[#e21f29] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">ydpbaccay@yahoo.com</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Pilipinas Space and Aviation Academy, Incorporated</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/PilipinasSpaceAviation" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
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

export default PILIPINAS;