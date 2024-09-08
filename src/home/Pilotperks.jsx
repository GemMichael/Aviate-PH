import React from 'react';
import pilot1 from './pictures/pilot1.jpg';

function Pilotperks() {
    return (
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
    );
}

export default Pilotperks;