# 06-函数提升

- 函数提升: 用函数声明的方式创建函数时,这个函数会出现在当前作用域的最前面,这个过程就叫做函数提升

```javascript
fn()

function fn() {
    console.log(123)
}
```

- 此时函数依然会被调用,因为函数提升会把函数提升到最前面
- 也就是说,代码变成了:

```javascript
function fn() {
    console.log(123)
}

fn()
```

- 但是,函数表达式不会被提升

```javascript
f()

var f = function () {
    console.log(123)
}
```

- 报错: `Uncaught TypeError: f is not a function`
- 因为函数表达式不会被提升,代码变成了:

```javascript
var f

f()

f = function () {
    console.log(123)
}
```