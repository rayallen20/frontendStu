<template>
    <div class="watch-api">
        <h4>{{info.friend.name}}</h4>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue"
import cloneDeep from "lodash/cloneDeep"

export default {
    name: 'WatchApiDeep',
    setup() {
        const info = reactive({
            name: 'coderWhy',
            age: 18,
            friend: {
                name: 'kobe',
            }
        })

        // 使用深拷贝创建一个新的对象
        watch(() => (cloneDeep(info)), (newValue, oldValue) => {
            console.log(newValue)                   // {name: 'coderWhy', age: 18, friend: {name: 'james'}}
            console.log(oldValue)                   // {name: 'coderWhy', age: 18, friend: {name: 'kobe'}}
            console.log(newValue === oldValue)      // false
        }, {
            deep: true
        })

        const changeData = () => {
            info.friend.name = 'james'
        }

        return {
            info,
            changeData
        }
    },
}
</script>