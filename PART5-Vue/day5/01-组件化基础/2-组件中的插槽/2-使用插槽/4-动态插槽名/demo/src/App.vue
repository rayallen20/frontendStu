<template>
    <div class="app">
        <NavBar :left-slot-name="leftSlotName" :center-slot-name="centerSlotName" :right-slot-name="rightSlotName">
            <template #[leftSlotName]>
                <button>左边的按钮</button>
            </template>

            <template #[centerSlotName]>
                <h4>中间的标题</h4>
            </template>

            <template #[rightSlotName]>
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
    },
    data() {
        return {
            leftSlotName: 'leftSlot',
            centerSlotName: 'centerSlot',
            rightSlotName: 'rightSlot'
        }
    },
}
</script>