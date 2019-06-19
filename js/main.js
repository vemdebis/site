'use strict';

$(document).ready(function () {

    // TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1')],
                startDelay: 1000,
                typeSpeed: 10,
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



});




































