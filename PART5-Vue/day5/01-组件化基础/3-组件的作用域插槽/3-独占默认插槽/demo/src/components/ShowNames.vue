<template>
    <div class="show-names">
        <!-- 默认插槽 -->
        <slot v-for="(player, index) in players" :player="player" :index="index"></slot>

        <!-- 具名插槽 -->
        <slot name="game"></slot>
    </div>
</template>

<script>
export default {
    name: "ShowNames",
    data() {
        return {
            players: [
                "kobe",
                "james",
                "curry",
            ]
        }
    },
}
</script>

<style scoped>
.show-names{
    height: 40px;
}
</style>