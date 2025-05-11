import {useStore} from "vuex";
import {computed} from "vue";

export function useState(mapFn, mapper) {
    const store = useStore()

    const storeStateFns = mapFn(mapper)

    const storeState = {}

    Object.keys(storeStateFns).forEach(key => {
        const fn = storeStateFns[key]
        const boundFn = fn.bind({$store: store})
        storeState[key] = computed(boundFn)
    })

    return storeState
}