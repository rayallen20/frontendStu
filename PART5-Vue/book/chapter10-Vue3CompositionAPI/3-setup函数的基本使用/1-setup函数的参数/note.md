# 1-setup函数的参数

- props
- context

## 1.1 props

- props: 父组件传递给子组件的属性

- `components/SetupProps.vue`:

```vue
<template>
    <div class="setup-props">
        SetupProps组件
        <h4>{{message}}</h4>
    </div>
</template>

<script>
export default {
    name: 'SetupProps',
    props: {
        message: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        console.log(props)
        console.log(props.message)
    }
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <SetupProps message="setup函数的参数"></SetupProps>
    </div>
</template>

<script>
import SetupProps from '@/components/SetupProps.vue'
export default {
    name: 'App',
    components: {
        SetupProps
    },
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```

- 注意: setup函数中没有绑定this,因此无法通过`this.$props`的方式获取props

## 1.2 context

- context: 组件的上下文对象,包含了三个属性:
  - attrs: 父组件传递的所有非prop属性
  - slots: 父组件传递给子组件的插槽
  - emit: 组件内部发送事件时用到的emit函数
    - 和上文说的props一样,`setup()`函数中没有绑定this,因此无法通过`this.$emit()`的方式触发自定义事件

- `components/SetupContext.vue`:

```vue
<template>
    <div class="setup-props">
        SetupProps组件
        <h4>{{message}}</h4>
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'SetupContext',
    props: {
        message: {
            type: String,
            required: true,
        }
    },
    setup(props, context) {
        // props是第1个参数 不使用会报错 故打印
        console.log(props)

        // 父组件传递的非props属性
        console.log(context.attrs.id, context.attrs.class)

        // 父组件传递的插槽
        console.log(context.slots)

        // emit事件
        context.emit('update:message', '修改后的props值')
    },
    emits: {
        'update:message': null,
    }
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <SetupContext :message="message" id="code" class="why" @update:message="updateMessage">
            <template #content>
                <p>第一段内容</p>
                <p>第二段内容</p>
            </template>

            <template #footer>
                2025.04.12
            </template>
        </SetupContext>
    </div>
</template>

<script>
import SetupContext from "@/components/SetupContext.vue"
export default {
    name: 'App',
    components: {
        SetupContext
    },
    data() {
        return {
            message: 'setup函数的参数'
        }
    },
    methods: {
        updateMessage(val) {
            this.message = val
        }
    }
}
</script>

<style scoped>
.app {
    border: 1px solid #dddddd;
    margin: 4px;
}
</style>
```