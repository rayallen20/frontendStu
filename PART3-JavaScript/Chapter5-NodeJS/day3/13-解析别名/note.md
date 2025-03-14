# 13-解析别名

## 1. 介绍

- [解析别名](https://www.webpackjs.com/configuration/resolve/#resolvealias)

## 2. 配置别名

```javascript
module.exports = {
    // 配置解析别名
    resolve: {
        alias: {
            // MyUtils此时就等价于 src/utils 这个路径
            MyUtils: path.resolve(__dirname, './src/utils'),
            // @ 此时等价于 src 这个路径
            '@': path.resolve(__dirname, 'src')
        }
    }
}
```

- 此时,`MyUtils`就等价于`src/utils`这个路径,`@`就等价于`src`这个路径
- 注意它们后边都没有带`/`,因为`resolve.alias`配置的是一个路径,而不是一个文件

## 3. 使用别名

```javascript
import logo from '@/asset/logo.png'
import '@/css/index.css'
import {checkUsername, checkPassword} from "MyUtils/utils"
import {makeOption} from "MyUtils/request.js"
```