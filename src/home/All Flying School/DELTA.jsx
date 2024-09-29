import React from 'react'
import { Link } from 'react-router-dom';
import pilot1 from '../pictures/pilot1.jpg';
import deltalogo from '../pictures/DELTAlogo.jpg';


function DELTA() {
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
                            <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#b22826] to-[#828483] text-5xl lg:text-[56px] font-bold via-[#000000] leading-[1.3] ">
                                Delta Air International Aviation Academy
                            </h1>
                        </div>
                        <div className="w-full lg:max-w-[79%]">
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                AAG has stratergically postioned its training platform in locations that can best support
                                the growth in the largest aviation market.
                            </p>
                            <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                                Continuous expansion of pilot training capability allows AAG to address the resurgence
                                of airline pilot shortage post-pandemic and offer partner airlines end-to-end cadetship training solutions.
                            </p>
                        </div>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={deltalogo} alt="" />
                    </div>

                </div>
            </section>

            <div>

                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-fuchsia-500 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="services" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Fly Beyond Ordinary—Chase Your Dreams!</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                            Embarking to become a pilot means stepping into a world of extraordinary opportunities and endless possibilities.
                            It’s about more than just flying an aircraft; it’s about pushing boundaries, embracing adventure, and pursuing a passion that takes you above and beyond the everyday.
                            As a pilot, you don’t just see the world from a different perspective—you experience life at its most exhilarating. Let your dreams take flight and soar to new heights, both in the skies and in your career.
                            The adventure of a lifetime awaits—are you ready to chase it?
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

                </section>

            </div>
        </>
    )
}

export default DELTA;