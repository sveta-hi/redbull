$('.bxslider-header').bxSlider({
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 360,
    slideMargin: 50,
    speed: 1000,
    auto: true,
  });
  $('.slider-pingbuller').bxSlider({
    slideMargin: 0,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 450,
    adaptiveHeight: true,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    speed: 1000,
    auto: true,
  });

  $('.slider-icon').bxSlider({
    minSlides: 6,
    maxSlides: 6,
    slideWidth: 120,
    slideMargin: 10,
    ticker: true,
    speed: 5000
  });