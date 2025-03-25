import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            // 为路径./src设置别名 @
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // 为路径./src/components设置别名 components
            components: fileURLToPath(new URL('./src/components', import.meta.url)),
        },
    },
    // base: '/my-app/',
    // build: {
    //   outDir: 'myDist',
    //   assetsDir: 'static'
    // }
})
