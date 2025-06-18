const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 1. IMPORT FILE RUTE PRODUK YANG BARU
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors'); // 1. Impor cors



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => { /* ... */ });
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Terhubung...');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server berjalan di port ${PORT}`);
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

// Rute dasar kita
app.get('/', (req, res) => {
  res.send('Selamat datang di API Qaireen Collection!');
});

// 2. GUNAKAN RUTE PRODUK
// Beritahu server: untuk semua request yang diawali dengan /api/products,
// gunakan aturan yang ada di dalam 'productRoutes'.
app.use('/api/products', productRoutes);