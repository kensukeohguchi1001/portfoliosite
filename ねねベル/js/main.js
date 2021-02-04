var mySwiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

$(function(){

	$(document).ready(function(){
		$('.top').fadeIn(5000);
	});
	 
	$(document).ready(function(){
		$('.top-main-title').slideDown(4000);
	});
	$(document).ready(function(){
		$('.top-sub-title').slideDown(4000);
	});
	 




});