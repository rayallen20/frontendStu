<template>
    <div class="app">
        <!-- 当子组件既有默认插槽 又有具名插槽时 必须使用template语法 -->
        <ShowNames>
            <template v-slot:default="slotProps">
                <span>{{'子组件中的数据: ' + slotProps.index}} - {{'子组件中的数据: ' + slotProps.player}}</span>
            </template>

            <template v-slot:game>
                <h4>湖人 VS 勇士</h4>
                <p>比赛战报内容</p>
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