import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminStyles.css'; // Gunakan style yang sama

// Data mock untuk simulasi. Di aplikasi nyata, ini akan diambil dari database.
const mockProducts = [
    { _id: 'prod001', name: 'Kemeja Flanel Lengan Panjang', description: 'Bahan flanel premium, nyaman dipakai.', image: 'https://images.unsplash.com/photo-1603252109360-70495213a8a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 250000, salePrice: 199000, category: 'Pakaian Pria', stock: 50 },
    { _id: 'prod002', name: 'Sneakers Putih Casual', description: 'Sepatu lari yang ringan dan stylish.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 450000, salePrice: null, category: 'Sepatu', stock: 75 },
    { _id: 'prod003', name: 'Tas Ransel Kulit Sintetis', description: 'Tas ransel elegan untuk kegiatan sehari-hari.', image: 'https://images.unsplash.com/photo-1553062407-98eeb68c6a62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 350000, salePrice: 299000, category: 'Aksesoris', stock: 30 },
];
const mockCategories = ["Pakaian Pria", "Pakaian Wanita", "Sepatu", "Aksesoris", "Elektronik"];

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // State untuk setiap field
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [stock, setStock] = useState('');
    const [existingImages, setExistingImages] = useState([]);

    useEffect(() => {
        // Cari produk berdasarkan ID dari URL
        const productToEdit = mockProducts.find(p => p._id === id);
        if (productToEdit) {
            // Isi semua state dengan data produk yang ditemukan
            setName(productToEdit.name);
            setDescription(productToEdit.description);
            setCategory(productToEdit.category);
            setPrice(productToEdit.price);
            setSalePrice(productToEdit.salePrice || '');
            setStock(productToEdit.stock);
            setExistingImages([productToEdit.image]); // Anggap saja kita hanya punya 1 gambar untuk saat ini
        } else {
            alert('Produk tidak ditemukan!');
            navigate('/admin/products');
        }
    }, [id, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { id, name, description, category, price, salePrice, stock };
        console.log("Menyimpan perubahan untuk produk:", updatedData);
        alert(`Produk ${name} berhasil diperbarui (simulasi).`);
        navigate('/admin/products');
    };

    return (
        <div className="admin-page-container">
            <h1>Edit Produk</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label htmlFor="name">Nama Produk</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Deskripsi Produk</label>
                    <textarea id="description" rows="6" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Kategori</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">
                        {mockCategories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                    </select>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="price">Harga Normal (Rp)</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salePrice">Harga Diskon (Rp) - Opsional</label>
                        <input type="number" id="salePrice" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Jumlah Stok</label>
                    <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Gambar Produk Saat Ini</label>
                    {/* Catatan: Logika untuk mengedit/upload gambar baru lebih kompleks, 
              untuk sekarang kita hanya tampilkan gambar yang sudah ada */}
                    <div className="image-preview-grid">
                        {existingImages.map((img, index) => (
                            <img key={index} src={img} alt={`Gambar ${index + 1}`} className="image-preview" />
                        ))}
                    </div>
                </div>
                <button type="submit" className="submit-btn">Simpan Perubahan</button>
            </form>
        </div>
    );
};

export default EditProductPage;