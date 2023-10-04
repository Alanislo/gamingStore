const { createApp } = Vue


createApp({
  data() {
    return {
      color: "black",
      isOverlayVisible: false,
      buttonTexts: ['Log In', 'Register'],
      currentIndex: 0,
    colorChosen: "hello",
    products: [],
    product: [],
    parameter: null,
    params: null,
    id: null,
    mainPhoto : [],
    productCategory: [],
    productBrand: [],
    productPrice: [],
    productColor: [],
    }
  },
  created() {
    setInterval(this.changeButtonText, 2000);
    this.loadData();
  },
  computed: {
    buttonText() {
      return this.buttonTexts[this.currentIndex];
    },
  },
  methods: {
      loadData() {
        axios({
              method: "get",
              url: '/api/components',
            })
                  .then((response) => {
                   console.log(response);
                   this.products = response.data;
                   this.parameter = location.search;
                   this.params = new URLSearchParams(this.parameter);
                   this.id = this.params.get("parameter");
                   this.product = this.products.filter((product) => product.id == this.id);
                   this.changePhoto();
                  })
                  .catch(error => console.log(error));
      },
    showOverlay() {
      this.isOverlayVisible = true;
    },
    hideOverlay() {
      this.isOverlayVisible = false;
    },
    changeButtonText() {
      this.currentIndex = (this.currentIndex + 1) % this.buttonTexts.length;
    },
  },
   moveLeft() {
       document.getElementById('slider').scrollLeft += 120;
          },
      moveRight() {
       document.getElementById('slider').scrollLeft -= 120;
           },
      changePhoto() {
        let thumbnails = document.getElementsByClassName('thumbnail');
        let activeImages = document.getElementsByClassName('active');
        for (let i=0; i < thumbnails.length; i++) {
            thumbnails[i].addEventListener('mouseover', function() {
                if(activeImages.length > 0) {
                activeImages[0].classList.remove('active')
                }

                this.classList.add('active')
                document.getElementById('featured').src = this.src
            })
        }
      },
}).mount('#app')




