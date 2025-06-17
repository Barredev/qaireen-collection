import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa6";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";










const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

{/*  Header */ }

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const context = useContext(MyContext)



    return (
        <header className='bg-white'>
            <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='coll w-[50%]'>
                            <p className='text-[12px] font-[500]'> Promo terbatas! Dapatkan diskon hingga 50% untuk koleksi terbaru
                            </p>
                        </div>


                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link to="/help-center" className='text-[13px] link font-[500]
                                    transition '>Help Center</Link>

                                </li>

                                <li className='list-none'>
                                    <Link to="/order-tracking" className='text-[13px] link font-[500]
                                    transition '>
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className='header py-4 border-b-[1px] border-gray-250'>
                <div className='container flex items-center justify-between'>
                    {/* Logo */}
                    <div className='w-1/4'>
                        <Link to='/'>
                            <img src='/logo.jpg' alt='Logo' className='h-[50px] object-contain' />
                        </Link>
                    </div>

                    {/* Search */}
                    <div className='col2 w-[40%]'>
                        <Search />
                    </div>

                    {/* Icons */}
                    <div className='col3 w-[30%] flex items-center pl-7'>
                        <>
                            <div className='text-sm font-medium'>
                                {
                                    context.isLogin === false ? (
                                        <Link to='/login'>Login</Link>
                                        |
                                        <Link to='/register'>Register</Link>
                                    ) : (
                                        <>
                                            <Button className='!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer' onClick={handleClick}>
                                                <Button className='!w-[40px] !h-[40px] !min-w-[40px]
                                            !rounded-full !bg-[#f1f1f1] '>
                                                    <FaRegUser className='text-[16px] text-[#000]' />
                                                </Button>

                                                <div className='info flex flex-col'>
                                                    <h4 className='leading-3 text-[12px] text-[rgba(0,0,0,0.6)] font-[500] mb-0 capitalize text-left justify-start'>Akbar Syakir</h4>
                                                    <span className='text-[11px] text-[rgba(0,0,0,0.6)] font-[400] capitalize text-left justify-start'>syakirakbar321@gmail.com</span>
                                                </div>

                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to="/my-account" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <FaRegUser className='text-[18px]' /> <span className='text-[14px]'>My Account</span>
                                                    </MenuItem>
                                                </Link>
                                                <Link to="/my-orders" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <IoBagCheckOutline className='text-[18px]' /> <span className='text-[14px]'>Orders</span>
                                                    </MenuItem>
                                                </Link>
                                                <Link to="/my-list" className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <IoMdHeartEmpty className='text-[18px]' /> <span className='text-[14px]'>My List</span>
                                                    </MenuItem>
                                                </Link>
                                                <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                    <IoIosLogOut className='text-[18px]' /> <span className='text-[14px]'>Logout</span>
                                                </MenuItem>
                                            </Menu>
                                        </>
                                    )}

                            </div>

                            <Tooltip title="Compare">
                                <IconButton aria-label='cart'>
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <GoGitCompare />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Wishlist">
                                <IconButton aria-label='cart'>
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FaRegHeart />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Cart">
                                <IconButton aria-label='cart' onClick={() => context.setOpenCartPanel(true)}>
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <IoCartOutline />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </>


                    </div>
                </div>
            </div>


            <Navigation />

        </header>
    );
};

export default Header;