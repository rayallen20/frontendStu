<template>
    <div class="table-dialog">
        <DialogSlotCpn :showButton="false">
            <template #title>
                收货地址
            </template>

            <template #content>
                <table>
                    <thead>
                        <tr>
                            <th>日期</th>
                            <th>姓名</th>
                            <th>地址</th>
                        </tr>
                    </thead>

                    <tr>
                        <td>2023-10-01</td>
                        <td>张三</td>
                        <td>北京市海淀区</td>
                    </tr>
                </table>
            </template>
        </DialogSlotCpn>
    </div>
</template>

<script>
import DialogSlotCpn from "@/components/DialogSlotCpn.vue"

export default {
    name: 'TableDialog',
    components: {
        DialogSlotCpn,
    }
}
</script>