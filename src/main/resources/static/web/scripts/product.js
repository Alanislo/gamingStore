const { createApp } = Vue


createApp({
  data() {
    return {
      color: "black",
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


