<template>
    <TabControl :categories="categories" @choose="changeCategory"></TabControl>
    <h4>{{chooseCategory}}页面</h4>
</template>

<script>
import TabControl from './components/TabControl.vue'
export default {
    name: 'App',
    components: {
        TabControl
    },
    data() {
        return {
            categories: [
                '胸甲', '腿甲', '武器'
            ],
            chooseCategory: '胸甲'
        }
    },
    methods: {
        changeCategory(targetCategory) {
            this.chooseCategory = targetCategory
        }
    }
}
</script>