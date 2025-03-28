<template>
    <div class="show-names">
        <!-- 定义在slot上的props 称为slot prop -->
        <slot name="player" v-for="(player, index) in players" :player="player" :index="index"></slot>
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