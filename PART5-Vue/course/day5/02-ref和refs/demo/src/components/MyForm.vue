<template>
    <div>
        <h3>Form组件需求：点击按钮能够重置表单</h3>
        用户名：<input type="text" v-model="uname" ref="nameInput" /><br />
        手机号：<input type="text" v-model="phone" ref="phoneInput" /><br />
    </div>
</template>

<script>
export default {
    data () {
        return {
            uname: 'zhangsan',
            phone: '13266668888'
        }
    },
    methods: {
        resetForm() {
            this.uname = ''
            this.phone = ''
        }
    }
}
</script>

<style lang="css" scoped></style>
