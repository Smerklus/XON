console.log('Hi')

var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
    console.log(scroll)
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
