# 01-XHR

## 1. XHR

- XHR: XMLHttpRequest, 是一个用于在后台与服务器交换数据的API.axios内部就是基于XHR封装的

```javascript
const url = 'https://hmajax.itheima.net/api/province'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.addEventListener('loadend', handleResponse)

function handleResponse() {
    // xhr.response 是一个字符串
    console.log(xhr.response)
    
    const responseObj = JSON.parse(xhr.response)
    console.log(responseObj)
}

// 发送请求
xhr.send()
```

- 注意:**`xhr.send()`方法是异步的**

## 2. 查询参数

```javascript
const baseUrl = 'https://hmajax.itheima.net/api/city?pname='
const province = '河北省'
const url = baseUrl + province

const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.addEventListener('loadend', handleResponse)

function handleResponse() {
    if (xhr.status !== 200) {
        console.log(xhr.statusText)
        return
    }
    
    const responseObj = JSON.parse(xhr.response)
    console.log(responseObj)
}

xhr.send()
```

## 3. 案例-地区查询

```javascript
function sendRequest() {
    const province = provinceInput.value
    const city = cityInput.value
    
    const paramObj = new URLSearchParams({
        pname: province,
        cname: city
    })
    const queryString = paramObj.toString()
    console.log(queryString)    // pname=北京&cname=北京市(url编码后的字符串)
    
    const baseUrl = `https://hmajax.itheima.net/api/area?`
    const url = baseUrl + queryString
    
    xhr.open('GET', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.addEventListener('loadend', handleResponse)
    xhr.send()
}

function handleResponse() {
    if (xhr.status !== 200) {
        console.log(xhr.status)
        return
    }
    
    const data = JSON.parse(xhr.response)
}
```

- `URLSearchParams`: 用于处理URL查询参数的对象
- `URLSearchParams.toString()`: 将URLSearchParams对象转换为url编码后的字符串

## 4. 发送请求体数据

```javascript
function register() {
    const dataObj = {
        username: 'testUserName8902',
        password: '123456',
    }
    const dataStr = JSON.stringify(dataObj)
    
    xhr.open('POST', url)
    xhr.withCredentials = true
    xhr.setRequestHeader('Content-Type', 'application/json')    // 设置请求头
    xhr.addEventListener('loadend', handleResponse)
    xhr.send(dataStr)   // 发送请求体数据 要求请求体数据为字符串
}

function handleResponse() {
    if (xhr.status !== 200) {
        console.log(xhr.status)
        console.log(xhr.responseText)
        return
    }
    
    const responseObj = JSON.parse(xhr.responseText)
    
    console.log(responseObj.data)
}
```

- `xhr.withCredentials = true`: 允许跨域携带cookie
- `xhr.setRequestHeader('Content-Type', 'application/json')`: 设置请求头
- 发送请求体数据时,需要将对象转换为字符串,在`xhr.send()`方法中传入字符串即可

## 5. 文件上传

```javascript
function upload(formData) {
    const xhr = new XMLHttpRequest()
    const url = 'https://hmajax.itheima.net/api/uploadimg'
    
    // 监听上传进度
    xhr.upload.addEventListener('progress', uploadProgress)
    
    // 监听请求完成
    xhr.addEventListener('loadend', (event) => {
        uploadComplete(xhr, event)
    })
    
    // 监听请求错误
    xhr.addEventListener('error', (event) => {
        console.log(xhr.status)
        console.log(xhr.responseText)
    })
    
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'multipart/form-data')
    
    xhr.send(formData)
}

function uploadProgress(event) {
    // 一个布尔值 表示传输的总大小是否已知
    if (event.lengthComputable) {
        // event.loaded 表示已经完成的工作量 单位:字节
        // event.total 表示要完成的总工作量 单位:字节
        let percent = (event.loaded / event.total) * 100
        console.log(percent)
    }
}

function uploadComplete(xhr, event) {
    if (xhr.status !== 200) {
        console.log(xhr.status)
        console.log(xhr.responseText)
        return
    }
    
    console.log(xhr.responseText)
}
```

- 注意: `open`之后才能设置请求头,否则会报错
- 上传文件和发送请求体数据基本相同,都是在`xhr.send()`方法中传入数据,只是上传文件时传入的是`FormData`对象
- 注意上传文件时,请求头要设置为`multipart/form-data`