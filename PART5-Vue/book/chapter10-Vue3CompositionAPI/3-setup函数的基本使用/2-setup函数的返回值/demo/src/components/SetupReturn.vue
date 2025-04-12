<template>
    <div class="setup-return">
        <h4>当前计数: {{counter}}</h4>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    setup() {
        let counter = 100
        const increment = () => {
            counter++
            console.log(counter)
        }

        return {
            counter,
            increment
        }
    }
}
</script>