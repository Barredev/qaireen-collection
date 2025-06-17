import React, { useState } from 'react';
import Button from '@mui/material/Button';
import  QtyBox  from '../QtyBox';
import Rating from '@mui/material/Rating';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";

export const ProductDetailsComponent = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
    return (
        <>
            <h1 className='text-[24px] font-[500] mb-2'>
                Kerudung Segi Empat</h1>
            <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-[14px] opacity-75'>
                    Brands :
                    <span className='font-[400] text-black'> Rabbani</span>
                </span>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <span className='text-[13px] cursor-pointer'>Review (5)</span>
            </div>

            <div className='flex items-center gap-4 mt-4'>
                <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>Rp.150.000</span>
                <span className='price text-primary text-[20px] font-[600]'>Rp.100.000</span>

                <span className='text-[14px]'>
                    Available In Stock :
                    <span className='text-green-600 text-[14px] font-bold'> 147 Items</span>
                </span>


            </div>


            <p className='mt-3 pr-10 mb-5'>Scraft ini terinspirasi dari keindahan ‘Bunga Seruni’ sebagai simbol cinta, kesetiaan, kebahagiaan,
                dan umur panjang serta warna dari bunga seruni ini memiliki makna yang berbeda-beda. Dibuat dengan
                teknik ilustrasi dan pewarnaan cat air yang dipadukan dengan ornamen klasik dan repetitif logo ‘Ro’
                Rabbani sebagai identitas brand. Perpaduan ornamen klasik bergaya ‘Art Nouveau’ dan ‘Bunga Seruni’
                yang diciptakan secara inovatif dengan sentuhan kontemporer menjadikan desain ini tampak anggun, feminim, dan artistik.</p>


            <div className='flex items-center gap-3'>
                <span className='text[16px]'>Size : </span>
                <div className='flex items-center gap-1 actions'>
                    <Button
                        className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(0)}
                    >
                        S
                    </Button>

                    <Button
                        className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(1)}
                    >
                        M
                    </Button>

                    <Button
                        className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(2)}
                    >
                        L
                    </Button>

                    <Button
                        className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(3)}
                    >
                        XL
                    </Button>
                </div>
            </div>

            <p className='text-[14px] mt-5 mb-2 text-[#000]'>Free Shiping (Est. Delivery Time 2-3 Days)</p>

            <div className='flex items-center gap-4'>
                <div className='qtyBoxWrapper w-[70px]'>
                    <QtyBox />
                </div>



                <Button className='btn-org flex gap-2'>
                    <FiShoppingCart className='text-[22px]' />
                    Add to Cart
                </Button>


            </div>



            <div className='flex items-center gap-4 mt-6'>
                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'
                ><FaRegHeart className='text-[18px]' /> Add to Wishlist</span>

                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'
                ><GoGitCompare className='text-[18px]' /> Add to Compare</span>
            </div>
        </>
    )
}

