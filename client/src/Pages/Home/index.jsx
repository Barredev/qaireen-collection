import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';


const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div>
      <HomeSlider></HomeSlider>
      <HomeCatSlider />

      {/* produk populer */}

      <section className='bg-white py-8'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='leftSec'>
              <h2 className='text-[20px] font-[600]'>Produk Populer</h2>
              <p className='text-[14px] font-[400]'>Buruan! Penawaran spesial hanya sampai akhir bulan !</p>
            </div>


            <div className='rightSec w-[65%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Baju Perempuan" />
                <Tab label="Kaos Pria" />
                <Tab label="Tas" />
                <Tab label="Jam Tangan" />
                <Tab label="Kerudung" />
                <Tab label="Perhiasan" />
                <Tab label="Heels" />
                <Tab label="Dompet" />
              </Tabs>
            </div>


          </div>


          <ProductsSlider items={6} />


        </div>
      </section>

      {/* gratis ongkir */}
      <section className='py-4 pt-2 bg-white'>
        <div className='container'>
          <div className='freeShiping w-full p-4 border-2 border-[#ff5252] flex items-center 
          justify-between rounded-md'>
            <div className='col1 flex items-center gap-4'>
              <LiaShippingFastSolid className='text-[50px]' />
              <span className='text-[20px] font-[600]'>Gratis Ongkir</span>
            </div>

            <div className='col2'>
              <p className='mb-0 font-[500]'>
                Nikmati layanan bebas ongkir untuk setiap pembelian minimal 6 item</p>
            </div>


            <p className='font-bold text[25px]'> Mulai dari 6 item aja!</p>



          </div>


          <AdsBannerSlider items={4} />




        </div>
      </section>

      {/* produk terbaru */}

      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
        <h2 className='text-[20px] font-[600]'>Produk Terbaru</h2>
          <ProductsSlider items={6}/>
        </div>
      </section>


            {/* produk unggulan */}

            <section className='py-5 pt-0 bg-white'>
        <div className='container'>
        <h2 className='text-[20px] font-[600]'>Produk Unggulan</h2>
          <ProductsSlider items={6}/>
        </div>
      </section>



      {/* footer */}

      

    </div>
  )
}

export default Home;
