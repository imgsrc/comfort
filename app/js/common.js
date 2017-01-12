$(document).ready(function() {

    jQuery("#bgndVideo").YTPlayer();

	if(!device.tablet() && !device.mobile()) {
	    $('player').mb_YTPlayer();
    } else {
	    //Если мобильные девайсы
    }

    $('header').height($(window).height());

});
