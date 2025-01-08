import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/profolio/',
  server: {
    hmr: {
      overlay: false, // Prevents error overlay from blocking UI
    },
  },
});