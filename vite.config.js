import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  servers:{
    watch:{
      usePolling: true,
    },
    host: true
  },
  base: '/fitness'
})
