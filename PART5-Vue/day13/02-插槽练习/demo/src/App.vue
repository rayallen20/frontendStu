<template>
    <div class="app">
        <TextDialog></TextDialog>

        <FormDialog></FormDialog>

        <TableDialog></TableDialog>
    </div>
</template>

<script>
import TextDialog from "@/components/TextDialog.vue"
import FormDialog from "@/components/FormDialog.vue"
import TableDialog from "@/components/TableDialog.vue"

export default {
    name: 'App',
    components: {
        TextDialog,
        FormDialog,
        TableDialog,
    }
}
</script>

<style>
body {
    background-color: #b3b3b3;
}
</style>