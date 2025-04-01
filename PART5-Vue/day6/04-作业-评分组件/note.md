# 04-作业-评分组件

## 1. 需求

- `ScoreWrap`组件:
  - 接收数据`max`,表示评分的最大值
  - 接收数据`choose`,表示打出的评分
  - 接收数据`size`,表示评分图标的大小,该数据有3个可选值:
    - `small`
    - `medium`(默认值)
    - `large`
  - 点击可以改变评分

## 2. 实现

- `ScoreWrap.vue`:

```vue
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
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <div>尺寸</div>
        <!--v-model指令不能绑定局部变量-->
        <ScoreWrap
            v-for="(score, index) in scores"
            :key="index"
            v-model:score="scores[index]"></ScoreWrap>
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
```

## 3. 踩坑记录

### 3.1 `emits`的校验函数中,不能通过`this`访问组件实例

因为`emits`的校验函数是在组件实例创建之前被调用的纯函数,它们没有绑定到组件实例

### 3.2 `v-model`指令不能绑定局部变量

```vue
<ScoreWrap
    v-for="(score, index) in scores"
    :key="index"
    v-model:score="scores[index]"
>
</ScoreWrap>
```

这里`v-model:score="scores[index]`不能写成`v-model:score="score"`

因为`v-model`指令不能绑定局部变量,只能绑定组件实例的属性