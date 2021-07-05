// INITIALIZE SWIPER
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// FUNCTION FOR ALERT BUTTON
const callAlert = () => {

    Swal.fire({
    // title: 'Codefactory!',
    text: 'A place where you become a Front End Developer 👨‍💻',
    // icon: 'info',
    width: 400,
    confirmButtonColor: "#8C181B",
    confirmButtonText: 'Ok, got it!',
    imageUrl: 'img/logo.png',
    imageWidth: 250,
    imageHeight: 86,
    imageAlt: 'Custom image',
  })

}

document.getElementById("cf-logo").addEventListener("click", callAlert);