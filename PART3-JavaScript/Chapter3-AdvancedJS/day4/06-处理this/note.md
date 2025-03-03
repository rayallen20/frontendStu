# 06-处理this

## 1. 改变this指向

JS中允许改变**普通函数**(注意不能改变箭头函数的this,因为箭头函数的this指向父级作用域的this)中的this指向，有以下三种方法：

- `call()`
- `apply()`
- `bind()`

### 1.1 `call()`

- `fun.call(thisArg, arg1, arg2, ...)`: 调用`fun`函数,并将`this`指向`thisArg`,并传入参数`arg1, arg2, ...`
  - 注意: `call()`方法是`Function.prototype`上的方法,所以只有函数(`Function`实例)才能调用`call()`方法
  - `thisArg`的值为`null`时表示改变`this`指向为`window`

```javascript
function printThis(content) {
    console.log(this + content)
}

printThis('some content') // [object Window] some content

const obj = {
    name: 'why'
}

printThis.call(obj, 'other content') // [object Object] other content

printThis.call(null, 'other content') // [object Window] other content
```

- 使用场景: 明确鉴定数据类型

```javascript
const arr = [1, 2, 3]
console.log(typeof arr) // object

// 注意: 这里的typeOfArr是一个字符串
let typeOfArr = Object.prototype.toString.call(arr)
console.log(typeOfArr) // [object Array]
console.log(typeOfArr === '[object Array]') // true
console.log(typeOfArr.includes('Array')) // true

// 注意: 通过原型链找到Object的toString方法并调用 此时的`toString()`方法中的this指向的是arr.__proto__.__proto__
// 也就是Object.prototype 所以返回的是[object Object] 因此,只能通过`Object.prototype.toString.call(arr)`来明确鉴定数据类型
let typeOfArrByInstance = arr.__proto__.__proto__.toString()
console.log(typeOfArrByInstance) // [object Object]
```

### 1.2 `apply()`

- `fun.apply(thisArg, [arg1, arg2, ...])`: 调用`fun`函数,并将`this`指向`thisArg`,并传入参数`[arg1, arg2, ...]`
  - 注意: `apply()`方法是`Function.prototype`上的方法,所以只有函数(`Function`实例)才能调用`apply()`方法

```javascript
function printThis(x, y) {
    console.log(this)
    console.log(x + y)
}

printThis(1, 2) // window 3
printThis.apply({name: 'frank'}, [1, 2]) // {name: 'frank'} 3
```

- 使用场景: 和数组有关的操作

```javascript
let arr = [1, 2, 3]
console.log(Math.max.apply(null, arr)) // 3
```

## 1.3 `bind()`

- `fun.bind(thisArg, arg1, arg2, ...)`: 返回一个新的函数,新函数的`this`指向`thisArg`,并传入参数`arg1, arg2, ...`
  - 注意: `bind()`方法是`Function.prototype`上的方法,所以只有函数(`Function`实例)才能调用`bind()`方法

```javascript
function printThis(content) {
    console.log(this)
    console.log(content)
}

const obj = {
    name: 'obj'
}

const afterBind = printThis.bind(obj)
afterBind('123')    // {name: "obj"} 123

// 二者等效
const afterBind2 = printThis.bind(obj, '123')
afterBind2()    // {name: "obj"} 123
```

- 使用场景: 改变定时器函数内部的this指向

- 例: 按钮点击后禁用,3秒后启用

- 原写法:

```javascript
const btn = document.querySelector('button')
btn.addEventListener('click', clickHandle)

let counter = 3
let isCounting = false

function clickHandle() {
    if (isCounting) {
        return
    }

    isCounting = true
    this.disabled = true
    this.innerHTML = `${counter}秒后启用`

    let timer = setInterval(function () {
        counter--
        if (counter === 0) {
            btn.disabled = false
            btn.innerHTML = '按钮'
            counter = 3
            clearInterval(timer)
            return
        }

        btn.innerHTML = `${counter}秒后启用`
    }, 1000)

    isCounting = false
}
```

- 使用`bind()`改写:

```javascript
const btn = document.querySelector('button')
btn.addEventListener('click', clickHandle)

let counter = 3
let timer = 0
let isCounting = false

function clickHandle() {
    if (isCounting) {
        return
    }

    isCounting = true
    this.disabled = true
    this.innerHTML = `${counter}秒后启用`

    let changeThis = enabledBtnInterval.bind(this)
    timer = setInterval(changeThis, 1000)

    isCounting = false
}

function enabledBtnInterval () {
    counter--
    if (counter === 0) {
        btn.disabled = false
        btn.innerHTML = '按钮'
        counter = 3
        clearInterval(timer)
        return
    }

    btn.innerHTML = `${counter}秒后启用`
}
```

## 2. this指向

this的取值,不取决于函数的定义,而是取决于函数的调用者

- 全局内调用: 函数内的this指向window
- 对象内的方法调用: 方法内的this指向调用方法的对象
- 构造函数内调用: 构造函数内的this指向实例对象
- 事件处理函数内调用: 事件处理函数内的this指向触发事件的元素
- 特殊调用方式: `call()`/`apply()`/`bind()`可以修改函数内部的this指向
- 箭头函数: 本身没有this,指向父级作用域的this
