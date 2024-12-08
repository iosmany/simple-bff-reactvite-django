import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { djangoVitePlugin } from "django-vite-plugin";
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    // djangoVitePlugin({
    //   input: [
    //     "src/main.tsx"
    //   ],
    //   root: "..",
    // })
  ],
  // server: {
  //   proxy: {
  //     '/api/': 'http://localhost:8000',
  //   },
  // },
  //root: resolve('./src'),
  base: '/',
  server: {
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  build: {
    outDir: resolve('./static/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('index.html'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
})
