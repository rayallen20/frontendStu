import {useStore} from "vuex";

export function useActions(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const actions = mapFn(mapper)

    const normalizedMapper = Array.isArray(mapper)
        ? Object.fromEntries(mapper.map(key => [key, key]))
        : mapper

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        if (moduleName === null) {
            storeActions[key] = (payload) => store.dispatch(normalizedMapper[key], payload)
        } else {
            storeActions[key] = (payload) => store.dispatch(`${moduleName}/${normalizedMapper[key]}`, payload)
        }
    })

    return storeActions
}