# 3-案例-列表元素的交替过渡

## 1. 需求

- 展示搜索框和搜索结果列表
- 在搜索内容的过程中,为检索出来的内容和移除的内容添加动画效果

- 初步实现(不使用`gsap`库)

```vue
<template>
    <div class="app">
        <input v-model="keyword">
        <TransitionGroup
            name="why"
            tag="ul"
        >
            <li
                v-for="(name, index) in searchNames"
                :key="index"
            >
                {{name}}
            </li>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            names: ["abc", "cba", "nba", "why", "liLei", "hmm", "kobe", "james"],
            keyword: ''
        }
    },
    computed: {
        searchNames: {
            get() {
                return this.names.filter(name => name.indexOf(this.keyword) !== -1)
            }
        }
    }
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```

- 初步实现的问题:

1. 添加和移除元素的效果都太突兀了
2. 没有交替移除,而是所有元素都一起移除的

- 使用`gsap`库来实现更好的动画效果:

```vue
<template>
    <div class="app">
        <input v-model="keyword">
        <TransitionGroup
            name="why"
            tag="ul"
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
        >
            <!-- 这里绑定一个自定义属性,用于计算元素添加/移除时动效的延迟时长 -->
            <li
                v-for="(name, index) in searchNames"
                :key="index"
                :data-index="index"
            >
                {{name}}
            </li>
        </TransitionGroup>
    </div>
</template>

<script>
import gsap from "gsap"

export default {
    name: 'App',
    data() {
        return {
            names: ["abc", "cba", "nba", "why", "liLei", "hmm", "kobe", "james"],
            keyword: ''
        }
    },
    computed: {
        searchNames: {
            get() {
                return this.names.filter(name => name.indexOf(this.keyword) !== -1)
            }
        }
    },
    methods: {
        // 添加n个元素 则该方法调用n次
        beforeEnter(el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                height: "1.5em",
                // 这里的el.dataset.index 就是在li上绑定的自定义属性 data-index
                delay: el.dataset.index * 0.5,
                onComplete: done,
            })
        },
        leave(el, done) {
            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * 0.5,
                onComplete: done,
            })
        }
    }
}
</script>

<style scoped>
.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}
</style>
```

- 禁用CSS动画(`:css=false`)
- `beforeEnter()`: 设置`<li>`元素的在进入前的样式(全透明,高度为0)
- `enter()`: 设置`<li>`元素的在进入后的样式(不透明,高度为1.5em),并设置延迟时间(按照`index * 0.5`依次进入)
- `leave()`: 设置`<li>`元素的在离开后的样式(全透明,高度为0),并设置延迟时间(按照`index * 0.5`依次离开)