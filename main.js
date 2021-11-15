const app = Vue.createApp({
    data() {
        return {
            isVisible: false,
        }
    },
    updated() {
        console.log("updated")
    },
    methods: {
        toggleBox() {
            this.isVisible = !this.isVisible
        }
    }
})