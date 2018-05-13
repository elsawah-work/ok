/*
------------------------------------------
------------------------------------------
Template Name: " Digest html template "
Template URI: http://sobuj4u.com
Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
Author: Theme bazar
Author URI: http://sobuj4u.com
Version: 1.0
File Name : Active Js File
------------------------------------------
------------------------------------------
*/
(function($) {
    "use strict";

    // Sticky Menu
    $(".stickyNav").sticky({
        topSpacing: 0,
        zIndex: 111
    });

    $(".menu-bars").on("click", function() {
        $('.navigation').toggleClass('active');
        $(this).toggleClass('active');

        return false;
    });

    $(".navigation li a").on('click', function() {
        $(".navigation").removeClass("active");
        $(".menu-bars").removeClass("active");
    });

    // Smooth Scroll Effect
    $('li.smooth-scroll a').on('click', function(event) {
        var $anchor = $(this);
        var headerHeight = $('header').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    //Scroll To top Function apply
    $(window).scroll(function() {
        var ScrollToTop = $(window).scrollTop();
        if (ScrollToTop > 500) {
            $(".ScrollToTop").fadeIn();
        } else {
            $(".ScrollToTop").fadeOut();
        }
    });

    //Scroll To top With animate
    $(".ScrollToTop").on('click', function() {
        $("body, html").animate({
            'scrollTop': 0
        }, 1000, 'easeInOutExpo');
        return false;
    });

    // Home Slider
    $(".home-slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 600
    });

    $("#home-slider").on("translate.owl.carousel", function() {
        $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single-slide-item .digest-btn").removeClass("animated fadeInDown").css("opacity", "0");
        $(".single-slide-item img").removeClass("animated fadeIn").css("opacity", "0");
    });

    $("#home-slider").on("translated.owl.carousel", function() {
        $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single-slide-item .digest-btn").addClass("animated fadeInDown").css("opacity", "1");
        $(".single-slide-item img").addClass("animated fadeIn").css("opacity", "1");
    });

    // Active Data Filter on isotope
    $(".portfolio-menu li").on('click', function() {

        // Active class add & remove
        $(".portfolio-navigation li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".portfolio-items").isotope({
            filter: selector
        });

    });

    // Magnific Portfolio Popup
    $('.works-view').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });

    // testimonial Slider
    $('.testimonial-slider-wrap').owlCarousel({
    loop:true,
    margin:10,
    items:1,
})

    // Progress Bar
    $('.progress-wraper').waypoint(function() {
        $('.progress-bar').addClass('slideInLeft');
    }, {
        triggerOnce: true,
        offset: '70%'
    });

    function RXknob(RXknobClass) {
        RXknobClass = $(RXknobClass);
        RXknobClass.each(function() {
            var $this = $(this),
                knobVal = $this.attr('data-rel'),
                knobAnimate = function() {
                    $({
                        value: 0
                    }).animate({
                        value: knobVal
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        progress: function() {
                            $this.val(Math.ceil(this.value)).trigger('change');
                        }
                    });
                };
            $this.knob({
                'draw': function() {
                    $(this.i).val(this.cv + '%').css('font-size', '36px').css('color', '#333').css('width', '100%').css('margin-left', '-245px');
                }
            });
            $this.waypoint(knobAnimate, {
                offset: 'bottom-in-view'
            });
        });
    }
    
    RXknob('.skill');

    $('.skill').trigger(
        'configure', {
            "fgColor": "#231f20",
            "bgColor": "#c9c8c8",
            "thickness": ".15",
            "width": "150"
        }
    );

    // Brand Activation
    $(".brand-slides").owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                center: true,
                margin: 0
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1024: {
                items: 4
            },
            1100: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

    // WOW JS
    new WOW().init();

    $(window).on('load', function() {
        $("#home-slider .owl-controls").addClass("container");
        $(".portfolio-items").isotope();
        $(".digest-preloader").fadeOut(500);
    });

}(jQuery));