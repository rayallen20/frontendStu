# 11-v-on指令

- `v-on`: 绑定事件监听器
  - - 简写: `@`
  - `v-on:事件="事件处理函数名"`
  - `@事件="事件处理函数名"`

## 1. 绑定事件

```html
<template id="my-app">
    <button v-on:click="btnClick">监听按钮单击</button>
    <div class="area" v-on:mousemove="mouseMove">监听鼠标移动</div>
    <button @click="btnClick">监听按钮单击(语法糖)</button>
    <button @click="counter++">{{counter}} (绑定表达式)</button>
    <div class="area" v-on="{click: btnClick, mousemove: mouseMove}">绑定对象</div>
    <div class="area" @="{click: btnClick, mousemove: mouseMove}">绑定对象(语法糖)</div>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                message: 'Hello',
                counter: 100,
            }
        },
        methods: {
            btnClick() {
                console.log('click btn')
            },
            mouseMove() {
                console.log('mouse move')
            }
        }
    }
    
    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

- `methods`中定义的函数,其内部的`this`指针指向当前Vue实例,也就是`Vue.createApp()`方法的返回值

## 2. 事件对象和传递参数

```html
<template id="my-app">
    <button @click="btnClick">自动传入event对象</button>
    <!--$event实参是Vue中的固定写法-->
    <!--$event实参可以写在实参列表的任意位置-->
    <button @click="btnClick2('coderWhy', 18, $event)">手动传入event对象和其他实参</button>
</template> 
```

## 3. 修饰符

```html
<template id="my-app">
    <div :class="{area: isArea}" @click="divClick" @click.right="divRightClick">
        <button @click.stop="btnClick">阻止事件传播的按钮</button>
        <button @click.right.stop="btnRightClick">阻止事件传播的按钮(单击右键事件)</button>
    </div>
    <input type="text" @keyup.enter="enterKeyUp">
</template>
```

- `.stop`: 阻止事件传播(`event.stopPropagation()`)
- `.prevent`: 阻止默认事件(`event.preventDefault()`)
- `.capture`: 使用事件捕获模式
- `.self`: 只有事件是由自己触发的时候才会触发事件处理函数(相当于事件委托的处理函数中,判断了`event.target`)
- `.once`: 事件只触发一次
- `.left`: 只有鼠标左键点击时才会触发事件处理函数(只能在`@click`后边使用)
- `.right`: 只有鼠标右键点击时才会触发事件处理函数(只能在`@click`后边使用)
- `.middle`: 只有鼠标中键点击时才会触发事件处理函数(只能在`@click`后边使用)
- `keyAlias`: 键盘按键别名(只能在`@keyup`和`@keydown`后边使用)
  - `.enter`
  - `.tab`
  - `.delete` (捕获"删除"和"退格"键)
  - `.esc`
  - `.space`
  - `.up`
  - `.down`
  - `.left` (`@click.left`和`@keyup.left`中的`.left`不是一个事件,一个是鼠标左键,一个是键盘左箭头)
  - `.right`
- `.passive`: 使用`{passive: true}`模式添加监听器