import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-transform-class-properties', { loose: true }],
        ],
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5273,
    strictPort: false,
  },
  build: { target: 'es2015' },
  esbuild: { keepNames: true },
})
