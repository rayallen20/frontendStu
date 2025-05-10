import {mapMutations, useStore} from "vuex";

export function useMutations(mapper) {
    const store = useStore()

    const mutations = mapMutations(mapper)

    const storeMutations = {}

    Object.keys(mutations).forEach((key) => {
        storeMutations[key] = (payload) => {
            store.commit(key, payload)
        }
    })

    return storeMutations
}