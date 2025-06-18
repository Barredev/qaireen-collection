const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');

// Middleware untuk memproteksi rute (memastikan user sudah login)
const protect = async (req, res, next) => {
  let token;

  // Cek apakah ada header 'authorization' dan diawali dengan 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 1. Ambil token dari header (tanpa kata 'Bearer')
      token = req.headers.authorization.split(' ')[1];

      // 2. Verifikasi dan dekode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 3. Ambil data user dari database berdasarkan ID di dalam token
      // Kita tidak mengambil password-nya dengan .select('-password')
      req.user = await User.findById(decoded.id).select('-password');

      // 4. Lanjutkan ke rute selanjutnya
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Tidak terotorisasi, token gagal' });
      return;
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Tidak terotorisasi, tidak ada token' });
  }
};

// Middleware untuk memastikan user adalah admin
const admin = (req, res, next) => {
  // Middleware ini harus dijalankan SETELAH 'protect'
  if (req.user && req.user.isAdmin) {
    next(); // Jika user adalah admin, lanjutkan
  } else {
    res.status(401).json({ message: 'Tidak terotorisasi sebagai admin' });
  }
};

module.exports = { protect, admin };