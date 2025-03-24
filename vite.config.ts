import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api/shorten': {
        target: 'https://cleanuri.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/shorten/, '/api/v1/shorten')
      }
    }
  }
})
