import {useStore} from "vuex";
import {computed} from "vue";

export function useGetters(mapFn, mapper) {
    const store = useStore()

    const storeGettersFns = mapFn(mapper)

    const storeGetters = {}

    Object.keys(storeGettersFns).forEach(key => {
        const fn = storeGettersFns[key]
        const boundFn = fn.bind({$store: store})
        storeGetters[key] = computed(boundFn)
    })

    return storeGetters
}