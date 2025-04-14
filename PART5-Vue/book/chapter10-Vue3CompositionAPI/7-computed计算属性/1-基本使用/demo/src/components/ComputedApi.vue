<template>
    <div class="computed-api">
        <h4>{{fullName}}</h4>
        <button @click="changeName">修改firstName和lastName</button>
    </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
    name: "ComputedApi",
    setup() {
        const firstName = ref('kobe')
        const lastName = ref('bryant')

        // computed接收一个getter函数作为参数 根据该getter函数的返回值 返回一个不可变的ref对象
        const fullName = computed(() => firstName.value + ' ' + lastName.value)

        const changeName = () => {
            firstName.value = 'james'
            lastName.value = 'harden'
        }

        return {
            fullName,
            changeName,
        }
    },
}
</script>