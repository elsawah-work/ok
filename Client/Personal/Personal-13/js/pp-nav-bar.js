/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Maria - Responsive Personal Portfolio Template
 Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2018 - Maria - Responsive Personal Portfolio Template
===========================================================================
*/

(function($){
	"use strict";

	/* ---------------------------------------------- /*
	 * Menu toggleClass
	/* ---------------------------------------------- */
	var MenuToggle = $('.pp-toggle')
	MenuToggle.on("click", function(){
		$('body').toggleClass('pp-menu-open');
	});
	
	/* ---------------------------------------------- /*
	 * PagePiling NavBar
	/* ---------------------------------------------- */
	var PagePilingNav = $('#pagepiling');
	PagePilingNav.pagepiling({
		menu: '#pagepiling_menu',
		anchors: ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'contact'],
		sectionSelector: '.section-pp',
		verticalCentered: true,
	    navigation: {
	    	'position': 'left',
	   		'tooltips': ['الرئيسية', 'حولي', 'خدماتي', 'اعمالي', 'مقالاتي', 'اتصل بي']
	   	},
	    afterRender: function(){
	    	$('#pp-nav').addClass('custom');
	    },
	    afterLoad: function(anchorLink, index){
	    	if(index>1){
	    		$('#pp-nav').removeClass('custom');
	    	}else{
	    		$('#pp-nav').addClass('custom');
	    	}
	    }
	});

})(jQuery);