import React from 'react'
import { Link } from 'react-router-dom';
import pilot1 from '../pictures/pilot1.jpg';
import aaalogo from '../pictures/AAAlogo.jpg';
import Footer from '../Footer';


function AAA() {
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
                            <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#001F6B] to-[#00A8E8] text-5xl lg:text-[56px] font-bold via-[#F5A623] leading-[1.3] ">
                                All Asia Aviation Academy
                            </h1>
                        </div>
                        <div className="w-full lg:max-w-[79%]">
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                            AAA academy is is also backed up by the KTC Group, an international organization which is also – one of the largest business conglomerates in Japan today. 
                            This allows AAA Academy to be able to provide the necessary and needed investment in equipment, human resources and facilities in order to provide you the best in pilot training and also contribute to the overall future of aviation.
                            </p>
                            <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                            We treat our students as family.We understand that as you take up your training with us it also means, having to live away from your family. 
                            This is why we do our level best to make you feel like you have never left your home at all.
                            </p>
                        </div>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={aaalogo} alt="" />
                    </div>

                </div>
            </section>

            <div>

            <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-[#001F6B] to-[#00A8E8] rounded-full blur-[123px] opacity-[46%]"></div>
                <section id="services" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Aircraft and Simulator Fleets</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                        AAA operates the Cessna 152, one of the most popular aircraft in flight academies worldwide. It is a two-seat, American-made general aviation airplane with fixed tricycle landing gear. The Cessna 152 is primarily used for flight training and personal flying.

                        The Cessna 172, a four-seat, single-engine, high-wing aircraft, is recognized as the most successful aircraft in history, known for its safety and reliability.

                        Tecnam, utilizing its extensive experience with aluminum airframes, designed the P2006T with a robust yet lightweight structure, offering an impressive payload-to-total weight ratio.

                        We also offer training on the Redbird MCX Flight Simulator, ensuring comprehensive training for our students.
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


                    <div data-aos="fade-up" data-aos-duration="1000"
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-blue-500/[70%] to-blue-500/[50%] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Course Overview</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">PPL Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000"
                                className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">CPL Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Instrument Rating Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Multi-Engine Rating Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Flight Instructor Course</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Airline Assessment Qualifications Training</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Online Ground School</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Avaition English Course</p>
                                </div>
                            </div>
                            <div className="col-span-full" data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Recommended Package Course</h1>
                            </div>
                            <div className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">PPL/CPR/IR</p>
                                </div>
                            </div>
                            <div  className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">PPL/CPL/IR/MER</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-[14px]  backdrop-blur-sm border border-[#222222] p-5 bg-[#141414]/[20%] rounded-lg">
                                <div className="flex items-center gap-3 ">
                                    <p className="text-black font-bold">Other Package</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>


            <Footer />

        </>
    )
}

export default AAA;