<template>
    <div class="app">
        <ShowNames>
            <!--
            v-slot:player="slotProps" 可以在父组件中访问到插槽的属性集合
            可以简写为 #player="slotProps"
             -->
            <template #player="slotProps">
                <span>{{'子组件中的数据: ' + slotProps.index}} - {{'子组件中的数据: ' + slotProps.player}}</span>
            </template>
        </ShowNames>
    </div>
</template>

<script>
import ShowNames from "./components/ShowNames.vue"

export default {
    name: "App",
    components: {
        ShowNames
    },
}
</script>

<style scoped>
span{
    border: 1px solid #999;
    padding: 4px;
    margin: 4px;
}
</style>