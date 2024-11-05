import React, { useState, useRef, useEffect } from 'react';
import pilot1 from './pictures/pilot1.jpg';
import video5 from './Videos/vid5.mp4';
import captjm from './Videos/CaptJm.mp4';
import captjmpinning from './Videos/Captjmpinning.mp4';
import captstef from './Videos/Captstef.mp4';
import pilotmatts from './Videos/Pilotmatts.mp4';
import captjcrage from './Videos/Captjcrage.mp4';
import pic1 from './pictures/captjcpic.jpg';
import pic2 from './pictures/captdavid.jpg';
import pic3 from './pictures/pic3.jpg';

function Pilotjourney() {
    const [enlargedVideo, setEnlargedVideo] = useState(null);
    const [videoContent, setVideoContent] = useState({ title: '', description: '' });
    const videoRef = useRef(null);
    const regularVideoRefs = useRef([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const videoDetails = [
        {
            src: captjm,
            title: '200hrs',
            description: 'more here',
        },
        {
            src: captjmpinning,
            title: 'pinning',
            description: 'more here',
        },
        {
            src: captstef,
            title: 'First solo',
            description: 'more here',
        },
        {
            src: pilotmatts,
            title: 'Cross Country',
            description: 'more here',
        },
        {
            src: captjcrage,
            title: 'Pilot journey',
            description: 'more here',
        },
    ];

    const handleVideoClick = (videoSrc, index) => {
        regularVideoRefs.current.forEach((video, idx) => {
            if (video && idx !== index) {
                video.pause();
            }
        });


        setEnlargedVideo(videoSrc);
        setVideoContent(videoDetails[index]);


        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 0);
    };

    const handleClose = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setEnlargedVideo(null);
        setVideoContent({ title: '', description: '' });
    };

    const handleEnlargedVideoPlay = () => {
        regularVideoRefs.current.forEach((video) => {
            if (video) {
                video.pause();
            }
        });
    };

    return (
        <section className="max-w-[1160px] w-full mx-auto mt-[168px] px-[24px] lg:px-0">
            <h3 className="text-[56px] justify-center text-center font-bold text-black leading-[1]">Pilot Journeys</h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-[51px]">
                <div className="grid gap-4 relative">
                    <video
                        className="h-full w-full object-cover cursor-pointer rounded-lg"
                        src={captjm}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[0] = el)}
                        onClick={() => handleVideoClick(captjm, 0)}
                    />
                    <video
                        className="h-full w-full rounded-lg object-cover cursor-pointer"
                        src={captstef}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[4] = el)}
                        onClick={() => handleVideoClick(captstef, 2)}
                    />
                    <video
                        className="h-full w-full object-cover cursor-pointer rounded-lg"
                        src={pilotmatts}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[1] = el)}
                        onClick={() => handleVideoClick(pilotmatts, 3)}
                    />
                </div>

                <div className="grid gap-4">
                    <video
                        className="h-full w-full object-cover cursor-pointer rounded-lg"
                        src={captjmpinning}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[2] = el)}
                        onClick={() => handleVideoClick(captjmpinning, 1)}
                    />
                    <video
                        className="h-full w-full object-cover cursor-pointer rounded-lg"
                        src={captjmpinning}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[2] = el)}
                        onClick={() => handleVideoClick(captjmpinning, 1)}
                    />
                    <video
                        className="h-full w-full object-cover cursor-pointer rounded-lg"
                        src={captjmpinning}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[2] = el)}
                        onClick={() => handleVideoClick(captjmpinning, 1)}
                    />

                </div>

                <div className="grid gap-4">
                    <video
                        className="h-full w-full rounded-lg object-cover cursor-pointer"
                        src={captstef}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[4] = el)}
                        onClick={() => handleVideoClick(captstef, 2)}
                    />
                    <video
                        className="h-full w-full object-cover cursor-pointer rounded-lg"
                        src={captjcrage}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[3] = el)}
                        onClick={() => handleVideoClick(captjcrage, 4)}
                    />
                    <video
                        className="h-full w-full rounded-lg object-cover cursor-pointer"
                        src={captstef}
                        controls
                        autoPlay={!isMobile}
                        muted
                        loop
                        ref={(el) => (regularVideoRefs.current[4] = el)}
                        onClick={() => handleVideoClick(captstef, 2)}
                    />
                </div>
            </div>

            {enlargedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative flex flex-col justify-center items-center">
                        <video
                            ref={videoRef}
                            className="h-[80vh] w-auto object-cover cursor-pointer rounded-lg"
                            src={enlargedVideo}
                            controls
                            onPlay={handleEnlargedVideoPlay}
                        />

                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={handleClose}
                        >
                            &times;
                        </button>

                        <div className="mt-4 text-white text-center">
                            <h3 className="text-2xl font-bold">{videoContent.title}</h3>
                            <p>{videoContent.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Pilotjourney;
