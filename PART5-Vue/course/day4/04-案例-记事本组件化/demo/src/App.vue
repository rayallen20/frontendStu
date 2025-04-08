<template>
    <section id="app">
        <!-- 输入框 -->
        <NoteHeader></NoteHeader>

        <!-- 列表区域 -->
        <NoteList></NoteList>

        <!-- 统计和清空 -->
        <NoteFooter></NoteFooter>
    </section>
</template>

<script>
import NoteHeader from './components/NoteHeader.vue'
import NoteList from './components/NoteList.vue'
import NoteFooter from './components/NoteFooter.vue'

export default {
    name: 'App',
    components: {
        NoteHeader,
        NoteList,
        NoteFooter,
    },
}
</script>

<style scoped>
:focus {
    outline: 0;
}

.hidden {
    display: none;
}

#app {
    background: #fff;
    margin: 180px 0 40px 0;
    padding: 15px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>