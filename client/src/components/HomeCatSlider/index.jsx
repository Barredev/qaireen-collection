import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
      <div className='container'>
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://images.tokopedia.net/img/cache/200-square/product-1/2018/11/26/4754866/4754866_bbf42bed-ae0c-46d4-bef8-5fba74ff4155_640_640.jpg?ect=4g'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Baju Perempuan</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://img.id.my-best.com/contents/4a1127aaea7a46afbb3518269b4decde.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=3db5951a6ab1e4e034f5e806ab00b3da'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Kaos Pria</h3>
              </div>
            </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://img.id.my-best.com/product_images/7318b3eae6df4dda482bafd3765a5232.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=796413d16c6ab20b674ad9eb3348976c'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Tas</h3>
              </div>
            </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://pilihanpro.id/wp-content/uploads/2023/04/Gambar_1_-_Alexandre_Christie_AC_6141_MC-removebg-preview-256x300.png'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Jam Tangan</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://s3.belanjapasti.com/media/image/pashmina-picot-ceruty-babydoll-170129.png'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Kerudung</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://victoria-jewellery.co.id/wp-content/uploads/2021/07/S-8521-SET-1.jpg'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Perhiasan</h3>
              </div>
            </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://img.id.my-best.com/product_images/ffdbf72e40eeb5b770db8950b2c3a08d.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=56cea5ccbd8910ca163f0d6dcd3056e4'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Heels</h3>
              </div>
            </Link>
          </SwiperSlide>



          <SwiperSlide>
            <Link to='/'>
              <div className='item py-7 p-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col'>
                <img
                  src='https://cdn1.katadata.co.id/media/images/2022/09/05/dompet_Eiger-2022_09_05-14_19_06_1abd597f6cfb2683d659325f7f4e209f.png'
                  className='w-[60px] transition-all'>
                </img>
                <h3 className='text-[15px] font-[500] mt-3'>Dompet</h3>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  )
}

export default HomeCatSlider;
