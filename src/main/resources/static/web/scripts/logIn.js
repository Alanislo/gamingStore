const { createApp } = Vue

const url = createApp({
    data() {
        return {
            firstName:"",
            lastName:"",
            registerOn: true,
            email:"",
            password:"",
            error_msg:""
            
        }
    },
    created() {

    },
    methods: {
        toggleForm() {
            this.registerOn = !this.registerOn;
        },
        login() {
            axios.
            post('/api/login', "email=" + this.email + "&password=" + this.password, {
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            })
            .then(response => {
                console.log('signed in!!!');
                if(this.email=="admin@gmail.com"){
                    return window.location.href ="/web/manager/manager.html"
                }else{
                return window.location.href = "/web/public/pages/accounts.html"}  
            }).catch(error => {
                window.alert("The email or password is incorrect")
                console.log(error);
            })
        }
    },
    register() {
        axios
          .post(
            "/api/clients",
            `firstName=${this.firstName}&lastName=${this.lastName}&email=${this.email}&password=${this.password}`,
            { headers: { "content-type": "application/x-www-form-urlencoded" } }
          )
          .then((response) => {
            this.login()
          })
          .catch(error => {
            console.log(error.response);
            window.alert(error.response.data)
          });
      },
    logout() {
        axios.post(`/api/logout`)
        .then(response => console.log('signed out!!'))
        return (window.location.href = "/index.html")
    }
    },
    
).mount('#app')
