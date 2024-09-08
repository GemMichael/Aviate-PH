import React from 'react'

function Hero() {
  return (
    <>
     <div className="w-[292px] absolute -z-10 h-[292px] bg-blue-800 bg-opacity-30 rounded-full blur-[123px] top-[150px]"></div>
    <div className="w-[366px] hidden h-[366px] -z-10  bg-blue-500 bg-opacity-30 rounded-full blur-[123px] top-[140px] lg:absolute left-[640px]"></div>
    <div className="w-[366px] hidden h-[366px] lg:block -z-10  bg-blue-400 bg-opacity-20 rounded-full blur-[105px] lg:absolute top-[407px] -right-[90px]"></div>
    <section id="home" className="scroll-pt-32 max-w-[1160px] w-full mx-auto mt-[100px] lg:mt-[150px]  px-[24px] xl:px-0 relative">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-9">
            <div data-aos="fade-down-left" data-aos-duration="1000" className="max-w-[694px] w-full flex flex-col gap-4 lg:gap-[32px] ">
                <div>
                    <h1 className="lg:w-[694px] lg:text-start md:text-center text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#191970] text-5xl lg:text-[56px] font-bold via-[#4682B4] leading-[1.3] ">
                        Your guide to find best Flying School for you!
                    </h1>
                </div>
                <div className="w-full lg:max-w-[79%]">
                    <p className="text-black lg:text-start md:text-center leading-[1.5]">
                        This website is your ultimate guide to finding the perfect flying school.
                        Here, you'll discover a <span className="font-bold"> full list of flight schools </span>
                        to help you choose the one that best fits your journey toward becoming a pilot. You can 
                        also learn about the <span className="font-bold"> different pilot licenses, </span> 
                        see <span className="font-bold"> projections </span> for global pilot job demand, and learn
                        about the <span className="font-bold"> lifestyle </span> of both student pilots and professional pilots. Additionally, the site 
                        will list down the stores where you can find pilot supplies, as well as a list of <span className="font-bold"> flight simulators and discovery flights </span>, allowing you to expercience what it's like to be a pilot 
                        without committing to a flying school. Explore your options and take the first step toward your
                        flying dreams. Let's earn our wings!
                    </p>
                    <p className="mt-5 text-black  lg:text-start md:text-center leading-[1.5]">
                        more here
                    </p>
                </div>
                
            </div>

        </div>
    </section>
    </>
  )
}

export default Hero;