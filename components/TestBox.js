app.component("test-box", {
    template: 
    `
    <div class="box"></div>  
    `,
    // lifecycle methods
    created() {
        console.log("created")
    },
    mounted() {
        console.log("mounted")
    },
    unmounted() {
        console.log("unmounted")
    }
})