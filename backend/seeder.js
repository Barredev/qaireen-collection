const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Impor data dan model
const users = require('./data/users.js');
const products = require('./data/products.js');
const User = require('./models/userModel.js');
const Product = require('./models/productModel.js');
const Order = require('./models/orderModel.js');
// Kita tidak perlu seeder untuk Order karena pesanan dibuat oleh pengguna

// Load variabel dari .env
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Terhubung untuk Seeder...');
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

const importData = async () => {
  try {
    // Hapus semua data lama sebelum memasukkan data baru
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Masukkan data pengguna
    await User.insertMany(users);

    // Masukkan data produk
    await Product.insertMany(products);

    console.log('Data Berhasil Diimpor!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Hapus semua data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Berhasil Dihapus!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// Fungsi untuk menjalankan seeder dari command line
const runSeeder = async () => {
    await connectDB();
    if (process.argv[2] === '-d') {
        await destroyData();
    } else {
        await importData();
    }
};

runSeeder();