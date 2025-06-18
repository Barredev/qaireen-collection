import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminStyles.css'; // Menggunakan file CSS yang sama

const AddBannerPage = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bannerData = { title, subtitle, link, image, isActive };
    console.log('Data Banner Baru:', bannerData);
    alert('Banner baru (simulasi) telah ditambahkan! Cek console log untuk melihat datanya.');
    // Nanti, setelah terhubung ke backend, kita akan redirect setelah berhasil
    // navigate('/admin/home-slides');
  };

  return (
    <div className="admin-page-container">
      <h1>Tambah Banner Baru</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="title">Judul Banner</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subtitle">Sub-judul (Opsional)</label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="link">Link Tujuan</label>
          <input
            type="text"
            id="link"
            placeholder="/kategori/nama-kategori"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Gambar Banner</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <div className="image-preview-container">
              <p>Preview:</p>
              <img src={imagePreview} alt="Preview" className="image-preview" />
            </div>
          )}
        </div>

        <div className="form-group form-group-checkbox">
          <input
            type="checkbox"
            id="isActive"
            className="custom-checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          <label htmlFor="isActive">Status Aktif</label>
        </div>

        <button type="submit" className="submit-btn">Simpan Banner</button>
      </form>
    </div>
  );
};

export default AddBannerPage;