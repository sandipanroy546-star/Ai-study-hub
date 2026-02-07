import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ml: resolve(__dirname, 'ml-detail.html'),
                dl: resolve(__dirname, 'dl-detail.html'),
                nlp: resolve(__dirname, 'nlp-detail.html'),
                cv: resolve(__dirname, 'cv-detail.html'),
            },
        },
    },
})
