# 06-http模块

## 1. 基本使用

- `http.createServer()`: 创建一个服务端实例
- `server.on('request', hello)`: 监听请求事件,当请求事件发生时,执行回调函数
- `response.setHeader()`: 设置响应头
- `response.end()`: 结束响应,相当于告诉客户端响应结束了

## 2. 返回中文

- 设置响应头`Content-Type`为`text/html;charset=utf-8`
- 若不设置,则乱码,因为默认编码为`ISO-8859-1`