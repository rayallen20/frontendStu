# 2-mode属性指定过渡模式

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why">
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
            <h4 v-else style="border:1px solid #dddddd; width: 100px">你好,张三</h4>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to{
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 2s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```

- 当`<transition>`组件中有多个元素时,同时控制显隐,默认组件内的元素会同时执行过渡动画,此时会出现一个很诡异的现象:
  - 要显示的元素会先显示,再位移(因为有元素要被移除了)
- 此时需要使用`mode`属性来指定过渡模式
  - `in-out`: 要插入的元素先过渡,过渡完成后,要移除的元素再过渡
  - `out-in`: 要移除的元素先过渡,过渡完成后,要插入的元素再过渡

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" mode="out-in">
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
            <h4 v-else style="border:1px solid #dddddd; width: 100px">你好,张三</h4>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to{
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 2s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```

这个思路同样适用于动态组件:

- `HomeCpn.vue`:

```vue
<template>
    <div class="home-cpn">
        <h4>HomeCpn组件</h4>
        <p>HomeCpn组件中的内容</p>
    </div>
</template>

<script>
export default {
    name: 'HomeCpn',
}
</script>
```

- `AboutCpn.vue`:

```vue
<template>
    <div class="about-cpn">
        <h4>AboutCpn组件</h4>
        <p>AboutCpn组件中的内容</p>
    </div>
</template>

<script>
export default {
    name: 'AboutCpn',
}
</script>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" mode="out-in">
            <component :is="show ? 'HomeCpn' : 'AboutCpn'"></component>
        </transition>
    </div>
</template>

<script>
import HomeCpn from "@/components/HomeCpn.vue"
import AboutCpn from "@/components/AboutCpn.vue"

export default {
    name: 'App',
    components: {
        HomeCpn,
        AboutCpn,
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to{
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 2s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```