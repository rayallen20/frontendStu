<template>
    <section class="main">
        <ul class="todo-list">
            <li class="todo" v-for="(mission, index) in missionList" :key="mission.id">
                <div class="view">
                    <span class="index">{{index + 1}}.</span>
                    <label>{{mission.name}}</label>
                    <button class="destroy" @click="deleteMission(mission.id)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import emitter from "../utils/eventBus"

export default {
    name: 'NoteList',
    data() {
        return {
            missionList: undefined,
        }
    },
    methods: {
        deleteMission(id) {
            this.missionList = this.missionList.filter(mission => mission.id !== id)
        },
        addMission(content) {
            const newMission = {
                id: this.getAvailableId(),
                name: content,
            }

            this.missionList.unshift(newMission)
        },
        getAvailableId() {
            const idList = this.missionList.map(mission => mission.id)
            if (idList.length === 0) {
                return 1
            }

            return Math.max(...idList) + 1
        },
        clearMission() {
            this.missionList = []
        }
    },
    created() {
        this.missionList = JSON.parse(localStorage.getItem('missionList'))

        emitter.on('addMission', this.addMission)
        emitter.on('clearMission', this.clearMission)
    },
    mounted() {
        // 手动触发一次全局事件 此时NodeFooter的created()方法中的事件监听器已经被注册
        emitter.emit('missionListChange', this.missionList.length)
    },
    watch: {
        missionList: {
            handler(newVal) {
                // 当任务列表变化时 通过事件总线 向兄弟组件传递任务列表的长度
                emitter.emit('missionListChange', newVal.length)

                // 将任务列表存储到本地
                localStorage.setItem('missionList', JSON.stringify(newVal))
            },
            deep: true,
        }
    }
}
</script>

<style scoped>
.main {
    position: relative;
    z-index: 2;
}

.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
}

.todo-list li {
    position: relative;
    font-size: 24px;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
}

.todo-list li:last-child {
    border-bottom: none;
}

.todo-list .view .index {
    position: absolute;
    color: gray;
    left: 10px;
    top: 20px;
    font-size: 22px;
}

.todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}

.todo-list li .toggle {
    opacity: 0;
}

.todo-list li .toggle + label {
    /*
          Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
          IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
      */
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
}

.todo-list li .toggle:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

.todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}

.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
    color: #af5b5e;
}

.todo-list li .destroy:after {
    content: '×';
}

.todo-list li:hover .destroy {
    display: block;
}

.todo-list li .edit {
    display: none;
}

.todo-list li.editing:last-child {
    margin-bottom: -1px;
}
</style>