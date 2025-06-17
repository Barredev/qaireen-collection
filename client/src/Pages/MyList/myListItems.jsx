import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { IoCloseSharp } from "react-icons/io5";
import { Button } from '@mui/material';


const MyListItems = (props) => {


    return (
        <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b 
        border-[rgba(0,0,0,0.1)]'>
            <div className='img w-[15%] rounded-md overflow-hidden'>
                <Link to="/product/7845" className='group'>
                    <img src='https://static.desty.app/desty-omni/20221106/0f46ff2dc18644b5a022bf949136f766.jpg?x-oss-process=image/format,webp'
                        className='w-full group-hover:scale-105 transition-all' />
                </Link>
            </div>
            <div className='info w-[85%] relative'>
                <IoCloseSharp className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all' />
                <span className='text-[13px]'>Lumière Jewelry</span>
                <h3 className='text-[15px]'>
                    <Link className='link'>Lumière Butterfly Dangle Earrings
                    </Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />


                <div className='flex items-center gap-4 mt-2 mb-2'>
                    <span className='price text-[14px] font-[600]'>Rp.100.000</span>

                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>Rp.150.000</span>

                    <span className='price text-primary text-[14px] font-[600]'>55% OFF</span>
                </div>



                <Button className='btn-org btn-sm'>Add to cart</Button>

            </div>
        </div>
    );
};

export default MyListItems;
