import {mapActions, useStore} from "vuex"

export function useActions(mapper) {
    const store = useStore()

    const actions = mapActions(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        storeActions[key] = (payload) => store.dispatch(key, payload)
    })

    return storeActions
}