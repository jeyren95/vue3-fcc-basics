app.component("custom-input", {
    props: ["label", "name", "id", "type"],
    template:
    `
    <label :for="id">{{ label }}</label> 
    <input 
    :name="name" 
    :id="id" 
    :type="type" 
    v-model="inputValue" 
    @change="handleChange" 
    />  
    `,
    data() {
        return {
            inputValue: ""
        }
    },
    methods: {
        handleChange() {
            this.$emit("input-changed", this.inputValue)
        }
    }
})