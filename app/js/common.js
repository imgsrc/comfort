$(window).on('load', function() {

    $('.popup_content').magnificPopup({
        type: 'inline',
        midClick: true,
    });

    //Mobile Detect
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

    // //Parallax
    // $(window).scroll(function () {
    //     var st = $(this).scrollTop()/20;
    //
    //     $(".featured img").css({
    //         "transform" : "translate3d(0px, " + st  + "%, .01px)",
    //         "-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
    //     });
    //
    // });

    //Parallax for Stellar
    $('.parallax').stellar({
        verticalOffset: 300,
        horizontalScrolling: false,
        verticalScrolling: true,
        parallaxBackgrounds: true,
        offsetParent: true,
        backgroundRatio: 2
    });

    //WOW animated plugin
    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       100,          // отступ до элемента, когда будет срабатывать анимация, по умолчанию 0
            mobile:       false,
            live:         true
        }
    );
    wow.init();

});
