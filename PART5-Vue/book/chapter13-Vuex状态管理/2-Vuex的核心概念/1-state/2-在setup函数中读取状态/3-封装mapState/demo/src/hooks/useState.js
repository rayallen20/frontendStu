import {mapState, useStore} from "vuex"
import {computed} from "vue"

export function useState(mapper) {
    const store = useStore()

    const storeStateFns = mapState(mapper)

    const storeState = {}

    Object.keys(storeStateFns).forEach(key => {
        const fn = storeStateFns[key]
        // 注意: bind()方法对this的绑定修改不是原地的
        const boundFn = fn.bind({$store: store})
        storeState[key] = computed(boundFn)
    })

    return storeState
}