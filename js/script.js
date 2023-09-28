$(function() {


	$(window).scroll(function() {
		window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
		if(!window.isMobile ) {
			if ($(this).scrollTop() > 45) {
				$('.header').addClass("header-small")
			} else {
				$('.header').removeClass("header-small")
			}
		}

	});

	//Detect browser
	var db = navigator.userAgent.toLowerCase();
	if (db.indexOf('safari') != -1) {
		if (db.indexOf('chrome') > -1) {
			// Chrome
		} else {
			// Safari
			$('head').append('<link rel="stylesheet" type="text/css" href="css/safari.css">');
		}
	}

	$(".smallMenu-icon").on("click touchstart", function(e){
		$(this).toggleClass('smallMenu-icon--active');
		$('.mobileNavigation-bg').toggleClass('active');
		$('body').toggleClass('no-scroll');

		// When touch event fires, this is needed to prevent the click
		// event from firing as well as @RyanWheale noted in the comments.
		e.preventDefault();
		e.stopPropagation();
	});
	$(".mobileNavigationList-item").on('click touch', function(e) {
		$(this).toggleClass("active");
	});
	$(".mobileNavigationList-item").on('click touch', function(e){
		$(this).children('div.mobileNavigation__wrapper').addClass("active");
		e.preventDefault();
	}, function(e){
		$(this).children('div.mobileNavigation__wrapper').removeClass("active");
	});


	$(window).scroll(function(){
		var header = $('.header'),
			scroll = $(window).scrollTop();

		if (scroll >= 45) header.addClass('header-fixed');
		else header.removeClass('header-fixed');
	});

});


// ------------------------------------ animation on scroll start-------------------------------------------




$(function() {
	AOS.init();
});



function setActive() {
	let aObj = document.getElementById('nav').getElementsByTagName('a');
	for(let i=0;i<aObj.length;i++) {
		if(document.location.href.indexOf(aObj[i].href)>=0) {
			aObj[i].className='active-link';
		}
	}
}

setActive();



$(function () {
	setTimeout(function() {
		$('.loading-wrapper').addClass('hide');
	},1000);
});







