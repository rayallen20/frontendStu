# 14-Number实例的常用方法

- `toFixed(digits)`: 保留指定位数的小数,返回字符串
  - 这里的保留是指直接截取,不是四舍五入

```javascript
let num = 1.2345
console.log(typeof num.toFixed(3)) // string
console.log(num.toFixed(3)) // 1.234
```