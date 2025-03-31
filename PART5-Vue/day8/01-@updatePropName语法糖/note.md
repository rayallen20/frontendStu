# 01-@updatePropName语法糖

## 1. 需求

- 父组件中的按钮可以控制子组件的显隐
- 子组件中的按钮也可以控制子组件的隐藏

## 2. 父子组件通信的思路

- 父组件通过props传递数据给子组件,子组件通过`v-show`控制自身显隐
- 子组件通过`$emit`向父组件传递自定义事件,父组监听自定义事件

- 子组件`MyDialog.vue`

```vue
<template>
    <div class="dialog" v-show="visible">
        <div class="dialog-header">
            <h3>友情提示</h3>
            <span class="close" @click="close">✖️</span>
        </div>
        <div class="dialog-content">我是文本内容</div>
        <div class="dialog-footer">
            <button @click="close">取消</button>
            <button @click="close">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    emits: {
        // 定义自定义事件
        'update:visible': null
    },
    methods: {
        close () {
            // 触发自定义事件
            this.$emit('update:visible', false)
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.dialog {
    width: 470px;
    height: 230px;
    padding: 0 25px;
    background-color: #ffffff;
    margin: 40px;
    border-radius: 5px;
}
.dialog-header {
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    position: relative;
}
.dialog-header .close {
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
}
.dialog-content {
    height: 80px;
    font-size: 18px;
    padding: 15px 0;
}
.dialog-footer {
    display: flex;
    justify-content: flex-end;
}
.dialog-footer button {
    width: 65px;
    height: 35px;
    background-color: #ffffff;
    border: 1px solid #e1e3e9;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
    border-radius: 3px;
}
.dialog-footer button:last-child {
    background-color: #007acc;
    color: #fff;
}
</style>
```

- 父组件`App.vue`

```vue
<template>
    <div class="app">
        <button @click="toggleDialog">切换显隐</button>
        <!-- 监听自定义事件 -->
        <MyDialog :visible="visible" @hidden="closeDialog"></MyDialog>
    </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        MyDialog
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible
        },
        closeDialog () {
            this.visible = false
        }
    }
}
</script>

<style>
body {
    background-color: #b3b3b3;
}
</style>
```

## 3. 使用`@update:propsName`语法糖

- 通过`@update:visible`语法糖,可以让代码看起来语义性更强

- 子组件`MyDialog.vue`

```vue
<template>
    <div>
        <button @click="toggleDialog">控制显隐</button>
        <!-- 监听自定义事件 -->
        <MyDialog :visible="visible" @update:visible="closeDialog"></MyDialog>
    </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        MyDialog
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible
        },
        closeDialog (val) {
            this.visible = val
        }
    }
}
</script>

<style>
body {
    background-color: #b3b3b3;
}
</style>
```

- 父组件`App.vue`

```vue
<template>
    <div>
        <button @click="toggleDialog">控制显隐</button>
        <!-- 监听自定义事件 -->
        <MyDialog :visible="visible" @update:visible="closeDialog"></MyDialog>
    </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        MyDialog
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible
        },
        closeDialog () {
            console.log(123)
            this.visible = false
        }
    }
}
</script>

<style>
body {
    background-color: #b3b3b3;
}
</style>
```