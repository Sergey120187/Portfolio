$(function () {

  // $('[data-facnybox=".portfolio__link"]').fancybox({
  //   "width": "1000px",
  // })

  $('.header__btn, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu--active'),
      $('.btn-menu__line').toggleClass('btn-menu__line--hidden'),
      $('body').toggleClass('fixed');
  });

  $('.menu__link').on('click', function () {
    $('body').removeClass('fixed');
  });

  $(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position > 70) {
      $('.header__nav-wrapper').addClass('header__nav-wrapper--bg');
    }
    else {
      $('.header__nav-wrapper').removeClass('header__nav-wrapper--bg');
    } 
  });

  // $(document).on('scroll', function () {
  //   var position = $(window).scrollTop(),
  //   about_position = $('#about').offset().top;
  //   if ((position + 1) > about_position) {
  //     $('.header__nav-wrapper').addClass('header__nav-wrapper--bg');
  //   } else {
  //     $('.header__nav-wrapper').removeClass('header__nav-wrapper--bg');
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
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});





