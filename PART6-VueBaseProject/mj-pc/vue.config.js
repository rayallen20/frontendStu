const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@use "@/styles/element-variables.scss" as *;'
      }
    }
  }
  // publicPath: './'
})
