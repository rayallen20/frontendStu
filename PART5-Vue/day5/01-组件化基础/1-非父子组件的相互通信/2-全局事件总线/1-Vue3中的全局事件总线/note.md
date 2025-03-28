# 1-Vue3中的全局事件总线

Vue3中没有内置事件总线功能,需要使用第三方库来实现:

```
npm install mitt
```

## 1.1 封装事件总线

- 封装`utils/eventBus.js`文件,该文件用于统一导出`emitter`对象(该对象即事件总线实例,用于确保所有组件都使用同一个事件总线实例)

- `src/utils/eventBus.js`:

```javascript
import mitt from "mitt"

const emitter = mitt()

export default {
    emitter
}
```

## 1.2 mitt的常用API

### a. 触发事件

```javascript
import emitter from './eventBus'

// 1. 触发事件
// 第1个参数是事件名称
// 第2个参数是事件处理函数的参数
emitter.emit('eventName', { key: 'value' })
```

### b. 监听事件

```javascript
import emitter from './eventBus.js'

// 2. 监听事件
// 第1个参数是事件名称
// 第2个参数是事件处理函数 data是事件处理函数的参数(也就是emit时传入的参数)
emitter.on('eventName', (data) => {
    console.log('eventNameHandle: ', data)
})
```

### c. 取消监听

#### c1. 取消所有监听

```javascript
import emitter from './eventBus.js'

// 3. 取消监听
// 3.1 取消所有监听
emitter.all.clear()
```

#### c2. 取消指定事件的监听

- 取消指定事件的监听,需要在监听时保存事件处理函数的引用,然后调用`off`方法取消监听

```javascript
import emitter from './eventBus.js'

// 3.2 取消指定事件的监听
// 监听时保存事件处理函数的引用
function eventFooHandle(data) {
    console.log('eventFooHandle: ', data)
}
emitter.on('eventFoo', eventFooHandle)

// 取消指定事件的监听
emitter.off('eventFoo', eventFooHandle)
```