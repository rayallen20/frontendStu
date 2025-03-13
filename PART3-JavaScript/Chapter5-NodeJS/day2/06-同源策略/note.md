# 06-同源策略

## 1. 同源策略

- 同源策略: 一种安全策略,限制AJAX请求只能发给同源的服务器
- 源: 协议/域名/端口号,三者有一个不同就是不同源
- 网页加载时的所在源和AJAX请求的源,协议/域名/端口号必须完全一致,否则即为跨域请求

## 2. 跨域

- 跨域: 网页加载时的所在源和AJAX请求的源不一致
- 换言之: 从一个源的文档/脚本,加载另一个源的资源
- 从IDE的Live Server启动的网页,所在源是`http://localhost:5500`,AJAX请求的源是`http://localhost:4060`,这就是跨域请求

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>06-跨域演示</title>
</head>
<body>
<script src="./js/axios.min.js"></script>
<script>
    const url = 'http://localhost:4060/api/province'
    const option = {
        url,
        method: 'GET',
    }
    
    axios(option).
    then(response => console.log(response)).
    catch(error => console.log(error))
</script>
</body>
</html>
```

报错: Access to XMLHttpRequest at 'http://localhost:4060/api/province' from origin 'http://localhost:63342' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

## 3. 解决跨域-后端设置允许跨域

- 通常在开发阶段使用,生产环境不建议设置允许跨域
- 在后端设置允许跨域: 在响应头中添加`Access-Control-Allow-Origin`字段,值为`*`或请求源即可
- 下载cors包: `npm install cors`

- 使用cors包设置允许跨域:

```javascript
const express = require('express')
const cors = require('cors')

const allowOrigin = ['http://localhost:63342', 'http://127.0.0.1:63342']
const corsConfig = {
    origin: checkOrigin
}

const server = express()
server.use(cors(corsConfig))
const port = 4060

function checkOrigin(origin, callback) {
    // 同源请求时 请求头中不包含 Origin 字段 因此此时origin字段值为null或undefined
    if (origin === null || origin === undefined || allowOrigin.indexOf(origin) !== -1) {
        callback(null, true)
        return
    }

    // 拒绝跨域
    callback(new Error('Not allowed by CORS'))
}
```

单独为某个请求设置允许跨域:

```javascript
server.get('/api/province', (req, res) => {
    const respBody = provinceController.getProvince()
    res.setHeader('Content-Type', 'application/json')

    const allowOrigin = ['http://localhost:63342', 'http://127.0.0.1:63342']
    res.setHeader('Access-Control-Allow-Origin', allowOrigin)

    res.send(respBody)
})
```

## 4. 解决跨域-同源方式

- 通常在生产环境使用
- 简单理解就是,让后端既提供API,也提供网页(后端部署页面)
- `express`框架设置了一个名为`public`的目录,用于存放静态资源
- `server.use(express.static('public'))`设置`public`目录为静态资源目录,这些资源可以通过路由直接访问到

```javascript
server.use(express.static('public'))
```

浏览器访问`http://localhost:4060/cors-demo.html`, 即可访问`public`目录下的`cors-demo.html`文件