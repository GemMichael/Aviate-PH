import React from 'react'
import { Link } from 'react-router-dom';
import pilot1 from '../pictures/pilot1.jpg';
import sputnik from '../pictures/Sputniklogo.jpg';


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

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={sputnik} alt="" />
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

                    <div className="">
                        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1">


                            <div id="gallery" class="relative w-full" data-carousel="slide">
                             
                                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                                   
                                    <div class="duration-700 ease-in-out" data-carousel-item>
                                        <img src={pilot1} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
                                    </div>
                                  
                                    <div class=" duration-700 ease-in-out" data-carousel-item="active">
                                        <img src={sputnik} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
                                    </div>
                                   
                                    <div class=" duration-700 ease-in-out" data-carousel-item>
                                        <img src={pilot1} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
                                    </div>
                                   
                                    <div class=" duration-700 ease-in-out" data-carousel-item>
                                        <img src={sputnik} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
                                    </div>
                                   
                                    <div class="duration-700 ease-in-out" data-carousel-item>
                                        <img src={pilot1} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""></img>
                                    </div>
                                </div>
                               
                                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                        <span class="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span class="sr-only">Next</span>
                                    </span>
                                </button>
                                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
                            </div>
                            </div>


                        </div>
                        
                        


                </section>

            </div>
        </>
    )
}

export default Sputnik;