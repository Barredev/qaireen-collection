import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }



    return (
        <>
            <div className='flex gap-3'>

                <div className='slider w-[15%]'>
                    <Swiper
                        ref={zoomSliderSml}
                        direction={'vertical'}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs h-[411px] overflow-hidden"
                    >
                        <SwiperSlide>
                            <div
                                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-100' : 'opacity-30'}`}
                                onClick={() => goto(0)}
                            >
                                <img src='https://cdn.rabbani.id/8e89fe5523d12c569d4512fbac24e58d.jpg'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-100' : 'opacity-30'}`}
                                onClick={() => goto(1)}
                            >
                                <img src='https://cdn.rabbani.id/82c3a5fc395efb8dda68a12d0e637597.jpg'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-100' : 'opacity-30'}`}
                                onClick={() => goto(2)}
                            >
                                <img src='https://cdn.rabbani.id/394b982a5b7cfbcbfe4d69f3417df363.jpg'
                                    className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
                <div className='zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md'>

                    <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                    >
                        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1}
                                src={'https://cdn.rabbani.id/8e89fe5523d12c569d4512fbac24e58d.jpg'} />
                        </SwiperSlide>

                        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1}
                                src={'https://cdn.rabbani.id/82c3a5fc395efb8dda68a12d0e637597.jpg'} />
                        </SwiperSlide>
                        <SwiperSlide>

                            <InnerImageZoom zoomType='hover' zoomScale={1}
                                src={'https://cdn.rabbani.id/394b982a5b7cfbcbfe4d69f3417df363.jpg'} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductZoom;
