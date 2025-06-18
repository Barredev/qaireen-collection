import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet
import Header from './Header';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  return (
    <section className='main'>
      <Header />
      <div className='contentMain flex'>
        <div className='sidebarWrapper w-[18%]'>
          <Sidebar />
        </div>
        <div className='contentRight py-4 px-5 w-[82%]'>
          {/* 2. Di sinilah keajaibannya. 
            Outlet akan merender komponen anak sesuai URL.
            Bisa Dashboard, HomeBannerListPage, dll.
          */}
          <Outlet /> 
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;