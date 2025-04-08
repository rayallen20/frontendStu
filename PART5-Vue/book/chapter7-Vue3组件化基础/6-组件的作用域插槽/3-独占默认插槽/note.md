# 3-独占默认插槽

- 说白了就是父组件在使用子组件的插槽时,若该插槽为默认插槽(`name="default"`),则获取插槽属性时可以简写为`v-slot="插槽属性集合"`

- `ShowNames.vue`:

```vue
<template>
    <div class="show-names">
        <!-- 默认插槽 -->
        <slot v-for="(player, index) in players" :player="player" :index="index"></slot>
    </div>
</template>

<script>
export default {
    name: "ShowNames",
    data() {
        return {
            players: [
                "kobe",
                "james",
                "curry",
            ]
        }
    },
}
</script>

<style scoped>
.show-names{
    height: 40px;
}
</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <ShowNames>
            <!--
            当插槽为默认插槽时, `v-slot:插槽名="插槽属性集合"`就可以简写为 v-slot="插槽属性集合"
            再进一步简写即: #="插槽属性集合"
            -->
            <template #="slotProps">
                <span>{{'子组件中的数据: ' + slotProps.index}} - {{'子组件中的数据: ' + slotProps.player}}</span>
            </template>
        </ShowNames>
    </div>
</template>

<script>
import ShowNames from "./components/ShowNames.vue"

export default {
    name: "App",
    components: {
        ShowNames
    },
}
</script>

<style scoped>
span{
    border: 1px solid #999;
    padding: 4px;
    margin: 4px;
}
</style>
```

- 当子组件只有默认插槽时,组件的标签可以当做插槽的template使用:

```vue
<template>
    <div class="app">
        <!-- 当子组件仅有默认插槽时 子组件的标签可以作为插槽的template使用 -->
        <ShowNames #="slotProps">
            <span>{{'子组件中的数据: ' + slotProps.index}} - {{'子组件中的数据: ' + slotProps.player}}</span>
        </ShowNames>
    </div>
</template>

<script>
import ShowNames from "./components/ShowNames.vue"

export default {
    name: "App",
    components: {
        ShowNames
    },
}
</script>

<style scoped>
span{
    border: 1px solid #999;
    padding: 4px;
    margin: 4px;
}
</style>
```

- 但是,如果子组件既有默认插槽又有具名插槽,则不能使用子组件的标签作为插槽的template使用,必须使用`<template>`标签包裹:

- `ShowNames.vue`:

```vue
<template>
    <div class="show-names">
        <!-- 默认插槽 -->
        <slot v-for="(player, index) in players" :player="player" :index="index"></slot>

        <!-- 具名插槽 -->
        <slot name="game"></slot>
    </div>
</template>

<script>
export default {
    name: "ShowNames",
    data() {
        return {
            players: [
                "kobe",
                "james",
                "curry",
            ]
        }
    },
}
</script>

<style scoped>
.show-names{
    height: 40px;
}
</style>
```

- `App.vue`:

```vue
<template>
    <div class="app">
        <!-- 当子组件既有默认插槽 又有具名插槽时 必须使用template语法 -->
        <ShowNames>
            <template v-slot:default="slotProps">
                <span>{{'子组件中的数据: ' + slotProps.index}} - {{'子组件中的数据: ' + slotProps.player}}</span>
            </template>

            <template v-slot:game>
                <h4>湖人 VS 勇士</h4>
                <p>比赛战报内容</p>
            </template>
        </ShowNames>
    </div>
</template>

<script>
import ShowNames from "./components/ShowNames.vue"

export default {
    name: "App",
    components: {
        ShowNames
    },
}
</script>

<style scoped>
span{
    border: 1px solid #999;
    padding: 4px;
    margin: 4px;
}
</style>
```