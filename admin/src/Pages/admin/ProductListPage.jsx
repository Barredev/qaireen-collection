import React, { useState, useEffect } from 'react'; // Impor useState dan useEffect
import { Link } from 'react-router-dom';
import axios from 'axios'; // 1. Impor axios
import './AdminStyles.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductListPage = () => {
    // 2. Buat state untuk menampung produk, status loading, dan error
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // 3. Gunakan useEffect untuk mengambil data saat komponen pertama kali dimuat

    useEffect(() => {
        console.log('useEffect berjalan, tapi sengaja tidak melakukan fetch data.');
    
        // Langsung set loading ke false untuk melewati pesan "Memuat..."
        setLoading(false); 
    
        /*
        // Logika fetch kita matikan sementara
        const fetchProducts = async () => {
          try {
            setLoading(true);
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
            setLoading(false);
          } catch (err) {
            setError('Gagal mengambil data produk');
            console.error(err);
            setLoading(false);
          }
        };
    
        fetchProducts();
        */
      }, []); // Dependensi tetap kosong


    // ... (Fungsi formatRupiah dan handleDeleteProduct tetap sama)
    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    const handleDeleteProduct = (productId) => { /* ... logika hapus (sementara) ... */ };


    // 4. Tampilkan pesan loading atau error jika ada
    if (loading) {
        return <div className="admin-page-container"><h2>Memuat data produk...</h2></div>;
    }
    if (error) {
        return <div className="admin-page-container"><h2>Error: {error}</h2></div>;
    }

    // 5. Tampilkan tabel jika data berhasil dimuat
    return (
        <div className="admin-page-container">
            <div className="admin-page-header">
                <h1>Manajemen Produk ({products.length})</h1>
                <Link to="/admin/product/add">
                    <button className="add-btn">+ Tambah Produk</button>
                </Link>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    {/* ... Isi tabel (thead dan tbody) tidak berubah sama sekali ... */}
                    {/* Ia akan otomatis me-render data dari state 'products' yang baru */}
                    <thead>
                        <tr>
                            <th>GAMBAR</th>
                            <th>NAMA PRODUK</th>
                            <th>KATEGORI</th>
                            <th>HARGA</th>
                            <th>STOK</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td><img src={product.image} alt={product.name} className="table-image-preview" /></td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>
                                    {product.salePrice ? (
                                        <div>
                                            <span style={{ textDecoration: 'line-through', color: '#9ca3af' }}>{formatRupiah(product.price)}</span><br />
                                            <span style={{ color: '#ef4444', fontWeight: '600' }}>{formatRupiah(product.salePrice)}</span>
                                        </div>
                                    ) : (
                                        <span>{formatRupiah(product.price)}</span>
                                    )}
                                </td>
                                <td>{product.stock}</td>
                                <td>
                                    <div className="action-buttons">
                                        <Link to={`/admin/product/${product._id}/edit`}><button className="edit-btn" title="Edit Produk"><FaEdit /></button></Link>
                                        <button className="delete-btn" title="Hapus Produk" onClick={() => handleDeleteProduct(product._id)}><FaTrash /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListPage;