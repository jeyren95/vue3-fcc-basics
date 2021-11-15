app.component("login-form", {
    template: 
    `<form @submit.prevent="handleSubmit">
        <h1>{{ title }}</h1>
        <custom-input 
        v-for="(input, index) in inputs" 
        :key="index"
        :label="input.label"
        :name="input.name"
        :id="input.id"
        :type="input.type"
        @input-changed="input.setInput"
        />


        <button type="submit">Login</button>
    </form>`,
    components: ["custom-input"],
    data() {
        return {
            title: "Login Form",
            email: "",
            password: "",
            inputs: [
                {
                    label: "Email",
                    name: "email",
                    id: "email",
                    type: "email",
                    setInput: this.setEmailInput
                },
                {
                    label: "Password",
                    name: "password",
                    id: "password",
                    type: "password",
                    setInput: this.setPasswordInput
                }
            ]
        }
    },
    methods: {
        handleSubmit() {
            let credentials = {
                email: this.email,
                password: this.password
            }
            console.log(credentials)
            this.email = ""
            this.password = ""
        },
        setEmailInput(input) {
            this.email = input
        },
        setPasswordInput(input) {
            this.password = input
        }
    }
})