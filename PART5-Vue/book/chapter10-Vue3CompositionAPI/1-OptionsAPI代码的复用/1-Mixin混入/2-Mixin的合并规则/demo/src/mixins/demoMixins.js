const demoMixin = {
    data() {
        return {
            message: 'Hello DemoMixin',
        }
    },
    methods: {
        foo() {
            console.log('demo mixin foo')
        }
    },
    created() {
        console.log('demo mixin created')
    },
}

export default demoMixin