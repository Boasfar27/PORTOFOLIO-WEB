import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PORTOFOLIO-WEB/",
  build: {
    outDir: 'build', // Ganti 'build' dengan nama folder output yang Anda inginkan
  },
  plugins: [react()],
})
