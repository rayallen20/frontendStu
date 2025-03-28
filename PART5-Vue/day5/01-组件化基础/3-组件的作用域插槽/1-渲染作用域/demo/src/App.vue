<template>
    <div class="app">
        <ChildCpn>
            <template v-slot:row>
                <!-- 在子组件的插槽中 使用子组件的数据 -->
                <button>{{title}}</button>
            </template>
        </ChildCpn>
    </div>
</template>

<script>
import ChildCpn from "./components/ChildCpn.vue"

export default {
    name: 'App',
    components: {
        ChildCpn
    }
}
</script>