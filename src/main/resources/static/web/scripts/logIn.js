const { createApp } = Vue

const url = createApp({
    data() {
        return {
            firstName: "",
            lastName: "",
            registerOn: true,
            email: "",
            password: "",
            error_msg: "",
        }
    },
    created() {

    },
    methods: {
        toggleForm() {
            this.registerOn = !this.registerOn;
        },
        login() {
            axios.post('/api/login', "email=" + this.email + "&password=" + this.password)
                .then(response => {
                    localStorage.setItem('isLoggedIn', true);
                    if (this.email == "admin@gmail.com") {
                        return window.location.href = "./admin/"
                    } else {
                        return window.location.href = "../../index.html"
                    }
                }).catch(error => {
                    window.alert("The email or password is incorrect")
                })
        },
        register() {
            axios
                .post(
                    "/api/clients/register", `firstName=${this.firstName}&lastName=${this.lastName}&email=${this.email}&password=${this.password}`)
                .then((response) => {
                    this.login()
                })
                .catch(error => {
                    console.log(error.response);
                    window.alert(error.response.data)
                });
        }
    },
}

).mount('#app')
