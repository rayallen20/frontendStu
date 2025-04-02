<template>
    <div class="modal-cpn" v-if="show">
        <div class="modal-content">
            <p>模态框标题</p>
            <div class="btn-wrap">
                <ButtonCpn
                    content="确定"
                    type="primary"
                    size="medium"
                    @click="hidden"
                >
                </ButtonCpn>

                <ButtonCpn
                    content="取消"
                    type="success"
                    size="medium"
                    @click="hidden"
                ></ButtonCpn>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonCpn from "@/components/ButtonCpn.vue"

export default {
    name: "ModalCpn",
    components: {
        ButtonCpn
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    emits: {
        'update:show': null,
    },
    methods: {
        hidden() {
            this.$emit('update:show', false)
        }
    },
}
</script>

<style scoped>
/* 遮罩层样式 */
.modal-cpn {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 模态框居中显示 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fefefe;
    /* %: 上下外边距为父元素高度的百分比 */
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888888;
    width: 80%;
    border-radius: 8px;
}

.btn-wrap {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>