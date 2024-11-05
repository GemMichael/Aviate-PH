import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import st1 from '../pictures/st1.jpg';
import st2 from '../pictures/st2.jpg';
import st3 from '../pictures/st3.jpg';
import st4 from '../pictures/st4.jpg';
import sapphirelogo from '../pictures/SAPPHIRElogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function SAPPHIRE() {
    return (
        <>

            <Helmet>
                <title>Sapphire International Aviation Academy - Pilot Training</title>
                <meta name="description" content="Join Sapphire International Aviation Academy for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Sapphire International Aviation Academy" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#180983] to-[#fedf12] text-5xl lg:text-[56px] font-bold via-[#fd0100] leading-[1.3] mt-12 lg:mt-0">
                                    Sapphire International Aviation Academy
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    SAPPHIRE INTERNATIONAL AVIATION ACADEMY was established to cater to the growing worldwide demand for aviation professionals. With its high literacy rate and proficiency in the English language, the Philippines is now virtually the aviation training center of Asia and the far East. Many aspiring aviation enthusiasts from various countries all over the world notably– India, Indonesia, Nepal, South Korea, United Arab Emirates, Qatar, Saudi Arabia, Kuwait, Egypt, Nigeria have been coming to the Philippines to enroll in aviation courses.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    An estimated 29,000 new, lighter and more fuel-efficient large passenger and cargo aircraft scheduled to be put in service between 2008 and 2030 will create a worldwide demand for at least 460,000 new professional pilots and other aviation career people all over the world, particularly, in Asia and its nearby regions, giving aviation schools their reason for being.
                                </p>
                            </div>
                            <a
                                href="https://sapphireaviationacademy.edu.ph/contact/"
                                className="relative z-10 bg-[#180983] hover:bg-[#fedf12]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={sapphirelogo} alt="" />
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
                            Sapphire International Aviation Academy has a Cessna 150 and Cessna 172
                        </p>
                    </div>
                    <div className="grid md:grid-cols2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1">
                            <div className="flex items-center gap-3">
                                <a href="#" className="block w-full h-full overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img
                                        className="w-full h-full object-cover transform hover:scale-150 transition-transform duration-[600ms]"
                                        src={st1}
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
                                        src={st2}
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
                                        src={st3}
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
                                        src={st4}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#180983]/[70%] to-[#fedf12] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Course Overview</h1>
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
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Instructor</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Instrument Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px]  from-[#180983]/[70%] to-[#fedf12] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-2xl lg:text-4xl">09175804858</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">Sapphire International Aviation Academy</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/sapphireaviationacademy" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="https://www.facebook.com/sapphireaviationacademy" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
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

export default SAPPHIRE;