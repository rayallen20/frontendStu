import {mapActions, useStore} from "vuex";

function useAction(mapper) {
    const store = useStore()

    const actions = mapActions(mapper)

    const storeActions = {}

    Object.keys(actions).forEach(key => {
        storeActions[key] = (payload) => {
            store.dispatch(key, payload)
        }
    })

    return storeActions
}

export {
    useAction
}