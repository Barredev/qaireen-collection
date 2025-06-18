import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminStyles.css'; // Menggunakan file CSS yang sama
// Kita akan pakai ikon untuk status admin
import { FaCheckCircle, FaTimesCircle, FaEdit, FaTrash } from 'react-icons/fa';

// --- DATA PALSU (MOCK DATA) ---
const mockUsers = [
  {
    _id: 'user001',
    name: 'Akbar Syakir',
    email: 'akbar@example.com',
    isAdmin: true,
    createdAt: '2025-06-15T10:00:00Z',
  },
  {
    _id: 'user002',
    name: 'Budi Santoso',
    email: 'budi.s@example.com',
    isAdmin: false,
    createdAt: '2025-06-16T11:30:00Z',
  },
  {
    _id: 'user003',
    name: 'Citra Lestari',
    email: 'citra.l@example.com',
    isAdmin: false,
    createdAt: '2025-06-17T14:00:00Z',
  },
  {
    _id: 'user004',
    name: 'Dewi Anggraini',
    email: 'dewi.a@example.com',
    isAdmin: false,
    createdAt: '2025-06-18T09:00:00Z',
  },
];
// ------------------------------

const UserListPage = () => {
  const [users, setUsers] = useState(mockUsers);

  const handleDeleteUser = (userId) => {
    alert(`Simulasi hapus pengguna dengan ID: ${userId}.`);
  };

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <h1>Manajemen Pengguna</h1>
        {/* Menambah user baru dari sisi admin biasanya jarang, tapi tombolnya bisa disiapkan */}
        {/* <button className="add-btn">+ Tambah Pengguna</button> */}
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAMA</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>TANGGAL DAFTAR</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{ textAlign: 'center' }}>
                  {user.isAdmin ? (
                    <FaCheckCircle style={{ color: 'green' }} title="Admin" />
                  ) : (
                    <FaTimesCircle style={{ color: 'red' }} title="Bukan Admin" />
                  )}
                </td>
                <td>
                  {new Date(user.createdAt).toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <button className="edit-btn" title="Edit User">
                        <FaEdit />
                      </button>
                    </Link>
                    <button className="delete-btn" title="Hapus User" onClick={() => handleDeleteUser(user._id)}>
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

export default UserListPage;