const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken'); // 1. Impor jsonwebtoken

// Fungsi untuk membuat token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token akan kadaluarsa dalam 30 hari
  });
};

// POST /api/users (Registrasi - sudah ada)
router.post('/', async (req, res) => { /* ... kode tidak berubah ... */ });

// --- TAMBAHKAN RUTE BARU DI BAWAH INI ---

// @desc    Login pengguna & mendapatkan token
// @route   POST /api/users/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Cari user berdasarkan email
    const user = await User.findOne({ email });

    // 2. Jika user ditemukan DAN password-nya cocok
    if (user && (await user.matchPassword(password))) {
      // Kirim kembali data user beserta token
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id), // Buat dan kirim token
      });
    } else {
      // Jika user tidak ditemukan atau password salah
      res.status(401).json({ message: 'Email atau password salah' }); // 401 = Unauthorized
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});
// ------------------------------------

module.exports = router;