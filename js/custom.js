$(document).ready(function () {
    $("#banner").owlCarousel({
      items: 3,
      dots: false,
      // margin: 10,
      loop: true,
      // autoplayspeed:true,
      autoplay:true,
      // autoplaytimeout: 3000,
      //center: true,
      //mouseDrag: true,
      //pullDrag: true,
      //freeDrag: true
      //stagePadding: 50,
      //startPosition: 3,
      //startPosition: 'URLHash'
      // nav: false,
      //dots: false,
      // dotsEach: true,
    });
    new WOW().init();
  
    var owl = $('#banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
      new WOW().init();
    })
  
    $('#auther').owlCarousel({
      items:1,
      dots:false,
      loop:true,
      // margin:10,
      nav:false,
      autoplay:true,
      
  })
  $('#team').owlCarousel({
    items:3,
    dots:true,
    loop:true,
    // dotsEach:true,
    autoplay:true,
  })
  })
  