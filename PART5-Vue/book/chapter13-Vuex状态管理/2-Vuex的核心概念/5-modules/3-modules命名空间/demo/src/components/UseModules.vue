<template>
    <div class="use-modules">
        <!-- 访问home模块的state -->
        <h4>home state: {{$store.state.home.homeCounter}}</h4>
        <!--
            访问home模块的getter
            对于添加了命名空间的子模块,在访问getter时需要添加`模块名/`作为前缀
        -->
        <h4>home getter: doubleHomeCounter :{{$store.getters['home/doubleHomeCounter']}}</h4>
        <h4>home getter: homeCounterAddRootCounter :{{$store.getters['home/homeCounterAddRootCounter']}}</h4>
        <button @click="incrementAction">+1</button>
    </div>
</template>

<script setup>
import {useStore} from "vuex"

// eslint-disable-next-line
defineOptions({
    name: 'UseModules'
})

const store = useStore()

const incrementAction = () => {
    // 分发home模块的action
    // 同理,对于添加了命名空间的子模块,在访问action时需要添加`模块名/`作为前缀
    store.dispatch('home/incrementAction')
}
</script>