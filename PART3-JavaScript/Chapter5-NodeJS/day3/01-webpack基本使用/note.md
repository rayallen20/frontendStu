# 01-webpack基本使用

## 1. webpack简介

- webpack: 是一个现代JavaScript应用程序的静态模块打包器(module bundler)
  - 之所以说是静态,是因为webpack的目标对象是html/css/sass/js/图片等静态资源文件
  - 只有和入口有直接/间接依赖关系的模块才会被打包

- 需要打包工具的原因:
  - 把less/sass/scss等高级语言转换为css
  - 把ES6+的高级语法转换为ES5
  - 打包后的文件支持多种模块文件类型(js/css),多种模块标准语法(CommonJS/ECMAScript Module)

## 2. 使用webpack

- 封装utils包,校验用户名和密码长度,在`index.js`中使用,使用Webpack打包

### 2.1 实现

- step1. 初始化项目
  - `npm init -y`
- step2. 新建`src`目录,编写JS时使用ECMAScript Module
- step3. 下载`webpack`和`webpack-cli`
  - `npm i webpack webpack-cli --save-dev`
  - 理论上讲,`webpack`和`webpack-cli`是每个项目都需要的,但是由于每个项目对其版本要求可能不同,所以单独安装
  - `--save-dev`: 保存到开发依赖中.该参数等价于`-D`
- step4. 配置`package.json`中的`scripts`

```json
{
  "scripts": {
    "build": "webpack"
  }
}
```

- 这里也有配置为`"build": "webpack --mode=development"`的,表示开发模式
- 这里`scripts`中的键值对含义为:
  - 键: 自定义命令(就是`npm run`后面的命令)
  - 值: 要执行的命令
- step5. 项目根目录下执行`npm run build`
  - 这个命令会执行`webpack`命令,并且会根据`webpack.config.js`中的配置进行打包
  - 如果没有`webpack.config.js`文件,则会使用默认配置进行打包
- step6. 自动生成`dist`文件夹
  - 这个文件夹中保存的就是压缩和优化后,用于最终运行的代码

