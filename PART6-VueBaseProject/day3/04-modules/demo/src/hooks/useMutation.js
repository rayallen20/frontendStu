import {useStore} from "vuex";

function useMutation(mapFn, mapper, moduleName = null) {
    const store = useStore()

    const mutations = mapFn(mapper)

    const storeMutations = {}

    Object.keys(mutations).forEach(key => {
        storeMutations[key] = (payload) => {
            if (moduleName === null) {
                store.commit(key, payload)
            } else {
                store.commit(`${moduleName}/${key}`, payload)
            }
        }
    })

    return storeMutations
}

export {
    useMutation
}