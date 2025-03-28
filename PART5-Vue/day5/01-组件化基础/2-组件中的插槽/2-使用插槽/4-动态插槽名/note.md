# 4-动态插槽名

- 所谓动态插槽名,就是指:
  - step1. 在子组件中使用props获取插槽名
  - step2. 在子组件中使用`v-bind`指令绑定props中的属性名(此时对于子组件来说,这个属性名就是一个变量,该变量定义了插槽名)
  - step3. 在父组件中定义props的具体值并传递这些props给子组件
  - step4. 父组件的模板中使用`v-slot`指令指定插槽名

- `NavBar.vue`:

```vue
<template>
    <div class="nav-bar">
        <div class="left">
            <!-- 绑定来自props的属性值作为插槽名 -->
            <slot :name="leftSlotName"></slot>
        </div>

        <div class="center">
            <!-- 绑定来自props的属性值作为插槽名 -->
            <slot :name="centerSlotName"></slot>
        </div>

        <div class="right">
            <!-- 绑定来自props的属性值作为插槽名 -->
            <slot :name="rightSlotName"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        leftSlotName: {
            type: String,
            required: true,
            default: 'left'
        },
        centerSlotName: {
            type: String,
            required: true,
            default: 'center'
        },
        rightSlotName: {
            type: String,
            required: true,
            default: 'right'
        }
    },
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
        <NavBar :left-slot-name="leftSlotName" :center-slot-name="centerSlotName" :right-slot-name="rightSlotName">
            <template #[leftSlotName]>
                <button>左边的按钮</button>
            </template>

            <template #[centerSlotName]>
                <h4>中间的标题</h4>
            </template>

            <template #[rightSlotName]>
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
    },
    data() {
        return {
            leftSlotName: 'leftSlot',
            centerSlotName: 'centerSlot',
            rightSlotName: 'rightSlot'
        }
    },
}
</script>
```