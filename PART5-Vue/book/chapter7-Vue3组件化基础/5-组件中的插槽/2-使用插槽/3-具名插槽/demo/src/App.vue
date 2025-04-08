<template>
    <div class="app">
        <NavBar>
            <!-- v-slot指令: 指定插槽名称 -->
            <template v-slot:left>
                <button>左边的按钮</button>
            </template>

            <!-- v-slot指令的简写: # -->
            <template #center>
                <h4>中间的标题</h4>
            </template>

            <template #right>
                <i>右边的元素</i>
            </template>
        </NavBar>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>