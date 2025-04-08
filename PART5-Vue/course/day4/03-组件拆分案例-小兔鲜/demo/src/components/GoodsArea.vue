<template>
    <div class="goods wrapper">
        <div class="title">
            <div class="left">
                <h3>新鲜好物</h3>
                <p>新鲜出炉 品质靠谱</p>
            </div>
            <div class="right">
                <a href="#" class="more"
                >查看全部<span class="iconfont icon-arrow-right-bold"></span
                ></a>
            </div>
        </div>
        <div class="bd">
            <ul>
                <GoodItem v-for="(good, index) in goods" :key="index" :good="good"></GoodItem>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsArea",
    data() {
        return {
            goods: [
                {
                    src: 'goods1.png',
                    title: 'KN95级莫兰迪色防护口罩',
                    price: 79,
                },
                {
                    src: 'goods2.png',
                    title: '紫檀外独板三层普洱茶盒',
                    price: 566,
                },
                {
                    src: 'goods3.png',
                    title: '法拉蒙高颜值记事本可定制',
                    price: 58,
                },
                {
                    src: 'goods4.png',
                    title: '科技布布艺沙发',
                    price: 3759,
                }
            ],
        }
    },
}
</script>


<style scoped>
/* 新鲜好物 */
.goods .bd ul {
    display: flex;
    justify-content: space-between;
}
</style>