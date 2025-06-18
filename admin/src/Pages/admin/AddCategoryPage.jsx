import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminStyles.css';

const AddCategoryPage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert('Nama kategori tidak boleh kosong');
            return;
        }
        console.log("Menyimpan kategori baru:", { name });
        alert(`Kategori "${name}" berhasil ditambahkan (simulasi).`);
        // Kembali ke halaman daftar kategori setelah submit
        navigate('/admin/categories');
    };

    return (
        <div className="admin-page-container">
            <h1>Tambah Kategori Baru</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label htmlFor="name">Nama Kategori</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Tas Wanita"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Simpan Kategori</button>
            </form>
        </div>
    );
};

export default AddCategoryPage;