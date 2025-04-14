# 5-customRef

- `customRef()`: 创建一个自定义的ref,显式声明对其依赖追踪和更新触发的控制方式
- 该函数接收一个工厂函数作为参数
  - 该工厂函数接收2个参数:
    - track: 依赖追踪函数
      - 所谓收集依赖,指的是将当前访问该`ref`的组件或函数与该`ref`的值建立依赖关系
      - 当`track()`被调用时,Vue会记录当前的依赖关系,以便在`ref`的值发生变化时,通过调用`trigger()`来通知这些依赖进行更新,从而实现响应式更新
    - trigger: 更新触发函数
      - 当`ref`值发生变化时,调用`trigger()`会通知所有依赖重新运行或重新渲染
  - 该工厂函数返回一个带有`get`和`set`方法的对象
    - 在`get()`方法中,需要调用`track()`来收集依赖
    - 在`set()`方法中,需要调用`trigger()`来触发依赖该`ref`的组件或函数进行更新

- `hooks/useDebounceRef.js`:

```javascript
import {customRef} from "vue";

// 自定义防抖ref 即:延迟delay后才更新值的ref
export default function useDebouncedRef(value, delay= 300) {
    let timer = null

    return customRef((track, trigger) => {
        return {
            get() {
                // 依赖收集
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    // 触发更新
                    trigger()
                }, delay)
            }
        }
    })
}
```

- `components/CustomRefApi.vue`:

```vue
<template>
    <div class="custom-ref-api">
        <input v-model="message">
        <h4>{{message}}</h4>
    </div>
</template>

<script>
import useDebouncedRef from "@/hooks/useDebounceRef";

export default {
    name: 'CustomRefApi',
    setup() {
        const message = useDebouncedRef('Hello World', 1000)

        return {
            message
        }
    }
}
</script>
```