import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  build: {
    // Disable type checking during build
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  optimizeDeps: {
    disabled: false,
    force: true,
    include: ['framer-motion']
  },
  server: {
    hmr: { overlay: false }
  }
})