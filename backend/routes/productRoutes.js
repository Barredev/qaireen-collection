const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler'); // Direkomendasikan
const { protect, admin } = require('../middleware/authMiddleware.js');

// ====================================================================
// RUTE GET YANG SEBELUMNYA KOSONG, SEKARANG KITA ISI
// ====================================================================

// @desc    Mengambil semua produk
// @route   GET /api/products
// @access  Publik
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}));

// @desc    Mengambil satu produk berdasarkan ID
// @route   GET /api/products/:id
// @access  Publik
router.get('/:id', asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }
}));

// ====================================================================
// RUTE LAINNYA (POST, PUT, DELETE) - SUDAH BENAR
// ====================================================================

// Rute POST (hanya admin yang sudah login boleh akses)
router.post('/', protect, admin, asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id, // Relasikan dengan admin yang membuat
    image: '/images/sample.jpg',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
}));

// Rute PUT (hanya admin yang sudah login boleh akses)
router.put('/:id', protect, admin, asyncHandler(async (req, res) => {
    // ... logika update produk Anda di sini ...
    // contoh:
    const { name, price, description, image, brand, category, countInStock } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name;
        product.price = price;
        // ... update field lainnya
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Produk tidak ditemukan');
    }
}));

// Rute DELETE (hanya admin yang sudah login boleh akses)
router.delete('/:id', protect, admin, asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.deleteOne(); // atau .remove() di Mongoose versi lama
        res.json({ message: 'Produk berhasil dihapus' });
    } else {
        res.status(404);
        throw new Error('Produk tidak ditemukan');
    }
}));

module.exports = router;