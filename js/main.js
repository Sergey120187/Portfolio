$(function () {

  $('.header__btn, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu--active'),
    $('.header__btn').toggleClass('header__btn--open'),
    $('#body').toggleClass('fixed');
  });

  $('.menu__link').on('click', function () {
    $('body').removeClass('fixed');
  });

  $(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position > 50) {
      $('.header__top').addClass('header__top--bg'),
      $('.header__nav').addClass('header__nav--bg');      
    }
    else {
      $('.header__top').removeClass('header__top--bg'),
      $('.header__nav').removeClass('header__nav--bg');
    } 
  });

// Оставлю здесь, пригодится для будущих проектов!

  // $(document).on('scroll', function () {
  //   var position = $(window).scrollTop(),
  //   about_position = $('#about').offset().top;
  //   if ((position + 1) > about_position) {
  //     $('.header__top').addClass('header__top--bg');
  //   } else {
  //     $('.header__top').removeClass('header__top--bg');
  //   }
  // });

  $('.reviews__list').slick({
    arrows: false,
    dots: true
  });

  var mixer = mixitup('.portfolio__gallery');

  $(".menu__link, .logo, .header__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top }, 1500);
  });
});





