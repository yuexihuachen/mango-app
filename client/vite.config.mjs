import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

const isSourceMap = process.env.NODE_ENV === 'development';

export default defineConfig({
   server: {
    cors: {
      // 通过浏览器访问的源
      origin: 'http://localhost:3000',
    },
  },
  build: {
    emptyOutDir: !isSourceMap,
    manifest: true,
    outDir: '../server/manifest',
    sourcemap: isSourceMap,
    assetsDir: 'static'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  define: {
  },
  plugins: [react(),tailwindcss()]
})