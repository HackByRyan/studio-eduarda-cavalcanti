import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Config principal — uso: npm run dev / npm run build
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 7777,
    strictPort: true,
  },
})
