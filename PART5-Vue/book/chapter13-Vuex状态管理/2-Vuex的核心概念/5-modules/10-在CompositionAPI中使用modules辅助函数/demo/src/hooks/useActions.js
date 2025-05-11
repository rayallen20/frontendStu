import {useStore} from "vuex";

// moduleName: null表示根模块 非空表示子模块
export function useActions(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const actions = mapFn(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        if (moduleName === null) {
            storeActions[key] = (payload) => store.dispatch(key, payload)
        } else {
            storeActions[key] = (payload) => store.dispatch(`${moduleName}/${key}`, payload)
        }
    })

    return storeActions
}