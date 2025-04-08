<template>
    <div class="app">
        <div>尺寸</div>
        <!--v-model指令不能绑定局部变量-->
        <ScoreWrap
            v-for="(score, index) in scores"
            :key="index"
            v-model:score="scores[index]"
        >
        </ScoreWrap>
    </div>
</template>

<script>
import ScoreWrap from "@/components/ScoreWrap.vue"

export default {
    name: 'App',
    components: {
        ScoreWrap
    },
    data() {
        return {
            scores: [
                {
                    max: 5,
                    choose: 3,
                    size: 'small',
                },
                {
                    max: 6,
                    choose: 4,
                    size: 'medium',
                },
                {
                    max: 8,
                    choose: 5,
                    size: 'large',
                }
            ]
        }
    }
}
</script>