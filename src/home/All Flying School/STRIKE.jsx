import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import s1 from '../pictures/s1.jpg';
import s2 from '../pictures/s2.png';
import s3 from '../pictures/s3.jpg';
import s4 from '../pictures/s4.jpg';
import s5 from '../pictures/s5.jpg';
import s6 from '../pictures/s6.jpg';
import s7 from '../pictures/s7.jpg';
import s8 from '../pictures/s8.jpg';
import s9 from '../pictures/s9.jpg';
import strikelogo from '../pictures/STRIKElogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function STRIKE() {
    return (
        <>

            <Helmet>
                <title>Strike Wing Aviation Training Center - Pilot Training</title>
                <meta name="description" content="Join Strike Wing Aviation Training Center for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Strike Wing Aviation Training Center" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#e7e00e] to-[#f00607] text-5xl lg:text-[56px] font-bold via-[#fe9808] leading-[1.3] mt-12 lg:mt-0">
                                    Strike Wing Aviation Training Center
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    Strike Wing Aviation Training Center was established to foster highly competitive pilots in mind. Incorporating years of aviation experience; its instructors have impressive careers as general aviation pilots and have years of experience.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    Our team of flight instructors, has been hand-picked, with excellence in their respective field. They are all highly trained professionals and are skilled communicators who are dedicated to the success of their students.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    Our flight operations is supported by a team of dedicated individuals, who are willing to help the most of the theoretical classes and incorporate it through actual flight for the development of Aeronautical Decision Making (ADM). Safety is our priority. Our aircrafts are very well maintained by highly skilled and experienced mechanics, who are willing to take the extra mile and not to compromise the safety of everybody.
                                </p>
                                <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                    Strike Wing Aviation is duly recognized by the Philippine Government. It is registered with the Securities and Exchange Commission with SEC Registration No. CN20081865 As an Aviation School, Strike Wing Aviation is governed by the rules and policies of Civil Aviation Authority of the Philippines (C.A.A.P) and the International Civil Aviation Organization (ICAO).
                                </p>
                            </div>
                            <a
                                href="https://www.strikewingaviation.com/strikewing"
                                className="relative z-10 bg-[#e7e00e] hover:bg-[#f00607]  transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={strikelogo} alt="" />
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
                            Strike Wing Aviation has the Cessna 152, Cessna 172, and Tecnam P-2008.
                        </p>
                    </div>
                </section>
            </div>

            <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-[51px]">
                    <div className="grid gap-4" >
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s1} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s2} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s3} alt="" />
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s4} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s5} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s6} alt="" />
                        </a>
                    </div>
                    <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s7} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s8} alt="" />
                        </a>
                        <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                            <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={s9} alt="" />
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
                        Plaridel Airport
                        </p>
                    </div>
                </section>
            </div>



            <div>
                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="aircrafts" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#e7e00e]/[70%] to-[#f00607] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Course</h1>
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
                                    <p className="text-black font-bold">Instrument Rating</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px]  from-[#e7e00e]/[70%] to-[#f00607] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">strikewingops@gmail.com</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Strike Wing Aviation Training Center Inc.</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="hhttps://www.facebook.com/profile.php?id=61552635053636" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/wcc_atc?fbclid=IwY2xjawF1dDFleHRuA2FlbQIxMAABHbn5dScgloaDLJfOMmvRza8Oq9UCQoxOhMjo23EJtM255vMNe9SsuHiNJA_aem_x6_GUEfdO5W1h2VCNsOANQ" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
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

export default STRIKE;