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

});