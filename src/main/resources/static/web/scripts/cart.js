const { createApp } = Vue;

createApp({
    data() {
        return {
            products: [],
            productQty: [],
            localStorage: [],
            buttonTexts: ['Log In', 'Register'],
            localStorageQty: 0,
            totalProduct: 0,
            subtotalProduct: 0,
            total: 0,
            iva: 0
        };
    },
    created() {
        this.loadData();
        setInterval(this.changeButtonText, 2000);
        this.localStorage = JSON.parse(localStorage.getItem("carritoProductos")) ?? [];
        this.localStorageQty = this.localStorage.length;
        this.createProperty();
        console.log(this.localStorage);
    },
    methods: {
        loadData() {
            axios.get("/api/components")
                .then((response) => {
                    this.products = response.data;
                })
                .catch((error) => console.log(error));
        },
        createProperty() {
            this.localStorage.map((product) => {
                if (product.qty <= 0 || product.qty == null) {
                    product.qty = 1
                }
            })
        },
        emptyCart() {
            localStorage.clear("carritoProductos");
            this.localStorage = [];
            this.localStorageQty = 0;
        },
        removeOneItem(index) {
            const item = this.localStorage[index];
            if (item.qty > 1) {
                item.qty--;
            } else if (item.qty == 1) {
                this.localStorage.splice(index, 1);
                localStorage.setItem("carritoProductos", JSON.stringify(this.localStorage));
            }
        },
        plusItem(product) {
            const indexProduct = this.localStorage.findIndex((item) => item.id === product.id)
            if (indexProduct !== -1) {
                this.localStorage[indexProduct].qty++;
            } else {
                this.localStorage.push(product)
            }
            localStorage.setItem("carritoProductos", JSON.stringify(this.localStorage));
        },
    },
    computed: {
        subTotalCombined() {
            this.localStorage.reduce((total, articulo) => total + articulo.price * articulo.qty, 0);
        },
        total() {
            for (let product of this.localStorage) {
                product.total = product.disponibles * product.precio;
            }
        },
        buttonText() {
            return this.buttonTexts[this.currentIndex];
        },
        // changeStorage() {
        //     window.addEventListener('storage', (event) => {
        //         if (event.key === 'carritoProductos') {
        //             this.carrito = JSON.parse(localStorage.getItem('carrito') ?? []);
        //         }
        //     })
        // },
    },
}).mount("#app");