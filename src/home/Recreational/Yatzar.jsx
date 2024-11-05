import React from 'react'
import { Link } from 'react-router-dom';
import yatzarlogo from '../Recreational/Pics/yatzarlogo.jpg';
import yatzar1 from '../Recreational/Pics/yatzar1.jpg';
import yatzar2 from '../Recreational/Pics/yatzar2.jpg';
import yatzar3 from '../Recreational/Pics/yatzar3.jpg';
import yatzar4 from '../Recreational/Pics/yatzar4.jpg';
import yatzar5 from '../Recreational/Pics/yatzar5.jpg';
import yatzar6 from '../Recreational/Pics/yatzar6.jpg';
import yatzar7 from '../Recreational/Pics/yatzar7.jpg';
import yatzar8 from '../Recreational/Pics/yatzar8.jpg';
import yatzar9 from '../Recreational/Pics/yatzar9.jpg';
import yatzarpackage from '../Recreational/Pics/yatzarpackage.jpg';
import Footer from '../Footer';
import Navbar from '../Navbar';


function Yatzar() {
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
                            <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#072f60] to-[#1262a1] text-5xl lg:text-[56px] font-bold via-[#57cced] leading-[1.3] ">
                                Yatzar Simulation
                            </h1>
                        </div>
                        <div className="w-full lg:max-w-[79%]">
                            <p className="text-black lg:text-start md:text-center  leading-[1.5]">
                                COME FLY WITH US!
                            </p>
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                            Are you an aspiring pilot? Or maybe someone who had always dreamt of becoming one but never got around to pursuing it? Or A Pilot who just wants to maintain proficiency?
                            </p>
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                            Yatzar Simulation is for every aviation enthusiast.
                            </p>
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                            Immerse yourself in the pilot’s role to embark on the most exciting flight of your life.
                            </p>

                        </div>
                        <a
                            href="https://yatzarsimulation.com/book-a-flight/"
                            className="bg-[#072f60] hover:bg-[#1262a1] transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                            Book Your Experience
                        </a>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={yatzarlogo} alt="" />
                    </div>

                </div>
            </section>

            <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-yellow-600 rounded-full blur-[123px] opacity-[26%]"></div>
            <section id="services" className="max-w-[1160px] w-full mx-auto mt-[200px] flex flex-col gap-10 px-[24px] xl:px-0">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Change this Empowering Pilots and Aspirants: A Safe Learning Environment for Skill Mastery and Proficiency with Fixed-Base Flight Simulator</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                        Change  thisssGet ready to fly a real aircraft and enjoy stunning views of Mt. Arayat! Whether you're eager for a hands-on experience or just want to take in the breathtaking scenery from above, this is your chance to make it happen!
                    </p>
                </div>
                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={yatzarpackage} alt="" />
                        <a
                            href="https://yatzarsimulation.com/book-a-flight/"
                            class="bg-[#072f60] hover:bg-[#1262a1] transition-all duration-300 text-white text-center mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
                        >
                            Book now
                        </a>

                    </section>
                </section>
            </section>

            <div>

                <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-yellow-600 rounded-full blur-[123px] opacity-[26%]"></div>
                <section id="services" className="max-w-[1160px] w-full mx-auto mt-[150px] flex flex-col gap-6 px-[24px] xl:px-0">



                    <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
                        <h3 className="text-[56px] justify-center text-center font-bold text-black leading-[1]">Snaps at Yatzar Simulation</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[51px]">
                            <div className="grid gap-4" >
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar1} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar2} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar3} alt="" />
                                </a>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar4} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar5} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar6} alt="" />
                                </a>
                            </div>
                            <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar7} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar8} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={yatzar9} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                        <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#072f60] to-[#1262a1] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                            <div className="flex justify-center items-center flex-col">
                                <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                                <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                                <p className="text-stone-300 font-semibold text-2xl lg:text-4xl">admin@yatzarsimulation.com</p>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                                <p className="text-white font-bold hidden md:block">Yatzar Simulation</p>
                                <div className="flex justify-between gap-[19px]">
                                    <a href="https://www.facebook.com/profile.php?id=100091376693083" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                    <a href="https://www.instagram.com/yatzarsimulation?fbclid=IwY2xjawGBOstleHRuA2FlbQIxMAABHew_n3Wn_p5LQolY6fT0yUWhuSV1sipSatY5gOJSSmW6UBkbVI420AWRjQ_aem_WNYEm-r8uvUUw9Ni__lvOA" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                        Instagram
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

export default Yatzar;