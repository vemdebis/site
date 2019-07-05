'use strict';

$(document).ready(function () {

    // TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1')],
                startDelay: 1000,
                typeSpeed: 40,
                cursorChar: "|",
                backSpeed: -100,
                backSpeedDelay: 50,
                backDelay: 500,
                loop: false,
                contentType: 'html',
                loopCount: false
            });
        });
    }

      //TWITTER
      if ($('.widget-twitter .tweet').length) {
        $('.widget-twitter .tweet').twittie({
            username: 'vemdebis'
            , list: null
            , dateFormat: '%B %d, %Y'
            , template: '{{tweet}} <br/> <span class="date">{{date}}</span>'
            , count: 10

        }, function () {
            setInterval(function() {
                var item = $('.widget-twitter .tweet ul').find('li:first');

                item.animate( {marginLeft: '-220px', 'opacity': '0'}, 500, function() {
                    $(this).detach().appendTo('.widget-twitter .tweet ul').removeAttr('style');
                });
            }, 5000);
        });
    }




});




































