import {mapActions, useStore} from "vuex";

export function useActions(mapper) {
    const store = useStore()

    const actions = mapActions(mapper)

    const normalizedMapper = Array.isArray(mapper)
        ? Object.fromEntries(mapper.map(key => [key, key]))
        : mapper

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        storeActions[key] = (payload) => store.dispatch(normalizedMapper[key], payload)
    })

    return storeActions
}