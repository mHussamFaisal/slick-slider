$(document).ready(function(){

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.thumbnail_slider'
      });
      $('.thumbnail_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.banner_slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
      });
});