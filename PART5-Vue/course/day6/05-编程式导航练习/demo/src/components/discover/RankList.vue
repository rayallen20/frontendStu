<template>
    <div class="rank-list">
        <h2>排行榜</h2>

        <div class="container">
            <div class="left">
                <ul>
                    <li v-for="rank in ranks" :key="rank.id">
                        <RouterLink class="rank-item" :to="{name: 'discoverRank', query: {id: rank.id}}">{{rank.name}}</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="content" v-if="hasId()">
                当前查看的是<span>{{currentRank.name}}</span>的歌曲
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RankList',
    data() {
        return {
            ranks: [
                {id: 1, name: '飙升榜'},
                {id: 2, name: '新歌榜'},
                {id: 3, name: '原创榜'},
                {id: 4, name: '热歌榜'},
            ]
        }
    },
    methods: {
        hasId() {
            return Object.prototype.hasOwnProperty.call(this.$route.query, 'id')
        }
    },
    computed: {
        currentRank: {
            get() {
                if (Object.prototype.hasOwnProperty.call(this.$route.query, 'id')) {
                    const currentId = Number(this.$route.query.id)
                    return this.ranks.find(rank => rank.id === currentId)
                }

                return null
            }
        }
    }
}
</script>

<style scoped>
.container{
    display: flex;
}

.container .left {
    flex: 1;
}

.rank-item{
    text-decoration: none;
    color: #424242;
}

.container .content {
    flex: 3;
}

.content span {
    color: skyblue;
    font-weight: bold;
}
</style>