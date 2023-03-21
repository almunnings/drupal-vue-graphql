import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [".js", ".ts", ".vue"],
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/variables.scss';`,
      },
    },
  },

  server: {
    https: false,
    host: true,
    port: 3009,
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    },
  },
})
