# 02-回调函数地狱和Promise链式调用

## 1. 回调函数地狱

- 回调函数地狱: 又称回调地狱,简单理解就是一个回调函数中嵌套另一个回调函数,导致代码可读性差,难以维护

例: 在下拉菜单中默认展示第一个省/第一个城市/第一个地区

```javascript
axios({url: 'http://hmajax.itheima.net/api/province'}).then(result => {
  const pname = result.data.list[0]
  document.querySelector('.province').innerHTML = pname
  // 2. 获取默认第一个城市的名字
  axios({url: 'http://hmajax.itheima.net/api/city', params: { pname }}).then(result => {
    const cname = result.data.list[0]
    document.querySelector('.city').innerHTML = cname
    // 3. 获取默认第一个地区的名字
    axios({url: 'http://hmajax.itheima.net/api/area', params: { pname, cname }}).then(result => {
      console.log(result)
      const areaName = result.data.list[0]
      document.querySelector('.area').innerHTML = areaName
    })
  })
}).catch(error => {
  console.dir(error)
})
```

## 2. Promise链式调用

- Promise链式调用: 通过`then()`方法返回一个新的Promise对象的方式,实现多个异步操作按顺序执行,解决回调函数地狱问题
- 在`then()`方法定义的回调函数中(也就是在`resolve()`中),返回一个新的Promise对象,可以继续调用`then()`方法

例:

```javascript
const promise1 = new Promise((resolve, reject) => {
    resolve('promise1成功')
})

promise1.
then(response => {
    console.log(response)
    return new Promise((resolve, reject) => {
        resolve('promise2成功')
    })
}).
catch(error => {
    console.log('promise1失败: ' + error)
}).
then(response => {
    console.log(response)
}).
catch(error => {
    console.log('promise2失败: ' + error)
})
```

## 3. 使用Promise链式调用解决回调地狱

### 3.1 自己的实现

```javascript
const provincePromise = new Promise((resolve, reject) => {
    const url = 'https://hmajax.itheima.net/api/province'
    const requestConfig = {
        url,
    }
    axios(requestConfig).
    then(response => resolve(response)).
    catch(error => reject(error))
})

provincePromise.
then(response => {
    const pname = response.data.list[0]
    document.querySelector('.province').innerText = pname
    
    return new Promise((resolve, reject) => {
        const url = 'https://hmajax.itheima.net/api/city'
        const requestConfig = {
            url,
            params: {
                pname,
            }
        }
        axios(requestConfig).
        then(response => resolve(response)).
        catch(error => reject(error))
    })
}).
catch(error => console.log('请求省份错误: ' + error)).
then(response => {
    const cname = response.data.list[0]
    document.querySelector('.city').innerText = cname
    
    const pname = document.querySelector('.province').innerText
    
    return new Promise((resolve, reject) => {
        const url = 'https://hmajax.itheima.net/api/area'
        const requestConfig = {
            url,
            params: {
                pname,
                cname,
            }
        }
        axios(requestConfig).
        then(response => resolve(response)).
        catch(error => reject(error))
    })
}).
catch(error => console.log('请求城市错误: ' + error)).
then(response => {
    const aname = response.data.list[0]
    document.querySelector('.area').innerText = aname
}).
catch(error => console.log('请求地区错误: ' + error))
```

- 问题: `axios()`函数本身就返回一个`Promise`对象,没有必要再手动创建一个`Promise`对象

### 3.2 讲解

```javascript
sendProvinceRequest().
then(response => {
    const pname = renderProvince(response)
    return sendCityRequest(pname)
}).
catch(error => console.log('请求省份错误: ' + error)).
then(response => {
    const cname = renderCity(response)
    return sendAreaRequest(cname)
}).
catch(error => console.log('请求城市错误: ' + error)).
then(response => renderArea(response)).
catch(error => console.log('请求地区错误: ' + error))

function sendProvinceRequest() {
    const url = 'https://hmajax.itheima.net/api/province'
    const requestConfig = {
        url,
    }
    return axios(requestConfig)
}

function renderProvince(response) {
    const pname = response.data.list[0]
    document.querySelector('.province').innerText = pname
    return pname
}

function sendCityRequest(pname) {
    const url = 'https://hmajax.itheima.net/api/city'
    const requestConfig = {
        url,
        params: {
            pname,
        }
    }
    
    return axios(requestConfig)
}

function renderCity(response) {
    const cname = response.data.list[0]
    document.querySelector('.city').innerText = cname
    return cname
}

function sendAreaRequest(cname) {
    const pname = document.querySelector('.province').innerText
    
    const url = 'https://hmajax.itheima.net/api/area'
    const requestConfig = {
        url,
        params: {
            pname,
            cname,
        }
    }
    
    return axios(requestConfig)
}

function renderArea(response) {
    const aname = response.data.list[0]
    document.querySelector('.area').innerText = aname
}
```