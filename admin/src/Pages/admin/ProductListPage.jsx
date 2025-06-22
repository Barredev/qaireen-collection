import React, { useState, useEffect } from 'react';
// 1. Impor 'useNavigate' untuk mengarahkan pengguna
import { Link, useNavigate } from 'react-router-dom';
import './AdminStyles.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // 2. Inisialisasi hook useNavigate
    const navigate = useNavigate();

    // Fungsi untuk mengambil semua produk (tidak ada perubahan)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('http://localhost:5000/api/products');
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Gagal mengambil data produk. Pastikan server backend berjalan.');
                console.error(err);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // 3. LOGIKA UNTUK MENGHAPUS PRODUK
    const handleDeleteProduct = async (id) => {
        // Tampilkan jendela konfirmasi sebelum menghapus
        if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            try {
                // Panggil API DELETE ke backend
                // Catatan: Jika API dilindungi, Anda perlu mengirim token otorisasi di sini
                await axios.delete(`http://localhost:5000/api/products/${id}`);

                // Perbarui tampilan dengan menghapus produk dari state
                setProducts(products.filter((p) => p._id !== id));
                alert('Produk berhasil dihapus!');
            } catch (err) {
                const message = err.response?.data?.message || err.message;
                alert(`Gagal menghapus produk: ${message}`);
            }
        }
    };

    // 4. LOGIKA UNTUK MEMBUAT PRODUK BARU
    const handleCreateProduct = async () => {
        if (window.confirm('Buat produk baru dengan data contoh? Anda akan diarahkan ke halaman edit.')) {
            try {
                setLoading(true);
                // Panggil API POST untuk membuat produk. Body bisa kosong.
                // Catatan: Jika API dilindungi, Anda perlu mengirim token otorisasi di sini
                const { data: createdProduct } = await axios.post('http://localhost:5000/api/products', {});

                setLoading(false);
                // Arahkan pengguna ke halaman edit untuk produk yang baru dibuat
                navigate(`/admin/product/${createdProduct._id}/edit`);
            } catch (err) {
                const message = err.response?.data?.message || err.message;
                alert(`Gagal membuat produk: ${message}`);
                setLoading(false);
            }
        }
    };

    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);

    if (loading) return <div className="admin-page-container"><h2>Memuat data produk...</h2></div>;
    if (error) return <div className="admin-page-container"><h2>Error: {error}</h2></div>;

    return (
        <div className="admin-page-container">
            <div className="admin-page-header">
                <h1>Manajemen Produk ({products.length})</h1>
                {/* 5. UBAH TOMBOL <Link> MENJADI <button> YANG MEMANGGIL FUNGSI */}
                <button className="add-btn" onClick={handleCreateProduct}>
                    + Tambah Produk
                </button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
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
                                        <Link to={`/admin/product/${product._id}/edit`}>
                                            <button className="edit-btn" title="Edit Produk"><FaEdit /></button>
                                        </Link>
                                        {/* 6. Pastikan tombol hapus memanggil fungsi yang benar */}
                                        <button className="delete-btn" title="Hapus Produk" onClick={() => handleDeleteProduct(product._id)}>
                                            <FaTrash />
                                        </button>
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