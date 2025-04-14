<template>
    <div class="watch-api">
        <h4 v-for="(name, index) in names" :key="index">{{name}}</h4>
        <button @click="changeNames">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApiDeep',
    setup() {
        const names = reactive(['abc', 'cba', 'nba'])

        // 解决方法: 监听响应式数组的浅拷贝
        watch(() => [...names], (newValue, oldValue) => {
            console.log(newValue)                   // Array(4)
            console.log(oldValue)                   // Array(3)
            console.log(newValue === oldValue)      // false
        }, {
            deep: true
        })

        const changeNames = () => {
            names.push('kobe')
        }

        return {
            names,
            changeNames
        }
    },
}
</script>