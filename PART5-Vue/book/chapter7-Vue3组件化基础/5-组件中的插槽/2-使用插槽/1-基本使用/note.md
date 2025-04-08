# 1-基本使用

- `App.vue`: 父组件,使用`MySlotCpn`组件,并传入插槽内容给子组件
- `MySlotCpn.vue`: 子组件,定义插槽
- `MyButton.vue`: 作为插槽的内容,被`App.vue`插入到`MySlotCpn.vue`中

- `MyButton.vue`:

```vue
<template>
    <div class="my-button">
        <button>custom button</button>
    </div>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped>
.my-button {
    margin: 2px;
}
</style>
```

- `MySlotCpn.vue`:

```vue
<template>
    <div class="my-slot-cpn">
        <div class="header">header</div>
        <!--中间要显示的内容不确定 使用插槽占位-->
        <!-- <slot></slot> 是 <slot name="default"></slot>的缩写 -->
        <slot></slot>
        <div class="footer">footer</div>
    </div>
</template>

<script>
export default {
    name: 'MySlotCpn'
}
</script>

<style scoped>
.my-slot-cpn {
    border: 1px solid #999;
    margin: 10px 5px;
}
</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <!-- 1. 默认不插入内容 -->
        <MySlotCpn></MySlotCpn>

        <!-- 2. 插入一个元素 -->
        <MySlotCpn>
            <button>我是按钮</button>
        </MySlotCpn>

        <!-- 3. 插入一段文本 -->
        <MySlotCpn>
            我是普通文本
        </MySlotCpn>

        <!-- 4. 插入一个组件 -->
        <MySlotCpn>
            <MyButton></MyButton>
        </MySlotCpn>

        <!-- 5. 插入多个内容(可以是组件/DOM/文本等) -->
        <MySlotCpn>
            <span>我是span</span>
            <button>我是button</button>
            <MyButton></MyButton>
            我是文本
        </MySlotCpn>
    </div>
</template>

<script>
import MySlotCpn from "./components/MySlotCpn.vue"
import MyButton from "./components/MyButton.vue"

export default {
    name: 'App',
    components: {
        MySlotCpn,
        MyButton
    }
}
</script>
```

- 总结: 插槽仅仅是一个**占位符**,可以在1个插槽内插入多个内容(组件/DOM/文本等)