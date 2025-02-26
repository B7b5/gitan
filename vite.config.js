import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ensure index.html is included
        app: 'src/main.jsx',
        styles: 'src/index.css' // Force Vite to include it
      }
    }
  },
  css: {
    postcss: {
      plugins: []
    }
  }
});