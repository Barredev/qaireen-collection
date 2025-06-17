import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";

const CategoryCollapse = () => {
const [submenuIndex, setSubmenuIndex] = useState(null);

const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
};

const openSubmenu = (index) => {
    if (submenuIndex === index) {
        setSubmenuIndex(null);
    } else {
        setSubmenuIndex(index);
    }
};


    return (
        <>
            <div className='scroll'>
                <ul className='w-full'>

                    {/* Fashion */}
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[black]'>
                                Fashion</Button>
                        </Link>

                        {submenuIndex === 0 ? (
                            <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(0)}
                            />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(0)} />

                        )}

                        {submenuIndex === 0 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                    transition text-[14px] '>
                                        Women</Link>

                                </li>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                    transition text-[14px] '>
                                        Boy</Link>

                                </li>
                            </ul>


                        )}

                    </li>

                    {/* Bags */}


                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[black]'>
                                Bag</Button>
                        </Link>

                        {submenuIndex === 1 ? (
                            <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(1)}
                            />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(1)} />

                        )}

                        {submenuIndex === 1 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                    transition text-[14px] '>
                                        Women</Link>

                                </li>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                    transition text-[14px] '>
                                        Boy</Link>

                                </li>


                            </ul>


                        )}

                    </li>


                    {/* Footwear */}


                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[black]'>
                                Footwear</Button>
                        </Link>

                        {submenuIndex === 2 ? (
                            <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(2)}
                            />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(2)} />

                        )}

                        {submenuIndex === 2 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                    transition text-[14px] '>
                                        Women</Link>

                                </li>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                    transition text-[14px] '>
                                        Boy</Link>

                                </li>


                            </ul>


                        )}

                    </li>


                    {/* Hijab */}
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[black]'>
                                Hijab</Button>
                        </Link>

                        {submenuIndex === 3 ? (
                            <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(3)}
                            />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(3)} />
                        )}

                        {submenuIndex === 3 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                        transition text-[14px] '>
                                        Pashmina</Link>
                                </li>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                        transition text-[14px] '>
                                        Segi Empat</Link>
                                </li>
                            </ul>
                        )}
                    </li>


                    {/* Accessories */}
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[black]'>
                                Accessories</Button>
                        </Link>

                        {submenuIndex === 4 ? (
                            <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(4)}
                            />
                        ) : (
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={() => openSubmenu(4)} />
                        )}

                        {submenuIndex === 4 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                         transition text-[14px] '>
                                        Jam Tangan</Link>
                                </li>
                                <li className='list-none relative mb-1'>
                                    <Link to='/' className='link w-full !text-left !justify-start !px-3 
                                         transition text-[14px] '>
                                        Kacamata</Link>
                                </li>
                            </ul>
                        )}
                    </li>



                </ul>
            </div>
        </>
    );
};

export default CategoryCollapse;
