$(function () {

  // $('[data-facnybox=".portfolio__link"]').fancybox({
  //   "width": "1000px",
  // })

  const mediaQuery = window.matchMedia('(max-width: 992px)')

  if (mediaQuery.matches) {
    // alert('Media Query Matched!')
    $('.header__btn, .menu__link').on('click', function () {
      $('.menu').toggleClass('menu--active'),
      $('.btn-menu__line').toggleClass('btn-menu__line--hidden'),
      $('body').toggleClass('fixed');
    });
  }

  $(window).scroll(function() {
    $('.header__nav-inner').addClass('header__nav-inner--bg');
  });


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





