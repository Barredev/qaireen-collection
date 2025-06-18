import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminStyles.css'; // Kita akan buat file CSS ini bersama

// --- DATA PALSU (MOCK DATA) ---
const mockBanners = [
  {
    _id: 'banner1',
    title: 'Diskon Spesial Lebaran',
    imageUrl: 'https://images.unsplash.com/photo-1588421352222-6b3a4a1b5a32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/sale/lebaran',
    isActive: true,
  },
  {
    _id: 'banner2',
    title: 'Koleksi Terbaru Pria',
    imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/kategori/pria',
    isActive: true,
  },
  {
    _id: 'banner3',
    title: 'Gratis Ongkir (Non-aktif)',
    imageUrl: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/',
    isActive: false,
  },
];
// ------------------------------

const HomeBannerListPage = () => {
  const [banners, setBanners] = useState(mockBanners);

  const handleDelete = (id) => {
    alert(`Simulasi hapus banner dengan ID: ${id}. Fitur ini perlu dihubungkan ke backend.`);
  };

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <h1>Daftar Banner Homepage</h1>
        <Link to="/admin/home-slides/add">
          <button className="add-btn">+ Tambah Banner</button>
        </Link>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>PREVIEW GAMBAR</th>
              <th>JUDUL</th>
              <th>LINK TUJUAN</th>
              <th>STATUS</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner) => (
              <tr key={banner._id}>
                <td>
                  <img src={banner.imageUrl} alt={banner.title} className="table-image-preview" />
                </td>
                <td>{banner.title}</td>
                <td>{banner.link}</td>
                <td>
                  {banner.isActive ? (
                    <span className="status-active">Aktif</span>
                  ) : (
                    <span className="status-inactive">Tidak Aktif</span>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(banner._id)}>
                      Hapus
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

export default HomeBannerListPage;