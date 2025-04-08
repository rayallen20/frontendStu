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