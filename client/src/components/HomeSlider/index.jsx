import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider py-4'>
            <div className='container'>
                <div>
                    <Swiper spaceBetween={10}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        className="sliderHome">
                        <SwiperSlide>
                            <div className='item rounded-[20px] overflow-hidden'>
                            <img src='/slide1.jpg' alt='Banner Slide' className='w-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='/slide2.jpg' alt='Banner Slide' className='w-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='/slide3.jpg' alt='Banner Slide' className='w-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='/slide5.jpg' alt='Banner Slide' className='w-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src='/slide6.jpg' alt='Banner Slide' className='w-full' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
