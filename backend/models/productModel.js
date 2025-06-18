const mongoose = require('mongoose');

// Ini adalah "cetakan" atau blueprint untuk setiap produk di database kita
const productSchema = new mongoose.Schema(
  {
    // Setiap produk akan memiliki field-field di bawah ini
    name: {
      type: String,
      required: true, // Wajib diisi
    },
    image: {
      type: String,
      required: true,
    },
    // Nanti kita bisa menyimpan banyak gambar dalam bentuk array
    // images: [{ type: String }],
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0, // Nilai default jika tidak diisi
    },
    salePrice: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    // Opsi ini secara otomatis akan menambahkan dua field:
    // `createdAt` dan `updatedAt` di setiap data produk. Sangat berguna!
    timestamps: true,
  }
);

// Membuat model bernama 'Product' dari skema yang sudah kita definisikan
const Product = mongoose.model('Product', productSchema);

// Mengekspor model ini agar bisa digunakan di file lain
module.exports = Product;