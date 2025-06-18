import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminStyles.css';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa'; // Tambah ikon Save & Cancel

const initialCategories = [
    { _id: 'cat001', name: 'Pakaian Pria', productCount: 15 },
    { _id: 'cat002', name: 'Pakaian Wanita', productCount: 25 },
    { _id: 'cat003', name: 'Sepatu', productCount: 12 },
    { _id: 'cat004', name: 'Aksesoris', productCount: 30 },
    { _id: 'cat005', name: 'Elektronik', productCount: 8 },
];

const CategoryListPage = () => {
    const [categories, setCategories] = useState(initialCategories);
    const [newCategoryName, setNewCategoryName] = useState('');

    // --- LOGIKA BARU UNTUK INLINE EDITING ---
    const [editingId, setEditingId] = useState(null); // Menyimpan ID kategori yang sedang diedit
    const [editingName, setEditingName] = useState(''); // Menyimpan nama baru saat diedit

    // Fungsi saat tombol Edit (pensil) diklik
    const handleEditClick = (category) => {
        setEditingId(category._id);
        setEditingName(category.name);
    };

    // Fungsi saat tombol Batal (X) diklik
    const handleCancelClick = () => {
        setEditingId(null);
        setEditingName('');
    };

    // Fungsi saat tombol Simpan (save) diklik
    const handleSaveClick = (categoryId) => {
        setCategories(categories.map(cat => 
            cat._id === categoryId ? { ...cat, name: editingName } : cat
        ));
        setEditingId(null);
        setEditingName('');
        alert(`Kategori ID ${categoryId} berhasil diubah menjadi "${editingName}"`);
    };
    // ------------------------------------

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (!newCategoryName.trim()) {
            alert('Nama kategori tidak boleh kosong!');
            return;
        }
        const newCategory = {
            _id: `cat${Math.random().toString(36).substr(2, 9)}`,
            name: newCategoryName,
            productCount: 0,
        };
        setCategories([...categories, newCategory]);
        setNewCategoryName('');
    };

    const handleDeleteCategory = (categoryId) => {
        setCategories(categories.filter(cat => cat._id !== categoryId));
    };

    return (
        <div className="admin-page-container">
            <div className="admin-page-header">
                <h1>Manajemen Kategori</h1>
                {/* Tombol ini sekarang tidak diperlukan jika form ada di bawah, tapi bisa dibiarkan */}
                {/* <Link to="/admin/category/add"><button className="add-btn">+ Tambah Kategori</button></Link> */}
            </div>

            <div className="admin-form add-category-form">
                <form onSubmit={handleAddCategory}>
                    <div className="form-group">
                        <label htmlFor="categoryName">Nama Kategori Baru</label>
                        <div className="add-category-input-group">
                            <input type="text" id="categoryName" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} placeholder="Contoh: Tas Wanita" />
                            <button type="submit" className="submit-btn">Tambah</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID KATEGORI</th>
                            <th>NAMA KATEGORI</th>
                            <th>JUMLAH PRODUK</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category._id}>
                                <td>{category._id}</td>
                                <td>
                                    {/* --- KONDISI TAMPILAN: EDIT ATAU NORMAL --- */}
                                    {editingId === category._id ? (
                                        <input 
                                            type="text" 
                                            value={editingName} 
                                            onChange={(e) => setEditingName(e.target.value)}
                                            className="form-input"
                                            autoFocus
                                        />
                                    ) : (
                                        category.name
                                    )}
                                </td>
                                <td>{category.productCount}</td>
                                <td>
                                    <div className="action-buttons">
                                        {editingId === category._id ? (
                                            <>
                                                <button className="edit-btn" title="Simpan" onClick={() => handleSaveClick(category._id)}>
                                                    <FaSave />
                                                </button>
                                                <button className="delete-btn" title="Batal" onClick={handleCancelClick}>
                                                    <FaTimes />
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="edit-btn" title="Edit Kategori" onClick={() => handleEditClick(category)}>
                                                    <FaEdit />
                                                </button>
                                                <button className="delete-btn" title="Hapus Kategori" onClick={() => handleDeleteCategory(category._id)}>
                                                    <FaTrash />
                                                </button>
                                            </>
                                        )}
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

export default CategoryListPage;