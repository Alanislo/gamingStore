const { createApp } = Vue

const url = createApp({
    data() {
        return {
            isOverlayVisible: false,
            buttonTexts: ['Log In', 'Register'],
            currentIndex: 0,
            isLoggedIn: false,
        }
    },
    created() {
        setInterval(this.changeButtonText, 2000);
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === "true") {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    },
    computed: {
        buttonText() {
            return this.buttonTexts[this.currentIndex];
        },
    },
    methods: {
        showOverlay() {
            this.isOverlayVisible = true;
        },
        hideOverlay() {
            this.isOverlayVisible = false;
        },
        changeButtonText() {
            this.currentIndex = (this.currentIndex + 1) % this.buttonTexts.length;
        },
        logout() {
            axios.post(`/api/logout`)
                .then(response => {
                    this.isLoggedIn = false;
                    localStorage.removeItem('isLoggedIn');
                    window.location.href = "../../index.html"
                })
                .catch(error => {
                    console.error('Error during logout:', error);
                })
        }
    }
}).mount('#app')
