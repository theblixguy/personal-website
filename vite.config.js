import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let baseUrl = '/'
if (process.env.PREVIEW_PATH) {
  baseUrl = `/personal-website/${process.env.PREVIEW_PATH}/`
}

export default defineConfig({
  base: baseUrl,
  plugins: [react()]
})