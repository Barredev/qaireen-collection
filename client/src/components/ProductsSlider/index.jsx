import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Impor untuk Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Impor CSS untuk navigasi jika belum ada
import { Navigation } from 'swiper/modules';

// Impor komponen ProductItem
import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
    // 1. State untuk menampung data produk dari API dan status loading
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. useEffect untuk mengambil data saat komponen ini pertama kali dimuat
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                
                // --- PERUBAHAN PENTING DI SINI ---
                // Kita periksa dulu, apakah data yang diterima adalah sebuah array?
                if (Array.isArray(data)) {
                    setProducts(data); // Jika ya, simpan ke state
                } else {
                    // Jika tidak, tampilkan pesan error di console dan gunakan array kosong
                    console.error("Data yang diterima dari API bukanlah sebuah array:", data);
                    setProducts([]); // Set sebagai array kosong untuk mencegah crash
                }
                // ------------------------------------
    
            } catch (error) {
                console.error("Gagal mengambil data produk:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Tampilkan pesan loading jika data belum siap
    if (loading) {
        return <div className='py-3'>Memuat produk...</div>;
    }

    return (
        <div className='productsSlider py-3'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={20} // Memberi sedikit jarak lebih antar item
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                // Tambahkan breakpoints untuk tampilan responsif di berbagai ukuran layar
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: props.items, spaceBetween: 20 },
                }}
            >
                {/* 3. Gunakan .map() untuk membuat SwiperSlide untuk setiap produk */}
                {products.map(product => (
                    <SwiperSlide key={product._id}>
                        {/* Berikan data 'product' ke komponen ProductItem melalui props */}
                        <ProductItem product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProductsSlider;