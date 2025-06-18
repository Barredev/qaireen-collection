const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');
const mongoose = require('mongoose');
// 1. Impor middleware kita
const { protect, admin } = require('../middleware/authMiddleware.js');


// Rute GET (publik, semua orang boleh lihat)
router.get('/', async (req, res) => { /* ... tidak berubah ... */ });
router.get('/:id', async (req, res) => { /* ... tidak berubah ... */ });


// --- TERAPKAN MIDDLEWARE DI RUTE DI BAWAH INI ---

// Rute POST (hanya admin yang sudah login boleh akses)
router.post('/', protect, admin, async (req, res) => {
  // ... logika tidak berubah
  try {
    const product = new Product({ name: 'Sample Name', price: 0, /* ...data sample lainnya */ });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
});

// Rute PUT (hanya admin yang sudah login boleh akses)
router.put('/:id', protect, admin, async (req, res) => {
  // ... logika tidak berubah
});

// Rute DELETE (hanya admin yang sudah login boleh akses)
router.delete('/:id', protect, admin, async (req, res) => {
  // ... logika tidak berubah
});


module.exports = router;