import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Split vendor JS into a separate long-cached chunk
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
          }
        },
      },
    },
    // Inline assets < 4 KB as base64 (avoids extra round-trips for tiny files)
    assetsInlineLimit: 4096,
    // Remove console.* and debugger from production bundle
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  },
})
