import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { TfiGift } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5";

import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";








const DashboardBoxes = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="dashboardBoxesSlider"
            >
                <SwiperSlide>
                    <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1faff] rounded-md border border-[rgba(0,0,0,0.1)] flex
            items-center gap-4'>

                        <TfiGift className='text-[40px] text-[#3872fa]' />
                        <div className='info w-[70%]'>
                            <h3>New Orders</h3>
                            <b>300</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#3872fa]' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1faff] rounded-md border border-[rgba(0,0,0,0.1)] flex
            items-center gap-4'>

                        <AiTwotonePieChart className='text-[50px] text-[#10b981]' />
                        <div className='info w-[70%]'>
                            <h3>Sales</h3>
                            <b>Rp.5.000.000</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#10b981]' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1faff] rounded-md border border-[rgba(0,0,0,0.1)] flex
            items-center gap-4'>

                        <BsBank className='text-[50px] text-[#7928ca]' />
                        <div className='info w-[70%]'>
                            <h3>Revenue</h3>
                            <b>300</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#7928ca]' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='box bg-white p-5 cursor-pointer hover:bg-[#f1faff] rounded-md border border-[rgba(0,0,0,0.1)] flex
            items-center gap-4'>

                        <FaOpencart className='text-[50px] text-[#d636c9]' />
                        <div className='info w-[70%]'>
                            <h3>Total Products</h3>
                            <b>300</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#d636c9]' />
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default DashboardBoxes;
