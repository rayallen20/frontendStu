<template>
    <div class="singer-cpn">
        <h2>入驻歌手</h2>
        <div class="singer-list">
            <div class="singer-item" v-for="singer in singers" :key="singer.id">
                <img :src="singer.smallImg" alt="">
                <p>
                    <RouterLink class="singer-link" exact-active-class="link-exact-active" :to="{name: 'discoverSinger', params: {singerId: singer.id}}">{{singer.name}}</RouterLink>
                </p>
            </div>
        </div>

        <div class="content" v-if="hasSingerId()">
            <img :src="currentSinger !== null && currentSinger !== undefined ? currentSinger.bigImg : ''" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingerCpn',
    data() {
        return {
            singers: [
                {
                    id: 1,
                    name: '张惠妹',
                    smallImg: require('@/assets/zhanghuimei-small.jpg'),
                    bigImg: require('@/assets/zhanghuimei-big.jpg')
                },
                {
                    id: 2,
                    name: '邓紫棋',
                    smallImg: require('@/assets/dengziqi-small.jpg'),
                    bigImg: require('@/assets/dengziqi-big.jpg')
                },
                {
                    id: 3,
                    name: '汪苏泷',
                    smallImg: require('@/assets/wangsulong-small.jpg'),
                    bigImg: require('@/assets/wangsulong-big.jpg')
                },
                {
                    id: 4,
                    name: '薛之谦',
                    smallImg: require('@/assets/xuezhiqian-small.jpg'),
                    bigImg: require('@/assets/xuezhiqian-big.jpg')
                }
            ],
        }
    },
    methods: {
        hasSingerId() {
            return Object.prototype.hasOwnProperty.call(this.$route.params, 'singerId')
        }
    },
    computed: {
        currentSinger: {
            get() {
                if (Object.prototype.hasOwnProperty.call(this.$route.params, 'singerId')) {
                    const currentId = Number(this.$route.params.singerId)
                    console.log(this.singers.find(singer => singer.id === currentId))
                    return this.singers.find(singer => singer.id === currentId)
                }

                return null
            }
        }
    }
}
</script>

<style scoped>
.singer-list{
    width: 580px;
    display: flex;
    justify-content: space-between;
}

.singer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.singer-link {
    text-decoration: none;
    color: #424242;
}

.link-exact-active {
    color: skyblue;
}
</style>