import React, { useContext } from 'react';
import '../ProductItem/style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import { FiShoppingCart } from 'react-icons/fi';
import { MyContext } from '../../App';


const ProductItem = () => {

    const context = useContext(MyContext);

    return (
        <div className='flex bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-md transition-all'>

            {/* IMAGE WRAPPER */}
            <div className='group imgWrapper w-[25%] h-[220px] relative overflow-hidden'>
                <Link>
                    <div className='img h-full overflow-hidden'>
                        <img
                            src='https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/112/MTA-125677678/lozy_hijab_lozy_hijab_-_kirana_paris_plain_japan_natural_full10_paq0ue3r.jpg'
                            className='w-full h-full object-cover transition-all duration-500'
                        />
                        <img
                            src='https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/23/b3fea753-9321-4a5d-b954-a76083baed67.jpg'
                            className='w-full h-full object-cover transition-all duration-700 absolute top-0 left-0 opacity-0
                            group-hover:opacity-100 group-hover:scale-105'
                        />
                    </div>
                </Link>

                {/* DISCOUNT LABEL */}
                <span className='absolute top-2 left-2 z-50 bg-red-500 text-white text-xs font-semibold px-2 py-[2px] rounded-full'>
                    10%
                </span>

                {/* ACTION BUTTONS */}
                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] 
                    transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black 
                        hover:!bg-primary hover:text-white group'  onClick={()=>context.setOpenProductDetailsModal(true)}>
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
            <div className='info w-[75%] p-4 px-8 flex flex-col justify-between'>
                <div>
                    <h6 className='text-sm text-gray-600 !font-[400]'>
                        <Link to='/' className='hover:underline'>
                            Blouse
                        </Link>
                    </h6>
                    <h3 className='text-base font-semibold text-gray-800 mt-1 mb-2'>
                        <Link to='/' className='hover:underline'>
                            Avana Relax Fit Crinkle Blouse – 100% Cotton
                        </Link>
                    </h3>
                    <p className='text-sm text-gray-600 mb-3'>
                        Temukan gaya terbaikmu dengan koleksi busana pilihan yang memadukan
                        kenyamanan dan tren terkini. Jadilah pusat perhatian di setiap kesempatan!
                    </p>
                </div>

                <div>
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                    <div className='mt-2 text-sm flex items-center gap-2'>
                        <span className='line-through text-gray-400'>Rp.150.000</span>
                        <span className='text-red-600 font-bold'>Rp.100.000</span>
                    </div>
                </div>

                <div>
                    <Button
                        variant="outlined"
                        className='!border !border-[#ff4d4f] !text-[#ff4d4f] !rounded !py-1.5 !px-4 !w-fit !text-sm !font-semibold flex items-center gap-2 hover:!bg-[#ff4d4f] hover:!text-white transition-all'
                    >
                        <FiShoppingCart className='text-[16px]' />
                        ADD TO CART
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default ProductItem;
