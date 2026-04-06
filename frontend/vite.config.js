import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',   // ✅ IMPORTANT FIX

  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 👉 only local dev kosam
        changeOrigin: true
      }
    }
  }
})
