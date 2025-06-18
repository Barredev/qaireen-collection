import Button from '@mui/material/Button';
import React, { useState } from 'react';
// UBAH BAGIAN INI: Impor NavLink bukan Link, karena lebih canggih
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaAngleDown } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Collapse } from 'react-collapse';

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    setSubmenuIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Style untuk NavLink yang sedang aktif
  const activeSublinkStyle = {
    backgroundColor: '#f1f1f1',
    fontWeight: '600',
  };

  return (
    <>
      <div className='sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4'>
        <div className='py-2 w-full'>
          <NavLink to='/'>
            <img src='/logo.jpg' alt='Logo' className='w-[120px]' />
          </NavLink>
        </div>

        <ul className='mt-4'>
          {/* Dashboard (sudah benar, tapi kita gunakan NavLink agar bisa punya style aktif) */}
          <li>
            <Button component={NavLink} to='/' end className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
              <FaTachometerAlt className='text-[18px]' /> <span>Dashboard</span>
            </Button>
          </li>

          {/* Home Slides */}
          <li>
            <Button className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubMenu(1)}>
              <IoIosImages className='text-[20px]' /> <span>Home Slides</span>
              <span className='ml-auto'><FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} /></span>
            </Button>
            <Collapse isOpened={submenuIndex === 1}>
              <ul>
                {/* UBAH BAGIAN INI */}
                <li>
                  <Button component={NavLink} to="/admin/home-slides" style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                    Home Banner List
                  </Button>
                </li>
                <li>
                  <Button component={NavLink} to="/admin/home-slides/add" style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                    Add Home Banner
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          {/* Users */}
          <li>
            <Button component={NavLink} to='/admin/users' className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
              <PiUsersThreeLight className='text-[20px]' /> <span>Users</span>
            </Button>
          </li>

          {/* Products */}
          <li>
            <Button className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubMenu(3)}>
              <RiProductHuntLine className='text-[20px]' /> <span>Products</span>
              <span className='ml-auto'><FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} /></span>
            </Button>
            <Collapse isOpened={submenuIndex === 3}>
              <ul>
                {/* UBAH BAGIAN INI */}
                <li>
                  <Button component={NavLink} to="/admin/products" style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                    Product List
                  </Button>
                </li>
                <li>
                  <Button component={NavLink} to="/admin/product/add" style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                    Add Product
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          {/* Category */}
          <li>
            <Button className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubMenu(4)}>
              <TbCategory className='text-[20px]' /> <span>Category</span>
              <span className='ml-auto'><FaAngleDown className={`transition-all ${submenuIndex === 4 ? 'rotate-180' : ''}`} /></span>
            </Button>
            <Collapse isOpened={submenuIndex === 4}>
              <ul>
                {/* UBAH BAGIAN INI */}
                <li>
                  <Button component={NavLink} to="/admin/categories" style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 flex gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                    Category List
                  </Button>
                </li>
                <li>
                  <Button component={NavLink} to="/admin/category/add" style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[400] !pl-9 gap-3'>
                    <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>
                    Add Category
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          {/* Orders (Linknya saya perbaiki) */}
          <li>
            <Button component={NavLink} to='/admin/orders' style={({ isActive }) => isActive ? activeSublinkStyle : undefined} className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
              <IoBagCheckOutline className='text-[20px]' /> <span>Orders</span>
            </Button>
          </li>

          {/* Logout */}
          <li>
            <Button className='w-full !capitalize !justify-start gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
              <AiOutlineLogout className='text-[20px]' /> <span>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;