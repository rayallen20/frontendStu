<template>
    <div class="watch-api">
        <h4>{{info.name}}-{{name}}</h4>
        <h4>{{age}}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import {reactive, ref, watch} from "vue";

export default {
    name: 'WatchApiMulti',
    setup() {
        const info = reactive({name: 'coderWhy', age: 18})
        const name = ref('why')
        const age = ref(20)

        watch([
            // getter函数形式
            () => ({...info}),
            // ref形式
            name,
            age,
        ], ([newInfo, newName, newAge], [oldInfo, oldName, oldAge]) => {
            console.log(newInfo)
            console.log(oldInfo)

            console.log('-------------------------------------------')

            console.log(newName)        // 解包后的value
            console.log(oldName)        // 解包后的value

            console.log('-------------------------------------------')

            console.log(newAge)         // 解包后的value
            console.log(oldAge)         // 解包后的value
        })

        const changeData = () => {
            info.name = 'kobe'
            name.value = 'jack'
            age.value = 30
        }

        return {
            info,
            name,
            age,
            changeData
        }
    },
}
</script>