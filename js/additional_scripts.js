$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$(".promo-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: $(".promo_arrow .row"),
        appendDots: $(".promo_dots .row")
    });


    $(".products-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $(".testimonial-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

});

