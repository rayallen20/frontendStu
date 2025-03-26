<template>
    <ul class="tab-control">
        <li v-for="(category, index) in categories" :key="index">
            <a href="javascript:" @click="clickLink(category, index)" :class="{active: currentIndex === index}">{{category}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        categories: {
            type: Array,
            required: true,
            default() {
                return ['衣服', '鞋子', '裤子']
            },
        }
    },
    inheritAttrs: false,
    data() {
        return {
            beChosen: '',
            currentIndex: 0,
        }
    },
    emits: {
        choose: null,
    },
    methods: {
        clickLink(targetCategory, index) {
            this.currentIndex = index
            this.choose(targetCategory)
        },

        choose(targetCategory) {
            this.beChosen = targetCategory
            this.$emit('choose', this.beChosen)
            this.beChosen = ''
        },
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        justify-content: flex-start;
    }

    .tab-control li {
        list-style: none;
        padding: 10px;
        border: 1px solid #ccc;
        margin-right: 5px;
    }

    .tab-control a {
        text-decoration: none;
        color: inherit;
    }

    .tab-control a.active {
        color: #409eff;
    }
</style>