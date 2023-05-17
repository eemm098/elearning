$(document).ready(function () {
  "use strict";

  // slider height
  var winH = $(window).height(),
    navH = $(".navbar").innerHeight();

  $(".home , .home .carousel-item ").height(winH - navH);

  // scroll to top
  window.onscroll = function () {
    if (window.scrollY >= 1000) {
      $(".scroll-to-top").css("display", "block");
    } else {
      $(".scroll-to-top").css("display", "none");
    }
  };
  $(".scroll-to-top").on("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

var swiper = new Swiper(".course-swiper", {
  loop: true,
  centeredslides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false
  },
  
    navigation :{
    nextEl:    ".swiper-button-next"       ,
     prevEl:     ".swiper-button-prev"      ,

    },
  breakpoints: {
    375: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
   
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});