/*---------------------------------------------
Template name:  Ostion
Version:        1.0
Author:         Layerdrops
Description:    Ostion - Construction & Industry Building Company HTML5 Template
Author Email:   layerdrops@gmail.com


[Table of Content]

01: Revolution Slider
02: Preloader
03: side-widget-menu
04: Mobile Menu Open Control
05: Mobile Menu Close Control
06: Back to Top Button and navbar scrolling effects
07: back to top button click control
08: Counter up
09: service-wrap
10: service-wrap 2
11: testimonial-wrap
12: article-wrap
13: Client logo
14: magnific-popup
15: project-popup-link
16: FAQ
18: isotope
19: animated skills
20: accordion
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    $(document).on('ready', function () {

        /*=============================
               Revolution Slider
         ============================*/
        var tpj=jQuery;

        /*====  rev_slider_1 =====*/
        var rev_slider_1;
        if(tpj("#rev_slider_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_1");
        }else{
            rev_slider_1 = tpj("#rev_slider_1").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:7000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },

                    bullets: {
                        enable:true,
                        hide_onmobile:true,
                        style:"metis",
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:30,
                        space:5
                    }
                },
                responsiveLevels:[1240,1240,1240,320],
                visibilityLevels:[1240,1240,1240,320],
                gridwidth:[1240,1240,1240,320],
                gridheight:[868,868,868,320],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
                },
            });
        }

        /*====  rev_slider_2 =====*/
        var rev_slider_2;
        if(tpj("#rev_slider_2").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_2");
        }else{
            rev_slider_2 = tpj("#rev_slider_2").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:7000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:30,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:30,
                            v_offset:0
                        }
                    }
                },
                responsiveLevels:[1920,1199,991,320],
                visibilityLevels:[1920,1199,991,320],
                gridwidth:[1170,970,750,620],
                gridheight:[1040,1020,850,820],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
                },
            });
        }

        /*==== Preloader =====*/
        $(window).on('load', function(){
            $('#loading-area').delay('500').fadeOut(2000);
        });

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.mobile-menu-toggle', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });

        /*===== Back to Top Button and navbar scrolling effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 100) {
                $('.header-top').addClass('header-fixed');
            }else{
                $('.header-top').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').addClass('back-btn-shown');
            } else {
                $('#back-to-top').removeClass('back-btn-shown');
            }

        });

        /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== Counter up =====*/
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });

        /*==== service-wrap =====*/
        $('.service-wrap').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            dots: false,
            smartSpeed: 700,
            autoplay: false,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 600 up
                600 : {
                    items: 1
                },
                // breakpoint from 992 up
                992 : {
                    items: 3
                }
            }
        });
        /*==== owl-navs =====*/
        $( '.service-wrap .owl-prev').html('<i class="fa fa-angle-left"></i>');
        $( '.service-wrap .owl-next').html('<i class="fa fa-angle-right"></i>');

        /*==== service-wrap 2 =====*/
        $('.service-wrap2').owlCarousel({
            loop: true,
            items: 5,
            nav: true,
            dots: false,
            smartSpeed: 700,
            autoplay: false,
            margin: 10,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 600 up
                600 : {
                    items: 4
                },
                // breakpoint from 992 up
                992 : {
                    items: 5
                }
            }
        });
        /*==== service-wrap2 owl-navs =====*/
        $( '.service-wrap2 .owl-prev').html('<i class="fa fa-angle-left"></i>');
        $( '.service-wrap2 .owl-next').html('<i class="fa fa-angle-right"></i>');


        /*==== testimonial-wrap =====*/
        $('.testimonial-wrap').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplay: true,
            margin: 30,
            responsive:{
                320:{
                    items:1,
                },
                991:{
                    items:2,
                },
                1440:{
                    items:5,
                }
            }
        });

        /*==== article-wrap =====*/
        $('.article-wrap').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: false,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 600 up
                600 : {
                    items: 1
                },
                // breakpoint from 991 up
                1199 : {
                    items: 2
                },
                // breakpoint from 992 up
                1400 : {
                    items: 3
                }
            }
        });


        /*==== Client logo =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 5,
            nav: false,
            dots: false,
            smartSpeed: 700,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 425 up
                425 : {
                    items: 2
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 767 up
                767 : {
                    items: 4
                },
                // breakpoint from 992 up
                992 : {
                    items: 5
                }
            }
        });

        /*==== magnific-popup =====*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*==== project-popup-link =====*/
        $('.project-popup-link').magnificPopup({
            type: 'image'
            // other options
        });

        /*====  FAQ  =====*/
        $(document).on('click', '.faq-heading', function () {
            $(this).closest('.faq-panel').siblings().removeClass('active').find('.faq-content').slideUp(200);
            $(this).closest('.faq-panel').toggleClass('active').find('.faq-content').slideToggle(200);
            return false;
        });

        /*====  Isotope  =====*/
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            getSortData: {
                name: '.name',
                symbol: '.symbol',
                number: '.number parseInt',
                category: '[data-category]',
                weight: function( itemElem ) {
                    var weight = $( itemElem ).find('.weight').text();
                    return parseFloat( weight.replace( /[\(\)]/g, '') );
                }
            }
        });

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
            }
        };

        // bind filter button click
        $('#filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });

        // animated skills
        $(window).on('scroll', function () {
            var my_skill = '.skill-area .skills .skill';
            if ($(my_skill).length !== 0){
                spy_scroll(my_skill);
            }
        });

        /*====  accordion  =====*/
        $(document).on('click', '.accordion__title', function () {
            $(this).closest('.accordion-panel').siblings().removeClass('active').find('.accordion__content').slideUp(200);
            $(this).closest('.accordion-panel').toggleClass('active').find('.accordion__content').slideToggle(200);
            return false;
        });


    });
})(jQuery);

