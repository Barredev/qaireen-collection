import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminStyles.css'; // Menggunakan file CSS yang sama

// Kita butuh data mock ini lagi untuk simulasi pengambilan data
const mockUsers = [
    { _id: 'user001', name: 'Akbar Syakir', email: 'akbar@example.com', isAdmin: true, createdAt: '2025-06-15T10:00:00Z' },
    { _id: 'user002', name: 'Budi Santoso', email: 'budi.s@example.com', isAdmin: false, createdAt: '2025-06-16T11:30:00Z' },
    { _id: 'user003', name: 'Citra Lestari', email: 'citra.l@example.com', isAdmin: false, createdAt: '2025-06-17T14:00:00Z' },
    { _id: 'user004', name: 'Dewi Anggraini', email: 'dewi.a@example.com', isAdmin: false, createdAt: '2025-06-18T09:00:00Z' },
];

const UserEditPage = () => {
  // 1. Ambil 'id' dari parameter URL (misal: "user001")
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. State untuk menampung data form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // 3. useEffect untuk "mengambil" dan mengisi data user saat komponen dimuat
  useEffect(() => {
    // Di aplikasi nyata, ini adalah panggilan API ke backend: fetch(`/api/users/${id}`)
    // Untuk sekarang, kita cari dari mock data
    const userToEdit = mockUsers.find((user) => user._id === id);

    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setIsAdmin(userToEdit.isAdmin);
    } else {
      // Jika user tidak ditemukan, kembali ke halaman daftar
      alert('User tidak ditemukan!');
      navigate('/admin/users');
    }
  }, [id, navigate]); // Dependensi: jalankan lagi jika id atau navigate berubah

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { name, email, isAdmin };
    console.log(`Menyimpan perubahan untuk user ID ${id}:`, updatedUserData);
    alert(`Perubahan untuk ${name} telah disimpan (simulasi).`);
    navigate('/admin/users'); // Kembali ke daftar user setelah menyimpan
  };

  return (
    <div className="admin-page-container">
      <h1>Edit Pengguna: {name}</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="name">Nama Pengguna</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (tidak bisa diubah)</label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly // Email biasanya tidak boleh diubah karena sebagai identifier
            style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
          />
        </div>

        <div className="form-group form-group-checkbox">
          <input
            type="checkbox"
            id="isAdmin"
            className="custom-checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          <label htmlFor="isAdmin">Jadikan sebagai Admin</label>
        </div>

        <button type="submit" className="submit-btn">Simpan Perubahan</button>
      </form>
    </div>
  );
};

export default UserEditPage;