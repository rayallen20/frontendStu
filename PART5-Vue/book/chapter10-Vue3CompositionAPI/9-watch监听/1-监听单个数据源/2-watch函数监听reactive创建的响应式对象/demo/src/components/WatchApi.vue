<template>
    <div class="watch-api">
        <h4>{{info.name}}</h4>
        <button @click="changeName">修改数据</button>
    </div>
</template>

<script>
import {reactive, watch} from "vue";

export default {
    name: 'WatchApi',
    setup() {
        const info = reactive({name: 'coderWhy', age: 18})

        // getter()返回的是一个普通对象
        // 本例中return {...info}返回的是info的浅拷贝 也就是按照info当前的属性名和属性值创建的一个普通对象
        watch(() => {return {...info}}, (newValue, oldValue) => {
            console.log('newValue: ', newValue)     // 打印的是普通对象
            console.log('oldValue: ', oldValue)     // 打印的是普通对象
        })

        const changeName = () => {
            info.name = 'kobe'
        }

        return {
            info,
            changeName
        }
    },
}
</script>