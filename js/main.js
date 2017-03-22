/*
	Appsy Theme Scripts
*/
(function($){ "use strict";

/*=========================================================================
        Preloader
=========================================================================*/
    $(window).on('load', function() {
        $('#preloader').addClass('loaded');
    });

/*=========================================================================
    	Sticky Header
=========================================================================*/ 
$(function() {
    var header = $("#header"),
        yOffset = 0,
        triggerPoint = 100;
    $(window).on( 'scroll', function() {
        yOffset = $(window).scrollTop();

        if (yOffset >= triggerPoint) {
        	header.removeClass("animated fadeIn");
            header.addClass("navbar-fixed-top animated fadeInDown");
        } else {
            header.removeClass("navbar-fixed-top animated fadeInDown");
            header.addClass("animated fadeIn");
        }

    });
});
			
/*=========================================================================
        ScreenShot Carousel
=========================================================================*/ 
    function getSlide() {
        var wW = $(window).width();
        if (wW < 601) {
            return 1;
        }
        return 3;
    }
  
    var mySwiper = $('.screen_carousel').swiper({
  
        mode:'horizontal',
        loop: true,
        speed: 1000,
        autoplay: 1000,
        effect: 'coverflow',
        slidesPerView: getSlide(),
        grabCursor: true,
        pagination: '.screen-pagination',
        paginationClickable: true,
        nextButton: '.arrow-right',
        prevButton: '.arrow-left',
        keyboardControl: true,
        coverflow: {
            rotate: 0,
            stretch: 90,
            depth: 200,
            modifier: 1,
            slideShadows : true
        }
    });

/*=========================================================================
        Testimonial Carousel
=========================================================================*/
    var testiSelector = $('#testimonial_carousel');
    testiSelector.owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false
    });

/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
             
/*=========================================================================
        Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
	
/*=========================================================================
        Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 1000
	});

/*=========================================================================
       AjaxChimp
=========================================================================*/ 

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369" 
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };


/*=========================================================================
  Scroll To Top
=========================================================================*/ 
	var body = $('body'),
	scroltoSelector = $('#scroll-to-top');
	$(window).on('scroll', function() {   
		if ( body.scrollTop() > 150 ) {
			// If page is scrolled more than 150px
			scroltoSelector.fadeIn(200);    // Fade in the arrow
		} else {
			scroltoSelector.fadeOut(200);   // Else fade out the arrow
		}
	});

/*=========================================================================
       WOW Active
=========================================================================*/
    new WOW({
        offset: 0,
        mobile: false
    }).init();

})(jQuery);

								
