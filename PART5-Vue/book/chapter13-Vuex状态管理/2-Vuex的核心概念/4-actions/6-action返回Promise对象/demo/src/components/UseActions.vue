<template>
    <div class="use-actions">
        <h4>uuid: {{$store.state.uuid}}</h4>
    </div>
</template>

<script setup>
import {onMounted} from "vue"
import {useActions} from "@/hooks"

// eslint-disable-next-line
defineOptions({
    name: 'UseActions'
})

onMounted(() => {
    const {getUUIDAction} = useActions([
        'getUUIDAction'
    ])

    const promise = getUUIDAction()

    promise.
    then(res => console.log(res)).
    catch(err => console.error(err))
})
</script>