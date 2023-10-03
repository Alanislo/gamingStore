const { createApp } = Vue

const url = createApp({
    data() {
        return {
            isOverlayVisible: false,
            buttonTexts: ['Log In', 'Register'],
            currentIndex: 0,
        }
    },
    created() {
        setInterval(this.changeButtonText, 2000);
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
            this.currentIndex = (this.currentIndex + 1) % this.buttonTexts.length; // Cambia al siguiente texto
        },
    }
}).mount('#app')
