import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pilot1 from '../pictures/pilot1.jpg';
import AFESlogo from '../pictures/AFESlogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function AFES() {
    return (
        <>

            <Helmet>
                <title>Adventure Flight Education and Sports</title>
                <meta name="description" content="Join Adventure Flight Education and Sports for top-notch pilot training and career opportunities. Expercience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Adventure Flight Education and Sports" />
                <link rel="canonical" href="" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#F15A29] to-[#F7941E] text-5xl lg:text-[56px] font-bold via-[#bdb9b9] leading-[1.3] mt-12 lg:mt-0">
                                    Adventure Flight Education and Sports
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                    Choose us if you are passionate about flying, as flight training is an intense endeavor that requires full attention, concentration and dedication.
                                    If you are ready, AFES will provide you with the right balance of challenge and guidance, to equip you for a rewarding career in aviation.
                                </p>
                            </div>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe2Y2502hyWzy0D8j-FRNG6NCYJi3PuVuxzaI6GeD3HZzpCrQ/viewform"
                                className="relative z-10 bg-[#F15A29] hover:bg-[#F7941E] transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg">
                                Enroll Now
                            </a>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={AFESlogo} alt="" />
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
                            We take pride as the only flight school in the country with Cessna-172s equipped with Continental diesel engines, making flying a whole lot safer.
                            You may also choose Cessna-152, the traditional trainer aircraft with a long history in the industry
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
                        className="bg-gradient-to-r flex flex-col lg:flex-row justify-between items-center from-[#F15A29]/[70%] to-[#F7941E] rounded-lg px-8 lg:gap-0 gap-3 lg:px-[45.5px] py-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[19px]">
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
                        </div>
                    </div>
                </section>
            </div>

            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px]  from-[#F15A29]/[70%] to-[#F7941E] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-xl lg:text-2xl text-center break-words">flight@aisat.edu.ph/adventureflightcebu@gmail.com</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">AAdventure Flight Education and Sports</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/AdventureFlightEducationAndSports" className="text-white font-semibold">
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/aaaacademy/" className="text-white font-semibold">
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

export default AFES;