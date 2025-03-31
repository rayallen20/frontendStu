<template>
    <div>
        <input placeholder="输入关键字搜索" v-model.lazy="keyword">
        <table class="my-table">
            <thead>
            <tr>
                <th>就诊日期</th>
                <th>医生姓名</th>
                <th>诊断结果</th>
                <th>处方信息</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody v-if="!isSearching">
                <tr v-for="(record, index) in records" :key="index">
                    <td>{{record.date}}</td>
                    <td>{{record.doctor}}</td>
                    <td>{{record.diagnosis}}</td>
                    <td>{{record.prescription}}</td>
                    <td @click="toggleDetail(record)">详情</td>
                </tr>
            </tbody>

            <tbody v-else>
                <tr v-for="(record, index) in searchResults" :key="index">
                    <td>{{record.date}}</td>
                    <td>{{record.doctor}}</td>
                    <td>{{record.diagnosis}}</td>
                    <td>{{record.prescription}}</td>
                    <td @click="toggleDetail(record)">详情</td>
                </tr>
            </tbody>
        </table>

        <RecordDetail :visible="visible" :record="targetRecord" @update:visible="closeDetail"></RecordDetail>
    </div>
</template>

<script>
import RecordDetail from "@/components/RecordDetail.vue"

export default {
    name: 'App',
    components: {RecordDetail},
    data() {
        return {
            visible: false,
            records: [
                {
                    date: '2022-01-01',
                    doctor: '张三',
                    diagnosis: '感冒',
                    prescription: '感冒药',
                },
                {
                    date: '2022-02-01',
                    doctor: '李四',
                    diagnosis: '头疼',
                    prescription: '止疼药',
                },
                {
                    date: '2022-03-01',
                    doctor: '王五',
                    diagnosis: '腰痛',
                    prescription: '止痛贴',
                }
            ],
            targetRecord: {},
            isSearching: false,
            keyword: '',
            searchResults: [],
        }
    },
    methods: {
        toggleDetail(record) {
            this.targetRecord = record
            this.visible = !this.visible
        },
        closeDetail(val) {
            this.visible = val
            this.targetRecord = {}
        }
    },
    watch: {
        keyword(newKeyWord) {
            if (newKeyWord === '') {
                this.isSearching = false
                this.searchResults = []
                return
            }

            this.isSearching = true
            this.searchResults = this.records.filter(record => record.doctor.includes(newKeyWord))
        }
    }
}
</script>

<style scoped>
.my-table {
    border-collapse: collapse;
    width: 100%;
}

.my-table td, .my-table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.my-table th {
    background-color: #f2f2f2;
}
</style>
