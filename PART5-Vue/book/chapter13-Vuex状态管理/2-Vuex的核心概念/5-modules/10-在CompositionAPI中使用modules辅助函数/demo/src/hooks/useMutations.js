import {useStore} from "vuex";

export function useMutations(mapFn, mapper, moduleName = null){
    const store = useStore()

    const mutations = mapFn(mapper)

    const normalizedMapper = Array.isArray(mapper)
        ? Object.fromEntries(mapper.map(key => [key, key]))
        : mapper

    const storeMutations = {}

    Object.keys(mutations).forEach(key => {
        if (moduleName === null) {
            storeMutations[key] = (payload) => store.commit(normalizedMapper[key], payload)
        } else {
            storeMutations[key] = (payload) => store.commit(`${moduleName}/${normalizedMapper[key]}`, payload)
        }
    })

    return storeMutations
}