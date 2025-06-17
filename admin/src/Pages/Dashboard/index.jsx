import React, { useState } from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes';
import { GiDjinn } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../Components/Badge';
import { FaAngleUp } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Dashboard = () => {


  const [isOpenOrdersProduct, setIsOpenOrdersProduct] = useState(null);


  const isShowOrdersProduct = (index) => {
    if (isOpenOrdersProduct === index) {
      setIsOpenOrdersProduct(null);
    } else {
      setIsOpenOrdersProduct(index);
    }

  }

  return (
    <>
      <div className='w-full py-2 px-5 bg-[#f1faff] border border-[rgba(0,0,0,0.1)] flex items-center gap-8
      mb-5 justify-between rounded-md'>
        <div className='info'>
          <h1 className='text-[35px] font-[600] flex items-center gap-5 leading-10 mb-3'>Welcome, <br /> Akbar Syakir
            <GiDjinn className="text-[50px]" />
          </h1>
          <p>Here's What happening on your store today. See the statistics at once</p>
          <br />

          <Button className='btn-blue !capitalize'>
            <FaCartPlus />
            Add Product
          </Button>

        </div>

        <img src="/shoop.png" className='w-[300px]' />

      </div>

      <DashboardBoxes />

      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
          <h2 className='text-[18px] font-[600]'>
            Products
          </h2>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5 ">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase">
              <tr className='odd:bg-gray-100 even:bg-gray-50 border-b border-gray-200
'>
                <th scope="col" className="px-6 py-3" width='10'>
                  <div className='w-[60px]'>
                    <Checkbox {...label} size='small' />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Products</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Category</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Sub Category</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Price</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Sales</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Isi data di sini */}
              <tr className='odd:bg-white even:bg-gray-50 border-b border-gray-200'>
                <td className='px-6 py-2'>
                  <div className='w-[60px]'>

                    <Checkbox {...label} size='small' />
                  </div>
                </td>
                <td className='px-6 py-2'>
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                      <Link to='/product/45745'>
                        <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/1/12/1d25ad48-2c5c-41a6-876e-c8dfa07c0ab1.jpg"
                          className='w-full group-hover:scale-105 transition-all' />
                      </Link>
                    </div>


                    <div className='info w-[75%]'>
                      <h3 className='font-[500] text-[12px] leading-4 hover:text-primary'>
                        <Link to='/product/45745'>
                          Luna Belle Flats
                        </Link>
                      </h3>
                      <span className='text-[12px]'>Velvéra</span>
                    </div>


                  </div>
                </td>

                <td className='px-6 py-2'>
                  Sepatu
                </td>

                <td className='px-6 py-2'>
                  Perempuan
                </td>

                <td className='px-6 py-2'>
                  <div className='flex gap-1 flex-col'>
                    <span className='oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]'>
                    Rp 349.000
                    </span>
                    <span className='price text-primary text-[14px] font-[600]'>
                       Rp 249.000
                    </span>
                  </div>
                </td>

                <td className='px-6 py-2'>

                </td>

                <td className='px-6 py-2'>

                </td>


              </tr>
            </tbody>
          </table>
        </div>

      </div>


      <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
        <div className='flex items-center justify-between px-5 py-5'>
          <h2 className='text-[18px] font-[600]'>
            Recent Orders
          </h2>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Orders Id</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Payment Id</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Name</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Phone Number</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Address</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Pincode</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Total Amount</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Email</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">User Id</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Order Status</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody>
              {/*  baris data */}
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full
                                            !bg-[#f1f1f1]'
                    onClick={() => isShowOrdersProduct(0)}
                  >
                    {
                      isOpenOrdersProduct === 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary'>ORD123456</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary'>PAY987654</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">John Doe{" "}</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">081234567890</td>
                <td className="px-6 py-4 font-[500">
                  <span className='block w-[400px]'>Jl. Sudirman No. 1 ciianjur sukabumi jawa barat</span></td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">12345</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp 500.000</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">john@example.com</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className='text-primary'>USR001</span></td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap"><Badge status="pending" /></td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">2025-06-15</td>
              </tr>
              {/* akhir baris data */}


              {
                isOpenOrdersProduct === 0 &&
                <tr>
                  <td className='pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>

                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Id</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Title</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Image</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Quantity</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Price</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*  baris data */}
                          <tr className="bg-white border-b ">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-400'>ORD123456</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              FULL LOGAM SERI AWM-500 AWM-500D-1A
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img src="https://www.casio.com/content/dam/casio/product-info/locales/id/id/timepiece/product/watch/G/GB/gbm/gbm-2100-1a/assets/GBM-2100-1A_wrist.jpg.transform/main-visual-pc/image.jpg"
                                className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">2</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                          </tr>

                          <tr className="bg-white border-b ">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-400'>ORD123456</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              FULL LOGAM SERI AWM-500 AWM-500D-1A
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img src="https://www.casio.com/content/dam/casio/product-info/locales/id/id/timepiece/product/watch/G/GB/gbm/gbm-2100-1a/assets/GBM-2100-1A_wrist.jpg.transform/main-visual-pc/image.jpg"
                                className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">2</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                          </tr>


                          {/* akhir baris data */}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              }



              {/*  baris data */}
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 font-[500]">
                  <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full
                                            !bg-[#f1f1f1]'
                    onClick={() => isShowOrdersProduct(1)}
                  >
                    {
                      isOpenOrdersProduct === 1 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> :
                        <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                    }
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary'>ORD123456</span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className='text-primary'>PAY987654</span>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">John Doe{" "}</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">081234567890</td>
                <td className="px-6 py-4 font-[500">
                  <span className='block w-[400px]'>Jl. Sudirman No. 1 ciianjur sukabumi jawa barat</span></td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">12345</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp 500.000</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">john@example.com</td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className='text-primary'>USR001</span></td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap"><Badge status="pending" /></td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">2025-06-15</td>
              </tr>
              {/* akhir baris data */}


              {
                isOpenOrdersProduct === 1 &&
                <tr>
                  <td className='pl-20' colSpan="6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>

                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Id</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Product Title</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Image</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Quantity</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Price</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*  baris data */}
                          <tr className="bg-white border-b ">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-400'>ORD123456</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              FULL LOGAM SERI AWM-500 AWM-500D-1A
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img src="https://www.casio.com/content/dam/casio/product-info/locales/id/id/timepiece/product/watch/G/GB/gbm/gbm-2100-1a/assets/GBM-2100-1A_wrist.jpg.transform/main-visual-pc/image.jpg"
                                className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">2</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                          </tr>

                          <tr className="bg-white border-b ">
                            <td className="px-6 py-4 font-[500]">
                              <span className='text-gray-400'>ORD123456</span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              FULL LOGAM SERI AWM-500 AWM-500D-1A
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img src="https://www.casio.com/content/dam/casio/product-info/locales/id/id/timepiece/product/watch/G/GB/gbm/gbm-2100-1a/assets/GBM-2100-1A_wrist.jpg.transform/main-visual-pc/image.jpg"
                                className='w-[40px] h-[40px] object-cover rounded-md' />
                            </td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">2</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">Rp.150.000</td>
                          </tr>


                          {/* akhir baris data */}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              }



            </tbody>
          </table>
        </div>
      </div>



    </>
  )
}

export default Dashboard;
