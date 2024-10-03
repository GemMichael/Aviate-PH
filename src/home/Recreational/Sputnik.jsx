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


function Sputnik() {
    return (
        <>
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
                            className="bg-[#103f8b] hover:bg-[#C9A03B] transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg">
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
                <div className="flex flex-wrap justify-center">
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={sputnik} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Airline Expercience</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-down" data-aos-duration="1000">
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={sputnik} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Single Trainer</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={sputnik} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Celebrate with Us</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>

                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-yellow-600 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="services" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Discover top-flight simulators by Sputnik Aviation and dive into the world of aviation.</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                            Embarking to become a pilot means stepping into a world of extraordinary opportunities and endless possibilities.
                            It’s about more than just flying an aircraft; it’s about pushing boundaries, embracing adventure, and pursuing a passion that takes you above and beyond the everyday.
                            As a pilot, you don’t just see the world from a different perspective—you experience life at its most exhilarating. Let your dreams take flight and soar to new heights, both in the skies and in your career.
                            The adventure of a lifetime awaits—are you ready to chase it?
                        </p>
                    </div>



                    <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                        <h3 className="text-[56px] justify-center text-center font-bold text-black leading-[1]">Pilot Lifestyle</h3>
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
                        <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#45174c] to-[#1c164d] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                            <div className="flex justify-center items-center flex-col">
                                <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                                <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                                <p className="text-stone-300 font-semibold text-2xl lg:text-4xl">bookings@sputnikaviation.com</p>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                                <p className="text-white font-bold hidden md:block">Sputnik Aviation</p>
                                <div className="flex justify-between gap-[19px]">
                                    <a href="https://www.facebook.com/sputnikaviation" className="text-white font-semibold">
                                        Facebook
                                    </a>
                                    <a href="https://www.instagram.com/SputnikAviation?fbclid=IwY2xjawFq22ZleHRuA2FlbQIxMAABHTCPjViqyaQNoLG1utEA_yAT7cafRTXTzdOTyKreBXwt-gyfUd6U4KIuDA_aem_myAm1KPmxDrMTW6yiUA4Og" className="text-white font-semibold">
                                        Instagram
                                    </a>
                                    <a href="https://www.tiktok.com/@sputnikaviation" className="text-white font-semibold">
                                        TikTok
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>










                </section>

            </div>
        </>
    )
}

export default Sputnik;