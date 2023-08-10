function partnersSlider() {
  var slider = tns({
    mode: 'carousel',
    container: '.testi-slider',
    center: true,
    loop: false,
    swipeAngle: false,
    nav: true,
    navPosition: 'bottom',
    speed: 400,
    responsive: {
        320: {
            // gutter: 20,
            controls: false
        },
        400: {
            // gutter: 20,
            controls: true
        },
        640: {
            // gutter: 20,
            controls: true
        },
        700: {
            // gutter: 30,
            controls: true
        },
        900: {
            items: 1,
            // gutter: 80,
            controls: true
        }
    }
  });

  var slider = tns({
      container: ".logo-slider",
      controls: false,
      nav: false,
      gutter: 15,
      navAsThumbnails: false,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayButtonOutput: false,
      swipeAngle: false,
      speed: 400,
      responsive: {
          320: {
              items: 2,
          },
          400: {
              items: 3,
          },
          640: {
              items: 3,
          },
          700: {
              items: 5,
          },
          900: {
              items: 5,
          }
      }
  });

}
