<template>
    <div>
        <div class="title">
            <h2>大标题</h2>
            <button @click="showForm()">编辑</button>
        </div>
        <div class="form" v-if="isShow">
            <input type="text" ref="textInput"/>
            <button>确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        showForm() {
            this.isShow = !this.isShow

            // 传入一个回调 当下一次DOM更新执行完成后执行
            this.$nextTick(() => {
                if (this.isShow) {
                    this.$refs.textInput.focus()
                }
            })
        }
    }
}
</script>

<style scoped>
.title {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title button {
    margin-left: 5px;
}
</style>
