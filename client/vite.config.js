import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Ini memberitahu Vite:
      // Setiap permintaan yang URL-nya diawali dengan '/api'
      '/api': {
        // Teruskan ke server backend kita
        target: 'http://localhost:5000', // Pastikan port ini benar
        changeOrigin: true, // Diperlukan untuk beberapa konfigurasi server
      },
    },
  },
});