'use strict';

( function (){
	const swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	const messageList = document.querySelector('.auction-list-bet');
	messageList.scrollTo(0, messageList.scrollHeight);


})();
