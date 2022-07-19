$(function(){

  // $('[data-facnybox=".portfolio__link"]').fancybox({
  //   "width": "1000px",
  // })
  
    $('.header__btn').on('click', function(){
      $('.menu').toggleClass('menu--active'),
      $('.btn-menu__line').toggleClass('btn-menu__line--hidden'),
      $('body').toggleClass('fixed');

    });

    $('.reviews__list').slick({
      arrows: false,
      dots: true
    });
    
    var mixer = mixitup('.portfolio__gallery');

    $(".menu a, .logo, .header__link").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });
});





