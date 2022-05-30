$(function(){

  // $('[data-facnybox=".portfolio__link"]').fancybox({
  //   "width": "1000px",
  // })
  
    $('.header__btn').on('click', function(){
      $('.menu').toggleClass('menu--active');
      $('.header__btn').toggleClass('header__btn--active');

    });

    $('.reviews__list').slick({
      arrows: false,
      dots: true
    });
    
    var mixer = mixitup('.portfolio__gallery');
});





