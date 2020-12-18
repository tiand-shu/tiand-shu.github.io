let drawrBtn = document.querySelector('.l-header__button');
let lMenu = document.querySelector('.l-menu');
let wrapper = document.querySelector('.wrapper');
let pageBody = document.querySelector('.is--drawerOpen');

drawrBtn.addEventListener('click',function(){
	lMenu.classList.toggle('l-menu--drawerOpen');
	drawrBtn.classList.toggle('active');
	wrapper.classList.toggle('drawerOpen');
	pageBody.classList.toggle('drawerOpen');
});

$(function() {
	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:1000,
		dots:true,
		slidesToShow: 4,
		slidesToScroll: 1,

		responsive: [{
			breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
			}
	},{
			breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					touchThreshold: 50,
					arrows: false,
					dots: false,
				}
			}
	]
	});
});
