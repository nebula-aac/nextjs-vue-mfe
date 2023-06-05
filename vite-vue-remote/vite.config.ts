import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: 'node_modules/.cacheDir',
  plugins: [
    vue(),
    federation({
      name: 'vite-vue',
      filename: 'remoteEntry.js',
      remotes: {
        'vue_remote': 'http://localhost:5001/remoteEntry.js',
        shared: ['vue']
      }
    })
  ],
  build: {
    minify: false,
    target: 'esnext'
  }
})
