/* -----------------------------------------------------------------------------

    Oki - Advanced Personal Resume / CV vCard Template

    File:           JS Custom
    Version:        1.0
    Last change:    00/00/2018

----------------------------------------------------------------------------- */

(function ($) {

    'use strict';
    
    new WOW().init();

    /*-----------------------------------------------------------------------------------*/
    /*  Start Music Section
    /*-----------------------------------------------------------------------------------*/    
    
    $(".header .right-head .items-head hr.download-cv, .header .right-head .items-head button").on('click', function(){
        
        var playerMouseovergallery = document.getElementById("pauseAudio");
        
        playerMouseovergallery.pause();
        
        document.getElementById("stop-music").innerHTML = "dblclick For Play Music Again";
       
    });
    
    $(".header .right-head .items-head hr.download-cv, .header .right-head .items-head button").on('dblclick', function(){
        
        var playerMouseovergallery = document.getElementById("pauseAudio");
        
        playerMouseovergallery.play();
        
        document.getElementById("stop-music").innerHTML = "Stop Play Music";
        
    });
    
    var audioVolume = document.getElementById("pauseAudio");

    function getVolume() { 
        
            audioVolume.volume = 0.2;

    } 
    
    getVolume();
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*-----------------------------------------------------------------------------------*/
    
    function loader() {

        $(window).on('load', function() {

            var loader = $('.loader');
            var wHeight = $(window).height();
            var wWidth = $(window).width();
            var i = 0;

            /*Center loader on half screen */
            loader.css({

                top: wHeight / 2 - 2.5,
                left: wWidth / 2 - 200

             })

             do{

                loader.animate({

                  width: i
                },10)

                i+=3;

              } while(i <= 400)

              if(i === 402){

                loader.animate({

                  left: 0,
                  width: '100%'

                })

                loader.animate({

                  top: '0',
                  height: '100vh'

                })

              }

            /* This line hide loader and show content */
            setTimeout(function(){

                $('.loader-wrapper').fadeOut();
                $(loader).fadeOut();
                $('.loader-wrapper').remove();
                $(".into").fadeIn();

                /*Set time in milisec */
              },3500);
            });
        
    }

    loader();
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start NiceScroll
    /*-----------------------------------------------------------------------------------*/

    // Change Scroll Design For Mobile
    
    var blockNiceScroll = $(window).width();
    
    if(blockNiceScroll >= 768) {
    
        $("body").niceScroll({
            
            cursorcolor: "rgb(0, 150, 136)",
            cursorborder: "1px solid rgb(0, 150, 136)",
            cursorwidth: "6px",
            zindex:99999999,
            cursorborderradius: "0px", 
            
        });
        
    }else {
        
        $("body").getNiceScroll().remove();
    }
    
    // Repeat Code Change Design Scroll For Responsive

    $(window).on('resize', function(){ 
        
    var blockNiceScroll = $(window).width();
    
    if(blockNiceScroll >= 767) {
    
        $("body").niceScroll({

            cursorcolor: "#d9bf77",
            cursorborder: "1px solid #d9bf77",
            cursorwidth: "6px",
            zindex:99999999

        });
        
    }else {
        
        $("body").getNiceScroll().remove();
    }

    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Navigation - Menu
    /*-----------------------------------------------------------------------------------*/    
    
    $('.menu-nav .icon-menu .icon').on('click', function(){
       
        $(this).fadeOut(function(){
            
            $('.menu-nav .navbar-right').fadeIn();

        });
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start About Me
    /*-----------------------------------------------------------------------------------*/
        
    $(window).scroll(function () {

    var heightScrollAnimation = $(this).scrollTop();

    if(heightScrollAnimation >= 130){
        
        $(".lines-about span.line:nth-child(1)").attr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").attr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").attr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").attr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").attr("id","chnage-place-5");
        
        }else{

            $(".lines-about span.line:nth-child(1)").removeAttr("id","chnage-place-1");
            $(".lines-about span.line:nth-child(2)").removeAttr("id","chnage-place-2");
            $(".lines-about span.line:nth-child(3)").removeAttr("id","chnage-place-3");
            $(".lines-about span.line:nth-child(4)").removeAttr("id","chnage-place-4");
            $(".lines-about span.line:nth-child(5)").removeAttr("id","chnage-place-5");
        }
        
    });
    
    $(window).on('resize', function(){
        
    $(window).scroll(function () {

    var heightScrollAnimation = $(this).scrollTop();

    if(heightScrollAnimation >= 130){
        
        $(".lines-about span.line:nth-child(1)").attr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").attr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").attr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").attr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").attr("id","chnage-place-5");

    }else{
        
        $(".lines-about span.line:nth-child(1)").removeAttr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").removeAttr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").removeAttr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").removeAttr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").removeAttr("id","chnage-place-5");
    }
        
    });

    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start My Skills 
    /*-----------------------------------------------------------------------------------*/
        
    $(window).scroll(function () {

    var heightScrollAnimation = $(this).scrollTop();

    if(heightScrollAnimation >= 1225){
        
        $(".lines-skills span.line:nth-child(1)").attr("id","chnage-place-6");
        $(".lines-skills span.line:nth-child(2)").attr("id","chnage-place-7");
        $(".lines-skills span.line:nth-child(3)").attr("id","chnage-place-8");
        $(".lines-skills span.line:nth-child(4)").attr("id","chnage-place-9");
        $(".lines-skills span.line:nth-child(5)").attr("id","chnage-place-10");
        
        }else{

            $(".lines-skills span.line:nth-child(1)").removeAttr("id","chnage-place-6");
            $(".lines-skills span.line:nth-child(2)").removeAttr("id","chnage-place-7");
            $(".lines-skills span.line:nth-child(3)").removeAttr("id","chnage-place-8");
            $(".lines-skills span.line:nth-child(4)").removeAttr("id","chnage-place-9");
            $(".lines-skills span.line:nth-child(5)").removeAttr("id","chnage-place-10");
        }
        
    });
    
    $(window).on('resize', function(){
        
    $(window).scroll(function () {

    var heightScrollAnimation = $(this).scrollTop();

    if(heightScrollAnimation >= 1225){
        
        $(".lines-skills span.line:nth-child(1)").attr("id","chnage-place-6");
        $(".lines-skills span.line:nth-child(2)").attr("id","chnage-place-7");
        $(".lines-skills span.line:nth-child(3)").attr("id","chnage-place-8");
        $(".lines-skills span.line:nth-child(4)").attr("id","chnage-place-9");
        $(".lines-skills span.line:nth-child(5)").attr("id","chnage-place-10");

        }else{

            $(".lines-skills span.line:nth-child(1)").removeAttr("id","chnage-place-6");
            $(".lines-skills span.line:nth-child(2)").removeAttr("id","chnage-place-7");
            $(".lines-skills span.line:nth-child(3)").removeAttr("id","chnage-place-8");
            $(".lines-skills span.line:nth-child(4)").removeAttr("id","chnage-place-9");
            $(".lines-skills span.line:nth-child(5)").removeAttr("id","chnage-place-10");
        }
        
    });

    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start My Services Section 
    /*-----------------------------------------------------------------------------------*/
    
    $(".services .box-services .info-services, .services .box-services .info-services .items-info-services, .services .box-services .overlay-services").width($(".services .box-services").width());
    
    $(window).on('resize', function(){ 
        
        $(".services .box-services .info-services, .services .box-services .info-services .items-info-services, .services .box-services .overlay-services").width($(".services .box-services").width());
        
    });  
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Portfolio Section
    /*-----------------------------------------------------------------------------------*/
    
    $(".portfolio .box-portfolio .items-portfolio .picture-portfolio img").height($(".portfolio .box-portfolio .info-portfolio").height());
    
    $(window).on('resize', function(){ 
        
        $(".portfolio .box-portfolio .items-portfolio .picture-portfolio img").height($(".portfolio .box-portfolio .info-portfolio").height());
        
    }); 
    
	$('.multiple-items').slick({
      arrows: false,
  	  dots: false,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
            arrows: false,
              slidesToShow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		}
	  ]
	});
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Blogs Section
    /*-----------------------------------------------------------------------------------*/
    
    $(".blogs .box-blogs .items-blogs .picture-blogs img").height($(".blogs .box-blogs .info-blogs").height());
    
    $(window).on('resize', function(){ 
        
        $(".blogs .box-blogs .items-blogs .picture-blogs img").height($(".blogs .box-blogs .info-blogs").height());
        
    }); 
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Smoth Scroll
    /*-----------------------------------------------------------------------------------*/
    
    $(".menu-nav .navbar-right a.scroll-home").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $(".header").offset().top
            
        },1000);
        
    });
    
    $(".menu-nav .navbar-right a.scroll-services").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $(".services").offset().top
            
        },2000);
        
    });
    
    $(".menu-nav .navbar-right a.scroll-portfolio").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $(".portfolio").offset().top
            
        },2000);
        
    });
    
    $(".menu-nav .navbar-right a.scroll-blogs").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $(".blogs").offset().top
            
        },2500);
        
    });
    
    
    $(".menu-nav .navbar-right a.scroll-contact").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $(".contact").offset().top + 50
            
        },2500);
        
    });
    
    
    
})(jQuery);	

/*-----------------------------------------------------------------------------------*/
/*      * End  
/*-----------------------------------------------------------------------------------*/