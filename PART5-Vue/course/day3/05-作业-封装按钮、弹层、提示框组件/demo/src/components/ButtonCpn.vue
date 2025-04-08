<template>
    <button class="button-cpn" :class="[type, size]">{{content}}</button>
</template>

<script>
export default {
    name: 'ButtonCpn',
    props: {
        content: {
            type: String,
            required: true,
            validator(value) {
                return value.length > 0
            }
        },
        type: {
            type: String,
            default: 'default',
            validator(value) {
                const validTypes = ['default', 'primary', 'success', 'info', 'danger']
                return validTypes.includes(value)
            }
        },
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                const validSizes = ['small', 'medium', 'large']
                return validSizes.includes(value)
            }
        }
    }
}
</script>

<style scoped>
.default {
    color: #333333;
    background-color: #FFFFFF;
}

.primary {
    color: #FFFFFF;
    background-color: #E6A23C;
}

.success {
    color: #FFFFFF;
    background-color: #67C23A;
}

.info {
    color: #FFFFFF;
    background-color: #409EFF;
}

.danger {
    color: #FFFFFF;
    background-color: #F56C6C;
}

.small {
    padding: 5px;
    font-size: 12px;
}

.medium {
    padding: 10px 20px;
    font-size: 14px;
}

.large {
    padding: 15px 30px;
    font-size: 16px;
}
</style>