const { createApp } = Vue;

const options = {
    data() {
        return {
            carrito: [],
            cantidadTotalProductos: 0,
            totalPrecio: 0,
            productosMouse: undefined,
            productosKeyboard: undefined,
            productosMicrophone: undefined,
            productosHeadphone: undefined
        }
    },
    created() {
        if (localStorage.getItem('carrito') != null) {
            this.cantidadTotalProductos = JSON.parse(localStorage.getItem('cantidadTotalProductos'))
            this.productosMouse = JSON.parse(localStorage.getItem('productosMouse'))
            this.productosKeyboard = JSON.parse(localStorage.getItem('productosKeyboard'))
            this.productosMicrophone = JSON.parse(localStorage.getItem('productosMicrophone'))
            this.productosHeadphone = JSON.parse(localStorage.getItem('productosHeadphone'))
            this.carrito = JSON.parse(localStorage.getItem('carrito'))
            this.totalPrecio = JSON.parse(localStorage.getItem('totalPrecio'))
        } else {
            fetch('/api/components')
                .then(response => response.json())
                .then(data => {
                    this.productosMouse = data.filter(producto => producto.category == 'mouse')
                    this.productosKeyboard = data.filter(producto => producto.category == 'keyboard')
                    this.productosMicrophone = data.filter(producto => producto.category == 'microphone')
                    this.productosHeadphone = data.filter(producto => producto.category == 'headphone')
                })
                .catch(error => console.log(error))
        }
    },
    methods: {
        agregarProducto(prod) {
            if (prod.stock > 0) {
                if (this.carrito.find(producto => producto.id == prod.id)) {
                    this.carrito.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito++
                            producto.stock--
                        }
                    })
                    if (prod.category == 'mouse') {
                        this.productosMouse.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito++
                                producto.stock--
                            }
                        })
                    } else if (prod.category == 'keyboard') {
                        this.productosKeyboard.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito++
                                producto.stock--
                            }
                        })
                    } else if (prod.category == 'microphone') {
                        this.productosMicrophone.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito++
                                producto.stock--
                            }
                        })
                    } else {
                        this.productosHeadphone.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito++
                                producto.stock--
                            }
                        })
                    }
                } else {
                    this.carrito.push({ ...prod })
                    this.carrito.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito = 1
                            producto.stock--
                        }
                    })
                    if (prod.category == 'mouse') {
                        this.productosMouse.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito = 1
                                producto.stock--
                            }
                        })
                    } else if (prod.category == 'keyboard') {
                        this.productosKeyboard.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito = 1
                                producto.stock--
                            }
                        })
                    } else if (prod.category == 'microphone') {
                        this.productosMicrophone.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito = 1
                                producto.stock--
                            }
                        })
                    } else {
                        this.productosHeadphone.forEach(producto => {
                            if (producto.id == prod.id) {
                                producto.cantidadEnCarrito = 1
                                producto.stock--
                            }
                        })
                    }
                }
            }
            this.actualizarTotal()
            localStorage.setItem('productosMouse', JSON.stringify(this.productosMouse))
            localStorage.setItem('productosKeyboard', JSON.stringify(this.productosKeyboard))
            localStorage.setItem('productosMicrophone', JSON.stringify(this.productosMicrophone))
            localStorage.setItem('productosHeadphone', JSON.stringify(this.productosHeadphone))
            localStorage.setItem('carrito', JSON.stringify(this.carrito))
            localStorage.setItem('cantidadTotalProductos', JSON.stringify(this.cantidadTotalProductos))
            localStorage.setItem('totalPrecio', JSON.stringify(this.totalPrecio))
        },
        disminuirProducto(prod) {
            if (prod.cantidadEnCarrito > 1) {
                this.carrito.forEach(producto => {
                    if (producto.id == prod.id) {
                        producto.cantidadEnCarrito--
                        producto.stock++
                    }
                })
                if (prod.category == 'mouse') {
                    this.productosMouse.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                } else if (prod.category == 'keyboard') {
                    this.productosKeyboard.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                } else if (prod.category == 'microphone') {
                    this.productosMicrophone.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                } else {
                    this.productosHeadphone.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                }
            } else {
                this.carrito.forEach(producto => {
                    if (producto.id == prod.id) {
                        producto.stock++
                    }
                })
                if (prod.category == 'mouse') {
                    this.productosMouse.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                } else if (prod.category == 'keyboard') {
                    this.productosKeyboard.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                } else if (prod.category == 'microphone') {
                    this.productosMicrophone.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                } else {
                    this.productosHeadphone.forEach(producto => {
                        if (producto.id == prod.id) {
                            producto.cantidadEnCarrito--
                            producto.stock++
                        }
                    })
                }
                this.carrito.splice(this.carrito.indexOf(prod), 1)
            }
            this.actualizarTotal()
            localStorage.setItem('productosFarmacia', JSON.stringify(this.productosFarmacia))
            localStorage.setItem('carrito', JSON.stringify(this.carrito))
            localStorage.setItem('cantidadTotalProductos', JSON.stringify(this.cantidadTotalProductos))
            localStorage.setItem('totalPrecio', JSON.stringify(this.totalPrecio))
        },
        vaciarCarrito() {
            localStorage.clear()
            this.carrito = []
            this.totalPrecio = 0
            this.cantidadTotalProductos = 0
        },
        actualizarTotal() {
            this.totalPrecio = this.carrito.reduce((acc, producto) => acc + Number(producto.precio * producto.cantidadEnCarrito), 0)
        }

    },
    computed: {
        contadorCarrito() {
            this.cantidadTotalProductos = this.carrito.reduce((acc, producto) => acc + producto.cantidadEnCarrito, 0);
        }
    }
}

const app = createApp(options)

app.mount("#app")