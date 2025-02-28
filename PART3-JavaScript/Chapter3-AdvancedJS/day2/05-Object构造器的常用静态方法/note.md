# 05-Object构造器的常用静态方法

## 1. `Object.keys()`

- 该方法用于获取对象的所有可枚举属性的键名,返回一个数组

```javascript
let obj = {
    name: 'Tom',
    age: 18,
    say: function () {
        console.log(this.name + ' is ' + this.age + ' years old.')
    }
}

const keys = Object.keys(obj)
console.log(keys) // ['name', 'age', 'say']
```

## 2. `Object.values()`

- 该方法用于获取对象的所有可枚举属性的键值,返回一个数组
- 用途: 获取表单数据

```javascript
let obj = {
    name: 'Tom',
    age: 18,
    say: function () {
        console.log(this.name + ' is ' + this.age + ' years old.')
    }
}

const values = Object.values(obj)
console.log(values) // ["Tom", 18, ƒ]
```

## 3. `Object.assign()`

- 该方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象,返回目标对象
  - 若属性值的类型为值类型,则是深拷贝
  - 若属性值的类型为引用类型,则是浅拷贝

```javascript
let obj1 = {
    name: '张三',
    age: 18,
    hobbies: ['唱', '跳', 'rap', '篮球'],
    job: {
        name: '水管工',
        salary: 20000
    }
}

let obj2 = {}
Object.assign(obj2, obj1)

// 修改值类型数据 不会影响原对象 因为值类型是深拷贝
obj2.age = 20
console.log(obj1)
console.log(obj2)

console.log('------------------------')

// 修改引用类型数据 会影响原对象 因为引用类型是浅拷贝
obj2.hobbies.unshift('吃黄磊的菜')
console.log(obj1)
console.log(obj2)

console.log('------------------------')
obj2.job.name = '家里蹲'
obj2.job.salary = -8000
console.log(obj1)
console.log(obj2)
```