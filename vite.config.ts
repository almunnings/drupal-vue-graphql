import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.ts', '.vue']
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/variables.scss';`,
        quietDeps: true
      }
    }
  },

  server: {
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    }
  }
})
