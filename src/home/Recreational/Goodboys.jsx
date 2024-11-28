import React from 'react'
import { Link } from 'react-router-dom';
import goodboys from '../Recreational/Pics/thegoodlogo.jpg';
import good1 from '../Recreational/Pics/good1.jpg';
import good2 from '../Recreational/Pics/good2.jpg';
import good3 from '../Recreational/Pics/good3.jpg';
import good4 from '../Recreational/Pics/good4.png';
import good5 from '../Recreational/Pics/good5.png';
import good6 from '../Recreational/Pics/good6.jpg';
import good7 from '../Recreational/Pics/good7.jpg';
import good8 from '../Recreational/Pics/good8.png';
import good88 from '../Recreational/Pics/good88.png';
import goodpackage1 from '../Recreational/Pics/goodpackage1.jpg';
import goodpackage2 from '../Recreational/Pics/goodpackage2.jpg';
import goodpackage3 from '../Recreational/Pics/goodpackage3.jpg';
import Footer from '../Footer';
import Navbar from '../Navbar';


function Goodboys() {
    return (
        <>  

            <header>
                <Navbar />
            </header>
            
            <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-900 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
            <div className="w-[366px] hidden h-[366px] -z-10  bg-yellow-600 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
            <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-blue-900 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>
            <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[100px] lg:mt-[150px]  px-[24px] xl:px-0 relative">
                <Link to="/landingdiscovery" className="absolute lg:-top-12 top-0 left-0 bg-blue-500 text-white py-2 px-4 rounded z-50 mt-4 ml-4 lg:ml-0">
                    Return
                </Link>

                <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
                    <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                        <div>
                            <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#ffffff] text-5xl lg:text-[56px] font-bold via-[#1f1e1b] leading-[1.3] mt-12 lg:mt-0 ">
                                Good Boys Flying
                            </h1>
                        </div>
                        <div className="w-full lg:max-w-[79%]">
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                Come fly a REAL AIRPLANE and be a PILOT FOR A DAY!
                            </p>
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                No experience? Don't worry, we got you! No aviation experience required!
                            </p>
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                We're open Monday to Sunday; SUNRISE to SUNSET! And guess what? Bring TWO extra passengers FOR FREE!
                            </p>
                            <p className="text-black lg:text-start md:text-center leading-[1.5]">
                                Fully non-commercial and non-profit! It’s all about having FUN and sharing aviation to everyone!
                            </p>

                        </div>
                        <a
                            href="https://www.facebook.com/goodboysflying"
                            className="bg-[#000000] hover:bg-[#4a97ee] transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg"  target="_blank" rel="noopener noreferrer">
                            Book Your Experience
                        </a>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                        <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={goodboys} alt="" />
                    </div>

                </div>
            </section>

            <div className="w-full max-w-[634px] -z-10 h-[494px] bg-gradient-to-br absolute top-[741px] -translate-x-1/2 left-1/2  from-blue-500 to-yellow-600 rounded-full blur-[123px] opacity-[26%]"></div>
            <section id="services" className="max-w-[1160px] w-full mx-auto mt-[200px] flex flex-col gap-10 px-[24px] xl:px-0">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-black text-5xl lg:text-[56px] font-bold text-center leading-[1] ">Ready to Take Your Aviation Dream to the Skies?</h1>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className="w-full max-w-[793px] text-center text-black text-base font-normal mx-auto leading-[1.5]">
                        Get ready to fly a real aircraft and enjoy stunning views of Mt. Arayat! Whether you're eager for a hands-on experience or just want to take in the breathtaking scenery from above, this is your chance to make it happen!
                    </p>
                </div>
                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={goodpackage1} alt="" />
                        <a
                            href="https://www.facebook.com/goodboysflying"
                            class="bg-[#000000] hover:bg-[#4a97ee] transition-all duration-300 text-white text-center mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
                        >
                            Book now
                        </a>

                    </section>
                </section>

                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={goodpackage2} alt="" />
                        <a
                            href="https://www.facebook.com/goodboysflying"
                            class="bg-[#000000] hover:bg-[#4a97ee] transition-all duration-300 text-white text-center mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
                        >
                            Book now
                        </a>

                    </section>
                </section>

                <section class="container mx-auto p-10 md:py-20 md:px-0">
                    <section class="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                        <img class="xl:max-w-6xl w-full object-cover" src={goodpackage3} alt="" />
                        <a
                            href="https://www.facebook.com/goodboysflying"
                            class="bg-[#000000] hover:bg-[#4a97ee] transition-all duration-300 text-white text-center mt-3 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg block"
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
                        <h3 className="text-[56px] justify-center text-center font-bold text-black leading-[1]">Snaps at Good Boys Flying</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[51px]">
                            <div className="grid gap-4" >
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good1} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good2} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good3} alt="" />
                                </a>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good4} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good5} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good6} alt="" />
                                </a>
                            </div>
                            <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good7} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good8} alt="" />
                                </a>
                                <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                                    <img loading="lazy" className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={good88} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                        <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#000000] to-[#7c7c7c] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                            <div className="flex justify-center items-center flex-col">
                                <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                                <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                                <p className="text-stone-300 font-semibold text-2xl lg:text-4xl">goodboysflying@gmail.com</p>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                                <p className="text-white font-bold hidden md:block">Good Boys Flying</p>
                                <div className="flex justify-between gap-[19px]">
                                    <a href="https://www.facebook.com/goodboysflying" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                    <a href="https://www.instagram.com/goodboysflying/" className="text-white font-semibold"  target="_blank" rel="noopener noreferrer">
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

export default Goodboys;