# 01-AJAX和axios

## 1. AJAX

- AJAX: Asynchronous JavaScript And XML,异步通信技术
- 作用: 实现页面的局部刷新,提升用户体验

## 2. axios的使用

### 2.1 基本使用

- [仓库地址](https://github.com/axios/axios)

```javascript
axios({
    url: 'https://hmajax.itheima.net/api/province'
}).then(response => {
    const data = response.data
    data.list.forEach((item) => {
        const p = document.createElement('p')
        p.innerHTML = item
        document.body.append(p)
    })
})
```

- `axios()`: 是一个函数,可以直接调用
- `then()`: 是一个方法,用来处理成功的回调
- 回调函数中的`response`参数: 是一个对象,包含了响应的数据(`data`属性)

### 2.2 axios的配置对象

`axios()`函数调用需要传递一个配置对象作为参数.这个配置对象可以包含各种属性，例如`url`/`method`/`params`.`data`.`headers`等

以下是一些常见属性的简要说明:

- `url`: 发送请求的URL
- `method`: 使用的HTTP方法(例如`get`、`post`、`put`、`delete`)
  - 默认是`get`
- `params`: 发送请求时的URL参数
- `data`: 作为请求体发送的数据(用于`post`、`put`等)
- `headers`: 发送请求时的自定义头部

示例：

```javascript
axios({
    url: 'https://example.com/api/resource',
    method: 'get', // 或 'post', 'put', 'delete' 等
    params: {
        key1: 'value1',
        key2: 'value2'
    },
    headers: {
        'Authorization': 'Bearer token'
    }
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
```
