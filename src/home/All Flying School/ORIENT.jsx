import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import or1 from '../pictures/or1.webp';
import or2 from '../pictures/or2.jpg';
import or3 from '../pictures/or3.webp';
import or4 from '../pictures/or4.jpg';
import or5 from '../pictures/or5.png';
import or6 from '../pictures/or6.jpg';
import or7 from '../pictures/or7.jpg';
import or8 from '../pictures/or8.jpg';
import or9 from '../pictures/or9.jpg';
import orientlogo from '../pictures/ORIENTlogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function ORIENT() {
    return (
        <>

            <Helmet>
                <title>Orient Aviation Corporation - Pilot Training</title>
                <meta name="description" content="Join Orient Aviation Corporation for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Orient Aviation Corporation" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fd0002] to-[#ffd902] text-5xl lg:text-[56px] font-bold via-[#000000] leading-[1.3] mt-12 lg:mt-0">
                                    Orient Aviation Corporation
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    Pilot Training Philippines prides itself on its accreditation and certification,
                                    which are crucial indicators of quality and adherence to aviation standards.
                                    The flight school is certified by the Civil Aviation Authority of the Philippines
                                    (CAAP), ensuring that it meets the regulatory requirements for pilot training
                                    institutions.
                                    Additionally, it may hold accreditations from international aviation bodies such as the International Civil Aviation Organization (ICAO) or the Federal Aviation Administration (FAA), further validating its commitment to excellence.
                                </p>
                            </div>
                            <a
                                href="https://pilottrainingphilippines.com/"
                                className="relative z-10 bg-[#fd0002] hover:bg-[#ffd902]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={orientlogo} alt="" />
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
                            Orient Aviation Corporation offers top-tier training with a state-of-the-art fleet and simulators to ensure an exceptional learning experience.
                            Our aircraft include 5 Cessna 152s, ideal for mastering fundamental skills, 3 Cessna 172s for advanced training, 1 Beechcraft Duchess (BE76) for twin-engine proficiency,
                            1 Piper Seneca (PA34) for multi-engine training, and a Robinson R44 helicopter for aspiring helicopter pilots. Additionally, we provide advanced simulation training
                            using Aviation Training Devices and the Frasca Simulator,
                            equipping students with real-world flying skills in a safe and controlled environment.
                        </p>
                    </div>
                </section>
            </div>

            <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-[51px]">
                    <div className="grid gap-4" >
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or1} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or2} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or3} alt="" />
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or4} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or5} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or6} alt="" />
                        </a>
                    </div>
                    <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or7} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or8} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={or9} alt="" />
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
                            Northsky Air Inc Hangar, Tuguegarao Airport,

                            Pengue Ruyu, Tuguegarao City, Cagayan Valley 3500
                        </p>
                    </div>
                </section>
            </div>



            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-[#87CEEB] to-[#191970] rounded-full blur-[123px] opacity-[46%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#fd0002]/[50%] to-[#ffd902]/[50%] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Courses</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Student Pilot License</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Private Pilot License</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Commercial Pilot License</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Instrument Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Multi-Engine Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Airline Transport Pilot License</p>
                                </div>
                            </div>
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Other Courses</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Aircraft Maintenance and Technology</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Helicopter Pilot Training</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Recreational Pilot License</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Dispatcher</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Aerobatic Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Attendant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#fd0002]/[50%] to-[#ffd902]/[50%] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">info@pilottrainingphilippines.com</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Orient Aviation Corporation</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/orientaviationcorporation" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/orientaviationph/" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
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

export default ORIENT;