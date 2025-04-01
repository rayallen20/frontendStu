<template>
    <div class="score-wrap">
        <span class="score-item"
              v-for="item in score.max"
              :key="item"
              :class="score.size"
              @click="changeChoose(item)"
        >
            {{item <= score.choose ? '💗' : '🤍'}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'ScoreWrap',
    props: {
        score: {
            type: Object,
            validator(score) {
                if (!Object.prototype.hasOwnProperty.call(score, 'max')) {
                    console.error('组件ScoreWrap必须传入max属性')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(score, 'choose')) {
                    console.error('组件ScoreWrap必须传入choose属性')
                    return false
                }

                if (!Object.prototype.hasOwnProperty.call(score, 'size')) {
                    console.error('组件ScoreWrap必须传入size属性')
                    return false
                }

                if (score.size !== 'small' && score.size !== 'medium' && score.size !== 'large') {
                    console.error('组件ScoreWrap的size属性只能为small/medium/large')
                    return false
                }

                return true
            },
            default() {
                return {
                    max: 5,
                    choose: 0,
                    size: 'small'
                }
            },
            require: true,
        }
    },
    emits: {
        'update:score': (score) => {
            // Tips: 在emits的校验函数中 不能通过this访问到组件实例
            if (score.choose < 0 || score.choose > score.max) {
                console.error('评分范围错误')
                return false
            }

            return true
        }
    },
    methods: {
        changeChoose(index) {
            const score = {
                max: this.score.max,
                choose: index,
                size: this.score.size
            }
            this.$emit('update:score', score)
        }
    }
}
</script>

<style scoped>
.score-wrap {
    padding: 5px 10px;
    font-size: 20px;
}
.small {
    font-size: 16px;
}
.medium {
    font-size: 20px;
}
.large {
    font-size: 24px;
}
.score-item {
    cursor: pointer;
}
</style>