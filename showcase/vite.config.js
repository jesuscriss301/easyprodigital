import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dominio propio en Dokploy (demos.easyprodigital.com) => base '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 5174 },
})
