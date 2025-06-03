<template>
    <div class="goods-container">
        <!-- 左侧图片区域 -->
        <div class="left">
            <img :src="img" class="avatar" alt="">
        </div>
        <!-- 右侧商品区域 -->
        <div class="right">
            <!-- 标题 -->
            <div class="title">{{name}}</div>
            <div class="info">
                <!-- 单价 -->
                <span class="price">￥{{price}}</span>
                <div class="btns">
                    <!-- 按钮区域 -->
                    <button class="btn btn-light" @click="subtract(id)">-</button>
                    <span class="count">{{count}}</span>
                    <button class="btn btn-light" @click="add(id)">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useStore} from "vuex";

// eslint-disable-next-line
defineOptions({
    name: 'CartItem',
})

// eslint-disable-next-line
defineProps({
    id: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const store = useStore()

const add = (id) => {
    const item = {
        id,
    }

    store.dispatch('cart/addItem', item)
}

const subtract = (id) => {
    const item = {
        id,
    }

    store.dispatch('cart/subtractItem', item)
}
</script>

<style lang="less" scoped>
.goods-container {
    display: flex;
    padding: 10px;

    +.goods-container {
        border-top: 1px solid #f8f8f8;
    }

    .left {
        .avatar {
            width: 100px;
            height: 100px;
        }

        margin-right: 10px;
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        .title {
            font-weight: bold;
        }

        .info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .price {
                color: red;
                font-weight: bold;
            }

            .btns {
                .count {
                    display: inline-block;
                    width: 30px;
                    text-align: center;
                }
            }
        }
    }
}

.custom-control-label::before,
.custom-control-label::after {
    top: 3.6rem;
}
</style>