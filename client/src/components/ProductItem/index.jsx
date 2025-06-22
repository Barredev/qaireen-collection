import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from '../../App'; // Path mungkin perlu disesuaikan
import './style.css'; 

// Fungsi format Rupiah bisa kita letakkan di sini juga
const formatRupiah = (number) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
}).format(number);

// 1. Terima 'product' sebagai sebuah prop
const ProductItem = ({ product }) => {
    const context = useContext(MyContext);

    // Jika karena suatu alasan data produk tidak ada, jangan render apa-apa
    if (!product) {
        return null;
    }

    return (
        <div className='productItem shadow-sm rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
            <div className='group imgWrapper w-[100%] h-[205px] overflow-hidden rounded-md relative'>
                {/* 2. Gunakan data dari prop 'product' */}
                <Link to={`/product/${product._id}`}>
                    <div className='img h-[220px] overflow-hidden'>
                        <img src={product.image} alt={product.name} className='w-full' />
                        {/* Gambar kedua bisa ditambahkan nanti jika ada di data */}
                    </div>
                </Link>

                {product.salePrice && <span className='discount absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>SALE</span>}

                <div className='actions ...'>
                    {/* ... (Tombol aksi tidak perlu diubah, logikanya sudah benar) ... */}
                    <Button className='...' onClick={() => context.setOpenProductDetailsModal(true)}>
                        <MdZoomOutMap className='...' />
                    </Button>
                    {/* ... tombol lain ... */}
                </div>
            </div>

            <div className='info p-3 py-5'>
                <h6 className='text-[13px] !font-[400]'>
                    {/* 3. Gunakan kategori dari data produk */}
                    <Link to={`/category/${product.category}`} className='link transition-all'>
                        {product.category}
                    </Link>
                </h6>
                <h3 className='text-[14px] title mt-1 font-[500] mb-1 text-[rgba(0,0,0,0.9)]'>
                    {/* 4. Gunakan nama produk dari data */}
                    <Link to={`/product/${product._id}`} className='link transition-all'>
                        {product.name}
                    </Link>
                </h3>

                <Rating name="read-only" value={product.rating || 0} size="small" readOnly />

                <div className='flex items-center gap-2 text-sm'>
                    {/* 5. Gunakan logika harga dari data produk */}
                    {product.salePrice ? (
                        <>
                            <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>{formatRupiah(product.price)}</span>
                            <span className='price text-primary text-[15px] font-[600]'>{formatRupiah(product.salePrice)}</span>
                        </>
                    ) : (
                        <span className='price text-primary text-[15px] font-[600]'>{formatRupiah(product.price)}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;