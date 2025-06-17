import React, { useContext } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiGift } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';

import { IoIosClose } from "react-icons/io";
import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel';
import { MyContext } from '../../App';





const Footer = () => {

    const context = useContext(MyContext)


    return (
        <>
            <footer className='py-6 bg-white'>
                <div className='container'>
                    <div className='flex items-center justify-center gap-4 py-8 pb-8'>
                        <div className='col flex items-center justify-center flex-col group w-[20%] text-center'>
                            <LiaShippingFastSolid className='text-[40px] transition-all duration-300
                    group-hover:text-primary group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600] mt-3'>Gratis Ongkir!</h3>
                            <p className='text-[12px] font-[500]'> Bebas ongkir untuk pembelian minimal 6 item</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group w-[20%] text-center'>
                            <FiGift className='text-[40px] transition-all duration-300
                    group-hover:text-primary group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600] mt-3'>Hadiah Spesial</h3>
                            <p className='text-[12px] font-[500]'>Belanja sekarang dan nikmati hadiah spesial dari kami</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group w-[20%] text-center'>
                            <RiSecurePaymentLine className='text-[40px] transition-all duration-300
                    group-hover:text-primary group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600] mt-3'>Pembayaran Aman!</h3>
                            <p className='text-[12px] font-[500]'> Transaksi Anda Aman Bersama Kami Terlindungi 100%</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group w-[20%] text-center'>
                            <BiSupport className='text-[40px] transition-all duration-300
                    group-hover:text-primary group-hover:-translate-y-1'/>
                            <h3 className='text-[16px] font-[600] mt-3'>Support 24/7</h3>
                            <p className='text-[12px] font-[500]'>Butuh bantuan? Tim kami siap 24/7 untuk Anda!</p>
                        </div>

                    </div>


                    <hr />



                    <div className='footer flex flex-wrap justify-between py-8 px-4 text-gray-800'>

                        {/* Kontak */}
                        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                            <h2 className='text-[20px] font-[600] mb-4'>Hubungi Kami</h2>
                            <p className='text-[14px] font-[400] pb-4'>
                                Qaireen Collection – Pusat Busana & Koleksi Pakaian Elegan <br />
                                Cugenang, Kota Cianjur<br />
                                Jawa Barat
                            </p>
                            <Link className='text-[14px] text-blue-500 hover:underline' to='mailto:lkpdias03@gmail.com'>
                                lkpdias03@gmail.com
                            </Link>
                            <span className='text-[18px] font-[600] block mt-3 text-primary'>
                                (+62) 814-6094-9043
                            </span>
                            <p className='mt-2 flex items-center text-[14px]'>
                                💬 Chat Online - Bantuan Ahli Siap Membantu
                            </p>
                        </div>

                        {/* Produk */}
                        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                            <h2 className='text-[20px] font-[600] mb-4'>Produk</h2>
                            <ul className='text-[14px] space-y-2'>
                                <li><Link to='#'>Diskon Harga</Link></li>
                                <li><Link to='#'>Produk Terbaru</Link></li>
                                <li><Link to='#'>Penjualan Terbaik</Link></li>
                                <li><Link to='#'>Hubungi Kami</Link></li>
                                <li><Link to='#'>Peta Situs</Link></li>
                                <li><Link to='#'>Toko Kami</Link></li>
                            </ul>
                        </div>

                        {/* Tentang Kami */}
                        <div className='w-full md:w-1/3'>
                            <h2 className='text-[20px] font-[600] mb-4'>Tentang Kami</h2>
                            <ul className='text-[14px] space-y-2'>
                                <li><Link to='#'>Pengiriman</Link></li>
                                <li><Link to='#'>Pemberitahuan Hukum</Link></li>
                                <li><Link to='#'>Syarat & Ketentuan</Link></li>
                                <li><Link to='#'>Tentang Kami</Link></li>
                                <li><Link to='#'>Pembayaran Aman</Link></li>
                                <li><Link to='#'>Masuk</Link></li>
                            </ul>
                        </div>

                    </div>


                </div>
            </footer>


            <div className='bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white'>
                <div className='container flex justify-center items-center'>
                    <p className='text-[13px] text-center'>2025 - Qaireen Collection's</p>
                </div>
            </div>





            {/* Cart Panel */}
            <Drawer
                open={context.openCartPanel}
                onClose={context.toggleCartPanel(false)}
                anchor={'right'}
                className='cartPanel'
            >
                <div className='flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba
        (0,0,0,0.1)] overflow-hidden'>
                    <h4>Shooping Cart (1)</h4>
                    <IoIosClose className='text-[20px] cursor-pointer' onClick={context.toggleCartPanel(false)} />
                </div>




                <CartPanel></CartPanel>


            </Drawer>




        </>

    );
};

export default Footer;
