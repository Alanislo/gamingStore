const { createApp } = Vue


createApp({
  data() {
    return {

      color: "black",
      isOverlayVisible: false,
      buttonTexts: ['Log In', 'Register'],
      currentIndex: 0,
      showColors: false,
      showBrand: false,
      showCategory: false,
      showPrice: false,
      filterShow: false,
      colors: [],
      prices: [],
      brands: [],
      categories: [],
      products: [],
      productsFiltered: [],
      productCategory: [],
      productBrand: [],
      productPrice: [],
      productColor: [],
      productColorReduced: [],
      productColorFinal: [],
      ranges: [{ label: 'Under $100', min: 0, max: 99.99 }, { label: '$100 - $200', min: 100, max: 199.99 }, { label: '$200 - $300', min: 200, max: 299.99 }, { label: 'Over $300', min: 300, max: 1000000 }],
      priceMin: null,
      priceMax: null,
    }
  },
  created() {
    console.log("hola 123");
    this.loadData()
    setInterval(this.changeButtonText, 2000);
    console.log("hola 456");

    console.log("hola 789");
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
    loadData() {
      axios.get("/api/components")
        .then((response) => {
          console.log("buen dia");
          this.products = response.data;
          this.productsFiltered = response.data;
          this.productCategory = [...new Set(this.products.map((product) => product.category))];
          this.productBrand = [...new Set(this.products.map((product) => product.brand))];
          this.productColor = [...new Set(this.products.map((product) => product.colors))];
          this.productColorReduced = this.productColor.reduce((r, e) => (r.push(...e), r), []);
          this.productColorFinal = [...new Set(this.productColorReduced)].sort();
          this.productPrice = [...new Set(this.products.map((product) => product.price))];
          this.addRange(this.products);
          console.log("hola");
        })
        .catch(error => console.log(error));
    },
    colorDropdown() {
      this.showColors = !this.showColors;
      console.log(this.showColors)
    },
    priceDropdown() {
      this.showPrice = !this.showPrice;
      console.log(this.showPrice)
    },
    categoryDropdown() {
      this.showCategory = !this.showCategory;
      console.log(this.showCategory)
    },
    brandDropdown() {
      this.showBrand = !this.showBrand;
      console.log(this.showBrand)
    },
    showFilter() {
      this.filterShow = !this.filterShow;
    },
    clearFilters() {
      this.colors = [],
        this.prices = [],
        this.brands = [],
        this.categories = []
    },
    addRange(products) {
      for (product of products) {
        if (product.price < 100) {
          product.priceRange = "Under $100"
        } else if (product.price >= 100 && product.price < 200) {
          product.priceRange = "$100 - $200"
        } else if (product.price >= 200 && product.price < 300) {
          product.priceRange = "$200 - $300"
        } else if (product.price >= 300) {
          product.priceRange = "Over $300"
        }

      }
    }


  },
  computed: {
    priceRange() {
      console.log('hello')
      this.priceRange = this.prices.map(range => range.min)
    },
    buttonText() {
      return this.buttonTexts[this.currentIndex];
    },



    filter() {
      console.log(this.prices.length);
      if (this.prices.length > 0) {
        this.priceMin = Math.min(...this.prices.map(range => range.min));
        this.priceMax = Math.max(...this.prices.map(range => range.max));
      }
      console.log(this.priceMin);
      console.log(this.priceMax);
      this.productsFiltered = this.products.filter(
        (product) =>
          (this.brands.includes(product.brand) || this.brands.length == 0) &&
          (this.categories.includes(product.category) || this.categories.length == 0) &&
          (product.colors.some(color => this.colors.includes(color)) || this.colors.length == 0) &&
          (this.prices.includes(product.priceRange) || this.prices.length == 0)
      );
    },
  },
}).mount('#app')

