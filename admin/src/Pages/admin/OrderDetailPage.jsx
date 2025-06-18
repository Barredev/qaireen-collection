import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AdminStyles.css'; // Gunakan style yang sama

// DATA LENGKAP UNTUK DETAIL PESANAN
const mockOrders = [
  { _id: 'ORD20250618A', customerName: 'Budi Santoso', email: 'budi.s@example.com', createdAt: '2025-06-18T02:30:00Z', totalPrice: 499000, isPaid: true, status: 'Dikirim', paymentMethod: 'Transfer Bank',
    shippingAddress: { address: 'Jl. Merdeka No. 123', city: 'Jakarta', postalCode: '12345' },
    orderItems: [{ _id: 'prod001', name: 'Kemeja Flanel Lengan Panjang', image: 'https://images.unsplash.com/photo-1603252109360-70495213a8a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', qty: 1, price: 199000 }, { _id: 'prod003', name: 'Tas Ransel Kulit Sintetis', image: 'https://images.unsplash.com/photo-1553062407-98eeb68c6a62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', qty: 1, price: 300000 }],
    itemsPrice: 499000, shippingPrice: 0, taxPrice: 0,
  },
  // ... (tambahkan data lengkap untuk order lain jika perlu)
];
const OrderStatusBadge = ({ status }) => { let styleClass = ''; switch (status) { case 'Selesai': styleClass = 'status-active'; break; case 'Dikirim': styleClass = 'status-shipped'; break; case 'Diproses': styleClass = 'status-processing'; break; case 'Dibatalkan': styleClass = 'status-inactive'; break; default: styleClass = 'status-pending'; } return <span className={`status-badge ${styleClass}`}>{status}</span>; };
const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);


const OrderDetailPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const foundOrder = mockOrders.find(o => o._id === id);
    setOrder(foundOrder);
    setNewStatus(foundOrder ? foundOrder.status : '');
  }, [id]);

  const handleUpdateStatus = () => {
    alert(`Status pesanan ${order._id} diubah menjadi "${newStatus}" (simulasi).`);
    // Di aplikasi nyata, ini akan memanggil API PATCH/PUT ke backend
    // Lalu kita akan refresh data pesanan
  };

  if (!order) {
    return <div className="admin-page-container"><h2>Memuat data pesanan...</h2></div>;
  }

  return (
    <div className="admin-page-container">
      <h1>Detail Pesanan {order._id}</h1>
      <p>Dipesan pada: {new Date(order.createdAt).toLocaleString('id-ID')}</p>

      <div className="order-detail-grid">
        {/* Kolom Kiri */}
        <div className="order-detail-main">
          <div className="detail-card">
            <h3>Alamat Pengiriman</h3>
            <p><strong>{order.customerName}</strong></p>
            <p>{order.email}</p>
            <p>{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
            {order.isPaid ? <p className="status-badge status-active mt-2">Lunas</p> : <p className="status-badge status-pending mt-2">Belum Lunas</p>}
          </div>

          <div className="detail-card">
            <h3>Item Pesanan</h3>
            {order.orderItems.map(item => (
              <div key={item._id} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image"/>
                <div className="order-item-details">
                  <p>{item.name}</p>
                  <p>{item.qty} x {formatRupiah(item.price)} = {formatRupiah(item.qty * item.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="order-detail-sidebar">
          <div className="detail-card">
            <h3>Ringkasan Pesanan</h3>
            <div className="summary-row"><span>Harga Item</span><span>{formatRupiah(order.itemsPrice)}</span></div>
            <div className="summary-row"><span>Pengiriman</span><span>{formatRupiah(order.shippingPrice)}</span></div>
            <div className="summary-row"><span>Pajak</span><span>{formatRupiah(order.taxPrice)}</span></div>
            <div className="summary-row total"><strong>Total</strong><strong>{formatRupiah(order.totalPrice)}</strong></div>
          </div>
          
          <div className="detail-card">
            <h3>Status Pesanan</h3>
            <p><OrderStatusBadge status={order.status} /></p>
          </div>
          
          <div className="detail-card">
            <h3>Aksi</h3>
            <div className="form-group">
                <label htmlFor="status">Ubah Status Pesanan</label>
                <select id="status" value={newStatus} onChange={e => setNewStatus(e.target.value)} className="form-input">
                    <option value="Menunggu Pembayaran">Menunggu Pembayaran</option>
                    <option value="Diproses">Diproses</option>
                    <option value="Dikirim">Dikirim</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Dibatalkan">Dibatalkan</option>
                </select>
            </div>
            <button className="submit-btn w-full" onClick={handleUpdateStatus}>Update Status</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;