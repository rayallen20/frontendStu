const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@use "@/styles/element-variables.scss" as *;'
      }
    }
  },
  // 允许以文件形式访问
  publicPath: './',
  // 生产环境打包时不生成.map文件
  productionSourceMap: false,
  configureWebpack: {
    // 配置不参与打包的第三方库
    externals: {
      // 键: 包名 和package.json中的dependencies一致
      // 值: 引入CDN后,window对象上会挂载的变量名
      // 例如: 引入CDN后,window.echarts
      echarts: 'echarts'
    }
  }
})
