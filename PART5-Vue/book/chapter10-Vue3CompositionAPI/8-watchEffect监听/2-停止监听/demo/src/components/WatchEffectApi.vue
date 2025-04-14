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