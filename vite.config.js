import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx',
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
