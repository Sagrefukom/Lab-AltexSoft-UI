$(function (){
    $('#burger-button').on('click', function() {
        $('.nav').toggleClass('nav--burger');
        $('.burger__button-item').toggleClass('active');
      });
      $(window).on('resize', function() {
        const currentWindowWidth = $(this).innerWidth();

        if (currentWindowWidth > 768 &&  $('.nav').hasClass('nav--burger')) {
          $('.nav').removeClass('nav--burger')
        }
      });
});
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});