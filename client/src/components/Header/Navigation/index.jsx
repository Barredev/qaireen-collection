import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';

import "../Navigation/style.css"


const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    return (
        <>
            <nav>
                <div className='container flex items-center justify-end gap-8'>

                    {/* Shop by categories */}
                    <div className='col_1 w-[20%]'>
                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                            <RiMenu2Fill className='text-[18px]' />
                            Shop by categories
                            <LiaAngleDownSolid className='text-[13px] ml-auto font-bold' />
                        </Button>
                    </div>
                    {/* Home. dan lain2 */}
                    <div className='col_2 w-[60%]'>
                        <ul className='flex items-center gap-6 nav'>
                            <li className='list-none'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.7)]
                                hover:!text-[#ff5252] !py-4'>
                                        Home
                                    </Button>
                                </Link>
                            </li>

                            <li className='list-none relative'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.7)]
                                hover:!text-[#ff5252] !py-4'>
                                        Fashion</Button>

                                </Link>

                                {/* sub menu fashion*/}

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
                                shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Men</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Female</Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>


                            </li>

                            <li className='list-none relative group'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.7)]
                                hover:!text-[#ff5252] !py-4'>
                                        Bag</Button></Link>

                            </li>

                            <li className='list-none relative group'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.7)]
                                hover:!text-[#ff5252] !py-4'>
                                        Footwear</Button></Link>
                                {/* sub menu footwear*/}

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
                                shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Men</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Female</Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>


                            </li>

                            <li className='list-none relative group'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.7)]
                                hover:!text-[#ff5252] !py-4'>
                                        Hijab</Button></Link>

                                {/* sub menu Hijab*/}

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
                                shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Pashmina</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Segi empat</Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li className='list-none relative group'>
                                <Link to='/' className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[400] !text-[rgba(0,0,0,0.7)]
                                hover:!text-[#ff5252] !py-4'>
                                        Accessories</Button></Link>

                                {/* sub menu Aksesoris*/}

                                <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
                                shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Jam Tangan</Button>
                                            </Link>
                                        </li>

                                        <li className='list-none w-full'>
                                            <Link to='/' className='w-full'>
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start
                                            !rounded-none'>Gelang</Button>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            {/* category panel*/}
            <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
        </>

    )
}

export default Navigation;
