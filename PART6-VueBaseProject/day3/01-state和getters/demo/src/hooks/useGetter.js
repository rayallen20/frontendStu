import {mapGetters, useStore} from "vuex";
import {computed} from "vue";

function useGetter(mapper) {
    const store = useStore()

    const getterFns = mapGetters(mapper)

    const storeGetters = {}

    Object.keys(getterFns).forEach(key => {
        const fn = getterFns[key]
        const boundFn = fn.bind({$store: store})
        storeGetters[key] = computed(boundFn)
    })

    return storeGetters
}

export {
    useGetter,
}