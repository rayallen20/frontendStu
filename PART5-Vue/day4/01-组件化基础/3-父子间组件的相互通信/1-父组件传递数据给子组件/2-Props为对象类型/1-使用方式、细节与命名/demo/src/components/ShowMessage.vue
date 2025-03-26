<template>
    <div class="show-message">
        <!--
        即使Props的命名风格为kebab-case
        模板中的Props的命名风格也要使用camelCase
        -->
        <h4>{{messageInfo}}</h4>
    </div>
</template>

<script>
export default {
    name: 'ShowMessage',
    props: {
        // kebab-case (不推荐)
        'message-info': {
            type: String,
        }
    }
}
</script>