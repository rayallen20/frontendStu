# 06-navigator对象

- `window.navigator`: 该属性是个对象,通过这个对象可以获取浏览器的信息,例如浏览器的名称/版本/操作系统等等
- 与`window.navigation`对象的区别:
  - `window.navigation`对象是浏览器的导航对象,用于控制浏览器的前进/后退/刷新等操作
  - `window.navigator`对象是浏览器的信息对象,用于获取浏览器的信息
- 该对象通常用于检测浏览器的版本和平台,以便在不同的浏览器上提供不同的页面内容
- 比如京东/淘宝的首页,在使用移动端模拟器检查时,自动定位到移动端页面

```javascript
// 检测 userAgent（浏览器信息）
function checkUserAgent () {
    const userAgent = navigator.userAgent
    // 验证是否为Android或iPhone
    const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
    const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
    // 如果是Android或iPhone，则跳转至移动站点
    if (android || iphone) {
        location.href = 'https://m.baidu.com'
    }
}
```