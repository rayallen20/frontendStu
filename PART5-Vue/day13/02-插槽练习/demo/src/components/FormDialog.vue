<template>
    <div content="form-dialog">
        <DialogSlotCpn :showButton="true">
            <template #title>
                收货地址
            </template>

            <template #content>
                <label for="name">
                    活动名称: <input type="text" id="name">
                </label>

                <br>

                活动区域:
                <select>
                    <option>方元地区</option>
                    <option>全国地区</option>
                </select>
            </template>
        </DialogSlotCpn>
    </div>
</template>

<script>
import DialogSlotCpn from "./DialogSlotCpn"

export default {
    name: 'FormDialog',
    components: {
        DialogSlotCpn,
    }
}
</script>