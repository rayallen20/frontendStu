<template>
    <!--方式1: 直接传递字符串-->
    <!--<ShowMessage title="传递字符串的标题" content="传递标题的内容"></ShowMessage>-->

    <!--方式2: 绑定字符串类型的变量-->
    <!--<ShowMessage :title="title" :content="content"></ShowMessage>-->

    <!--方式3: 绑定对象中字符串类型的属性-->
    <!--<ShowMessage :title="message.title" :content="message.content"></ShowMessage>-->

    <!--方式4: 直接绑定对象-->
    <ShowMessage :="message"></ShowMessage>
</template>

<script>
import ShowMessage from "./components/ShowMessage.vue"

export default {
    name: 'App',
    components: {
        ShowMessage,
    },
    data() {
        return {
            title: '我是标题title',
            content: '我是内容content',
            message: {
                title: '我是标题message.title',
                content: '我是内容message.content',
            }
        }
    },
}
</script>