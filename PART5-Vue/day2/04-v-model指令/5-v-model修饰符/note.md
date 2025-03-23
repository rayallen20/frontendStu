# 5-v-model修饰符

## 1. `.lazy`修饰符

- 该修饰符主要用于文本框输入框,实现数据的延迟同步
- 默认情况下,`v-model`在进行数据双向绑定时,监控的是`input`事件,即只要文本框的内容发生变化,就会同步到数据中
- 使用`.lazy`修饰符后,`v-model`会监听`change`事件,即只有在文本框失去焦点时,才会同步数据
  - 注: 若修改了内容,但最终修改的结果与原内容相同,则不会触发`change`事件
  - 注: `change`事件的触发时机:
    - condition1. 文本框失去焦点或按下回车键
    - condition2. 文本框内容发生变化
  - 注: 
    - 仅有文本输入(文本框/文本域)的`change`事件才会在**内容发生变化且失焦**时触发
    - `checkbox`/`radio`的`change`事件在点击选择后就会触发
    - `file`的`change`事件在选择文件后就会触发
    - `select`的`change`事件在选择选项后就会触发
- 猜测应用场景应该和防抖有关

```html
<div id="app"></div>

<template id="my-app">
    <label for="msg">
        <input id="msg" type="text" v-model.lazy="message">
    </label>
    <p>文本框的值: {{message}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                message: 'Hello',
            }
        },
    }
    
    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 2. `.number`修饰符

### 2.1 默认类型

- `v-model`指令绑定的数据默认是字符串类型

```html
<template id="my-app">
    <label for="score">
        <input id="score" type="text" v-model="score">
    </label>
    <p>文本框的值: {{score}} -> 类型: {{typeof this.score}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                score: '90',
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

### 2.2 使用`.number`修饰符

- `.number`修饰符可以将文本框的值转换为数字类型
- 通常该修饰符用于`type="number"`类型的输入框
- 若文本框的值无法转换为数字,则仍然保持字符串类型
- 若文本框的值为空,则仍然保持字符串类型

```html
<template id="my-app">
    <label for="score">
        <input id="score" type="number" v-model.number="score">
    </label>
    <p>文本框的值: {{score}} -> 类型: {{typeof this.score}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                score: 90,
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```

## 3. `.trim`修饰符

- `.trim`修饰符可以自动过滤文本框的首尾空格
- 类似原生JS的`String.prototype.trim()`方法

```html
<template id="my-app">
    <label for="msg">
        <input id="msg" type="text" v-model.trim="message">
    </label>
    <p>文本框的值: {{message}}</p>
</template>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    const args = {
        template: '#my-app',
        data() {
            return {
                message: 'Hello',
            }
        },
    }

    const app = Vue.createApp(args)
    app.mount('#app')
</script>
```