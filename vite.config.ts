import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/MyPortfolioVer2/',
});
