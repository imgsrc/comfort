$(document).ready(function() {


    var md = new MobileDetect(window.navigator.userAgent);
    if(!md.mobile()) {
        $('.player').mb_YTPlayer({
            videoURL: 'https://youtu.be/-nGuAFKg7FQ',
            containment: 'header',
            showControls: false,
            autoPlay: true,
            mute: true,
            startAt: 0,
            opasity: 1
        });
    } else {
	    //Если мобильные девайсы
    }


    $('header').height($(window).height());

    //Owl Carousel 2
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        smartSpeed:1500, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});
