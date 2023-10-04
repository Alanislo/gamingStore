const { createApp } = Vue

const url = createApp({
    data() {
        return {
            isOverlayVisible: false,
            buttonTexts: ['Log In', 'Register'],
            currentIndex: 0,
            carrito: [],
            cart: 0,
            localStorage: [],
            localStorageQty: 0,
        }
    },
    created() {
        setInterval(this.changeButtonText, 2000);
        this.localStorage = JSON.parse(localStorage.getItem("carritoProductos"));
        this.localStorageQty = this.localStorage.length;
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
        addCart(producto) {
            console.log(producto);
            this.cart++;
            this.carrito.push(producto);
            localStorage.setItem("carritoProductos", JSON.stringify(this.carrito));
        },
    }
}).mount('#app')
