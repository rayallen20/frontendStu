import {mapMutations, useStore} from "vuex";

function useMutation(mapper) {
    const store = useStore()

    const mutations = mapMutations(mapper)

    const storeMutations = {}

    Object.keys(mutations).forEach(key => {
        storeMutations[key] = (payload) => {
            store.commit(key, payload)
        }
    })

    return storeMutations
}

export {
    useMutation
}