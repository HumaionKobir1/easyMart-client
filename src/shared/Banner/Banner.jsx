// Import Swiper React components
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Banner.css'
import Aos from 'aos';
const Banner = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])
    return (
        <section className='banner-section'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="banner1 lg:py-40">
                    <div className="container mx-auto">
                        <div className="w-[50%]" data-aos="fade-right">
                            <h6 className='text-2xl tracking-widest text-gray-500'>Welcome To Fashion</h6>
                            <h1 className='text-6xl mt-2 text-gray-800 font-bold'>MEN FASSHION</h1>
                            <div className="btn mt-5">
                                <button
                                    className='font-bold rounded-sm hover:bg-rose-900  bg-[#77153db2] px-4 py-2 text-white'
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="banner2 lg:py-40">
                    <div className="container mx-auto">
                        <div className="w-[37%]">
                            <h6 className='text-2xl tracking-widest text-center text-gray-500'>Welcome To Fashion</h6>
                            <h1 className='text-6xl mt-2 text-gray-800 font-bold'>MEN FASSHION</h1>
                            <div className="btn text-center mt-5">
                                <button
                                    className='font-bold rounded-sm hover:bg-rose-900  bg-[#77153db2] px-4 py-2 text-white'
                                >
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </section>
    )
}
export default Banner;