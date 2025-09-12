import { defineConfig } from 'vite'

export default defineConfig({
  // existing config options...
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
    allowedHosts: [
      "portfolio-49nt.onrender.com"
    ]
  }
})

