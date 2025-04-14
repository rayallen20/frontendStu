<template>
    <div class="custom-ref-api">
        <input v-model="message">
        <h4>{{message}}</h4>
    </div>
</template>

<script>
import useDebouncedRef from "@/hooks/useDebounceRef";

export default {
    name: 'CustomRefApi',
    setup() {
        const message = useDebouncedRef('Hello World', 1000)

        return {
            message
        }
    }
}
</script>