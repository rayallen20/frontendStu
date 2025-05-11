import {useStore} from "vuex";

export function useMutations(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const actions = mapFn(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        if (moduleName === null) {
            storeActions[key] = (payload) => store.commit(key, payload)
        } else {
            storeActions[key] = (payload) => store.commit(`${moduleName}/${key}`, payload)
        }
    })

    return storeActions
}