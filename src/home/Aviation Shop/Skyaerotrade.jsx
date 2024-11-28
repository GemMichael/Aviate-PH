import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import skylogo from '../pictures/Skylogo.jpg';
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
import Navbar from '../Navbar';
import Footer from '../Footer';


function Skyaerotrade() {
    return (
        <>

            <Helmet>
                <title>Sky Aerotrade</title>
                <meta name="description" content="Join All Asia Aviation Academy for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, All Asia Aviation Academy" />
                <link rel="canonical" href="https://yourwebsite.com/aaa" />
            </Helmet>

            <header>
                <Navbar />
            </header>
            <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-900 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
            <div className="w-[366px] hidden h-[366px] -z-10  bg-yellow-600 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
            <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-blue-900 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>

            <main>
                <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[100px] lg:mt-[150px]  px-[24px] xl:px-0 relative">
                    <Link to="/landingshop" className="absolute -top-12 left-0 bg-blue-500 text-white py-2 px-4 rounded">
                        Return
                    </Link>

                    <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
                        <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                            <div>
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#eb1f28] to-[#000] text-5xl lg:text-[56px] font-bold via-[#000000] leading-[1.3] ">
                                    Sky Aerotrade
                                </h1>
                            </div>
                            <div className="w-full lg:max-w-[79%]">
                                <p className="text-black lg:text-start md:text-center  leading-[1.5]">
                                    Your one-stop shop for all things aviation! Official aviation partner of Bose Philippines.
                                </p>
                            </div>
                            <a
                                href="https://www.facebook.com/SkyAerotradePH"
                                className="bg-[#eb1f28] hover:bg-[#000000] transition-all duration-300 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg" target="_blank" rel="noopener noreferrer">
                                Shop now!
                            </a>

                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[483px] object-cover" src={skylogo} alt="" />
                        </div>

                    </div>
                </section>
            </main>



            <section id="contact" className="max-w-[1160px] w-full mx-auto mt-40 px-[24px] lg:px-0 " >
                <div data-aos="fade-up" data-aos-duration="1000" className=" bg-gradient-to-r pt-[85px] pb-[35px] px-[40px] lg:px-[59px] from-[#eb1f28] to-[#000] rounded-lg flex-col justify-end items-center gap-[132px] w-full">
                    <div className="flex justify-center items-center flex-col">
                        <p className="text-stone-300 text-lg mb-[23px]">CONTACT US</p>
                        <p className="text-white text-[35px] lg:text-[40px] font-bold mb-[45px] text-center">Have a question? Let's talk!</p>
                        <p className="text-stone-300 font-semibold text-2xl lg:text-4xl">09175292017</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between w-full mt-[132px] ">
                        <p className="text-white font-bold hidden md:block">Sky Aerotrade</p>
                        <div className="flex justify-between gap-[19px]">
                            <a href="https://www.facebook.com/SkyAerotradePH" className="text-white font-semibold">
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/skyaerotrade/" className="text-white font-semibold">
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

export default Skyaerotrade;