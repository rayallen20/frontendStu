# 06-匿名函数

## 1. 函数表达式

```javascript
let fn = function () {}

fn()
```

- 使用场景: web api中常用
- 注意: 在JS中,function也是一种数据类型
- 函数表达式不能在声明之前调用

## 2. 立即执行函数

- IIFE(立即执行函数表达式): Immediately Invoked Function Expression

```javascript
// 方式1
(function () { console.log(1) })();

// 方式2
(function () { console.log(1)}());
```

- 使用场景: 用于避免全局变量之间的污染
- 注意: IIFE的后边如果有代码,则必须在IIFE后边加`;`