<template>
    <div class="watch-effect-api">
        <!-- step3. 元素挂载完成后 会自动赋值到ref对象的value属性值上 -->
        <h4 ref="titleRef">标题内容</h4>
    </div>
</template>

<script>
import {ref, watchPostEffect} from "vue";

export default {
    name: 'WatchEffectApiFlush',
    setup() {
        // step1. 定义一个ref对象 该对象用于存储DOM元素
        const titleRef = ref(null)

        // 当DOM更新完成后执行副作用函数
        watchPostEffect(() => {
            console.log(titleRef.value)
        })

        return {
            // step2. 返回该ref对象 供模板使用
            titleRef
        }
    },
}
</script>