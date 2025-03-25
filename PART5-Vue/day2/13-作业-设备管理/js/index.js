const args = {
    template: '#my-app',
    data() {
        return {
            showDialog: false,
            equipList: JSON.parse(localStorage.getItem('equipList')),
            isSearch: false,
            searchList: [],
            searchName: '',
            searchTimerId: undefined,
            newEquip: {
                name: '',
                remark: '',
                id: undefined,
                ip: '',
                enable: false
            },
        }
    },
    methods: {
        openDialog() {
            this.showDialog = true
        },
        closeDialog() {
            this.showDialog = false
            this.clearNewEquip()
        },
        clearNewEquip() {
            this.newEquip.name = ''
            this.newEquip.remark = ''
            this.newEquip.id = undefined
            this.newEquip.ip = ''
            this.newEquip.enable = false
        },
        toggleEnable(id) {
            const equip = this.equipList.find(item => item.id === id)
            equip.enable = !equip.enable
        },
        deleteEquip(id) {
            this.equipList = this.equipList.filter(item => item.id !== id)
        },
        getMaxId() {
            if (this.equipList.length === 0) {
                return 0
            }

            return Math.max(...this.equipList.map(item => item.id))
        },
        search(keyword) {
            this.isSearch = true
            this.searchList = this.equipList.filter(item => item.name.includes(keyword))
        },
        cleanSearch() {
            this.searchName = ''
            this.isSearch = false
            this.searchList = []
        },
        debounceSearch(func, params, timeout = 500) {
            if (this.searchTimerId) {
                clearTimeout(this.searchTimerId)
            }

            this.searchTimerId = setTimeout(() => {
                this.search(...params)
            }, timeout)
        },
        addEquip() {
            if (!this.checkNewEquip()) {
                return
            }

            this.newEquip.id = this.getMaxId() + 1

            // Tips: 此处不能直接将this.newEquip添加到this.equipList中
            // 因为this.newEquip是引用类型 后续清空this.newEquip时
            // this.equipList中的数据也会被清空 需要用浅拷贝创建一个副本
            let copyEquip = Object.assign({}, this.newEquip)
            this.equipList.push(copyEquip)
            this.closeDialog()
        },
        checkNewEquip() {
            if (this.newEquip.name === '' || this.newEquip.remark === '' || this.newEquip.ip === '') {
                alert('请填写完整信息')
                return false
            }

            if (!this.isValidIP(this.newEquip.ip)) {
                alert('ip地址格式不正确')
                return false
            }

            return true
        },
        isValidIP(ip) {
            const reg = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/
            return reg.test(ip)
        }
    },
    watch: {
        searchName: {
            handler(newSearchName) {
                if (newSearchName === '') {
                    this.cleanSearch()
                    return
                }

                this.debounceSearch(this.search, [newSearchName],1000)
            },
            deep: false,
            immediate: false,
        },
        equipList: {
            handler(newEquipList) {
                const equipListJson = JSON.stringify(newEquipList)
                localStorage.setItem('equipList', equipListJson)
            },
            deep: true,
            immediate: true,
        }
    },
    computed: {
        isCheckedAll: {
            get() {
                return this.equipList.every(item => item.enable)
            },
            set(checked) {
                this.equipList.forEach(item => item.enable = checked)
            }
        }
    }
}

const app = Vue.createApp(args)
app.mount('#app')