<template>
    <table class="my-table">
        <thead>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年纪</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in data" :key="row.id">
            <td>{{row.id}}</td>
            <td>{{row.name}}</td>
            <td>{{row.age}}</td>
            <td>
                <slot name="operation" :id="row.id"></slot>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.my-table {
    width: 450px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 24px;
    margin: 30px auto;
}
.my-table thead {
    background-color: #1f74ff;
    color: #fff;
}
.my-table thead th {
    font-weight: normal;
}
.my-table thead tr {
    line-height: 40px;
}
.my-table th,
.my-table td {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.my-table td:last-child {
    border-right: none;
}
.my-table tr:last-child td {
    border-bottom: none;
}
.my-table button {
    width: 65px;
    height: 35px;
    font-size: 18px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: #ffffff;
    margin-left: 5px;
}
</style>
