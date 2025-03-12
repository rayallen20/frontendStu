# 03-async函数和await

- `async`: 用于修饰函数.`async()`函数是`AsyncFunction()`构造函数的实例,并且其中允许使用`await`关键字
  - `async`函数只能返回`Promise`对象,如果返回的是非`Promise`对象,则会被自动包装成`Promise`对象
  - `async`函数返回的`Promise`对象的状态(`fulfilled`/`rejected`),取决于`async`函数内部是否抛出异常
- `await`: 用于修饰异步任务.用于等待一个`Promise`对象,并且只能在`async`函数中使用
  - `await`可以取代`Promise`的`then()`方法,等待获取Promise对象**fulfilled**状态的结果(也就是`then()`方法中的`resolve`回调函数的实参)
  - 这也就意味着,`async`和`await`的方式,无法处理`Promise`对象的**rejected**状态,需要使用`try...catch`语句来处理
  - `await`会阻塞后面的代码,直到`Promise`对象的状态变为`fulfilled`状态,才会继续执行后面的代码
  - 若`await`等待的`Promise`对象的状态为`rejected`,则会抛出异常,需要使用`try...catch`语句来处理
- 二者联用,可以用一种更简洁的方式来处理异步任务,比如使用Promise处理异步任务的结果,而无需刻意链式调用Promise

```javascript
async function requestAndRender() {
    let pname = ''
    let cname = ''
    
    try {
        const provinceResponse = await requestProvince()
        pname = provinceResponse.data.list[0]
        renderProvince(pname)
    } catch (error) {
        console.log('请求省份错误')
        throw error
    }
    
    try {
        const cityResponse = await requestCity(pname)
        cname = cityResponse.data.list[0]
        renderCity(cname)
    } catch (error) {
        console.log('请求城市错误')
        throw error
    }
    
    try {
        const areaResponse = await requestArea(pname, cname)
        const aname = areaResponse.data.list[0]
        renderArea(aname)
    } catch (error) {
        console.log('请求地区错误')
        throw error
    }
}

async function requestProvince() {
    const url = 'https://hmajax.itheima.net/api/province'
    const requestConfig = {
        url,
    }
    
    // 注意: async函数只能返回Promise对象
    // 即使显式地返回一个值 这个值也会被包装成一个状态为fulfilled的Promise对象
    // 如果出现异常 则会被包装成一个状态为rejected的Promise对象
    return await axios(requestConfig)
}

function renderProvince(pname) {
    const provinceOption = document.querySelector('.province')
    provinceOption.innerText = pname
}

async function requestCity(pname) {
    const url = 'https://hmajax.itheima.net/api/city'
    const requestConfig = {
        url,
        params: {
            pname,
        }
    }
    
    return await axios(requestConfig)
}

function renderCity(cname) {
    const cityOption = document.querySelector('.city')
    cityOption.innerText = cname
}

async function requestArea(pname, cname) {
    const url = 'https://hmajax.itheima.net/api/area'
    const requestConfig = {
        url,
        params: {
            pname,
            cname,
        }
    }
    
    return await axios(requestConfig)
}

function renderArea(aname) {
    const areaOption = document.querySelector('.area')
    areaOption.innerText = aname
}

try {
    requestAndRender()
} catch (error) {
    console.log(error)
}
```

需要注意的是:

```javascript
async function awaitRejectedExample() {
    const result = await Promise.reject(new Error('Failed!'))
    return result  // 不会执行到这里
}

awaitRejectedExample().then(result => {
    console.log(result)  // 不会执行
}).catch(error => {
    console.error(error)  // 输出: Error: Failed!
});
```

在`awaitRejectedExample`函数中,`await`等待的`Promise`对象是一个`rejected`状态的`Promise`对象,所以`await`后面的代码不会执行,而是直接抛出异常,需要使用`try...catch`语句来处理异常

这里要特别注意的是: `await`本身相当于`Promise`的`then()`方法,因此`await`后面的代码,如果出现异常,会被`await`自动包装成一个`rejected`状态的`Promise`对象并返回,而不会抛出异常
