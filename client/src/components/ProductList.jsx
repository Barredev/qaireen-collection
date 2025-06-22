// Di dalam file ProductList.jsx Anda nanti
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ title }) => {
    // 1. Kita akan buat state untuk menampung data dari backend
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. Kita gunakan useEffect untuk mengambil data saat komponen dimuat
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Gunakan proxy Vite yang sudah kita siapkan
                const { data } = await axios.get('/api/products'); 
                setProducts(data); // Simpan data asli ke state
            } catch (error) {
                console.error("Gagal mengambil data produk:", error);
            } finally {
                setLoading(false); // Hentikan loading
            }
        };
        fetchProducts();
    }, []); // Dijalankan sekali saja

    if (loading) {
        return <p>Memuat produk...</p>;
    }

    // 3. Bagian return Anda akan tetap sama, me-mapping 'products' dari state
    return (
        <section className="product-list-section">
            <h2 className="section-title">{title}</h2>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;