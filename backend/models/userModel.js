const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // 1. Impor bcryptjs





const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

// 2. Tambahkan fungsi ini: Berjalan OTOMATIS sebelum data disimpan (.save())
userSchema.pre('save', async function (next) {
  // Hanya jalankan fungsi ini jika password diubah
  if (!this.isModified('password')) {
    next();
  }

  // Generate "salt" untuk membuat hash lebih kuat
  const salt = await bcrypt.genSalt(10);
  // Ganti password teks biasa dengan password yang sudah di-hash
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', userSchema);
module.exports = User;