# 3-具名插槽

## 1. 问题的产生

这里我们开始实现导航栏:

- 组件划分:
  - `App.vue`: 父组件
  - `NavBar.vue`: 子组件

- `NavBar.vue`:

```vue
<template>
    <div class="nav-bar">
        <div class="left">
            <!-- NavBar中定义了多个插槽 -->
            <slot></slot>
        </div>

        <div class="center">
            <!-- NavBar中定义了多个插槽 -->
            <slot></slot>
        </div>

        <div class="right">
            <!-- NavBar中定义了多个插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
    display: flex;
}
.left, .right, .center {
    height: 44px;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-content: center;
}
.center {
    flex: 1;
}
</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <NavBar>
            <button>左边的按钮</button>
            <h4>中间的标题</h4>
            <i>右边的元素</i>
        </NavBar>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>
```

- 问题: 3个插槽显示的内容都是一样的,而我们期望的是:
  - 把按钮插入到左侧插槽
  - 把标题插入到中间插槽
  - 把内容插入到右侧插槽

## 2. 具名插槽的使用

- 命名插槽:

- `NavBar.vue`:

```vue
<template>
    <div class="nav-bar">
        <div class="left">
            <!-- 命名插槽 -->
            <slot name="left"></slot>
        </div>

        <div class="center">
            <!-- 命名插槽 -->
            <slot name="center"></slot>
        </div>

        <div class="right">
            <!-- 命名插槽 -->
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
    display: flex;
}
.left, .right, .center {
    height: 44px;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-content: center;
}
.center {
    flex: 1;
}
</style>
```

- 指定插槽:

- `App.vue`:

```vue
<template>
    <div class="app">
        <NavBar>
            <!-- v-slot指令: 指定插槽名称 -->
            <template v-slot:left>
                <button>左边的按钮</button>
            </template>

            <template v-slot:center>
                <h4>中间的标题</h4>
            </template>

            <template v-slot:right>
                <i>右边的元素</i>
            </template>
        </NavBar>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>
```