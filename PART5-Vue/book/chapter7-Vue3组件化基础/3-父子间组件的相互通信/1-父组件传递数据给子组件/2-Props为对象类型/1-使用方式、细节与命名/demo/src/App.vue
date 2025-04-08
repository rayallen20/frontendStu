<template>
    <ShowMessage :message-info="messageInfo"></ShowMessage>
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
            messageInfo : 'Hello Vue'
        }
    },
}
</script>