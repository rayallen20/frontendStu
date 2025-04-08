# 1-基本使用

- 安装:

```
npm install animate.css
```

- 引入:

`main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'

createApp(App).mount('#app')
```

- 使用:

```vue
<template>
    <div class="app">
        <button @click="toggle">显示/隐藏</button>
        <transition name="why" appear>
            <h4 v-if="show" style="border:1px solid #dddddd; width: 100px">Hello World</h4>
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
/* 使用Animate.css的backLeft 从左边进入 */
.why-enter-active {
   animation: backInLeft 2s ease-in;
}

/* 使用Animate.css的backOutRight 从右边离开 */
.why-leave-active {
    animation: backOutLeft 2s ease-in;
}
</style>
```

实际上这个`backInLeft`动画的实现也并不复杂:

```css
@keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
```