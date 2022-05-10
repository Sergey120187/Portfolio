$(function(){
  var mixer = mixitup('.portfolio__gallery');
  $('.reviews__list').slick({
    arrows: false,
    dots: true
  });
});




Fancybox.bind("[data-fancybox]", {
  Image: {
    Panzoom: {
      zoomFriction: 0.9,
      maxScale: function () {
        return 4;
      },
    },
  },
});

