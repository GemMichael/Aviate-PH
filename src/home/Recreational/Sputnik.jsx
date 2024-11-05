import React from 'react'
import { Link } from 'react-router-dom';
import sputnik from '../pictures/Sputniklogo.jpg';
import sput1 from '../Recreational/Pics/sput1.jpg';
import sput2 from '../Recreational/Pics/sput2.jpg';
import sput3 from '../Recreational/Pics/sput3.jpg';
import sput4 from '../Recreational/Pics/sput4.jpg';
import sput5 from '../Recreational/Pics/sput5.jpg';
import sput6 from '../Recreational/Pics/sput6.jpg';
import sput7 from '../Recreational/Pics/sput7.jpg';
import sput8 from '../Recreational/Pics/sput8.jpg';
import sput9 from '../Recreational/Pics/sput9.jpg';
import sput10 from '../Recreational/Pics/sput10.jpg';
import sput11 from '../Recreational/Pics/sput11.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Sputnik() {
    return (
        <>

            <header>
                <Navbar />
            </header>
            
            <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-900 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
            <div className="w-[366px] hidden h-[366px] -z-10  bg-yellow-600 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
            <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-blue-900 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>
            <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[100px] lg:mt-[150px]  px-[24px] xl:px-0 relative">
                <Link to="/landingdiscovery" className="absolute -top-12 left-0 bg-blue-500 text-white py-2 px-4 rounded">
                    Return
                </Link>

                <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
                    <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                        <div>
                            <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#103f8b] to-[#ffffff] text-5xl lg:text-[56px] font-bold via-[#C9A03B] leading-[1.3] ">
                                Sputnik Aviation
                            </h1>
                        </div>
                        <div className="w-full lg:max-w-[79%]">
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                Sputnik Aviation is the Philippines' premier DOT-accredited recreational airline simulator facility.
                                Offering a range of exceptional experiences, Sputnik Aviation lets you step into the cockpit with their Airline Pilot Experience,
                                receive personalized guidance through their Pilot Mentoring Program, and connect with top aviation experts for exclusive meet-and-fly sessions.
                                Whether you're aspiring to become a pilot or simply looking for a thrilling flying experience, Sputnik Aviation brings your aviation dreams to life.
                            </p>
                        </div>
                        <a
                            href="https://sputnikaviation.com/bookings/"
                            className="bg-[#103f8b] hover:bg-[#C9A03B] transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                            Book Your Experience
                        </a>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={sputnik} alt="" />
                    </div>

                </div>
            </section>

            <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-yellow-600 rounded-full blur-[123px] opacity-[26%]"></div>
            <section id="services" className="max-w-[1160px] w-full mx-auto mt-[200px] flex flex-col gap-10 px-[24px] xl:px-0">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Step into the Cockpit with Sputnik Aviation: Unleash Your Aviation Adventure</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                        Becoming a pilot is more than just mastering the skies-it's about embracing
                        adventure and experiecing life from a thrilling, elevated perspective. At Sputnik Aviation, we bring your aviation dreams to life
                        with top-flight simulators and expert-guided experciences. Ready to take leap and soar?
                        Your adventure begins here.
                    </p>
                </div>
                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={sput9} alt="Airline Experience" />
                        <div class="content bg-white p-6 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                            <h2 class="text-3xl font-semibold mt-1">Airline Experience</h2>
                            <p class="text-justify text-sm text-gray-700 leading-relaxed mt-4">
                                Step into the shoes of a real airline pilot with Sputnik Aviation's Airline Experience.
                                Whether you're an aspiring pilot or just seeking an unforgettable thrill, this immersive program is designed to make you feel like you're truly in command of a commercial aircraft.
                                From the moment you enter the premises, you're transported into the world of aviation. Sputnik Aviation's carefully designed business-class lounge serves as your briefing room,
                                where you’ll prepare for the flight ahead. Relax and enjoy a pilot’s routine with a coffee break at our in-house cafe, mirroring what the usual pilot does before flight.
                            </p>
                            <p class="text-justify text-sm text-gray-700 leading-relaxed mt-4">

                                The experience intensifies as you walk the same path as pilots do, heading towards your aircraft, each step heightening the sensation of being a Pilot. And then, the ultimate thrill awaits—take your seat in the simulator,
                                and let the adventure take flight. Whether you're here to pursue a dream or simply live out the fantasy of piloting, Sputnik Aviation offers an unparalleled, authentic journey into the life of an airline captain.
                            </p>
                            <hr class="my-4" />
                            <a
                                href="https://sputnikaviation.com/bookings/"
                                class="bg-[#103f8b] hover:bg-[#C9A03B] transition-all duration-300 text-white mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
                            >
                                Book now
                            </a>
                        </div>
                    </section>
                </section>

                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={sput11} alt="Airline Experience" />
                        <div class="content bg-white p-6 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                            <h2 class="text-3xl font-semibold mt-1">Single Trainer</h2>
                            <p class="text-justify text-sm text-gray-700 leading-relaxed mt-4">
                                The Single Trainer is an advanced simulator crafted to recreate the experience of sitting in the right-hand seat,
                                mirroring the role of a First Officer in an Airbus A320. This immersive session places you directly in the co-pilot’s position,
                                offering a highly authentic and engaging simulation of flying within the renowned A320 cockpit. During your Single Trainer session,
                                you’ll also enjoy a range of exclusive benefits designed to enhance the experience.
                            </p>
                            <hr class="my-4" />
                            <a
                                href="https://sputnikaviation.com/bookings/"
                                class="bg-[#103f8b] hover:bg-[#C9A03B] transition-all duration-300 text-white mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
                            >
                                Book now
                            </a>
                        </div>
                    </section>
                </section>

                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={sput10} alt="Airline Experience" />
                        <div class="content bg-white p-6 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                            <h2 class="text-3xl font-semibold mt-1">Celebrate with Us</h2>
                            <p class="text-justify text-sm text-gray-700 leading-relaxed mt-4">
                                For young aspiring pilots, our celebration package is a dream come true. Picture their excitement as they step into the cockpit of our Airbus A320 simulators, taking control of an aircraft for the first time! With the guidance of an experienced and friendly flight coach, kids can enjoy the exhilarating experience of flying in a safe and controlled environment.
                                It’s an adventure they’ll be raving about long after the celebration ends.
                            </p>
                            <p class="text-justify text-sm text-gray-700 leading-relaxed mt-4">
                                For aviation enthusiasts, our venue is the ultimate destination where the passion for flight comes alive. Whether you're an experienced pilot or simply fascinated by aviation, the opportunity to command an iconic Airbus A320 is unparalleled. Our simulators provide a realistic and immersive flight experience that captures the essence of flying.
                                Afterward, continue the festivities in our elegant Business Class Lounge. This luxurious space is perfect for relaxing, socializing, and enjoying the company of your guests in a sophisticated setting. With its refined atmosphere and comfortable seating, the lounge adds a touch of exclusivity to your event. To make your celebration truly memorable, we offer a variety of premium inclusions:
                            </p>
                            <hr class="my-4" />
                            <a
                                href="https://sputnikaviation.com/bookings/"
                                class="bg-[#103f8b] hover:bg-[#C9A03B] transition-all duration-300 text-white mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
                            >
                                Book now
                            </a>
                        </div>
                    </section>
                </section>

            </section>

            <div>

                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-yellow-600 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="services" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                        <h3 className="text-[56px] justify-center text-center font-bold text-black leading-[1]">Snaps at Sputnik</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[51px]">
                            <div className="grid gap-4" >
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput1} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput2} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput3} alt="" />
                                </a>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput4} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput5} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput6} alt="" />
                                </a>
                            </div>
                            <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput7} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput8} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={sput9} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                        <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#103f8b] to-[#C9A03B] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                            <div className="flex justify-center items-center flex-col">
                                <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                                <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                                <p className="text-stone-300 font-semibold text-2xl lg:text-4xl">bookings@sputnikaviation.com</p>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                                <p className="text-white font-bold hidden md:block">Sputnik Aviation</p>
                                <div className="flex justify-between gap-[19px]">
                                    <a href="https://www.facebook.com/sputnikaviation" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                    <a href="https://www.instagram.com/SputnikAviation?fbclid=IwY2xjawFq22ZleHRuA2FlbQIxMAABHTCPjViqyaQNoLG1utEA_yAT7cafRTXTzdOTyKreBXwt-gyfUd6U4KIuDA_aem_myAm1KPmxDrMTW6yiUA4Og" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                        Instagram
                                    </a>
                                    <a href="https://www.tiktok.com/@sputnikaviation" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                        TikTok
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>










                </section>

            </div>

            <Footer />
        </>
    )
}

export default Sputnik;