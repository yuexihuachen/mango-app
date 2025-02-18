import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const filesName = () => {
  return  {
    entryFileNames: 'assets/[name].js',
    chunkFileNames: 'assets/[name].js',
    assetFileNames: '[name].[ext]',
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./src/assets",
  build: {
    rollupOptions: {
      input: {
        app: './src/index.tsx',
        error: './src/error/error.tsx'
      },
      output: {
        manualChunks: function manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        ...filesName()
      }
    },
    reportCompressedSize: true,
    emptyOutDir: true,
    outDir: '../static',
    manifest: true,
  }
})
