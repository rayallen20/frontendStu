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
