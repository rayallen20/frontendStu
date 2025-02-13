# 09-生成随机颜色

## 1. 需求

该函数接收一个布尔类型参数,表示颜色的格式是十六进制还是rgb格式

- 如果参数传递的是`true`或者无参数,则输出一个随机十六进制的颜色
  - 形如`#ffffff`
- 如果参数传递的是`false`,则输出 一个随机rgb的颜色
  - 形如`rgb(255, 255, 255)`
- 格式:

```javascript
function getRandomColor(flag) {
// code
}
console.log(getRandomColor(true)) // #ffffff
console.log(getRandomColor(false)) // rgb(255,255,255)
```