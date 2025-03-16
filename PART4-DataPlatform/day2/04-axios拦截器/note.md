# 04-axios拦截器

- [axios拦截器](https://www.axios-http.cn/docs/interceptors):在请求发送之前和响应收到之后,可以对请求和响应进行拦截处理
- 类似于后端框架中的中间件,同样也是分为beforeRequest和afterResponse两个阶段

## 1. 请求拦截器

```javascript
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // 这个config表示请求的配置对象
    // 包括请求的URL method headers等
    return config
}, error => {
    // 对请求错误做些什么
    // 这个error对象表示当请求发送失败时的错误对象
    // 当请求发送失败时 该参数会捕获并包含错误的详细信息
    // 通过这个参数 可以对请求错误进行处理和日志记录
    return Promise.reject(error)
})
```

## 2. 响应拦截器

```javascript
// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    
    // response形参表示服务器返回的响应对象 也就是then()中的response
    return response
}, error => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    
    // 这个error对象表示当响应失败时的错误对象
    // 也就是catch()中的error
    return Promise.reject(error)
})
```