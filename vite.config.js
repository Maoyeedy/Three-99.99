import { defineConfig } from 'vite'

export default defineConfig({
  // base: 'https://maoyeedy.github.io/Three-99.99/',
  base: './',
  build: {
    rollupOptions: {
      external: [],
    }
  }
})