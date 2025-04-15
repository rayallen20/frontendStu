import {computed, ref} from "vue";

function useCounter() {
    const counter = ref(100)

    const doubleCounter = computed({
        get() {
            return counter.value * 2
        }
    })

    const increment = () => counter.value++

    const decrement = () => counter.value--

    return {
        counter,
        doubleCounter,
        increment,
        decrement
    }
}

export {
    useCounter
}