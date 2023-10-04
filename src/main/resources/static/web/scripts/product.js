const { createApp } = Vue


createApp({
  data() {
    return {
      color: "black",
      isOverlayVisible: false,
      buttonTexts: ['Log In', 'Register'],
      currentIndex: 0,
      isLoggedIn: false,
      client: [],
    }
  },
  created() {
    setInterval(this.changeButtonText, 2000);
    this.loadData()
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
    loadData() {
      axios.get('/api/clients/current')
        .then(response => {
          this.client = response.data
        })
        .catch(error => console.error('Error:', error));
    },
    logout() {
      Swal.fire({
        title: 'Do you want to log out of your account?',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Sure',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          axios.post(`/api/logout`)
            .then(response => {
              this.isLoggedIn = false;
              localStorage.removeItem('isLoggedIn');
              Swal.fire({
                icon: 'succes',
                title: response.data,
                text: `You have successfully logged out.`,
                customClass: {
                  popup: 'custom-alert',
                }
              });
              setTimeout(() => {
                window.location.href = "../../index.html"
              }, 2000);
            })
            .catch(error => {
              console.error('Error:', error);
              Swal.fire({
                icon: 'error',
                title: error.response.data,
                confirmButtonText: 'OK',
                customClass: {
                  popup: 'custom-alert',
                }
              });
            })
        },
        allowOutsideClick: () => !Swal.isLoading(),
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


