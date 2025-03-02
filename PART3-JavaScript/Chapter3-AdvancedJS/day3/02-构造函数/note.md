# 02-构造函数

- 构造函数的内存浪费问题:

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log('我是' + this.name + '，今年' + this.age + '岁')
    }
}

const p1 = new Person('张三', 18)
const p2 = new Person('李四', 20)
```

`p1`和`p2`的`say`方法指向了2块不同的内存空间,但实际上逻辑都是一样的,这样会造成内存浪费