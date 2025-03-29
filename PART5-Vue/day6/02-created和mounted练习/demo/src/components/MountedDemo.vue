<template>
    <div class="mounted-demo">
        <div class="search-container">
            <img src="https://www.itheima.com/images/logo.png" alt="">
            <div class="search-box">
                <input type="text" v-model="words" id="inp">
                <button>搜索一下</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MountedDemo',
    data() {
        return {
            words: ''
        }
    },
    mounted() {
        // DOM渲染完成后 自动获取焦点
        const inputEle = document.querySelector('#inp')
        inputEle.focus()
    },
}
</script>

<style scoped>
html,
body {
    height: 100%;
}
.search-container {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.search-container .search-box {
    display: flex;
}
.search-container img {
    margin-bottom: 30px;
}
.search-container .search-box input {
    width: 512px;
    height: 16px;
    padding: 12px 16px;
    font-size: 16px;
    margin: 0;
    vertical-align: top;
    outline: 0;
    box-shadow: none;
    border-radius: 10px 0 0 10px;
    border: 2px solid #c4c7ce;
    background: #fff;
    color: #222;
    overflow: hidden;
    box-sizing: content-box;
    -webkit-tap-highlight-color: transparent;
}
.search-container .search-box button {
    cursor: pointer;
    width: 112px;
    height: 44px;
    line-height: 41px;
    line-height: 42px;
    background-color: #ad2a27;
    border-radius: 0 10px 10px 0;
    font-size: 17px;
    box-shadow: none;
    font-weight: 400;
    border: 0;
    outline: 0;
    letter-spacing: normal;
    color: white;
}
body {
    background: no-repeat center /cover;
    background-color: #edf0f5;
}
</style>