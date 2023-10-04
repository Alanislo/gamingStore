const { createApp } = Vue


createApp({
  data() {
    return {
      color: "black",
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
      this.currentIndex = (this.currentIndex + 1) % this.buttonTexts.length;
    },
    addCart(producto) {
      this.cart++;
      this.carrito.push(producto);
      localStorage.setItem("carritoProductos", JSON.stringify(this.carrito));
    },
  }
}).mount('#app')



let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', function () {

    if (activeImages.length > 0) {
      activeImages[0].classList.remove('active')
    }

    this.classList.add('active')
    document.getElementById('featured').src = this.src
  })
}

let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');

arrowLeft.addEventListener('click', function () {
  document.getElementById('slider').scrollLeft -= 90;

});

arrowRight.addEventListener('click', function () {
  document.getElementById('slider').scrollLeft += 90;

})



$(document).on("change", "input", function () {
  $("label").removeClass("checked");
  if ($(this).is(":checked")) $(this).closest("label").addClass("checked");
});


