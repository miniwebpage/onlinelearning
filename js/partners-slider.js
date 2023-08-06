
function testiSlider() {
  // Owl Carousel
  var owl = $(".testi-slider .owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 61,
    loop: true,
    nav:true,
    navContainer:'.owl-nav',
    lazyLoad: true,
    navText: [
        "<img src='images/icons/linear-arrow-prev.svg' loading='eager' alt='linear-arrow-prev' title='linear-arrow-prev' width='33' height='20'>",
        "<img src='images/icons/linear-arrow-next.svg' loading='eager' alt='linear-arrow-next' title='linear-arrow-next' width='33' height='20'>"
        ],
    rtl: false,
    loop:true,
    center: true,
    animateIn: 'linear',
    // animateOut: 'linear',
    // autoplay:true,
    // autoplayTimeout:9000,
    // autoplayHoverPause:false,
    dots: true,
    dotsEach:true,
    responsiveClass:true,
    responsive:{
        0:{
          nav:false,
          margin: 30,
        },
        600:{
          nav:false,
          margin: 30,
        },
        700:{
          nav:false,
          margin: 30,
        },
        900:{
          nav:false,
          margin: 30,
        },
        1000:{
          // margin: 40
        }
    }
  });
}

function logoSlider() {
  // Owl Carousel
  var owl = $(".logo-slider .owl-carousel");
  owl.owlCarousel({
    lazyLoad: true,
    loop: true,
    items: 7,
    margin: 15,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 9500,
    autoplaySpeed: 9500,
    smartSpeed: 9500,
    // center: true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
          items: 3,
        },
        600:{
          items: 4,
        },
        700:{
          items: 4,
        },
        900:{
          items: 5,
        },
        1000:{
        }
    }
    });


    jQuery('.logo-slider').trigger('play.owl.autoplay',[9500]);

    function setSpeed(){
        jQuery('.logo-slider').trigger('play.owl.autoplay',[9500]);
    }

    setTimeout(setSpeed, 9500);
}
