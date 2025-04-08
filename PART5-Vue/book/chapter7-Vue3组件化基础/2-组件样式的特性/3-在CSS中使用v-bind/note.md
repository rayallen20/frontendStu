# 3-在CSS中使用v-bind

- `v-bind()`函数: 可以在CSS中绑定来自组件的数据(注意这里的`v-bind()`是函数,不是之前学过的指令)

```vue
<template>
    <p class="red">This is should be red</p>
    <p class="green">This is should be green</p>
    <p class="yellow">This is should be yellow</p>
</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
            color1: 'red',
            color2: 'green'
        }
    },
    computed: {
        color3: {
            get() {
                return 'yellow'
            },
        }
    },
}
</script>

<style>
.red {
    /* 动态绑定样式 也属于组件的局部样式 */
    color: v-bind(color1);
}

.green {
    color: v-bind(color2);
}

.yellow {
    color: v-bind(color3);
}
</style>
```
