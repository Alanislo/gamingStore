const { createApp } = Vue

const url = createApp({
    data() {
        return {
            registerOn: true
        }
    },
    created() {

    },
    methods: {
        toggleForm() {
            this.registerOn = !this.registerOn;
        }
    }
}).mount('#app')
