$(document).ready(function() {


	$('.readmore').click(function() {
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('#show-this-on-click').show();
		$('.readmore').hide();
		$('.readless').show();
	});

	$('.readless').click(function() {
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
		$('.readless').hide();
	});

	$('.learnmore').click(function() {
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();

	});
});