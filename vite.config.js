import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Mi-Portafolio/", // 👈 tiene que coincidir EXACTO con el nombre del repo en GitHub
})
