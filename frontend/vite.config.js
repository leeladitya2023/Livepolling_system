// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173
  }
})
