# 04-案例-医疗系统

## 1. 需求

[需求详情](https://gitee.com/guoqiang7721/v2_base_homework/blob/master/Vue%E5%9F%BA%E7%A1%80.md#%E5%8C%BB%E7%96%97%E7%B3%BB%E7%BB%9F-%E5%B0%B1%E8%AF%8A%E8%AE%B0%E5%BD%95)

## 2. 实现

- 父组件`App.vue`:

```vue
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
```

- 子组件`RecordDetail.vue`:

```vue
<template>
    <div class="modal-mask" v-show="visible">
        <div class="modal-container">
            <div class="modal-header">
                <h3>就诊记录详情</h3>
                <span class="close-btn" @click="close">X</span>
            </div>
            <div class="modal-body">
                <p><strong>就诊日期：</strong>{{record.date}}</p>
                <p><strong>医生姓名：</strong>{{record.doctor}}</p>
                <p><strong>诊断结果：</strong>{{record.diagnosis}}</p>
                <p><strong>处方信息：</strong>{{record.prescription}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecordDetail',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        record: {
            type: Object,
            validator(record) {
                if (Object.keys(record).length === 0) {
                    return true
                }

                if (!Object.prototype.hasOwnProperty.call(record, 'date')) {
                    console.error('Record object must have an date property')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(record, 'doctor')) {
                    console.error('Record object must have an doctor property')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(record, 'diagnosis')) {
                    console.error('Record object must have an diagnosis property')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(record, 'prescription')) {
                    console.error('Record object must have an prescription property')
                    return false
                }

                return true
            }
        }
    },
    emits: {
        'update:visible': null,
    },
    methods: {
        close() {
            this.$emit('update:visible', false)
        }
    }
}
</script>

<style scoped>
.hidden{
    display: none !important;
}
.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    max-width: 500px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    cursor: pointer;
}
</style>
```