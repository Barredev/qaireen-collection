import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import { ProductDetailsComponent } from '../../components/ProductDetails';
import Rating from '@mui/material/Rating';



const ProductDetails = () => {

  
  const [activeTab, setActiveTab] = useState(0);



  return (
    <>
      <div className='py-5'>

        <div className='container'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className='link transition !text-[14px]'>
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className='link transition !text-[14px]'
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className='link transition !text-[14px]'
            >
              Kerudung Segi Empat
            </Link>
          </Breadcrumbs>
        </div>
      </div>


      <section className='bg-white py-5'>
        {/* produk zoom*/}
        <div className='container flex gap-8 items-center'>
          <div className='productZoomContainer w-[40%]'>
            <ProductZoom></ProductZoom>
          </div>

          {/* produkdetailscomponent*/}

          <div className='productContent w-[60%] pr-10 pl-10'>
            <ProductDetailsComponent></ProductDetailsComponent>

          </div>
        </div>

        {/* details product*/}

        <div className='container pt-10'>
          <div className='flex items-center gap-8 mb-5'>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 &&
                'text-primary'}`}
              onClick={() => setActiveTab(0)}>Description
            </span>

            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 &&
              'text-primary'}`}
              onClick={() => setActiveTab(1)}>Product Details
            </span>

            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 &&
              'text-primary'}`}
              onClick={() => setActiveTab(2)}>Review (5)
            </span>
          </div>


          {
            activeTab === 0 && (
              <div className='shadow-md w-full py-5 px-8 rounded-md'>
                <p>Terinspirasi dari keindahan Bunga Seruni yang melambangkan cinta, kesetiaan,
                  kebahagiaan, dan umur panjang. Scraft ini dihiasi dengan ilustrasi cat air yang halus,
                  dipadukan dengan ornamen klasik bergaya Art Nouveau serta repetisi logo ‘Ro’ Rabbani
                  yang artistik. Tampilan elegan ini memancarkan nuansa feminin dan kontemporer yang
                  anggun—sempurna untuk menemani setiap momen istimewa Anda.
                </p>

                <h4>Sentuhan Artistik dan Modern</h4>

                <p>Desainnya bukan sekadar pola, tetapi karya seni penuh makna. Perpaduan antara gaya klasik
                  dan modern menjadikan scraft ini statement fashion yang unik dan tak lekang oleh waktu.
                </p>

                <h4>Free Shiping</h4>

                <p>Nikmati gratis ongkir untuk setiap pembelian dengan nilai tertentu dan layanan pengembalian
                  mudah untuk kenyamanan Anda.</p>

                <h4>Money Back Guarantee</h4>

                <p>Kami percaya pada kualitas produk kami. Jika Anda tidak puas, pengembalian dana penuh bisa
                  dilakukan dalam waktu 30 hari.</p>

                <h4>Customer Support</h4>

                <p>Tim kami siap membantu Anda 24 jam dengan layanan cepat dan responsif. Pengembalian atau
                  penukaran produk juga tersedia dalam 30 hari.</p>
              </div>
            )}


          {
            activeTab === 1 && (
              <div className='shadow-md w-full py-5 px-8 rounded-md'>

                <p>Koleksi Tetra adalah hasil kreasi dari tim desainer berpengalaman yang berdedikasi, dikembangkan
                  secara eksklusif oleh tim kreatif Rabbani di Studio Desain Artistik kami. Dipimpin oleh para seniman
                  visual dan ilustrator terbaik, koleksi ini merefleksikan harmoni antara nilai tradisi dan sentuhan modern yang elegan.

                </p>


                <h4>Material/Care </h4>

                <p>Product ID
                  475356, 471583, 465186, 461556, 455360, 452405, 445000, 441600, 433028, 422992
                  <br />
                  Perlu diperhatikan bahwa produk ini mungkin memiliki Product ID yang berbeda, meskipun merupakan item yang sama.
                  <br />
                  Fabric Details
                  <br />
                  100% Cotton — lembut, nyaman, dan breathable.
                </p>

              </div>
            )}


          {
            activeTab === 2 && (
              <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                <div className='w-full productReviewsContainer'>
                  <h2 className='text-[18px]'>Customer question & answers</h2>

                  <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll 
                  overflow-x-hidden mt-5 pr-5'>
                    <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.2)] w-full 
                    flex items-center justify-between'>
                      <div className='info w-[50%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src='https://academy.ideaindonesia.com/uploads/Foto_Ferdy_Yahya_869922e1f5.jpg'
                            className='w-full' />
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Akbar Syakir</h4>
                          <h5 className='text-[13px] mb-0'>2025-05-22</h5>
                          <p className='mt-0 mb-0'>Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eius aperiam dolorem alias, saepe voluptas sapiente enim voluptatibus.</p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={4} readOnly />
                    </div>

                    <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.2)] w-full 
                    flex items-center justify-between'>
                      <div className='info w-[50%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src='https://academy.ideaindonesia.com/uploads/Foto_Ferdy_Yahya_869922e1f5.jpg'
                            className='w-full' />
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Akbar Syakir</h4>
                          <h5 className='text-[13px] mb-0'>2025-05-22</h5>
                          <p className='mt-0 mb-0'>Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eius aperiam dolorem alias, saepe voluptas sapiente enim voluptatibus.</p>
                        </div>

                      </div>
                      <Rating name="size-small" defaultValue={4} readOnly />
                    </div>


                  </div>




                  <br />

                  <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                    <h2 className='text-[18px]'>Add a review</h2>


                    <form className='w-full mt-5'>
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Write a review..."
                        className='w-full'
                        multiline
                        rows={4}
                      />

                      <br /><br />
                      <Rating name="size-small" defaultValue={4} />

                      <div className='flex items-center mt-5'>
                        <Button className='btn-org'>Submit Review</Button>
                      </div>


                    </form>
                  </div>


                </div>
              </div>
            )}



          <div className='container pt-8'>
            <h2 className='text-[20px] font-[600] pb-0'>Produk Terbaru</h2>
            <ProductsSlider items={6} />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductDetails;
