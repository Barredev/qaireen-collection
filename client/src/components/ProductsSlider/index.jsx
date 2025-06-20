import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
    return (
        <div className='productsSlider py-3'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>


                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>


                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>

                <SwiperSlide>
                    <ProductItem></ProductItem>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductsSlider;
