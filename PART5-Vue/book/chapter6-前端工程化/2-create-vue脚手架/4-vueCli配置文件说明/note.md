# 4-vueCli配置文件说明

## 1. outDir

- 作用: 指定打包后的文件输出目录(和`vue.config.js`中的`outputDir`一样)

```javascript
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
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'myDist',
  }
})
```

## 2. assertsDir

- 作用: 指定静态资源的输出目录(和`vue.config.js`中的`assetsDir`一样)

```javascript
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
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'myDist',
    assetsDir: 'static'
  }
})
```

## 3. base

- 作用: 指定打包后的文件在服务器上的路径(和`vue.config.js`中的`publicPath`一样)

```javascript
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
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/my-app/',
})
```

## 4. alias

- 作用: 配置别名(和`vue.config.js`中的`alias`一样)

```javascript
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
})
```

修改根组件中的引入路径:

```vue
<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from 'components/TheWelcome.vue'
</script>
```
