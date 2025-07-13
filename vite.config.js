import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
})
