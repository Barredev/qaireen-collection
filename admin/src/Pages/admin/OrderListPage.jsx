import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminStyles.css';
import { FaEye } from 'react-icons/fa';

// --- DATA PALSU (MOCK DATA) ---
const mockOrders = [
    { _id: 'ORD20250618A', customerName: 'Budi Santoso', createdAt: '2025-06-18T02:30:00Z', totalPrice: 499000, isPaid: true, status: 'Dikirim' },
    { _id: 'ORD20250618B', customerName: 'Citra Lestari', createdAt: '2025-06-18T01:15:00Z', totalPrice: 150000, isPaid: true, status: 'Diproses' },
    { _id: 'ORD20250617A', customerName: 'Akbar Syakir', createdAt: '2025-06-17T20:45:00Z', totalPrice: 750000, isPaid: true, status: 'Selesai' },
    { _id: 'ORD20250617B', customerName: 'Dewi Anggraini', createdAt: '2025-06-17T18:00:00Z', totalPrice: 85000, isPaid: false, status: 'Menunggu Pembayaran' },
    { _id: 'ORD20250616A', customerName: 'Budi Santoso', createdAt: '2025-06-16T14:00:00Z', totalPrice: 299000, isPaid: true, status: 'Dibatalkan' },
];
// ------------------------------

// Komponen kecil untuk menampilkan badge status pesanan agar lebih rapi
const OrderStatusBadge = ({ status }) => {
    let styleClass = '';
    switch (status) {
        case 'Selesai':
            styleClass = 'status-active'; // Hijau
            break;
        case 'Dikirim':
            styleClass = 'status-shipped'; // Kuning
            break;
        case 'Diproses':
            styleClass = 'status-processing'; // Biru
            break;
        case 'Dibatalkan':
            styleClass = 'status-inactive'; // Merah
            break;
        default:
            styleClass = 'status-pending'; // Abu-abu
    }
    return <span className={`status-badge ${styleClass}`}>{status}</span>;
};


const OrderListPage = () => {
    const [orders, setOrders] = useState(mockOrders);

    const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

    return (
        <div className="admin-page-container">
            <div className="admin-page-header">
                <h1>Manajemen Pesanan</h1>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID PESANAN</th>
                            <th>NAMA PELANGGAN</th>
                            <th>TANGGAL</th>
                            <th>TOTAL</th>
                            <th>STATUS BAYAR</th>
                            <th>STATUS PESANAN</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td style={{ fontWeight: '600' }}>{order._id}</td>
                                <td>{order.customerName}</td>
                                <td>{formatDate(order.createdAt)}</td>
                                <td>{formatRupiah(order.totalPrice)}</td>
                                <td>
                                    {order.isPaid ? (
                                        <span className="status-badge status-active">Lunas</span>
                                    ) : (
                                        <span className="status-badge status-pending">Belum Lunas</span>
                                    )}
                                </td>
                                <td><OrderStatusBadge status={order.status} /></td>
                                <td>
                                    <div className="action-buttons">
                                        <Link to={`/admin/order/${order._id}`}>
                                            <button className="edit-btn" title="Lihat Detail Pesanan">
                                                <FaEye />
                                            </button>
                                        </Link>
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

export default OrderListPage;