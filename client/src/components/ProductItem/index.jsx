import React, { useContext } from 'react';
import '../ProductItem/style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from '../../App';



const ProductItem = () => {

    const context = useContext(MyContext);


    return (
<div className='productItem shadow-sm rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>

            {/* IMAGE WRAPPER */}
            <div className='group imgWrapper w-[100%] h-[205px] overflow-hidden rounded-md relative'>
                <Link>
                    <div className='img h-[220px] overflow-hidden'>
                        <img
                            src='https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/112/MTA-125677678/lozy_hijab_lozy_hijab_-_kirana_paris_plain_japan_natural_full10_paq0ue3r.jpg'
                            className='w-full'
                        />

                        <img
                            src='https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/23/b3fea753-9321-4a5d-b954-a76083baed67.jpg'
                            className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0
                    group-hover:opacity-100 group-hover:scale-105'
                        />
                    </div>
                </Link>

                {/* DISCOUNT LABEL */}
                <span className='discount absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>
                    10%
                </span>

                {/* ACTION BUTTONS */}
                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] 
                transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black 
                    hover:!bg-primary hover:text-white group' onClick={()=>context.setOpenProductDetailsModal(true)}>
                        <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black 
                    hover:!bg-primary hover:text-white group'>
                        <GoGitCompare className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black 
                    hover:!bg-primary hover:text-white group'>
                        <FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                </div>
            </div>

            {/* PRODUCT INFO */}
            <div className='info p-3 py-5'>
                <h6 className='text-[13px] !font-[400]'>
                    <Link to='/' className='link transition-all'>
                        Blouse
                    </Link>
                </h6>
                <h3 className='text-[14px] title mt-1 font-[500] mb-1 text-[rgba(0,0,0,0.9)]'>
                    <Link to='/' className='link transition-all'>
                        Avana Relax Fit Crinkle Blouse – 100% Cotton
                    </Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <div className='flex items-center gap-2 text-sm'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>Rp.150.000</span>
                    <span className='price text-primary text-[15px] font-[600]'>Rp.100.000</span>
                </div>
            </div>
        </div>

    )
}

export default ProductItem;
