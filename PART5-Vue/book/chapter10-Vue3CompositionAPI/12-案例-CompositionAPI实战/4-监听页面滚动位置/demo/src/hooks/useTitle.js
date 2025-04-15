import {ref, watch} from "vue";

function useTitle(title = 'defaultTitle') {
    const titleRef = ref(title)

    watch(titleRef, (newValue) => {
        document.title = newValue
    }, {
        immediate: true,
    })

    // 暴露响应式数据给客户端代码 当客户端代码修改响应式数据时
    // 由于监听了该响应式数据 因此当客户端代码修改响应式数据时 本函数会自动修改标题内容
    return titleRef
}

export {
    useTitle
}