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