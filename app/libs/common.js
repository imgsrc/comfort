$(window).on('load', function() {

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
        $('header').height($(window).height());
    } else {
        $('header').css('height', '100%');
    }


    //Popup-всплывающая форма
    $(".popup-with-move-anim").magnificPopup({
        type: 'inline',

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $("a[href=#callback]").on("click", function () {
        $("#callback .formname").val($(this).data("form"));
    });

    //E-mail Ajax Send
    $(".bottom-form, .top-form, .callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".answer_form").fadeIn();
            setTimeout(function() {
                // Done Functions
                $.magnificPopup.close();
                th.trigger("reset");
                $(".answer_form").fadeOut();
            }, 2000);
        });
        return false;
    });


    $('.popup_content').magnificPopup({
        type: 'inline',
        midClick: true
    });


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


    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }


    // $("img, a").on("dragstart", function (event) {
    //     if ($(this).attr("href") === "#")
    //         event.preventDefault();
    // });

});
