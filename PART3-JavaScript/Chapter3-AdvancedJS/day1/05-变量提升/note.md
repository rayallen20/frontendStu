# 05-变量提升

- 变量提升: 在代码执行之前,JS引擎会把所有带`var`和`function`关键字的进行提前的声明或者定义,这会导致:
  - 使用`var`声明的变量在声明之前就可以使用,但是值是`undefined`

```javascript
console.log(num)
```

此时会报错: `Uncaught ReferenceError: num is not defined`

```javascript
console.log(num)
var num = 10
```

此时打印: `undefined`

这是因为JS引擎会把`var num = 10`拆分成两步:

```javascript
var num
console.log(num)
num = 10
```

- 变量提升出现在当前作用域的最前面
- 提升时,只提升变量声明,不提升变量赋值
