<template>
    <p :class="$style.red">This is should be red</p>
</template>

<script>
export default {
    name: 'Hello'
}
</script>

<style module>
.red {
    color: red;
}
</style>