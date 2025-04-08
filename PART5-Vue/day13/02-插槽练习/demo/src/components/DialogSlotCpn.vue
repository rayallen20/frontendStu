<template>
    <div class="dialog-cpn">
        <div class="dialog-header">
            <h3>
                <slot name="title"></slot>
            </h3>
            <span class="close">✖️</span>
        </div>

        <div class="dialog-content">
            <slot name="content"></slot>
        </div>

        <div class="dialog-footer" v-if="showButton">
            <button>取消</button>
            <button>确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DialogSlotCpn',
    props: {
        showButton: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.dialog-cpn {
    width: 470px;
    height: 230px;
    padding: 0 25px;
    background-color: #ffffff;
    margin: 40px;
    border-radius: 5px;
}

.dialog-cpn .dialog-header {
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    border-bottom: 1px solid #cccccc;
    position: relative;
}

.dialog-header .close {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
}

.dialog-cpn .dialog-content {
    height: 80px;
    font-size: 18px;
    padding: 20px 0;
}

.dialog-cpn .dialog-footer {
    display: flex;
    justify-content: flex-end;
}

.dialog-footer button {
    width: 65px;
    height: 35px;
    background-color: #ffffff;
    border: 1px solid #e1e3e9;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
    border-radius: 3px;
}

.dialog-footer button:last-child {
    background-color: #007acc;
    color: #ffffff;
}
</style>