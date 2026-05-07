import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Split vendor JS into a separate long-cached chunk
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui':     ['lucide-react'],
          'vendor-helmet': ['react-helmet-async'],
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
