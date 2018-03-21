(function($) {

	"use strict";

	/*
	|--------------------------------------------------------------------------
	| Template Name: TosreBiz
	| Author: ThemeMarch
	| Developer: Tamjid Bin Murtoza
	| Version: 1.0.0
	|--------------------------------------------------------------------------
	|--------------------------------------------------------------------------
	| TABLE OF CONTENTS:
	|--------------------------------------------------------------------------
	|
	| 1. Scripts initialization
	| 2. Preloader
	| 3. Primary Menu
	| 4. Scroll Function
	| 5. Section Active and Scrolling Animation
	| 6. Scroll Up
	| 7. Owl Carousel
	| 8. Portfolio
	| 9. Ripple
	| 10. Magnific Popup
	| 11. Ajax Contact Form
	|
	*/

	/*--------------------------------------------------------------
		1. Scripts initialization
	--------------------------------------------------------------*/

	$(window).on('load', function() {
		$(window).trigger("scroll");
		$(window).trigger("resize");
		preloaderSetup();
		portfolioMsSetup();
	});

	$(document).on('ready', function() {
		$(window).trigger("resize");
		primaryMenuSetup();
		mobileMenu();
		scrollAnimation();
		sectionActive();
		scrollUp();
		owlCarouselSetup();
		portfolioMsSetup();
		rippleSetup();
		magnificPopupSetup();
		contactForm();
		subscribeForm();
		new WOW().init();
		$(".player").YTPlayer();
		$('.parallax').parallax("50%", 0.3);
		$('.counter').tamjidCounter();
		$(".js-video-button").modalVideo();
	});

	$(window).on('resize', function() {
		mobileMenu();
		portfolioMsSetup();
		$(".full-height").css("height", $(window).height());
	});

	$(window).on('scroll', function() {
		scrollFunction();
	});


	/*--------------------------------------------------------------
		2. Preloader
	--------------------------------------------------------------*/

	function preloaderSetup() {

		$("body").imagesLoaded(function () {
	      $(".t-circle").fadeOut();
	      $("#preloader").delay(200).fadeOut("slow").remove();
	    });

	}

	/*--------------------------------------------------------------
		3. Primary Menu
	--------------------------------------------------------------*/
	
	function primaryMenuSetup() {

		$( ".primary-nav-list" ).before( "<div class='m-menu-btn'><span></span></div>" );

		$(".m-menu-btn").on('click', function(){
			$( this ).toggleClass( "m-menu-btn-ext" );
			$(this).siblings('.primary-nav-list').slideToggle("slow");
		});

		$( ".menu-item-has-children > ul" ).before( "<i class='fa fa-plus m-dropdown'></i>" );

		$('.m-dropdown').on('click', function() {
			$(this).siblings('ul').slideToggle("slow");
			$(this).toggleClass("fa-plus fa-minus")
		});


		$('.maptoggle').on('click', function() {
			$( this ).siblings('.google-map').toggleClass('map-toggle');
		});

	}

	function mobileMenu() {

		if ($(window).width() <= 983){  
			$('.primary-nav').addClass('m-menu').removeClass('primary-nav');
		} else {
			$('.m-menu').addClass('primary-nav').removeClass('m-menu');
		}

	}

	/*--------------------------------------------------------------
		4. Scroll Function
	--------------------------------------------------------------*/

	function scrollFunction() {

		var scroll = $(window).scrollTop();

		if(scroll >= 10) {
				$(".site-header").addClass("small-height");
			} else {
					$(".site-header").removeClass("small-height");
			}

		// For Scroll Up
		if(scroll >= 350) {
				$(".scrollup").addClass("scrollup-show");
			} else {
					$(".scrollup").removeClass("scrollup-show");
			}

	}

	/*--------------------------------------------------------------
		5. Section Active and Scrolling Animation
	--------------------------------------------------------------*/

	function scrollAnimation() {

		$('a:not(.portfolio-filter ul li a):not(.portfolio-item .item-inner)').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 30)
				}, 1250, 'easeInOutExpo');
				event.preventDefault();
		});

	}

	function sectionActive() {

		$('body').scrollspy({
			target: '.site-header',
			offset: 70
		});
	}


	/*--------------------------------------------------------------
		6. Scroll Up
	--------------------------------------------------------------*/

	function scrollUp() {

		$( "body" ).append( "<span class='scrollup'></span>" );

		$('.scrollup').on('click', function(e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 1000);
		});

	}

	/*--------------------------------------------------------------
		7. Owl Carousel
	--------------------------------------------------------------*/

	function owlCarouselSetup() {

		/* Owl Carousel For hero-slider */
	    $('.hero-slider').owlCarousel({
	        items: 1,
            animateOut: 'fadeOut',
            loop: true,
            nav: true,
            navText: ['<i class="s-left-angle"></i>','<i class="s-right-angle"></i>'],
            autoplay: false      
        });

        /* Owl Carousel For Services */
		$('.service-curosor').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            navText:['', ''],
            autoplay:false,
            smartSpeed:600,
            autoplayTimeout:2500,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                991:{
                    items:3
                }
            }
        });

        /* Owl Carousel For Services */
		$('.member-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            navText:['', ''],
            autoplay:false,
            smartSpeed:600,
            autoplayTimeout:2500,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                991:{
                    items:3
                }
            }
        });

        /* Owl Carousel For Client Logo */
		$('.client-logo-curosor').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            smartSpeed:600,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:2
                },
                575:{
                    items:3
                },
                767:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        });

        /* Owl Carousel For Testimonial-1 */
        $('.testimonial-1').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            nav: true,
            navText: ['<','>'],
            autoplayHoverPause: false,
            smartSpeed: 1000,
            autoplayTimeout: 3000     
        });

        /* Owl Carousel For Testimonial-2 */
        $('.testimonial-2').owlCarousel({
        	items: 1,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            nav: true,
            navText: ['<','>']    
        });

        /* Owl Carousel For Testimonial-3 */
        $('.testimonial-3').owlCarousel({
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            nav: true,
            navText: ['<','>']      
        });

        /* Owl Carousel For Blog Post Carousel */
	    $('.blog-post-carousel').owlCarousel({
	        items: 1,
            animateOut: 'fadeOut',
            loop: true,
            nav: true,
            navText: ['',''],
            autoplay: false      
        });

	}

	/*--------------------------------------------------------------
		8. Portfolio
	--------------------------------------------------------------*/

	function portfolioMsSetup() {

		$('.portfolio').isotope({
			itemSelector: '.portfolio-item',
			transitionDuration: '0.60s',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});

		/* Active Class of Portfolio*/
		$('.portfolio-filter ul li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
				event.preventDefault();
		});

		/*=== Portfolio filtering ===*/
		$('.portfolio-filter ul').on('click', 'a', function() {
			var filterElement = $(this).attr('data-filter');
			$(this).parents(".portfolio-filter").next().isotope({
				filter: filterElement
			});
		});

	}

	/*--------------------------------------------------------------
		9. Ripple
	--------------------------------------------------------------*/

	function rippleSetup() {

		$('.ripple-version').ripples({
			resolution: 500,
	        perturbance: 0.04
		});
		
	}

  	/*--------------------------------------------------------------
   		10. Magnific Popup
  	--------------------------------------------------------------*/

  	function magnificPopupSetup() {

	    $('.zoom-gallery').magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        closeOnContentClick: false,
	        closeBtnInside: false,
	        mainClass: 'mfp-with-zoom mfp-img-mobile',
	        gallery: {
	            enabled: true
	        },
	        zoom: {
	            enabled: true,
	            duration: 300, // don't foget to change the duration also in CSS
	            opener: function(element) {
	                return element.find('img');
	            }
	        }
	        
	    });
	    
  	}

	/*--------------------------------------------------------------
		11. Ajax Contact Form
	--------------------------------------------------------------*/

	function contactForm() {

		$('.cf-msg').hide();
	    $('form#cf button#submit').on('click', function() {
	        var name = $('#name').val();
	        var subject = $('#subject').val();
	        var email = $('#email').val();
	        var msg = $('#msg').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if (!regex.test(email)) {
				$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please Enter Valied Email.</div>');
				return false;
			}

	        name = $.trim(name);
	        subject = $.trim(subject);
	        email = $.trim(email);
	        msg = $.trim(msg);

	        if (name != '' && email != '' && msg != '') {
	            var values = "name=" + name + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
	            $.ajax({
	                type: "POST",
	                url: "php/mail.php",
	                data: values,
	                success: function() {
	                    $('#name').val('');
	                    $('#subject').val('');
	                    $('#email').val('');
	                    $('#msg').val('');

	                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
	                    setTimeout(function() {
	                        $('.cf-msg').fadeOut('slow');
	                    }, 4000);
	                }
	            });
	        } else {
				$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> All fields are required.</div>');
	        }
	        return false;
	    });

	}

	function subscribeForm() {

		$('.cf-msg1').hide();
	    $('form#cf1 button#submit1').on('click', function() {
	        var subscribe = $('#subscribe').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if (!regex.test(subscribe)) {
				$('.cf-msg1').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please Enter Valied Email.</div>');
				return false;
			}

	        subscribe = $.trim(subscribe);

	        if ( subscribe != '' ) {
	            var values = "&subscribe=" + subscribe;
	            $.ajax({
	                type: "POST",
	                url: "php/subscribe.php",
	                data: values,
	                success: function() {
	                    $('#subscribe').val('');

	                    $('.cf-msg1').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
	                    setTimeout(function() {
	                        $('.cf-msg1').fadeOut('slow');
	                    }, 4000);
	                }
	            });
	        } else {
				$('.cf-msg1').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> All fields are required.</div>');
	        }
	        return false;
	    });

	}
	 
})(jQuery); // End of use strict
