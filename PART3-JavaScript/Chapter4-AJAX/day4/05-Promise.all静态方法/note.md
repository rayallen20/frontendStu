# 05-Promise.all静态方法

- 概念: `Promise.all()`方法是一个将多个`Promise`实例包装成1个新的`Promise`实例的方法,所有实例都成功才算成功,只要有一个失败就算失败
- 所有实例都成功则调用`then`方法
- 只要有一个失败则调用`catch`方法
- 该方法会等待所有Promise对象都成功后,才调用`then`方法,如果有一个Promise对象失败,则立即调用`catch`方法

```javascript
const p = Promise.all([p1, p2, p3])
p.then(result => {
    // result: [p1的成功结果, p2的成功结果, p3的成功结果]
}).catch(error => {
    // 第1个失败的Promise对象抛出的异常
})
```

## 1. 需求

- 同时请求"北京"/"上海"/"广州"/"深圳"的天气信息,并尽可能在网页上同时显示

```javascript
Promise.all([bjPromise, shPromise, gzPromise, szPromise]).
then((responses) => {
    console.log(responses)    // 注意这里拿到的是一个数组 数组中的每一项都是一个响应对象 也就是每个Promise对象fulfilled的结果
    responses.forEach(response => {
        const li = document.createElement('li')
        li.textContent = response.data.data.area + '---' + response.data.data.weather
        document.body.appendChild(li)
    })
}).
catch((err) => console.log(err))
```