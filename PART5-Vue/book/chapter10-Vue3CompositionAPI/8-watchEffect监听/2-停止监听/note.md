# 2-停止监听

- `watchEffect()`函数的返回值是一个用来停止该副作用的函数
- 例: 当`age`大于等于20时,停止监听

```vue
<template>
    <div class="watch-effect-api">
        <h4>{{age}}</h4>
        <button @click="changeAge">age+1</button>
    </div>
</template>

<script>
import {ref, watchEffect} from "vue";

export default {
    name: 'WatchEffectApi',
    setup() {
        const age = ref(18)

        const stop = watchEffect(() => {
            if (age.value >= 20) {
                stop()
                console.log('stop watchEffect')
                return
            }

            console.log('age:', age.value)
        })

        const changeAge = () => {
            age.value++
        }

        return {
            age,
            changeAge,
        }
    },
}
</script>
```

- 在Vue3.5+中,可以暂停/恢复/停止监听器

```vue
const { stop, pause, resume } = watchEffect(() => {})

// 暂停监听器
pause()

// 稍后恢复
resume()

// 停止
stop()
```