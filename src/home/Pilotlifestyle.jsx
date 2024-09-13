import React from 'react';
import pilot1 from './pictures/pilot1.jpg'; 
import video1 from './Videos/stepvid.mp4';
import video2 from './Videos/captjcvid.mp4';
import video3 from './Videos/ivanvid.mp4';
import video4 from './Videos/captjuanavid.mp4';
import video5 from './Videos/vid5.mp4';
import pic1 from './pictures/captjcpic.jpg';
import pic2 from './pictures/captdavid.jpg';
import pic3 from './pictures/pic3.jpg';



function Pilotlifestlye() {
    return (
        <section className="max-w-[1160px] w-full mx-auto mt-[168px]  px-[24px] lg:px-0 ">
            <h3 className="text-[56px] justify-center text-center font-bold text-black leading-[1]">Pilot Lifestyle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-[51px]">
                <div className="grid gap-4" >
                <a  className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                      <video className="h-full w-full max-w-full object-cover transform]" 
                        src={video1} controls>
                        </video>
                    </a>  
                    <a  className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pic1} alt="" />
                    </a>
                    <a  className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                      <video className="h-full w-full max-w-full object-cover transform]" 
                        src={video4} controls>
                        </video>
                    </a>  
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-4">
                    <a  className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pic2} alt="" />
                    </a>
                    <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                      <video className="h-full w-full max-w-full object-cover transform]" 
                        src={video2} controls>
                        </video>
                    </a>  
                    <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pilot1} alt="" />
                    </a>
                </div>
                <div className="grid gap-4" data-aos="fade-up" data-aos-duration="2000">
                    <a  className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                        <img className="h-full w-full max-w-full object-cover transform hover:scale-150 transition-all duration-[600ms]" src={pic3} alt="" />
                    </a>
                    <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                      <video className="h-full w-full max-w-full object-cover transform]" 
                        src={video5} controls>
                        </video>
                    </a>  
                    <a className="overflow-hidden rounded-lg" data-aos="fade-up" data-aos-duration="1000">
                      <video className="h-full w-full max-w-full object-cover transform]" 
                        src={video3} controls>
                        </video>
                    </a>  
                </div>
            </div>
        </section>
    );
}

export default Pilotlifestlye;