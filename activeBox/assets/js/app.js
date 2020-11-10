
$(function() {

	// FIXED HEADER
	
	let header = $("#header"),
		headerH,
		nav = $("#nav"),
		navToggle = $("#navToggle"),
		scrollPosition = $(window).scrollTop();

	$(window).on('scroll load resize', function() {

		headerH = header.innerHeight();
		scrollPosition = $(this).scrollTop();

		if ( scrollPosition >  headerH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	});


	// SMOOTH SCROLL

	$("[data-scroll]").on("click", function(e) {

		e.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop : elementOffset - 57
		}, 1000);

	});


	// BURGER MENU

	$(navToggle).on('click', function(e) {

		e.preventDefault();

		nav.toggleClass("show");
	}); 


	// REVIEWS : https://kenwheeler.github.io/slick/

	let slider = $("#reviewsSlider");

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true,
	});
	

});