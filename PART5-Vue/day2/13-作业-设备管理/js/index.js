const args = {
    template: '#my-app',
    data() {
        return {
            showDialog: false,
            equipList: [
                {
                    name: '华南服务器1H1G',
                    remark: '华南服务器',
                    id: 1697420179351,
                    ip: '49.38.27.16',
                    enable: false

                },
                {
                    name: '华北服务器1H2G',
                    remark: '华北服务器',
                    id: 1697420179352,
                    ip: '49.38.27.17',
                    enable: true

                }
            ],
        }
    },
    methods: {
    }
}

const app = Vue.createApp(args)
app.mount('#app')