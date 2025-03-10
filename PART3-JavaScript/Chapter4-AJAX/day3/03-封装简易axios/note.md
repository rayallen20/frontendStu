# 03-封装简易axios

## 1. 获取省份列表

根据axios的用法:

```javascript
axios(requestConfig).then(response => {
    const data = response.data.data
    const divEle = document.createElement('div')
    
    const accountEle = document.createElement('p')
    accountEle.innerHTML = data.account
    divEle.append(accountEle)
    
    const idEle = document.createElement('p')
    idEle.innerHTML = data.id + ''
    divEle.append(idEle)
    
    document.body.append(divEle)
    
}).catch(error => {
    const message = error.response.data.message
    alert(message)
})
```

可以分析出,`axios()`函数返回的就是一个`Promise`对象,所以这里我们自己的封装也按照这个方式封装即可:

```javascript
function myAxios(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        
        // 设置默认请求方式
        if (!config.hasOwnProperty('method')) {
            config.method = 'GET'
        }
        
        // 处理查询参数
        if (config.hasOwnProperty('params')) {
            const urlParams = new URLSearchParams(config.params)
            config.url += '?' + urlParams.toString()
        }
        
        // 处理响应头设置
        if (config.hasOwnProperty('headers')) {
            for (const key in config.headers) {
                xhr.setRequestHeader(key, config.headers[key])
            }
        }
        
        xhr.open(config.method, config.url)
        
        xhr.addEventListener('loadend', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve({
                    data: JSON.parse(xhr.responseText)
                })
            } else {
                reject(new Error(xhr.response))
            }
        })
        
        // 处理请求体
        if (config.hasOwnProperty('data')) {
            // 若存在请求体 则设置请求头
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(JSON.stringify(config.data))
            return
        }
        xhr.send()
    })
}
```

```javascript
const url = 'https://hmajax.itheima.net/api/province'
const requestConfig = {
    url,
    method: 'GET',
}

myAxios(requestConfig).
then(response => renderResponse(response.data.list)).
catch(error => console.log(error))

function renderResponse(list) {
    
    const ulEle = document.createElement('ul')
    
    list.forEach(item => {
        const liEle = document.createElement('li')
        liEle.innerHTML = item
        ulEle.append(liEle)
    })
    
    document.body.append(ulEle)
}
```

## 2. 获取地区列表

```javascript
const url = 'https://hmajax.itheima.net/api/area'

const params = {
    pname: '内蒙古自治区',
    cname: '呼和浩特市'
}

const requestConfig = {
    url,
    method: 'GET',
    params
}

myAxios(requestConfig).
then(response => renderResponse(response.data.list)).
catch(error => console.log(error))

function renderResponse(list) {
    
    const ulEle = document.createElement('ul')
    
    list.forEach(item => {
        const liEle = document.createElement('li')
        liEle.innerHTML = item
        ulEle.append(liEle)
    })
    
    document.body.append(ulEle)
}
```

## 3. 用户注册

```javascript
const url = 'https://hmajax.itheima.net/api/register'

const data = {
    username: 'userNameTest95271',
    password: '123456',
}

const requestConfig = {
    url,
    method: 'POST',
    data,
}

myAxios(requestConfig).
then(response => renderResponse(response.data.data)).
catch(error => console.log(error))

function renderResponse(user) {
    console.log(user.id)
    console.log(user.account)
}
```