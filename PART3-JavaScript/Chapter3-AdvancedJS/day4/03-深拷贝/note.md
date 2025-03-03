# 03-深拷贝

- 深拷贝: 完全复制一个对象,包括对象的值,以及对象包含的对象的值.以此类推,直到最后一个属性的值也被复制
- 常见实现方式:
  - `JSON.parse(JSON.stringify(obj))`: 无法复制函数,正则,undefined等
  - `lodash`库: `_.cloneDeep(obj)`
  - 递归: 递归遍历对象的每一个属性,并复制

## 1. `JSON.parse(JSON.stringify(obj))`

```javascript
const obj = {
    name: '张三',
    age: 18,
    family: {
        father: '张二',
        mother: '李四'
    },
    say: function () {
        console.log(this.name)
    }
}

let objJsonStr = JSON.stringify(obj)
let objCopy = JSON.parse(objJsonStr)
console.log(objCopy) // { name: '张三', age: 18, family: { father: '张二', mother: '李四' } } 没有say方法
```

## 2. `lodash`库

- [lodash官网](https://www.lodashjs.com/)
- 本例中的`lodash.min.js`是从github上下载的
- [lodash项目地址](https://github.com/lodash/lodash)

```javascript
const obj1 = {
    name: '张三',
    age: 18,
    address: {
        city: '北京'
    },
    lover: undefined,
    say: function () {
        console.log(this.name)
    }
}

// _: lodash库中的对象
// cloneDeep: 深拷贝的方法
const obj2 = _.cloneDeep(obj1)
console.log(obj2)
console.log(obj1 === obj2) // false
```

## 3. 递归

```javascript
    function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    let result
    if (Array.isArray(obj)) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }

    return result
}

const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    say: function () {
        console.log(this.name)
    }
}

const obj2 = deepClone(obj1)
console.log(obj2)

// JS中 ===两侧都是object类型时 比较的是两个对象的引用是否相同
console.log(obj2 === obj1) // false
```