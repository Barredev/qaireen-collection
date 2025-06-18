import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminStyles.css'; // Gunakan style yang sama

// Data kategori palsu. Nanti, ini akan diambil dari database.
const mockCategories = [
  "Pakaian Pria",
  "Pakaian Wanita",
  "Sepatu",
  "Aksesoris",
  "Elektronik",
];

const AddProductPage = () => {
  const navigate = useNavigate();

  // State untuk setiap field di form
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(mockCategories[0]);
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [stock, setStock] = useState('');

  // State untuk multi-gambar dan previewnya
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Handler untuk perubahan pada input gambar (mendukung multi-file)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Saat submit, kita gunakan FormData karena ada file. 
    // Ini adalah format yang biasa digunakan untuk mengirim data ke backend.
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('salePrice', salePrice);
    formData.append('stock', stock);
    images.forEach(image => {
      formData.append('images', image);
    });

    // Simulasi pengiriman data
    console.log("Data Produk Baru yang akan dikirim (FormData):");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    alert('Produk baru berhasil ditambahkan (simulasi). Cek console log.');
    navigate('/admin/products');
  };

  return (
    <div className="admin-page-container">
      <h1>Tambah Produk Baru</h1>
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
            {mockCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
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
          <label htmlFor="images">Gambar Produk (bisa pilih lebih dari satu)</label>
          <input type="file" id="images" onChange={handleImageChange} multiple accept="image/*" required />
          <div className="image-preview-grid">
            {imagePreviews.map((preview, index) => (
              <img key={index} src={preview} alt={`Preview ${index + 1}`} className="image-preview" />
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">Simpan Produk</button>
      </form>
    </div>
  );
};

export default AddProductPage;