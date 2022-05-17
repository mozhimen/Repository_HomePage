(function($) {
	
	"use strict";

	// Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 3000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				800:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});    		
	}
	
	// Gallery Carousel1
	if ($('.gallery-carousel1').length) {
		$('.gallery-carousel1').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 400,
			autoplay: 2000,
			navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:5
				}
			}
		});    		
	}

})(window.jQuery);