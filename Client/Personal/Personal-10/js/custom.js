/* -----------------------------------------------------------------------------

    Oki - Advanced Personal Resume / CV vCard Template

    File:           JS Custom
    Version:        1.0
    Last change:    24/3/2018

----------------------------------------------------------------------------- */

(function ($) {

    'use strict';
    
    new WOW().init();
    
    var win = $(window);

        win.on('load',function() {
           
        $('#loader').fadeOut();
        new WOW().init();
            
        var playervideo2 = document.getElementById("videoplay");

        playervideo2.pause();
            
        $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
        $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
            
    });

    /*-----------------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*-----------------------------------------------------------------------------------*/
    
    $('.menu .icon-menu img').on('click', function() {
        $('.header .head-left, .header .tree, .menu .icon-menu img').attr('id', 'hid-box-left-head');
        $('.social-head').hide();
        $('.menu .icon-menu .icon').attr('id', 'vis-menu-close');
        $('.list-menu').show();
    });
    
    $('.menu .icon-menu .icon').on('click', function() {
        $('.header .head-left, .header .tree, .menu .icon-menu img').attr('id', 'vis-menu-close');
        $('.social-head').show();
        $('.menu .icon-menu .icon').attr('id', 'hid-box-left-head');
        $('.list-menu').hide();
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Smoth Scroll
    /*-----------------------------------------------------------------------------------*/
    
    $('#pagepiling').pagepiling({
        
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage', 'eightPage'],
        menu: '#menu',
		afterLoad: function(anchorLink, index){
            
			//using anchorLink
			if(anchorLink == 'firstPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');

			}
            
			//using anchorLink
			if(anchorLink == 'secondPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');

			}
            
			//using anchorLink
			if(anchorLink == 'thirdPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
                
			}
            
			//using anchorLink
			if(anchorLink == 'fourthPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');

                var player = document.getElementById("videoplay");

                player.play();    
                
			}
            
			//using anchorLink
			if(anchorLink == 'fivePage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
                
			}
            
			//using anchorLink
			if(anchorLink == 'sixPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
                $(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());

                $(window).on('resize', function(){ 

                $(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());

    });
			}
            
			//using anchorLink
			if(anchorLink == 'sevenPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
                
			}
            
			//using anchorLink
			if(anchorLink == 'eightPage'){
                
                $('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
                $('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
                
			}
            
		}
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Menu Navigation
    /*-----------------------------------------------------------------------------------*/

    $('.list-menu .list-unstyled li a').on('click', function(){
    
        $('.header .head-left, .header .tree, .menu .icon-menu img').attr('id', 'vis-menu-close');
        $('.social-head').show();
        $('.menu .icon-menu .icon').attr('id', 'hid-box-left-head');
        $('.list-menu').hide();
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Video Background
    /*-----------------------------------------------------------------------------------*/

    //For Firefox we have to handle it in JavaScript 
    var vids = $("#videoplay"); 
    
    $.each(vids, function(){
        
           this.controls = false; 
        
    }); 

    //Loop though all Video tags and set Controls as false

    $("#videoplay").on('click', function() {
        
      //console.log(this); 
        
      if (this.paused) {
          
        this.play();
          
      } else {
          
        this.pause();
          
      }
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Portfolio Section
    /*-----------------------------------------------------------------------------------*/
    
    $(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());

    $(window).on('resize', function(){ 

    $(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());

    });
    
    $('.portfolio .portfolio-boxes').on('mouseenter', function () {
        
        $(this).children('.bg-portfolio').children('img').attr('id', 'scale');
        
    });
    
    $('.portfolio .portfolio-boxes').on('mouseleave', function () {
        
        $(this).children('.bg-portfolio').children('img').removeAttr('id', 'scale');
        
    });
    
    $('.portfolio .portfolio-boxes').on('mouseenter', function () {
        
        $(this).children('.Overlay-portfolio').attr('id', 'bgop-portfolio');
        
    });
    
    $('.portfolio .portfolio-boxes').on('mouseleave', function () {
        
        $(this).children('.Overlay-portfolio').attr('id', 'bgop-portfolio');
        
    });

    /*-----------------------------------------------------------------------------------*/
    /*  Start Services Section
    /*-----------------------------------------------------------------------------------*/

    // vanilla JS
    // init with element
    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
      // options...
      itemSelector: '.grid-item'});

    // init with selector
    var msnry = new Masonry( '.grid', {
      // options...
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Freelance Section
    /*-----------------------------------------------------------------------------------*/
    
    $(".freelancer .container .freelance-overlay").width($(".freelancer .container .freelance-bg img").width());
    
    $(window).on('resize', function(){ 
        
        $(".freelancer .container .freelance-overlay").width($(".freelancer .container .freelance-bg img").width());
        
    }); 
    
})(jQuery);	

/*-----------------------------------------------------------------------------------*/
/*      * End  
/*-----------------------------------------------------------------------------------*/