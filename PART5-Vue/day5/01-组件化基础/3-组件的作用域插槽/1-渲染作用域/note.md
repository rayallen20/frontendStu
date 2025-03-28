# 1-渲染作用域

Vue3中,存在渲染作用域的概念:

- 父级模板中的所有内容,都在父级作用域中进行编译
- 子级模板中的所有内容,都在子级作用域中进行编译
- 因此,父级模板中的内容,无法访问子级作用域中的数据

例:

- 父组件: `App.vue`(在插槽中使用子组件的数据)
- 子组件: `ChildCpn.vue`(定义插槽)

- `ChildCpn.vue`:

```vue
<template>
    <div class="child-cpn">
        <h4>{{title}}</h4>
        <slot name="row"></slot>
    </div>
</template>

<script>
export default {
    name: 'ChildCpn',
    data() {
        return {
            title: '子组件中定义的标题'
        }
    },
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <ChildCpn>
            <template v-slot:row>
                <!-- 在子组件的插槽中 使用子组件的数据 -->
                <button>{{title}}</button>
            </template>
        </ChildCpn>
    </div>
</template>

<script>
import ChildCpn from "./components/ChildCpn.vue"

export default {
    name: 'App',
    components: {
        ChildCpn
    }
}
</script>
```

报错: `Property "title" was accessed during render but is not defined on instance. `