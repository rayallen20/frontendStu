<template>
    <div class="app">
        <h4>App组件的formData.name:{{formData.name}}</h4>
        <h4>App组件的formData.title:{{formData.title}}</h4>
        <!--二者等价-->
        <HyForm v-model:model-value="formData"></HyForm>
        <!--
        <HyForm
        :model-value="formData"
        @update:model-value="updateModelValue"
        ></HyForm>
        -->
    </div>
</template>

<script>
import HyForm from "@/components/HyForm.vue"

export default {
    name: 'App',
    data() {
        return {
            formData: {
                name: 'coder',
                title: 'why',
            }
        }
    },
    components: {
        HyForm,
    },
    methods: {
        updateModelValue(value) {
            this.formData.name = value.name
            this.formData.title = value.title
        }
    }
}
</script>