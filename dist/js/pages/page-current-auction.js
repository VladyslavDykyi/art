'use strict';

( function (){
	const swiper = new Swiper(".mySwiper1", {
		slidesPerView: 1,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
})()