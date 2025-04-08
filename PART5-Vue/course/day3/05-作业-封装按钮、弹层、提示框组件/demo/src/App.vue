<template>
    <div class="app">
        <h4>尺寸</h4>
        <Component
            :is="buttonCpnName"
            v-for="(sizeOption, index) in sizeOptions"
            :key="index"
            v-model:content="sizeOptions[index].content"
            v-model:type="sizeOptions[index].type"
            v-model:size="sizeOptions[index].size"
        >
        </Component>

        <Component
            :is="buttonCpnName"
            v-model:content="modalBtnOption.content"
            v-model:type="modalBtnOption.type"
            v-model:size="modalBtnOption.size"
            @click="toggleModal"
        >
        </Component>

        <ModalCpn
            v-model:show="showModal"
            @update:show="hiddenModal"
        >
        </ModalCpn>
    </div>
</template>

<script>
import ButtonCpn from "@/components/ButtonCpn.vue"
import ModalCpn from "@/components/ModalCpn.vue";

export default {
    name: 'App',
    data() {
        return {
            sizeOptions: [
                {
                    content: '小按钮',
                    type: 'primary',
                    size: 'small',
                },
                {
                    content: '中按钮',
                    type: 'success',
                    size: 'medium',
                },
                {
                    content: '大按钮',
                    type: 'primary',
                    size: 'large',
                },
            ],
            buttonCpnName: 'ButtonCpn',
            modalBtnOption: {
                content: '弹层按钮',
                type: 'primary',
                size: 'medium',
            },
            showModal: false,
        }
    },
    components: {
        ModalCpn,
        ButtonCpn,
    },
    methods: {
        toggleModal() {
            console.log(123)
            this.showModal = !this.showModal
        },
        hiddenModal(val) {
            this.showModal = val
        }
    }
}
</script>