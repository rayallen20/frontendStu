<template>
    <div class="text-dialog">
        <DialogSlotCpn :showButton="true">
            <template #title>提示</template>
            <template #content>这是一段信息</template>
        </DialogSlotCpn>
    </div>
</template>

<script>
import DialogSlotCpn from "@/components/DialogSlotCpn.vue"
export default {
    name: 'TextDialog',
    components: {
        DialogSlotCpn,
    }
}
</script>