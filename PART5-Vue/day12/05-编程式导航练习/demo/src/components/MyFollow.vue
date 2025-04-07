<template>
    <div class="my-follow">
        <h3>关注的榜单</h3>
        <span class="follow-item" @click="goToNewSongRank()">新歌榜</span>
        <span class="follow-item" @click="goToHotSongRank()">热歌榜</span>

        <h3>关注的歌手</h3>
        <span class="follow-item" @click="goToSinger(1)">张惠妹</span>
        <span class="follow-item" @click="goToSinger(4)">薛之谦</span>
    </div>
</template>

<script>
export default {
    name: 'MyFollow',
    methods: {
        goToNewSongRank() {
            const newSongRoute = {
                name: 'discoverRank',
                query: {
                    id: 2
                }
            }

            this.$router.push(newSongRoute)
        },
        goToHotSongRank() {
            const hotSongRoute = {
                name: 'discoverRank',
                query: {
                    id: 4
                }
            }

            this.$router.replace(hotSongRoute)
        },
        goToSinger(singerId) {
            const singerRoute = {
                name: 'discoverSinger',
                params: {
                    singerId
                }
            }

            this.$router.push(singerRoute)
        }
    }
}
</script>

<style scoped>
.my-follow {
    padding: 15px;
}

.my-follow h3 {
    margin: 0;
}

.follow-item {
    display: inline-block;
    margin: 10px;
    text-decoration: none;
    color: #424242;
}
</style>