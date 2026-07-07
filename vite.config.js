import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dominio propio (easyprodigital.com) => base '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
