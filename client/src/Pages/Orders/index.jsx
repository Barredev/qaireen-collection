import React, { useState } from 'react';
import AccountSidebar from '../../components/AccountSidebar';
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import Badge from '../../components/Badge';
import { FaAngleUp } from "react-icons/fa6";




const Orders = () => {

    const [isOpenOrdersProduct, setIsOpenOrdersProduct] = useState(null);


    const isShowOrdersProduct = (index) => {
        if (isOpenOrdersProduct === index) {
            setIsOpenOrdersProduct(null);
        } else {
            setIsOpenOrdersProduct(index);
        }

    }


    return (
        <section className='py-10 w-full'>
            <div className='container flex gap-5 '>
                <div className='col1 w-[20%]'>


                    <AccountSidebar></AccountSidebar>

                </div>

                <div className='col2 w-[80%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='py-5 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>My Orders</h2>
                            <p className='mt-0'>There are <span className='font-bold text-primary'>2</span>
                                orders</p>

                            <div className="relative overflow-x-auto mt-5">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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

                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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

                                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders;
