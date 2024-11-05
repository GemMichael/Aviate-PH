import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pilot1 from '../pictures/pilot1.jpg';
import cheynair from '../pictures/CHEYNAIRlogo.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


function CHEYNAIR() {
    return (
        <>

            <Helmet>
                <title>Cheynair Aviation  - Pilot Training</title>
                <meta name="description" content="Join Cheynair Aviation for top-notch pilot training and career opportunities. Experience our modern aircraft fleet and skilled instructors." />
                <meta name="keywords" content="pilot training, aviation academy, flight school, Cheynair Aviation" />
                <link rel="canonical" href="https://yourwebsite.com/aaa" />
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
                                <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#0073E6] to-[#808080] text-5xl lg:text-[56px] font-bold via-[#0000FF] leading-[1.3] mt-12 lg:mt-0">
                                    Cheynair Aviation
                                </h1>
                            </div>

                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="hidden lg:block w-full lg:w-[397px] relative">
                            <img className="rounded-lg ml-auto w-full lg:h-[397px] object-cover" src={cheynair} alt="" />
                        </div>
                    </div>
                </section>
            </main>


           
            <Footer />

        </>
    )
}

export default CHEYNAIR;