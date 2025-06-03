import {useStore} from "vuex"
import {computed} from "vue";

function useState(mapFn, mapper) {
    const store = useStore()

    const storeStateFns = mapFn(mapper)

    const storeState = {}

    Object.keys(storeStateFns).forEach((key) => {
        const fn = storeStateFns[key].bind({$store: store})
        storeState[key] = computed(fn)
    })

    return storeState
}

export {
    useState,
}