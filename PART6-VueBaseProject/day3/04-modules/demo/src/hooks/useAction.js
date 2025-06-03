import {useStore} from "vuex";

function useAction(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const actions = mapFn(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        storeActions[key] = (payload) => {
            if (moduleName === null) {
                store.dispatch(key, payload)
            } else {
                store.dispatch(`${moduleName}/${key}`, payload)
            }
        }
    })

    return storeActions
}

export {
    useAction
}