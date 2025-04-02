import emitter from './eventBus.js'

// 1. 触发事件
// 第1个参数是事件名称
// 第2个参数是事件处理函数的参数
emitter.emit('eventName', { key: 'value' })

// 2. 监听事件
// 第1个参数是事件名称
// 第2个参数是事件处理函数 data是事件处理函数的参数(也就是emit时传入的参数)
emitter.on('eventName', (data) => {
    console.log('eventNameHandle: ', data)
})

// 3. 取消监听
// 3.1 取消所有监听
emitter.all.clear()

// 3.2 取消指定事件的监听
// 监听时保存事件处理函数的引用
function eventFooHandle(data) {
    console.log('eventFooHandle: ', data)
}
emitter.on('eventFoo', eventFooHandle)

// 取消指定事件的监听
emitter.off('eventFoo', eventFooHandle)