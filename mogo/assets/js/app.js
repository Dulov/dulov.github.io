$(function() {
	
	let header = $('#header'),
	headerH = $('#header').innerHeight(),
	scrollOffset = 0;

	checkScroll();

	$(window).on('scroll', function() {

		checkScroll();

	});


	function checkScroll() {

		scrollOffset = $(this).scrollTop();

		if ( scrollOffset >= headerH ) {

			header.addClass('fixed');

		} else {

			header.removeClass('fixed');

		}


		let elements = $('[data-scroll]'),
			idArray = [],
			elementsArray = [];

		elements.each(function(i, el) {

			idArray.push($(el).data('scroll').slice(1));
			
			elementsArray.push(document.getElementById(idArray[i]))

		});
		

		$(elementsArray).each(function(i, el) {

	        let top  = $(el).offset().top;

	        let bottom = top + $(el).height();

	        let scroll = $(window).scrollTop();

	        let id = $(el).attr('id');

		    if ( scroll > top && scroll < bottom) {

	            $('a.active').removeClass('active');

				$('a[data-scroll="#'+id+'"]').addClass('active');

	        }
    	});
		
	};


	$('[data-scroll]').on('click', function(e) {

		e.preventDefault();


		let $this = $(this),
		blockId = $this.data('scroll'),
		blockOffset = $(blockId).offset().top;

		upgradeBlockOffset = blockOffset - headerH + 10;

		$('html, body').animate({
			scrollTop: upgradeBlockOffset
		}, 1000);

		$('#nav a').removeClass('active');
		$this.addClass('active');

		$('#nav').removeClass('active');
		$('#nav_toggle').removeClass('active');

	});

	$('#nav_toggle').on('click', function(e) {

		e.preventDefault();

		$('#nav').toggleClass('active');
		$(this).toggleClass('active');

	});

	$('[data-collapse]').on('click', function(e) {

		e.preventDefault();

		let $this = $(this),
		blockId = $this.data('collapse');

		$this.toggleClass('active');
	
	});

	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});

});