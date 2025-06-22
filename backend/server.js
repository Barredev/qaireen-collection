const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Impor file rute
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

// Konfigurasi awal
dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Mengizinkan Cross-Origin Resource Sharing
app.use(express.json()); // Middleware untuk mem-parsing body request sebagai JSON

// Definisi Rute
app.get('/', (req, res) => {
  res.send('Selamat datang di API Qaireen Collection!');
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Fungsi untuk koneksi ke Database dan menjalankan Server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Terhubung...');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server berjalan di port ${PORT}`);
    });
  } catch (err) {
    console.error('Koneksi ke DB Gagal:', err.message);
    process.exit(1); // Keluar dari proses jika koneksi DB gagal
  }
};

// Panggil fungsi untuk memulai semuanya
startServer();