const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    // outputDir: 'myDist',
    // assetsDir: 'myAssets',
    // publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
    chainWebpack: (config) => {
        config.resolve.alias.
            // 指定@符号代表当前项目的src目录
            set('@', resolve('src')).
            // 指定components为src/components目录
            set('components', resolve('src/components'))
    },
    transpileDependencies: true
})
