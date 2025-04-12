# 2-Mixin的合并规则

当Mixin对象中的选项和组件对象中的选项冲突时:

- data函数的返回值对象:
  - 合并Mixin对象和组件对象的data函数返回值对象
  - 若发生冲突,则保留组件对象的数据
- 生命周期钩子函数:
  - Mixin对象和组件对象的生命周期钩子函数会被合并成一个数组,且这些钩子函数都会执行
  - (这里会有先后顺序的问题,但我认为这不重要)
- 值为对象的选项(methods/components/directives)等:
  - 合并为同一个对象
  - 若二者有同名属性,则保留组件对象的属性

- `App.vue`:

```vue
<template>
    <div class="app">
        <h2>{{message}}</h2>
        <button @click="foo">点击调用组件对象中定义的foo方法</button>
    </div>
</template>

<script>
import demoMixin from '@/mixins/demoMixins'
export default {
    name: 'App',
    mixins: [
        demoMixin
    ],
    data() {
        return {
            // message和Mixin中的message属性同名 最终使用该组件的message
            message: 'Hello App',
            title: 'Hello World',
        }
    },
    methods: {
        // foo方法和Mixin中的foo同名 最终使用该组件的foo
        foo() {
            console.log('App foo')
        }
    },
    // 生命周期钩子函数和Mixin中的created同名 最终二者会被合并到一个数组中 都会被调用
    created() {
        console.log('App created')
    }
}
</script>
```