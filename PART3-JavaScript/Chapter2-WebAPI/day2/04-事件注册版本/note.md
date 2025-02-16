# 04-事件注册版本

## 1. DOM LO

- `事件源.on事件类型 = function () {}`

```javascript
btn.onclick = function () {
  console.log('click')
}
```

## 2. DOM L2

- `事件源.addEventListener('事件类型', function () {})`

```javascript
btn.addEventListener('click', function () {
  console.log('click')
})
```

其中,L表示Level,表示DOM的版本,LO是Level0, L2是Level2

## 3. 区别

- `事件源.on事件类型 = function () {}` 会覆盖同名的事件类型,也就是说1个事件只能有1个处理函数
- `事件源.addEventListener('事件类型', function () {})` 不会覆盖之前的事件,也就是说1个事件可以有多个处理函数
- L2不会覆盖L0(如果二者同时存在的话)